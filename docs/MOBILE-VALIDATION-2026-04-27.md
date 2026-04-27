# Mobile Validation · Amazônia Real · 2026-04-27

**Onda 5 · Playwright headless Chromium · 4 devices · Local + Online**

## Resumo executivo

| Device | Viewport | HTTP | Errors | Overflow | 35 cards | Conclusão 4/5/6 | Exército f/g | Veredito |
|---|---|---|---|---|---|---|---|---|
| iPhone 12 | 390×844 (DPR 3) | 200 | 0 real | False | 35 | ✓✓✓ | ✓✓ | **PASS** |
| iPhone SE | 375×667 (DPR 2) | 200 | 0 real | False | 35 | ✓✓✓ | ✓✓ | **PASS** |
| Pixel 5 | 393×851 (DPR 3) | 200 | 0 real | False | 35 | ✓✓✓ | ✓✓ | **PASS** |
| iPad Air | 820×1180 (DPR 2) | 200 | 0 real | False | 35 | ✓✓✓ | ✓✓ | **PASS** |

## Cenários testados

### Run 1 · Versão online (`https://brasildesenhado.org.br:8479`)
Ainda **versão antiga** (deploy ainda não feito). Validou:
- Layout responsivo geral
- Chart.js renderiza nos 4 devices
- 35 concept cards via `data.js`
- Zero console errors / warnings
- Sem horizontal overflow

Como a versão online ainda é antiga, os checks da Onda 2 (badges 19+35, pontos 4-5-6, exército f/g) retornam False — comportamento esperado.

### Run 2 · Versão nova local (`http://localhost:8765` via `python -m http.server`)
Validou as alterações da Onda 2:
- Badges `19 papers` + `35 conceitos` ✓ em todos os 4 devices
- Conclusão geral ponto (4) processo de generalização ✓
- Conclusão geral ponto (5) paradoxo hidráulico ✓
- Conclusão geral ponto (6) "14 anos é piso, não teto" ✓
- Exército item (f) árvores grandes core asset ✓
- Exército item (g) ★★ TRANSPORTE FLUVIAL MILITAR ✓
- Footer com "19 publicações de alto nível" ✓
- 35 concept cards renderizam ✓
- Sem horizontal overflow ✓

## Console errors

### Run 1 (online · versão antiga)
**Zero errors / warnings** em todos os 4 devices.

### Run 2 (local · versão nova)
1 erro por device · **falso positivo de ambiente**:
```
Failed to load resource: 501 (Unsupported method ('POST'))
```

**Análise:** `python -m http.server` é um servidor read-only que não atende `POST`. O `js/access-tracking.js` faz `POST /api/log_access.php` na primeira carga (analytics interno).
Em produção (`:8479`), o handler PHP atende e o POST passa silenciosamente — confirmado pelo Run 1 com zero erros.
**Não é bug do app.** Após deploy ao EC2, o erro desaparece.

## Screenshots gerados

Pasta `~/amazonia-real/screenshots-mobile-2026-04-27/` (versão online · versão antiga):
- `{device}-top.png` · hero
- `{device}-conclusao.png` · conclusão geral
- `{device}-exercito.png` · seção Exército
- `{device}-fullpage.png` · página inteira

Pasta `~/amazonia-real/screenshots-mobile-local-2026-04-27/` (versão nova local):
- mesma estrutura, com conteúdo Onda 2 completo

## Validação visual humana (necessária após deploy)

Sergio deve abrir no iPhone real e checar:
1. Hero não corta o título
2. Badges quebram em linhas sem desalinhar
3. Stats grid 2×2 ou 1×4 sem corte
4. Sumário scroll horizontal, se necessário, sem quebrar grid
5. Cards `.concept` legíveis com tamanho de fonte adequado
6. Charts (timeline + tier) renderizam sem cortes
7. Conclusão pontos (4)(5)(6) com numeração visível
8. Exército items (f)(g) com formatação consistente

## Métricas de page weight (informativo)

Página HTML carregada: ~23 KB (gzipped esperado <10 KB)
`data.js` (35 conceitos + 19 papers): 56 KB (gzipped ~12 KB)
`render.js` + `charts.js` + `access-tracking.js`: ~8 KB total
Hero image: 329 KB (poderia ser otimizada para WebP ~150 KB)
Chart.js CDN: ~80 KB gzipped
**Total transfer estimado:** ~480 KB sem CDN cache

## Veredito final

✅ Mobile validation **PASS** em 4 devices.
✅ Versão nova (Onda 2) está pronta para deploy.
✅ Layout responsivo, sem overflow, sem console errors reais.

Aguardando outra janela terminar hardening do vhost `:8479` para deploy único final + re-audit CSP esperando 12/0/0.
