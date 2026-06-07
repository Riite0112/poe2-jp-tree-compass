const terms = [
  { en: "Passive Skill Tree", jp: "パッシブスキルツリー", category: "ツリー", note: "レベルアップやクエストで得たポイントを使い、攻撃・防御・便利効果を伸ばす巨大な成長盤です。" },
  { en: "Passive Skill Point", jp: "パッシブスキルポイント", category: "ツリー", note: "ツリー上のノードを1つ取るためのポイントです。序盤は火力だけでなく生存力にも使います。" },
  { en: "Weapon Set Passive Skill Point", jp: "武器セット用パッシブポイント", category: "ツリー", note: "武器セットごとに別々に割り当てられるポイントです。通常ポイントとして使える場合もあります。" },
  { en: "Travel Node", jp: "通過ノード", category: "ツリー", note: "目的のNotableまで進むための道です。属性を選び直せるノードは装備条件の調整にも使えます。" },
  { en: "Small Passive", jp: "小パッシブ", category: "ツリー", note: "細かい能力上昇。単体では地味ですが、Notableまでの道として合計値を見ます。" },
  { en: "Notable Passive", jp: "中核パッシブ", category: "ツリー", note: "クラスターの目標地点。初心者はまずNotable単位でルートを考えると迷いにくいです。" },
  { en: "Keystone", jp: "キーストーン", category: "ツリー", note: "プレイ感を大きく変える特殊ノード。強力なかわりにデメリットや前提があることが多いです。" },
  { en: "Jewel Socket", jp: "ジュエルソケット", category: "ツリー", note: "ジュエルをはめて効果を得る場所。拾った良いジュエルがある時に価値が上がります。" },
  { en: "Ascendancy", jp: "アセンダンシー", category: "クラス", note: "試練で解放する上位クラス。通常ツリーとは別の少数ポイントでビルドの方向性を決めます。" },
  { en: "Strength", jp: "筋力", category: "属性", note: "主に近接、火、アーマー、ライフ寄りの地域に関係します。" },
  { en: "Dexterity", jp: "器用さ", category: "属性", note: "主に遠隔、雷、回避、命中、フラスコ寄りの地域に関係します。" },
  { en: "Intelligence", jp: "知性", category: "属性", note: "主に呪文、冷気、混沌、エナジーシールド、ミニオン寄りの地域に関係します。" },
  { en: "Life", jp: "ライフ", category: "防御", note: "最も基本的な耐久。死にやすい時はダメージより先に見直します。" },
  { en: "Mana", jp: "マナ", category: "リソース", note: "スキル使用の燃料。消費が重いなら回復、最大値、効率を確認します。" },
  { en: "Spirit", jp: "スピリット", category: "リソース", note: "永続スキルやミニオンなどに使う予約系リソースです。" },
  { en: "Energy Shield", jp: "エナジーシールド", category: "防御", note: "ライフの前に削れる防御層。知性寄りのキャラで伸ばしやすいです。" },
  { en: "Armour", jp: "アーマー", category: "防御", note: "物理ヒットを軽減する防御。大きな一撃には他の防御も合わせます。" },
  { en: "Evasion", jp: "回避", category: "防御", note: "攻撃を避ける防御。避けられなかった時の保険も一緒に考えます。" },
  { en: "Block", jp: "ブロック", category: "防御", note: "盾などでヒットを防ぐ仕組み。確率型なので安定には上限や回復も重要です。" },
  { en: "Critical Damage Bonus", jp: "クリティカルダメージボーナス", category: "攻撃", note: "クリティカル時の追加ダメージ量。被クリティカル軽減の文では防御用語として出ます。" },
  { en: "Accuracy", jp: "命中", category: "攻撃", note: "攻撃が当たるかに関係します。攻撃ビルドで空振り感がある時に確認します。" },
  { en: "Physical Damage", jp: "物理ダメージ", category: "攻撃", note: "武器攻撃の基礎になりやすい属性なしダメージです。" },
  { en: "Fire Damage", jp: "火ダメージ", category: "攻撃", note: "Igniteなど火系の状態異常と関係しやすいダメージです。" },
  { en: "Cold Damage", jp: "冷気ダメージ", category: "攻撃", note: "Freezeなど敵を止める効果と関係しやすいダメージです。" },
  { en: "Lightning Damage", jp: "雷ダメージ", category: "攻撃", note: "Shockなど火力を伸ばす状態異常と関係しやすいダメージです。" },
  { en: "Chaos Damage", jp: "混沌ダメージ", category: "攻撃", note: "毒や継続ダメージ系と一緒に見ることが多いダメージです。" },
  { en: "Projectile", jp: "投射物", category: "攻撃", note: "矢、弾、飛ぶ魔法など。投射物数、速度、貫通などの修飾語が付きます。" },
  { en: "Attack", jp: "攻撃", category: "攻撃", note: "武器や素手を基準にしたスキル分類です。命中や武器ダメージの影響を受けます。" },
  { en: "Spell", jp: "呪文", category: "攻撃", note: "スキル側の値を基準にする分類です。攻撃命中とは別の考え方になります。" },
  { en: "Area of Effect", jp: "効果範囲", category: "攻撃", note: "範囲スキルの広さ。広いほど雑魚処理が楽になりやすいです。" },
  { en: "Minion", jp: "ミニオン", category: "攻撃", note: "召喚した味方。ミニオン用のダメージや生存力はプレイヤー本体とは別枠で読みます。" },
  { en: "Curse", jp: "呪い", category: "補助", note: "敵に弱体効果を与えるスキル群。ボス戦で火力や安全性を補いやすいです。" },
  { en: "Warcry", jp: "ウォークライ", category: "補助", note: "叫びで自分や味方、次の攻撃を強化する近接寄りの仕組みです。" },
  { en: "Flask", jp: "フラスコ", category: "補助", note: "回復や一時的な補助をする消耗品。回復タイミングも強さの一部です。" },
  { en: "Leech", jp: "リーチ", category: "防御", note: "与えたダメージに応じて回復する仕組み。殴り続けられるビルドで強くなります。" },
  { en: "Reservation Efficiency", jp: "予約効率", category: "リソース", note: "永続スキルなどの予約コストを扱いやすくする効果です。" },
  { en: "Endurance Charge", jp: "エンデュランスチャージ", category: "状態", note: "筋力寄りで見かけやすい耐久系チャージです。" },
  { en: "Frenzy Charge", jp: "フレンジーチャージ", category: "状態", note: "器用さ寄りで見かけやすい速度・攻撃寄りのチャージです。" },
  { en: "Power Charge", jp: "パワーチャージ", category: "状態", note: "知性寄りで見かけやすいクリティカルや呪文寄りのチャージです。" },
  { en: "Ignite", jp: "発火", category: "状態", note: "火ダメージに関係する継続ダメージ系の状態異常です。" },
  { en: "Shock", jp: "感電", category: "状態", note: "敵が受けるダメージを増やす雷系の状態異常です。" },
  { en: "Freeze", jp: "凍結", category: "状態", note: "敵を止める冷気系の状態異常です。安全性に直結します。" },
  { en: "Poison", jp: "毒", category: "状態", note: "混沌系の継続ダメージ。重ね方や持続時間を見ると理解しやすいです。" },
  { en: "Bleeding", jp: "出血", category: "状態", note: "物理系の継続ダメージ。移動やヒット条件と絡むことがあります。" },
  { en: "Skill Gem", jp: "スキルジェム", category: "スキル", note: "使うスキルそのもの。PoE2ではサポートジェムをこの中に組み合わせます。" },
  { en: "Support Gem", jp: "サポートジェム", category: "スキル", note: "スキルの性質を変える補助ジェム。対応タグが合うかを見ます。" },
  { en: "Dodge Roll", jp: "ドッジロール", category: "操作", note: "回避行動。ビルドだけでなく、ボス攻撃を避ける基本操作です。" },
  { en: "Respecialisation", jp: "振り直し", category: "ツリー", note: "ゴールドなどを使って取得済みパッシブを外すこと。序盤の実験を怖がりすぎなくて大丈夫です。" }
];

