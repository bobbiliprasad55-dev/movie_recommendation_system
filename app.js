/* ==========================================================================
   AUREON CORE JAVASCRIPT - PREMIUM CINEMATIC UNIVERSE (SAFE & ROBUST VERSION)
   ========================================================================== */

// Curated Movies Database
const MOVIES_DATABASE = [
    {
        id: "interstellar",
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
        runtime: "169 min",
        genres: ["Sci-Fi", "Drama", "Adventure"],
        director: "Christopher Nolan",
        cast: [
            { name: "Matthew McConaughey", role: "Cooper" },
            { name: "Anne Hathaway", role: "Brand" },
            { name: "Jessica Chastain", role: "Murph" },
            { name: "Michael Caine", role: "Professor Brand" }
        ],
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. A breathtaking, mind-bending epic exploring time dilatation, interstellar gravity, and love across dimensions.",
        poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1280&q=80&auto=format&fit=crop",
        trailerId: "zSWdZVtXD7I",
        tagline: "Mankind was born on Earth. It was never meant to die here.",
        isSpotlight: true,
        category: "scifi"
    },
    {
        id: "dune-two",
        title: "Dune: Part Two",
        year: 2024,
        rating: 8.6,
        runtime: "166 min",
        genres: ["Sci-Fi", "Adventure", "Action"],
        director: "Denis Villeneuve",
        cast: [
            { name: "Timothée Chalamet", role: "Paul Atreides" },
            { name: "Zendaya", role: "Chani" },
            { name: "Rebecca Ferguson", role: "Lady Jessica" },
            { name: "Austin Butler", role: "Feyd-Rautha" }
        ],
        description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future.",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dune_Part_Two_poster.jpg",
        backdrop: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1280&q=80&auto=format&fit=crop",
        trailerId: "Way9Dexny3w",
        tagline: "Long live the fighters.",
        isSpotlight: true,
        category: "trending"
    },
    {
        id: "bladerunner-2049",
        title: "Blade Runner 2049",
        year: 2017,
        rating: 8.0,
        runtime: "164 min",
        genres: ["Sci-Fi", "Thriller", "Mystery"],
        director: "Denis Villeneuve",
        cast: [
            { name: "Ryan Gosling", role: "Officer K" },
            { name: "Harrison Ford", role: "Rick Deckard" },
            { name: "Ana de Armas", role: "Joi" },
            { name: "Sylvia Hoeks", role: "Luv" }
        ],
        description: "A new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
        poster: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png",
        backdrop: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1280&q=80&auto=format&fit=crop",
        trailerId: "gCcx85zVvqw",
        tagline: "There is still a page left.",
        isSpotlight: true,
        quote: "A sublime visual marvel that transcends sci-fi tropes to deliver a deeply philosophical noir masterpiece.",
        author: "Aureon Editorial Team",
        category: "editorsChoice"
    },
    {
        id: "oppenheimer",
        title: "Oppenheimer",
        year: 2023,
        rating: 8.9,
        runtime: "180 min",
        genres: ["Drama", "Biography", "History"],
        director: "Christopher Nolan",
        cast: [
            { name: "Cillian Murphy", role: "J. Robert Oppenheimer" },
            { name: "Emily Blunt", role: "Kitty Oppenheimer" },
            { name: "Matt Damon", role: "Leslie Groves" },
            { name: "Robert Downey Jr.", role: "Lewis Strauss" }
        ],
        description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb, illustrating the heavy ethical consequences and the political fallout that rewrote human history.",
        poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
        backdrop: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1280&q=80&auto=format&fit=crop",
        trailerId: "uYPbbksJxIg",
        tagline: "The world forever changes.",
        category: "trending"
    },
    {
        id: "inception",
        title: "Inception",
        year: 2010,
        rating: 8.8,
        runtime: "148 min",
        genres: ["Sci-Fi", "Action", "Adventure"],
        director: "Christopher Nolan",
        cast: [
            { name: "Leonardo DiCaprio", role: "Cobb" },
            { name: "Joseph Gordon-Levitt", role: "Arthur" },
            { name: "Elliot Page", role: "Ariadne" },
            { name: "Tom Hardy", role: "Eames" }
        ],
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., leading to a layered journey into subconscious architectures.",
        poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1280&q=80&auto=format&fit=crop",
        trailerId: "YoHD9XEInc0",
        tagline: "Your mind is the scene of the crime.",
        category: "imdb"
    },
    {
        id: "parasite",
        title: "Parasite",
        year: 2019,
        rating: 8.6,
        runtime: "132 min",
        genres: ["Drama", "Thriller", "Comedy"],
        director: "Bong Joon Ho",
        cast: [
            { name: "Song Kang-ho", role: "Ki-taek" },
            { name: "Lee Sun-kyun", role: "Mr. Park" },
            { name: "Cho Yeo-jeong", role: "Mrs. Park" },
            { name: "Choi Woo-shik", role: "Ki-woo" }
        ],
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan, culminating in an unforgettable climax of suspense and social satire.",
        poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
        backdrop: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1280&q=80&auto=format&fit=crop",
        trailerId: "5xH0HfJHsaY",
        tagline: "Act like you own the place.",
        quote: "A flawless, genre-defying masterpiece that sharpens class struggle into a razor-thin thriller.",
        author: "Chief Cinephile Reviewer",
        category: "editorsChoice"
    },
    {
        id: "the-matrix",
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        runtime: "136 min",
        genres: ["Sci-Fi", "Action"],
        director: "Lana Wachowski, Lilly Wachowski",
        cast: [
            { name: "Keanu Reeves", role: "Neo" },
            { name: "Laurence Fishburne", role: "Morpheus" },
            { name: "Carrie-Anne Moss", role: "Trinity" },
            { name: "Hugo Weaving", role: "Agent Smith" }
        ],
        description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        backdrop: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=1280&q=80&auto=format&fit=crop",
        trailerId: "vKQi3bBA1y8",
        tagline: "Believe the unbelievable.",
        category: "scifi"
    },
    {
        id: "arrival",
        title: "Arrival",
        year: 2016,
        rating: 7.9,
        runtime: "116 min",
        genres: ["Sci-Fi", "Mystery", "Drama"],
        director: "Denis Villeneuve",
        cast: [
            { name: "Amy Adams", role: "Louise Banks" },
            { name: "Jeremy Renner", role: "Ian Donnelly" },
            { name: "Forest Whitaker", role: "Colonel Weber" }
        ],
        description: "A linguist works with the military to communicate with alien newcomers who have landed in twelve mysterious spacecrafts around the world, uncovering a gift that transcends our perception of time and memory.",
        poster: "https://upload.wikimedia.org/wikipedia/en/d/df/Arrival%2C_Movie_Poster.jpg",
        backdrop: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1280&q=80&auto=format&fit=crop",
        trailerId: "tFMo3wDMJxo",
        tagline: "Why are they here?",
        category: "scifi"
    },
    {
        id: "ex-machina",
        title: "Ex Machina",
        year: 2014,
        rating: 7.7,
        runtime: "108 min",
        genres: ["Sci-Fi", "Thriller", "Drama"],
        director: "Alex Garland",
        cast: [
            { name: "Alicia Vikander", role: "Ava" },
            { name: "Domhnall Gleeson", role: "Caleb" },
            { name: "Oscar Isaac", role: "Nathan" }
        ],
        description: "A programmer at an internet-search giant wins a competition to spend a week at the private mountain estate of the company's brilliant CEO, only to find he has been chosen to be the human component in a Turing Test with a beautiful humanoid robot.",
        poster: "https://upload.wikimedia.org/wikipedia/en/b/ba/Ex_Machina_%28film%29_poster.jpg",
        backdrop: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&q=80&auto=format&fit=crop",
        trailerId: "hGy44WSy-Ls",
        tagline: "To erase the line between man and machine is to obscure the line between men and gods.",
        category: "gems"
    },
    {
        id: "grand-budapest",
        title: "The Grand Budapest Hotel",
        year: 2014,
        rating: 8.1,
        runtime: "99 min",
        genres: ["Comedy", "Drama", "Adventure"],
        director: "Wes Anderson",
        cast: [
            { name: "Ralph Fiennes", role: "Monsieur Gustave H." },
            { name: "Tony Revolori", role: "Zero Moustafa" },
            { name: "Saoirse Ronan", role: "Agatha" },
            { name: "Adrien Brody", role: "Adrien Brody" }
        ],
        description: "A writer relates his adventures at a renowned European resort hotel between the first and second World Wars with Gustave H., a legendary concierge, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Grand_Budapest_Hotel_film_poster.jpg",
        backdrop: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1280&q=80&auto=format&fit=crop",
        trailerId: "1Fg5iWmQjwk",
        tagline: "A perfect visual symphony of color, geometry, and witty eccentricity.",
        category: "gems"
    },
    {
        id: "whiplash",
        title: "Whiplash",
        year: 2014,
        rating: 8.5,
        runtime: "106 min",
        genres: ["Drama", "Music"],
        director: "Damien Chazelle",
        cast: [
            { name: "Miles Teller", role: "Andrew Neiman" },
            { name: "J.K. Simmons", role: "Terence Fletcher" },
            { name: "Paul Reiser", role: "Jim Neiman" }
        ],
        description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
        poster: "https://upload.wikimedia.org/wikipedia/en/0/01/Whiplash_%282014_film%29_poster.jpg",
        backdrop: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1280&q=80&auto=format&fit=crop",
        trailerId: "7d_jQC6W0_o",
        tagline: "Not quite my tempo.",
        category: "imdb"
    },
    {
        id: "everything-everywhere",
        title: "Everything Everywhere All at Once",
        year: 2022,
        rating: 8.7,
        runtime: "139 min",
        genres: ["Sci-Fi", "Adventure", "Comedy", "Action"],
        director: "Daniel Kwan, Daniel Scheinert",
        cast: [
            { name: "Michelle Yeoh", role: "Evelyn Wang" },
            { name: "Ke Huy Quan", role: "Waymond Wang" },
            { name: "Stephanie Hsu", role: "Joy Wang" },
            { name: "Jamie Lee Curtis", role: "Deirdre Beaubeirdre" }
        ],
        description: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
        poster: "https://upload.wikimedia.org/wikipedia/en/b/bf/Everything_Everywhere_All_at_Once.jpg",
        backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&q=80&auto=format&fit=crop",
        trailerId: "wxN1T1uxQ2g",
        tagline: "The universe is so much bigger than you realize.",
        category: "trending"
    },
    {
        id: "naruto",
        title: "Naruto Shippuden",
        year: 2007,
        rating: 8.7,
        runtime: "24 min",
        genres: ["Anime", "Action", "Adventure", "Fantasy"],
        director: "Hayato Date",
        cast: [
            { name: "Junko Takeuchi", role: "Naruto Uzumaki" },
            { name: "Noriaki Sugiyama", role: "Sasuke Uchiha" },
            { name: "Chie Nakamura", role: "Sakura Haruno" }
        ],
        description: "Naruto Uzumaki, a young ninja with a sealed demon beast inside him, returns to the Hidden Leaf Village after years of training, embarking on an epic struggle to protect his friends and achieve his dream of becoming the Hokage.",
        poster: "https://cdn.myanimelist.net/images/anime/1565/111305.jpg",
        backdrop: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1280&auto=format&fit=crop",
        trailerId: "QczGoNoa5pc",
        tagline: "I will never go back on my word. That is my ninja way!",
        category: "anime"
    },
    {
        id: "one-piece",
        title: "One Piece",
        year: 1999,
        rating: 8.9,
        runtime: "24 min",
        genres: ["Anime", "Action", "Adventure", "Fantasy"],
        director: "Kounosuke Uda",
        cast: [
            { name: "Mayumi Tanaka", role: "Monkey D. Luffy" },
            { name: "Kazuya Nakai", role: "Roronoa Zoro" },
            { name: "Akemi Okamura", role: "Nami" }
        ],
        description: "Monkey D. Luffy and his vibrant Straw Hat Pirates navigate dangerous seas and rival factions across the Grand Line in search of the legendary One Piece, aiming to crown him the King of the Pirates.",
        poster: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
        backdrop: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1280&auto=format&fit=crop",
        trailerId: "S8_YwFLCh4Y",
        tagline: "If you don't take risks, you can't create a future!",
        category: "anime"
    },
    {
        id: "attack-on-titan",
        title: "Attack on Titan",
        year: 2013,
        rating: 9.1,
        runtime: "24 min",
        genres: ["Anime", "Action", "Drama", "Fantasy", "Mystery"],
        director: "Tetsurou Araki",
        cast: [
            { name: "Yuki Kaji", role: "Eren Yeager" },
            { name: "Yui Ishikawa", role: "Mikasa Ackerman" },
            { name: "Marina Inoue", role: "Armin Arlert" }
        ],
        description: "In a world surrounded by colossal walls guarding humanity from monstrous humanoid Titans, young Eren Yeager joins the elite Survey Corps to fight back, uncovering deep, cosmic mysteries about the Titans' true origin.",
        poster: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
        backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1280&auto=format&fit=crop",
        trailerId: "LHtdkWjKC4o",
        tagline: "To defy the walls is to discover humanity's true horizon.",
        category: "anime"
    },
    {
        id: "demon-slayer",
        title: "Demon Slayer: Kimetsu no Yaiba",
        year: 2019,
        rating: 8.7,
        runtime: "24 min",
        genres: ["Anime", "Action", "Fantasy"],
        director: "Haruo Sotozaki",
        cast: [
            { name: "Natsuki Hanae", role: "Tanjiro Kamado" },
            { name: "Akari Kito", role: "Nezuko Kamado" },
            { name: "Yoshitsugu Matsuoka", role: "Inosuke Hashibira" }
        ],
        description: "Tanjiro Kamado embarks on a dangerous path as a Demon Slayer to avenge his slaughtered family and find a cure for his beloved sister Nezuko, who has been cursed to transform into a demon.",
        poster: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
        backdrop: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1280&auto=format&fit=crop",
        trailerId: "VQGCKyvzI48",
        tagline: "Draw your blade, sever the darkness.",
        category: "anime"
    },
    {
        id: "death-note",
        title: "Death Note",
        year: 2006,
        rating: 9.0,
        runtime: "24 min",
        genres: ["Anime", "Mystery", "Thriller", "Fantasy"],
        director: "Tetsurou Araki",
        cast: [
            { name: "Mamoru Miyano", role: "Light Yagami" },
            { name: "Kappei Yamaguchi", role: "L Lawliet" },
            { name: "Aya Hirano", role: "Misa Amane" }
        ],
        description: "An exceptionally brilliant student, Light Yagami, discovers a supernatural notebook dropped by a Shinigami that allows him to execute anyone by writing their name. A tense psychological battle of wits ensues against the eccentric detective L.",
        poster: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
        backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1280&auto=format&fit=crop",
        trailerId: "NlJZ-YgAt-c",
        tagline: "I am justice!",
        category: "anime"
    },
    {
        id: "jujutsu-kaisen",
        title: "Jujutsu Kaisen",
        year: 2020,
        rating: 8.6,
        runtime: "24 min",
        genres: ["Anime", "Action", "Fantasy", "Mystery"],
        director: "Sunghoo Park",
        cast: [
            { name: "Junya Enoki", role: "Yuji Itadori" },
            { name: "Yuma Uchida", role: "Megumi Fushiguro" },
            { name: "Asami Seto", role: "Nobara Kugisaki" }
        ],
        description: "After swallowing a cursed talisman to protect his high school friends, athletic teenager Yuji Itadori is inducted into the secretive Tokyo Jujutsu High School under the legendary sorcerer Satoru Gojo to gather and purify cursed artifacts.",
        poster: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
        backdrop: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1280&auto=format&fit=crop",
        trailerId: "pkDFEaF871I",
        tagline: "Exorcise the curses, save humanity.",
        category: "anime"
    }
];

