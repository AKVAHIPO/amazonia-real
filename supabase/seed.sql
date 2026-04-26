-- AMAZONIA REAL · Seed data (PT-BR content, English columns)
-- Run AFTER schema.sql

BEGIN;

-- Reset (idempotent)
TRUNCATE amazon_analysis_sources, amazon_analysis_concepts, amazon_analysis_groups, amazon_analysis_papers RESTART IDENTITY CASCADE;

-- Groups
INSERT INTO amazon_analysis_groups (slug, title_pt, summary_pt, sort_order) VALUES
('tipping-point',    'A · Tipping Point e Savanização — Modelo vs. Empíria',         'O paper PNAS NÃO desmente o ponto de não retorno; refina-o.', 1),
('tanguro',          'B · Desenho Experimental Tanguro — Validade, Escala, Limites', 'Experimento raro e valioso, mas validade externa limitada.',  2),
('bordas',           'C · Bordas vs. Interior — O Efeito Espacial',                  'Bordas colapsam, interior aparenta estabilidade.',            3),
('homogeneizacao',   'D · Homogeneização Ecológica — O Achado Central',              'Descoberta cientificamente mais relevante.',                  4),
('vulnerabilidades', 'E · Vulnerabilidades Persistentes',                            'Super El Niño, secas, fragmentação, defaunação.',             5),
('sociedade-defesa', 'F · Sociedade Brasileira, Soberania e Defesa',                 'Implicações para os 28 milhões de amazônidas e Forças Armadas.', 6);

-- Master papers registry
INSERT INTO amazon_analysis_papers (doi, title, authors, journal, year, url, key_finding_pt, journal_tier) VALUES
('10.1073/pnas.2532833123', 'Forest recovery pathways after fire, drought, and windstorms in southeastern Amazonia', 'Maracahipes et al.', 'PNAS', 2026, 'https://www.pnas.org/doi/abs/10.1073/pnas.2532833123', 'Em Tanguro (MT), com cessação de fogo em 2010, floresta recupera estrutura mas mostra homogeneização ecológica.', 'PNAS'),
('10.1038/s41586-023-06970-0', 'Critical transitions in the Amazon forest system', 'Flores et al.', 'Nature', 2024, 'https://www.nature.com/articles/s41586-023-06970-0', '10-47% da Amazônia exposta a distúrbios compostos até 2050. Três estados alternativos: white-sand savanna, dossel aberto, floresta degradada.', 'Nature'),
('10.1126/science.abp8622', 'The drivers and impacts of Amazon forest degradation', 'Lapola et al.', 'Science', 2023, 'https://www.science.org/doi/10.1126/science.abp8622', '38% da Amazônia já está degradada por fogo, borda, extração e seca extrema. Emissões equivalentes ao desmatamento.', 'Science'),
('10.1073/pnas.1305499111', 'Abrupt increases in Amazonian tree mortality due to drought-fire interactions', 'Brando et al.', 'PNAS', 2014, 'https://www.pnas.org/doi/10.1073/pnas.1305499111', 'No mesmo sítio Tanguro, ano de seca extrema causou mortalidade arbórea de 226-462%, com invasão de gramíneas exóticas.', 'PNAS'),
('10.1126/sciadv.aat2340', 'Amazon Tipping Point', 'Lovejoy & Nobre', 'Science Advances', 2018, 'https://www.science.org/doi/10.1126/sciadv.aat2340', 'Tipping point projetado em 20-25% de desmatamento sob aquecimento atual; transição para savana lenhosa similar ao Cerrado.', 'Science Advances'),
('10.1038/s41586-020-2035-0', 'Asynchronous carbon sink saturation in African and Amazonian tropical forests', 'Hubau et al.', 'Nature', 2020, 'https://www.nature.com/articles/s41586-020-2035-0', 'Sumidouro amazônico de carbono em declínio acelerado.', 'Nature'),
('10.1038/s41586-021-03629-6', 'Amazonia as a carbon source linked to deforestation and climate change', 'Gatti et al.', 'Nature', 2021, 'https://www.nature.com/articles/s41586-021-03629-6', 'Amazônia oriental tornou-se fonte de carbono desde 2010.', 'Nature'),
('10.5194/bg-22-5247-2025', 'Extensive fire-driven degradation in 2024 marks worst Amazon forest disturbance in over 2 decades', 'Bourgoin et al.', 'Biogeosciences', 2025, 'https://bg.copernicus.org/articles/22/5247/2025/', 'Degradação por fogo +400% em 2024; 791 ± 86 Mt CO₂ emitidos; pior perturbação em 2 décadas.', 'Biogeosciences'),
('10.1029/2026AV002309', 'The Growing Threat of Extreme Drought-Heat to the Amazon Carbon Sink', 'Liu et al.', 'AGU Advances', 2026, 'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026AV002309', 'Eventos compostos de seca-calor ameaçam progressivamente o sumidouro de carbono.', 'AGU Advances'),
('10.1073/pnas.2316924121', 'Critical slowing down of the Amazon forest after increased drought occurrence', 'Boulton et al.', 'PNAS', 2024, 'https://www.pnas.org/doi/10.1073/pnas.2316924121', 'Sinais de critical slowing down detectados em regiões com mais secas.', 'PNAS'),
('10.1073/pnas.1804559115', 'Tropical forest carbon balance affected by selective logging and fire', 'Berenguer et al.', 'PNAS', 2018, 'https://www.pnas.org/doi/10.1073/pnas.1804559115', 'Florestas degradadas perdem 40-60% do estoque de carbono.', 'PNAS'),
('10.1111/gcb.14413', 'Compositional response of Amazon forests to climate change', 'Esquivel-Muelbert et al.', 'Global Change Biology', 2019, 'https://onlinelibrary.wiley.com/doi/full/10.1111/gcb.14413', 'Mudança composicional em direção a espécies tolerantes à seca.', 'GCB'),
('10.1126/sciadv.1501105', 'Defaunation affects carbon storage in tropical forests', 'Bello et al.', 'Science Advances', 2015, 'https://www.science.org/doi/10.1126/sciadv.1501105', 'Defaunação compromete recuperação e estoque de carbono.', 'Science Advances'),
('10.4236/ajcc.2024.133026', 'The Drought of Amazonia in 2023-2024', 'Marengo et al.', 'Am. J. Climate Change', 2024, 'https://doi.org/10.4236/ajcc.2024.133026', 'Seca 2023-2024 quebrou recordes de 2010 e 2015-16.', 'AJCC');

