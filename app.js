const API_BASE_URL = "YOUR_BACKEND_URL";
/* =========================================================
   KATHAVERSE — APP.JS
   Frontend Prototype
========================================================= */


/* =========================================================
   DATA
========================================================= */

const stories = [

  {
    id: 1,
    title: "रात के 2 बजे आया मैसेज",
    genre: "Romance",
    icon: "💌",
    description: "एक अनजान मैसेज से शुरू हुई कहानी।",
    type: "story"
  },

  {
    id: 2,
    title: "पुरानी डायरी",
    genre: "Mystery",
    icon: "📖",
    description: "एक पुरानी डायरी में छिपा हुआ रहस्य।",
    type: "story"
  },

  {
    id: 3,
    title: "आखिरी प्लेटफॉर्म",
    genre: "Mystery",
    icon: "🚉",
    description: "एक स्टेशन, एक रहस्यमयी यात्री और एक आखिरी ट्रेन।",
    type: "story"
  },

  {
    id: 4,
    title: "आखिरी घर",
    genre: "Horror",
    icon: "🏚️",
    description: "शहर के बाहर मौजूद उस घर में कोई अकेला नहीं था।",
    type: "story"
  },

  {
    id: 5,
    title: "चाँद का साम्राज्य",
    genre: "Fantasy",
    icon: "🌙",
    description: "एक ऐसी दुनिया जहाँ चाँद के अपने नियम हैं।",
    type: "story"
  },

  {
    id: 6,
    title: "2099: आखिरी इंसान",
    genre: "Sci-Fi",
    icon: "🤖",
    description: "भविष्य की दुनिया में एक इंसान की आखिरी कहानी।",
    type: "story"
  },

  {
    id: 7,
    title: "कॉलेज की पहली मुलाकात",
    genre: "College",
    icon: "🎓",
    description: "कॉलेज के पहले दिन हुई एक यादगार मुलाकात।",
    type: "story"
  },

  {
    id: 8,
    title: "एक अधूरी शादी",
    genre: "Drama",
    icon: "💍",
    description: "एक शादी से पहले बदल गई पूरी जिंदगी।",
    type: "story"
  },

  {
    id: 9,
    title: "समुद्र के उस पार",
    genre: "Adventure",
    icon: "🌊",
    description: "एक सफर जो जिंदगी बदल देता है।",
    type: "story"
  },

  {
    id: 10,
    title: "जादुई दरवाज़ा",
    genre: "Fantasy",
    icon: "🚪",
    description: "कमरे में अचानक दिखाई दिया एक रहस्यमयी दरवाज़ा।",
    type: "story"
  },

  {
    id: 11,
    title: "डिटेक्टिव की आखिरी फाइल",
    genre: "Detective",
    icon: "🕵️",
    description: "एक केस जिसे पुलिस भी हल नहीं कर पाई।",
    type: "story"
  },

  {
    id: 12,
    title: "बारिश और तुम",
    genre: "Romance",
    icon: "🌧️",
    description: "बारिश की एक शाम और दो अनजान लोग।",
    type: "story"
  },

  {
    id: 13,
    title: "जंगल का रहस्य",
    genre: "Horror",
    icon: "🌲",
    description: "जंगल में जाने वाले लोग वापस क्यों नहीं आते?",
    type: "story"
  },

  {
    id: 14,
    title: "स्टारशिप आर्या",
    genre: "Sci-Fi",
    icon: "🚀",
    description: "पृथ्वी से बहुत दूर शुरू हुआ एक मिशन।",
    type: "story"
  },

  {
    id: 15,
    title: "दो शहरों के बीच",
    genre: "Drama",
    icon: "🌆",
    description: "दो शहर और एक रिश्ता।",
    type: "story"
  },

  {
    id: 16,
    title: "दादी की जादुई कहानी",
    genre: "Kids",
    icon: "🧸",
    description: "बच्चों के लिए एक प्यारी जादुई कहानी।",
    type: "story"
  }

];