const classes = [
  { name: "Marauder", jp: "マローダー", attr: "Strength", angle: 226, goals: ["melee", "tank", "ignite"] },
  { name: "Warrior", jp: "ウォリアー", attr: "Strength", angle: 252, goals: ["melee", "tank", "warcry"] },
  { name: "Ranger", jp: "レンジャー", attr: "Dexterity", angle: 318, goals: ["ranged", "shock", "evasion"] },
  { name: "Huntress", jp: "ハントレス", attr: "Dexterity", angle: 294, goals: ["ranged", "evasion", "melee"] },
  { name: "Witch", jp: "ウィッチ", attr: "Intelligence", angle: 90, goals: ["minion", "chaos", "spell"] },
  { name: "Sorceress", jp: "ソーサレス", attr: "Intelligence", angle: 66, goals: ["spell", "freeze", "shock"] },
  { name: "Duelist", jp: "デュエリスト", attr: "Str/Dex", angle: 270, goals: ["melee", "ranged", "tank"] },
  { name: "Mercenary", jp: "マーセナリー", attr: "Str/Dex", angle: 342, goals: ["ranged", "projectile", "tank"] },
  { name: "Shadow", jp: "シャドウ", attr: "Dex/Int", angle: 18, goals: ["chaos", "projectile", "evasion"] },
  { name: "Monk", jp: "モンク", attr: "Dex/Int", angle: 42, goals: ["melee", "freeze", "evasion"] },
  { name: "Templar", jp: "テンプラー", attr: "Str/Int", angle: 138, goals: ["spell", "tank", "minion"] },
  { name: "Druid", jp: "ドルイド", attr: "Str/Int", angle: 162, goals: ["melee", "spell", "tank"] }
];

const goals = [
  { id: "melee", label: "近接で戦う", target: "Strength", focus: ["生存力", "武器ダメージ", "攻撃速度"], danger: "火力だけ伸ばすとボスの大技で止まりやすいです。" },
  { id: "ranged", label: "遠隔・弓・クロスボウ", target: "Dexterity", focus: ["命中", "投射物", "回避"], danger: "命中不足はダメージ表示より体感が悪くなります。" },
  { id: "spell", label: "呪文で倒す", target: "Intelligence", focus: ["元素/混沌ダメージ", "マナ", "エナジーシールド"], danger: "消費マナと防御を後回しにすると継戦が苦しくなります。" },
  { id: "minion", label: "ミニオン主体", target: "Intelligence", focus: ["ミニオン火力", "スピリット", "本体防御"], danger: "ミニオンだけでなく本体が倒れない道も必要です。" },
  { id: "tank", label: "倒れにくくする", target: "Strength", focus: ["ライフ", "アーマー/ブロック", "回復"], danger: "防御だけだと戦闘が長引くので、近い火力Notableも拾います。" },
  { id: "evasion", label: "回避で安全に動く", target: "Dexterity", focus: ["回避", "移動感", "フラスコ"], danger: "当たった時の保険としてライフや回復も見ます。" },
  { id: "freeze", label: "冷気で止める", target: "Intelligence", focus: ["冷気ダメージ", "凍結", "範囲"], danger: "凍らない相手への継続火力を準備します。" },
  { id: "shock", label: "雷で火力を伸ばす", target: "Dexterity", focus: ["雷ダメージ", "感電", "速度"], danger: "攻撃/呪文の分類を混ぜて読まないようにします。" },
  { id: "chaos", label: "混沌・毒", target: "Dex/Int", focus: ["混沌ダメージ", "毒", "持続時間"], danger: "即効性が低い時は雑魚処理の範囲も足します。" },
  { id: "projectile", label: "投射物を伸ばす", target: "Dexterity", focus: ["投射物", "命中", "範囲処理"], danger: "追加投射物だけでなく単体火力も確認します。" },
  { id: "ignite", label: "火・発火", target: "Strength", focus: ["火ダメージ", "発火", "持続"], danger: "ヒット火力と継続ダメージのどちらを伸ばすか決めます。" },
  { id: "warcry", label: "ウォークライ", target: "Strength", focus: ["近接火力", "クールダウン", "耐久"], danger: "操作量が増えるため、よく使うキー配置も整えます。" }
];