// Fallback image urls (neutral cinema-themed placeholders)
const FALLBACK_POSTER = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&q=80&auto=format&fit=crop";
const FALLBACK_BACKDROP = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1280&q=80&auto=format&fit=crop";

// Active State variables
let currentSpotlightIndex = 0;
let spotlightInterval = null;
let vaultUnlocked = false;

// Safe parsing of watchlist from localStorage
let userWatchlist = [];
try {
    const stored = localStorage.getItem('aureon_watchlist');
    if (stored) {
        userWatchlist = JSON.parse(stored);
        if (!Array.isArray(userWatchlist)) userWatchlist = [];
    }
} catch (e) {
    console.warn("Watchlist parsing failed, resetting to empty:", e);
    userWatchlist = [];
}

// Dial Lock variables
let isDialDragging = false;
let dialCurrentRotation = 0;
let dialStartAngle = 0;
const COMBO_PASS = [30, 70, 15];
let comboProgress = [];

/* ==========================================================================
   SAFE API RETRIEVAL / FALLBACK SYSTEM
   ========================================================================== */
async function fetchCinematicCatalog() {
    try {
        // Safe simulation of API request with fail-safe.
        // In a live environment, this would hit an API endpoint.
        const response = await new Promise((resolve) => setTimeout(() => resolve({ ok: true, data: MOVIES_DATABASE }), 100));
        if (!response.ok) throw new Error("API non-responsive");
        return response.data;
    } catch (error) {
        console.warn("AUREON API projection fetch failed, deploying local fallback:", error);
        return MOVIES_DATABASE;
    }
}

/* ==========================================================================
   APP INITIALIZATION (RACE-CONDITION RESILIENT)
   ========================================================================== */
function initializeAureonApp() {
    console.log("AUREON luxury cinematic platform initialization sequence initiated.");
    
    // Initialize components with high resilience
    const safeInit = (fnName, fn) => {
        try {
            fn();
        } catch (e) {
            console.error(`Error during AUREON [${fnName}] initialization:`, e);
        }
    };

    // 1. Preloader Timer & Cinematic Fadeout
    safeInit("initPreloader", initPreloader);

    // 2. Ambient Particles Canvas
    safeInit("initAmbientParticles", initAmbientParticles);

    // 3. Render panels and setup using local data immediately to prevent blocking
    // We render immediately to prevent any asynchronous delay from causing blank screens
    safeInit("renderTrendingSection", () => renderTrendingSection(MOVIES_DATABASE));
    safeInit("renderEditorsChoice", () => renderEditorsChoice(MOVIES_DATABASE));
    safeInit("renderSciFiUniverse", () => renderSciFiUniverse(MOVIES_DATABASE));
    safeInit("renderAnimeUniverse", () => renderAnimeUniverse(MOVIES_DATABASE));
    safeInit("renderIMDbScrollDeck", () => renderIMDbScrollDeck(MOVIES_DATABASE));
    safeInit("renderHiddenGems", () => renderHiddenGems(MOVIES_DATABASE));

    // 4. Event Listeners & Curation Engine
    safeInit("setupNavigations", setupNavigations);
    safeInit("setupSpotlightControls", setupSpotlightControls);
    safeInit("setupSearchEngine", () => setupSearchEngine(MOVIES_DATABASE));
    safeInit("setupAureonOracle", () => setupAureonOracle(MOVIES_DATABASE));
    safeInit("setupVaultDialLock", setupVaultDialLock);
    safeInit("setupModals", () => setupModals(MOVIES_DATABASE));

    // 5. Page Tracking
    safeInit("initScrollSpy", initScrollSpy);
    safeInit("updateVaultBadge", updateVaultBadge);

    // 6. Custom Cursor & Scroll Reveals
    safeInit("setupCustomCursor", setupCustomCursor);
    safeInit("setupScrollReveal", setupScrollReveal);
    safeInit("setupZeroGravityCardTilt", setupZeroGravityCardTilt);
    safeInit("setupMagneticButtons", setupMagneticButtons);

    // 6. Fetch API/data in background asynchronously without blocking UI initialization!
    fetchCinematicCatalog().then(catalog => {
        if (catalog && catalog !== MOVIES_DATABASE) {
            console.log("Catalog updated asynchronously from API source.");
            safeInit("renderTrendingSection", () => renderTrendingSection(catalog));
            safeInit("renderEditorsChoice", () => renderEditorsChoice(catalog));
            safeInit("renderSciFiUniverse", () => renderSciFiUniverse(catalog));
            safeInit("renderAnimeUniverse", () => renderAnimeUniverse(catalog));
            safeInit("renderIMDbScrollDeck", () => renderIMDbScrollDeck(catalog));
            safeInit("renderHiddenGems", () => renderHiddenGems(catalog));
            safeInit("setupSearchEngine", () => setupSearchEngine(catalog));
            safeInit("setupAureonOracle", () => setupAureonOracle(catalog));
        }
    }).catch(err => console.warn("Async catalog update ignored:", err));
}

