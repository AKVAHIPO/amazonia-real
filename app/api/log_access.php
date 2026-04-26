<?php
// AMAZONIA REAL — Server-side access logger (origem IP, sem auth)
// Tabela destino: amazon_access_log no Supabase V3
// Privacidade: NÃO armazena cookies, NÃO armazena user-agent cru (apenas hash sha256 truncado)
// Geolocalização IP: lookup local (offline) ou via cabeçalho geo do Apache se disponível

declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST')   { http_response_code(405); exit; }

// === 1) Read payload ===
$raw  = file_get_contents('php://input') ?: '{}';
$json = json_decode($raw, true) ?: [];
$path = isset($json['path']) ? substr((string)$json['path'], 0, 200) : '/';
$ref  = isset($json['ref'])  ? substr((string)$json['ref'],  0, 300) : '';

// === 2) Resolve client IP behind reverse proxy ===
function client_ip(): string {
  $candidates = [];
  foreach (['HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'REMOTE_ADDR'] as $k) {
    if (!empty($_SERVER[$k])) {
      foreach (explode(',', (string)$_SERVER[$k]) as $part) {
        $ip = trim($part);
        if (filter_var($ip, FILTER_VALIDATE_IP)) $candidates[] = $ip;
      }
    }
  }
  return $candidates[0] ?? '0.0.0.0';
}
$ip = client_ip();

// === 3) Lightweight UA hash (privacy-preserving) ===
$uaRaw  = $_SERVER['HTTP_USER_AGENT'] ?? '';
$uaHash = substr(hash('sha256', $uaRaw . '|amazonia-real-salt'), 0, 16);

// === 4) Geo enrichment (Apache mod_geoip headers if present, else null) ===
$country = $_SERVER['GEOIP_COUNTRY_CODE']    ?? null;
$region  = $_SERVER['GEOIP_REGION']          ?? null;
$city    = $_SERVER['GEOIP_CITY']            ?? null;
$isp     = $_SERVER['GEOIP_ORGANIZATION']    ?? null;

// === 5) Write to local rolling log (always) ===
$row = [
  'ts'      => gmdate('c'),
  'ip'      => $ip,
  'country' => $country,
  'region'  => $region,
  'city'    => $city,
  'isp'     => $isp,
  'ua_hash' => $uaHash,
  'ref'     => $ref,
  'path'    => $path
];
$logFile = __DIR__ . '/../../logs/access.jsonl';
@mkdir(dirname($logFile), 0775, true);
@file_put_contents($logFile, json_encode($row, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND);

// === 6) Forward to Supabase V3 (best-effort, async-style with short timeout) ===
$secretsFile = '/etc/orion-secrets/SUPABASE_V3_ANON_KEY';
$projectUrl  = 'https://vtngduopaylggivivtfx.supabase.co/rest/v1/amazon_access_log';
if (is_readable($secretsFile)) {
  $anonKey = trim((string)@file_get_contents($secretsFile));
  if ($anonKey !== '') {
    $supabaseRow = [
      'ip_origin'       => $ip,
      'ip_country'      => $country,
      'ip_region'       => $region,
      'ip_city'         => $city,
      'ip_isp'          => $isp,
      'user_agent_hash' => $uaHash,
      'referrer'        => $ref,
      'path_accessed'   => $path
    ];
    $ch = curl_init($projectUrl);
    curl_setopt_array($ch, [
      CURLOPT_POST           => true,
      CURLOPT_POSTFIELDS     => json_encode($supabaseRow, JSON_UNESCAPED_UNICODE),
      CURLOPT_HTTPHEADER     => [
        'apikey: ' . $anonKey,
        'Authorization: Bearer ' . $anonKey,
        'Content-Type: application/json',
        'Prefer: return=minimal'
      ],
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_TIMEOUT_MS     => 700,
      CURLOPT_CONNECTTIMEOUT => 1
    ]);
    @curl_exec($ch);
    @curl_close($ch);
  }
}

http_response_code(204);