const buildCatalog = [
  {
    jpTitle: "凍結クロスボウ Witchhunter",
    title: "[0.5] Pohx's Permafrost SSF Witchhunter",
    className: "Mercenary",
    ascendancy: "Witchhunter",
    season: "0.5 RotA",
    stages: ["Starter", "End Game", "SSF"],
    updated: "2026-06-01",
    source: "Mobalytics",
    url: "https://mobalytics.gg/poe-2/builds/pohx-shatter-tactician",
    goal: "freeze",
    search: "Freeze",
    beginner: 4,
    summary: "凍結で安全に進めるクロスボウ型。SSF表記があり、初心者の初回リーグスターター候補にしやすいです。"
  },
  {
    jpTitle: "雷槍 Amazon リーグスターター",
    title: "[0.5] Lightning Spear Amazon League Starter",
    className: "Huntress",
    ascendancy: "Amazon",
    season: "0.5 RotA",
    stages: ["Starter", "End Game"],
    updated: "2026-06-05",
    source: "Mobalytics",
    url: "https://mobalytics.gg/poe-2/amazon-starter-builds",
    goal: "ranged",
    search: "Lightning",
    beginner: 4,
    summary: "遠隔・雷・投射物を軸にしたスターター。ツリーでは器用さ側、命中、投射物、雷を見ます。"
  },
  {
    jpTitle: "旋回攻撃 Martial Artist Monk",
    title: "[0.5] WHIRLING Trinity Martial Artist Monk",
    className: "Monk",
    ascendancy: "Martial Artist",
    season: "0.5 RotA",
    stages: ["Starter", "End Game", "Speed Leveling"],
    updated: "2026-06-05",
    source: "Mobalytics",
    url: "https://mobalytics.gg/poe-2/monk-starter-builds",
    goal: "melee",
    search: "Attack",
    beginner: 3,
    summary: "近接テンポ重視のMonk候補。操作量は少し増えますが、スターターからエンドゲームまで追いやすい枠です。"
  },
  {
    jpTitle: "Hollow Assault 回転Monk",
    title: "Hollow Assault Beyblade",
    className: "Monk",
    ascendancy: "Martial Artist",
    season: "0.5 RotA",
    stages: ["Starter", "End Game"],
    updated: "2026-06-03",
    source: "Mobalytics",
    url: "https://mobalytics.gg/poe-2/builds",
    goal: "melee",
    search: "Melee",
    beginner: 3,
    summary: "Martial Artist系の人気スターター候補。詳細は必ず更新日とパッチ表記を確認してください。"
  },
  {
    jpTitle: "CoC冷気/雷 Infernalist",
    title: "[0.5] Comprehensive CoC Frostbolt/Spark Comet Infernalist",
    className: "Witch",
    ascendancy: "Infernalist",
    season: "0.5 RotA",
    stages: ["Starter", "End Game"],
    updated: "2026-06-05",
    source: "Mobalytics",
    url: "https://mobalytics.gg/poe-2/builds",
    goal: "spell",
    search: "Spell",
    beginner: 2,
    summary: "呪文連動系で伸びしろが大きい一方、仕組みの理解が必要。2キャラ目以降にも向きます。"
  },
  {
    jpTitle: "無限ハンマー Gemling",
    title: "[0.5] Unlimited Hammers - Gemling",
    className: "Mercenary",
    ascendancy: "Gemling Legionnaire",
    season: "0.5 RotA",
    stages: ["End Game"],
    updated: "2026-06-06",
    source: "Mobalytics",
    url: "https://mobalytics.gg/poe-2/builds",
    goal: "projectile",
    search: "Projectile",
    beginner: 2,
    summary: "更新が新しいエンドゲーム候補。装備要求や仕組みが重い可能性があるので、初心者はスターターから移行する想定で見ます。"
  },
  {
    jpTitle: "Djinn Sorceress エンドゲーム",
    title: "[0.5] Djinn Sorceress End Game Guide",
    className: "Sorceress",
    ascendancy: "Disciple of Varashta",
    season: "0.5 RotA",
    stages: ["End Game"],
    updated: "2026-06-05",
    source: "Mobalytics",
    url: "https://mobalytics.gg/poe-2/builds",
    goal: "spell",
    search: "Elemental",
    beginner: 2,
    summary: "最新環境のSorceressエンドゲーム候補。スターター適性より、完成後の方向性確認向けです。"
  },
  {
    jpTitle: "Wyvern Oracle Druid スターター",
    title: "0.5 Wyvern Oracle Druid League Starter",
    className: "Druid",
    ascendancy: "Oracle",
    season: "0.5 RotA",
    stages: ["Starter"],
    updated: "2026-05-31",
    source: "Mobalytics",
    url: "https://mobalytics.gg/poe-2/builds/wyvern-oracle-druid-league-starter",
    goal: "spell",
    search: "Spell",
    beginner: 3,
    summary: "Druidのリーグスターター候補。Oracle固有要素が絡むため、ガイドの段階別説明を確認しながら進めます。"
  }
];

const regions = [
  { id: "Intelligence", label: "知性", sub: "呪文・冷気・混沌・ES", angle: 90, color: "#7aa4c7" },
  { id: "Str/Int", label: "筋力/知性", sub: "神聖・召喚・耐久呪文", angle: 150, color: "#ad8bcf" },
  { id: "Strength", label: "筋力", sub: "近接・火・アーマー", angle: 230, color: "#d46d45" },
  { id: "Str/Dex", label: "筋力/器用さ", sub: "武器・弾薬・ブロック", angle: 285, color: "#d8a84e" },
  { id: "Dexterity", label: "器用さ", sub: "遠隔・雷・回避", angle: 330, color: "#63b7a3" },
  { id: "Dex/Int", label: "器用さ/知性", sub: "毒・罠風・技巧", angle: 30, color: "#88b96c" }
];

let activeCategory = "すべて";

const treeState = {
  mode: "simple",
  data: null,
  nodes: [],
  nodeById: new Map(),
  startNodeIds: new Set(),
  highlightedIds: new Set(),
  selectedNodeId: null,
  viewBox: null,
  fullViewBox: null,
  detailLoaded: false,
  detailLoading: false,
  panStart: null
};

