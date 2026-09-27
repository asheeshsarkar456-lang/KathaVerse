/* =========================================================
   KATHAVERSE
   Frontend Application
========================================================= */


/* =========================================================
   BACKEND URL
=========================================================

   Backend deploy hone ke baad yahan apna URL daalna:

   const API_BASE_URL =
     "https://your-kathaverse-backend.example.com";

========================================================= */

const API_BASE_URL = "YOUR_BACKEND_URL";


/* =========================================================
   APP CONFIG
========================================================= */

const APP_CONFIG = {
  dailyFreeMessages: 100,
  sessionMessages: 500,
  storyUnlockLevel: 5,
  matureAge: 30
};


/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEY = "kathaverse_state_v3";


/* =========================================================
   INITIAL STATE
========================================================= */

const defaultState = {

  page: "home",

  language: "auto",

  kp: 0,

  saved: [],

  session: 1,

  sessionMessages: [],

  previousResponseId: null,

  dailyMessages: 0,

  dailyDate: new Date().toISOString().slice(0, 10),

  matureVerified: false,

  user: {
    name: "Asheesh",
    username: "@asheesh",
    bio: "Story lover • Creator • Dreamer",
    avatar: "AS"
  },

  currentItem: null,

  currentCharacter: null,

  communityComments: [],

  reports: [],

  likedComments: [],

  following: [],

  settings: {
    autoplay: true,
    notifications: true,
    darkMode: true
  }

};


let appState = loadState();


/* =========================================================
   STORAGE FUNCTIONS
========================================================= */

function loadState() {

  try {

    const saved =
      JSON.parse(
        localStorage.getItem(STORAGE_KEY)
      );

    if (!saved) {
      return structuredClone(defaultState);
    }

    return {
      ...structuredClone(defaultState),
      ...saved,

      user: {
        ...defaultState.user,
        ...(saved.user || {})
      },

      settings: {
        ...defaultState.settings,
        ...(saved.settings || {})
      }
    };

  } catch {

    return structuredClone(defaultState);

  }

}


function saveAppState() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(appState)
  );

}


/* =========================================================
   DAILY RESET
========================================================= */

function resetDailyCounterIfNeeded() {

  const today =
    new Date()
      .toISOString()
      .slice(0, 10);

  if (appState.dailyDate !== today) {

    appState.dailyDate = today;

    appState.dailyMessages = 0;

    saveAppState();

  }

}


/* =========================================================
   KP / LEVEL SYSTEM
========================================================= */

function getLevelFromKP(kp) {

  return Math.min(
    100,
    Math.max(
      1,
      Math.floor(kp / 100) + 1
    )
  );

}


function getLevelKP(level) {

  return Math.max(
    0,
    (level - 1) * 100
  );

}


function addKP(amount, reason = "") {

  appState.kp += amount;

  saveAppState();

  showToast(
    `+${amount} KP ${reason ? "• " + reason : ""}`
  );

  render();

}


function getLevelProgress() {

  const level =
    getLevelFromKP(appState.kp);

  if (level >= 100) {
    return 100;
  }

  const base =
    getLevelKP(level);

  return Math.min(
    100,
    Math.round(
      ((appState.kp - base) / 100) * 100
    )
  );

}


/* =========================================================
   100 LEVEL REWARDS
========================================================= */