-- Concepts (one per group, multiple)
-- Group A
INSERT INTO amazon_analysis_concepts (group_id, item_number, exact_quote_pt, quote_origin, critical_analysis_pt, partial_conclusion_pt) VALUES
((SELECT id FROM amazon_analysis_groups WHERE slug='tipping-point'), 'A1',
 'Embora as queimadas degradem parte das características da floresta, o bioma está longe de caminhar para a savanização.',
 'Estadão (lide)',
 'Generalização editorial. O paper afirma APENAS que em Tanguro (3 parcelas × 50 ha, Querência-MT), após cessação de fogo em 2010, gramíneas exóticas (braquiária, andropogon) recuaram com fechamento de dossel a partir de 2016, e espécies lenhosas de savana NÃO colonizaram, mesmo com Cerrado a 5 km. Convergente com o Plano Científico para a Amazônia (SPA AR2025) que aponta heterogeneidade regional e tipping point regional, mais provável no arco sul-sudeste — exatamente onde Tanguro está.',
 'A boa notícia é local e condicional. Não autoriza dizer "Amazônia longe da savanização" como manchete. Não invalida o mecanismo de savanização hidrológica modelado por Carlos Nobre.'),
((SELECT id FROM amazon_analysis_groups WHERE slug='tipping-point'), 'A2',
 'Há anos ganham força previsões apocalípticas... como um suposto ponto de não retorno, segundo o qual a densidade da vegetação da Amazônia cederia lugar às gramíneas, como o capim.',
 'Estadão',
 'Espantalho retórico. Tipping point original (Nobre & Sellers 1991, Lovejoy & Nobre 2018) prevê savanização HIDROLÓGICA — encurtamento dos rios voadores, alongamento da estação seca, transição para savana lenhosa tipo Cerrado ou floresta degradada de dossel aberto, NÃO capim tomando a Amazônia. O coautor Rafael Oliveira (UNICAMP) declarou: modelos foram úteis para alertar mas simplificaram os ecossistemas tropicais — crítica metodológica legítima, sem negar o risco.',
 'O paper PNAS não nega o tipping point — refina-o. A transição plausível é para floresta degradada/homogeneizada, não capim. É PIOR que o caricato: floresta empobrecida ainda parece floresta no satélite e na opinião pública.'),