const classStartNodeByClass = {
  Marauder: "47175",
  Warrior: "47175",
  Ranger: "50459",
  Huntress: "50459",
  Witch: "54447",
  Sorceress: "54447",
  Duelist: "50986",
  Mercenary: "50986",
  Shadow: "44683",
  Monk: "44683",
  Templar: "61525",
  Druid: "61525"
};

const classStartLabels = {
  "47175": "Marauder / Warrior",
  "50459": "Ranger / Huntress",
  "54447": "Witch / Sorceress",
  "50986": "Duelist / Mercenary",
  "44683": "Shadow / Monk",
  "61525": "Templar / Druid"
};

const els = {
  termSearch: document.querySelector("#term-search"),
  clearSearch: document.querySelector("#clear-search"),
  statInput: document.querySelector("#stat-input"),
  translationOutput: document.querySelector("#translation-output"),
  categoryFilter: document.querySelector("#category-filter"),
  termList: document.querySelector("#term-list"),
  classSelect: document.querySelector("#class-select"),
  goalSelect: document.querySelector("#goal-select"),
  pointSlider: document.querySelector("#point-slider"),
  pointBudget: document.querySelector("#point-budget"),
  treeTitle: document.querySelector("#tree-title"),
  treeVisual: document.querySelector("#tree-visual"),
  simpleMode: document.querySelector("#simple-mode"),
  detailMode: document.querySelector("#detail-mode"),
  detailControls: document.querySelector("#detail-controls"),
  nodeSearch: document.querySelector("#node-search"),
  focusClass: document.querySelector("#focus-class"),
  resetTreeView: document.querySelector("#reset-tree-view"),
  zoomIn: document.querySelector("#zoom-in"),
  zoomOut: document.querySelector("#zoom-out"),
  notableOnly: document.querySelector("#notable-only"),
  buildClassFilter: document.querySelector("#build-class-filter"),
  buildStageFilter: document.querySelector("#build-stage-filter"),
  buildList: document.querySelector("#build-list"),
  refreshMeta: document.querySelector("#refresh-meta"),
  metaStatus: document.querySelector("#meta-status"),
  treeNote: document.querySelector("#tree-note"),
  recommendation: document.querySelector("#recommendation"),
  regionsLayer: document.querySelector("#regions-layer"),
  linksLayer: document.querySelector("#links-layer"),
  classLayer: document.querySelector("#class-layer"),
  routeLayer: document.querySelector("#route-layer")
};

function polar(cx, cy, radius, angle) {
  const rad = (angle - 90) * Math.PI / 180;
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

function sectorPath(cx, cy, inner, outer, startAngle, endAngle) {
  const p1 = polar(cx, cy, outer, startAngle);
  const p2 = polar(cx, cy, outer, endAngle);
  const p3 = polar(cx, cy, inner, endAngle);
  const p4 = polar(cx, cy, inner, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return [
    `M ${p1.x} ${p1.y}`,
    `A ${outer} ${outer} 0 ${largeArc} 1 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${inner} ${inner} 0 ${largeArc} 0 ${p4.x} ${p4.y}`,
    "Z"
  ].join(" ");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return value.trim().toLowerCase();
}

function cleanStatMarkup(value) {
  return String(value)
    .replace(/\[([^\]|]+)\|([^\]]+)\]/g, "$2")
    .replace(/\[([^\]]+)\]/g, "$1");
}

function translateKnownTerms(value) {
  let text = escapeHtml(cleanStatMarkup(value));
  const sortedTerms = [...terms].sort((a, b) => b.en.length - a.en.length);

  for (const term of sortedTerms) {
    const regex = new RegExp(`\\b${escapeRegExp(escapeHtml(term.en))}\\b`, "gi");
    text = text.replace(regex, `<mark>${term.jp}</mark>`);
  }

  return text.replace(/\n/g, "<br>");
}

function termMatches(term, query) {
  if (!query) return true;
  const q = normalize(query);
  return [term.en, term.jp, term.category, term.note].some((value) => normalize(value).includes(q));
}

function renderCategories() {
  const categories = ["すべて", ...new Set(terms.map((term) => term.category))];
  els.categoryFilter.innerHTML = categories.map((category) => (
    `<button type="button" class="${category === activeCategory ? "is-active" : ""}" data-category="${category}">${category}</button>`
  )).join("");
}

function renderTerms() {
  const query = els.termSearch.value;
  const filtered = terms
    .filter((term) => activeCategory === "すべて" || term.category === activeCategory)
    .filter((term) => termMatches(term, query))
    .slice(0, 28);

  els.termList.innerHTML = filtered.map((term) => `
    <article class="term-card">
      <header>
        <div>
          <strong>${term.en}</strong>
          <div class="jp">${term.jp}</div>
        </div>
        <span class="tag">${term.category}</span>
      </header>
      <p>${term.note}</p>
    </article>
  `).join("");
}

function translateText() {
  const raw = els.statInput.value.trim();
  if (!raw) {
    els.translationOutput.innerHTML = "ここに英語の効果文を貼ると、既知の用語を日本語ラベルに置き換えて読み方を出します。";
    return;
  }

  let translated = raw;
  const matched = [];
  const sortedTerms = [...terms].sort((a, b) => b.en.length - a.en.length);

  for (const term of sortedTerms) {
    const regex = new RegExp(`\\b${escapeRegExp(term.en)}\\b`, "gi");
    if (regex.test(translated)) {
      matched.push(term);
      translated = translated.replace(regex, `${term.jp}`);
    }
  }

  const marked = matched.reduce((text, term) => {
    const regex = new RegExp(escapeRegExp(term.jp), "g");
    return text.replace(regex, `<mark>${term.jp}</mark>`);
  }, translated);

  const notes = matched.slice(0, 4).map((term) => `${term.jp}: ${term.note}`).join("<br>");
  els.translationOutput.innerHTML = `<strong>候補訳:</strong> ${marked}${notes ? `<br><br>${notes}` : ""}`;
}