const LEVEL_REWARDS = [
  "Profile badge unlocked",
  "Custom profile title unlocked",
  "First story bookmark style",
  "Explorer badge unlocked",
  "Story Creator unlocked",
  "Character nickname color",
  "Extra saved-story slot",
  "Community creator badge",
  "Custom reading streak badge",
  "Roleplay veteran badge",

  "10% profile XP boost",
  "New profile frame",
  "Special story reaction",
  "Extra favourite slot",
  "Creator spotlight entry",
  "Character showcase slot",
  "Custom chat bubble style",
  "Story completion badge",
  "Community supporter badge",
  "New avatar frame",

  "Story collection badge",
  "Extra roleplay save slot",
  "Creator profile highlight",
  "Custom username badge",
  "Premium trial coupon eligibility",
  "New reading theme",
  "Story explorer badge",
  "Character collector badge",
  "Comment supporter badge",
  "Community explorer badge",

  "Custom profile banner",
  "Extra character slot",
  "Story creator theme",
  "Roleplay creator badge",
  "New chat background",
  "Story streak badge",
  "Creator milestone badge",
  "Extra saved character slot",
  "Custom level emblem",
  "Community legend badge",

  "Special creator card",
  "Extra story draft slot",
  "New profile animation",
  "Character library badge",
  "Story marathon badge",
  "Roleplay marathon badge",
  "Creator journey badge",
  "New reaction pack",
  "Profile spotlight eligibility",
  "50% story XP weekend boost",

  "Story curator badge",
  "Extra community collection",
  "Custom creator signature",
  "New story cover style",
  "Roleplay cover style",
  "Character cover style",
  "Extra draft memory slot",
  "Story archive badge",
  "Community helper badge",
  "Creator anniversary badge",

  "Special gold badge",
  "Custom level title",
  "New profile glow",
  "Story master badge",
  "Roleplay master badge",
  "Character master badge",
  "Creator master badge",
  "Community master badge",
  "Explorer master badge",
  "Storyverse badge",

  "Advanced creator frame",
  "Premium badge preview",
  "Custom story footer",
  "Extra character personality slot",
  "New chat effect",
  "Creator collection badge",
  "Story architect badge",
  "Roleplay architect badge",
  "Character architect badge",
  "Community architect badge",

  "KathaVerse veteran badge",
  "Legend profile frame",
  "Custom creator card",
  "Extra story collection",
  "Extra roleplay collection",
  "Creator showcase priority",
  "Advanced profile title",
  "Legendary explorer badge",
  "KathaVerse Hall badge",
  "Level 100 Legend"
];


function getLevelReward(level) {

  return (
    LEVEL_REWARDS[level - 1] ||
    `Level ${level} special reward`
  );

}


/* =========================================================
   500+ CATALOG
========================================================= */

const catalogSeeds = {

  romance: [
    "Adhoori Mohabbat",
    "Barish Mein Tum",
    "Woh Ek Muskaan",
    "Aakhri Message",
    "Dil Ka Raaz",
    "Tum Mere Saath Ho",
    "Coffee Aur Baarish",
    "Ek Purani Tasveer",
    "Chupke Se Pyaar",
    "Wapas Aaya Ishq",
    "Platform Number Saat",
    "Mulaqat Ke Baad",
    "Khat Jo Kabhi Nahi Bheja",
    "Ek Shaam Tumhare Naam",
    "Dil Ki Diary"
  ],

  college: [
    "College Ki Pehli Subah",
    "Library Wali Ladki",
    "Last Bench Love",
    "Campus Ka Raaz",
    "Fest Mein Mulaqat",
    "Hostel Ke Din",
    "Canteen Ki Kahani",
    "Final Year Promise",
    "Classroom No. 12",
    "The Missing Notebook",
    "College Reunion",
    "Scholarship Wali Kahani"
  ],

  detective: [
    "Band Kamre Ka Raaz",
    "Aakhri Saboot",
    "Midnight Detective",
    "Station Par Ek Laash",
    "Code 17",
    "Missing File",
    "Black Envelope",
    "The Silent Witness",
    "Purani Haveli Case",
    "Room 404 Mystery",
    "Secret Photograph",
    "Vanishing Train"
  ],

  horror: [
    "Raat Ke 3 Baje",
    "Purani Haveli",
    "Khidki Ke Bahar",
    "Woh Awaaz",
    "Band School",
    "Andheri Sadak",
    "Last Bus",
    "Room Number 13",
    "Jungle Ka Ghar",
    "Aaine Mein Chehra",
    "Kali Seedhiyan",
    "Midnight Call"
  ],

  fantasy: [
    "Aakhri Jadugar",
    "Chand Ka Rajya",
    "Khoi Hui Talwar",
    "Dragon Ki Wapsi",
    "Jungle Ka Raja",
    "Magic Library",
    "Seven Kingdoms",
    "Amar Yodha",
    "Forbidden Kingdom",
    "Mystic River",
    "Golden Crown",
    "Shadow Prince"
  ],

  scifi: [
    "2099: New Earth",
    "Mars Colony",
    "Time Machine",
    "Last Human City",
    "AI Ka Sapna",
    "Galaxy 9",
    "Robot Heart",
    "Future Mumbai",
    "The Last Signal",
    "Quantum Door",
    "Space Station 17",
    "Neon Earth"
  ],

  drama: [
    "Ghar Ki Kahani",
    "Ek Parivaar",
    "Papa Ka Sapna",
    "Maa Ki Chitthi",
    "Do Bhai",
    "Wapas Ghar",
    "Purani Diary",
    "Naya Safar",
    "Ek Faisla",
    "Zindagi Ka Mod"
  ],

  comedy: [
    "Shaadi Ka Hungama",
    "Padosi Ki Problem",
    "Office Ka Joker",
    "Roommate Trouble",
    "Canteen Comedy",
    "Family Group",
    "Wrong Number",
    "Mohalle Ka Hero",
    "Boss Ki Shaadi",
    "Desi Detective"
  ],

  kids: [
    "Chintu Aur Magic Pencil",
    "Golu Ka Rocket",
    "Tara Aur Flying Book",
    "Jungle School",
    "Motu Robot",
    "Magic Backpack",
    "Rainbow Village",
    "Little Space Explorer",
    "Talking Tree",
    "Moon Train"
  ]

};


