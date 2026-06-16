const frame = document.querySelector("#previewFrame");
const beforeFrame = document.querySelector("#beforeFrame");
const stageFrame = document.querySelector("#stageFrame");
const beforeStageFrame = document.querySelector("#beforeStageFrame");
const stageCompare = document.querySelector("#stageCompare");
const blockGrid = document.querySelector("#blockGrid");
const layersList = document.querySelector("#layersList");
const selectedBadge = document.querySelector("#selectedBadge");
const currentTarget = document.querySelector("#currentTarget");
const viewportLabel = document.querySelector("#viewportLabel");
const urlLoader = document.querySelector("#urlLoader");
const siteUrlInput = document.querySelector("#siteUrlInput");
const loadUrlBtn = document.querySelector("#loadUrlBtn");
const urlStatus = document.querySelector("#urlStatus");
const undoBtn = document.querySelector("#undoBtn");
const redoBtn = document.querySelector("#redoBtn");
const importBtn = document.querySelector("#importBtn");
const exportBtn = document.querySelector("#exportBtn");
const importDialog = document.querySelector("#importDialog");
const exportDialog = document.querySelector("#exportDialog");
const importHtml = document.querySelector("#importHtml");
const importCss = document.querySelector("#importCss");
const exportCode = document.querySelector("#exportCode");
const applyImportBtn = document.querySelector("#applyImportBtn");
const copyExportBtn = document.querySelector("#copyExportBtn");
const cssDiffBtn = document.querySelector("#cssDiffBtn");
const wpExportBtn = document.querySelector("#wpExportBtn");
const shopifyExportBtn = document.querySelector("#shopifyExportBtn");
const downloadExportBtn = document.querySelector("#downloadExportBtn");
const cssDialog = document.querySelector("#cssDialog");
const cssEditorCode = document.querySelector("#cssEditorCode");
const applyCssBtn = document.querySelector("#applyCssBtn");
const htmlDialog = document.querySelector("#htmlDialog");
const htmlEditorCode = document.querySelector("#htmlEditorCode");
const applyHtmlBtn = document.querySelector("#applyHtmlBtn");
const metaDialog = document.querySelector("#metaDialog");
const metaTitleInput = document.querySelector("#metaTitleInput");
const metaDescriptionInput = document.querySelector("#metaDescriptionInput");
const metaOgImageInput = document.querySelector("#metaOgImageInput");
const applyMetaBtn = document.querySelector("#applyMetaBtn");
const ogPreviewImage = document.querySelector("#ogPreviewImage");
const ogPreviewTitle = document.querySelector("#ogPreviewTitle");
const ogPreviewDescription = document.querySelector("#ogPreviewDescription");
const auditDialog = document.querySelector("#auditDialog");
const auditResults = document.querySelector("#auditResults");
const layerSearch = document.querySelector("#layerSearch");
const selectionPath = document.querySelector("#selectionPath");
const diffSlider = document.querySelector("#diffSlider");
const saveProjectBtn = document.querySelector("#saveProjectBtn");
const restoreProjectBtn = document.querySelector("#restoreProjectBtn");
const newProjectBtn = document.querySelector("#newProjectBtn");
const exportProjectBtn = document.querySelector("#exportProjectBtn");
const importProjectBtn = document.querySelector("#importProjectBtn");
const projectFileInput = document.querySelector("#projectFileInput");
const autosaveStatus = document.querySelector("#autosaveStatus");
const snapshotNameInput = document.querySelector("#snapshotNameInput");
const snapshotSelect = document.querySelector("#snapshotSelect");
const saveSnapshotBtn = document.querySelector("#saveSnapshotBtn");
const loadSnapshotBtn = document.querySelector("#loadSnapshotBtn");
const demoSampleInput = document.querySelector("#demoSampleInput");
const loadDemoBtn = document.querySelector("#loadDemoBtn");
const activityToggleBtn = document.querySelector("#activityToggleBtn");
const activityCount = document.querySelector("#activityCount");
const activityPanel = document.querySelector("#activityPanel");
const activityList = document.querySelector("#activityList");
const activityClearBtn = document.querySelector("#activityClearBtn");
const toastRegion = document.querySelector("#toastRegion");

const controls = {
  text: document.querySelector("#textInput"),
  image: document.querySelector("#imageInput"),
  imageAlt: document.querySelector("#imageAltInput"),
  lazyImage: document.querySelector("#lazyImageBtn"),
  compressImage: document.querySelector("#compressImageBtn"),
  link: document.querySelector("#linkInput"),
  color: document.querySelector("#colorInput"),
  background: document.querySelector("#bgInput"),
  fontSize: document.querySelector("#fontSizeInput"),
  fontWeight: document.querySelector("#fontWeightInput"),
  align: document.querySelector("#alignInput"),
  display: document.querySelector("#displayInput"),
  objectFit: document.querySelector("#objectFitInput"),
  width: document.querySelector("#widthInput"),
  maxWidth: document.querySelector("#maxWidthInput"),
  minHeight: document.querySelector("#minHeightInput"),
  margin: document.querySelector("#marginInput"),
  marginValue: document.querySelector("#marginValue"),
  padding: document.querySelector("#paddingInput"),
  paddingValue: document.querySelector("#paddingValue"),
  radius: document.querySelector("#radiusInput"),
  radiusValue: document.querySelector("#radiusValue"),
  gap: document.querySelector("#gapInput"),
  gapValue: document.querySelector("#gapValue"),
  moveUp: document.querySelector("#moveUpBtn"),
  moveDown: document.querySelector("#moveDownBtn"),
  duplicate: document.querySelector("#duplicateBtn"),
  delete: document.querySelector("#deleteBtn"),
};

const designControls = {
  autoPolish: document.querySelector("#autoPolishBtn"),
  fixContrast: document.querySelector("#fixContrastBtn"),
  paletteGrid: document.querySelector("#paletteGrid"),
  typePreset: document.querySelector("#typePresetInput"),
  density: document.querySelector("#densityInput"),
  pageRadius: document.querySelector("#pageRadiusInput"),
  pageRadiusValue: document.querySelector("#pageRadiusValue"),
  elevation: document.querySelector("#elevationInput"),
  elevationValue: document.querySelector("#elevationValue"),
  contrastCard: document.querySelector("#contrastCard"),
  contrastScore: document.querySelector("#contrastScore"),
  contrastFill: document.querySelector("#contrastFill"),
  contrastHint: document.querySelector("#contrastHint"),
  audit: document.querySelector("#auditBtn"),
  cssEditor: document.querySelector("#cssEditorBtn"),
  metaEditor: document.querySelector("#metaEditorBtn"),
  industryPreset: document.querySelector("#industryPresetInput"),
};

const styleControls = {
  scope: document.querySelector("#styleScopeInput"),
  preset: document.querySelector("#stylePresetInput"),
  applyPreset: document.querySelector("#applyStylePresetBtn"),
  copy: document.querySelector("#copyStyleBtn"),
  paste: document.querySelector("#pasteStyleBtn"),
  clear: document.querySelector("#clearStyleBtn"),
  applySimilar: document.querySelector("#applySimilarBtn"),
  editHtml: document.querySelector("#editHtmlBtn"),
  spacingOverlay: document.querySelector("#spacingOverlayToggle"),
};

const textTags = new Set([
  "A",
  "BUTTON",
  "FIGCAPTION",
  "H1",
  "H2",
  "H3",
  "H4",
  "H5",
  "H6",
  "LI",
  "P",
  "SMALL",
  "SPAN",
  "STRONG",
  "EM",
]);

const containerTags = new Set([
  "ARTICLE",
  "ASIDE",
  "BODY",
  "DIV",
  "FOOTER",
  "HEADER",
  "LI",
  "MAIN",
  "NAV",
  "SECTION",
  "UL",
  "OL",
]);

const editorClassNames = ["__wu-hover", "__wu-selected"];

const sampleImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 960 680'%3E%3Crect width='960' height='680' fill='%23e9f5f1'/%3E%3Crect x='92' y='88' width='776' height='504' rx='32' fill='%23ffffff'/%3E%3Crect x='136' y='134' width='288' height='42' rx='12' fill='%2317211f'/%3E%3Crect x='136' y='210' width='642' height='42' rx='14' fill='%23dfe9e5'/%3E%3Crect x='136' y='278' width='232' height='198' rx='22' fill='%230d967a'/%3E%3Crect x='400' y='278' width='180' height='198' rx='22' fill='%23f2c94c'/%3E%3Crect x='612' y='278' width='166' height='198' rx='22' fill='%23d94b4b'/%3E%3Cpath d='M152 526h626' stroke='%23cdd8d4' stroke-width='18' stroke-linecap='round'/%3E%3Cpath d='M152 526h384' stroke='%230d967a' stroke-width='18' stroke-linecap='round'/%3E%3C/svg%3E";

const pageCss = `:root {
  color-scheme: light;
}

* {
  box-sizing: border-box;
}

body {
  min-height: 720px;
  margin: 0;
  background: #f6f8f7;
  color: #17211f;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.site-nav {
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 64px;
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid #dfe7e3;
}

.brand-name {
  font-size: 17px;
  font-weight: 800;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 22px;
  color: #5f6d68;
  font-size: 14px;
  font-weight: 700;
}

.hero {
  min-height: 570px;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.92fr);
  align-items: center;
  gap: 48px;
  padding: 58px 64px 46px;
  background: linear-gradient(135deg, #ffffff 0%, #edf8f4 62%, #f7f3ff 100%);
}

.eyebrow {
  margin: 0 0 16px;
  color: #0d967a;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}

.hero h1 {
  max-width: 720px;
  margin: 0;
  font-size: 68px;
  line-height: 0.96;
  font-weight: 800;
}

.hero-copy {
  max-width: 600px;
  margin: 24px 0 0;
  color: #4f5e59;
  font-size: 19px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.cta-button,
.secondary-button {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0 18px;
  font-weight: 800;
}

.cta-button {
  background: #0d967a;
  color: #ffffff;
}

.secondary-button {
  border: 1px solid #cfd9d5;
  background: #ffffff;
  color: #17211f;
}

.hero-visual {
  margin: 0;
  border: 1px solid #d8e3df;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 22px 54px rgba(23, 33, 31, 0.14);
}

.hero-visual img {
  width: 100%;
  aspect-ratio: 1.2 / 1;
  object-fit: cover;
}

.feature-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.46fr);
  gap: 28px;
  padding: 54px 64px;
  background: #ffffff;
}

.feature-row h2 {
  margin: 0;
  font-size: 38px;
  line-height: 1.08;
}

.feature-row p {
  max-width: 660px;
  color: #5f6d68;
  font-size: 17px;
  line-height: 1.65;
}

.stat-tile {
  align-self: stretch;
  display: grid;
  align-content: center;
  gap: 8px;
  min-height: 210px;
  padding: 28px;
  border-radius: 8px;
  background: #17211f;
  color: #ffffff;
}

.stat-tile strong {
  font-size: 58px;
  line-height: 1;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding: 0 64px 60px;
  background: #ffffff;
}

.content-card {
  min-height: 190px;
  padding: 24px;
  border: 1px solid #dfe7e3;
  border-radius: 8px;
  background: #f8faf9;
}

.content-card h3 {
  margin: 0 0 12px;
  font-size: 20px;
}

.content-card p {
  margin: 0;
  color: #5f6d68;
  line-height: 1.6;
}

.image-panel {
  margin: 0;
  padding: 64px;
  background: #ffffff;
}

.image-panel img {
  width: 100%;
  max-height: 540px;
  border-radius: 8px;
  object-fit: cover;
}

.image-panel figcaption {
  margin-top: 12px;
  color: #6c7773;
  font-size: 13px;
}

.site-footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 28px 64px;
  background: #17211f;
  color: #ffffff;
}

@media (max-width: 820px) {
  .site-nav,
  .hero,
  .feature-row,
  .content-grid,
  .image-panel,
  .site-footer {
    padding-left: 24px;
    padding-right: 24px;
  }

  .site-nav,
  .nav-links,
  .site-footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .hero,
  .feature-row,
  .content-grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 44px;
  }

  .hero-copy {
    font-size: 17px;
  }
}`;

const initialBody = `
  <header class="site-nav">
    <a class="brand-name" href="#">Northline Studio</a>
    <nav class="nav-links" aria-label="メイン">
      <a href="#">実績</a>
      <a href="#">仕組み</a>
      <a href="#">問い合わせ</a>
    </nav>
  </header>
  <main>
    <section class="hero">
      <div>
        <p class="eyebrow">インターフェースデザイン</p>
        <h1>Northline Studio</h1>
        <p class="hero-copy">洗練されたデジタルプロダクトを、明快な言葉と落ち着いたビジュアルで届けるためのコンパクトなランディングページです。</p>
        <div class="hero-actions">
          <a class="cta-button" href="#">相談する</a>
          <a class="secondary-button" href="#">実績を見る</a>
        </div>
      </div>
      <figure class="hero-visual">
        <img src="${sampleImage}" alt="プロダクト画面のプレビュー">
      </figure>
    </section>
    <section class="feature-row">
      <div>
        <p class="eyebrow">チーム向け</p>
        <h2>第一印象が大切なプロダクトに、迷いのない立ち上がりを。</h2>
        <p>ブランドシステム、キャンペーンページ、プロダクト画面を、初期案から公開まで一貫したリズムで整えます。</p>
      </div>
      <div class="stat-tile">
        <strong>24h</strong>
        <span>プロトタイプ制作</span>
      </div>
    </section>
    <section class="content-grid">
      <article class="content-card">
        <h3>ブランドの統一感</h3>
        <p>再利用しやすいセクションで、キャンペーンや公開時の見た目を一貫させます。</p>
      </article>
      <article class="content-card">
        <h3>伝わる構成</h3>
        <p>ユーザーが判断しやすいように、言葉、階層、操作状態を整理します。</p>
      </article>
      <article class="content-card">
        <h3>公開まで支援</h3>
        <p>意図を失わず制作へ渡せる、実装しやすいデザイン方針に整えます。</p>
      </article>
    </section>
  </main>
  <footer class="site-footer">
    <strong>Northline Studio</strong>
    <span>デザイン、仕組み、公開。</span>
  </footer>
`;