// Safely execute initialization regardless of when script is loaded relative to DOM
if (document.readyState === "complete" || document.readyState === "interactive") {
    initializeAureonApp();
} else {
    document.addEventListener("DOMContentLoaded", initializeAureonApp);
}

/* ==========================================================================
   CINEMATIC PRELOADER
   ========================================================================== */
function initPreloader() {
    const timerEl = document.getElementById("countdown-timer");
    const preloaderEl = document.getElementById("preloader");
    const contentEl = document.getElementById("app-content");
    const flashEl = document.getElementById("transition-flash");

    if (!timerEl || !preloaderEl || !contentEl || !flashEl) {
        console.warn("Preloader elements not found, skipping preloader sequence.");
        if (preloaderEl) preloaderEl.classList.add("hidden");
        if (contentEl) contentEl.classList.remove("hidden");
        return;
    }

    let count = 3;
    const interval = setInterval(() => {
        count--;
        timerEl.innerText = `00:0${count}`;
        if (count <= 0) {
            clearInterval(interval);
            
            // Execute flash transition
            flashEl.classList.add("flash-active");
            
            // Fade out preloader
            preloaderEl.style.opacity = "0";
            preloaderEl.style.transform = "scale(1.05)";
            
            setTimeout(() => {
                preloaderEl.classList.add("hidden");
                contentEl.classList.remove("hidden");
                contentEl.style.animation = "fadeIn 1s forwards ease";
                // Start Hero slideshow loop
                startSpotlightSlideshow();
            }, 600);
        }
    }, 800); // Slightly speed up loading for a premium snap feel
}

/* ==========================================================================
   AMBIENT PARTICLE CANVAS SYSTEM
   ========================================================================== */
function initAmbientParticles() {
    const canvas = document.getElementById("ambient-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 80;

    let mouse = { x: null, y: null, radius: 140 };

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.reset();
            this.y = Math.random() * height; // Distribute vertically initially
        }

        reset() {
            this.x = Math.random() * width;
            this.y = height + 20;
            this.radius = Math.random() * 2.2 + 0.6;
            this.speedY = Math.random() * 0.7 + 0.2; // Float upwards (anti-gravity)
            this.speedX = Math.random() * 0.4 - 0.2;
            this.opacity = Math.random() * 0.5 + 0.15;
            this.color = `rgba(214, 175, 55, ${this.opacity})`; // Gold theme
            
            // Mouse repulsion dynamics
            this.vx = 0;
            this.vy = 0;
        }

        update(scrollOffset) {
            // Apply mouse repulsion
            if (mouse.x !== null && mouse.y !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.hypot(dx, dy);
                
                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius; // 0 to 1
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    
                    // Acceleration away from mouse
                    this.vx += forceDirectionX * force * 0.8;
                    this.vy += forceDirectionY * force * 0.8;
                }
            }

            // Drag/friction to decelerate push vector
            this.vx *= 0.92;
            this.vy *= 0.92;

            // Update coordinate (anti-gravity upwards drift)
            this.y -= this.speedY + this.vy;
            this.x += this.speedX + this.vx;

            // Simple parallax offset on scroll
            this.y -= scrollOffset * 0.08;

            // Reset when leaving top or sides
            if (this.y < -20 || this.x < -20 || this.x > width + 20) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 6;
            ctx.shadowColor = "rgba(255, 215, 0, 0.35)";
            ctx.fill();
        }
    }

    // Populate particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    let lastScrollY = window.scrollY;

    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        let currentScrollY = window.scrollY;
        let scrollOffset = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;

        // Draw connections first (nebula constellation web effect)
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dist = Math.hypot(
                    particles[a].x - particles[b].x,
                    particles[a].y - particles[b].y
                );
                
                const maxConnectDist = 110;
                if (dist < maxConnectDist) {
                    const alpha = (1 - dist / maxConnectDist) * 0.12;
                    ctx.strokeStyle = `rgba(214, 175, 55, ${alpha})`;
                    ctx.lineWidth = 0.55;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }

        particles.forEach((p) => {
            p.update(scrollOffset);
            p.draw();
        });

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

/* ==========================================================================
   ZERO-GRAVITY 3D CARD TILT INTERACTION (VANILLA JS)
   ========================================================================== */
function setupZeroGravityCardTilt() {
    const selectors = '.movie-card, .gem-card, .oracle-opt-card, .magazine-poster-wrapper';
    
    document.addEventListener("mousemove", (e) => {
        const card = e.target.closest(selectors);
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const cardWidth = rect.width;
        const cardHeight = rect.height;
        
        // Relative mouse coordinates from center of card (-0.5 to 0.5)
        const mouseX = (e.clientX - rect.left) / cardWidth - 0.5;
        const mouseY = (e.clientY - rect.top) / cardHeight - 0.5;
        
        // Tilt degrees (max 15 deg)
        const rotateY = mouseX * 22; // Left-right tilt
        const rotateX = -mouseY * 22; // Up-down tilt
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04) translateZ(25px)`;
        card.style.transition = 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)';
        
        // Pop-out elements inside cards
        const poster = card.querySelector('.movie-card-poster, .magazine-poster-img');
        if (poster) {
            poster.style.transform = `scale3d(1.06, 1.06, 1.06) translateZ(15px)`;
            poster.style.transition = 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)';
        }
        
        const panel = card.querySelector('.movie-card-glass-panel, .magazine-poster-overlay');
        if (panel) {
            panel.style.transform = `translateZ(30px)`;
            panel.style.transition = 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)';
        }
    });

    document.addEventListener("mouseout", (e) => {
        const card = e.target.closest(selectors);
        if (!card) return;
        
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)';
        card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        
        const poster = card.querySelector('.movie-card-poster, .magazine-poster-img');
        if (poster) {
            poster.style.transform = 'scale3d(1, 1, 1) translateZ(0px)';
            poster.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        }
        
        const panel = card.querySelector('.movie-card-glass-panel, .magazine-poster-overlay');
        if (panel) {
            panel.style.transform = 'translateZ(0px)';
            panel.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        }
    });
}

/* ==========================================================================
   MAGNETIC CTAS PROXIMITY PULL (ANTI-GRAVITY WELLS)
   ========================================================================== */
function setupMagneticButtons() {
    const selectors = '.btn-primary, .btn-secondary, .vault-dial-inner, .logo-group, .vault-indicator-btn, .modal-close';
    
    document.addEventListener("mousemove", (e) => {
        const buttons = document.querySelectorAll(selectors);
        
        buttons.forEach(btn => {
            const rect = btn.getBoundingClientRect();
            const btnX = rect.left + rect.width / 2;
            const btnY = rect.top + rect.height / 2;
            
            const dist = Math.hypot(e.clientX - btnX, e.clientY - btnY);
            const magneticRadius = 80;
            
            if (dist < magneticRadius) {
                const force = (magneticRadius - dist) / magneticRadius; // 0 to 1
                const pullX = (e.clientX - btnX) * force * 0.45;
                const pullY = (e.clientY - btnY) * force * 0.45;
                
                btn.style.transform = `translate3d(${pullX}px, ${pullY}px, 0px) scale(1.03)`;
                btn.style.transition = 'transform 0.1s ease-out';
            } else {
                if (btn.style.transform && !btn.style.transform.includes('translate3d(0px, 0px, 0px)')) {
                    btn.style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
                    btn.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                }
            }
        });
    });
}

/* ==========================================================================
   NAVIGATION & SCROLL-SPY SYSTEMS
   ========================================================================== */
function setupNavigations() {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        // Scroll Navbar transparency shift
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("navbar-scrolled");
            } else {
                navbar.classList.remove("navbar-scrolled");
            }
        });
    }

    // Smooth scroll event listeners for navbar anchors
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                const targetId = href.substring(1);
                scrollToSection(targetId);
            }
        });
    });

    // Logo Click scrolls to top
    const logoBtn = document.getElementById("logo-btn");
    if (logoBtn) {
        logoBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Header Vault Action trigger
    const vaultNavTrigger = document.getElementById("vault-nav-trigger");
    if (vaultNavTrigger) {
        vaultNavTrigger.addEventListener("click", (e) => {
            e.preventDefault();
            scrollToSection("vault");
        });
    }
}

function scrollToSection(targetId) {
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    // Account for double height header wrapper offset on mobile/tablet (180px) vs desktop (100px)
    const offsetHeader = window.innerWidth <= 992 ? 180 : 100;
    const offsetPosition = targetEl.offsetTop - offsetHeader;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

// Scroll-Spy Highlighting Engine
function initScrollSpy() {
    const navLinks = document.querySelectorAll(".nav-link");
    
    // Ordered set of sections that represent anchors in the navbar
    const scrollSections = [
        { id: "home", element: document.getElementById("home") },
        { id: "editors-choice", element: document.getElementById("editors-choice") },
        { id: "discover", element: document.getElementById("discover") },
        { id: "scifi-universe", element: document.getElementById("scifi-universe") },
        { id: "anime-universe", element: document.getElementById("anime-universe") },
        { id: "hidden-gems", element: document.getElementById("hidden-gems") },
        { id: "vault", element: document.getElementById("vault") }
    ].filter(item => item.element !== null);

    window.addEventListener("scroll", () => {
        let activeSectionId = "home";
        // Offsets trigger calculations based on screen size (double navbar heights)
        const triggerThreshold = window.scrollY + (window.innerWidth <= 992 ? 200 : 125);

        scrollSections.forEach(sec => {
            if (triggerThreshold >= sec.element.offsetTop) {
                activeSectionId = sec.id;
            }
        });

        // Update active classes
        navLinks.forEach(link => {
            const href = link.getAttribute("href");
            if (href === `#${activeSectionId}`) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
}

/* ==========================================================================
   HERO SPOTLIGHT CAROUSEL
   ========================================================================== */
const SPOTLIGHT_MOVIES = MOVIES_DATABASE.filter(m => m.isSpotlight);

function setupSpotlightControls() {
    const dots = document.querySelectorAll(".selector-dot");
    
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const idx = parseInt(dot.getAttribute("data-index"));
            if (!isNaN(idx)) {
                changeSpotlight(idx);
                startSpotlightSlideshow(); // Reset loop timer
            }
        });
    });

    // Watch and Detail clicks
    const heroWatchBtn = document.getElementById("hero-watch-btn");
    if (heroWatchBtn) {
        heroWatchBtn.addEventListener("click", () => {
            const activeMovie = SPOTLIGHT_MOVIES[currentSpotlightIndex];
            if (activeMovie) {
                playTrailer(activeMovie.trailerId);
            }
        });
    }

    const heroDetailsBtn = document.getElementById("hero-details-btn");
    if (heroDetailsBtn) {
        heroDetailsBtn.addEventListener("click", () => {
            const activeMovie = SPOTLIGHT_MOVIES[currentSpotlightIndex];
            if (activeMovie) {
                openDetailsModal(activeMovie.id);
            }
        });
    }
}

