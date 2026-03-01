// assets/data.js

// お知らせ
window.NEWS = [
  { date: "2026-03-01", tag: "更新", title: "HPを開門しました。", body: "まずは書庫と界隈から。" },
  { date: "2026-02-20", tag: "告知", title: "地獄伝 次章準備中", body: "PDFは書物に収蔵予定。" }
];

// 書物（PDF）
window.SCROLLS = [
  {
    title: "新説地獄伝リマスターR_公式ルールブック",
    type: "TCG",
    date: "2026-03-01",
    file: "scrolls/新説地獄伝リマスターR_公式ルールブック.pdf",
    tags: ["新説地獄伝", "TCG"],
    note: "ルールブック。"
  },
  {
    title: "新説地獄伝リマスターR_カードセット",
    type: "TCG",
    date: "2026-03-01",
    file: "scrolls/新説地獄伝リマスターR_カードセット.pdf",
    tags: ["新説地獄伝", "TCG"],
    note: "カードセット。"
  }
];

// 界隈（Discord）
window.REALMS = [
  {
    name: "地獄伝理事会",
    genre: "運営",
    description: "制作・設定・進捗等の運営事項について協議する場です。",
    inviteUrl: "",
    tags: ["地獄伝", "理事会"],
    owner: "地獄伝運営"
  },
  {
    name: "新説地獄伝リマスターR",
    genre: "同人TCG",
    description: "地獄伝の同人TCGに関する交流・対戦サーバーです。",
    inviteUrl: "https://discord.gg/bTWRHUHT",
    tags: ["地獄伝", "TCG", "対戦"],
    owner: "地獄伝運営"
  }
];