function populateSelects() {
  els.classSelect.innerHTML = classes.map((klass) => (
    `<option value="${klass.name}">${klass.jp} / ${klass.name}</option>`
  )).join("");
  els.goalSelect.innerHTML = goals.map((goal) => (
    `<option value="${goal.id}">${goal.label}</option>`
  )).join("");
  els.buildClassFilter.innerHTML = [
    '<option value="all">すべて</option>',
    ...classes.map((klass) => `<option value="${klass.name}">${klass.jp}</option>`)
  ].join("");
  els.classSelect.value = "Witch";
  els.goalSelect.value = "minion";
  els.buildClassFilter.value = "all";
}

function freshnessLabel(build) {
  const updated = new Date(`${build.updated}T00:00:00`);
  const days = Math.max(0, Math.round((Date.now() - updated.getTime()) / 86400000));
  if (days <= 7) return "新しめ";
  if (days <= 21) return "要確認";
  return "古い可能性";
}

function buildScore(build) {
  const selectedClass = els.classSelect.value;
  const classFilter = els.buildClassFilter.value;
  const stageFilter = els.buildStageFilter.value;
  let score = build.beginner * 10;

  if (build.className === selectedClass) score += 30;
  if (classFilter !== "all" && build.className === classFilter) score += 40;
  if (stageFilter !== "all" && build.stages.includes(stageFilter)) score += 25;
  if (build.stages.includes("Starter")) score += 10;
  if (build.season.includes("0.5")) score += 20;
  return score;
}

function renderBuilds() {
  const classFilter = els.buildClassFilter.value;
  const stageFilter = els.buildStageFilter.value;
  const filtered = buildCatalog
    .filter((build) => classFilter === "all" || build.className === classFilter)
    .filter((build) => stageFilter === "all" || build.stages.includes(stageFilter))
    .sort((a, b) => buildScore(b) - buildScore(a));

  if (!filtered.length) {
    els.buildList.innerHTML = '<div class="meta-status">条件に合う候補がありません。クラスか用途を広げてください。</div>';
    return;
  }

  els.buildList.innerHTML = filtered.map((build) => {
    const klass = classes.find((item) => item.name === build.className);
    const tags = [
      klass?.jp || build.className,
      build.ascendancy,
      build.season,
      ...build.stages,
      freshnessLabel(build),
      `初心者度 ${build.beginner}/5`
    ];

    return `
      <article class="build-card">
        <header>
          <h3>${escapeHtml(build.jpTitle)}</h3>
          <div class="source-title">${escapeHtml(build.title)}</div>
          <div class="build-tags">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
        </header>
        <p>${escapeHtml(build.summary)}</p>
        <div class="build-actions">
          <button type="button" data-build-index="${buildCatalog.indexOf(build)}">このビルドで見る</button>
          <a href="${escapeHtml(build.url)}" target="_blank" rel="noreferrer">${escapeHtml(build.source)}</a>
        </div>
      </article>
    `;
  }).join("");
}

async function applyBuild(buildIndex) {
  const build = buildCatalog[Number(buildIndex)];
  if (!build) return;

  els.classSelect.value = build.className;
  els.goalSelect.value = build.goal;
  els.nodeSearch.value = build.search;
  await setTreeMode("detail");
  searchDetailedNodes({ focusFirst: true });
  buildRecommendation();
  els.metaStatus.innerHTML = `<strong>${escapeHtml(build.jpTitle)}</strong><br>${escapeHtml(build.season)} / ${escapeHtml(build.ascendancy)} を選択しました。詳細ツリーでは ${escapeHtml(build.search)} を検索しています。`;
}

async function refreshMetaSignals() {
  els.metaStatus.textContent = "公式データとWiki更新を確認中です。";
  const checkedAt = new Date().toLocaleString("ja-JP");

  const [releaseResult, wikiResult] = await Promise.allSettled([
    fetch("https://api.github.com/repos/grindinggear/poe2-skilltree-export/releases/latest").then((response) => response.json()),
    fetch("https://www.poe2wiki.net/api.php?action=query&list=recentchanges&rcnamespace=0&rclimit=1&format=json&origin=*").then((response) => response.json())
  ]);

  const parts = [`確認: ${checkedAt}`];

  if (releaseResult.status === "fulfilled" && releaseResult.value.tag_name) {
    parts.push(`公式ツリー: ${releaseResult.value.tag_name} (${new Date(releaseResult.value.published_at).toLocaleDateString("ja-JP")})`);
  } else {
    parts.push("公式ツリー: 取得失敗");
  }

  const recent = wikiResult.status === "fulfilled"
    ? wikiResult.value.query?.recentchanges?.[0]
    : null;
  if (recent) {
    parts.push(`Wiki更新: ${recent.title} (${new Date(recent.timestamp).toLocaleString("ja-JP")})`);
  } else {
    parts.push("Wiki更新: 取得失敗");
  }

  parts.push("ビルド候補は出典リンク先の更新日と0.5表記を必ず確認してください。");
  els.metaStatus.innerHTML = parts.map(escapeHtml).join("<br>");
}

function regionPosition(regionId, radius = 168) {
  const region = regions.find((item) => item.id === regionId) || regions[0];
  return polar(350, 280, radius, region.angle);
}

function classPosition(klass) {
  return polar(350, 280, 224, klass.angle);
}

function setTreeViewBox(viewBox) {
  treeState.viewBox = { ...viewBox };
  els.treeVisual.setAttribute(
    "viewBox",
    `${treeState.viewBox.x} ${treeState.viewBox.y} ${treeState.viewBox.width} ${treeState.viewBox.height}`
  );
}

function paddedViewBox(data, padding = 1500) {
  return {
    x: data.min_x - padding,
    y: data.min_y - padding,
    width: data.max_x - data.min_x + padding * 2,
    height: data.max_y - data.min_y + padding * 2
  };
}