/* =========================================================
   ROLEPLAY DATA
========================================================= */

const roleplays = [

  {
    id: 101,
    title: "कॉलेज का नया दोस्त",
    genre: "College",
    icon: "🎓",
    description: "एक नए कॉलेज में दोस्ती की शुरुआत।",
    type: "roleplay"
  },

  {
    id: 102,
    title: "डिटेक्टिव पार्टनर",
    genre: "Detective",
    icon: "🕵️",
    description: "आप और AI मिलकर केस सॉल्व करेंगे।",
    type: "roleplay"
  },

  {
    id: 103,
    title: "Fantasy Kingdom",
    genre: "Fantasy",
    icon: "👑",
    description: "एक magical kingdom में आपका adventure।",
    type: "roleplay"
  },

  {
    id: 104,
    title: "Adventure Mission",
    genre: "Adventure",
    icon: "🧭",
    description: "एक dangerous mission आपका इंतजार कर रहा है।",
    type: "roleplay"
  },

  {
    id: 105,
    title: "Mystery House",
    genre: "Mystery",
    icon: "🏠",
    description: "एक रहस्यमयी घर और उसके अनसुलझे सवाल।",
    type: "roleplay"
  },

  {
    id: 106,
    title: "नई जिंदगी",
    genre: "Drama",
    icon: "🌅",
    description: "एक नए शहर में नई शुरुआत।",
    type: "roleplay"
  }

];


/* =========================================================
   AI CHARACTERS
========================================================= */

const characters = [

  {
    id: 1,
    name: "आर्या",
    role: "Friendly AI Character",
    icon: "🌸",
    description: "एक friendly और समझदार AI character।"
  },

  {
    id: 2,
    name: "कबीर",
    role: "Detective Partner",
    icon: "🕵️",
    description: "आपके साथ mystery cases solve करने वाला partner।"
  },

  {
    id: 3,
    name: "मीरा",
    role: "Fantasy Guide",
    icon: "🧚",
    description: "एक magical world की guide।"
  },

  {
    id: 4,
    name: "रुद्र",
    role: "Mystery Character",
    icon: "🖤",
    description: "जिसके बारे में बहुत कम लोग जानते हैं।"
  },

  {
    id: 5,
    name: "ज़ोया",
    role: "College Friend",
    icon: "🎓",
    description: "कॉलेज की fun और energetic friend।"
  },

  {
    id: 6,
    name: "अर्जुन",
    role: "Adventure Partner",
    icon: "🧭",
    description: "हर adventure में साथ देने वाला partner।"
  }

];


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [

  ["all", "✦", "All"],

  ["Romance", "💌", "Romance"],

  ["Mystery", "🔎", "Mystery"],

  ["Detective", "🕵️", "Detective"],

  ["Horror", "👻", "Horror"],

  ["Fantasy", "🌙", "Fantasy"],

  ["Sci-Fi", "🚀", "Sci-Fi"],

  ["College", "🎓", "College"],

  ["Drama", "🎭", "Drama"],

  ["Kids", "🧸", "Kids"],

  ["Adventure", "🧭", "Adventure"]

];


/* =========================================================
   100 LEVEL REWARDS
========================================================= */

