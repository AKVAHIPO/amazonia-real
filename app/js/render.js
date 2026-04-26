// AMAZONIA REAL — Render dos grupos e conceitos
(function () {
  const data = window.AMAZONIA_DATA;
  if (!data) return;

  // TOC
  const tocList = document.getElementById('toc-list');
  data.grupos.forEach(g => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${g.slug}">${g.titulo.replace(/^([A-Z]) · /, '$1 · ')}</a>`;
    tocList.appendChild(li);
  });
  const liConc = document.createElement('li');
  liConc.innerHTML = `<a href="#conclusao">Conclusão geral</a>`;
  tocList.appendChild(liConc);
  const liArmy = document.createElement('li');
  liArmy.innerHTML = `<a href="#exercito">Exército Brasileiro</a>`;
  tocList.appendChild(liArmy);

  // Groups
  const root = document.getElementById('groups-root');
  data.grupos.forEach(g => {
    const sec = document.createElement('section');
    sec.className = 'section';
    sec.id = g.slug;
    sec.setAttribute('aria-labelledby', `${g.slug}-h`);
    sec.innerHTML = `
      <h2 id="${g.slug}-h">${escape(g.titulo)}</h2>
      <p class="sec-summary">${escape(g.resumo)}</p>
      <div class="concept-list"></div>
    `;
    const list = sec.querySelector('.concept-list');
    g.conceitos.forEach(c => {
      const div = document.createElement('div');
      div.className = 'concept';
      div.innerHTML = `
        <div class="concept-head">
          <span class="concept-num">${escape(c.n)}</span>
          <span class="concept-origin">${escape(c.origem)}</span>
        </div>
        <blockquote>"${escape(c.quote)}"</blockquote>
        <div class="row">
          <div>
            <div class="label">Análise crítica</div>
            <div class="analysis">${escape(c.analise)}</div>
          </div>
          <div>
            <div class="label">Conclusão parcial</div>
            <div class="partial">${escape(c.conclusao)}</div>
          </div>
        </div>
        <ul class="sources" aria-label="Fontes de alto nível">
          ${c.fontes.map(f => `<li><a href="${encodeAttr(f.url)}" target="_blank" rel="noopener"><span class="t">${escape(f.tier)}</span>${escape(f.titulo)}</a></li>`).join('')}
        </ul>
      `;
      list.appendChild(div);
    });
    root.appendChild(sec);
  });

  function escape(s) {
    if (s == null) return '';
    return String(s)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;');
  }
  function encodeAttr(s) {
    return escape(s).replaceAll('"', '&quot;');
  }
})();