const genreInfo = {

  romance: ["❤️", "Romance"],
  college: ["🎓", "College"],
  detective: ["🕵️", "Detective"],
  horror: ["👻", "Horror"],
  fantasy: ["🧙", "Fantasy"],
  scifi: ["🚀", "Sci-Fi"],
  drama: ["🎭", "Drama"],
  comedy: ["😂", "Comedy"],
  kids: ["🧸", "Kids"]

};


function buildCatalog() {

  const stories = [];

  let id = 1;

  Object.keys(catalogSeeds)
    .forEach((genre) => {

      const [icon, label] =
        genreInfo[genre];

      catalogSeeds[genre]
        .forEach((seed, index) => {

          for (let variant = 1; variant <= 4; variant++) {

            stories.push({

              id: `story-${id++}`,

              title:
                variant === 1
                  ? seed
                  : `${seed} — Chapter ${variant}`,

              genre: label,

              category: genre,

              icon,

              type: "story",

              description:
                getStoryDescription(
                  genre,
                  seed,
                  variant
                )

            });

          }

        });

    });

  return stories;

}


function getStoryDescription(
  genre,
  seed,
  variant
) {

  const descriptions = {

    romance:
      `एक भावनात्मक कहानी जहाँ ${seed} से शुरू होता है एक नया रिश्ता और कई अनकहे राज सामने आते हैं।`,

    college:
      `कॉलेज की दुनिया, दोस्ती, सपने और ${seed} से जुड़ा एक ऐसा मोड़ जो सब बदल देता है।`,

    detective:
      `${seed} के पीछे छिपे रहस्य को सुलझाने के लिए सुराग, शक और खतरे से भरी जाँच।`,

    horror:
      `${seed} की रात एक ऐसी घटना शुरू होती है जिसका जवाब शायद इंसानी दुनिया में नहीं है।`,

    fantasy:
      `${seed} की जादुई दुनिया में एक असाधारण यात्रा, रहस्य और शक्तियों की कहानी।`,

    scifi:
      `${seed} के बीच भविष्य की तकनीक और इंसानी भावनाओं की टक्कर।`,

    drama:
      `${seed} के आसपास रिश्तों, परिवार और जीवन के कठिन फैसलों की कहानी।`,

    comedy:
      `${seed} से शुरू होने वाली हल्की-फुल्की और मजेदार कहानी जिसमें हर कदम पर नया ट्विस्ट है।`,

    kids:
      `${seed} बच्चों के लिए एक सुरक्षित, मजेदार और कल्पनाशील adventure है।`

  };

  return descriptions[genre] ||
    `${seed} की एक interactive कहानी।`;

}