const levelRewards = [

  "KathaVerse Start",

  "Basic Roleplay",

  "Favourites",

  "Bookmarks",

  "Story Creation",

  "Character Interaction",

  "Comments",

  "Badge System",

  "Streak Rewards",

  "AI Visual Stories",

  "Quick Replies",

  "Story Themes",

  "Extra Bookmark",

  "Profile Frame",

  "Advanced Memory",

  "Creator Tools",

  "Comment Reactions",

  "Custom Tags",

  "Story Drafts",

  "Character Customization",

  "Reader Badge",

  "Extra Daily KP",

  "Cover Themes",

  "Private Drafts",

  "Special Badge",

  "Creator Stats",

  "More Character Slots",

  "Custom Intro",

  "Story Collections",

  "Story Series",

  "Series Cover",

  "Extra Save Slots",

  "Reader Streak",

  "Creator Notes",

  "Story Analytics",

  "Character Notes",

  "Custom Greeting",

  "More Draft Slots",

  "Share Card",

  "Advanced Sessions",

  "Session Recap",

  "Story Timeline",

  "Ending Notes",

  "More AI Turns",

  "Creator Profile",

  "Featured Drafts",

  "Extra Collections",

  "Profile Badge",

  "Creator Milestone",

  "Creator Badge",

  "Advanced Search",

  "More Favourites",

  "Story Filters",

  "Extra Reports",

  "Community Badge",

  "Character Gallery",

  "Visual Scene Slots",

  "Series Manager",

  "Creator Insights",

  "Visual Customization",

  "Premium Trial Token",

  "Extra Roleplay Slot",

  "Reader Rank",

  "Story Challenge",

  "Challenge Badge",

  "Creator Challenge",

  "Series Intro",

  "More Cover Themes",

  "Advanced Profile",

  "Elite Badge",

  "Elite Frame",

  "More AI Memory",

  "Longer Drafts",

  "Creator Tools+",

  "Spotlight Eligibility",

  "Community Spotlight",

  "Special Reaction",

  "Extra Character Slot",

  "Story Vault",

  "Featured Eligibility",

  "Featured Frame",

  "Series Badge",

  "Creator Vault",

  "Advanced Stats",

  "Veteran Track",

  "Veteran Frame",

  "More Visual Scenes",

  "Creator Showcase",

  "Special Title",

  "Veteran Badge",

  "Legendary Frame",

  "Extra Collections+",

  "Creator Legacy",

  "Story Archive",

  "Hall of Stories",

  "Legend Track",

  "Legendary Creator Tools",

  "Special Nameplate",

  "Final Milestone",

  "KathaVerse Legend"

];


/* =========================================================
   APPLICATION STATE
========================================================= */

const STORAGE_KEY = "kathaverse_data_v1";


const defaultState = {

  name: "Asheesh",

  language: "auto",

  kp: 0,

  messagesToday: 0,

  level: 1,

  session: 1,

  sessionMessages: 0,

  createdStories: 0,

  saved: [],

  chats: [],

  comments: [],

  reports: [],

  followers: 0,

  premium: false,

  matureVerified: false

};


let appState = loadState();


/* =========================================================
   LOAD STATE
========================================================= */

function loadState() {

  try {

    const saved =
      localStorage.getItem(STORAGE_KEY);

    if (!saved) {

      return {
        ...defaultState
      };

    }

    return {
      ...defaultState,
      ...JSON.parse(saved)
    };

  } catch (error) {

    console.error(error);

    return {
      ...defaultState
    };

  }

}


/* =========================================================
   SAVE STATE
========================================================= */

function saveState() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(appState)
  );

}


/* =========================================================
   LEVEL CALCULATION
========================================================= */

function calculateLevel() {

  return Math.min(

    100,

    Math.floor(
      appState.kp / 100
    ) + 1

  );

}


function updateLevel() {

  appState.level =
    calculateLevel();

}


/* =========================================================
   ADD KATHA POINTS
========================================================= */

function addKathaPoints(points) {

  const oldLevel =
    calculateLevel();

  appState.kp += points;

  if (appState.kp > 10000) {

    appState.kp = 10000;

  }

  updateLevel();

  saveState();

  const newLevel =
    calculateLevel();

  if (newLevel > oldLevel) {

    showToast(
      `🎉 Level Up! अब आप Level ${newLevel} पर हैं`
    );

  }

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

  return String(value ?? "")

    .replaceAll("&", "&amp;")

    .replaceAll("<", "&lt;")

    .replaceAll(">", "&gt;")

    .replaceAll('"', "&quot;")

    .replaceAll("'", "&#039;");

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

  const toast =
    document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(
    window.toastTimer
  );

  window.toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 2500);

}