function startSpotlightSlideshow() {
    clearInterval(spotlightInterval);
    spotlightInterval = setInterval(() => {
        let nextIndex = (currentSpotlightIndex + 1) % SPOTLIGHT_MOVIES.length;
        changeSpotlight(nextIndex);
    }, 10000);
}

function changeSpotlight(index) {
    if (index === currentSpotlightIndex) return;

    const movie = SPOTLIGHT_MOVIES[index];
    if (!movie) return;
    currentSpotlightIndex = index;

    const bgLayer = document.getElementById("hero-bg-layer");
    const titleEl = document.getElementById("hero-title");
    const categoryEl = document.getElementById("hero-tag");
    const ratingEl = document.getElementById("hero-rating");
    const yearEl = document.getElementById("hero-year");
    const runtimeEl = document.getElementById("hero-runtime");
    const genreEl = document.getElementById("hero-genre");
    const descEl = document.getElementById("hero-description");
    const dots = document.querySelectorAll(".selector-dot");
    const flashEl = document.getElementById("transition-flash");

    // Flash lens-flare out-of-focus camera motion
    if (flashEl) flashEl.classList.add("flash-active");
    if (bgLayer) bgLayer.style.opacity = "0.2";

    setTimeout(() => {
        // Swap visual background
        if (bgLayer) {
            bgLayer.style.backgroundImage = `url('${movie.backdrop || FALLBACK_BACKDROP}')`;
            bgLayer.style.opacity = "1";
        }
        
        // Swap text meta
        if (titleEl) titleEl.innerText = movie.title || "Curated Discovery";
        if (categoryEl) {
            const primaryGenre = Array.isArray(movie.genres) && movie.genres[0] ? movie.genres[0].toUpperCase() : "CINEMATIC";
            categoryEl.innerText = `${primaryGenre} PROJECT`;
        }
        if (ratingEl) ratingEl.innerHTML = `<i class="fa-solid fa-star text-gold"></i> ${movie.rating || 'N/A'}`;
        if (yearEl) yearEl.innerText = movie.year || "N/A";
        if (runtimeEl) runtimeEl.innerText = movie.runtime || "N/A";
        if (genreEl) genreEl.innerText = Array.isArray(movie.genres) ? movie.genres.join(" / ") : "";
        if (descEl) descEl.innerText = movie.description || "";

        if (titleEl) {
            titleEl.style.animation = 'none';
            titleEl.offsetHeight; // force reflow
            titleEl.style.animation = 'fadeInUp 0.8s 0.1s forwards cubic-bezier(0.16, 1, 0.3, 1)';
        }

        setTimeout(() => {
            if (flashEl) flashEl.classList.remove("flash-active");
        }, 400);

    }, 300);

    // Sync spotlight dots
    dots.forEach(dot => {
        const dotIdx = parseInt(dot.getAttribute("data-index"));
        if (dotIdx === index) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

/* ==========================================================================
   GRID RENDER FUNCTIONS
   ========================================================================== */
function buildMovieCardHTML(movie) {
    if (!movie) return "";
    const id = movie.id || "";
    const poster = movie.poster || FALLBACK_POSTER;
    const backdrop = movie.backdrop || FALLBACK_BACKDROP;
    const title = movie.title || "Curated Discovery";
    const rating = movie.rating !== undefined ? movie.rating : "N/A";
    const year = movie.year || "N/A";
    const runtime = movie.runtime || "N/A";
    const genres = Array.isArray(movie.genres) ? movie.genres.join(" • ") : "";

    return `
        <div class="movie-card" onclick="openDetailsModal('${id}')">
            <img src="${poster}" alt="${title}" class="movie-card-poster" loading="lazy"
                 onerror="this.onerror=null; this.src='${backdrop}'">
            <div class="movie-card-glass-panel">
                <h3 class="movie-card-title">${title}</h3>
                <div class="movie-card-meta">
                    <span><i class="fa-solid fa-star text-gold"></i> ${rating}</span>
                    <span>${year}</span>
                    <span>${runtime}</span>
                </div>
                <div class="movie-card-genres">${genres}</div>
            </div>
        </div>
    `;
}

// 1. Trending Asymmetrical Grid
function renderTrendingSection(catalog) {
    const grid = document.getElementById("trending-grid");
    if (!grid) return;

    const data = catalog || MOVIES_DATABASE;
    const trendingList = data.filter(m => m.category === "trending");
    
    if (trendingList.length < 3) return;

    const first = trendingList[0];
    const backdrop = first.backdrop || FALLBACK_BACKDROP;
    const poster = first.poster || FALLBACK_POSTER;

    let html = `
        <div class="movie-card trending-card-big" onclick="openDetailsModal('${first.id}')">
            <img src="${backdrop}" alt="${first.title}" class="movie-card-poster" loading="lazy" onerror="this.onerror=null; this.src='${poster}'">
            <div class="movie-card-glass-panel">
                <span class="spotlight-badge" style="width: fit-content; margin-bottom: 12px;">FEATURED SHOWCASE</span>
                <h3 class="movie-card-title">${first.title}</h3>
                <div class="movie-card-meta">
                    <span><i class="fa-solid fa-star text-gold"></i> ${first.rating}</span>
                    <span>${first.year}</span>
                    <span>${first.runtime}</span>
                </div>
                <div class="movie-card-genres">${first.genres.join(" • ")}</div>
                <p class="featured-synopsis">${first.description}</p>
            </div>
        </div>
    `;

    for (let i = 1; i < Math.min(3, trendingList.length); i++) {
        html += buildMovieCardHTML(trendingList[i]);
    }

    grid.innerHTML = html;
}

// 2. Editor's Choice (Magazine style layout)
function renderEditorsChoice(catalog) {
    const container = document.getElementById("editors-magazine");
    if (!container) return;

    const data = catalog || MOVIES_DATABASE;
    const editorsList = data.filter(m => m.category === "editorsChoice");

    let html = "";
    editorsList.forEach((movie, index) => {
        const isAlt = index % 2 !== 0 ? "alternate" : "";
        const backdrop = movie.backdrop || FALLBACK_BACKDROP;
        const quote = movie.quote || "A visionary visual marvel that challenges traditional paradigms and provides deep cinematic enrichment.";
        const author = movie.author || "Aureon curation board";

        html += `
            <div class="magazine-block ${isAlt}">
                <div class="magazine-poster-wrapper" onclick="openDetailsModal('${movie.id}')">
                    <img src="${backdrop}" alt="${movie.title}" class="magazine-poster-img" loading="lazy" onerror="this.onerror=null; this.src='${movie.poster || FALLBACK_POSTER}'">
                    <div class="magazine-poster-overlay">
                        <span class="spotlight-badge"><i class="fa-solid fa-play"></i> View Project</span>
                    </div>
                </div>
                <div class="magazine-info">
                    <div class="editors-tag-row">
                        <span class="editors-review-badge">CURATED REVIEW</span>
                        <span class="meta-rating"><i class="fa-solid fa-star text-gold"></i> ${movie.rating}</span>
                    </div>
                    <h3 class="magazine-title">${movie.title}</h3>
                    <div class="magazine-meta">
                        <span>${movie.year}</span>
                        <span>•</span>
                        <span>${movie.runtime}</span>
                        <span>•</span>
                        <span>${movie.genres.join(" / ")}</span>
                    </div>
                    <blockquote class="magazine-review-text">
                        "${quote}"
                        <span class="magazine-quote-author">— ${author}</span>
                    </blockquote>
                    <div class="magazine-actions">
                        <button class="btn btn-primary" onclick="playTrailer('${movie.trailerId}')"><i class="fa-solid fa-circle-play"></i> Watch trailer</button>
                        <button class="btn btn-secondary" onclick="openDetailsModal('${movie.id}')"><i class="fa-solid fa-circle-info"></i> Project details</button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// 3. Sci-Fi Universe Grid
function renderSciFiUniverse(catalog) {
    const grid = document.getElementById("scifi-grid");
    if (!grid) return;

    const data = catalog || MOVIES_DATABASE;
    const scifiList = data.filter(m => Array.isArray(m.genres) && m.genres.includes("Sci-Fi") && m.category !== "trending");

    let html = "";
    scifiList.slice(0, 4).forEach(movie => {
        html += buildMovieCardHTML(movie);
    });

    grid.innerHTML = html;
}

// Anime Universe Grid (Offset/Staggered Premium Grid)
function renderAnimeUniverse(catalog) {
    const grid = document.getElementById("anime-grid");
    if (!grid) return;

    const data = catalog || MOVIES_DATABASE;
    const animeList = data.filter(m => m.category === "anime");

    let html = "";
    animeList.forEach(movie => {
        html += buildMovieCardHTML(movie);
    });

    grid.innerHTML = html;
}

// 4. IMDb Scroll Deck
function renderIMDbScrollDeck(catalog) {
    const deck = document.getElementById("imdb-deck");
    if (!deck) return;

    const data = catalog || MOVIES_DATABASE;
    const imdbList = data.filter(m => m.category === "imdb" || m.rating >= 8.5);

    let html = "";
    imdbList.forEach(movie => {
        html += buildMovieCardHTML(movie);
    });

    deck.innerHTML = html;

    const prevBtn = document.getElementById("scroll-prev-imdb");
    const nextBtn = document.getElementById("scroll-next-imdb");

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            deck.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            deck.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
}

// 5. Hidden Gems Flashlight Reveal Cards
function renderHiddenGems(catalog) {
    const grid = document.getElementById("gems-grid");
    if (!grid) return;

    const data = catalog || MOVIES_DATABASE;
    const gemsList = data.filter(m => m.category === "gems" || (Array.isArray(m.genres) && m.genres.includes("Comedy")));

    let html = "";
    gemsList.forEach(movie => {
        const poster = movie.poster || FALLBACK_POSTER;
        const backdrop = movie.backdrop || FALLBACK_BACKDROP;
        html += `
            <div class="gem-card" onclick="openDetailsModal('${movie.id}')">
                <div class="gem-card-overlay"></div>
                <div class="gem-content-inner">
                    <img src="${poster}" alt="${movie.title}" class="movie-card-poster" loading="lazy"
                         onerror="this.onerror=null; this.src='${backdrop}'">
                    <div class="gem-hidden-info">
                        <span class="spotlight-badge" style="font-size: 0.65rem;"><i class="fa-solid fa-circle-nodes"></i> HIDDEN DISCOVERY</span>
                        <h3 class="movie-card-title" style="margin-top: 10px; font-size: 1.2rem;">${movie.title}</h3>
                        <div class="movie-card-meta">
                            <span><i class="fa-solid fa-star text-gold"></i> ${movie.rating}</span>
                            <span>${movie.year}</span>
                        </div>
                        <div class="movie-card-genres">${movie.genres.join(" • ")}</div>
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;

    // Attach Flashlight mouse events with safeguard
    setTimeout(() => {
        const gemCards = document.querySelectorAll(".gem-card");
        gemCards.forEach(card => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
        });
    }, 100);
}

/* ==========================================================================
   PREMIUM SEARCH ENGINE & OVERLAY (REAL TIME DISCOVERY & FILTERS)
   ========================================================================== */
function setupSearchEngine(catalog) {
    const navSearchInput = document.getElementById("search-input");
    const navSearchContainer = document.querySelector(".search-container");
    
    const searchOverlay = document.getElementById("search-overlay");
    const overlayInput = document.getElementById("overlay-search-input");
    const overlayClear = document.getElementById("overlay-search-clear");
    const closeOverlayBtn = document.getElementById("search-overlay-close-btn");
    const backdropOverlayBtn = document.getElementById("search-overlay-backdrop-btn");
    const resetFiltersBtn = document.getElementById("reset-all-filters-btn");
    
    const suggestionsBox = document.getElementById("search-suggestions-box");
    const suggestionsGrid = document.getElementById("search-suggestions-list");
    const resultsSection = document.getElementById("search-results-section");
    const resultsCountLabel = document.getElementById("results-count-label");
    const resultsGrid = document.getElementById("overlay-results-grid");
    
    if (!searchOverlay || !overlayInput) return;

    const data = catalog || MOVIES_DATABASE;

    // 1. Initialise Suggestions
    renderSearchSuggestions(data);

    // 2. Open Search Overlay
    const openSearchOverlay = (initialQuery = "") => {
        searchOverlay.classList.add("active");
        document.body.classList.add("search-overlay-open");
        
        if (initialQuery) {
            overlayInput.value = initialQuery;
            overlayClear.style.display = "flex";
        } else {
            overlayInput.value = "";
            overlayClear.style.display = "none";
        }
        
        // Sync nav input
        if (navSearchInput) navSearchInput.value = initialQuery;
        
        setTimeout(() => {
            overlayInput.focus();
        }, 100);
        
        runLiveSearch();
    };

    // 3. Close Search Overlay
    const closeSearchOverlay = () => {
        searchOverlay.classList.remove("active");
        document.body.classList.remove("search-overlay-open");
        
        // Reset nav input
        if (navSearchInput) navSearchInput.value = "";
    };

    // 4. Hook up Navbar listeners to trigger Overlay
    if (navSearchInput) {
        navSearchInput.addEventListener("focus", () => {
            openSearchOverlay(navSearchInput.value);
        });
        navSearchInput.addEventListener("input", () => {
            openSearchOverlay(navSearchInput.value);
        });
    }

    if (navSearchContainer) {
        const searchIcon = navSearchContainer.querySelector(".search-icon");
        if (searchIcon) {
            searchIcon.addEventListener("click", (e) => {
                e.stopPropagation();
                openSearchOverlay(navSearchInput ? navSearchInput.value : "");
            });
        }
    }

    // 5. Overlay Control listeners
    if (closeOverlayBtn) {
        closeOverlayBtn.addEventListener("click", closeSearchOverlay);
    }
    if (backdropOverlayBtn) {
        backdropOverlayBtn.addEventListener("click", closeSearchOverlay);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && searchOverlay.classList.contains("active")) {
            closeSearchOverlay();
        }
    });

    // 6. Typing in overlay input
    overlayInput.addEventListener("input", () => {
        if (overlayInput.value.length > 0) {
            overlayClear.style.display = "flex";
        } else {
            overlayClear.style.display = "none";
        }
        runLiveSearch();
    });

    if (overlayClear) {
        overlayClear.addEventListener("click", () => {
            overlayInput.value = "";
            overlayClear.style.display = "none";
            runLiveSearch();
            overlayInput.focus();
        });
    }

    // 7. Filter Pill Click handling
    const filterGroups = ["filter-genres", "filter-ratings", "filter-years"];
    filterGroups.forEach(groupId => {
        const container = document.getElementById(groupId);
        if (container) {
            container.addEventListener("click", (e) => {
                const btn = e.target.closest(".filter-pill");
                if (!btn) return;
                
                // Remove active from sibling pills
                const pills = container.querySelectorAll(".filter-pill");
                pills.forEach(p => p.classList.remove("active"));
                
                // Add active to clicked pill
                btn.classList.add("active");
                
                // Run search
                runLiveSearch();
            });
        }
    });

    // 8. Reset Filters
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener("click", () => {
            overlayInput.value = "";
            overlayClear.style.display = "none";
            
            // Set all active pills back to default "all"
            filterGroups.forEach(groupId => {
                const container = document.getElementById(groupId);
                if (container) {
                    const pills = container.querySelectorAll(".filter-pill");
                    pills.forEach(p => {
                        if (p.getAttribute("data-genre") === "all" || 
                            p.getAttribute("data-rating") === "all" || 
                            p.getAttribute("data-year") === "all") {
                            p.classList.add("active");
                        } else {
                            p.classList.remove("active");
                        }
                    });
                }
            });
            
            runLiveSearch();
            overlayInput.focus();
        });
    }

    // 9. Main Discovery/Live search filtering function
    function runLiveSearch() {
        const query = overlayInput.value.toLowerCase().trim();
        
        // Find active filter values
        let genre = "all";
        let rating = "all";
        let year = "all";
        
        const activeGenreBtn = document.querySelector("#filter-genres .filter-pill.active");
        if (activeGenreBtn) genre = activeGenreBtn.getAttribute("data-genre");
        
        const activeRatingBtn = document.querySelector("#filter-ratings .filter-pill.active");
        if (activeRatingBtn) rating = activeRatingBtn.getAttribute("data-rating");
        
        const activeYearBtn = document.querySelector("#filter-years .filter-pill.active");
        if (activeYearBtn) year = activeYearBtn.getAttribute("data-year");
        
        // Check if no filter/query is active
        const noFiltersActive = (query.length === 0 && genre === "all" && rating === "all" && year === "all");
        
        if (noFiltersActive) {
            suggestionsBox.classList.remove("hidden");
            resultsSection.classList.add("hidden");
            return;
        }
        
        // Filter catalog
        const matches = data.filter(movie => {
            // Text Query match
            let textMatch = true;
            if (query) {
                const titleM = movie.title && movie.title.toLowerCase().includes(query);
                const directorM = movie.director && movie.director.toLowerCase().includes(query);
                const genreM = Array.isArray(movie.genres) && movie.genres.some(g => g.toLowerCase().includes(query));
                const castM = Array.isArray(movie.cast) && movie.cast.some(c => c.name && c.name.toLowerCase().includes(query));
                textMatch = titleM || directorM || genreM || castM;
            }
            
            // Genre filter match
            let genreMatch = true;
            if (genre !== "all") {
                genreMatch = Array.isArray(movie.genres) && movie.genres.includes(genre);
            }
            
            // Rating filter match
            let ratingMatch = true;
            if (rating !== "all") {
                ratingMatch = movie.rating !== undefined && movie.rating >= parseFloat(rating);
            }
            
            // Year filter match
            let yearMatch = true;
            if (year !== "all") {
                if (year === "2020") {
                    yearMatch = movie.year >= 2020;
                } else if (year === "2010") {
                    yearMatch = movie.year >= 2010 && movie.year < 2020;
                } else if (year === "2000") {
                    yearMatch = movie.year >= 2000 && movie.year < 2010;
                } else if (year === "classic") {
                    yearMatch = movie.year < 2000;
                }
            }
            
            return textMatch && genreMatch && ratingMatch && yearMatch;
        });
        
        // Render matches
        suggestionsBox.classList.add("hidden");
        resultsSection.classList.remove("hidden");
        
        resultsCountLabel.innerText = `${matches.length} MATCHING PROJECTIONS`;
        
        if (matches.length === 0) {
            resultsGrid.innerHTML = `
                <div style="grid-column: 1/-1; padding: 60px 20px; text-align: center; color: var(--text-muted); backdrop-filter: blur(10px); border: 1px dashed rgba(255,255,255,0.05); border-radius: 12px; font-family: var(--font-outfit);">
                    <i class="fa-solid fa-compact-disc" style="font-size: 2.2rem; color: var(--gold-primary); margin-bottom: 15px; animation: rotateHalo 8s linear infinite; display: inline-block;"></i>
                    <h3 style="color:#ffffff; font-size: 1.15rem; margin-bottom: 6px; font-family: var(--font-sora); font-weight: 600;">NO CORRELATIONS FOUND</h3>
                    <p style="font-size:0.85rem;">Adjust search queries or reset filters to project cinematic structures.</p>
                </div>
            `;
        } else {
            let html = "";
            matches.forEach(movie => {
                html += buildMovieCardHTML(movie);
            });
            resultsGrid.innerHTML = html;
        }
    }
}

function renderSearchSuggestions(catalog) {
    const list = document.getElementById("search-suggestions-list");
    if (!list) return;
    
    // Choose 4 premium, highly diverse films
    const suggestionIds = ["dune-two", "interstellar", "attack-on-titan", "oppenheimer"];
    const sugMovies = catalog.filter(m => suggestionIds.includes(m.id));
    
    let html = "";
    sugMovies.slice(0, 4).forEach(movie => {
        html += buildMovieCardHTML(movie);
    });
    list.innerHTML = html;
}

/* ==========================================================================
   AUREON ORACLE AI CURATION ENGINE
   ========================================================================== */
function setupAureonOracle(catalog) {
    const moodCards = document.querySelectorAll("#quiz-step-1 .oracle-opt-card");
    const eraCards = document.querySelectorAll("#quiz-step-2 .oracle-opt-card");
    const backBtn = document.querySelector(".back-btn");
    const retryBtn = document.getElementById("result-retry-btn");
    
    if (!moodCards.length || !eraCards.length) return;

    const data = catalog || MOVIES_DATABASE;
    let selectedMood = "";
    let selectedEra = "";

    moodCards.forEach(card => {
        card.addEventListener("click", () => {
            selectedMood = card.getAttribute("data-mood");
            moodCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");

            setTimeout(() => {
                const step1 = document.getElementById("quiz-step-1");
                const step2 = document.getElementById("quiz-step-2");
                if (step1) step1.classList.remove("active");
                if (step2) step2.classList.add("active");
            }, 300);
        });
    });

    eraCards.forEach(card => {
        card.addEventListener("click", () => {
            selectedEra = card.getAttribute("data-era");
            eraCards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");

            const step2 = document.getElementById("quiz-step-2");
            const loading = document.getElementById("quiz-loading");
            if (step2) step2.classList.remove("active");
            if (loading) loading.classList.add("active");

            setTimeout(() => {
                curateOraclePick(selectedMood, selectedEra, data);
            }, 1800);
        });
    });

    if (backBtn) {
        backBtn.addEventListener("click", () => {
            const step1 = document.getElementById("quiz-step-1");
            const step2 = document.getElementById("quiz-step-2");
            if (step2) step2.classList.remove("active");
            if (step1) step1.classList.add("active");
        });
    }

    if (retryBtn) {
        retryBtn.addEventListener("click", () => {
            selectedMood = "";
            selectedEra = "";
            moodCards.forEach(c => c.classList.remove("selected"));
            eraCards.forEach(c => c.classList.remove("selected"));
            
            const result = document.getElementById("quiz-result");
            const step1 = document.getElementById("quiz-step-1");
            if (result) result.classList.remove("active");
            if (step1) step1.classList.add("active");
        });
    }
}

function curateOraclePick(mood, era, catalog) {
    const data = catalog || MOVIES_DATABASE;
    let matches = [];

    if (mood === "cosmic") {
        matches = data.filter(m => Array.isArray(m.genres) && m.genres.includes("Sci-Fi"));
    } else if (mood === "suspense") {
        matches = data.filter(m => Array.isArray(m.genres) && (m.genres.includes("Thriller") || m.genres.includes("Mystery")));
    } else if (mood === "masterpiece") {
        matches = data.filter(m => ["dune-two", "oppenheimer", "bladerunner-2049", "parasite"].includes(m.id));
    } else { // gems
        matches = data.filter(m => m.category === "gems" || (Array.isArray(m.genres) && m.genres.includes("Comedy")));
    }

    // Fallback if no matching genres
    if (matches.length === 0) matches = data;

    let eraFiltered = [];
    if (era === "golden") {
        eraFiltered = matches.filter(m => m.year <= 2010);
    } else if (era === "contemporary") {
        eraFiltered = matches.filter(m => m.year > 2010 && m.year <= 2020);
    } else { // futuristic (2021+)
        eraFiltered = matches.filter(m => m.year > 2020);
    }

    let finalSelection = eraFiltered.length > 0 ? eraFiltered : matches;
    let movie = finalSelection[Math.floor(Math.random() * finalSelection.length)] || data[0];

    const resultImg = document.getElementById("result-img");
    const resultTitle = document.getElementById("result-title");
    const resultRating = document.getElementById("result-rating");
    const resultYear = document.getElementById("result-year");
    const resultRuntime = document.getElementById("result-runtime");
    const resultDesc = document.getElementById("result-desc");
    const resultWatchBtn = document.getElementById("result-watch-btn");
    const resultDetailsBtn = document.getElementById("result-details-btn");

    if (resultImg) resultImg.src = movie.poster || FALLBACK_POSTER;
    if (resultTitle) resultTitle.innerText = movie.title || "Aureon Projection";
    if (resultRating) resultRating.innerHTML = `<i class="fa-solid fa-star"></i> ${movie.rating || 'N/A'}`;
    if (resultYear) resultYear.innerText = movie.year || "N/A";
    if (resultRuntime) resultRuntime.innerText = movie.runtime || "N/A";
    if (resultDesc) resultDesc.innerText = movie.description || "";

    if (resultWatchBtn) {
        resultWatchBtn.onclick = () => playTrailer(movie.trailerId);
    }
    if (resultDetailsBtn) {
        resultDetailsBtn.onclick = () => openDetailsModal(movie.id);
    }

    const loading = document.getElementById("quiz-loading");
    const result = document.getElementById("quiz-result");
    if (loading) loading.classList.remove("active");
    if (result) result.classList.add("active");
}

/* ==========================================================================
   MY PRIVATE VAULT (DIAL INTERACTION)
   ========================================================================== */
function setupVaultDialLock() {
    const dialWheel = document.getElementById("vault-dial-wheel");
    const dialInner = document.querySelector(".vault-dial-inner");
    const ticksContainer = document.querySelector(".dial-ticks");

    if (!dialWheel || !dialInner || !ticksContainer) return;

    const totalTicks = 12;
    for (let i = 0; i < totalTicks; i++) {
        const tickVal = Math.round((i / totalTicks) * 100);
        const angle = (i / totalTicks) * (Math.PI * 2);
        
        const radius = 120;
        const x = 100 + radius * Math.cos(angle - Math.PI/2);
        const y = 100 + radius * Math.sin(angle - Math.PI/2);

        const el = document.createElement("span");
        el.className = "dial-tick-number";
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.transform = "translate(-50%, -50%)"; // Center ticks correctly
        el.innerText = tickVal;
        
        el.addEventListener("click", () => {
            const rotAngle = (i / totalTicks) * 360;
            rotateDialTo(rotAngle);
            evaluateDialNumber(tickVal);
        });

        ticksContainer.appendChild(el);
    }

    const getTouchOrMouseCoors = (e) => {
        if (e.touches && e.touches[0]) {
            return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
        return { x: e.clientX, y: e.clientY };
    };

    const handleDialStart = (e) => {
        isDialDragging = true;
        const rect = dialWheel.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const coors = getTouchOrMouseCoors(e);
        dialStartAngle = Math.atan2(coors.y - centerY, coors.x - centerX) * (180 / Math.PI) - dialCurrentRotation;
        document.body.style.userSelect = "none";
    };

    const handleDialMove = (e) => {
        if (!isDialDragging) return;
        const rect = dialWheel.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const coors = getTouchOrMouseCoors(e);
        const currentMouseAngle = Math.atan2(coors.y - centerY, coors.x - centerX) * (180 / Math.PI);
        let rotation = currentMouseAngle - dialStartAngle;
        
        rotation = (rotation % 360 + 360) % 360;
        
        rotateDialTo(rotation);
        
        const dialVal = Math.round((rotation / 360) * 100);
        evaluateDialNumber(dialVal);
    };

    const handleDialEnd = () => {
        isDialDragging = false;
        document.body.style.userSelect = "auto";
    };

    // Mouse Listeners
    dialInner.addEventListener("mousedown", handleDialStart);
    document.addEventListener("mousemove", handleDialMove);
    document.addEventListener("mouseup", handleDialEnd);

    // Touch Listeners
    dialInner.addEventListener("touchstart", handleDialStart, { passive: true });
    document.addEventListener("touchmove", handleDialMove, { passive: true });
    document.addEventListener("touchend", handleDialEnd);

    // Auto Unlock / Quick Bypass
    const autoUnlockBtn = document.getElementById("auto-unlock-btn");
    if (autoUnlockBtn) {
        autoUnlockBtn.addEventListener("click", simulateAutoUnlock);
    }

    // Seal Watchlist
    const lockVaultBtn = document.getElementById("lock-vault-btn");
    if (lockVaultBtn) {
        lockVaultBtn.addEventListener("click", lockVaultScreen);
    }

    const vaultExploreBtn = document.getElementById("vault-explore-btn");
    if (vaultExploreBtn) {
        vaultExploreBtn.addEventListener("click", () => {
            scrollToSection("home");
        });
    }
}

function rotateDialTo(angle) {
    dialCurrentRotation = angle;
    const dialWheel = document.getElementById("vault-dial-wheel");
    if (dialWheel) {
        dialWheel.style.transform = `rotate(${angle}deg)`;
    }
}

function evaluateDialNumber(val) {
    const num1 = document.getElementById("combo-num-1");
    const num2 = document.getElementById("combo-num-2");
    const num3 = document.getElementById("combo-num-3");

    if (!num1 || !num2 || !num3) return;

    const target1 = COMBO_PASS[0];
    const target2 = COMBO_PASS[1];
    const target3 = COMBO_PASS[2];

    if (comboProgress.length === 0) {
        if (Math.abs(val - target1) <= 2) {
            comboProgress.push(target1);
            num1.innerText = target1;
            num1.classList.add("text-gold");
            playClickSound();
        }
    } else if (comboProgress.length === 1) {
        if (Math.abs(val - target2) <= 2 && val !== target1) {
            comboProgress.push(target2);
            num2.innerText = target2;
            num2.classList.add("text-gold");
            playClickSound();
        }
    } else if (comboProgress.length === 2) {
        if (Math.abs(val - target3) <= 2 && val !== target2) {
            comboProgress.push(target3);
            num3.innerText = target3;
            num3.classList.add("text-gold");
            playClickSound();
            
            setTimeout(() => {
                unlockVaultScreen();
            }, 600);
        }
    }
}

function playClickSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.09);
    } catch(e) {}
}

function playHeavyUnlockSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        const osc1 = audioCtx.createOscillator();
        const gain1 = audioCtx.createGain();
        osc1.connect(gain1);
        gain1.connect(audioCtx.destination);
        osc1.frequency.setValueAtTime(90, audioCtx.currentTime);
        gain1.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain1.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.5);
        osc1.start();
        osc1.stop(audioCtx.currentTime + 0.5);

        setTimeout(() => {
            const osc2 = audioCtx.createOscillator();
            const gain2 = audioCtx.createGain();
            osc2.connect(gain2);
            gain2.connect(audioCtx.destination);
            osc2.type = "triangle";
            osc2.frequency.setValueAtTime(450, audioCtx.currentTime);
            osc2.frequency.exponentialRampToValueAtTime(250, audioCtx.currentTime + 0.3);
            gain2.gain.setValueAtTime(0.08, audioCtx.currentTime);
            gain2.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.3);
            osc2.start();
            osc2.stop(audioCtx.currentTime + 0.35);
        }, 150);

    } catch(e) {}
}

function unlockVaultScreen() {
    vaultUnlocked = true;
    playHeavyUnlockSound();

    const statusLight = document.getElementById("vault-lock-light");
    const statusText = document.getElementById("vault-status-text");
    if (statusLight) statusLight.className = "status-light-green";
    if (statusText) statusText.innerText = "ACCESS GRANTED. VAULT OPEN";

    const dialContainer = document.querySelector(".vault-dial-container");
    if (dialContainer) {
        dialContainer.style.transform = "scale(0.98)";
        dialContainer.style.boxShadow = "0 0 45px rgba(212,175,55,0.4)";
    }

    setTimeout(() => {
        const lockScreen = document.getElementById("vault-lock-screen");
        const unlockedScreen = document.getElementById("vault-unlocked-screen");
        if (lockScreen) lockScreen.classList.add("hidden");
        if (unlockedScreen) unlockedScreen.classList.remove("hidden");
        renderVaultGrid();
    }, 800);
}