const STORIES = buildCatalog();


/* =========================================================
   ROLEPLAY CATALOG
========================================================= */

const roleplaySeeds = [

  ["❤️", "Best Friend to Love", "romance"],
  ["❤️", "Old Love Returns", "romance"],
  ["❤️", "Neighbourhood Crush", "romance"],
  ["🎓", "College Best Friend", "college"],
  ["🎓", "New Student", "college"],
  ["🎓", "Final Year Partner", "college"],
  ["🕵️", "Private Detective", "detective"],
  ["🕵️", "Secret Investigation", "detective"],
  ["🕵️", "Missing Person Case", "detective"],
  ["👻", "Haunted House", "horror"],
  ["👻", "Midnight Survivor", "horror"],
  ["👻", "Ghost Hunter", "horror"],
  ["🧙", "Royal Wizard", "fantasy"],
  ["🧙", "Lost Kingdom", "fantasy"],
  ["🧙", "Dragon Rider", "fantasy"],
  ["🚀", "Mars Commander", "scifi"],
  ["🚀", "Future Detective", "scifi"],
  ["🚀", "Space Survivor", "scifi"],
  ["🎭", "Family Drama", "drama"],
  ["🎭", "New Beginning", "drama"],
  ["😂", "Crazy Roommate", "comedy"],
  ["😂", "Funny Boss", "comedy"],
  ["🧸", "Magic School", "kids"],
  ["🧸", "Young Explorer", "kids"]
];


function buildRoleplays() {

  const result = [];

  let id = 1;

  roleplaySeeds.forEach(
    ([icon, name, category]) => {

      for (
        let variant = 1;
        variant <= 10;
        variant++
      ) {

        result.push({

          id: `role-${id++}`,

          title:
            variant === 1
              ? name
              : `${name} — Scenario ${variant}`,

          icon,

          category,

          type: "roleplay",

          description:
            `Interactive ${name} roleplay. आप अपनी बात, फैसले और actions से कहानी बदल सकते हैं।`

        });

      }

    }
  );

  return result;

}


const ROLEPLAYS = buildRoleplays();


/* =========================================================
   AI CHARACTERS
========================================================= */

const CHARACTERS = [

  {
    id: "char-1",
    name: "Aarav",
    icon: "🧑",
    genre: "Romance",
    personality:
      "calm, caring, emotional and supportive"
  },

  {
    id: "char-2",
    name: "Meera",
    icon: "👩",
    genre: "Drama",
    personality:
      "intelligent, warm and thoughtful"
  },

  {
    id: "char-3",
    name: "Inspector Kabir",
    icon: "🕵️",
    genre: "Detective",
    personality:
      "sharp, observant and logical"
  },

  {
    id: "char-4",
    name: "Rudra",
    icon: "🧙",
    genre: "Fantasy",
    personality:
      "brave, mysterious and powerful"
  },

  {
    id: "char-5",
    name: "Nova",
    icon: "🤖",
    genre: "Sci-Fi",
    personality:
      "curious, futuristic and analytical"
  },

  {
    id: "char-6",
    name: "Mimi",
    icon: "🧸",
    genre: "Kids",
    personality:
      "friendly, playful and family-friendly"
  },

  {
    id: "char-7",
    name: "The Narrator",
    icon: "📖",
    genre: "Story",
    personality:
      "cinematic, descriptive and creative"
  },

  {
    id: "char-8",
    name: "Shadow",
    icon: "🌑",
    genre: "Mystery",
    personality:
      "quiet, mysterious and unpredictable"
  }

];


/* =========================================================
   INIT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    resetDailyCounterIfNeeded();

    render();

  }
);


/* =========================================================
   NAVIGATION
========================================================= */

