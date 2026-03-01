// assets/app.js
(function () {
  const $ = id => document.getElementById(id);
  const esc = s => (s ?? "").toString()
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
  const norm = s => (s || "").toLowerCase();

  // NEWS
  window.renderNews = function (limit) {
    const box = $("newsList");
    if (!box || !window.NEWS) return;
    const items = window.NEWS
      .slice().sort((a, b) => a.date < b.date ? 1 : -1)
      .slice(0, limit || window.NEWS.length);

    box.innerHTML = items.map(n => `
      <article class="item">
        <div class="meta">
          <span>${esc(n.date)}</span>
          <span class="badge">${esc(n.tag)}</span>
        </div>
        <div style="margin-top:6px;">${esc(n.title)}</div>
        <div style="margin-top:6px;color:var(--muted);font-size:13px;">
          ${esc(n.body)}
        </div>
      </article>
    `).join("");
  };

  // SCROLLS (検索フィルタ対応版)
  window.renderScrolls = function (filterText = "") {
    const list = $("scrollList");
    const count = $("scrollCount");
    if (!list || !window.SCROLLS) return;

    const q = norm(filterText);
    const items = window.SCROLLS
      .slice()
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .filter(x => {
        if (!q) return true;
        const hay = norm([x.title, x.type, x.date, x.note, ...(x.tags || [])].join(" "));
        return hay.includes(q);
      });

    if (count) count.textContent = `${items.length}件`;

    list.innerHTML = items.map(x => `
      <article class="item">
        <div class="meta">
          <span>${esc(x.date)}</span>
          <span class="badge gold">${esc(x.type)}</span>
          <span class="badge">${esc((x.tags || [])[0] || "書庫")}</span>
        </div>
        <div style="margin-top:8px; font-size:16px;">
          ${esc(x.title)}
        </div>
        <div style="margin-top:6px; color:var(--muted); font-size:13px; line-height:1.7;">
          ${esc(x.note || "")}
        </div>
        <div class="tags" style="margin-top:10px;">
          ${(x.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}
        </div>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:10px;">
          <a class="btn" href="${esc(x.file)}" target="_blank" rel="noopener noreferrer">開く</a>
        </div>
      </article>
    `).join("") || `<div class="muted">該当する書物がない。</div>`;
  };

  // REALMS
  window.renderRealms = function () {
    const box = $("realmGrid");
    if (!box || !window.REALMS) return;
    box.innerHTML = window.REALMS.map(r => `
      <section class="card">
        <h3 class="title">${esc(r.name)}</h3>
        <p class="desc">${esc(r.description)}</p>
        <div class="tags">
          <span class="tag">${esc(r.genre)}</span>
          ${(r.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}
        </div>
        ${r.inviteUrl ? `<a class="btn" href="${esc(r.inviteUrl)}" target="_blank" rel="noopener noreferrer">Discordへ</a>` : `<span class="btn" style="opacity:0.5; cursor:not-allowed;">用意中</span>`}
        <div class="meta" style="margin-top:6px;">
          <span>${esc(r.owner || "")}</span>
        </div>
      </section>
    `).join("");
  };
})();