function simulateAutoUnlock() {
    const num1 = document.getElementById("combo-num-1");
    const num2 = document.getElementById("combo-num-2");
    const num3 = document.getElementById("combo-num-3");

    if (!num1 || !num2 || !num3) return;

    rotateDialTo(108); // Spin to 30
    num1.innerText = "30";
    num1.classList.add("text-gold");
    playClickSound();

    setTimeout(() => {
        rotateDialTo(252); // Spin to 70
        num2.innerText = "70";
        num2.classList.add("text-gold");
        playClickSound();

        setTimeout(() => {
            rotateDialTo(54); // Spin to 15
            num3.innerText = "15";
            num3.classList.add("text-gold");
            playClickSound();

            setTimeout(() => {
                unlockVaultScreen();
            }, 400);
        }, 500);
    }, 500);
}

function lockVaultScreen() {
    vaultUnlocked = false;
    comboProgress = [];
    
    const num1 = document.getElementById("combo-num-1");
    const num2 = document.getElementById("combo-num-2");
    const num3 = document.getElementById("combo-num-3");

    if (num1) { num1.innerText = "--"; num1.classList.remove("text-gold"); }
    if (num2) { num2.innerText = "--"; num2.classList.remove("text-gold"); }
    if (num3) { num3.innerText = "--"; num3.classList.remove("text-gold"); }

    const statusLight = document.getElementById("vault-lock-light");
    const statusText = document.getElementById("vault-status-text");
    if (statusLight) statusLight.className = "status-light-red";
    if (statusText) statusText.innerText = "SECURED IN CRITICAL BLOCK";

    rotateDialTo(0);

    const dialContainer = document.querySelector(".vault-dial-container");
    if (dialContainer) {
        dialContainer.style.transform = "none";
        dialContainer.style.boxShadow = "none";
    }

    const unlockedScreen = document.getElementById("vault-unlocked-screen");
    const lockScreen = document.getElementById("vault-lock-screen");
    if (unlockedScreen) unlockedScreen.classList.add("hidden");
    if (lockScreen) lockScreen.classList.remove("hidden");
}

