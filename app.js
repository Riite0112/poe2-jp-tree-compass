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

const regions = [
  { id: "Intelligence", label: "知性", sub: "呪文・冷気・混沌・ES", angle: 90, color: "#7aa4c7" },
  { id: "Str/Int", label: "筋力/知性", sub: "神聖・召喚・耐久呪文", angle: 150, color: "#ad8bcf" },
  { id: "Strength", label: "筋力", sub: "近接・火・アーマー", angle: 230, color: "#d46d45" },
  { id: "Str/Dex", label: "筋力/器用さ", sub: "武器・弾薬・ブロック", angle: 285, color: "#d8a84e" },
  { id: "Dexterity", label: "器用さ", sub: "遠隔・雷・回避", angle: 330, color: "#63b7a3" },
  { id: "Dex/Int", label: "器用さ/知性", sub: "毒・罠風・技巧", angle: 30, color: "#88b96c" }
];

let activeCategory = "すべて";

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

function normalize(value) {
  return value.trim().toLowerCase();
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
  els.classSelect.value = "Witch";
  els.goalSelect.value = "minion";
}

function regionPosition(regionId, radius = 168) {
  const region = regions.find((item) => item.id === regionId) || regions[0];
  return polar(350, 280, radius, region.angle);
}

function classPosition(klass) {
  return polar(350, 280, 224, klass.angle);
}

function drawTree() {
  const selectedClass = classes.find((klass) => klass.name === els.classSelect.value);
  const selectedGoal = goals.find((goal) => goal.id === els.goalSelect.value);
  const focusRegion = selectedGoal.target;
  const classRegion = selectedClass.attr;

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

  els.treeNote.innerHTML = `<strong>${selectedClass.jp} + ${selectedGoal.label}</strong><br>この線は実際のノード配置ではなく、初心者向けの読み方です。最初は「開始地点から近い中核パッシブを取り、必要に応じて防御へ戻る」と考えるとツリー全体が小さく見えます。`;
}

function updateTree() {
  els.pointBudget.textContent = els.pointSlider.value;
  drawTree();
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
  });
  els.goalSelect.addEventListener("change", updateTree);
  els.pointSlider.addEventListener("input", updateTree);
}

renderCategories();
renderTerms();
translateText();
populateSelects();
bindEvents();
updateTree();
