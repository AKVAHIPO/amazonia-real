// AMAZONIA REAL — Beacon de origem (sem cookies, sem fingerprint pesado)
// Apenas envia path acessado e referrer. IP é obtido server-side.
(function () {
  try {
    const payload = {
      path: location.pathname + location.hash,
      ref: document.referrer || '',
      ts: Date.now()
    };
    const body = new Blob([JSON.stringify(payload)], { type: 'application/json' });
    if (navigator.sendBeacon) {
      navigator.sendBeacon('api/log_access.php', body);
    } else {
      fetch('api/log_access.php', { method: 'POST', body, keepalive: true }).catch(() => {});
    }
  } catch (e) { /* fail-silent */ }
})();
