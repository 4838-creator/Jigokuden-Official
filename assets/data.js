// assets/data.js

// お知らせ
window.NEWS = [
  { date: "2026-07-05", tag: "更新", title: "書庫を改装。PDFがページ内で読めるようになりました。", body: "各書物の「読む」から閲覧できます。" },
  { date: "2026-04-30", tag: "告知", title: "新説地獄戦記R 第2弾カードセットを収蔵しました。", body: "書物にて公開中。" },
  { date: "2026-03-01", tag: "更新", title: "HPを開門しました。", body: "まずは書庫と界隈から。" }
];

// 書物（PDF）
window.SCROLLS = [
  {
    title: "新説地獄戦記R_公式ルールブック",
    type: "TCG",
    date: "2026-03-01",
    file: "scrolls/新説地獄戦記R_公式ルールブック.pdf",
    tags: ["新説地獄戦記R", "TCG", "ルール"],
    note: "同人TCG「真・新説地獄戦記R（リマスター）」の公式ルール。権威を積み、法令を布き、衆生を出廷させて相手の魂20を削り切れ。"
  },
  {
    title: "新説地獄戦記R_第1弾カードセット",
    type: "TCG",
    date: "2026-04-30",
    file: "scrolls/新説地獄戦記R_第1弾.pdf",
    tags: ["新説地獄戦記R", "TCG", "カード"],
    note: "第1弾カードプール。法令カード・衆生カードを収録。"
  },
  {
    title: "新説地獄戦記R_第2弾カードセット",
    type: "TCG",
    date: "2026-04-30",
    file: "scrolls/新説地獄戦記R_第2弾.pdf",
    tags: ["新説地獄戦記R", "TCG", "カード"],
    note: "第2弾カードプール。新たな法令・衆生を追加収録。"
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