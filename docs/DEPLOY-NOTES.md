# Deploy Notes — Amazonia Real

- **Public URL:** https://brasildesenhado.org.br:8479/
- **Direct IP:**  https://3.23.179.89:8479/
- **Repo:**       https://github.com/AKVAHIPO/amazonia-real
- **Supabase V3:** project `vtngduopaylggivivtfx` · 5 tables (`amazon_analysis_*` + `amazon_access_log`) · RLS enabled
- **Source paper:** Maracahipes et al. 2026 PNAS · DOI 10.1073/pnas.2532833123

## Smoke test (verified 2026-04-26)

| Endpoint                                     | HTTP |
|---|---|
| `/`                                          | 200  |
| `/images/seed-estadao-2026-04-26.jpg`        | 200  |
| `/js/data.js`                                | 200  |
| `/js/render.js`                              | 200  |
| `/js/charts.js`                              | 200  |
| `/api/log_access.php` (GET)                  | 405  |
| `/api/log_access.php` (POST beacon)          | 204  |