((SELECT id FROM amazon_analysis_groups WHERE slug='tipping-point'), 'A3',
 'A hipótese mais radical só se confirmaria se houvesse a redução das espécies típicas da Amazônia e o aumento das espécies de savana. E não foi isso o que aconteceu.',
 'Estadão',
 'Falsa dicotomia. O paper mostra um TERCEIRO ESTADO: floresta com generalistas (madeira leve, casca fina, copa rápida) substituindo especialistas (madeira densa, longa vida, alto C). Não é savana, mas também não é a Amazônia funcional pré-distúrbio. Aguirre-Gutiérrez 2025: florestas tropicais americanas mudando, mas a apenas 8% da velocidade necessária para acompanhar o clima.',
 'Definição binária floresta-vs-savana é estrategicamente conveniente para a manchete, mas cientificamente obsoleta. O risco real é a degradação invisível.'),

-- Group B
((SELECT id FROM amazon_analysis_groups WHERE slug='tanguro'), 'B1',
 'Três parcelas de floresta: uma de controle... uma alvo do fogo anualmente, de 2004 a 2010; e uma parcela que foi incendiada a cada três anos, em 2004, 2007 e 2010.',
 'Estadão / paper PNAS',
 'Desenho excelente para teste mecanístico. Limitações: N=3 parcelas, sítio único (Tanguro/Querência-MT), borda voltada para soja Amaggi após 2007. Brando 2014 (mesmo sítio) mostrou mortalidade arbórea 226-462% em ano de seca extrema (2007).',
 'Continuação temporal do Brando 2014: depois que o fogo cessa em condições MT específicas, há recuperação parcial em 10-15 anos. Não autoriza extrapolar para Amazônia central, sítios sem cessação de fogo, ou super El Niño.'),
((SELECT id FROM amazon_analysis_groups WHERE slug='tanguro'), 'B2',
 'Em 2010. A partir daí, o fogo foi interrompido para que os pesquisadores pudessem avaliar a degradação e a recuperação das áreas.',
 'Estadão',
 'Cessação experimental do fogo é artificial. Na Amazônia REAL, 2024 teve 180.000 focos (148.000 só no Brasil), 98% antrópicos. Bourgoin 2025: degradação por fogo +400% em 2024; 791 ± 86 Mt CO₂.',
 'A boa notícia depende de uma condição que não se verifica no campo: cessação do fogo. O paper é teste de resiliência teórica, não retrato do cenário atual.'),
((SELECT id FROM amazon_analysis_groups WHERE slug='tanguro'), 'B3',
 'Diferentemente da maioria dos estudos de sensoriamento remoto sobre o fogo na Amazônia... a recente pesquisa conseguiu avaliar... o impacto sobre a biodiversidade no chão da floresta.',
 'Estadão',
 'Verdadeiro. Sensoriamento remoto subestima degradação por confundir dossel fechado com floresta funcional. Lapola 2023: 38% da Amazônia já degradada mas continua verde via satélite.',
 'A força metodológica é real: inventário no chão é raro e crucial. Mas REVELA degradação invisível, não autoriza a manchete.'),

-- Group C
((SELECT id FROM amazon_analysis_groups WHERE slug='bordas'), 'C1',
 'Nas bordas da floresta, houve a redução das espécies típicas da Amazônia e o aumento das espécies generalistas... árvores com casca fina, madeira leve e raízes superficiais.',
 'Estadão / paper PNAS',
 'Confirma 25 anos de literatura sobre edge effects (Laurance, Fearnside, Berenguer). Bordas penetram 100-300 m no interior; em paisagem fragmentada, interior desaparece. SPA AR2025 documenta área já fragmentada Pan-Amazônica majoritariamente borda funcional.',
 'Borda colapsando + interior estável é RUIM quando a Amazônia já é majoritariamente borda. Defender interior está bem é como dizer o tumor não chegou no fígado ainda.'),
((SELECT id FROM amazon_analysis_groups WHERE slug='bordas'), 'C2',
 'O capim até avançou, mas o posterior retorno das árvores, com suas copas, eliminou a luz de que as gramíneas precisam para progredir.',
 'Estadão / paper PNAS',
 'Mecanismo correto, MAS depende de ausência de re-ignição. Brando 2014: invasão de gramíneas amplifica a próxima queimada (feedback positivo fogo-gramínea-fogo).',
 'Conclusão honesta: o capim não dominou PORQUE o fogo cessou. Sem essa intervenção, literatura indica estado alternativo de gramínea-fogo travado.'),