const blockDefinitions = [
  {
    type: "nav",
    label: "ナビ",
    icon: "desktop",
    html: () => `
      <header class="site-nav">
        <a class="brand-name" href="#">スタジオ名</a>
        <nav class="nav-links" aria-label="メイン">
          <a href="#">実績</a>
          <a href="#">サービス</a>
          <a href="#">問い合わせ</a>
        </nav>
      </header>
    `,
  },
  {
    type: "hero",
    label: "ヒーロー",
    icon: "add",
    html: () => `
      <section class="hero">
        <div>
          <p class="eyebrow">新しいセクション</p>
          <h1>ページの第一印象を、はっきり整える。</h1>
          <p class="hero-copy">プロダクト、サービス、キャンペーンの導入に使えるセクションです。</p>
          <div class="hero-actions">
            <a class="cta-button" href="#">主なアクション</a>
            <a class="secondary-button" href="#">詳しく見る</a>
          </div>
        </div>
        <figure class="hero-visual">
          <img src="${sampleImage}" alt="インターフェースのプレビュー">
        </figure>
      </section>
    `,
  },
  {
    type: "feature",
    label: "特徴",
    icon: "add",
    html: () => `
      <section class="feature-row">
        <div>
          <p class="eyebrow">特徴</p>
          <h2>根拠まで伝えられる、焦点の合ったセクション。</h2>
          <p>メリット、流れ、プロダクト詳細を、伝わる余白で説明できます。</p>
        </div>
        <div class="stat-tile">
          <strong>3x</strong>
          <span>意思決定を短縮</span>
        </div>
      </section>
    `,
  },
  {
    type: "card",
    label: "カード",
    icon: "copy",
    html: () => `
      <article class="content-card">
        <h3>新しいカード</h3>
        <p>実績、サービス詳細、コンテンツの要点を短く追加します。</p>
      </article>
    `,
  },
  {
    type: "button",
    label: "ボタン",
    icon: "add",
    html: () => `<a class="cta-button" href="#">新しいアクション</a>`,
  },
  {
    type: "image",
    label: "画像",
    icon: "import",
    html: () => `
      <figure class="image-panel">
        <img src="${sampleImage}" alt="プレビュー画像">
        <figcaption>プレビュー画像</figcaption>
      </figure>
    `,
  },
  {
    type: "footer",
    label: "フッター",
    icon: "down",
    html: () => `
      <footer class="site-footer">
        <strong>スタジオ名</strong>
        <span>Webのために制作。</span>
      </footer>
    `,
  },
];

const designStart = "/* Web Upper design overrides:start */";
const designEnd = "/* Web Upper design overrides:end */";
const responsiveStart = "/* Web Upper responsive overrides:start */";
const responsiveEnd = "/* Web Upper responsive overrides:end */";

const palettes = [
  {
    id: "studio",
    label: "スタジオ",
    colors: {
      ink: "#17211f",
      muted: "#5f6d68",
      page: "#f6f8f7",
      surface: "#ffffff",
      panel: "#edf8f4",
      line: "#dfe7e3",
      accent: "#0d967a",
      accentText: "#ffffff",
      accentAlt: "#6c5ce7",
      warm: "#f2c94c",
    },
  },
  {
    id: "signal",
    label: "シグナル",
    colors: {
      ink: "#141821",
      muted: "#596271",
      page: "#f4f7fb",
      surface: "#ffffff",
      panel: "#eaf1ff",
      line: "#d9e2ef",
      accent: "#2867d8",
      accentText: "#ffffff",
      accentAlt: "#0e9f7a",
      warm: "#f2b84b",
    },
  },
  {
    id: "coral",
    label: "コーラル",
    colors: {
      ink: "#241b1b",
      muted: "#6e5e5b",
      page: "#fbf6f3",
      surface: "#ffffff",
      panel: "#fff0e8",
      line: "#eadbd5",
      accent: "#d95745",
      accentText: "#ffffff",
      accentAlt: "#087c80",
      warm: "#f4c95d",
    },
  },
  {
    id: "graphite",
    label: "グラファイト",
    colors: {
      ink: "#121417",
      muted: "#5d6670",
      page: "#f5f5f2",
      surface: "#ffffff",
      panel: "#ecefeb",
      line: "#dcdfd9",
      accent: "#c94c2f",
      accentText: "#ffffff",
      accentAlt: "#2f7c8f",
      warm: "#d7a63f",
    },
  },
];

const typographyPresets = {
  balanced: {
    h1: 64,
    h2: 38,
    h3: 20,
    body: 17,
    small: 13,
    line: 1.62,
    heroLine: 0.98,
    weight: 800,
  },
  editorial: {
    h1: 76,
    h2: 46,
    h3: 22,
    body: 18,
    small: 14,
    line: 1.72,
    heroLine: 0.95,
    weight: 800,
  },
  compact: {
    h1: 52,
    h2: 32,
    h3: 18,
    body: 16,
    small: 12,
    line: 1.54,
    heroLine: 1.02,
    weight: 800,
  },
};

const densityPresets = {
  balanced: {
    navY: 18,
    pageX: 64,
    heroY: 58,
    heroBottom: 46,
    sectionY: 54,
    card: 24,
    gap: 28,
    gridGap: 18,
  },
  airy: {
    navY: 22,
    pageX: 82,
    heroY: 78,
    heroBottom: 62,
    sectionY: 74,
    card: 30,
    gap: 44,
    gridGap: 24,
  },
  compact: {
    navY: 14,
    pageX: 44,
    heroY: 42,
    heroBottom: 36,
    sectionY: 42,
    card: 20,
    gap: 22,
    gridGap: 14,
  },
};

const designState = {
  palette: "studio",
  typography: "balanced",
  density: "balanced",
  radius: 8,
  elevation: 2,
};

let currentCss = pageCss;
let currentHeadExtras = "";
let currentSourceUrl = "";
let currentPageTitle = "編集済みページ";
let currentBeforeBody = initialBody;
let currentBeforeCss = pageCss;
let selectedId = "body";
let idCounter = 1;
let history = [];
let historyIndex = -1;
let restoring = false;
let fillingInspector = false;
let commitTimer = 0;
let autosaveTimer = 0;
let styleClipboard = "";
let layerFilter = "";
let currentViewport = "desktop";
let spacingOverlayEnabled = false;
let responsiveOverrides = {};
let draggedLayerId = "";
let notifications = [];
let unreadNotifications = 0;

const projectStorageKey = "web-upper-project-v1";
const snapshotStorageKey = "web-upper-snapshots-v1";
const maxNotifications = 40;

function icon(name) {
  return `<svg class="icon"><use href="#i-${name}"></use></svg>`;
}