/* =========================================================
   MODAL
========================================================= */

function openModal(content) {

  const modal =
    document.getElementById(
      "globalModal"
    );

  const body =
    document.getElementById(
      "modalBody"
    );

  body.innerHTML = content;

  modal.classList.remove(
    "hidden"
  );

}


function closeModal() {

  const modal =
    document.getElementById(
      "globalModal"
    );

  modal.classList.add(
    "hidden"
  );

}


/* =========================================================
   MENU
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const menu =
      document.getElementById(
        "menuButton"
      );

    if (menu) {

      menu.addEventListener(
        "click",
        () => {

          const sidebar =
            document.getElementById(
              "sidebar"
            );

          sidebar.classList.toggle(
            "open"
          );

        }
      );

    }

    renderHome();

  }
);


/* =========================================================
   NAVIGATION
========================================================= */

function navigateTo(
  page,
  parameter = null
) {

  const sidebar =
    document.getElementById(
      "sidebar"
    );

  if (sidebar) {

    sidebar.classList.remove(
      "open"
    );

  }

  window.scrollTo(
    0,
    0
  );


  switch (page) {

    case "home":
      renderHome();
      break;

    case "explore":
      renderExplore();
      break;

    case "stories":
      renderStories();
      break;

    case "roleplay":
      renderRoleplay();
      break;

    case "characters":
      renderCharacters();
      break;

    case "create":
      renderCreateStory();
      break;

    case "saved":
      renderSaved();
      break;

    case "community":
      renderCommunity();
      break;

    case "levels":
      renderLevels();
      break;

    case "premium":
      renderPremium();
      break;

    case "profile":
      renderProfile();
      break;

    case "reports":
      renderReports();
      break;

    case "settings":
      renderSettings();
      break;

    case "search":
      renderSearch();
      break;

    case "chat":
      renderChat(parameter);
      break;

    default:
      renderHome();

  }

}


/* =========================================================
   UPDATE AVATAR
========================================================= */

function updateAvatar() {

  const avatar =
    document.getElementById(
      "profileAvatar"
    );

  if (!avatar) return;

  avatar.textContent =
    (
      appState.name ||
      "A"
    )
      .charAt(0)
      .toUpperCase();

}


/* =========================================================
   CARD
========================================================= */

function createCard(item) {

  return `

    <article class="card">

      <div class="card-cover">
        ${item.icon}
      </div>

      <div class="card-body">

        <h3>
          ${escapeHTML(item.title)}
        </h3>

        <span class="tag">
          ${escapeHTML(item.genre)}
        </span>

        <span class="tag">
          ${
            item.type === "roleplay"
              ? "Roleplay"
              : "Story"
          }
        </span>

        <p class="muted">
          ${escapeHTML(
            item.description
          )}
        </p>

        <div class="actions">

          <button
            class="btn btn-primary"
            onclick="openExperience(${item.id})"
          >
            शुरू करें
          </button>

          <button
            class="btn"
            onclick="saveExperience(${item.id})"
          >
            ${
              appState.saved.includes(
                item.id
              )
                ? "♥ Saved"
                : "♡ Save"
            }
          </button>

        </div>

      </div>

    </article>

  `;

}


/* =========================================================
   ALL EXPERIENCES
========================================================= */

function getAllExperiences() {

  return [
    ...stories,
    ...roleplays
  ];

}


/* =========================================================
   HOME
========================================================= */

