// AMAZONIA REAL — Charts (Chart.js 4)
(function () {
  if (typeof Chart === 'undefined' || !window.AMAZONIA_DATA) return;

  Chart.defaults.font.family = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
  Chart.defaults.color = '#4a4a4a';

  const papers = window.AMAZONIA_DATA.papers.slice().sort((a, b) => a.ano - b.ano);

  // === Timeline scatter ===
  const tierOrder = ['Nature', 'Science', 'Science Adv', 'PNAS', 'GCB', 'AGU Advances', 'Biogeosciences', 'AJCC', 'Bulletin', 'Rainfor'];
  const tierColors = {
    'Nature':         '#16513d',
    'Science':        '#b54d2b',
    'Science Adv':    '#e3884a',
    'PNAS':           '#2b8a5f',
    'GCB':            '#7e9b5e',
    'AGU Advances':   '#3a6797',
    'Biogeosciences': '#6c4f8a',
    'AJCC':           '#a39d56',
    'Bulletin':       '#999',
    'Rainfor':        '#aaa'
  };

  const datasets = tierOrder.map(t => ({
    label: t,
    data: papers.filter(p => p.tier === t).map(p => ({ x: p.ano, y: tierOrder.indexOf(t), titulo: p.titulo, autores: p.autores, url: p.url })),
    backgroundColor: tierColors[t] || '#888',
    borderColor: tierColors[t] || '#888',
    pointRadius: 7,
    pointHoverRadius: 10
  })).filter(d => d.data.length > 0);

  new Chart(document.getElementById('chart-timeline'), {
    type: 'scatter',
    data: { datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      onClick: (e, items) => {
        if (items && items.length) {
          const ds = datasets[items[0].datasetIndex];
          const p = ds.data[items[0].index];
          if (p && p.url) window.open(p.url, '_blank', 'noopener');
        }
      },
      scales: {
        x: { type: 'linear', title: { display: true, text: 'Ano de publicação' }, min: 2013, max: 2027, ticks: { stepSize: 1 } },
        y: { ticks: { callback: v => tierOrder[v] || '' }, min: -0.5, max: tierOrder.length - 0.5, title: { display: true, text: 'Revista' } }
      },
      plugins: {
        legend: { position: 'bottom' },
        tooltip: {
          callbacks: {
            label: ctx => {
              const p = ctx.raw;
              return [`${p.autores} (${p.x})`, p.titulo, '↗ Clique para abrir'];
            }
          }
        }
      }
    }
  });

  // === Tier distribution doughnut ===
  const tierCount = {};
  papers.forEach(p => { tierCount[p.tier] = (tierCount[p.tier] || 0) + 1; });
  const labels = Object.keys(tierCount);
  new Chart(document.getElementById('chart-tier'), {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data: labels.map(l => tierCount[l]),
        backgroundColor: labels.map(l => tierColors[l] || '#888'),
        borderColor: '#fff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { position: 'right' },
        tooltip: {
          callbacks: { label: ctx => ` ${ctx.label}: ${ctx.parsed} paper(s)` }
        }
      }
    }
  });
})();