function notificationTime(date = new Date()) {
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function renderNotifications() {
  activityCount.textContent = String(Math.min(unreadNotifications, 99));
  activityCount.hidden = unreadNotifications === 0;
  activityList.textContent = "";

  if (!notifications.length) {
    const empty = document.createElement("div");
    empty.className = "activity-empty";
    empty.textContent = "まだ通知はありません";
    activityList.appendChild(empty);
    return;
  }

  for (const entry of notifications) {
    const item = document.createElement("div");
    item.className = `activity-item is-${entry.type}`;
    const body = document.createElement("div");
    const message = document.createElement("strong");
    const time = document.createElement("span");
    message.textContent = entry.message;
    time.textContent = entry.time;
    body.append(message, time);
    item.appendChild(body);
    activityList.appendChild(item);
  }
}

function showToast(entry) {
  const toast = document.createElement("div");
  toast.className = `toast is-${entry.type}`;
  toast.setAttribute("role", entry.type === "danger" ? "alert" : "status");

  const message = document.createElement("strong");
  message.textContent = entry.message;
  const close = document.createElement("button");
  close.type = "button";
  close.setAttribute("aria-label", "通知を閉じる");
  close.textContent = "x";

  const dismiss = () => toast.remove();
  close.addEventListener("click", dismiss);
  toast.append(message, close);
  toastRegion.appendChild(toast);
  window.setTimeout(dismiss, entry.type === "danger" ? 8000 : 4200);
}

function notify(message, type = "info", options = {}) {
  const entry = {
    id: `notice-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    message,
    type,
    time: notificationTime(),
  };
  notifications.unshift(entry);
  notifications = notifications.slice(0, maxNotifications);
  if (activityPanel.hidden) {
    unreadNotifications += 1;
  }
  renderNotifications();
  if (options.toast !== false) {
    showToast(entry);
  }
}

function toggleActivityPanel(open = activityPanel.hidden) {
  activityPanel.hidden = !open;
  activityToggleBtn.setAttribute("aria-expanded", String(open));
  if (open) {
    unreadNotifications = 0;
  }
  renderNotifications();
}

function clearNotifications() {
  notifications = [];
  unreadNotifications = 0;
  renderNotifications();
}

function getDoc() {
  return frame.contentDocument;
}

function getWin() {
  return frame.contentWindow;
}

function getSelectedElement() {
  const doc = getDoc();
  if (!doc) {
    return null;
  }
  if (selectedId === "body") {
    return doc.body;
  }
  return doc.querySelector(`[data-edit-id="${CSS.escape(selectedId)}"]`);
}

function frameSource(bodyHtml, cssText, options = {}) {
  const { editable = true, headExtras = currentHeadExtras } = options;
  const editorCss = `
    html {
      min-height: 100%;
    }

    [data-edit-id] {
      cursor: default;
    }

    .__wu-hover {
      outline: 1px dashed #0d967a !important;
      outline-offset: 2px !important;
    }

    .__wu-selected {
      outline: 2px solid #0d967a !important;
      outline-offset: 3px !important;
    }
  `;

  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(currentPageTitle)}</title>
  ${headExtras}
  <style id="wu-page-css">${cssText}</style>
  ${editable ? `<style id="wu-editor-css">${editorCss}</style>` : ""}
</head>
<body>${bodyHtml}</body>
</html>`;
}

function renderFrame(bodyHtml, cssText, callback) {
  frame.onload = () => {
    prepareFrame();
    if (callback) {
      callback();
    }
  };
  frame.srcdoc = frameSource(bodyHtml, cssText, { editable: true });
}

function renderBeforeFrame(bodyHtml, cssText) {
  beforeFrame.onload = resizePreview;
  beforeFrame.removeAttribute("src");
  beforeFrame.srcdoc = frameSource(bodyHtml, cssText, {
    editable: false,
    headExtras: currentHeadExtras,
  });
}

function prepareFrame() {
  const doc = getDoc();
  if (!doc || !doc.body) {
    return;
  }

  doc.body.dataset.editId = "body";
  normalizeEditableIds(doc.body);
  clearEditorClasses();

  doc.addEventListener(
    "click",
    (event) => {
      const target = event.target.closest("[data-edit-id]");
      if (!target) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      selectElement(target.dataset.editId || "body");
    },
    true,
  );

  doc.addEventListener(
    "mouseover",
    (event) => {
      const target = event.target.closest("[data-edit-id]");
      if (!target || target.dataset.editId === selectedId) {
        return;
      }
      target.classList.add("__wu-hover");
    },
    true,
  );

  doc.addEventListener(
    "mouseout",
    (event) => {
      const target = event.target.closest("[data-edit-id]");
      if (target) {
        target.classList.remove("__wu-hover");
      }
    },
    true,
  );

  getWin().addEventListener("scroll", updateSpacingOverlay, { passive: true });

  if (!getSelectedElement()) {
    selectedId = "body";
  }
  selectElement(selectedId, { keepScroll: true });
  resizePreview();

  if (!restoring && history.length === 0) {
    saveHistory();
  }
}

function normalizeEditableIds(root) {
  const owner = root.ownerDocument || getDoc();
  const seen = new Set(["body"]);
  const seenKeys = new Set(["body"]);
  if (owner) {
    for (const element of owner.querySelectorAll("[data-edit-id]")) {
      if (element !== root && !root.contains(element)) {
        seen.add(element.dataset.editId);
      }
    }
    for (const element of owner.querySelectorAll("[data-wu-key]")) {
      if (element !== root && !root.contains(element)) {
        seenKeys.add(element.dataset.wuKey);
      }
    }
  }

  const elements = [root, ...Array.from(root.querySelectorAll("*"))];
  for (const element of elements) {
    if (["SCRIPT", "STYLE", "META", "LINK"].includes(element.tagName)) {
      continue;
    }
    if (element.tagName === "BODY") {
      element.dataset.editId = "body";
      element.dataset.wuKey = "body";
      continue;
    }
    const existing = element.dataset.editId;
    if (!existing || seen.has(existing)) {
      element.dataset.editId = nextId();
    }
    seen.add(element.dataset.editId);
    const existingKey = element.dataset.wuKey;
    if (!existingKey || seenKeys.has(existingKey)) {
      element.dataset.wuKey = element.dataset.editId;
    }
    seenKeys.add(element.dataset.wuKey);
  }
}

function nextId() {
  idCounter += 1;
  return `el-${idCounter}`;
}

function clearEditorClasses() {
  const doc = getDoc();
  if (!doc) {
    return;
  }
  for (const className of editorClassNames) {
    for (const element of doc.querySelectorAll(`.${className}`)) {
      element.classList.remove(className);
    }
  }
}

function removeSpacingOverlay() {
  const doc = getDoc();
  doc?.querySelector("#wu-spacing-overlay")?.remove();
}

function updateSpacingOverlay() {
  const doc = getDoc();
  const element = getSelectedElement();
  removeSpacingOverlay();
  if (!spacingOverlayEnabled || !doc || !element || element.tagName === "BODY") {
    return;
  }

  const rect = element.getBoundingClientRect();
  const computed = getWin().getComputedStyle(element);
  const marginTop = parsePixel(computed.marginTop);
  const marginRight = parsePixel(computed.marginRight);
  const marginBottom = parsePixel(computed.marginBottom);
  const marginLeft = parsePixel(computed.marginLeft);
  const paddingTop = parsePixel(computed.paddingTop);
  const paddingRight = parsePixel(computed.paddingRight);
  const paddingBottom = parsePixel(computed.paddingBottom);
  const paddingLeft = parsePixel(computed.paddingLeft);

  const overlay = doc.createElement("div");
  overlay.id = "wu-spacing-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.style.cssText = `
    position: absolute;
    left: ${rect.left + getWin().scrollX - marginLeft}px;
    top: ${rect.top + getWin().scrollY - marginTop}px;
    width: ${rect.width + marginLeft + marginRight}px;
    height: ${rect.height + marginTop + marginBottom}px;
    pointer-events: none;
    z-index: 2147483640;
    background: rgba(242, 201, 76, 0.2);
    border: 1px dashed rgba(190, 132, 22, 0.82);
  `;

  const padding = doc.createElement("div");
  padding.style.cssText = `
    position: absolute;
    left: ${marginLeft}px;
    top: ${marginTop}px;
    width: ${rect.width}px;
    height: ${rect.height}px;
    background:
      linear-gradient(rgba(13,150,122,0.22), rgba(13,150,122,0.22)) top / 100% ${paddingTop}px no-repeat,
      linear-gradient(rgba(13,150,122,0.22), rgba(13,150,122,0.22)) bottom / 100% ${paddingBottom}px no-repeat,
      linear-gradient(rgba(13,150,122,0.22), rgba(13,150,122,0.22)) left / ${paddingLeft}px 100% no-repeat,
      linear-gradient(rgba(13,150,122,0.22), rgba(13,150,122,0.22)) right / ${paddingRight}px 100% no-repeat;
    border: 1px solid rgba(13,150,122,0.9);
  `;
  overlay.appendChild(padding);
  doc.body.appendChild(overlay);
}

function selectElement(id, options = {}) {
  const doc = getDoc();
  if (!doc) {
    return;
  }

  selectedId = id || "body";
  clearEditorClasses();

  const element = getSelectedElement();
  if (element) {
    element.classList.add("__wu-selected");
    if (!options.keepScroll && element.scrollIntoView) {
      element.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  }

  refreshInspector();
  refreshLayers();
  updateSpacingOverlay();
}

function canEditText(element) {
  if (!element || element === getDoc().body) {
    return false;
  }
  return element.children.length === 0 || textTags.has(element.tagName);
}

function canContainChildren(element) {
  return element && containerTags.has(element.tagName);
}

function setDisabled(control, disabled) {
  control.disabled = disabled;
}

function refreshInspector() {
  const element = getSelectedElement();
  fillingInspector = true;

  const label = element ? describeElement(element) : "本文";
  selectedBadge.textContent = label;
  currentTarget.textContent = label;

  const hasElement = Boolean(element);
  const textEditable = canEditText(element);
  const isImage = hasElement && element.tagName === "IMG";
  const isLink = hasElement && element.tagName === "A";
  const isBody = hasElement && element.tagName === "BODY";
  renderSelectionPath(element);

  controls.text.value = textEditable ? element.textContent.trim() : "";
  controls.image.value = isImage ? element.getAttribute("src") || "" : "";
  controls.imageAlt.value = isImage ? element.getAttribute("alt") || "" : "";
  controls.link.value = isLink ? element.getAttribute("href") || "" : "";

  setDisabled(controls.text, !textEditable);
  setDisabled(controls.image, !isImage);
  setDisabled(controls.imageAlt, !isImage);
  setDisabled(controls.lazyImage, !isImage);
  setDisabled(controls.compressImage, !isImage);
  setDisabled(controls.link, !isLink);

  for (const control of [
    controls.color,
    controls.background,
    controls.fontSize,
    controls.fontWeight,
    controls.align,
    controls.display,
    controls.objectFit,
    controls.width,
    controls.maxWidth,
    controls.minHeight,
    controls.margin,
    controls.padding,
    controls.radius,
    controls.gap,
  ]) {
    setDisabled(control, !hasElement);
  }

  for (const control of [
    controls.moveUp,
    controls.moveDown,
    controls.duplicate,
    controls.delete,
  ]) {
    setDisabled(control, !hasElement || isBody);
  }

  for (const control of [
    styleControls.applyPreset,
    styleControls.copy,
    styleControls.clear,
    styleControls.applySimilar,
    styleControls.editHtml,
  ]) {
    setDisabled(control, !hasElement || isBody);
  }
  setDisabled(styleControls.paste, !hasElement || isBody || !styleClipboard);

  if (hasElement) {
    const computed = getWin().getComputedStyle(element);
    controls.color.value = cssColorToHex(computed.color) || "#17211f";
    controls.background.value = cssColorToHex(computed.backgroundColor) || "#ffffff";
    controls.fontSize.value = parsePixel(computed.fontSize);
    controls.fontWeight.value = inlineOrBlank(element, "fontWeight", computed.fontWeight);
    controls.align.value = inlineOrBlank(element, "textAlign", computed.textAlign);
    controls.display.value = inlineOrBlank(element, "display", computed.display);
    controls.objectFit.value = inlineOrBlank(element, "objectFit", computed.objectFit);
    controls.width.value = inlineOrBlankNumber(element, "width", computed.width);
    controls.maxWidth.value = inlineOrBlankNumber(element, "maxWidth", computed.maxWidth);
    controls.minHeight.value = inlineOrBlankNumber(element, "minHeight", computed.minHeight);
    controls.margin.value = parsePixel(computed.marginTop);
    controls.padding.value = parsePixel(computed.paddingTop);
    controls.radius.value = parsePixel(computed.borderTopLeftRadius);
    controls.gap.value = parsePixel(computed.gap);
  } else {
    controls.color.value = "#17211f";
    controls.background.value = "#ffffff";
    controls.fontSize.value = "";
    controls.fontWeight.value = "";
    controls.align.value = "";
    controls.display.value = "";
    controls.objectFit.value = "";
    controls.width.value = "";
    controls.maxWidth.value = "";
    controls.minHeight.value = "";
    controls.margin.value = 0;
    controls.padding.value = 0;
    controls.radius.value = 0;
    controls.gap.value = 0;
  }

  updateRangeOutputs();
  updateContrastMeter();
  fillingInspector = false;
}

function inlineOrBlank(element, prop, fallback) {
  const value = element.style[prop];
  if (value) {
    return value;
  }
  if (prop === "fontWeight" && ["400", "500", "600", "700", "800"].includes(fallback)) {
    return fallback;
  }
  if (prop === "textAlign" && ["left", "center", "right"].includes(fallback)) {
    return fallback;
  }
  return "";
}

function inlineOrBlankNumber(element, prop, fallback) {
  if (element.style[prop]) {
    return parsePixel(element.style[prop]);
  }
  if (!fallback || fallback === "none" || fallback === "auto") {
    return "";
  }
  return parsePixel(fallback);
}

function updateRangeOutputs() {
  controls.marginValue.value = controls.margin.value || "0";
  controls.paddingValue.value = controls.padding.value || "0";
  controls.radiusValue.value = controls.radius.value || "0";
  controls.gapValue.value = controls.gap.value || "0";
}

function updateDesignOutputs() {
  designControls.pageRadiusValue.value = designState.radius;
  designControls.elevationValue.value = designState.elevation;
}

function parsePixel(value) {
  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed)) {
    return 0;
  }
  return Math.round(parsed);
}

function cssColorToHex(value) {
  if (!value || value === "transparent") {
    return "";
  }
  const parts = value.match(/[\d.]+/g);
  if (!parts || parts.length < 3) {
    if (value.startsWith("#")) {
      return value;
    }
    return "";
  }
  if (parts.length > 3 && Number(parts[3]) === 0) {
    return "";
  }
  const [red, green, blue] = parts.slice(0, 3).map((part) => {
    const number = Math.max(0, Math.min(255, Number.parseInt(part, 10)));
    return number.toString(16).padStart(2, "0");
  });
  return `#${red}${green}${blue}`;
}

function getPalette() {
  return palettes.find((palette) => palette.id === designState.palette) || palettes[0];
}

function shadowForLevel(level) {
  const shadows = [
    "none",
    "0 8px 18px rgba(18, 20, 23, 0.08)",
    "0 16px 36px rgba(18, 20, 23, 0.12)",
    "0 24px 54px rgba(18, 20, 23, 0.15)",
    "0 30px 72px rgba(18, 20, 23, 0.18)",
    "0 38px 90px rgba(18, 20, 23, 0.2)",
  ];
  return shadows[Math.max(0, Math.min(shadows.length - 1, Number(level) || 0))];
}

function removeDesignOverrides(cssText) {
  const start = cssText.indexOf(designStart);
  const end = cssText.indexOf(designEnd);
  if (start === -1 || end === -1 || end < start) {
    return cssText;
  }
  return `${cssText.slice(0, start).trimEnd()}\n${cssText.slice(end + designEnd.length).trimStart()}`.trim();
}

function withDesignOverrides(cssText, overrides) {
  const base = removeDesignOverrides(cssText).trim();
  return `${base}\n\n${designStart}\n${overrides.trim()}\n${designEnd}`;
}

function removeResponsiveOverrides(cssText) {
  const start = cssText.indexOf(responsiveStart);
  const end = cssText.indexOf(responsiveEnd);
  if (start === -1 || end === -1 || end < start) {
    return cssText;
  }
  return `${cssText.slice(0, start).trimEnd()}\n${cssText.slice(end + responsiveEnd.length).trimStart()}`.trim();
}

function cssPropName(prop) {
  return prop.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

function mediaForScope(scope) {
  if (scope === "desktop") {
    return "(min-width: 821px)";
  }
  if (scope === "tablet") {
    return "(min-width: 561px) and (max-width: 820px)";
  }
  if (scope === "phone") {
    return "(max-width: 560px)";
  }
  return "";
}

function buildResponsiveCss() {
  const chunks = [];
  for (const [key, scopes] of Object.entries(responsiveOverrides)) {
    for (const [scope, styles] of Object.entries(scopes)) {
      const declarations = Object.entries(styles)
        .filter(([, value]) => value !== "")
        .map(([prop, value]) => `  ${cssPropName(prop)}: ${value} !important;`)
        .join("\n");
      if (!declarations) {
        continue;
      }
      const rule = `[data-wu-key="${key}"] {\n${declarations}\n}`;
      const media = mediaForScope(scope);
      chunks.push(media ? `@media ${media} {\n${rule}\n}` : rule);
    }
  }
  return chunks.join("\n\n");
}

function syncResponsiveCss() {
  const base = removeResponsiveOverrides(currentCss).trim();
  const overrides = buildResponsiveCss();
  currentCss = overrides ? `${base}\n\n${responsiveStart}\n${overrides}\n${responsiveEnd}` : base;
  updatePageCssInFrame();
}

function ensureWuKey(element) {
  if (!element.dataset.wuKey) {
    element.dataset.wuKey = element.dataset.editId || nextId();
  }
  return element.dataset.wuKey;
}

function setResponsiveStyle(element, prop, value, scope) {
  const key = ensureWuKey(element);
  responsiveOverrides[key] ||= {};
  responsiveOverrides[key][scope] ||= {};
  if (value === "") {
    delete responsiveOverrides[key][scope][prop];
  } else {
    responsiveOverrides[key][scope][prop] = value;
  }
  if (Object.keys(responsiveOverrides[key][scope]).length === 0) {
    delete responsiveOverrides[key][scope];
  }
  if (Object.keys(responsiveOverrides[key]).length === 0) {
    delete responsiveOverrides[key];
  }
  syncResponsiveCss();
}

function buildDesignCss() {
  const palette = getPalette().colors;
  const type = typographyPresets[designState.typography] || typographyPresets.balanced;
  const density = densityPresets[designState.density] || densityPresets.balanced;
  const radius = Number(designState.radius) || 0;
  const buttonRadius = Math.max(6, Math.min(14, radius));
  const shadow = shadowForLevel(designState.elevation);
  const lightShadow = designState.elevation > 0 ? "0 8px 20px rgba(18, 20, 23, 0.08)" : "none";

  return `
body {
  background: ${palette.page};
  color: ${palette.ink};
}

.site-nav {
  padding: ${density.navY}px ${density.pageX}px;
  background: ${palette.surface};
  border-bottom-color: ${palette.line};
}

.brand-name,
.hero h1,
.feature-row h2,
.content-card h3 {
  color: ${palette.ink};
}

.nav-links,
.hero-copy,
.feature-row p,
.content-card p,
.image-panel figcaption {
  color: ${palette.muted};
}

.hero {
  gap: ${density.gap + 20}px;
  padding: ${density.heroY}px ${density.pageX}px ${density.heroBottom}px;
  background: linear-gradient(135deg, ${palette.surface} 0%, ${palette.panel} 62%, ${palette.page} 100%);
}

.eyebrow {
  color: ${palette.accent};
  letter-spacing: 0.08em;
}

.hero h1 {
  font-size: ${type.h1}px;
  line-height: ${type.heroLine};
  font-weight: ${type.weight};
}

.hero-copy,
.feature-row p,
.content-card p {
  font-size: ${type.body}px;
  line-height: ${type.line};
}

.feature-row {
  gap: ${density.gap}px;
  padding: ${density.sectionY}px ${density.pageX}px;
  background: ${palette.surface};
}

.feature-row h2 {
  font-size: ${type.h2}px;
}

.content-grid {
  gap: ${density.gridGap}px;
  padding: 0 ${density.pageX}px ${density.sectionY}px;
  background: ${palette.surface};
}

.content-card {
  min-height: ${designState.density === "compact" ? 168 : 196}px;
  padding: ${density.card}px;
  border-color: ${palette.line};
  border-radius: ${radius}px;
  background: ${palette.page};
  box-shadow: ${lightShadow};
}

.content-card:nth-child(2) {
  border-top: 3px solid ${palette.accentAlt};
}

.content-card:nth-child(3) {
  border-top: 3px solid ${palette.warm};
}

.content-card h3 {
  font-size: ${type.h3}px;
}

.cta-button,
.secondary-button {
  border-radius: ${buttonRadius}px;
}

.cta-button {
  background: ${palette.accent};
  color: ${palette.accentText};
  box-shadow: ${lightShadow};
}

.secondary-button {
  border-color: ${palette.line};
  background: ${palette.surface};
  color: ${palette.ink};
}

.hero-visual,
.image-panel img {
  border-color: ${palette.line};
  border-radius: ${radius}px;
  box-shadow: ${shadow};
}

.stat-tile {
  border-radius: ${radius}px;
  background: ${palette.ink};
  color: ${palette.surface};
  box-shadow: ${shadow};
}

.stat-tile strong {
  color: ${palette.warm};
}

.image-panel {
  padding: ${density.sectionY}px ${density.pageX}px;
  background: ${palette.surface};
}

.site-footer {
  padding: ${Math.max(24, density.navY + 10)}px ${density.pageX}px;
  background: ${palette.ink};
  color: ${palette.surface};
}

::selection {
  background: ${palette.warm};
  color: ${palette.ink};
}

@media (max-width: 820px) {
  .site-nav,
  .hero,
  .feature-row,
  .content-grid,
  .image-panel,
  .site-footer {
    padding-left: 24px;
    padding-right: 24px;
  }

  .hero h1 {
    font-size: ${Math.min(46, type.h1 - 18)}px;
  }

  .feature-row h2 {
    font-size: ${Math.min(34, type.h2 - 6)}px;
  }
}`;
}

function updatePageCssInFrame() {
  const doc = getDoc();
  const style = doc?.querySelector("#wu-page-css");
  if (style) {
    style.textContent = currentCss;
  }
  resizePreview();
}

function applyDesignSystem({ commitNow = false } = {}) {
  currentCss = withDesignOverrides(currentCss, buildDesignCss());
  updatePageCssInFrame();
  refreshInspector();
  refreshLayers();
  updatePaletteButtons();
  updateDesignOutputs();
  if (commitNow) {
    commitChange();
  } else {
    queueCommit();
  }
}

function describeElement(element) {
  if (!element) {
    return "本文";
  }
  if (element.tagName === "BODY") {
    return "本文";
  }
  const tag = element.tagName.toLowerCase();
  const className = Array.from(element.classList).find((name) => !editorClassNames.includes(name));
  const text = element.textContent.trim().replace(/\s+/g, " ");
  if (className) {
    return `${tag}.${className}`;
  }
  if (element.id) {
    return `${tag}#${element.id}`;
  }
  if (text) {
    return `${tag} ${text.slice(0, 28)}`;
  }
  return tag;
}

function renderSelectionPath(element) {
  selectionPath.textContent = "";
  const doc = getDoc();
  if (!doc || !element) {
    return;
  }

  const chain = [];
  let current = element;
  while (current && current.nodeType === 1) {
    chain.unshift(current);
    if (current === doc.body) {
      break;
    }
    current = current.parentElement;
  }

  for (const item of chain.slice(-8)) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "path-chip";
    if ((item.dataset.editId || "body") === selectedId) {
      button.classList.add("is-current");
    }
    button.textContent = item.tagName === "BODY" ? "本文" : describeElement(item);
    button.title = describeElement(item);
    button.addEventListener("click", () => selectElement(item.dataset.editId || "body"));
    selectionPath.appendChild(button);
  }
}

function parseColor(value) {
  if (!value) {
    return null;
  }
  const trimmed = value.trim();
  if (trimmed.startsWith("#")) {
    let hex = trimmed.slice(1);
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((char) => char + char)
        .join("");
    }
    if (hex.length !== 6) {
      return null;
    }
    return {
      r: Number.parseInt(hex.slice(0, 2), 16),
      g: Number.parseInt(hex.slice(2, 4), 16),
      b: Number.parseInt(hex.slice(4, 6), 16),
      a: 1,
    };
  }

  const parts = trimmed.match(/[\d.]+/g);
  if (!parts || parts.length < 3) {
    return null;
  }
  return {
    r: Number(parts[0]),
    g: Number(parts[1]),
    b: Number(parts[2]),
    a: parts.length > 3 ? Number(parts[3]) : 1,
  };
}

function channelToLinear(channel) {
  const value = channel / 255;
  return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function luminance(color) {
  return (
    0.2126 * channelToLinear(color.r) +
    0.7152 * channelToLinear(color.g) +
    0.0722 * channelToLinear(color.b)
  );
}

function contrastRatio(foreground, background) {
  const light = Math.max(luminance(foreground), luminance(background));
  const dark = Math.min(luminance(foreground), luminance(background));
  return (light + 0.05) / (dark + 0.05);
}

function effectiveBackground(element) {
  const win = getWin();
  let current = element;
  while (current && current.nodeType === 1) {
    const background = parseColor(win.getComputedStyle(current).backgroundColor);
    if (background && background.a > 0.05) {
      return background;
    }
    current = current.parentElement;
  }
  return { r: 255, g: 255, b: 255, a: 1 };
}

function hasMeaningfulText(element) {
  return Boolean(element && element.textContent.trim().length > 0 && element.tagName !== "BODY");
}

function updateContrastMeter() {
  const element = getSelectedElement();
  if (!element || !hasMeaningfulText(element)) {
    designControls.contrastScore.textContent = "--";
    designControls.contrastFill.style.width = "0%";
    designControls.contrastFill.style.background = "var(--danger)";
    designControls.contrastHint.textContent = "テキストを選択すると読みやすさを確認できます。";
    designControls.fixContrast.disabled = true;
    return;
  }

  const computed = getWin().getComputedStyle(element);
  const foreground = parseColor(computed.color);
  const background = effectiveBackground(element);
  if (!foreground || !background) {
    return;
  }

  const ratio = contrastRatio(foreground, background);
  const rounded = Math.round(ratio * 10) / 10;
  const passesAA = ratio >= 4.5;
  const passesAAA = ratio >= 7;
  designControls.contrastScore.textContent = `${rounded}:1`;
  designControls.contrastFill.style.width = `${Math.min(100, (ratio / 7) * 100)}%`;
  designControls.contrastFill.style.background = passesAAA ? "#0d967a" : passesAA ? "#d7a63f" : "var(--danger)";
  designControls.contrastHint.textContent = passesAAA
    ? "とても読みやすいコントラストです。"
    : passesAA
      ? "読めますが、さらに改善できます。"
      : "コントラストが低めです。コントラスト補正を使ってください。";
  designControls.fixContrast.disabled = false;
}

function bestReadableColor(background) {
  const palette = getPalette().colors;
  const candidates = [
    palette.ink,
    palette.surface,
    palette.accentText,
    palette.accent,
    palette.accentAlt,
    "#111111",
    "#ffffff",
  ];

  return candidates
    .map((value) => {
      const color = parseColor(value);
      return { value, ratio: color ? contrastRatio(color, background) : 0 };
    })
    .filter((item) => Number.isFinite(item.ratio))
    .sort((a, b) => b.ratio - a.ratio)[0]?.value || "#111111";
}

function fixSelectedContrast() {
  const element = getSelectedElement();
  if (!element || !hasMeaningfulText(element)) {
    return;
  }
  element.style.color = bestReadableColor(effectiveBackground(element));
  refreshInspector();
  commitChange();
}

function layerText(element) {
  const text = element.textContent.trim().replace(/\s+/g, " ");
  if (element.tagName === "IMG") {
    return element.getAttribute("alt") || "image";
  }
  if (element.classList.length) {
    return `.${Array.from(element.classList).find((name) => !editorClassNames.includes(name)) || ""}`;
  }
  if (text) {
    return text.slice(0, 36);
  }
  return element.tagName.toLowerCase();
}

function refreshLayers() {
  const doc = getDoc();
  if (!doc || !doc.body) {
    return;
  }

  layersList.textContent = "";
  const fragment = document.createDocumentFragment();
  const rows = [{ element: doc.body, depth: 0 }];

  function walk(element, depth) {
    for (const child of Array.from(element.children)) {
      if (["SCRIPT", "STYLE", "META", "LINK"].includes(child.tagName)) {
        continue;
      }
      rows.push({ element: child, depth });
      walk(child, depth + 1);
    }
  }

  walk(doc.body, 1);

  const normalizedFilter = layerFilter.trim().toLowerCase();
  const visibleRows = rows.filter((row) => {
    if (!normalizedFilter) {
      return true;
    }
    const haystack = `${row.element.tagName.toLowerCase()} ${describeElement(row.element)} ${layerText(row.element)}`.toLowerCase();
    return haystack.includes(normalizedFilter);
  });

  for (const row of visibleRows.slice(0, 220)) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "layer-row";
    if ((row.element.dataset.editId || "body") === selectedId) {
      button.classList.add("is-selected");
    }
    button.style.paddingLeft = `${8 + row.depth * 14}px`;
    button.dataset.id = row.element.dataset.editId || "body";
    button.draggable = row.element.tagName !== "BODY";
    button.innerHTML = `
      <span class="layer-tag">${row.element.tagName.toLowerCase()}</span>
      <span class="layer-name">${escapeHtml(layerText(row.element))}</span>
    `;
    button.addEventListener("click", () => selectElement(button.dataset.id));
    button.addEventListener("dragstart", (event) => {
      draggedLayerId = button.dataset.id;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggedLayerId);
    });
    button.addEventListener("dragover", (event) => {
      if (draggedLayerId && draggedLayerId !== button.dataset.id) {
        event.preventDefault();
      }
    });
    button.addEventListener("drop", (event) => {
      event.preventDefault();
      reorderLayer(draggedLayerId, button.dataset.id);
      draggedLayerId = "";
    });
    button.addEventListener("dragend", () => {
      draggedLayerId = "";
    });
    fragment.appendChild(button);
  }

  layersList.appendChild(fragment);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function commitChange() {
  clearTimeout(commitTimer);
  saveHistory();
  refreshInspector();
  refreshLayers();
  resizePreview();
}

function queueCommit() {
  clearTimeout(commitTimer);
  commitTimer = window.setTimeout(commitChange, 360);
}

function currentSnapshot() {
  const doc = getDoc();
  clearEditorClasses();
  removeSpacingOverlay();
  const element = getSelectedElement();
  const body = doc.body.innerHTML;
  if (element) {
    element.classList.add("__wu-selected");
  }
  updateSpacingOverlay();
  return {
    body,
    css: currentCss,
    headExtras: currentHeadExtras,
    sourceUrl: currentSourceUrl,
    pageTitle: currentPageTitle,
    beforeBody: currentBeforeBody,
    beforeCss: currentBeforeCss,
    responsiveOverrides: JSON.parse(JSON.stringify(responsiveOverrides)),
  };
}

function saveHistory() {
  if (restoring || !getDoc()) {
    return;
  }
  const snapshot = currentSnapshot();
  const serialized = JSON.stringify(snapshot);
  const current = history[historyIndex];
  if (current && current.serialized === serialized) {
    updateHistoryButtons();
    return;
  }
  history = history.slice(0, historyIndex + 1);
  history.push({ ...snapshot, serialized });
  historyIndex = history.length - 1;
  updateHistoryButtons();
  scheduleAutosave();
}

function restoreSnapshot(index) {
  const snapshot = history[index];
  if (!snapshot) {
    return;
  }
  restoring = true;
  currentCss = snapshot.css;
  currentHeadExtras = snapshot.headExtras || "";
  currentSourceUrl = snapshot.sourceUrl || "";
  currentPageTitle = snapshot.pageTitle || "編集済みページ";
  currentBeforeBody = snapshot.beforeBody || snapshot.body;
  currentBeforeCss = snapshot.beforeCss || snapshot.css;
  responsiveOverrides = snapshot.responsiveOverrides || {};
  selectedId = "body";
  renderFrame(snapshot.body, snapshot.css, () => {
    restoring = false;
    updateHistoryButtons();
  });
  renderBeforeFrame(currentBeforeBody, currentBeforeCss);
}

function updateHistoryButtons() {
  undoBtn.disabled = historyIndex <= 0;
  redoBtn.disabled = historyIndex >= history.length - 1;
}

function projectData() {
  const snapshot = currentSnapshot();
  return {
    ...snapshot,
    designState: { ...designState },
    savedAt: new Date().toISOString(),
  };
}

function projectFilename() {
  const base = currentPageTitle || new URL(currentSourceUrl || "https://web-upper.local").hostname || "web-upper";
  const safeName = base
    .toLowerCase()
    .replace(/[^a-z0-9\u3040-\u30ff\u3400-\u9fff]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
  return `${safeName || "web-upper"}-project.json`;
}

function downloadTextFile(filename, contents, type = "application/json;charset=utf-8") {
  const blob = new Blob([contents], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function normalizeProjectPayload(payload) {
  if (payload?.body && payload?.css) {
    return payload;
  }
  if (payload?.project?.body && payload?.project?.css) {
    return payload.project;
  }
  if (payload?.data?.body && payload?.data?.css) {
    return payload.data;
  }
  return null;
}

function setAutosaveStatus(message, type = "info", options = {}) {
  autosaveStatus.textContent = message;
  autosaveStatus.title = message;
  if (options.toast) {
    notify(message, type);
  }
}

function saveProject(manual = false) {
  if (!getDoc()) {
    return;
  }
  try {
    const data = projectData();
    localStorage.setItem(projectStorageKey, JSON.stringify(data));
    const time = new Date(data.savedAt).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setAutosaveStatus(`${manual ? "保存済み" : "自動保存"} ${time}`, "success", { toast: manual });
  } catch (error) {
    setAutosaveStatus("保存に失敗しました", "danger", { toast: true });
    console.warn(error);
  }
}

function scheduleAutosave() {
  clearTimeout(autosaveTimer);
  autosaveTimer = window.setTimeout(() => saveProject(false), 700);
}

function applyProjectData(data, statusMessage = "復元しました") {
  const payload = normalizeProjectPayload(data);
  if (!payload) {
    setAutosaveStatus("保存済みプロジェクトがありません", "warning", { toast: true });
    return false;
  }

  Object.assign(designState, payload.designState || {});
  syncDesignControls();
  currentCss = payload.css;
  currentHeadExtras = payload.headExtras || "";
  currentSourceUrl = payload.sourceUrl || "";
  currentPageTitle = payload.pageTitle || "編集済みページ";
  currentBeforeBody = payload.beforeBody || payload.body;
  currentBeforeCss = payload.beforeCss || payload.css;
  responsiveOverrides = payload.responsiveOverrides || {};
  selectedId = "body";
  history = [];
  historyIndex = -1;
  renderBeforeFrame(currentBeforeBody, currentBeforeCss);
  renderFrame(payload.body, currentCss, () => {
    commitChange();
    setAutosaveStatus(statusMessage, "success", { toast: true });
  });
  return true;
}

function restoreProject() {
  try {
    const stored = localStorage.getItem(projectStorageKey);
    if (!stored) {
      setAutosaveStatus("保存済みプロジェクトがありません", "warning", { toast: true });
      return;
    }
    applyProjectData(JSON.parse(stored), "ローカル保存を復元しました");
  } catch (error) {
    setAutosaveStatus("復元に失敗しました", "danger", { toast: true });
    console.warn(error);
  }
}

function exportProjectJson() {
  if (!getDoc()) {
    setAutosaveStatus("書き出すプロジェクトがありません", "warning", { toast: true });
    return;
  }
  try {
    const data = projectData();
    const payload = {
      webUpper: {
        format: "web-upper-project",
        version: 1,
        exportedAt: new Date().toISOString(),
      },
      project: data,
    };
    downloadTextFile(projectFilename(), JSON.stringify(payload, null, 2));
    setAutosaveStatus("プロジェクトJSONを書き出しました", "success", { toast: true });
  } catch (error) {
    setAutosaveStatus("プロジェクトJSONの書き出しに失敗しました", "danger", { toast: true });
    console.warn(error);
  }
}

async function importProjectJsonFile(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const payload = JSON.parse(text);
    if (applyProjectData(payload, "プロジェクトJSONを読み込みました")) {
      notify(`${file.name} を読み込みました`, "success", { toast: false });
    }
  } catch (error) {
    setAutosaveStatus("プロジェクトJSONの読み込みに失敗しました", "danger", { toast: true });
    console.warn(error);
  } finally {
    projectFileInput.value = "";
  }
}

function newProject() {
  if (!window.confirm("新しいプロジェクトを開始しますか？")) {
    return;
  }
  currentCss = pageCss;
  currentHeadExtras = "";
  currentSourceUrl = "";
  currentPageTitle = "編集済みページ";
  currentBeforeBody = initialBody;
  currentBeforeCss = pageCss;
  responsiveOverrides = {};
  selectedId = "body";
  history = [];
  historyIndex = -1;
  Object.assign(designState, {
    palette: "studio",
    typography: "balanced",
    density: "balanced",
    radius: 8,
    elevation: 2,
  });
  syncDesignControls();
  siteUrlInput.value = "";
  setUrlStatus("準備完了");
  renderBeforeFrame(currentBeforeBody, currentBeforeCss);
  renderFrame(initialBody, currentCss, () => {
    commitChange();
    setPreviewMode("after");
    setAutosaveStatus("新規プロジェクトを作成しました", "success", { toast: true });
  });
}

function readSnapshots() {
  try {
    return JSON.parse(localStorage.getItem(snapshotStorageKey) || "[]");
  } catch {
    return [];
  }
}

function writeSnapshots(snapshots) {
  localStorage.setItem(snapshotStorageKey, JSON.stringify(snapshots.slice(0, 24)));
}

function refreshSnapshotSelect() {
  const snapshots = readSnapshots();
  snapshotSelect.textContent = "";
  if (!snapshots.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "スナップショットなし";
    snapshotSelect.appendChild(option);
    return;
  }
  for (const snapshot of snapshots) {
    const option = document.createElement("option");
    option.value = snapshot.id;
    option.textContent = snapshot.name;
    snapshotSelect.appendChild(option);
  }
}

function saveSnapshot() {
  const now = new Date();
  const name = snapshotNameInput.value.trim() || `スナップショット ${now.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}`;
  const snapshots = readSnapshots();
  snapshots.unshift({
    id: `snap-${Date.now()}`,
    name,
    data: projectData(),
  });
  writeSnapshots(snapshots);
  snapshotNameInput.value = "";
  refreshSnapshotSelect();
  setAutosaveStatus("スナップショットを保存しました", "success", { toast: true });
}

function loadSnapshot() {
  const id = snapshotSelect.value;
  const snapshot = readSnapshots().find((item) => item.id === id);
  if (!snapshot) {
    setAutosaveStatus("スナップショットが選択されていません", "warning", { toast: true });
    return;
  }
  applyProjectData(snapshot.data, `${snapshot.name} を読み込みました`);
}

function sampleBody(name, eyebrow, headline, copy) {
  return initialBody
    .replaceAll("Northline Studio", name)
    .replace("インターフェースデザイン", eyebrow)
    .replace("洗練されたデジタルプロダクトを、明快な言葉と落ち着いたビジュアルで届けるためのコンパクトなランディングページです。", copy)
    .replace("<h1>Northline Studio</h1>", `<h1>${headline}</h1>`);
}

function loadDemoSample() {
  const samples = {
    studio: {
      title: "Northline Studio",
      industry: "portfolio",
      body: initialBody,
    },
    saas: {
      title: "SignalDesk",
      industry: "saas",
      body: sampleBody("SignalDesk", "SaaSプラットフォーム", "SignalDesk", "顧客の反応をチームの意思決定へつなげる、焦点の合ったプロダクトページです。"),
    },
    restaurant: {
      title: "Mori Table",
      industry: "restaurant",
      body: sampleBody("Mori Table", "季節のダイニング", "Mori Table", "予約、メニュー、印象に残る第一印象を届ける、あたたかいレストランページです。"),
    },
    portfolio: {
      title: "Aya Works",
      industry: "portfolio",
      body: sampleBody("Aya Works", "ポートフォリオ", "Aya Works", "厳選した実績、サービス、問い合わせ導線を整えたポートフォリオページです。"),
    },
    ecommerce: {
      title: "North Goods",
      industry: "ecommerce",
      body: sampleBody("North Goods", "オンラインストア", "North Goods", "商品を魅力的に見せ、購入まで自然に案内するコマースページです。"),
    },
  };

  const sample = samples[demoSampleInput.value] || samples.studio;
  currentCss = pageCss;
  currentHeadExtras = "";
  currentSourceUrl = "";
  currentPageTitle = sample.title;
  currentBeforeBody = sample.body;
  currentBeforeCss = pageCss;
  responsiveOverrides = {};
  history = [];
  historyIndex = -1;
  selectedId = "body";
  renderBeforeFrame(currentBeforeBody, currentBeforeCss);
  renderFrame(sample.body, currentCss, () => {
    designControls.industryPreset.value = sample.industry;
    applyIndustryPolish();
    applyDesignSystem({ commitNow: true });
    setPreviewMode("after");
    setAutosaveStatus("デモを読み込みました");
  });
}

function setStyle(prop, value) {
  const element = getSelectedElement();
  if (!element || fillingInspector) {
    return;
  }
  const scope = styleControls.scope.value;
  if (scope !== "all" && element.tagName !== "BODY") {
    setResponsiveStyle(element, prop, value, scope);
    updateRangeOutputs();
    resizePreview();
    queueCommit();
    return;
  }
  if (value === "") {
    element.style[prop] = "";
  } else {
    element.style[prop] = value;
  }
  updateRangeOutputs();
  resizePreview();
  queueCommit();
}

function updateText(value) {
  const element = getSelectedElement();
  if (!element || !canEditText(element) || fillingInspector) {
    return;
  }
  element.textContent = value;
  refreshLayers();
  resizePreview();
  queueCommit();
}

function updateImage(value) {
  const element = getSelectedElement();
  if (!element || element.tagName !== "IMG" || fillingInspector) {
    return;
  }
  element.setAttribute("src", value);
  resizePreview();
  queueCommit();
}

function updateImageAlt(value) {
  const element = getSelectedElement();
  if (!element || element.tagName !== "IMG" || fillingInspector) {
    return;
  }
  element.setAttribute("alt", value);
  refreshLayers();
  queueCommit();
}

function setSelectedImageLazy() {
  const element = getSelectedElement();
  if (!element || element.tagName !== "IMG") {
    return;
  }
  element.setAttribute("loading", "lazy");
  element.setAttribute("decoding", "async");
  setAutosaveStatus("画像を遅延読込にしました");
  commitChange();
}

function compressSelectedImage() {
  const element = getSelectedElement();
  if (!element || element.tagName !== "IMG") {
    return;
  }
  const image = new Image();
  image.crossOrigin = "anonymous";
  image.onload = () => {
    try {
      const maxWidth = 1600;
      const scale = Math.min(1, maxWidth / image.naturalWidth);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.naturalWidth * scale);
      canvas.height = Math.round(image.naturalHeight * scale);
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      element.src = canvas.toDataURL("image/webp", 0.82);
      element.setAttribute("decoding", "async");
      setAutosaveStatus("画像を圧縮しました");
      commitChange();
    } catch (error) {
      setAutosaveStatus("画像圧縮がブロックされました");
      console.warn(error);
    }
  };
  image.onerror = () => setAutosaveStatus("画像を読み込めませんでした");
  image.src = element.currentSrc || element.src;
}

function updateLink(value) {
  const element = getSelectedElement();
  if (!element || element.tagName !== "A" || fillingInspector) {
    return;
  }
  element.setAttribute("href", value || "#");
  queueCommit();
}

function resizePreview() {
  function measure(iframe, shell) {
    try {
      const doc = iframe.contentDocument;
      if (!doc) {
        return 720;
      }
      const height = Math.max(
        720,
        doc.documentElement.scrollHeight,
        doc.body.scrollHeight,
        doc.documentElement.offsetHeight,
      );
      iframe.style.height = `${height}px`;
      shell.style.minHeight = `${height}px`;
      return height;
    } catch {
      iframe.style.height = "720px";
      shell.style.minHeight = "720px";
      return 720;
    }
  }

  window.requestAnimationFrame(() => {
    measure(frame, stageFrame);
    measure(beforeFrame, beforeStageFrame);
    updateSpacingOverlay();
  });
}

function addBlock(type) {
  const definition = blockDefinitions.find((block) => block.type === type);
  const doc = getDoc();
  if (!definition || !doc) {
    return;
  }

  const template = doc.createElement("template");
  template.innerHTML = definition.html().trim();
  const node = template.content.firstElementChild;
  if (!node) {
    return;
  }
  sanitizeTree(node);
  normalizeEditableIds(node);

  const selected = getSelectedElement() || doc.body;
  if (canContainChildren(selected)) {
    selected.appendChild(node);
  } else {
    selected.insertAdjacentElement("afterend", node);
  }
  selectElement(node.dataset.editId);
  commitChange();
}

function duplicateSelected() {
  const element = getSelectedElement();
  if (!element || element.tagName === "BODY") {
    return;
  }
  const clone = element.cloneNode(true);
  for (const child of clone.querySelectorAll("[data-edit-id]")) {
    child.removeAttribute("data-edit-id");
  }
  clone.removeAttribute("data-edit-id");
  normalizeEditableIds(clone);
  element.insertAdjacentElement("afterend", clone);
  selectElement(clone.dataset.editId);
  commitChange();
}

function deleteSelected() {
  const element = getSelectedElement();
  if (!element || element.tagName === "BODY") {
    return;
  }
  const parent = element.parentElement;
  element.remove();
  selectElement(parent?.dataset.editId || "body");
  commitChange();
}

function moveSelected(direction) {
  const element = getSelectedElement();
  if (!element || element.tagName === "BODY") {
    return;
  }
  if (direction < 0 && element.previousElementSibling) {
    element.parentElement.insertBefore(element, element.previousElementSibling);
  }
  if (direction > 0 && element.nextElementSibling) {
    element.parentElement.insertBefore(element.nextElementSibling, element);
  }
  selectElement(element.dataset.editId, { keepScroll: true });
  commitChange();
}

function reorderLayer(sourceId, targetId) {
  if (!sourceId || !targetId || sourceId === targetId || sourceId === "body" || targetId === "body") {
    return;
  }
  const doc = getDoc();
  const source = doc.querySelector(`[data-edit-id="${CSS.escape(sourceId)}"]`);
  const target = doc.querySelector(`[data-edit-id="${CSS.escape(targetId)}"]`);
  if (!source || !target || source.contains(target)) {
    return;
  }
  target.parentElement.insertBefore(source, target);
  selectElement(sourceId, { keepScroll: true });
  commitChange();
}

function styleStringFromComputed(element) {
  const computed = getWin().getComputedStyle(element);
  const props = [
    "color",
    "background-color",
    "font-size",
    "font-weight",
    "line-height",
    "text-align",
    "padding",
    "margin",
    "border",
    "border-radius",
    "box-shadow",
    "display",
    "gap",
    "align-items",
    "justify-content",
    "max-width",
  ];
  return props
    .map((prop) => `${prop}: ${computed.getPropertyValue(prop)};`)
    .join(" ");
}

function copySelectedStyle() {
  const element = getSelectedElement();
  if (!element || element.tagName === "BODY") {
    return;
  }
  styleClipboard = element.getAttribute("style") || styleStringFromComputed(element);
  setAutosaveStatus("スタイルをコピーしました");
  refreshInspector();
}

function pasteSelectedStyle() {
  const element = getSelectedElement();
  if (!element || element.tagName === "BODY" || !styleClipboard) {
    return;
  }
  element.style.cssText += `; ${styleClipboard}`;
  commitChange();
}

function clearSelectedStyle() {
  const element = getSelectedElement();
  if (!element || element.tagName === "BODY") {
    return;
  }
  element.removeAttribute("style");
  commitChange();
}

function similarSelector(element) {
  const className = Array.from(element.classList).find((name) => !editorClassNames.includes(name));
  if (className) {
    return `.${CSS.escape(className)}`;
  }
  return element.tagName.toLowerCase();
}

function applyStyleToSimilar() {
  const element = getSelectedElement();
  if (!element || element.tagName === "BODY") {
    return;
  }
  const cssText = styleClipboard || element.getAttribute("style") || styleStringFromComputed(element);
  const selector = similarSelector(element);
  const doc = getDoc();
  for (const match of doc.querySelectorAll(selector)) {
    if (match.tagName !== "BODY") {
      match.style.cssText += `; ${cssText}`;
    }
  }
  commitChange();
}

function applyInlineStyles(element, styles) {
  for (const [key, value] of Object.entries(styles)) {
    element.style[key] = value;
  }
}

function applyStylePreset() {
  const element = getSelectedElement();
  if (!element || element.tagName === "BODY") {
    return;
  }
  const palette = getPalette().colors;
  const radius = `${Math.max(6, designState.radius)}px`;
  const preset = styleControls.preset.value;
  const presets = {
    softCard: {
      backgroundColor: palette.surface,
      border: `1px solid ${palette.line}`,
      borderRadius: radius,
      boxShadow: shadowForLevel(Math.max(1, designState.elevation)),
      padding: "24px",
    },
    accentButton: {
      backgroundColor: palette.accent,
      color: palette.accentText,
      border: `1px solid ${palette.accent}`,
      borderRadius: "8px",
      padding: "12px 18px",
      fontWeight: "800",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
    },
    ghostButton: {
      backgroundColor: palette.surface,
      color: palette.ink,
      border: `1px solid ${palette.line}`,
      borderRadius: "8px",
      padding: "12px 18px",
      fontWeight: "800",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
    },
    sectionBand: {
      backgroundColor: palette.panel,
      color: palette.ink,
      padding: "56px",
      borderRadius: radius,
    },
    heroText: {
      color: palette.ink,
      fontSize: "64px",
      lineHeight: "0.98",
      fontWeight: "800",
      maxWidth: "760px",
    },
    imageFrame: {
      borderRadius: radius,
      boxShadow: shadowForLevel(Math.max(2, designState.elevation)),
      border: `1px solid ${palette.line}`,
      overflow: "hidden",
    },
  };
  applyInlineStyles(element, presets[preset] || presets.softCard);
  commitChange();
}

function openHtmlEditor() {
  const element = getSelectedElement();
  if (!element || element.tagName === "BODY") {
    return;
  }
  htmlEditorCode.value = element.outerHTML;
  htmlDialog.showModal();
  htmlEditorCode.focus();
}

function applyHtmlEditor() {
  const element = getSelectedElement();
  if (!element || element.tagName === "BODY") {
    return;
  }
  const doc = getDoc();
  const template = doc.createElement("template");
  template.innerHTML = htmlEditorCode.value.trim();
  const replacement = template.content.firstElementChild;
  if (!replacement) {
    return;
  }
  sanitizeTree(replacement);
  normalizeEditableIds(replacement);
  element.replaceWith(replacement);
  selectElement(replacement.dataset.editId);
  commitChange();
  setAutosaveStatus("HTMLを適用しました", "success", { toast: true });
  htmlDialog.close();
}

function sanitizeTree(root) {
  const nodes = [root, ...Array.from(root.querySelectorAll("*"))];
  for (const node of nodes) {
    if (["SCRIPT", "IFRAME", "OBJECT", "EMBED"].includes(node.tagName)) {
      node.remove();
      continue;
    }
    for (const attribute of Array.from(node.attributes || [])) {
      const name = attribute.name.toLowerCase();
      const value = attribute.value.trim().toLowerCase();
      if (name.startsWith("on")) {
        node.removeAttribute(attribute.name);
      }
      if ((name === "href" || name === "src") && value.startsWith("javascript:")) {
        node.removeAttribute(attribute.name);
      }
    }
  }
}

function normalizeUrl(value) {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function toAbsoluteUrl(value, baseUrl) {
  if (!value || /^(data:|blob:|mailto:|tel:|#)/i.test(value.trim())) {
    return value;
  }
  try {
    return new URL(value, baseUrl).href;
  } catch {
    return value;
  }
}

function absolutizeSrcset(value, baseUrl) {
  return value
    .split(",")
    .map((part) => {
      const trimmed = part.trim();
      if (!trimmed) {
        return "";
      }
      const [urlPart, ...descriptor] = trimmed.split(/\s+/);
      return [toAbsoluteUrl(urlPart, baseUrl), ...descriptor].join(" ");
    })
    .filter(Boolean)
    .join(", ");
}

function absolutizeDocument(parsed, baseUrl) {
  const urlAttributes = ["href", "src", "poster", "action"];
  for (const element of parsed.querySelectorAll("*")) {
    for (const attribute of urlAttributes) {
      if (element.hasAttribute(attribute)) {
        element.setAttribute(attribute, toAbsoluteUrl(element.getAttribute(attribute), baseUrl));
      }
    }
    if (element.hasAttribute("srcset")) {
      element.setAttribute("srcset", absolutizeSrcset(element.getAttribute("srcset"), baseUrl));
    }
  }
}

function collectHeadExtras(parsed, baseUrl) {
  const extras = [`<base href="${escapeAttribute(baseUrl)}">`];
  const allowedLinks = Array.from(parsed.head.querySelectorAll("link")).filter((link) => {
    const rel = (link.getAttribute("rel") || "").toLowerCase();
    const asValue = (link.getAttribute("as") || "").toLowerCase();
    return (
      rel.includes("stylesheet") ||
      rel.includes("preconnect") ||
      rel.includes("dns-prefetch") ||
      rel.includes("preload") && asValue === "style" ||
      rel.includes("icon")
    );
  });

  for (const link of allowedLinks.slice(0, 48)) {
    const clone = link.cloneNode(false);
    if (clone.hasAttribute("href")) {
      clone.setAttribute("href", toAbsoluteUrl(clone.getAttribute("href"), baseUrl));
    }
    extras.push(clone.outerHTML);
  }

  const allowedMetas = Array.from(parsed.head.querySelectorAll("meta")).filter((meta) => {
    const name = (meta.getAttribute("name") || "").toLowerCase();
    const property = (meta.getAttribute("property") || "").toLowerCase();
    return (
      name === "description" ||
      name.startsWith("twitter:") ||
      property.startsWith("og:")
    );
  });

  for (const meta of allowedMetas.slice(0, 32)) {
    extras.push(meta.cloneNode(false).outerHTML);
  }

  return extras.join("\n  ");
}

function extractCss(parsed) {
  const styles = Array.from(parsed.querySelectorAll("style"));
  const css = styles
    .map((style) => style.textContent.trim())
    .filter(Boolean)
    .join("\n\n");
  for (const style of styles) {
    style.remove();
  }
  return css;
}

function fallbackImportCss(extractedCss) {
  const base = `body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

img,
video {
  max-width: 100%;
}

a {
  color: inherit;
}`;
  return extractedCss ? `${base}\n\n${extractedCss}` : base;
}

function setUrlStatus(message, type = "info", options = {}) {
  urlStatus.textContent = message;
  urlStatus.title = message;
  if (options.toast) {
    notify(message, type);
  }
}

function apiErrorMessage(payload, status) {
  const fallback = payload.detail || payload.error || `HTTP ${status}`;
  const messages = {
    dns_lookup_failed: "URLのホスト名を解決できませんでした。",
    invalid_url: "URLの形式を確認してください。",
    playwright_missing: "描画後HTMLの取得には Playwright が必要です。通常のHTML取得へ切り替えます。",
    private_network_blocked:
      "安全のためローカル/社内ネットワークのURLはサーバー取り込みを停止しました。ローカル限定で使う場合は WEB_UPPER_ALLOW_PRIVATE_URLS=1 を設定してください。",
    request_timeout: "URLの読み込みがタイムアウトしました。",
    response_too_large: "取り込むHTMLが大きすぎます。WEB_UPPER_MAX_HTML_BYTES を調整してください。",
    too_many_redirects: "リダイレクトが多すぎるため読み込みを停止しました。",
    unsupported_protocol: "http または https のURLを入力してください。",
  };
  return messages[payload.code] || fallback;
}

async function readApiError(response) {
  try {
    const payload = await response.clone().json();
    const message = apiErrorMessage(payload, response.status);
    const error = new Error(message);
    error.code = payload.code || "";
    error.status = response.status;
    return error;
  } catch {
    const error = new Error(`HTTP ${response.status}`);
    error.status = response.status;
    return error;
  }
}

async function fetchSitePayload(normalizedUrl) {
  const endpoints = ["/api/render", "/api/fetch"];
  let lastError = null;
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${endpoint}?url=${encodeURIComponent(normalizedUrl)}`);
      if (!response.ok) {
        lastError = await readApiError(response);
        continue;
      }
      const payload = await response.json();
      payload.captureMode = endpoint === "/api/render" ? "Rendered" : "Fetched";
      return payload;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("URLの読み込みに失敗しました");
}

async function loadSiteFromUrl(rawUrl) {
  const normalized = normalizeUrl(rawUrl);
  if (!normalized) {
    setUrlStatus("URLを入力してください", "warning", { toast: true });
    return;
  }

  loadUrlBtn.disabled = true;
  setUrlStatus("読み込み中...");
  beforeFrame.removeAttribute("srcdoc");
  beforeFrame.src = normalized;

  try {
    const payload = await fetchSitePayload(normalized);
    const html = payload.html || "";
    const finalUrl = payload.finalUrl || normalized;
    const parsed = new DOMParser().parseFromString(html, "text/html");

    absolutizeDocument(parsed, finalUrl);
    const extractedCss = extractCss(parsed);
    currentHeadExtras = collectHeadExtras(parsed, finalUrl);
    sanitizeTree(parsed.body);

    const bodyHtml = parsed.body.innerHTML.trim();
    if (!bodyHtml) {
      throw new Error("本文コンテンツが見つかりません");
    }

    currentSourceUrl = finalUrl;
    currentPageTitle = parsed.title || new URL(finalUrl).hostname;
    currentCss = fallbackImportCss(extractedCss);
    currentBeforeBody = bodyHtml;
    currentBeforeCss = currentCss;
    responsiveOverrides = {};
    selectedId = "body";
    history = [];
    historyIndex = -1;

    renderBeforeFrame(currentBeforeBody, currentBeforeCss);
    renderFrame(bodyHtml, currentCss, () => {
      commitChange();
      setPreviewMode("split");
      setUrlStatus(payload.captureMode === "Rendered" ? "描画後HTMLを取得" : payload.captureMode === "Fetched" ? "HTMLを取得" : "読み込み完了", "success", { toast: true });
    });
  } catch (error) {
    setUrlStatus("プレビューのみ", "warning", { toast: true });
    notify(error?.message || "URLの取り込みに失敗しました", "danger");
    showImportFallback(normalized, error);
  } finally {
    loadUrlBtn.disabled = false;
  }
}

function showImportFallback(url, error) {
  const message = `
    <main style="min-height:720px;display:grid;place-items:center;padding:44px;background:#f6f8f7;color:#17211f;font-family:ui-sans-serif,system-ui;">
      <section style="max-width:640px;padding:28px;border:1px solid #dfe7e3;border-radius:8px;background:#fff;">
        <p style="margin:0 0 10px;color:#0d967a;font-weight:800;text-transform:uppercase;font-size:12px;">プレビューを読み込みました</p>
        <h1 style="margin:0 0 14px;font-size:34px;line-height:1.1;">このURLは変更前プレビューとして表示できますが、まだ編集用に取り込めません。</h1>
        <p style="margin:0;color:#5f6d68;line-height:1.65;">ローカルサーバーから読み込むか、HTML/CSS取込を使ってください。ブラウザの安全制限により、外部ページを直接編集できない場合があります。</p>
        <p style="margin:18px 0 0;color:#8a4a4a;font-size:13px;">${escapeHtml(error?.message || "取込に失敗しました")}</p>
        <a href="${escapeAttribute(url)}" style="display:inline-flex;margin-top:18px;color:#0d967a;font-weight:800;">元URLを開く</a>
      </section>
    </main>
  `;
  currentHeadExtras = "";
  currentSourceUrl = url;
  currentPageTitle = "プレビューのみ";
  currentCss = "";
  currentBeforeBody = message;
  currentBeforeCss = "";
  responsiveOverrides = {};
  renderFrame(message, currentCss, () => {
    setPreviewMode("before");
  });
}

function cleanForExport(root) {
  const elements = [root, ...Array.from(root.querySelectorAll("*"))];
  for (const element of elements) {
    element.removeAttribute("data-edit-id");
    element.classList.remove(...editorClassNames);
    if (element.classList.length === 0) {
      element.removeAttribute("class");
    }
  }
}

function exportBodyHtml() {
  const doc = getDoc();
  removeSpacingOverlay();
  const clone = doc.body.cloneNode(true);
  cleanForExport(clone);
  updateSpacingOverlay();
  const wrapper = doc.createElement("div");
  for (const child of Array.from(clone.childNodes)) {
    wrapper.appendChild(child.cloneNode(true));
  }
  return wrapper.innerHTML.trim();
}

function exportDocument() {
  const bodyHtml = exportBodyHtml();
  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(currentPageTitle)}</title>
  ${currentHeadExtras}
  <style>
${currentCss.trim()}
  </style>
</head>
<body>
${bodyHtml}
</body>
</html>`;
}

function markedBlock(cssText, startMarker, endMarker) {
  const start = cssText.indexOf(startMarker);
  const end = cssText.indexOf(endMarker);
  if (start === -1 || end === -1 || end < start) {
    return "";
  }
  return cssText.slice(start, end + endMarker.length).trim();
}

function inlineOverrideCss() {
  const doc = getDoc();
  const chunks = [];
  for (const element of doc.querySelectorAll("[style]")) {
    if (element.tagName === "BODY") {
      continue;
    }
    const cssText = element.getAttribute("style")?.trim();
    if (!cssText) {
      continue;
    }
    const key = ensureWuKey(element);
    chunks.push(`[data-wu-key="${key}"] {\n  ${cssText.replaceAll(";", ";\n  ").trim()}\n}`);
  }
  return chunks.join("\n\n");
}

function generateCssDiff() {
  const sections = [];
  const source = currentSourceUrl ? `/* 元URL: ${currentSourceUrl} */` : "/* 元: ローカル下書き */";
  sections.push(source);

  const directDiff = currentBeforeCss && currentCss.startsWith(currentBeforeCss)
    ? currentCss.slice(currentBeforeCss.length).trim()
    : "";
  if (directDiff) {
    sections.push(directDiff);
  } else {
    const designBlock = markedBlock(currentCss, designStart, designEnd);
    const responsiveBlock = markedBlock(currentCss, responsiveStart, responsiveEnd);
    if (designBlock) {
      sections.push(designBlock);
    }
    if (responsiveBlock) {
      sections.push(responsiveBlock);
    }
  }

  const inlineCss = inlineOverrideCss();
  if (inlineCss) {
    sections.push(`/* インラインスタイルの上書き */\n${inlineCss}`);
  }

  if (sections.length === 1) {
    sections.push("/* CSSだけで表現できる変更はまだ検出されていません。 */");
  }
  return sections.join("\n\n");
}

function generateWordPressCss() {
  return `/*
Theme: Web Upper overrides
Source: ${currentSourceUrl || "local draft"}
WordPressの「外観 > カスタマイズ > 追加CSS」へ貼り付けてください。
*/

${generateCssDiff()}`;
}

function generateShopifySection() {
  return `{% comment %}
Web Upperで生成しました。Shopifyのカスタムセクションとして追加し、必要に応じてCSSをテーマアセットへ移してください。
{% endcomment %}

<section class="web-upper-section">
${exportBodyHtml()}
</section>

<style>
${generateCssDiff()}
</style>

{% schema %}
{
  "name": "Web Upper Section",
  "settings": [],
  "presets": [
    {
      "name": "Web Upper Section"
    }
  ]
}
{% endschema %}`;
}

function openExportDialog() {
  exportCode.value = exportDocument();
  exportDialog.showModal();
  exportCode.focus();
  exportCode.select();
}

function importDocument() {
  const rawHtml = importHtml.value.trim();
  if (!rawHtml) {
    return;
  }

  const parser = new DOMParser();
  const parsed = parser.parseFromString(rawHtml, "text/html");
  const extractedCss = Array.from(parsed.querySelectorAll("style"))
    .map((style) => style.textContent.trim())
    .filter(Boolean)
    .join("\n\n");

  for (const style of Array.from(parsed.querySelectorAll("style"))) {
    style.remove();
  }
  sanitizeTree(parsed.body);

  const nextCss = importCss.value.trim() || extractedCss || currentCss;
  const nextBody = parsed.body.innerHTML.trim();
  if (!nextBody) {
    return;
  }

  currentCss = nextCss;
  currentHeadExtras = "";
  currentSourceUrl = "";
  currentPageTitle = parsed.title || "取り込みページ";
  currentBeforeBody = nextBody;
  currentBeforeCss = nextCss;
  responsiveOverrides = {};
  selectedId = "body";
  renderFrame(nextBody, currentCss, () => {
    commitChange();
    setAutosaveStatus("HTML/CSSを取り込みました", "success", { toast: true });
  });
  renderBeforeFrame(currentBeforeBody, currentBeforeCss);
  importDialog.close();
}

function downloadExport() {
  const blob = new Blob([exportCode.value], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "edited-page.html";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  notify("書き出しファイルをダウンロードしました", "success");
}

async function copyExport() {
  exportCode.select();
  try {
    await navigator.clipboard.writeText(exportCode.value);
  } catch {
    document.execCommand("copy");
  }
  notify("書き出し内容をコピーしました", "success");
}

function openCssEditor() {
  cssEditorCode.value = currentCss;
  cssDialog.showModal();
  cssEditorCode.focus();
}

function applyCssEditor() {
  currentCss = cssEditorCode.value;
  updatePageCssInFrame();
  commitChange();
  setAutosaveStatus("CSSを適用しました", "success", { toast: true });
  cssDialog.close();
}

function headMetaContent(match) {
  const parser = new DOMParser();
  const parsed = parser.parseFromString(`<head>${currentHeadExtras}</head>`, "text/html");
  const selector = match.startsWith("og:")
    ? `meta[property="${CSS.escape(match)}"]`
    : `meta[name="${CSS.escape(match)}"]`;
  return parsed.querySelector(selector)?.getAttribute("content")?.trim() || "";
}

function setMetaElement(head, kind, key, content) {
  const selector = kind === "property"
    ? `meta[property="${CSS.escape(key)}"]`
    : `meta[name="${CSS.escape(key)}"]`;
  let meta = head.querySelector(selector);
  if (!content) {
    meta?.remove();
    return;
  }
  if (!meta) {
    meta = head.ownerDocument.createElement("meta");
    meta.setAttribute(kind, key);
    head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function updateHeadMeta({ title, description, ogImage }) {
  const parser = new DOMParser();
  const parsed = parser.parseFromString(`<head>${currentHeadExtras}</head>`, "text/html");
  const head = parsed.head;
  currentPageTitle = title.trim() || currentPageTitle || "編集済みページ";
  setMetaElement(head, "name", "description", description.trim());
  setMetaElement(head, "property", "og:title", currentPageTitle);
  setMetaElement(head, "property", "og:description", description.trim());
  setMetaElement(head, "property", "og:image", ogImage.trim());
  setMetaElement(head, "name", "twitter:card", ogImage.trim() ? "summary_large_image" : "");
  currentHeadExtras = Array.from(head.children)
    .filter((element) => element.tagName !== "TITLE")
    .map((element) => element.outerHTML)
    .join("\n  ");
}

function openMetaEditor() {
  metaTitleInput.value = currentPageTitle || "";
  metaDescriptionInput.value = headMetaContent("description");
  metaOgImageInput.value = headMetaContent("og:image");
  updateOgPreview();
  metaDialog.showModal();
  metaTitleInput.focus();
}

function updateOgPreview() {
  ogPreviewTitle.textContent = metaTitleInput.value.trim() || "ページタイトル";
  ogPreviewDescription.textContent = metaDescriptionInput.value.trim() || "説明文プレビュー";
  const image = metaOgImageInput.value.trim();
  ogPreviewImage.style.backgroundImage = image ? `url("${image.replaceAll('"', "%22")}")` : "";
}

function applyMetaEditor() {
  updateHeadMeta({
    title: metaTitleInput.value,
    description: metaDescriptionInput.value,
    ogImage: metaOgImageInput.value,
  });
  const doc = getDoc();
  if (doc) {
    doc.title = currentPageTitle;
  }
  commitChange();
  setAutosaveStatus("メタ情報を更新しました");
  metaDialog.close();
}

function addAuditIssue(issues, category, title, detail, good = false) {
  issues.push({ category, title, detail, good });
}

function runPageAudit() {
  const doc = getDoc();
  if (!doc || !doc.body) {
    return;
  }
  const issues = [];
  const images = Array.from(doc.querySelectorAll("img"));
  const actions = Array.from(doc.querySelectorAll("a, button"));
  const headings = Array.from(doc.querySelectorAll("h1, h2, h3, h4, h5, h6"));
  const textBlocks = Array.from(doc.querySelectorAll("p, li, h1, h2, h3, h4, h5, h6, a, button")).filter(
    (element) => element.textContent.trim().length > 0,
  );
  const emptyTextBlocks = Array.from(doc.querySelectorAll("p, h1, h2, h3, h4, h5, h6, a, button")).filter(
    (element) => element.textContent.trim().length === 0,
  );
  const description = headMetaContent("description");
  const ogTitle = headMetaContent("og:title");
  const ogDescription = headMetaContent("og:description");
  const ogImage = headMetaContent("og:image");
  let score = 100;

  const penalize = (amount) => {
    score = Math.max(0, score - amount);
  };

  const missingAlt = images.filter((image) => !(image.getAttribute("alt") || "").trim());
  if (missingAlt.length) {
    penalize(8);
    addAuditIssue(issues, "アクセシビリティ", `画像説明がない画像が${missingAlt.length}件あります`, "altテキストがない画像は、内容の理解や再利用が難しくなります。");
  }

  const emptyActions = actions.filter((element) => element.textContent.trim().length === 0);
  if (emptyActions.length) {
    penalize(8);
    addAuditIssue(issues, "アクセシビリティ", `ラベルのない操作要素が${emptyActions.length}件あります`, "リンクやボタンには、ユーザーと支援技術が読めるラベルが必要です。");
  }

  if (headings.length && headings[0].tagName !== "H1") {
    penalize(5);
    addAuditIssue(issues, "構造", "最初の見出しがH1ではありません", "明確なH1があると、ページの情報階層が強くなります。");
  }

  const h1Count = headings.filter((heading) => heading.tagName === "H1").length;
  if (h1Count > 1) {
    penalize(5);
    addAuditIssue(issues, "構造", `H1見出しが${h1Count}件あります`, "H1が複数あると、ページ構造の意図が伝わりにくくなる場合があります。");
  }

  if (emptyTextBlocks.length) {
    penalize(4);
    addAuditIssue(issues, "整理", `空のテキスト要素が${emptyTextBlocks.length}件あります`, "空要素は余分な余白や分かりにくいレイヤーの原因になります。");
  }

  if (!currentPageTitle || currentPageTitle === "編集済みページ") {
    penalize(6);
    addAuditIssue(issues, "SEO", "ページタイトルを設定してください", "公開や受け渡し前に、具体的なタイトルへ変更してください。");
  } else if (currentPageTitle.length > 62) {
    penalize(3);
    addAuditIssue(issues, "SEO", "ページタイトルが長めです", "60文字前後を超えるタイトルは検索結果で省略されることがあります。");
  }

  if (!description) {
    penalize(6);
    addAuditIssue(issues, "SEO", "メタ説明文がありません", "短い説明文があると、検索結果や共有プレビューが分かりやすくなります。");
  } else if (description.length < 80 || description.length > 170) {
    penalize(3);
    addAuditIssue(issues, "SEO", "メタ説明文の長さを調整できます", "80〜170文字程度の要約を目安にしてください。");
  }

  if (!ogTitle || !ogDescription || !ogImage) {
    penalize(5);
    addAuditIssue(issues, "OGP", "SNS共有プレビューが未完成です", "og:title、og:description、og:image を設定すると共有時の見え方が整います。");
  }

  const largeImages = images.filter((image) => image.naturalWidth > 2200 || image.naturalHeight > 1600);
  if (largeImages.length) {
    penalize(5);
    addAuditIssue(issues, "パフォーマンス", `大きすぎる画像が${largeImages.length}件あります`, "大きな画像はプレビューや初回表示を遅くすることがあります。");
  }

  const eagerImages = images.filter((image, index) => index > 0 && image.getAttribute("loading") !== "lazy");
  if (eagerImages.length > 2) {
    penalize(3);
    addAuditIssue(issues, "パフォーマンス", "多くの画像が即時読み込みです", "重要でない画像には loading=\"lazy\" を追加すると軽くなります。");
  }

  const nodeCount = doc.body.querySelectorAll("*").length;
  if (nodeCount > 900) {
    penalize(4);
    addAuditIssue(issues, "パフォーマンス", "DOMが大きめです", "DOMが大きすぎると編集や表示のパフォーマンスが落ちる場合があります。");
  }

  const inlineStyleCount = doc.body.querySelectorAll("[style]").length;
  if (inlineStyleCount > 80) {
    penalize(3);
    addAuditIssue(issues, "保守性", "インラインスタイルが多めです", "CSS差分を書き出して、重複スタイルを整理することを検討してください。");
  }

  const ctaCount = actions.filter((element) => /start|buy|contact|book|get|try|request|learn|view|download/i.test(element.textContent)).length;
  if (ctaCount === 0) {
    penalize(5);
    addAuditIssue(issues, "デザイン", "明確なCTAが見つかりません", "主なアクションがあると、ユーザーが次に何をすればよいか分かりやすくなります。");
  }

  const lowContrast = textBlocks.slice(0, 120).filter((element) => {
    const computed = getWin().getComputedStyle(element);
    const foreground = parseColor(computed.color);
    const background = effectiveBackground(element);
    return foreground && background && contrastRatio(foreground, background) < 4.5;
  });
  if (lowContrast.length) {
    penalize(8);
    addAuditIssue(issues, "デザイン", `コントラストが低いテキストが${lowContrast.length}件あります`, "文字色と背景色のコントラストを上げると読みやすくなります。");
  }

  auditResults.textContent = "";
  const scoreItem = document.createElement("div");
  scoreItem.className = `audit-score ${score >= 86 ? "good" : score >= 70 ? "warn" : "bad"}`;
  scoreItem.innerHTML = `<strong>${score}</strong><span>クイックスコア</span>`;
  auditResults.appendChild(scoreItem);

  if (!issues.length) {
    const item = document.createElement("div");
    item.className = "audit-item good";
    item.innerHTML = "<strong>目立つ問題は見つかりませんでした</strong><span>現在のページは簡易チェックを通過しています。</span>";
    auditResults.appendChild(item);
  } else {
    for (const issue of issues) {
      const item = document.createElement("div");
      item.className = `audit-item${issue.good ? " good" : ""}`;
      item.innerHTML = `<strong>${escapeHtml(issue.category)}: ${escapeHtml(issue.title)}</strong><span>${escapeHtml(issue.detail)}</span>`;
      auditResults.appendChild(item);
    }
  }
  auditDialog.showModal();
}

function setViewport(mode) {
  currentViewport = mode;
  for (const shell of [stageFrame, beforeStageFrame]) {
    shell.classList.remove("desktop", "tablet", "phone");
    shell.classList.add(mode);
  }
  for (const button of document.querySelectorAll("[data-viewport]")) {
    button.classList.toggle("is-active", button.dataset.viewport === mode);
  }
  const labels = {
    desktop: "デスクトップ 1280",
    tablet: "タブレット 768",
    phone: "スマホ 390",
  };
  viewportLabel.textContent = labels[mode];
  resizePreview();
}

function setPreviewMode(mode) {
  stageCompare.classList.remove("show-after", "show-before", "show-split", "show-slider");
  stageCompare.classList.add(`show-${mode}`);
  for (const button of document.querySelectorAll("[data-preview-mode]")) {
    button.classList.toggle("is-active", button.dataset.previewMode === mode);
  }
  resizePreview();
}

function setInspectorTab(tab) {
  for (const button of document.querySelectorAll("[data-inspector-tab]")) {
    button.classList.toggle("is-active", button.dataset.inspectorTab === tab);
  }
  for (const panel of document.querySelectorAll("[data-inspector-panel]")) {
    panel.classList.toggle("is-hidden", panel.dataset.inspectorPanel !== tab);
  }
}

function updateDiffSlider() {
  stageCompare.style.setProperty("--split", `${diffSlider.value}%`);
}

function updatePaletteButtons() {
  for (const button of designControls.paletteGrid.querySelectorAll(".palette-button")) {
    button.classList.toggle("is-active", button.dataset.palette === designState.palette);
  }
}

function syncDesignControls() {
  designControls.typePreset.value = designState.typography;
  designControls.density.value = designState.density;
  designControls.pageRadius.value = designState.radius;
  designControls.elevation.value = designState.elevation;
  updatePaletteButtons();
  updateDesignOutputs();
}

function applyIndustryPolish() {
  const presets = {
    saas: { palette: "studio", typography: "balanced", density: "airy", radius: 10, elevation: 3 },
    ecommerce: { palette: "signal", typography: "compact", density: "balanced", radius: 8, elevation: 2 },
    portfolio: { palette: "graphite", typography: "editorial", density: "airy", radius: 12, elevation: 4 },
    restaurant: { palette: "coral", typography: "editorial", density: "airy", radius: 14, elevation: 3 },
    clinic: { palette: "studio", typography: "balanced", density: "airy", radius: 10, elevation: 2 },
    app: { palette: "signal", typography: "balanced", density: "compact", radius: 16, elevation: 4 },
  };
  Object.assign(designState, presets[designControls.industryPreset.value] || presets.saas);
  syncDesignControls();

  const doc = getDoc();
  const palette = getPalette().colors;
  for (const action of doc.querySelectorAll("a, button")) {
    const text = action.textContent.trim();
    if (/start|buy|contact|book|get|try|request|download/i.test(text)) {
      applyInlineStyles(action, {
        backgroundColor: palette.accent,
        color: palette.accentText,
        borderRadius: `${Math.max(8, designState.radius)}px`,
        fontWeight: "800",
      });
    }
  }
}

function setupDesignControls() {
  const fragment = document.createDocumentFragment();
  for (const palette of palettes) {
    const colors = palette.colors;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "palette-button";
    button.dataset.palette = palette.id;
    button.innerHTML = `
      <span class="palette-swatches">
        <span style="background:${colors.ink}"></span>
        <span style="background:${colors.surface}"></span>
        <span style="background:${colors.accent}"></span>
        <span style="background:${colors.warm}"></span>
      </span>
      <span class="palette-name">${palette.label}</span>
    `;
    button.addEventListener("click", () => {
      designState.palette = palette.id;
      applyDesignSystem();
    });
    fragment.appendChild(button);
  }
  designControls.paletteGrid.appendChild(fragment);

  designControls.typePreset.addEventListener("change", () => {
    designState.typography = designControls.typePreset.value;
    applyDesignSystem();
  });

  designControls.density.addEventListener("change", () => {
    designState.density = designControls.density.value;
    applyDesignSystem();
  });

  designControls.pageRadius.addEventListener("input", () => {
    designState.radius = Number(designControls.pageRadius.value);
    applyDesignSystem();
  });

  designControls.elevation.addEventListener("input", () => {
    designState.elevation = Number(designControls.elevation.value);
    applyDesignSystem();
  });

  designControls.autoPolish.addEventListener("click", () => {
    applyIndustryPolish();
    applyDesignSystem({ commitNow: true });
  });

  designControls.fixContrast.addEventListener("click", fixSelectedContrast);
  designControls.metaEditor.addEventListener("click", openMetaEditor);
  syncDesignControls();
}

function setupBlocks() {
  const fragment = document.createDocumentFragment();
  for (const block of blockDefinitions) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "block-button";
    button.dataset.block = block.type;
    button.innerHTML = `${icon(block.icon)}<span>${block.label}</span>`;
    button.addEventListener("click", () => addBlock(block.type));
    fragment.appendChild(button);
  }
  blockGrid.appendChild(fragment);
}

function setupControls() {
  controls.text.addEventListener("input", () => updateText(controls.text.value));
  controls.image.addEventListener("input", () => updateImage(controls.image.value));
  controls.imageAlt.addEventListener("input", () => updateImageAlt(controls.imageAlt.value));
  controls.lazyImage.addEventListener("click", setSelectedImageLazy);
  controls.compressImage.addEventListener("click", compressSelectedImage);
  controls.link.addEventListener("input", () => updateLink(controls.link.value));
  controls.color.addEventListener("input", () => setStyle("color", controls.color.value));
  controls.background.addEventListener("input", () => setStyle("backgroundColor", controls.background.value));
  controls.fontSize.addEventListener("input", () => {
    const value = controls.fontSize.value ? `${controls.fontSize.value}px` : "";
    setStyle("fontSize", value);
  });
  controls.fontWeight.addEventListener("change", () => setStyle("fontWeight", controls.fontWeight.value));
  controls.align.addEventListener("change", () => setStyle("textAlign", controls.align.value));
  controls.display.addEventListener("change", () => setStyle("display", controls.display.value));
  controls.objectFit.addEventListener("change", () => setStyle("objectFit", controls.objectFit.value));
  controls.width.addEventListener("input", () => {
    setStyle("width", controls.width.value ? `${controls.width.value}px` : "");
  });
  controls.maxWidth.addEventListener("input", () => {
    setStyle("maxWidth", controls.maxWidth.value ? `${controls.maxWidth.value}px` : "");
  });
  controls.minHeight.addEventListener("input", () => {
    setStyle("minHeight", controls.minHeight.value ? `${controls.minHeight.value}px` : "");
  });
  controls.margin.addEventListener("input", () => {
    setStyle("margin", `${controls.margin.value}px`);
  });
  controls.padding.addEventListener("input", () => {
    setStyle("padding", `${controls.padding.value}px`);
  });
  controls.radius.addEventListener("input", () => {
    setStyle("borderRadius", `${controls.radius.value}px`);
  });
  controls.gap.addEventListener("input", () => {
    setStyle("gap", `${controls.gap.value}px`);
  });

  controls.moveUp.addEventListener("click", () => moveSelected(-1));
  controls.moveDown.addEventListener("click", () => moveSelected(1));
  controls.duplicate.addEventListener("click", duplicateSelected);
  controls.delete.addEventListener("click", deleteSelected);
  styleControls.applyPreset.addEventListener("click", applyStylePreset);
  styleControls.copy.addEventListener("click", copySelectedStyle);
  styleControls.paste.addEventListener("click", pasteSelectedStyle);
  styleControls.clear.addEventListener("click", clearSelectedStyle);
  styleControls.applySimilar.addEventListener("click", applyStyleToSimilar);
  styleControls.editHtml.addEventListener("click", openHtmlEditor);
  styleControls.spacingOverlay.addEventListener("change", () => {
    spacingOverlayEnabled = styleControls.spacingOverlay.checked;
    updateSpacingOverlay();
  });
  saveProjectBtn.addEventListener("click", () => saveProject(true));
  restoreProjectBtn.addEventListener("click", restoreProject);
  newProjectBtn.addEventListener("click", newProject);
  exportProjectBtn.addEventListener("click", exportProjectJson);
  importProjectBtn.addEventListener("click", () => projectFileInput.click());
  projectFileInput.addEventListener("change", importProjectJsonFile);
  activityToggleBtn.addEventListener("click", () => toggleActivityPanel());
  activityClearBtn.addEventListener("click", clearNotifications);
  saveSnapshotBtn.addEventListener("click", saveSnapshot);
  loadSnapshotBtn.addEventListener("click", loadSnapshot);
  loadDemoBtn.addEventListener("click", loadDemoSample);
  layerSearch.addEventListener("input", () => {
    layerFilter = layerSearch.value;
    refreshLayers();
  });

  undoBtn.addEventListener("click", () => {
    if (historyIndex > 0) {
      historyIndex -= 1;
      restoreSnapshot(historyIndex);
    }
  });

  redoBtn.addEventListener("click", () => {
    if (historyIndex < history.length - 1) {
      historyIndex += 1;
      restoreSnapshot(historyIndex);
    }
  });

  for (const button of document.querySelectorAll("[data-viewport]")) {
    button.addEventListener("click", () => setViewport(button.dataset.viewport));
  }

  for (const button of document.querySelectorAll("[data-preview-mode]")) {
    button.addEventListener("click", () => setPreviewMode(button.dataset.previewMode));
  }
  for (const button of document.querySelectorAll("[data-inspector-tab]")) {
    button.addEventListener("click", () => setInspectorTab(button.dataset.inspectorTab));
  }
  diffSlider.addEventListener("input", updateDiffSlider);
  updateDiffSlider();

  urlLoader.addEventListener("submit", (event) => {
    event.preventDefault();
    loadSiteFromUrl(siteUrlInput.value);
  });

  importBtn.addEventListener("click", () => {
    importHtml.value = exportBodyHtml();
    importCss.value = currentCss;
    importDialog.showModal();
  });

  exportBtn.addEventListener("click", openExportDialog);
  applyImportBtn.addEventListener("click", importDocument);
  copyExportBtn.addEventListener("click", copyExport);
  cssDiffBtn.addEventListener("click", () => {
    exportCode.value = generateCssDiff();
    exportCode.focus();
    exportCode.select();
    notify("CSS差分を書き出し欄に表示しました", "info");
  });
  wpExportBtn.addEventListener("click", () => {
    exportCode.value = generateWordPressCss();
    exportCode.focus();
    exportCode.select();
    notify("WordPress用CSSを表示しました", "info");
  });
  shopifyExportBtn.addEventListener("click", () => {
    exportCode.value = generateShopifySection();
    exportCode.focus();
    exportCode.select();
    notify("Shopifyセクションを表示しました", "info");
  });
  downloadExportBtn.addEventListener("click", downloadExport);
  designControls.audit.addEventListener("click", runPageAudit);
  designControls.cssEditor.addEventListener("click", openCssEditor);
  applyCssBtn.addEventListener("click", applyCssEditor);
  applyHtmlBtn.addEventListener("click", applyHtmlEditor);
  applyMetaBtn.addEventListener("click", applyMetaEditor);
  for (const input of [metaTitleInput, metaDescriptionInput, metaOgImageInput]) {
    input.addEventListener("input", updateOgPreview);
  }

  window.addEventListener("resize", resizePreview);
  window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const activeTag = document.activeElement?.tagName;
    const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(activeTag);
    if ((event.ctrlKey || event.metaKey) && key === "s") {
      event.preventDefault();
      saveProject(true);
    }
    if ((event.ctrlKey || event.metaKey) && key === "z" && !event.shiftKey && historyIndex > 0) {
      event.preventDefault();
      historyIndex -= 1;
      restoreSnapshot(historyIndex);
    }
    if ((event.ctrlKey || event.metaKey) && (key === "y" || (event.shiftKey && key === "z")) && historyIndex < history.length - 1) {
      event.preventDefault();
      historyIndex += 1;
      restoreSnapshot(historyIndex);
    }
    if (!isTyping && key === "delete") {
      event.preventDefault();
      deleteSelected();
    }
    if (!isTyping && key === "escape") {
      event.preventDefault();
      selectElement("body");
    }
  });
}

function init() {
  setupBlocks();
  setupDesignControls();
  setupControls();
  refreshSnapshotSelect();
  renderNotifications();
  setInspectorTab("content");
  updateHistoryButtons();
  renderBeforeFrame(currentBeforeBody, currentBeforeCss);
  renderFrame(initialBody, currentCss, () => {
    const params = new URLSearchParams(window.location.search);
    const url = params.get("url");
    if (url) {
      siteUrlInput.value = url;
      loadSiteFromUrl(url);
    }
  });
}

init();