async function loadDetailedTree() {
  if (treeState.detailLoaded || treeState.detailLoading) return;

  treeState.detailLoading = true;
  els.treeNote.innerHTML = "公式パッシブツリーデータを読み込み中です。";

  try {
    const response = await fetch("data/poe2-tree.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    treeState.data = data;
    treeState.nodes = Object.entries(data.nodes)
      .map(([id, node]) => ({ ...node, id: String(id) }))
      .filter((node) => Number.isFinite(node.x) && Number.isFinite(node.y));
    treeState.nodeById = new Map(treeState.nodes.map((node) => [node.id, node]));
    treeState.startNodeIds = new Set(Object.values(classStartNodeByClass));
    treeState.fullViewBox = paddedViewBox(data);
    treeState.detailLoaded = true;
  } catch (error) {
    els.treeNote.innerHTML = `詳細ツリーを読み込めませんでした。ローカルHTTPサーバーから開いているか確認してください。<br><span class="tag">${escapeHtml(error.message)}</span>`;
  } finally {
    treeState.detailLoading = false;
  }
}

function nodeKindClasses(node) {
  const classesForNode = ["detail-node"];
  const isImportant = node.isNotable || node.isKeystone || node.isJewelSocket || treeState.startNodeIds.has(node.id);

  if (node.isKeystone) classesForNode.push("is-keystone");
  else if (node.isJewelSocket) classesForNode.push("is-jewel");
  else if (node.isNotable) classesForNode.push("is-notable");
  else classesForNode.push("is-small");

  if (treeState.startNodeIds.has(node.id)) classesForNode.push("is-start");
  if (treeState.highlightedIds.has(node.id)) classesForNode.push("is-highlight");
  if (treeState.selectedNodeId === node.id) classesForNode.push("is-selected");
  if (els.notableOnly.checked && !isImportant) classesForNode.push("is-faded");

  return classesForNode.join(" ");
}

function detailUnitsPerPixel() {
  const rect = els.treeVisual.getBoundingClientRect();
  const width = rect.width || 700;
  const viewWidth = treeState.viewBox?.width || treeState.fullViewBox?.width || 47411;
  return viewWidth / width;
}

function detailZoomBand() {
  const width = treeState.viewBox?.width || treeState.fullViewBox?.width || 47411;
  if (width > 22000) return "far";
  if (width > 9000) return "mid";
  return "near";
}

function nodeRadiusPixels(node) {
  const band = detailZoomBand();

  if (band === "far") {
    if (treeState.startNodeIds.has(node.id)) return 4.2;
    if (node.isKeystone) return 3.5;
    if (node.isNotable || node.isJewelSocket) return 3;
    return 1.35;
  }

  if (band === "mid") {
    if (treeState.startNodeIds.has(node.id)) return 7.2;
    if (node.isKeystone) return 6.4;
    if (node.isNotable || node.isJewelSocket) return 5.4;
    return 2.6;
  }

  if (treeState.startNodeIds.has(node.id)) return 9;
  if (node.isKeystone) return 8;
  if (node.isNotable || node.isJewelSocket) return 6.6;
  return 3.4;
}

function nodeStrokePixels(node) {
  if (treeState.selectedNodeId === node.id) return 3.5;
  if (treeState.highlightedIds.has(node.id)) return 2.4;
  if (treeState.startNodeIds.has(node.id)) return 2.6;
  if (node.isKeystone || node.isNotable || node.isJewelSocket) return 1.9;
  return 1.15;
}

function nodeRadius(node) {
  return nodeRadiusPixels(node) * detailUnitsPerPixel();
}

function nodeStrokeWidth(node) {
  return nodeStrokePixels(node) * detailUnitsPerPixel();
}

function detailEdgeStrokeWidth() {
  const band = detailZoomBand();
  const px = band === "far" ? 0.65 : band === "mid" ? 1.05 : 1.35;
  return px * detailUnitsPerPixel();
}

function renderDetailedEdges() {
  const path = treeState.data.edges.map((edge) => {
    const from = treeState.nodeById.get(String(edge.from));
    const to = treeState.nodeById.get(String(edge.to));
    if (!from || !to) return "";
    return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
  }).join("");

  return `<path class="detail-edge" stroke-width="${detailEdgeStrokeWidth()}" d="${path}"></path>`;
}

function renderDetailedNodes() {
  return treeState.nodes.map((node) => (
    `<circle class="${nodeKindClasses(node)}" data-node-id="${node.id}" cx="${node.x}" cy="${node.y}" r="${nodeRadius(node)}" stroke-width="${nodeStrokeWidth(node)}"></circle>`
  )).join("");
}

function renderClassStartLabels() {
  if (!treeState.viewBox || treeState.viewBox.width > 12000) return "";

  return Object.entries(classStartLabels).map(([id, label]) => {
    const node = treeState.nodeById.get(id);
    if (!node) return "";
    return `<text class="class-start-label" x="${node.x}" y="${node.y - 390}">${escapeHtml(label)}</text>`;
  }).join("");
}

function drawDetailedTree() {
  if (!treeState.detailLoaded) return;

  els.treeVisual.classList.add("is-detail");
  els.linksLayer.innerHTML = renderDetailedEdges();
  els.regionsLayer.innerHTML = renderDetailedNodes();
  els.classLayer.innerHTML = renderClassStartLabels();
  els.routeLayer.innerHTML = "";

  if (!treeState.viewBox) {
    setTreeViewBox(treeState.fullViewBox);
  } else {
    setTreeViewBox(treeState.viewBox);
  }
}

function resetDetailedView() {
  if (!treeState.fullViewBox) return;
  setTreeViewBox(treeState.fullViewBox);
  drawDetailedTree();
  renderDetailedNote();
}

function zoomDetailed(factor) {
  if (!treeState.viewBox) return;
  const nextWidth = treeState.viewBox.width * factor;
  const nextHeight = treeState.viewBox.height * factor;
  const centerX = treeState.viewBox.x + treeState.viewBox.width / 2;
  const centerY = treeState.viewBox.y + treeState.viewBox.height / 2;

  setTreeViewBox({
    x: centerX - nextWidth / 2,
    y: centerY - nextHeight / 2,
    width: nextWidth,
    height: nextHeight
  });
  drawDetailedTree();
}

function focusViewOnNode(node, width = 6200) {
  const wrap = els.treeVisual.getBoundingClientRect();
  const aspect = wrap.height > 0 ? wrap.width / wrap.height : 1.24;
  const height = width / aspect;
  setTreeViewBox({
    x: node.x - width / 2,
    y: node.y - height / 2,
    width,
    height
  });
}

function focusSelectedClass() {
  const startId = classStartNodeByClass[els.classSelect.value];
  const node = treeState.nodeById.get(startId);
  if (!node) return;
  treeState.selectedNodeId = startId;
  treeState.highlightedIds = new Set([startId]);
  focusViewOnNode(node, 7600);
  drawDetailedTree();
  renderDetailedNote();
}

function searchDetailedNodes({ focusFirst = true } = {}) {
  if (!treeState.detailLoaded) return;

  const query = normalize(els.nodeSearch.value);
  treeState.highlightedIds.clear();

  if (query.length >= 2) {
    for (const node of treeState.nodes) {
      const haystack = normalize(`${node.name || ""} ${(node.stats || []).join(" ")}`);
      if (haystack.includes(query)) treeState.highlightedIds.add(node.id);
    }
  }

  if (focusFirst && treeState.highlightedIds.size > 0) {
    const firstId = [...treeState.highlightedIds][0];
    const node = treeState.nodeById.get(firstId);
    treeState.selectedNodeId = firstId;
    if (node) focusViewOnNode(node, 5200);
  }

  drawDetailedTree();
  renderDetailedNote();
}

function nodeBadges(node) {
  const badges = [];
  if (treeState.startNodeIds.has(node.id)) badges.push("Class start");
  if (node.isKeystone) badges.push("Keystone");
  if (node.isNotable) badges.push("Notable");
  if (node.isJewelSocket) badges.push("Jewel Socket");
  if (node.isAscendancyStart) badges.push("Ascendancy");
  if (!badges.length) badges.push("Small Passive");
  return badges;
}

function renderDetailedNote() {
  if (!treeState.detailLoaded) return;

  const selectedNode = treeState.nodeById.get(treeState.selectedNodeId);
  if (!selectedNode) {
    const matchCount = treeState.highlightedIds.size;
    els.treeNote.innerHTML = `<strong>詳細ツリー</strong><br>GGG公式データから ${treeState.nodes.length.toLocaleString()} ノードを表示しています。${matchCount ? `<br>検索一致: ${matchCount.toLocaleString()}件` : ""}`;
    return;
  }

  const name = selectedNode.name || classStartLabels[selectedNode.id] || `Node ${selectedNode.id}`;
  const stats = selectedNode.stats && selectedNode.stats.length
    ? selectedNode.stats.map((stat) => `<li>${translateKnownTerms(stat)}</li>`).join("")
    : "<li>開始地点または接続用ノードです。</li>";

  els.treeNote.innerHTML = `
    <div class="node-detail">
      <div>
        <h3>${escapeHtml(name)}</h3>
        <div class="node-meta">${nodeBadges(selectedNode).map((badge) => `<span>${escapeHtml(badge)}</span>`).join("")}</div>
      </div>
      <ul>${stats}</ul>
    </div>
  `;
}

function selectDetailedNode(nodeId, shouldFocus = false) {
  const node = treeState.nodeById.get(String(nodeId));
  if (!node) return;
  treeState.selectedNodeId = node.id;
  treeState.highlightedIds.add(node.id);
  if (shouldFocus) focusViewOnNode(node, 5200);
  drawDetailedTree();
  renderDetailedNote();
}

async function setTreeMode(mode) {
  treeState.mode = mode;
  els.simpleMode.classList.toggle("is-active", mode === "simple");
  els.detailMode.classList.toggle("is-active", mode === "detail");
  els.detailControls.hidden = mode !== "detail";
  els.treeTitle.textContent = mode === "detail"
    ? "公式データの詳細ツリーを見る"
    : "複雑なツリーを、まず6つの地域で見る";

  if (mode === "detail") {
    await loadDetailedTree();
    if (!treeState.detailLoaded) return;
    treeState.viewBox ??= treeState.fullViewBox;
    drawDetailedTree();
    renderDetailedNote();
  } else {
    treeState.selectedNodeId = null;
    treeState.highlightedIds.clear();
    els.treeVisual.classList.remove("is-detail", "is-panning");
    els.treeVisual.setAttribute("viewBox", "0 0 700 560");
    updateTree();
  }
}

function drawTree() {
  const selectedClass = classes.find((klass) => klass.name === els.classSelect.value);
  const selectedGoal = goals.find((goal) => goal.id === els.goalSelect.value);
  const focusRegion = selectedGoal.target;
  const classRegion = selectedClass.attr;

  els.treeVisual.classList.remove("is-detail", "is-panning");
  els.treeVisual.setAttribute("viewBox", "0 0 700 560");

  els.linksLayer.innerHTML = regions.map((region) => {
    const point = regionPosition(region.id, 176);
    return `<path class="tree-link" d="M 350 280 Q ${point.x} ${point.y} ${point.x} ${point.y}"/>`;
  }).join("");

  els.regionsLayer.innerHTML = regions.map((region) => {
    const start = region.angle - 28;
    const end = region.angle + 28;
    const labelPoint = regionPosition(region.id, 145);
    const isFocus = region.id === focusRegion || region.id === classRegion;
    return `
      <g>
        <path class="region-shape ${isFocus ? "is-focus" : ""}" fill="${region.color}" d="${sectorPath(350, 280, 70, 210, start, end)}"></path>
        <text class="region-label" x="${labelPoint.x}" y="${labelPoint.y}">${region.label}</text>
        <text class="region-sub" x="${labelPoint.x}" y="${labelPoint.y + 20}">${region.sub}</text>
      </g>
    `;
  }).join("");

  els.classLayer.innerHTML = classes.map((klass) => {
    const point = classPosition(klass);
    const selected = klass.name === selectedClass.name;
    return `
      <g class="class-node ${selected ? "is-selected" : ""}" data-class="${klass.name}" transform="translate(${point.x} ${point.y})">
        <circle r="28"></circle>
        <text y="4">${klass.jp}</text>
      </g>
    `;
  }).join("");

  const start = classPosition(selectedClass);
  const middle = regionPosition(classRegion, 112);
  const end = regionPosition(focusRegion, 166);
  els.routeLayer.innerHTML = `
    <path class="route-line" d="M ${start.x} ${start.y} Q ${middle.x} ${middle.y} ${end.x} ${end.y}"></path>
    <circle class="route-dot" cx="${start.x}" cy="${start.y}" r="7"></circle>
    <circle class="route-dot" cx="${end.x}" cy="${end.y}" r="8"></circle>
  `;

  document.querySelectorAll(".class-node").forEach((node) => {
    node.addEventListener("click", () => {
      els.classSelect.value = node.dataset.class;
      syncGoalForClass();
      updateTree();
    });
  });
}

function syncGoalForClass() {
  const selectedClass = classes.find((klass) => klass.name === els.classSelect.value);
  if (!selectedClass.goals.includes(els.goalSelect.value)) {
    els.goalSelect.value = selectedClass.goals[0];
  }
}

function buildRecommendation() {
  const selectedClass = classes.find((klass) => klass.name === els.classSelect.value);
  const selectedGoal = goals.find((goal) => goal.id === els.goalSelect.value);
  const points = Number(els.pointSlider.value);
  const phase = points <= 20 ? "序盤" : points <= 60 ? "中盤" : "終盤前";
  const classRegionText = selectedClass.attr.replace("Strength", "筋力").replace("Dexterity", "器用さ").replace("Intelligence", "知性");

  const steps = [
    {
      title: `1. ${selectedClass.jp}の開始地域を固める`,
      body: `${phase}は遠くへ走りすぎず、${classRegionText}側の近いNotableを1つの目標にします。`
    },
    {
      title: `2. ${selectedGoal.focus[0]}を優先する`,
      body: `${selectedGoal.label}では「${selectedGoal.focus.join(" / ")}」をひとまとまりで見ます。1種類だけ伸ばすより失敗しにくいです。`
    },
    {
      title: "3. 死因を1つだけメモする",
      body: `即死ならライフや防御、長期戦なら回復やマナ、当たらないなら命中を足します。${selectedGoal.danger}`
    }
  ];

  els.recommendation.innerHTML = steps.map((step) => `
    <article class="step-card">
      <strong>${step.title}</strong>
      <span>${step.body}</span>
    </article>
  `).join("");

  if (treeState.mode === "detail") {
    renderDetailedNote();
  } else {
    els.treeNote.innerHTML = `<strong>${selectedClass.jp} + ${selectedGoal.label}</strong><br>この線は実際のノード配置ではなく、初心者向けの読み方です。最初は「開始地点から近い中核パッシブを取り、必要に応じて防御へ戻る」と考えるとツリー全体が小さく見えます。`;
  }
}

function updateTree() {
  els.pointBudget.textContent = els.pointSlider.value;
  if (treeState.mode === "detail") {
    if (treeState.detailLoaded) {
      drawDetailedTree();
      renderDetailedNote();
    }
  } else {
    drawTree();
  }
  buildRecommendation();
}

function bindEvents() {
  els.termSearch.addEventListener("input", renderTerms);
  els.clearSearch.addEventListener("click", () => {
    els.termSearch.value = "";
    els.statInput.value = "";
    renderTerms();
    translateText();
  });
  els.statInput.addEventListener("input", translateText);
  els.categoryFilter.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderCategories();
    renderTerms();
  });
  els.classSelect.addEventListener("change", () => {
    syncGoalForClass();
    updateTree();
    renderBuilds();
    if (treeState.mode === "detail" && treeState.detailLoaded) focusSelectedClass();
  });
  els.goalSelect.addEventListener("change", updateTree);
  els.pointSlider.addEventListener("input", updateTree);
  els.buildClassFilter.addEventListener("change", renderBuilds);
  els.buildStageFilter.addEventListener("change", renderBuilds);
  els.buildList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-build-index]");
    if (!button) return;
    applyBuild(button.dataset.buildIndex);
  });
  els.refreshMeta.addEventListener("click", refreshMetaSignals);
  els.simpleMode.addEventListener("click", () => {
    setTreeMode("simple");
  });
  els.detailMode.addEventListener("click", () => {
    setTreeMode("detail");
  });
  els.nodeSearch.addEventListener("input", () => {
    searchDetailedNodes({ focusFirst: false });
  });
  els.nodeSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchDetailedNodes({ focusFirst: true });
    }
  });
  els.focusClass.addEventListener("click", focusSelectedClass);
  els.resetTreeView.addEventListener("click", resetDetailedView);
  els.zoomIn.addEventListener("click", () => zoomDetailed(0.72));
  els.zoomOut.addEventListener("click", () => zoomDetailed(1.38));
  els.notableOnly.addEventListener("change", () => {
    if (treeState.mode === "detail") drawDetailedTree();
  });
  els.treeVisual.addEventListener("click", (event) => {
    if (treeState.mode !== "detail") return;
    const target = event.target.closest(".detail-node");
    if (!target) return;
    selectDetailedNode(target.dataset.nodeId);
  });
  els.treeVisual.addEventListener("wheel", (event) => {
    if (treeState.mode !== "detail") return;
    event.preventDefault();
    zoomDetailed(event.deltaY > 0 ? 1.16 : 0.86);
  }, { passive: false });
  els.treeVisual.addEventListener("pointerdown", (event) => {
    if (treeState.mode !== "detail" || event.target.closest(".detail-node")) return;
    els.treeVisual.setPointerCapture(event.pointerId);
    els.treeVisual.classList.add("is-panning");
    treeState.panStart = {
      x: event.clientX,
      y: event.clientY,
      viewBox: { ...treeState.viewBox }
    };
  });
  els.treeVisual.addEventListener("pointermove", (event) => {
    if (!treeState.panStart || treeState.mode !== "detail") return;
    const rect = els.treeVisual.getBoundingClientRect();
    const dx = (event.clientX - treeState.panStart.x) / rect.width * treeState.panStart.viewBox.width;
    const dy = (event.clientY - treeState.panStart.y) / rect.height * treeState.panStart.viewBox.height;
    setTreeViewBox({
      ...treeState.panStart.viewBox,
      x: treeState.panStart.viewBox.x - dx,
      y: treeState.panStart.viewBox.y - dy
    });
  });
  els.treeVisual.addEventListener("pointerup", () => {
    treeState.panStart = null;
    els.treeVisual.classList.remove("is-panning");
  });
  els.treeVisual.addEventListener("pointercancel", () => {
    treeState.panStart = null;
    els.treeVisual.classList.remove("is-panning");
  });
}

renderCategories();
renderTerms();
translateText();
populateSelects();
bindEvents();
updateTree();
renderBuilds();