function renderVaultGrid() {
    const grid = document.getElementById("vault-grid");
    const emptyMsg = document.getElementById("vault-empty-message");

    if (!grid || !emptyMsg) return;
    if (!vaultUnlocked) return;

    if (userWatchlist.length === 0) {
        grid.classList.add("hidden");
        emptyMsg.classList.remove("hidden");
        return;
    }

    grid.classList.remove("hidden");
    emptyMsg.classList.add("hidden");

    let html = "";
    userWatchlist.forEach(movieId => {
        const movie = MOVIES_DATABASE.find(m => m.id === movieId);
        if (movie) {
            const poster = movie.poster || FALLBACK_POSTER;
            const rating = movie.rating !== undefined ? movie.rating : "N/A";
            const year = movie.year || "N/A";
            const primaryGenre = Array.isArray(movie.genres) && movie.genres[0] ? movie.genres[0] : "";

            html += `
                <div class="movie-card" onclick="openDetailsModal('${movie.id}')">
                    <img src="${poster}" alt="${movie.title}" class="movie-card-poster" onerror="this.src='${FALLBACK_POSTER}'">
                    <div class="movie-card-glass-panel">
                        <h3 class="movie-card-title">${movie.title}</h3>
                        <div class="movie-card-meta">
                            <span><i class="fa-solid fa-star text-gold"></i> ${rating}</span>
                            <span>${year}</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
                            <span class="movie-card-genres" style="margin-bottom:0;">${primaryGenre}</span>
                            <button class="btn" style="padding: 4px 8px; font-size: 0.65rem; border:1px solid rgba(255,255,255,0.1); margin:0;" onclick="event.stopPropagation(); removeFromVault('${movie.id}')">
                                <i class="fa-solid fa-trash-can" style="color:var(--gold-accent);"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    grid.innerHTML = html;
}

/* ==========================================================================
   WATCHLIST VAULT CONTROLLERS
   ========================================================================== */
function addToVault(movieId) {
    if (!userWatchlist.includes(movieId)) {
        userWatchlist.push(movieId);
        try {
            localStorage.setItem('aureon_watchlist', JSON.stringify(userWatchlist));
        } catch (e) {
            console.warn("Saving to watchlist failed:", e);
        }
        updateVaultBadge();
        
        const btn = document.getElementById("modal-vault-btn");
        if (btn) {
            btn.innerHTML = `<i class="fa-solid fa-folder-minus"></i> Remove from Vault`;
            btn.className = "btn btn-secondary modal-btn-full";
        }
        
        renderVaultGrid();
    }
}

function removeFromVault(movieId) {
    userWatchlist = userWatchlist.filter(id => id !== movieId);
    try {
        localStorage.setItem('aureon_watchlist', JSON.stringify(userWatchlist));
    } catch (e) {
        console.warn("Saving to watchlist failed:", e);
    }
    updateVaultBadge();

    const btn = document.getElementById("modal-vault-btn");
    if (btn) {
        btn.innerHTML = `<i class="fa-solid fa-folder-plus text-gold"></i> Store in Vault`;
        btn.className = "btn btn-border-gold modal-btn-full";
    }

    renderVaultGrid();
}

function toggleVaultItem(movieId) {
    if (userWatchlist.includes(movieId)) {
        removeFromVault(movieId);
    } else {
        addToVault(movieId);
    }
}

function updateVaultBadge() {
    const badge = document.getElementById("vault-count-badge");
    if (!badge) return;

    badge.innerText = userWatchlist.length;
    
    if (userWatchlist.length === 0) {
        badge.classList.add("hidden");
    } else {
        badge.classList.remove("hidden");
    }
}

/* ==========================================================================
   MODAL DIALOG CONTROLLERS
   ========================================================================== */
function setupModals(catalog) {
    const detailModal = document.getElementById("details-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    const backdrop = document.getElementById("modal-backdrop-layer");

    const trailerModal = document.getElementById("trailer-modal");
    const closeTrailerBtn = document.getElementById("trailer-close-btn");
    const backdropTrailer = document.getElementById("trailer-close-overlay");

    // Close Details Modal
    if (closeBtn && detailModal) {
        closeBtn.addEventListener("click", () => {
            detailModal.classList.remove("active");
        });
    }
    if (backdrop && detailModal) {
        backdrop.addEventListener("click", () => {
            detailModal.classList.remove("active");
        });
    }

    // Close Trailer Modal
    if (closeTrailerBtn) {
        closeTrailerBtn.addEventListener("click", () => {
            closeTrailer();
        });
    }
    if (backdropTrailer) {
        backdropTrailer.addEventListener("click", () => {
            closeTrailer();
        });
    }
}

function openDetailsModal(movieId) {
    const movie = MOVIES_DATABASE.find(m => m.id === movieId);
    if (!movie) return;

    const modal = document.getElementById("details-modal");
    const bodyContent = document.getElementById("modal-body-content");

    if (!modal || !bodyContent) return;

    const inVault = userWatchlist.includes(movie.id);
    const vaultBtnHTML = inVault 
        ? `<button class="btn btn-secondary modal-btn-full" id="modal-vault-btn" onclick="toggleVaultItem('${movie.id}')"><i class="fa-solid fa-folder-minus"></i> Remove from Vault</button>`
        : `<button class="btn btn-border-gold modal-btn-full" id="modal-vault-btn" onclick="toggleVaultItem('${movie.id}')"><i class="fa-solid fa-folder-plus text-gold"></i> Store in Vault</button>`;

    let castHTML = "";
    if (Array.isArray(movie.cast)) {
        movie.cast.forEach(actor => {
            castHTML += `
                <div class="cast-member">
                    <div class="cast-avatar-fallback"><i class="fa-solid fa-user-tie"></i></div>
                    <div class="cast-name">${actor.name || "Actor"}</div>
                    <div class="cast-role">${actor.role || "Character"}</div>
                </div>
            `;
        });
    }

    const recsList = MOVIES_DATABASE.filter(m => m.id !== movie.id)
        .sort((a, b) => {
            const sharedA = Array.isArray(a.genres) && Array.isArray(movie.genres) ? a.genres.filter(g => movie.genres.includes(g)).length : 0;
            const sharedB = Array.isArray(b.genres) && Array.isArray(movie.genres) ? b.genres.filter(g => movie.genres.includes(g)).length : 0;
            return sharedB - sharedA;
        })
        .slice(0, 4);

    let recsGridHTML = "";
    recsList.forEach(m => {
        const poster = m.poster || FALLBACK_POSTER;
        const rating = m.rating !== undefined ? m.rating : "N/A";
        const year = m.year || "N/A";

        recsGridHTML += `
            <div class="movie-card" onclick="openDetailsModal('${m.id}')">
                <img src="${poster}" alt="${m.title}" class="movie-card-poster" loading="lazy" onerror="this.src='${FALLBACK_POSTER}'">
                <div class="movie-card-glass-panel">
                    <h4 class="movie-card-title" style="font-size:0.95rem;">${m.title}</h4>
                    <div class="movie-card-meta" style="font-size:0.75rem;">
                        <span><i class="fa-solid fa-star text-gold"></i> ${rating}</span>
                        <span>${year}</span>
                    </div>
                </div>
            </div>
        `;
    });

    const backdrop = movie.backdrop || FALLBACK_BACKDROP;
    const rating = movie.rating !== undefined ? movie.rating : "N/A";
    const year = movie.year || "N/A";
    const runtime = movie.runtime || "N/A";
    const genres = Array.isArray(movie.genres) ? movie.genres.join(" / ") : "";

    bodyContent.innerHTML = `
        <div class="modal-hero-banner" style="background-image: url('${backdrop}');">
            <div class="modal-hero-overlay"></div>
            <div class="modal-hero-content">
                <div style="max-width:70%;">
                    <h2 class="modal-title">${movie.title || "Projection Details"}</h2>
                    <div class="modal-metadata">
                        <span class="text-gold"><i class="fa-solid fa-star"></i> ${rating}</span>
                        <span>${year}</span>
                        <span>${runtime}</span>
                        <span>${genres}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-main-grid">
            <div class="modal-left-col">
                <div class="modal-synopsis-box">
                    <h3>The Narrative</h3>
                    <p>${movie.description || "No narrative details currently available."}</p>
                </div>
                
                <div class="modal-cast-section">
                    <h3>Headliners</h3>
                    <div class="cast-grid">
                        ${castHTML || "<div style='color:var(--text-muted);'>No headliners listed.</div>"}
                    </div>
                </div>
            </div>

            <div class="modal-right-col">
                <div class="modal-action-row">
                    <button class="btn btn-primary modal-btn-full" onclick="playTrailer('${movie.trailerId}')"><i class="fa-solid fa-play"></i> Play Projection</button>
                </div>
                <div class="modal-action-row">
                    ${vaultBtnHTML}
                </div>
                
                <div style="border-top:1px solid rgba(255,255,255,0.05); padding-top:20px; margin-top:20px;">
                    <div class="meta-detail-row">
                        <span class="meta-detail-label">Director</span>
                        <span class="meta-detail-value">${movie.director || "Unknown"}</span>
                    </div>
                    <div class="meta-detail-row">
                        <span class="meta-detail-label">Writers</span>
                        <span class="meta-detail-value">${movie.director || "Unknown"} & partners</span>
                    </div>
                    <div class="meta-detail-row">
                        <span class="meta-detail-label">Tagline</span>
                        <span class="meta-detail-value" style="font-style:italic;">"${movie.tagline || 'Projections in higher dimension.'}"</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-rec-section">
            <h3>CORRELATE PROJECTIONS</h3>
            <div class="modal-rec-grid">
                ${recsGridHTML}
            </div>
        </div>
    `;

    modal.classList.add("active");
}

function playTrailer(trailerId) {
    const trailerModal = document.getElementById("trailer-modal");
    const container = document.getElementById("trailer-player-container");

    if (!trailerModal || !container) return;

    container.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${trailerId || 'zSWdZVtXD7I'}?autoplay=1&rel=0&modestbranding=1" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
    `;

    trailerModal.classList.add("active");
}

function closeTrailer() {
    const trailerModal = document.getElementById("trailer-modal");
    const container = document.getElementById("trailer-player-container");
    
    if (container) container.innerHTML = "";
    if (trailerModal) trailerModal.classList.remove("active");
}

/* ==========================================================================
   INTERACTIVE PREMIUM CUSTOM CURSOR
   ========================================================================== */
function setupCustomCursor() {
    const dot = document.querySelector(".custom-cursor-dot");
    const outline = document.querySelector(".custom-cursor-outline");

    if (!dot || !outline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let hasMoved = false;

    window.addEventListener("mousemove", (e) => {
        if (!hasMoved) {
            dot.style.opacity = "1";
            outline.style.opacity = "1";
            hasMoved = true;
        }

        mouseX = e.clientX;
        mouseY = e.clientY;

        // Position inner dot immediately
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
        // Smooth outline follow (lerp factor: 0.15)
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        outline.style.left = `${outlineX}px`;
        outline.style.top = `${outlineY}px`;

        requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Hide/Show cursor when leaving/entering the window viewport
    document.addEventListener("mouseleave", () => {
        dot.style.opacity = "0";
        outline.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
        if (hasMoved) {
            dot.style.opacity = "1";
            outline.style.opacity = "1";
        }
    });

    // Add class to body on hover of interactive items using delegation
    const interactiveSelectors = 'a, button, input, .movie-card, .magazine-poster-wrapper, .oracle-opt-card, .dial-tick-number, .vault-dial-inner, .selector-dot';

    document.addEventListener("mouseover", (e) => {
        if (e.target.closest(interactiveSelectors)) {
            document.body.classList.add("custom-cursor-hover");
        }
    });

    document.addEventListener("mouseout", (e) => {
        if (!e.relatedTarget || !e.relatedTarget.closest(interactiveSelectors)) {
            document.body.classList.remove("custom-cursor-hover");
        }
    });
}

/* ==========================================================================
   CINEMATIC SCROLL REVEALS
   ========================================================================== */
function setupScrollReveal() {
    const reveals = document.querySelectorAll(".reveal, .reveal-stagger");
    if (reveals.length === 0) return;

    const observerOptions = {
        root: null, // viewport
        rootMargin: "-40px 0px -40px 0px", // slight inset trigger
        threshold: 0.02 // Trigger when even 2% is visible (resilient for tall elements)
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target); // One-shot reveal
            }
        });
    }, observerOptions);

    reveals.forEach(el => observer.observe(el));
}

// Global scope bindings for module & bundled compatibility
window.openDetailsModal = openDetailsModal;
window.playTrailer = playTrailer;
window.removeFromVault = removeFromVault;
window.toggleVaultItem = toggleVaultItem;