((SELECT id FROM amazon_analysis_groups WHERE slug='bordas'), 'C3',
 'A biodiversidade no interior da floresta permaneceu relativamente estável.',
 'Estadão / paper PNAS',
 'Achado relevante MAS atenuado: mesmo nas parcelas controle (sem fogo) há mudança composicional por eventos naturais (ventania 2012, 2019; secas 2007, 2010, 2015-16). Esquivel-Muelbert 2019 documentou shift composicional para espécies tolerantes à seca em todo bioma.',
 'Interior estável é parcialmente verdade no inventário florístico, mas FUNCIONALMENTE o interior está esquentando, secando, aceitando exóticas. Interior é quase-borda em emergência climática.'),

-- Group D
((SELECT id FROM amazon_analysis_groups WHERE slug='homogeneizacao'), 'D1',
 'Incêndios frequentes causam a perda de biodiversidade e a homogeneização ecológica, principalmente nas bordas da floresta, mas não a savanização.',
 'Estadão / paper PNAS',
 'Maracahipes (release IPAM/FAPESP): floresta que aparenta ter se recuperado pode mascarar perdas debaixo do dossel. Substituição de especialistas (Cariniana, Hymenolobium, Bertholletia) por generalistas (Cecropia, Vismia) reduz estoque de carbono em 40-60% (Berenguer 2018).',
 'Esse é o achado central. Não é boa notícia — é má notícia mais sutil: Amazônia degradada continua verde mas perde função (clima, carbono, fauna, polinização, alimentos não-madeireiros indígenas).'),
((SELECT id FROM amazon_analysis_groups WHERE slug='homogeneizacao'), 'D2',
 'A Amazônia está se recuperando, mas, pensando na sua composição, é um processo que ainda vai levar muito mais tempo.',
 'Estadão (Maracahipes citado)',
 'Maracahipes refere-se a escalas de séculos (espécies de madeira densa: 200-400 anos para atingir biomassa pré-distúrbio). Vai levar muito mais tempo no jargão científico = horizonte muito além de Acordo de Paris.',
 'A janela útil para humanidade já passou mesmo se a recuperação ocorrer. Hubau 2020 (Nature): sumidouro amazônico em declínio acelerado.'),
((SELECT id FROM amazon_analysis_groups WHERE slug='homogeneizacao'), 'D3',
 'A presença de fauna local provou ser um fator importante na regeneração — mamíferos como antas e macacos e aves serviram como agentes-chave.',
 'Release IPAM/FAPESP (omitido pelo Estadão)',
 'Importante e omitido: regeneração depende de DISPERSORES. Bello 2015 (Sci Adv): defaunação reduz capacidade de estoque de carbono. Floresta defaunada parece ok no satélite, mas não regenera.',
 'A boa notícia SÓ vale onde existe fauna intacta. Em paisagens defaunadas (caça + fragmentação + tráfico), recuperação é muito mais lenta ou inviável.'),

-- Group E
((SELECT id FROM amazon_analysis_groups WHERE slug='vulnerabilidades'), 'E1',
 'É uma mensagem positiva, mas que exige cautela.',
 'Estadão (citação Maracahipes)',
 'A cautela no paper e no release IPAM/FAPESP é MUITO MAIS FORTE: Maracahipes alerta para super El Niño previsto até 2027, perda de fauna, fragmentação, e que áreas recuperadas são MAIS VULNERÁVEIS. Estação seca alongou 1 semana/década nos últimos 45 anos (SPA AR2025).',
 'Cautela no Estadão é footnote. No paper é conclusão central. Editorialmente, a manchete inverte o peso.'),
((SELECT id FROM amazon_analysis_groups WHERE slug='vulnerabilidades'), 'E2',
 'O Brasil deve seguir seu firme compromisso de combate ao desmatamento... agronegócio sustentável e responsável.',
 'Estadão (final)',
 'Boa em parte, mas se contradiz. PRODES 2024 mostrou queda no corte raso, mas degradação por fogo bateu RECORDE de 2 décadas (Bourgoin 2025). Tanguro está cercado por soja Amaggi.',
 'O Estadão usa o paper para legitimar política do agro que o próprio paper alerta ser parte do problema.'),
