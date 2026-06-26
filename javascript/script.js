// ===== Aura Player landing page i18n =====
// Edit the Myanmar (my) strings below to refine the translation.

const translations = {
  en: {
    "meta.title": "Aura Player - Audiophile Video Player & 31-Band Equalizer",
    "meta.description": "Aura Player combines an HD video engine with a professional 31-band equalizer and neon real-time visualizers.",

    "nav.features": "Features",
    "nav.screenshots": "Screenshots",
    "nav.contact": "Contact",

    "hero.tagline": "Audiophile video player with a professional 31-band equalizer & neon visualizers.",
    "hero.intro": "Experience video and music playback like never before. Fine-tune every frequency from deep sub-bass to crisp treble with unmatched precision.",
    "hero.getOn": "GET IT ON",

    "features.title": "Key Features",
    "features.subtitle": "Complete control over your sound stage, right at your fingertips.",
    "feature.eq.title": "Professional 31-Band Equalizer",
    "feature.eq.desc": "Go beyond standard bass-boosters. Customize your sound with 31 distinct frequency bands using high-precision filters.",
    "feature.viz.title": "Stunning Neon Visualizers",
    "feature.viz.desc": "Watch your music come alive with gorgeous, smooth-rendered vertical spectrum visualizers that react to every beat in real-time.",
    "feature.video.title": "High-Performance Video Playback",
    "feature.video.desc": "Powered by a hardware-accelerated engine, enjoy buttery-smooth 4K, 1080p, and HD playback without stuttering or lag.",
    "feature.queue.title": "Adaptive Queue & Playlist Manager",
    "feature.queue.desc": "Queue up video files and audio tracks seamlessly. Reorder, save, and reload custom presets with simple drag-and-drop.",
    "feature.gapless.title": "Gapless & Background Playback",
    "feature.gapless.desc": "Keep the music going with full background playback support and gapless audio transitions for continuous flow.",
    "feature.design.title": "Frosted Glassmorphic Design",
    "feature.design.desc": "A modern, high-tech dark theme inspired by Material 3 with soft glows, smooth animations, and clean layouts.",

    "screens.title": "See It In Action",
    "screens.subtitle": "A sleek, ultra-responsive interface built for audiophiles.",

    "presets.title": "EQ Presets For Every Genre",
    "presets.subtitle": "Use our studio-grade presets, or save your own signature tuning.",
    "preset.flat": "Flat (Normal)",
    "preset.bass": "Bass Booster",
    "preset.vocal": "Vocal Clarity",
    "preset.jazz": "Jazz",
    "preset.rock": "Rock",
    "preset.classical": "Classical",
    "preset.pop": "Pop",
    "preset.custom": "Custom Presets",

    "privacy.title": "Permissions & Privacy",
    "privacy.desc": "To deliver the best offline playback experience, Aura Player requires secure local storage permissions to locate and play your offline files. We value your privacy — none of your personal media is ever collected, tracked, or sent online.",

    "cta.title": "Unlock the true potential of your media",

    "contact.title": "Follow & Contact",
    "contact.rights": "All rights reserved."
  },
};

const STORAGE_KEY = "auraplayer-lang";
const SUPPORTED = ["en"];

function applyLanguage(lang) {
  if (!SUPPORTED.includes(lang)) lang = "en";
  const dict = translations[lang];

  document.documentElement.lang = lang;
  document.body.classList.toggle("lang-my", lang === "my");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined) return;

    if (key === "meta.title") {
      document.title = value;
    } else if (el.tagName === "META") {
      el.setAttribute("content", value);
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
}

function init() {
  let saved = "en";
  try { saved = localStorage.getItem(STORAGE_KEY) || "en"; } catch (_) {}
  applyLanguage(saved);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