function navigate(page) {

  appState.page = page;

  closeSidebar();

  render();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function toggleSidebar() {

  document
    .getElementById("sidebar")
    .classList.toggle("open");

}


function closeSidebar() {

  document
    .getElementById("sidebar")
    .classList.remove("open");

}


/* =========================================================
   MAIN RENDER
========================================================= */

function render() {

  resetDailyCounterIfNeeded();

  updateActiveNav();

  const main =
    document.getElementById(
      "mainContent"
    );

  if (!main) return;

  const pages = {

    home: renderHome,

    explore: renderExplore,

    stories: renderStories,

    roleplay: renderRoleplay,

    characters: renderCharacters,

    creator: renderCreator,

    saved: renderSaved,

    community: renderCommunity,

    levels: renderLevels,

    premium: renderPremium,

    profile: renderProfile,

    reports: renderReports,

    settings: renderSettings,

    search: renderSearch

  };

  const fn =
    pages[appState.page] ||
    renderHome;

  main.innerHTML = fn();

}


function updateActiveNav() {

  document
    .querySelectorAll(".nav-item")
    .forEach((item) => {

      item.classList.toggle(
        "active",
        item.dataset.page === appState.page
      );

    });

}


/* =========================================================
   HOME
========================================================= */

function renderHome() {

  const level =
    getLevelFromKP(appState.kp);

  const featured =
    STORIES.slice(0, 8);

  const roleplays =
    ROLEPLAYS.slice(0, 6);

  return `

    <div class="page">

      <section class="hero">

        <div class="tag">
          ✨ AI Storytelling Platform
        </div>

        <h1>
          Stories Beyond Imagination
        </h1>

        <p>
          KathaVerse में कहानी सिर्फ पढ़ी नहीं जाती —
          आप उसे जीते हैं, बदलते हैं और अपनी दुनिया बनाते हैं।
        </p>

        <div class="hero-actions">

          <button
            class="btn"
            onclick="navigate('stories')"
          >
            📚 Explore Stories
          </button>

          <button
            class="btn secondary"
            onclick="navigate('roleplay')"
          >
            🎭 Start Roleplay
          </button>

          <button
            class="btn gold"
            onclick="navigate('creator')"
          >
            ✍️ Create Story
          </button>

        </div>

      </section>


      <section class="section">

        <div class="stat-grid">

          <div class="stat">
            <div class="stat-number">
              ${STORIES.length}+
            </div>
            <div class="stat-label">
              Stories
            </div>
          </div>

          <div class="stat">
            <div class="stat-number">
              ${ROLEPLAYS.length}+
            </div>
            <div class="stat-label">
              Roleplays
            </div>
          </div>

          <div class="stat">
            <div class="stat-number">
              100
            </div>
            <div class="stat-label">
              Levels
            </div>
          </div>

          <div class="stat">
            <div class="stat-number kp">
              ${appState.kp}
            </div>
            <div class="stat-label">
              Katha Points
            </div>
          </div>

        </div>

      </section>


      <section class="section">

        <div class="section-header">

          <h2>
            🔥 Trending Stories
          </h2>

          <button
            class="btn small secondary"
            onclick="navigate('stories')"
          >
            View All
          </button>

        </div>

        <div class="grid">
          ${featured.map(renderStoryCard).join("")}
        </div>

      </section>


      <section class="section">

        <div class="section-header">

          <h2>
            🎭 Popular Roleplays
          </h2>

          <button
            class="btn small secondary"
            onclick="navigate('roleplay')"
          >
            View All
          </button>

        </div>

        <div class="grid">
          ${roleplays.map(renderRoleplayCard).join("")}
        </div>

      </section>


      <section class="section">

        <div class="card">

          <div class="card-body">

            <h3>
              🏆 Level ${level}
            </h3>

            <p>
              ${getLevelReward(level)}
            </p>

            <div class="progress">
              <div
                class="progress-bar"
                style="width:${getLevelProgress()}%"
              ></div>
            </div>

            <br>

            <button
              class="btn small"
              onclick="navigate('levels')"
            >
              View 100 Levels
            </button>

          </div>

        </div>

      </section>

    </div>

  `;

}


/* =======================================================
