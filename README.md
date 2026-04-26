# Amazonia Real

**Critical analysis of Maracahipes et al. 2026 PNAS** — 20-year fire experiment at Tanguro (Querência-MT) — confronted with high-tier literature (Nature, Science, AGU, Biogeosciences, 2014–2026).

> Frontend in PT-BR. Schema and code in English. Public app, no auth, IP-origin analytics.

## Structure

```
amazonia-real/
├── app/                       Public web app (deploys to EC2 :8479)
│   ├── index.html             Hero with Estadão seed image + 6 themed groups
│   ├── css/style.css          Light theme, mobile-first, responsive
│   ├── js/data.js             Single source of truth (groups + concepts + papers)
│   ├── js/render.js           DOM render of groups
│   ├── js/charts.js           Chart.js timeline + tier doughnut
│   ├── js/access-tracking.js  Anonymous beacon
│   ├── api/log_access.php     Server-side IP logger → Supabase
│   └── images/                Estadão seed + assets
├── desktop/                   Self-contained HTML (zero JS, base64 images)
├── docs/                      Markdown analysis (criticism + Army note)
├── supabase/                  schema.sql + seed.sql (V3, English schema)
└── deploy/                    Apache vhost + Admin Central registration
```

## Public deployment

- URL: `https://brasildesenhado.org.br:8479`
- Listed on the Admin Central (private) as "Amazônia Real"
- Public, no password — but every access is logged (IP, country, region, ISP, hashed user-agent) for analytics

## Source paper

- Maracahipes L., Brando P., Oliveira R. et al. *Forest recovery pathways after fire, drought, and windstorms in southeastern Amazonia.* PNAS 123(17), 2026. DOI: [10.1073/pnas.2532833123](https://www.pnas.org/doi/abs/10.1073/pnas.2532833123)

## License

Public-domain analysis built with the help of multiple AIs. No private data, no commercial use intended.