((SELECT id FROM amazon_analysis_groups WHERE slug='vulnerabilidades'), 'E3',
 'Triunfo da ciência sobre os exageros e as narrativas da militância.',
 'Estadão (final, editorial)',
 'Editorial puro — não consta no paper. Ataca cientistas como Carlos Nobre, Marengo, Gatti, Lovejoy, Flores que NUNCA disseram Amazônia vai virar campo de capim. Mais de 200 papers (2021-2025) convergem para risco real de tipping point regional. Maracahipes é colaborador IPAM — não é outro lado político.',
 'Falsa dicotomia ciência-vs-militância. O Estadão sequestra paper para narrativa política. Cientistas têm autoridade técnica para alertar a sociedade.'),

-- Group F (Sociedade e Defesa)
((SELECT id FROM amazon_analysis_groups WHERE slug='sociedade-defesa'), 'F1',
 'Cerca de 45% do vapor d''água que entra do Atlântico é exportado para fora da Amazônia pelos rios voadores — fornecendo quase 40% das chuvas no Sul do Brasil e ao menos 15% no Sudeste.',
 'Carlos Nobre · Bulletin of Atomic Scientists 2025',
 'Rios voadores transportam ~20 Gt/dia de vapor. Sustentam ~60% do PIB agrícola brasileiro (Centro-Sul). Homogeneização = especialistas com raízes profundas substituídos por generalistas com raízes superficiais = MENOS evapotranspiração = MENOS rios voadores.',
 'A recuperação celebrada pelo Estadão preserva carbono parcial (40-60% original) mas pode comprometer função hidrológica. Floresta que sequestra algum C mas falha em produzir chuva — o oposto do que o agro brasileiro precisa.'),
((SELECT id FROM amazon_analysis_groups WHERE slug='sociedade-defesa'), 'F2',
 'A Amazônia deve ser tratada como infraestrutura essencial para a segurança nacional, fornecendo serviços indispensáveis à vida — regulação climática, segurança hídrica, produção de alimentos e equilíbrio ecossistêmico.',
 'Centro Soberania e Clima · Esc. Sup. Defesa 2025',
 'Comando Militar da Amazônia (Gen Ricardo Augusto Ferreira Costa Neves) e Min. Defesa convergem em 2025: clima é segurança nacional. Operação Ágata Amazônia 2025 (APOENA) mobilizou 1.100 militares em 510.000 km². CENSIPAM (MD) integra defesa, ambiente e segurança pública. IPEAM/IME (Manaus) será criado para pesquisa em IA, quântica, transição energética e biotecnologia.',
 'O paper PNAS reforça — não enfraquece — a tese: floresta funcional é infraestrutura crítica. Floresta homogeneizada perde função hidrológica e biótica que sustenta operação de Forças Armadas em ambiente amazônico.'),
((SELECT id FROM amazon_analysis_groups WHERE slug='sociedade-defesa'), 'F3',
 'Operação Ágata Amazônia 2025 — Comando APOENA — mobilizou 1.100 militares em 510.000 km² para manter a soberania e intensificar a presença do Estado na faixa de fronteira.',
 'Agência Gov · Min. Defesa 2025',
 'Estação seca alongando significa: (a) janela operacional para deslocamento fluvial ENCURTA; (b) fogo descontrolado consome corredores logísticos; (c) defaunação reduz subsistência de patrulhas remotas; (d) homogeneização altera microclimas e capacidade de cobertura. Super El Niño 2026-27 amplifica.',
 'O paper PNAS é leitura obrigatória para planejamento operacional do CMA, CENSIPAM e EME. Não é assunto ambiental — é doutrina de defesa em ambiente em transformação acelerada.');

