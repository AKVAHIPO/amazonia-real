// AMAZONIA REAL — Dados estruturados (frontend + Desktop)
// Frontend em PT-BR. Schema dados em English (vide Supabase).
// Atualizado: 2026-04-26

window.AMAZONIA_DATA = {
  meta: {
    titulo: "Amazônia Real",
    subtitulo: "Análise científica crítica · Maracahipes et al. 2026 PNAS",
    semente: {
      veiculo: "Estadão",
      data: "2026-04",
      manchete: "Amazônia está longe da 'savanização'",
      imagem: "images/seed-estadao-2026-04-26.jpg",
      legenda: "A matéria do Estadão (semente desta análise) interpreta o paper PNAS de forma editorialmente enviesada. Reabrimos os achados originais à luz de Nature, Science, AGU e Biogeosciences."
    },
    paper_central: {
      titulo: "Forest recovery pathways after fire, drought, and windstorms in southeastern Amazonia",
      autores: "Maracahipes L., Brando P., Oliveira R. et al.",
      revista: "PNAS",
      volume: "Vol. 123, No. 17",
      data: "Abril 2026",
      doi: "10.1073/pnas.2532833123",
      url: "https://www.pnas.org/doi/abs/10.1073/pnas.2532833123",
      sitio: "Estação Tanguro · Querência-MT · 3 parcelas × 50 ha · 2004-2026"
    }
  },

  grupos: [
    {
      slug: "tipping-point",
      titulo: "A · Tipping Point e Savanização — Modelo vs. Empíria",
      resumo: "O paper PNAS NÃO desmente o ponto de não retorno; refina-o. A matéria do Estadão caricaturiza o conceito.",
      conceitos: [
        {
          n: "A1",
          quote: "Embora as queimadas degradem parte das características da floresta, o bioma está longe de caminhar para a 'savanização'.",
          origem: "Estadão (lide)",
          analise: "Generalização editorial. O paper afirma APENAS que em Tanguro (3 parcelas × 50 ha, Querência-MT) — após cessação de fogo em 2010 — gramíneas exóticas (braquiária, andropogon) recuaram com fechamento de dossel a partir de 2016, e espécies lenhosas de savana NÃO colonizaram, mesmo com Cerrado a 5 km. Conecta com o Plano Científico para a Amazônia (SPA AR2025) que aponta heterogeneidade regional e tipping point regional, mais provável no arco sul-sudeste — exatamente onde Tanguro está.",
          conclusao: "A boa notícia é local e condicional. Não autoriza dizer 'Amazônia longe da savanização' como manchete. A ausência de espécies de savana em 16 anos é um achado robusto, mas não invalida o mecanismo de savanização hidrológica modelado por Carlos Nobre.",
          fontes: [
            { tier:"PNAS",   titulo:"Maracahipes et al. 2026 — Forest recovery pathways", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" },
            { tier:"Nature", titulo:"Flores et al. 2024 — Critical transitions in the Amazon forest system", url:"https://www.nature.com/articles/s41586-023-06970-0" },
            { tier:"Annual Reviews", titulo:"Hirota et al. — Tipping Points: Beyond Myths", url:"https://www.annualreviews.org/content/journals/10.1146/annurev-environ-111522-112804" }
          ]
        },
        {
          n: "A2",
          quote: "Há anos ganham força previsões apocalípticas... como um suposto 'ponto de não retorno', segundo o qual a densidade da vegetação da Amazônia cederia lugar às gramíneas, como o capim.",
          origem: "Estadão",
          analise: "Espantalho retórico. O conceito original de Nobre & Sellers (1991) e Lovejoy & Nobre (2018) prevê savanização HIDROLÓGICA — encurtamento dos rios voadores, alongamento da estação seca, transição para SAVANA LENHOSA tipo Cerrado ou FLORESTA DEGRADADA DE DOSSEL ABERTO, NÃO 'capim tomando a Amazônia'. O próprio coautor Rafael Oliveira (UNICAMP) declarou: 'modelos foram úteis para alertar, mas simplificaram os ecossistemas tropicais' — crítica metodológica legítima, sem negar o risco.",
          conclusao: "O paper PNAS não nega o tipping point — refina-o. A transição plausível é para floresta degradada/homogeneizada, não para campo de gramíneas. Isso é PIOR que o caricato: uma floresta empobrecida e empoeirada ainda parece floresta no satélite e na opinião pública.",
          fontes: [
            { tier:"Science Advances", titulo:"Lovejoy & Nobre 2018 — Amazon tipping point", url:"https://www.science.org/doi/10.1126/sciadv.aat2340" },
            { tier:"Bulletin", titulo:"Carlos Nobre — Tipping points in the Amazon (2025)", url:"https://thebulletin.org/premium/2025-03/carlos-nobre-on-tipping-points-in-the-amazon-rainforest/" },
            { tier:"Carbon Brief", titulo:"Unprecedented stress in up to half of the Amazon by 2050", url:"https://www.carbonbrief.org/unprecedented-stress-in-up-to-half-of-the-amazon-may-lead-to-tipping-point-by-2050/" }
          ]
        },
        {
          n: "A3",
          quote: "A hipótese mais radical só se confirmaria se houvesse a redução das espécies típicas da Amazônia e o aumento das espécies de savana. E não foi isso o que aconteceu.",
          origem: "Estadão (Maracahipes parafraseado)",
          analise: "Falsa dicotomia. O próprio paper mostra um TERCEIRO ESTADO: floresta com generalistas (madeira leve, casca fina, copa rápida) substituindo especialistas (madeira densa, longa vida, alto estoque de C). Esse estado não é savana, mas também não é a Amazônia funcional pré-distúrbio. Convergente com Aguirre-Gutiérrez et al. 2025 — florestas tropicais americanas mudando, mas a apenas 8% da velocidade necessária para acompanhar o clima.",
          conclusao: "A definição binária floresta-vs-savana é estrategicamente conveniente para a manchete, mas cientificamente obsoleta. O risco real é a degradação invisível: dossel aparente + colapso de funções ecossistêmicas (chuva, carbono, polinização, fauna).",
          fontes: [
            { tier:"Science", titulo:"Lapola et al. 2023 — 38% da Amazônia já degradada", url:"https://www.science.org/doi/10.1126/science.abp8622" },
            { tier:"Nature",  titulo:"Gatti et al. 2021 — Amazônia oriental como fonte de carbono", url:"https://www.nature.com/articles/s41586-021-03629-6" },
            { tier:"Biogeosciences", titulo:"Bourgoin et al. 2025 — Pior degradação por fogo em 2 décadas (2024)", url:"https://bg.copernicus.org/articles/22/5247/2025/" }
          ]
        },
        {
          n: "A4",
          quote: "Conforme as mudanças climáticas e de uso da terra se intensificam na Amazônia, distúrbios compostos podem empurrar as florestas do sudeste amazônico para um colapso em larga escala, incluindo transições para estados alternativos.",
          origem: "Maracahipes 2026 PNAS · Significance · p.1",
          analise: "A primeira frase do Significance do paper já contradiz a manchete do Estadão. Os autores afirmam EXPLICITAMENTE que existe risco de colapso em larga escala com transições para estados alternativos. O Estadão suprimiu esse trecho.",
          conclusao: "A leitura honesta começa pela primeira frase do paper: é alerta, não alívio.",
          fontes: [
            { tier:"PNAS", titulo:"Maracahipes 2026 — Significance statement (PDF p.1)", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" }
          ]
        },
        {
          n: "A5",
          quote: "Consequentemente, encontramos pouca evidência de que florestas degradadas pelo fogo transicionem para uma savana persistente, embora incêndios recorrentes ou futuras mudanças climáticas possam impulsionar uma degradação de longa duração ou savanas de origem humana.",
          origem: "Maracahipes 2026 PNAS · Abstract · p.1",
          analise: "Esta é a frase QUE O ESTADÃO MUTILOU. A oração principal traz a ressalva e o Estadão divulgou apenas a parte antes da vírgula. A conjunção 'embora' é o coração científico do paper: a 'boa notícia' é condicional a um cenário (sem fogo) que não se verifica no campo (Bourgoin 2025: +400% degradação por fogo em 2024).",
          conclusao: "A manchete do Estadão é tecnicamente uma supressão de cláusula condicional. O paper diz 'savanização humana ainda é possível se o fogo continuar' — exatamente o que o Estadão omitiu.",
          fontes: [
            { tier:"PNAS", titulo:"Maracahipes 2026 — Abstract (PDF p.1)", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" },
            { tier:"Biogeosciences", titulo:"Bourgoin et al. 2025 — +400% degradação por fogo em 2024", url:"https://bg.copernicus.org/articles/22/5247/2025/" }
          ]
        },
        {
          n: "A6",
          quote: "Se a queima experimental tivesse continuado e as fontes de ignição fossem recorrentes, as gramíneas provavelmente teriam se expandido pela área experimental, levando a uma potencial transição de longo prazo da floresta para uma savana de origem humana.",
          origem: "Maracahipes 2026 PNAS · Discussion · p.6",
          analise: "Traduzindo: o experimento provou que SIM, a savanização humana é o desfecho plausível na ausência de manejo. Os autores são explícitos.",
          conclusao: "O paper documenta a savanização como rota viva do bioma, contradizendo a leitura editorial brasileira.",
          fontes: [
            { tier:"PNAS", titulo:"Maracahipes 2026 — Discussion 'Generalization or Savannization?' (PDF p.6)", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" }
          ]
        }
      ]
    },

    {
      slug: "tanguro",
      titulo: "B · Desenho Experimental Tanguro — Validade, Escala, Limites",
      resumo: "O experimento é raro e valioso, mas tem validade externa limitada. Não autoriza extrapolação para a Amazônia inteira.",
      conceitos: [
        {
          n: "B1",
          quote: "Três parcelas de floresta: uma de 'controle'... uma alvo do fogo anualmente, de 2004 a 2010; e uma parcela que foi incendiada a cada três anos, em 2004, 2007 e 2010.",
          origem: "Estadão / paper PNAS",
          analise: "Desenho excelente para teste mecanístico (raro queimadas controladas serem permitidas em FLORESTA). Limitações: N=3 parcelas, sítio único (Tanguro/Querência-MT), borda voltada para soja Amaggi após 2007 (antes pasto). É um caso muito específico do arco do desmatamento. Brando et al. 2014 (PNAS, mesmo sítio) mostrou mortalidade arbórea 226-462% em ano de seca extrema (2007).",
          conclusao: "O paper de 2026 deve ser lido como continuação temporal do Brando 2014: 'depois que o fogo cessa em condições MT específicas, há recuperação parcial em 10-15 anos'. Não autoriza extrapolar para Amazônia central, sítios sem cessação de fogo, ou cenário super El Niño.",
          fontes: [
            { tier:"PNAS", titulo:"Brando et al. 2014 — Abrupt tree mortality at Tanguro", url:"https://www.pnas.org/doi/10.1073/pnas.1305499111" },
            { tier:"IPAM", titulo:"Long-term impact of fire at Fazenda Tanguro (20 anos)", url:"https://ipam.org.br/long-term-impact-of-fire-presented-at-fazenda-tanguro/" }
          ]
        },
        {
          n: "B2",
          quote: "Em 2010. A partir daí, o fogo foi interrompido para que os pesquisadores pudessem avaliar a degradação e a recuperação das áreas.",
          origem: "Estadão",
          analise: "Cessação experimental do fogo é artificial. Na Amazônia REAL, 2024 teve 180.000 focos (148.000 só no Brasil), 98% antrópicos. Bourgoin et al. 2025 documentou aumento de +400% na degradação por fogo em 2024 vs. anos anteriores, com 791 ± 86 Mt CO₂ emitidos.",
          conclusao: "A 'boa notícia' depende de uma condição que não se verifica no campo: cessação do fogo. O paper é um teste de resiliência teórica, não um retrato do cenário atual.",
          fontes: [
            { tier:"Biogeosciences", titulo:"Bourgoin et al. 2025 — Fire-driven degradation 2024 worst in 2 decades", url:"https://bg.copernicus.org/articles/22/5247/2025/" },
            { tier:"AGU Advances", titulo:"Liu et al. 2026 — Drought-Heat threat to Amazon C sink", url:"https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026AV002309" }
          ]
        },
        {
          n: "B3",
          quote: "Diferentemente da maioria dos estudos de sensoriamento remoto sobre o fogo na Amazônia, que usa imagens de satélite só para localizar o incêndio... a recente pesquisa conseguiu avaliar... o impacto sobre a biodiversidade 'no chão' da floresta.",
          origem: "Estadão",
          analise: "Verdadeiro e valioso. Sensoriamento remoto subestima degradação por confundir dossel fechado com floresta funcional. Lapola 2023 mostrou que 38% da Amazônia já está degradada, mas continua 'verde' via satélite. Bourgoin 2025 confirma esta limitação.",
          conclusao: "A força metodológica é real: inventário florístico longo-prazo no chão é raro e crucial. Mas isso não autoriza a manchete editorial — pelo contrário, REVELA uma degradação invisível.",
          fontes: [
            { tier:"Science", titulo:"Lapola et al. 2023 — Drivers and impacts of Amazon forest degradation", url:"https://www.science.org/doi/10.1126/science.abp8622" },
            { tier:"Phys.org", titulo:"Síntese do paper — 'Recovery masks diversity loss'", url:"https://phys.org/news/2026-04-amazon-recovery-masks-diversity-loss.html" }
          ]
        },
        {
          n: "B4",
          quote: "De 2004 a 2011, a riqueza de espécies na borda da floresta caiu 20,3% em B1yr (de 64 para 51 espécies) e 46,2% em B3yr (de 65 para 35 espécies)... ainda era 31,3% e 50,8% menor em B1yr e B3yr, respectivamente, em comparação com os valores pré-incêndio em 2024.",
          origem: "Maracahipes 2026 PNAS · Results · p.3",
          analise: "Quatorze anos depois do último fogo, a borda B3yr (queimada a cada 3 anos) ainda tinha A METADE das espécies originais. Esse número não aparece em nenhuma matéria. É o oposto da 'recuperação' da manchete.",
          conclusao: "A 'recuperação' da borda é parcial e lenta: 31% (B1yr) a 51% (B3yr) abaixo do baseline 14 anos pós-fogo. Em ritmo demográfico de árvores, isso é geração inteira.",
          fontes: [
            { tier:"PNAS", titulo:"Maracahipes 2026 — Species Diversity and Richness (PDF p.3)", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" },
            { tier:"Rainfor", titulo:"Aguirre-Gutiérrez 2025 — Forests change at only 8% of needed rate", url:"https://rainfor.org/wp-content/uploads/sites/129/2025/03/Aguirre-Gutierrez-et-al-2025-Tropical-forests-in-the-Americas-are-changing-too-slowly-to-track-climate-change.pdf" }
          ]
        },
        {
          n: "B5",
          quote: "A proporção de espécies pioneiras mais que triplicou nas parcelas queimadas (de 17,1 para 59% em B1yr; e de 21,6 para 72,6% em B3yr)... Nas bordas da floresta, a proporção de espécies pioneiras alcançou 80,3% e 93,3% em B1yr e B3yr, respectivamente.",
          origem: "Maracahipes 2026 PNAS · Results · p.4",
          analise: "Pioneiras = vida curta, madeira leve, fixação rápida de C mas perdas rápidas. A borda B3yr é virtualmente um viveiro de pioneiras (93,3%) — não é mais floresta madura, é capoeira-em-pé. Berenguer 2018: degradação reduz estoque de C em 40-60%.",
          conclusao: "Onde antes havia 80% de espécies de floresta madura, agora há 93% de pioneiras. Não é Amazônia recuperada — é capoeira composicional.",
          fontes: [
            { tier:"PNAS", titulo:"Maracahipes 2026 — Species Composition (PDF p.4)", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" },
            { tier:"PNAS", titulo:"Berenguer 2018 — Carbon loss in degraded forests", url:"https://www.pnas.org/doi/10.1073/pnas.1804559115" }
          ]
        },
        {
          n: "B6",
          quote: "Em 2025, a cobertura de gramíneas havia diminuído para 12% nas bordas das parcelas queimadas, embora a maior parte disso fosse devido à presença de A. longifolia (nativa do Cerrado) no sub-bosque florestal. Em contraste, a cobertura de gramíneas nas bordas controle permaneceu consistentemente abaixo de 1%.",
          origem: "Maracahipes 2026 PNAS · Results · p.4",
          analise: "12% de cobertura por gramíneas (incluindo nativa do Cerrado Aristida longifolia) NÃO é 'ausência de savanização'. É um sub-bosque savânico coexistindo com dossel arbóreo. Andropogon gayanus (capim africano de pasto) recuou, mas A. longifolia (Cerrado) ficou.",
          conclusao: "A 'vitória sobre o capim' é parcial: gramínea nativa do Cerrado se estabeleceu no sub-bosque. Borda funcional já é meio Cerrado por baixo.",
          fontes: [
            { tier:"PNAS", titulo:"Maracahipes 2026 — Forest-Grass Competition (PDF p.4-5)", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" }
          ]
        }
      ]
    },

    {
      slug: "bordas",
      titulo: "C · Bordas vs. Interior — O Efeito Espacial",
      resumo: "Bordas colapsam, interior aparenta estabilidade — mas a Amazônia fragmentada já é majoritariamente borda funcional.",
      conceitos: [
        {
          n: "C1",
          quote: "Nas bordas da floresta, houve a redução das espécies típicas da Amazônia e o aumento das espécies generalistas... árvores com casca fina, madeira leve e raízes superficiais.",
          origem: "Estadão / paper PNAS",
          analise: "Confirma 25 anos de literatura sobre edge effects (Laurance, Fearnside, Berenguer). Bordas penetram 100-300 m no interior; em paisagem fragmentada, 'interior' desaparece. SPA AR2025 documenta área já fragmentada Pan-Amazônica — parcela substancial da Amazônia já é toda borda funcional.",
          conclusao: "Borda colapsando + interior estável é RUIM quando a Amazônia desmatada-fragmentada já é majoritariamente borda. Defender 'interior está bem' é como dizer 'o tumor não chegou no fígado ainda'.",
          fontes: [
            { tier:"PNAS", titulo:"Berenguer et al. 2021 — Tropical forest degradation", url:"https://www.pnas.org/doi/10.1073/pnas.2019377118" },
            { tier:"Sci Reports", titulo:"Laurance et al. 2018 — Amazon edge effects", url:"https://www.nature.com/articles/s41598-018-22386-7" }
          ]
        },
        {
          n: "C2",
          quote: "O capim até avançou, mas o posterior retorno das árvores, com suas copas, eliminou a luz de que as gramíneas precisam para progredir.",
          origem: "Estadão / paper PNAS",
          analise: "Mecanismo correto (fechamento de dossel suprime gramíneas C4 sciófobas). MAS: depende de ausência de re-ignição. Brando 2014 mostrou que a invasão de gramíneas amplifica a próxima queimada (feedback positivo fogo-gramínea-fogo).",
          conclusao: "Conclusão honesta seria: 'o capim não dominou PORQUE o fogo cessou'. Sem essa intervenção, a literatura indica estado alternativo de gramínea-fogo travado.",
          fontes: [
            { tier:"PNAS", titulo:"Brando et al. 2014 — Drought-fire interactions", url:"https://www.pnas.org/doi/10.1073/pnas.1305499111" },
            { tier:"FAPESP", titulo:"Fire against fire — Pesquisa FAPESP", url:"https://revistapesquisa.fapesp.br/en/fire-against-fire/" }
          ]
        },
        {
          n: "C3",
          quote: "A biodiversidade no interior da floresta permaneceu relativamente estável.",
          origem: "Estadão / paper PNAS",
          analise: "Achado relevante MAS atenuado: o paper afirma também que mesmo nas parcelas controle (sem fogo experimental) há mudança composicional por eventos naturais (ventania 2012, 2019; secas 2007, 2010, 2015-16). Esquivel-Muelbert et al. 2019 documentou shift composicional em direção a espécies tolerantes à seca em todo o bioma.",
          conclusao: "'Interior estável' é parcialmente verdade no inventário florístico, mas FUNCIONALMENTE o interior está esquentando, secando e aceitando exóticas. Interior é quase-borda em emergência climática.",
          fontes: [
            { tier:"Glob Change Biol", titulo:"Esquivel-Muelbert et al. 2019 — Compositional response", url:"https://onlinelibrary.wiley.com/doi/full/10.1111/gcb.14413" },
            { tier:"PNAS", titulo:"Boulton et al. 2022/2024 — Critical slowing down of the Amazon", url:"https://www.pnas.org/doi/10.1073/pnas.2316924121" }
          ]
        },
        {
          n: "C4",
          quote: "Durante a recuperação pós-fogo, espécies resistentes a embolias (valores de P50 mais negativos) tornaram-se mais comuns, mas as comunidades exibiram margens de segurança hidráulica menores (vulnerabilidade aumentada à seca).",
          origem: "Maracahipes 2026 PNAS · Abstract · p.1",
          analise: "Tradução técnica: a floresta que voltou tem árvores que aguentam mais sede individualmente, mas o conjunto ficou MAIS vulnerável a seca. HSM50 ~3.2 (Control) vs. ~2.5 (B3yr). É um paradoxo crítico: resistência individual aumentou, segurança coletiva diminuiu.",
          conclusao: "A floresta 'recuperada' é mais frágil ao próximo super El Niño que a floresta original. Resiliência aparente + fragilidade real.",
          fontes: [
            { tier:"PNAS", titulo:"Maracahipes 2026 — Drought-Resistant Species Performance (PDF p.4-5)", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" },
            { tier:"AGU Adv", titulo:"Liu et al. 2026 — Drought-Heat threat to Amazon C sink", url:"https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026AV002309" }
          ]
        },
        {
          n: "C5",
          quote: "Apesar do aumento na resistência à embolia, a vulnerabilidade à seca em nível comunitário permaneceu similar à Controle, sugerindo maior exposição a condições de seca, potencialmente devido a acesso reduzido a água profunda do solo e/ou maior déficit de pressão de vapor (VPD) nas parcelas queimadas.",
          origem: "Maracahipes 2026 PNAS · Discussion · p.7",
          analise: "O paper explicita o mecanismo: borda queimada = solo mais quente + VPD maior + raízes superficiais (pioneiras) = exposição maior à seca. Isso não aparece no satélite. Estação seca alongando 1 semana/década (SPA AR2025) vai catalisar este efeito.",
          conclusao: "A floresta de borda parece igual no satélite, mas opera com microclima e raízes piores. Funcionalmente está pior.",
          fontes: [
            { tier:"PNAS", titulo:"Maracahipes 2026 — Functional Traits and Future Susceptibility (PDF p.7)", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" }
          ]
        }
      ]
    },

    {
      slug: "homogeneizacao",
      titulo: "D · Homogeneização Ecológica — O Achado Central",
      resumo: "A descoberta cientificamente mais relevante (e a menos enfatizada pelo Estadão).",
      conceitos: [
        {
          n: "D1",
          quote: "Incêndios frequentes causam a perda de biodiversidade e a homogeneização ecológica, principalmente nas bordas da floresta, mas não a savanização.",
          origem: "Estadão / paper PNAS",
          analise: "Maracahipes (release IPAM/FAPESP): 'floresta que aparenta ter se recuperado pode mascarar perdas debaixo do dossel... homogeneização tende a resultar na perda de várias espécies-chave e serviços ecossistêmicos'. Substituição de especialistas (Cariniana, Hymenolobium, Bertholletia) por generalistas (Cecropia, Vismia) reduz estoque de carbono em 40-60% (Berenguer 2018).",
          conclusao: "Esse é o achado central. Não é boa notícia — é uma má notícia mais sutil: a Amazônia degradada continua 'verde' mas perde função (clima, carbono, fauna, polinização, alimentos não-madeireiros indígenas).",
          fontes: [
            { tier:"PNAS", titulo:"Berenguer et al. 2018 — Carbon loss in degraded forests", url:"https://www.pnas.org/doi/10.1073/pnas.1804559115" },
            { tier:"Rainfor", titulo:"Aguirre-Gutiérrez et al. 2025 — Tropical forests changing too slowly", url:"https://rainfor.org/wp-content/uploads/sites/129/2025/03/Aguirre-Gutierrez-et-al-2025-Tropical-forests-in-the-Americas-are-changing-too-slowly-to-track-climate-change.pdf" }
          ]
        },
        {
          n: "D2",
          quote: "A Amazônia está se recuperando, mas, pensando na sua composição, é um processo que ainda vai levar muito mais tempo.",
          origem: "Estadão (Maracahipes citado)",
          analise: "Maracahipes refere-se a escalas de séculos (espécies de madeira densa: 200-400 anos para atingir biomassa pré-distúrbio). 'Vai levar muito mais tempo' no jargão científico = horizonte muito além de Acordo de Paris e qualquer ciclo político.",
          conclusao: "A janela útil para humanidade já passou mesmo se a recuperação ocorrer. Hubau et al. 2020 (Nature) mostrou que o sumidouro amazônico de carbono está em declínio acelerado.",
          fontes: [
            { tier:"Nature", titulo:"Hubau et al. 2020 — Amazon carbon sink declining", url:"https://www.nature.com/articles/s41586-020-2035-0" },
            { tier:"Nature", titulo:"Phillips et al. 2009 (Science) — Drought sensitivity of Amazon", url:"https://www.science.org/doi/10.1126/science.1164033" }
          ]
        },
        {
          n: "D3",
          quote: "A presença de fauna local provou ser um fator importante na regeneração da floresta — mamíferos como antas e macacos e aves serviram como agentes-chave.",
          origem: "Release IPAM/FAPESP (omitido pelo Estadão)",
          analise: "Importante e omitido pelo Estadão: regeneração depende de DISPERSORES — antas, macacos, aves. Bello et al. 2015 (Science Advances) demonstrou que defaunação reduz capacidade de estoque de carbono. Floresta defaunada parece ok no satélite, mas não regenera.",
          conclusao: "A 'boa notícia' do Estadão SÓ vale onde existe fauna intacta. Em paisagens defaunadas (caça + fragmentação + tráfico), recuperação é muito mais lenta ou inviável. Essa é a 'cláusula' que a manchete não mostra.",
          fontes: [
            { tier:"Sci Advances", titulo:"Bello et al. 2015 — Defaunation reduces carbon storage", url:"https://www.science.org/doi/10.1126/sciadv.1501105" },
            { tier:"PNAS", titulo:"Peres et al. 2016 — Dispersal limitation", url:"https://www.pnas.org/doi/10.1073/pnas.1516525113" }
          ]
        },
        {
          n: "D4",
          quote: "Esses impactos levam à homogeneização de comunidades arbóreas — um processo impulsionado pelo aumento de espécies generalistas (i.e., um 'processo de generalização') — mas também fornecendo algumas evidências de forte resiliência da floresta quando o distúrbio é removido do ambiente.",
          origem: "Maracahipes 2026 PNAS · Conclusions · p.8",
          analise: "Os autores BATIZAM um conceito novo: 'generalization process' — processo de generalização. É o oposto da savanização caricata. É a perda de identidade biótica regional. O subtítulo da Discussion é literalmente 'Generalization or Savannization?' — o paper inteiro é sobre essa dicotomia.",
          conclusao: "'Processo de generalização' é o novo conceito que precisa entrar no vocabulário público brasileiro. Não é savana, não é floresta original — é uma floresta que perde a alma.",
          fontes: [
            { tier:"PNAS", titulo:"Maracahipes 2026 — Conclusions (PDF p.8)", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" }
          ]
        },
        {
          n: "D5",
          quote: "Apesar da recuperação pós-fogo de alguns serviços ecossistêmicos (carbono e água) com o crescimento de novos recrutas, a diversidade não atingiu os níveis pré-distúrbio e a composição de espécies permaneceu diferente, sugerindo que as áreas degradadas no sudeste da Amazônia são resilientes, mas provavelmente exigirão MAIS DE 14 ANOS para recuperar todas as propriedades florestais.",
          origem: "Maracahipes 2026 PNAS · Conclusions · p.8",
          analise: "'Mais de 14 anos' é leitura conservadora (limite do experimento). Para árvores de madeira densa de centenas de anos (Bertholletia, Cariniana), o tempo real é séculos. O Acordo de Paris e as metas COP30 operam em janelas de 5-30 anos — incompatíveis. Hubau 2020 (Nature) mostra sumidouro em colapso JÁ.",
          conclusao: "'14 anos' é piso, não teto. O paper pede décadas a séculos para retorno funcional pleno — escala incompatível com política climática vigente.",
          fontes: [
            { tier:"PNAS", titulo:"Maracahipes 2026 — Conclusions 14-year limit (PDF p.8)", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" },
            { tier:"Nature", titulo:"Hubau et al. 2020 — Amazon C sink declining", url:"https://www.nature.com/articles/s41586-020-2035-0" }
          ]
        }
      ]
    },

    {
      slug: "vulnerabilidades",
      titulo: "E · Vulnerabilidades Persistentes — O que o Estadão minimiza",
      resumo: "Super El Niño 2026-27, secas-relâmpago, fragmentação, defaunação. As 'cautelas' do paper, omitidas na manchete.",
      conceitos: [
        {
          n: "E1",
          quote: "É uma mensagem positiva, mas que exige 'cautela'.",
          origem: "Estadão (citação Maracahipes)",
          analise: "A 'cautela' no paper e no release IPAM/FAPESP é MUITO MAIS FORTE que no Estadão: Maracahipes alerta para o 'super El Niño' previsto até 2027, perda de fauna, fragmentação, e que as áreas recuperadas são MAIS VULNERÁVEIS a próximos eventos extremos. Estação seca alongou 1 semana por década nos últimos 45 anos (SPA AR2025).",
          conclusao: "'Cautela' no Estadão é footnote. No paper é conclusão central. Editorialmente, a manchete inverte o peso.",
          fontes: [
            { tier:"Nature Comms", titulo:"Marengo et al. 2024 — Amazon drought intensification", url:"https://www.nature.com/articles/s43247-024-01533-1" },
            { tier:"Am J Climate Change", titulo:"Marengo 2024 — The Drought of Amazonia 2023-2024", url:"https://doi.org/10.4236/ajcc.2024.133026" }
          ]
        },
        {
          n: "E2",
          quote: "O Brasil deve seguir seu firme compromisso de combate ao desmatamento e às queimadas, manter a floresta de pé... promover políticas de desenvolvimento sustentável... O País tem um sólido arcabouço legal de preservação, como o Código Florestal, adota medidas de enfrentamento do crime na floresta e ainda conta com um agronegócio sustentável e responsável.",
          origem: "Estadão (parágrafo final)",
          analise: "Boa em parte, mas se contradiz ao elogiar 'agronegócio sustentável' e 'Código Florestal' sem mencionar que 2024 bateu RECORDE de fogo (Bourgoin 2025). PRODES 2024 mostrou queda no desmatamento por corte raso, mas degradação por fogo bateu recorde de 2 décadas. As parcelas de Tanguro, lembremos, estão CERCADAS por soja Amaggi.",
          conclusao: "O Estadão usa o paper para legitimar a política do agro que o próprio paper alerta ser parte do problema. Convergência conveniente para o leitor não atento.",
          fontes: [
            { tier:"INPE", titulo:"PRODES 2024 — Taxa de desmatamento Amazônia", url:"http://terrabrasilis.dpi.inpe.br/" },
            { tier:"JRC", titulo:"Unprecedented Amazon fires 2024 fuel record CO₂", url:"https://joint-research-centre.ec.europa.eu/jrc-news-and-updates/unprecedented-amazon-fires-2024-fuel-record-co2-emissions-2025-10-08_en" }
          ]
        },
        {
          n: "E3",
          quote: "Triunfo da ciência sobre os exageros e as narrativas da militância.",
          origem: "Estadão (parágrafo final, editorial)",
          analise: "Editorial puro do Estadão — não consta no paper. Ataca cientistas como Carlos Nobre, Marengo, Gatti, Lovejoy, Flores que NUNCA disseram 'Amazônia vai virar campo de capim em 5 anos'. Mais de 200 papers (2021-2025) convergem para risco real de tipping point regional. O próprio Maracahipes é colaborador do IPAM, instituição que historicamente alerta para o risco — não é 'outro lado' político, é refinamento metodológico.",
          conclusao: "Falsa dicotomia ciência-vs-militância. O Estadão sequestra paper para narrativa política. Cientistas não são 'militantes' — são as pessoas com mais autoridade técnica para alertar a sociedade.",
          fontes: [
            { tier:"AMS", titulo:"Nobre & Sellers 1991 — Amazonian Climate (clássico)", url:"https://journals.ametsoc.org/view/journals/clim/4/10/1520-0442_1991_004_0957_arpacc_2_0_co_2.xml" },
            { tier:"Project Syndicate", titulo:"Nobre & Peña-Claros — Amazon's future (2025)", url:"https://www.project-syndicate.org/commentary/protecting-and-restoring-the-amazon-must-be-top-priority-at-cop30-by-carlos-nobre-and-marielos-pena-claros-2025-02" }
          ]
        },
        {
          n: "E4",
          quote: "Em conjunto, esses resultados mostram que mesmo florestas altamente degradadas e invadidas por gramíneas podem se recuperar na ausência de novos distúrbios, mas as comunidades que se reorganizam permanecem vulneráveis a novos incêndios, secas ou ventanias.",
          origem: "Maracahipes 2026 PNAS · Abstract · p.1",
          analise: "Esta é a frase-resumo. Decodificada: (1) recuperação existe, (2) condicional a 'ausência de novos distúrbios', (3) o que volta é mais frágil para os MESMOS distúrbios. É o ciclo de degradação progressiva. Marengo 2024 (AJCC): seca 2023-24 quebrou recordes. Cada ciclo deixa floresta mais fraca.",
          conclusao: "A 'recuperação' é pírrica: o que volta é mais vulnerável ao próximo golpe. É fadiga ecossistêmica progressiva.",
          fontes: [
            { tier:"PNAS", titulo:"Maracahipes 2026 — Abstract (PDF p.1)", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" },
            { tier:"AJCC", titulo:"Marengo 2024 — Drought of Amazonia 2023-2024", url:"https://doi.org/10.4236/ajcc.2024.133026" }
          ]
        },
        {
          n: "E5",
          quote: "Padrões semelhantes podem estar ocorrendo no Território Indígena do Xingu, onde práticas de manejo do fogo e a abundância de propágulos de gramíneas têm promovido dinâmicas de feedback semelhantes.",
          origem: "Maracahipes 2026 PNAS · Discussion · p.6",
          analise: "O paper EXPLICITAMENTE estende a análise para o Xingu — território indígena demarcado, sem agronegócio dentro, mas vulnerável pela vizinhança e pelo fogo. Isso desmonta a tese de que 'TIs estão protegidas' e que 'agronegócio sustentável' resolve. O fogo entra independentemente do regime fundiário.",
          conclusao: "Mesmo TIs como Xingu mostram dinâmica fogo-gramínea-fogo. Solução é manejo regional integrado, não apenas demarcação ou cadeias agro privadas.",
          fontes: [
            { tier:"PNAS", titulo:"Maracahipes 2026 — Discussion · Xingu reference (PDF p.6)", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" }
          ]
        }
      ]
    },

    {
      slug: "sociedade-defesa",
      titulo: "F · Sociedade Brasileira, Soberania e Defesa",
      resumo: "Implicações para os 28 milhões de amazônidas, segurança alimentar, segurança hídrica, soberania nacional e Forças Armadas.",
      conceitos: [
        {
          n: "F1",
          quote: "Almost 45% of water vapor entering from the Atlantic Ocean is exported outside the Amazon through 'flying rivers' — supplying almost 40% of rains in Southern Brazil and not less than 15% in the Southeast.",
          origem: "Carlos Nobre · Bulletin of Atomic Scientists 2025",
          analise: "Os rios voadores transportam ~20 Gt/dia de vapor d'água. Esses rios sustentam ~60% do PIB agrícola brasileiro (Centro-Sul). Homogeneização da Amazônia = especialistas com raízes profundas substituídos por generalistas com raízes superficiais = MENOS evapotranspiração = MENOS rios voadores = MENOS chuva no Sudeste e Sul.",
          conclusao: "A 'recuperação' celebrada pelo Estadão preserva CARBONO PARCIAL (40-60% do estoque original) mas pode comprometer FUNÇÃO HIDROLÓGICA. É uma floresta que continua sequestrando algum C, mas que falha em produzir chuva — o oposto do que o agro brasileiro precisa.",
          fontes: [
            { tier:"Bulletin", titulo:"Carlos Nobre 2025 — Tipping points (Bulletin)", url:"https://thebulletin.org/premium/2025-03/carlos-nobre-on-tipping-points-in-the-amazon-rainforest/" },
            { tier:"Yale E360", titulo:"Will deforestation push the Amazon to a tipping point?", url:"https://e360.yale.edu/features/will-deforestation-and-warming-push-the-amazon-to-a-tipping-point" }
          ]
        },
        {
          n: "F2",
          quote: "A Amazônia deve ser tratada como infraestrutura essencial para a segurança nacional, fornecendo serviços indispensáveis à vida — regulação climática, segurança hídrica, produção de alimentos e equilíbrio ecossistêmico.",
          origem: "Centro Soberania e Clima · Esc. Sup. Defesa 2025",
          analise: "O Comando Militar da Amazônia (Gen Ricardo Augusto Ferreira Costa Neves) e o Ministério da Defesa convergem em 2025: clima é segurança nacional. Operação Ágata Amazônia 2025 (Comando APOENA) mobilizou 1.100 militares em 510.000 km² (área do tamanho da Espanha). CENSIPAM (subordinado ao MD) opera radares, sensores e satélites integrando defesa, ambiente e segurança pública. IPEAM/IME (Manaus) será criado para pesquisa em IA, quântica, transição energética e biotecnologia voltadas à Amazônia.",
          conclusao: "O paper PNAS reforça — não enfraquece — a tese do Centro Soberania e Clima: a floresta funcional é infraestrutura crítica. Floresta homogeneizada perde função hidrológica e biótica que sustenta a presença e operação de Forças Armadas em ambiente amazônico (logística, água, sanidade).",
          fontes: [
            { tier:"EB", titulo:"IME e CENSIPAM — parceria estratégica Amazônia", url:"https://eblog.eb.mil.br/en/w/ime-e-censipam-parceria-estrat%C3%A9gica-para-a-prote%C3%A7%C3%A3o-e-o-desenvolvimento-sustent%C3%A1vel-da-amaz%C3%B4nia" },
            { tier:"Marinha", titulo:"Conferência Internacional Soberania e Clima (2025)", url:"https://www.agencia.marinha.mil.br/especial/conferencia-internacional-promove-debate-sobre-soberania-e-clima" },
            { tier:"Ag Brasil", titulo:"Preservar a Amazônia é segurança nacional (2025)", url:"https://agenciabrasil.ebc.com.br/geral/noticia/2025-06/preservar-amazonia-e-questao-de-seguranca-nacional-diz-especialista" }
          ]
        },
        {
          n: "F3",
          quote: "Operação Ágata Amazônia 2025 — Comando APOENA — mobilizou 1.100 militares em 510.000 km² para manter a soberania e intensificar a presença do Estado na faixa de fronteira.",
          origem: "Agência Gov · Min. Defesa 2025",
          analise: "Estação seca alongando 1 semana/década (SPA AR2025) significa: (a) janela operacional para deslocamento fluvial de tropas e abastecimento ENCURTA progressivamente; (b) fogo descontrolado consome corredores logísticos; (c) defaunação reduz capacidade de subsistência de patrulhas remotas; (d) homogeneização de espécies arbóreas altera microclimas locais e capacidade de cobertura/dissimulação. O cenário super El Niño 2026-27 amplifica esses efeitos.",
          conclusao: "O paper PNAS é leitura obrigatória para planejamento operacional do Comando Militar da Amazônia (CMA), CENSIPAM e Estado-Maior do Exército. Não é assunto 'ambiental' — é doutrina de defesa em ambiente em transformação acelerada.",
          fontes: [
            { tier:"Min. Defesa", titulo:"Forças Armadas intensificam Operação Ágata Amazônia 2025", url:"https://agenciagov.ebc.com.br/noticias/202505/operacao-e-desencadeada-para-a-defesa-da-amazonia" },
            { tier:"FGV CPDOC", titulo:"Lourenção — SIVAM e segurança regional", url:"https://cpdoc.fgv.br/sites/default/files/militares-amazonia/txt_Lourencao.pdf" }
          ]
        },
        {
          n: "F4",
          quote: "Previmos que os impactos de múltiplos distúrbios serão mais pronunciados nas bordas da floresta, onde a mortalidade de árvores grandes por fogo, seca e ventanias tem sido consistentemente maior do que nos interiores da floresta.",
          origem: "Maracahipes 2026 PNAS · Methods · p.2",
          analise: "Árvores grandes são justamente as que: (i) bombeiam mais água para os rios voadores (evapotranspiração proporcional ao tamanho), (ii) oferecem maior cobertura aérea para tropas em selva, (iii) abrigam fauna dispersora (jaguar, harpia, primatas grandes). Sua mortalidade preferencial em bordas é perda DUPLA: clima global (rios voadores) e operacional (Forças Armadas).",
          conclusao: "A árvore grande é o 'core asset' da Amazônia — bomba de água + cobertura tática. Sua morte preferencial em bordas tem consequência climática (rios voadores) E geoestratégica (operações).",
          fontes: [
            { tier:"PNAS", titulo:"Maracahipes 2026 — Methods (PDF p.2)", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123" },
            { tier:"Bulletin", titulo:"Carlos Nobre 2025 — Rios voadores 20 Gt/dia", url:"https://thebulletin.org/premium/2025-03/carlos-nobre-on-tipping-points-in-the-amazon-rainforest/" }
          ]
        }
      ]
    }
  ],

  // Papers de alto nível para consulta cruzada
  papers: [
    { ano:2026, revista:"PNAS", titulo:"Forest recovery pathways after fire, drought, and windstorms in southeastern Amazonia", autores:"Maracahipes et al.", url:"https://www.pnas.org/doi/abs/10.1073/pnas.2532833123", tier:"PNAS" },
    { ano:2024, revista:"Nature", titulo:"Critical transitions in the Amazon forest system", autores:"Flores et al.", url:"https://www.nature.com/articles/s41586-023-06970-0", tier:"Nature" },
    { ano:2023, revista:"Science", titulo:"The drivers and impacts of Amazon forest degradation", autores:"Lapola et al.", url:"https://www.science.org/doi/10.1126/science.abp8622", tier:"Science" },
    { ano:2014, revista:"PNAS", titulo:"Abrupt increases in Amazonian tree mortality due to drought-fire interactions", autores:"Brando et al.", url:"https://www.pnas.org/doi/10.1073/pnas.1305499111", tier:"PNAS" },
    { ano:2018, revista:"Science Advances", titulo:"Amazon Tipping Point", autores:"Lovejoy & Nobre", url:"https://www.science.org/doi/10.1126/sciadv.aat2340", tier:"Science Adv" },
    { ano:2020, revista:"Nature", titulo:"Asynchronous carbon sink saturation in African and Amazonian tropical forests", autores:"Hubau et al.", url:"https://www.nature.com/articles/s41586-020-2035-0", tier:"Nature" },
    { ano:2021, revista:"Nature", titulo:"Amazonia as a carbon source linked to deforestation and climate change", autores:"Gatti et al.", url:"https://www.nature.com/articles/s41586-021-03629-6", tier:"Nature" },
    { ano:2025, revista:"Biogeosciences", titulo:"Extensive fire-driven degradation in 2024 marks worst Amazon forest disturbance in over 2 decades", autores:"Bourgoin et al.", url:"https://bg.copernicus.org/articles/22/5247/2025/", tier:"Biogeosciences" },
    { ano:2026, revista:"AGU Advances", titulo:"The Growing Threat of Extreme Drought-Heat to the Amazon Carbon Sink", autores:"Liu et al.", url:"https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2026AV002309", tier:"AGU Advances" },
    { ano:2024, revista:"PNAS", titulo:"Critical slowing down of the Amazon forest after increased drought occurrence", autores:"Boulton et al.", url:"https://www.pnas.org/doi/10.1073/pnas.2316924121", tier:"PNAS" },
    { ano:2018, revista:"PNAS", titulo:"Tropical forest carbon balance affected by selective logging and fire", autores:"Berenguer et al.", url:"https://www.pnas.org/doi/10.1073/pnas.1804559115", tier:"PNAS" },
    { ano:2019, revista:"Glob Change Biol", titulo:"Compositional response of Amazon forests to climate change", autores:"Esquivel-Muelbert et al.", url:"https://onlinelibrary.wiley.com/doi/full/10.1111/gcb.14413", tier:"GCB" },
    { ano:2025, revista:"Rainfor preprint", titulo:"Tropical forests in the Americas are changing too slowly to track climate change", autores:"Aguirre-Gutiérrez et al.", url:"https://rainfor.org/wp-content/uploads/sites/129/2025/03/Aguirre-Gutierrez-et-al-2025-Tropical-forests-in-the-Americas-are-changing-too-slowly-to-track-climate-change.pdf", tier:"Rainfor" },
    { ano:2015, revista:"Science Advances", titulo:"Defaunation affects carbon storage in tropical forests", autores:"Bello et al.", url:"https://www.science.org/doi/10.1126/sciadv.1501105", tier:"Science Adv" },
    { ano:2024, revista:"Am J Climate Change", titulo:"The Drought of Amazonia in 2023-2024", autores:"Marengo et al.", url:"https://doi.org/10.4236/ajcc.2024.133026", tier:"AJCC" }
  ]
};