function renderHome() {

  const main =
    document.getElementById(
      "mainContent"
    );

  updateLevel();

  main.innerHTML = `

    <section class="hero">

      <h1>
        आपकी कहानी।
        <br>
        आपकी दुनिया।
      </h1>

      <p>
        KathaVerse में stories पढ़ें,
        AI characters से बात करें,
        roleplay करें और अपनी खुद की
        interactive कहानी बनाएं।
      </p>

      <div class="actions">

        <button
          class="btn btn-primary"
          onclick="navigateTo('explore')"
        >
          ✦ Stories Explore करें
        </button>

        <button
          class="btn"
          onclick="navigateTo('create')"
        >
          ✍️ अपनी कहानी बनाएं
        </button>

      </div>

    </section>


    <section class="stats-grid">

      <div class="stat-card">
        <strong>
          ${appState.kp}
        </strong>
        <span>
          Katha Points
        </span>
      </div>


      <div class="stat-card">
        <strong>
          Level ${appState.level}
        </strong>
        <span>
          ${
            levelRewards[
              appState.level - 1
            ]
          }
        </span>
      </div>


      <div class="stat-card">
        <strong>
          ${appState.messagesToday}/100
        </strong>
        <span>
          Free Messages Today
        </span>
      </div>


      <div class="stat-card">
        <strong>
          Session ${appState.session}
        </strong>
        <span>
          ${appState.sessionMessages}/500
          messages
        </span>
      </div>

    </section>


    <div class="section-head">

      <h2>
        🔥 Trending Stories
      </h2>

      <button
        class="btn"
        onclick="navigateTo('stories')"
      >
        सभी देखें
      </button>

    </div>


    <div class="grid">

      ${stories
        .slice(0, 8)
        .map(createCard)
        .join("")}

    </div>


    <div class="section-head">

      <h2>
        ◈ Popular Roleplay
      </h2>

      <button
        class="btn"
        onclick="navigateTo('roleplay')"
      >
        सभी देखें
      </button>

    </div>


    <div class="grid">

      ${roleplays
        .slice(0, 4)
        .map(createCard)
        .join("")}

    </div>


    <div class="section-head">

      <h2>
        ♙ AI Characters
      </h2>

      <button
        class="btn"
        onclick="navigateTo('characters')"
      >
        सभी देखें
      </button>

    </div>


    <div class="grid">

      ${characters
        .slice(0, 4)
        .map(
          createCharacterCard
        )
        .join("")}

    </div>

  `;

  updateAvatar();

}


/* =========================================================
   EXPLORE
========================================================= */

function renderExplore() {

  const main =
    document.getElementById(
      "mainContent"
    );

  main.innerHTML = `

    <div class="section-head">

      <h1>
        ✦ Explore
      </h1>

    </div>


    <div class="actions">

      ${categories
        .map(
          category => `

            <button
              class="btn"
              onclick="filterStories('${category[0]}')"
            >
              ${category[1]}
              ${category[2]}
            </button>

          `
        )
        .join("")}

    </div>


    <div
      id="exploreResults"
      class="grid"
      style="margin-top:18px"
    >

      ${getAllExperiences()
        .map(createCard)
        .join("")}

    </div>

  `;

}


/* =========================================================
   FILTER
========================================================= */

function filterStories(
  genre
) {

  const container =
    document.getElementById(
      "exploreResults"
    );

  if (!container) return;

  let results;

  if (
    genre === "all"
  ) {

    results =
      getAllExperiences();

  } else {

    results =
      getAllExperiences()
        .filter(
          item =>
            item.genre === genre
        );

  }

  if (!results.length) {

    container.innerHTML = `

      <div class="empty-state">

        <div class="empty-state-icon">
          📚
        </div>

        <p>
          इस category में अभी content नहीं है।
        </p>

      </div>

    `;

    return;

  }

  container.innerHTML =
    results
      .map(createCard)
      .join("");

}


/* =========================================================
   STORIES
========================================================= */

function renderStories() {

  const main =
    document.getElementById(
      "mainContent"
    );

  main.innerHTML = `

    <div class="section-head">

      <h1>
        📚 Stories
      </h1>

    