-- Sources (selected key links per concept — abbreviated to keep insert manageable)
INSERT INTO amazon_analysis_sources (concept_id, journal, paper_title, authors, year, doi, url, journal_tier, relation_type) VALUES
((SELECT id FROM amazon_analysis_concepts WHERE item_number='A1'), 'PNAS',   'Forest recovery pathways at Tanguro', 'Maracahipes et al.', 2026, '10.1073/pnas.2532833123', 'https://www.pnas.org/doi/abs/10.1073/pnas.2532833123', 'PNAS', 'paper-base'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='A1'), 'Nature', 'Critical transitions in the Amazon forest system', 'Flores et al.', 2024, '10.1038/s41586-023-06970-0', 'https://www.nature.com/articles/s41586-023-06970-0', 'Nature', 'contraponto'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='A2'), 'Science Advances', 'Amazon Tipping Point', 'Lovejoy & Nobre', 2018, '10.1126/sciadv.aat2340', 'https://www.science.org/doi/10.1126/sciadv.aat2340', 'Science Advances', 'fundamento'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='A3'), 'Science', 'Drivers and impacts of Amazon forest degradation', 'Lapola et al.', 2023, '10.1126/science.abp8622', 'https://www.science.org/doi/10.1126/science.abp8622', 'Science', 'contraponto'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='A3'), 'Nature', 'Amazonia as a carbon source', 'Gatti et al.', 2021, '10.1038/s41586-021-03629-6', 'https://www.nature.com/articles/s41586-021-03629-6', 'Nature', 'contraponto'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='B1'), 'PNAS',   'Abrupt tree mortality at Tanguro', 'Brando et al.', 2014, '10.1073/pnas.1305499111', 'https://www.pnas.org/doi/10.1073/pnas.1305499111', 'PNAS', 'mesmo-sitio'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='B2'), 'Biogeosciences', 'Fire-driven degradation 2024 worst in 2 decades', 'Bourgoin et al.', 2025, '10.5194/bg-22-5247-2025', 'https://bg.copernicus.org/articles/22/5247/2025/', 'Biogeosciences', 'contraponto-recente'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='B2'), 'AGU Advances', 'Drought-Heat threat to Amazon C sink', 'Liu et al.', 2026, '10.1029/2026AV002309', 'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026AV002309', 'AGU Advances', 'contraponto-recente'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='C1'), 'PNAS',   'Tropical forest degradation', 'Berenguer et al.', 2021, '10.1073/pnas.2019377118', 'https://www.pnas.org/doi/10.1073/pnas.2019377118', 'PNAS', 'fundamento'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='C3'), 'PNAS',   'Critical slowing down of Amazon', 'Boulton et al.', 2024, '10.1073/pnas.2316924121', 'https://www.pnas.org/doi/10.1073/pnas.2316924121', 'PNAS', 'contraponto'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='D1'), 'PNAS',   'Carbon loss in degraded forests', 'Berenguer et al.', 2018, '10.1073/pnas.1804559115', 'https://www.pnas.org/doi/10.1073/pnas.1804559115', 'PNAS', 'fundamento'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='D2'), 'Nature', 'Amazon C sink declining', 'Hubau et al.', 2020, '10.1038/s41586-020-2035-0', 'https://www.nature.com/articles/s41586-020-2035-0', 'Nature', 'contraponto'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='D3'), 'Science Advances', 'Defaunation reduces carbon storage', 'Bello et al.', 2015, '10.1126/sciadv.1501105', 'https://www.science.org/doi/10.1126/sciadv.1501105', 'Science Advances', 'fundamento'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='E1'), 'AJCC',   'Drought of Amazonia 2023-2024', 'Marengo et al.', 2024, '10.4236/ajcc.2024.133026', 'https://doi.org/10.4236/ajcc.2024.133026', 'AJCC', 'contexto'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='F1'), 'Bulletin', 'Carlos Nobre on Amazon tipping', 'Nobre C.', 2025, '', 'https://thebulletin.org/premium/2025-03/carlos-nobre-on-tipping-points-in-the-amazon-rainforest/', 'Bulletin', 'fundamento'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='F2'), 'EB',     'IME e CENSIPAM parceria estratégica', 'Exército Brasileiro', 2025, '', 'https://eblog.eb.mil.br/en/w/ime-e-censipam-parceria-estrat%C3%A9gica-para-a-prote%C3%A7%C3%A3o-e-o-desenvolvimento-sustent%C3%A1vel-da-amaz%C3%B4nia', 'EB', 'fundamento'),
((SELECT id FROM amazon_analysis_concepts WHERE item_number='F3'), 'MD',     'Operação Ágata Amazônia 2025', 'Min. Defesa', 2025, '', 'https://agenciagov.ebc.com.br/noticias/202505/operacao-e-desencadeada-para-a-defesa-da-amazonia', 'MD', 'fundamento');

COMMIT;
