/* ══════════════════════════════════════════════════════
   BIRTHDAY PAGE · script.js
   ══════════════════════════════════════════════════════ */

'use strict';


/* ── Compliments ───────────────────────────────────── */
const COMPLIMENTS = [
  "You have the most contagious laugh ✨",
  "The world genuinely gets better with you in it 🌸",
  "You're the kind of person people feel lucky to know 💕",
  "Your kindness never goes unnoticed 🌼",
  "You make ordinary moments feel special 🎀",
  "Honestly? You're kind of amazing 🌟",
  "Your smile could light up any room ☀️",
  "You have such a warm, beautiful heart 💖",
  "You're so much stronger than you know 🦋",
  "Everything gets more fun when you're around 🎈",
  "You light up every room you walk into 🌙",
  "You deserve every good thing coming your way 🌈",
  "You're effortlessly yourself — and that's the best thing 🌺",
  "You have a gift for making people feel seen 💜",
];

/* ── Poem lines ────────────────────────────────────── */
/* delay = ms to wait BEFORE this line appears (after the previous) */
const POEM = [
  { text: "Today is...",                              delay: 1000 },
  { text: "as beautiful as other days",               delay: 850 },
  { text: "but you realize",                          delay: 850 },
  { text: "another year has gone",                    delay: 800 },
  { text: "in a blink of the eyes",                   delay: 1100 },
  { text: "",                                         delay: 600,   spacer: true },
  { text: "however",                                  delay: 1700,  bold: true },
  { text: "Do you know..?",                           delay: 1100 },
  { text: "today is just special",                    delay: 850 },
  { text: "so special to you",                        delay: 850 },
  { text: "that's why",                               delay: 1100 },
  { text: "Let's make it...",                         delay: 850 },
  { text: "the best celebration ever",                delay: 1100 },
  { text: "",                                         delay: 600,   spacer: true },
  { text: "and let me share...",                      delay: 1000 },
  { text: "a piece of happiness to you",              delay: 1100 },
  { text: "I made all this...",                       delay: 1000 },
  { text: "as a birthday present to you",             delay: 1200 },
  { text: "",                                         delay: 600,   spacer: true },
  { text: "I'm glad we met on zzz",                   delay: 1400 },  /* ← change zzz */
  { text: "thanks for the friendship we made",        delay: 1000 },
  { text: "thanks for everything",                    delay: 1400 },
  { text: "",                                         delay: 600,   spacer: true },
  { text: "I wish you all the best",                  delay: 1000 },
  { text: "May your life be at ease",                 delay: 850 },
  { text: "May all your wishes come true",            delay: 1300 },
  { text: "",                                         delay: 600,   spacer: true },
  { text: "Remember",                                 delay: 1200 },
  { text: "your ambitions",                           delay: 1100 },
  { text: "you live as a free bird...",               delay: 1000 },
  { text: "flying in the blue sky",                   delay: 1300 },
  { text: "",                                         delay: 600,   spacer: true },
  { text: "Now things are different...",              delay: 1100 },
  { text: "real story of your life",                  delay: 850 },
  { text: "is just about to begin",                   delay: 1200 },
  { text: "",                                         delay: 600,   spacer: true },
  { text: "indeed..",                                 delay: 1000 },
  { text: "but...",                                   delay: 1400 },
  { text: "don't worry",                              delay: 1000 },
  { text: "because...",                               delay: 1200 },
  { text: "God has your back",                        delay: 1600,  bold: true },
  { text: "",                                         delay: 600,   spacer: true },
  { text: "and",                                      delay: 900 },
  { text: "this year will be better",                 delay: 1000 },
  { text: "and I hope",                               delay: 900 },
  { text: "you'll find...",                           delay: 1000 },
  { text: "happiness along the way",                  delay: 1200 },
  { text: "",                                         delay: 600,   spacer: true },
  { text: "keep your spirit up",                      delay: 1000 },
  { text: "enjoy every single moment...",             delay: 850 },
  { text: "that you experience today",                delay: 850 },
  { text: "fill it with your most beautiful smile",   delay: 1000 },
  { text: "and make it the best memory..",            delay: 1400 },
  { text: "",                                         delay: 600,   spacer: true },
  { text: "lastly...",                                delay: 1300 },
  { text: "I'd like to wish you one more time",       delay: 1000 },
  { text: "",                                         delay: 700,   spacer: true },
  { text: "A Very Happy Birthday 🎂",                  delay: 1300,  bold: true, final: true },
];

/* ── Balloon colors ────────────────────────────────── */
const BALLOON_COLORS = [
  '#ff85a1','#9b7fd4','#ffaa6b','#6ab8ff',
  '#6adba5','#ffe566','#ff7eb3','#a5d8ff',
];

/* ── Balloon pop messages (one per balloon, shuffled on init) ── */
const BALLOON_MESSAGES_POOL = [
  "You're amazing! ✨",
  "You're awesome! 🌟",
  "You're so beautiful! 🌸",
  "You're incredibly kind! 💕",
  "You're brilliant! 💫",
  "You're wonderful! 🌈",
  "You're pure magic! 🦋",
  "You are so loved! 💖",
];

/* ── BG emojis + confetti ──────────────────────────── */
const BG_EMOJIS      = ['💗','💕','✨','🌸','💫','🌷','💖','⭐','🌼','🦋','🌙'];
const SPARKLE_CHARS  = ['✦','✧','⋆','·','✦','✧'];
const CONFETTI_COLORS = [
  '#ff6b9d','#ffb3c6','#cbb8e8','#9b7fd4',
  '#ffd4b2','#ffaa6b','#b8dcff','#6ab8ff','#ffc8e0',
];


/* ── State ─────────────────────────────────────────── */
let currentScreen  = 0;
let lastCompliment = -1;
let isTyping       = false;
let musicPlaying   = false;
let sparkleTimer   = 0;

/* Dark overlay cursor tracking */
let lastCursorX        = window.innerWidth  / 2;
let lastCursorY        = window.innerHeight / 2;
let darkActive         = true;  /* true while dark layers are in the DOM */
let moveButtonInterval = null;
let prevBtnLeft        = -999;
let prevBtnTop         = -999;

/* Cake state */
let litCount = 4;

/* Balloon state */
const TOTAL_BALLOONS = 8;
let poppedCount  = 0;
let msgTimer     = null;
let balloonMsgs  = [];   /* shuffled messages, assigned once per screen init */


/* ── DOM refs ──────────────────────────────────────── */
const darkBgEl    = document.getElementById('dark-bg');
const darkOverlay = document.getElementById('dark-overlay');
const cursorGlow  = document.getElementById('cursor-glow');
const lightupBtn  = document.getElementById('lightup-btn');
const bgBalloons  = document.getElementById('bg-balloons');

const SCREENS = [
  document.getElementById('screen-0'),
  document.getElementById('screen-1'),
  document.getElementById('screen-2'),
  document.getElementById('screen-3'),
  document.getElementById('screen-4'),
  document.getElementById('screen-5'),
  document.getElementById('screen-6'),
  document.getElementById('screen-7'),
];
const progressNav    = document.getElementById('progress-nav');
const progressDots   = document.querySelectorAll('.dot');

const openBtn        = document.getElementById('open-btn');
const surpriseBtn    = document.getElementById('surprise-btn');
const complimentBox  = document.getElementById('compliment-box');
const complimentText = document.getElementById('compliment-text');

const bgOrbs         = document.getElementById('bg-orbs');
const bgParticles    = document.getElementById('bg-particles');
const cursorLayer    = document.getElementById('cursor-sparkles');
const confettiLayer  = document.getElementById('confetti-container');

const musicToggle    = document.getElementById('music-toggle');
const musicIcon      = document.getElementById('music-icon');
const bgMusic        = document.getElementById('bg-music');


/* ══════════════════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════════════════ */

function navigateTo(idx, withConfetti = false) {
  if (idx === currentScreen || idx < 0 || idx >= SCREENS.length) return;

  const from = SCREENS[currentScreen];
  const to   = SCREENS[idx];

  from.classList.add('exit');

  setTimeout(() => {
    from.classList.remove('active', 'exit');
    from.setAttribute('aria-hidden', 'true');

    to.classList.add('active');
    to.removeAttribute('aria-hidden');

    currentScreen = idx;
    updateProgress(idx);

    if (withConfetti) { createConfetti(70); setTimeout(() => createConfetti(42), 480); }

    /* Screen-specific init */
    if (idx === 2) initCakeScreen();
    if (idx === 3) initBalloonScreen();
    if (idx === 4) initTributeScreen();
    if (idx === 5) initGrowScreen();
    if (idx === 6) initPinocchioScreen();
    if (idx === 7) initPoemScreen();

  }, 400);
}

function updateProgress(idx) {
  if (idx === 0) {
    progressNav.classList.remove('visible');
    progressNav.setAttribute('aria-hidden', 'true');
  } else {
    progressNav.classList.add('visible');
    progressNav.removeAttribute('aria-hidden');
    progressDots.forEach(d => d.classList.toggle('active', +d.dataset.idx === idx));
  }
}


/* ══════════════════════════════════════════════════════
   BACKGROUND — orbs, stars, floating hearts
   ══════════════════════════════════════════════════════ */

function createOrbs() {
  const defs = [
    { color:'#ffb3c6', s:520, top:-140, left:-120,              dx: 70, dy: 50, dur:19, blur:130, op:0.33 },
    { color:'#cbb8e8', s:440, top: -90,            right:-100,  dx:-55, dy: 65, dur:23, blur:110, op:0.28 },
    { color:'#b8dcff', s:480, bottom:-130, left:80,             dx: 45, dy:-55, dur:21, blur:120, op:0.30 },
    { color:'#ffd4b2', s:400,             right:-80,bottom:-110,dx:-60, dy:-45, dur:17, blur:100, op:0.26 },
  ];
  defs.forEach(o => {
    const el = document.createElement('div');
    el.className = 'orb';
    Object.assign(el.style, { width:`${o.s}px`, height:`${o.s}px`, background:o.color, opacity:o.op });
    el.style.setProperty('--orb-blur',    `${o.blur}px`);
    el.style.setProperty('--orb-opacity', `${o.op}`);
    el.style.setProperty('--orb-dx',      `${o.dx}px`);
    el.style.setProperty('--orb-dy',      `${o.dy}px`);
    el.style.setProperty('--orb-dur',     `${o.dur}s`);
    if (o.top    !== undefined) el.style.top    = `${o.top}px`;
    if (o.left   !== undefined) el.style.left   = `${o.left}px`;
    if (o.right  !== undefined) el.style.right  = `${o.right}px`;
    if (o.bottom !== undefined) el.style.bottom = `${o.bottom}px`;
    bgOrbs.appendChild(el);
  });
}

function createTwinklingStars(count = 22) {
  const chars = ['✦','✧','·','⋆'];
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className   = 'twinkle-star';
    el.textContent = chars[Math.floor(Math.random() * chars.length)];
    el.ariaHidden  = 'true';
    el.style.top   = `${Math.random() * 98}%`;
    el.style.left  = `${Math.random() * 98}%`;
    el.style.setProperty('--dur',   `${2.2 + Math.random() * 3.2}s`);
    el.style.setProperty('--delay', `${Math.random() * 5}s`);
    el.style.fontSize = `${6 + Math.random() * 9}px`;
    bgParticles.appendChild(el);
  }
}

function spawnFloatingHeart() {
  const el = document.createElement('span');
  el.className   = 'float-heart';
  el.textContent = BG_EMOJIS[Math.floor(Math.random() * BG_EMOJIS.length)];
  el.ariaHidden  = 'true';
  el.style.left      = `${Math.random() * 96}%`;
  el.style.fontSize  = `${0.9 + Math.random() * 1.1}rem`;
  el.style.setProperty('--dur',   `${7 + Math.random() * 7}s`);
  el.style.setProperty('--delay', `${Math.random() * 5}s`);
  bgParticles.appendChild(el);
  const hearts = bgParticles.querySelectorAll('.float-heart');
  if (hearts.length > 28) hearts[0].remove();
}

function initFloatingHearts() {
  for (let i = 0; i < 13; i++) spawnFloatingHeart();
  setInterval(spawnFloatingHeart, 1800);
}


/* ══════════════════════════════════════════════════════
   DARK INTRO SCREEN
   ══════════════════════════════════════════════════════ */

/* ── Move cursor dot + update torch hole + clip button to torch ── */
function onDarkMouseMove(e) {
  lastCursorX = e.clientX;
  lastCursorY = e.clientY;

  if (!darkActive) return;

  /* Slide torch hole in overlay */
  if (darkOverlay) {
    darkOverlay.style.setProperty('--light-x', `${e.clientX}px`);
    darkOverlay.style.setProperty('--light-y', `${e.clientY}px`);
  }

  /* Slide custom cursor dot */
  if (cursorGlow) {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top  = `${e.clientY}px`;
  }

  /* Clip button to the torch circle — only shows through the light hole.
     Radius 220px ensures the full button is revealed when cursor is near it.
     Coordinates are relative to the button's own bounding box. */
  if (lightupBtn) {
    const rect = lightupBtn.getBoundingClientRect();
    const bx   = e.clientX - rect.left;
    const by   = e.clientY - rect.top;
    lightupBtn.style.clipPath = `circle(220px at ${bx}px ${by}px)`;
  }
}

/* ── Randomly reposition the button every 2.4 s ── */
function moveButton() {
  if (!lightupBtn || !darkActive) return;

  const pad = 90;
  const bw  = lightupBtn.offsetWidth  || 170;
  const bh  = lightupBtn.offsetHeight ||  52;
  const maxL = window.innerWidth  - bw - pad;
  const maxT = window.innerHeight - bh - pad;

  let newLeft, newTop, attempts = 0;
  /* Pick a position noticeably different from the last */
  do {
    newLeft = pad + Math.random() * (maxL - pad);
    newTop  = pad + Math.random() * (maxT - pad);
    attempts++;
  } while (
    attempts < 12 &&
    Math.hypot(newLeft - prevBtnLeft, newTop - prevBtnTop) < 200
  );

  prevBtnLeft = newLeft;
  prevBtnTop  = newTop;

  lightupBtn.style.left = `${newLeft}px`;
  lightupBtn.style.top  = `${newTop}px`;
  /* Don't reset clip-path here — mousemove keeps it updated smoothly */
}

/* ── Expanding reveal when button is clicked ── */
function lightUp() {
  if (!darkActive) return;
  lightupBtn.disabled = true;
  clearInterval(moveButtonInterval);

  /* Freeze button in place & fully reveal it */
  lightupBtn.style.transition = 'opacity 0.6s ease';
  lightupBtn.style.clipPath   = 'none';

  const cx        = lastCursorX;
  const cy        = lastCursorY;
  let   radius    = 160;
  const maxRadius = Math.hypot(window.innerWidth, window.innerHeight) * 1.12;

  function expand() {
    radius += Math.max(22, radius * 0.075);   /* accelerating grow */

    if (darkOverlay) {
      const mid = Math.max(28, 88 - (radius / maxRadius) * 85);
      darkOverlay.style.background =
        `radial-gradient(circle ${Math.round(radius)}px at ${cx}px ${cy}px,` +
        ` transparent 0%, rgba(8,2,20,0.90) ${mid}%, rgba(4,1,12,0.99) 100%)`;
    }

    if (radius < maxRadius) {
      requestAnimationFrame(expand);
    } else {
      /* Fade all dark layers together */
      [darkBgEl, darkOverlay].forEach(el => {
        if (el) { el.style.transition = 'opacity 0.75s ease'; el.style.opacity = '0'; }
      });
      if (cursorGlow)  cursorGlow.style.opacity  = '0';
      if (lightupBtn)  lightupBtn.style.opacity   = '0';

      setTimeout(() => {
        darkActive = false;
        [darkBgEl, darkOverlay, cursorGlow, lightupBtn].forEach(el => el && el.remove());
        /* Restore system cursor */
        document.body.style.cursor = '';
      }, 800);
    }
  }

  requestAnimationFrame(expand);
}

/* ── Touch forwarding (mobile) ── */
function onDarkTouch(e) {
  const t = e.touches[0];
  if (t) onDarkMouseMove({ clientX: t.clientX, clientY: t.clientY });
}

/* ── Init dark screen ── */
function initDarkScreen() {
  /* Hide system cursor during dark phase */
  document.body.style.cursor = 'none';

  /* First position — slight delay so button has rendered dimensions */
  setTimeout(moveButton, 80);

  /* Keep wandering — 4 s gives enough time to chase and click */
  moveButtonInterval = setInterval(moveButton, 4000);
}


/* ══════════════════════════════════════════════════════
   BACKGROUND TRANSPARENT BALLOONS  (all screens)
   ══════════════════════════════════════════════════════ */
function createBgBalloons(count = 11) {
  const colors = [
    'rgba(255,179,198,1)',   /* pink */
    'rgba(203,184,232,1)',   /* lavender */
    'rgba(184,220,255,1)',   /* sky */
    'rgba(255,212,178,1)',   /* peach */
    'rgba(181,234,215,1)',   /* mint */
    'rgba(255,230,102,1)',   /* yellow */
    'rgba(255,180,230,1)',   /* rose */
  ];

  for (let i = 0; i < count; i++) {
    const b = document.createElement('div');
    b.className = 'bg-balloon';
    b.ariaHidden = 'true';

    const size  = 70 + Math.random() * 130;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const opacity = (0.06 + Math.random() * 0.09).toFixed(3);

    Object.assign(b.style, {
      width:      `${size}px`,
      height:     `${size}px`,
      background: color,
      opacity,
      top:  `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    });

    b.style.setProperty('--bb-dur',    `${12 + Math.random() * 9}s`);
    b.style.setProperty('--bb-delay',  `${Math.random() * 7}s`);
    b.style.setProperty('--bb-sway',   `${15 + Math.random() * 9}s`);
    b.style.setProperty('--bb-sdelay', `${Math.random() * 5}s`);
    b.style.setProperty('--bb-dx',     `${(Math.random() > 0.5 ? 1 : -1) * (20 + Math.random() * 45)}px`);

    bgBalloons.appendChild(b);
  }
}


/* ══════════════════════════════════════════════════════
   CURSOR SPARKLE TRAIL
   ══════════════════════════════════════════════════════ */
function onMouseMove(e) {
  if (darkActive) return;            /* no sparkles while dark screen is showing */
  const now = Date.now();
  if (now - sparkleTimer < 90) return;
  if (Math.random() > 0.55) return;
  sparkleTimer = now;

  const el = document.createElement('span');
  el.className   = 'cursor-sparkle';
  el.textContent = SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)];
  el.ariaHidden  = 'true';
  el.style.left  = `${e.clientX}px`;
  el.style.top   = `${e.clientY}px`;
  el.style.color = Math.random() > 0.5 ? '#9b7fd4' : '#ff6b9d';
  el.style.fontSize = `${10 + Math.random() * 13}px`;
  cursorLayer.appendChild(el);
  setTimeout(() => el.remove(), 920);
}


/* ══════════════════════════════════════════════════════
   RIPPLE + 3-D TILT
   ══════════════════════════════════════════════════════ */
function addRipple(e) {
  const btn  = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const rpl  = document.createElement('span');
  rpl.className  = 'ripple';
  rpl.style.left = `${e.clientX - rect.left}px`;
  rpl.style.top  = `${e.clientY - rect.top}px`;
  btn.appendChild(rpl);
  setTimeout(() => rpl.remove(), 750);
}

function initCardTilt() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const cx = (e.clientX - r.left) / r.width  - 0.5;
      const cy = (e.clientY - r.top)  / r.height - 0.5;
      card.style.transition = 'transform 0.12s ease';
      card.style.transform  = `perspective(900px) rotateX(${(-cy * 9).toFixed(2)}deg) rotateY(${(cx * 9).toFixed(2)}deg) translateZ(8px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.55s ease';
      card.style.transform  = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
  });
}


/* ══════════════════════════════════════════════════════
   CONFETTI BURST
   ══════════════════════════════════════════════════════ */
function createConfetti(count = 65) {
  for (let i = 0; i < count; i++) {
    const el    = document.createElement('div');
    el.className = 'confetti-piece';
    const angle  = Math.random() * Math.PI * 2;
    const radius = 90 + Math.random() * 240;
    const tx     = (Math.cos(angle) * radius).toFixed(1);
    const ty     = (Math.sin(angle) * radius - 55).toFixed(1);
    const dur    = (0.60 + Math.random() * 0.90).toFixed(2);
    const rot    = (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 240);
    const size   = 7 + Math.random() * 10;
    const emoji  = Math.random() > 0.58;

    el.style.setProperty('--c-tx',  `${tx}px`);
    el.style.setProperty('--c-ty',  `${ty}px`);
    el.style.setProperty('--c-rot', `${rot}deg`);
    el.style.animationDuration = `${dur}s`;

    if (emoji) {
      el.textContent           = Math.random() > 0.45 ? '💗' : '✨';
      el.style.fontSize        = `${size + 5}px`;
      el.style.width           = 'auto';
      el.style.height          = 'auto';
      el.style.backgroundColor = 'transparent';
    } else {
      const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      el.style.width           = `${size}px`;
      el.style.height          = `${size}px`;
      el.style.backgroundColor = color;
      el.style.borderRadius    = Math.random() > 0.45 ? '50%' : '4px';
    }
    confettiLayer.appendChild(el);
    setTimeout(() => el.remove(), (parseFloat(dur) + 0.15) * 1000);
  }
}

/* Small burst at a specific viewport coordinate */
function createBurst(x, y, count = 16) {
  for (let i = 0; i < count; i++) {
    const el    = document.createElement('div');
    el.className = 'confetti-piece';
    const angle  = Math.random() * Math.PI * 2;
    const radius = 30 + Math.random() * 80;
    const tx     = (Math.cos(angle) * radius).toFixed(1);
    const ty     = (Math.sin(angle) * radius - 25).toFixed(1);
    const dur    = (0.40 + Math.random() * 0.50).toFixed(2);
    const rot    = (Math.random() > 0.5 ? 1 : -1) * 240;
    const size   = 5 + Math.random() * 7;
    const color  = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];

    el.style.top  = `${y}px`;
    el.style.left = `${x}px`;
    el.style.setProperty('--c-tx',  `${tx}px`);
    el.style.setProperty('--c-ty',  `${ty}px`);
    el.style.setProperty('--c-rot', `${rot}deg`);
    el.style.animationDuration = `${dur}s`;
    el.style.width           = `${size}px`;
    el.style.height          = `${size}px`;
    el.style.backgroundColor = color;
    el.style.borderRadius    = '50%';

    confettiLayer.appendChild(el);
    setTimeout(() => el.remove(), (parseFloat(dur) + 0.1) * 1000);
  }
}


/* ══════════════════════════════════════════════════════
   SCREEN 0 → 1  (Landing → Birthday)
   ══════════════════════════════════════════════════════ */
function openBirthday() {
  openBtn.disabled = true;
  navigateTo(1, true);
}


/* ══════════════════════════════════════════════════════
   TYPING + COMPLIMENT  (Screen 1)
   ══════════════════════════════════════════════════════ */
function typeText(el, text, speed = 34) {
  return new Promise(resolve => {
    el.textContent = '';
    el.classList.add('typing');
    let i = 0;
    const tick = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) { clearInterval(tick); el.classList.remove('typing'); resolve(); }
    }, speed);
  });
}

function pickCompliment() {
  let idx;
  do { idx = Math.floor(Math.random() * COMPLIMENTS.length); }
  while (idx === lastCompliment && COMPLIMENTS.length > 1);
  lastCompliment = idx;
  return COMPLIMENTS[idx];
}

async function showSurprise() {
  if (isTyping) return;
  isTyping = true;
  complimentBox.classList.add('visible');
  await new Promise(r => setTimeout(r, 260));
  await typeText(complimentText, pickCompliment(), 33);
  surpriseBtn.textContent = 'Another one? ✨';
  isTyping = false;
}


/* ══════════════════════════════════════════════════════
   SCREEN 2 · CAKE
   ══════════════════════════════════════════════════════ */
function initCakeScreen() {
  litCount = 4;
  const candles    = document.querySelectorAll('.candle');
  const candleSub  = document.getElementById('cake-sub');
  const wishReveal = document.getElementById('wish-reveal');
  const cakeNext   = document.getElementById('cake-next');

  /* Reset in case screen is revisited */
  candles.forEach(c => {
    c.dataset.lit = 'true';
    c.classList.remove('smoked');
    const f = c.querySelector('.flame');
    if (f) { f.classList.remove('out'); f.style.opacity = ''; }
  });
  wishReveal.classList.add('hidden');
  cakeNext.classList.add('hidden');

  candles.forEach(candle => {
    /* Remove old listener by cloning */
    const fresh = candle.cloneNode(true);
    candle.parentNode.replaceChild(fresh, candle);
    fresh.addEventListener('click', () => blowCandle(fresh));
    fresh.addEventListener('touchstart', e => { e.preventDefault(); blowCandle(fresh); }, { passive: false });
  });

  function blowCandle(candle) {
    if (candle.dataset.lit !== 'true') return;
    candle.dataset.lit = 'false';

    const flame = candle.querySelector('.flame');
    flame.classList.add('out');

    setTimeout(() => {
      candle.classList.add('smoked');
      litCount--;

      if (litCount === 0) {
        candleSub.textContent = 'All candles out! 🌬️';
        setTimeout(() => {
          createConfetti(60);
          wishReveal.classList.remove('hidden');
          setTimeout(() => cakeNext.classList.remove('hidden'), 900);
        }, 600);
      }
    }, 350);
  }
}


/* ── Show / hide the pop message pill ────────────────── */
function showBalloonMsg(text, persist = false) {
  const msgEl = document.getElementById('balloon-msg');
  clearTimeout(msgTimer);

  /* Force animation restart */
  msgEl.classList.remove('show');
  void msgEl.offsetWidth;

  msgEl.innerHTML = `<span>${text}</span>`;
  msgEl.classList.add('show');

  if (!persist) {
    msgTimer = setTimeout(() => msgEl.classList.remove('show'), 2200);
  }
}


/* ══════════════════════════════════════════════════════
   SCREEN 3 · BALLOONS
   ══════════════════════════════════════════════════════ */
function initBalloonScreen() {
  poppedCount = 0;

  /* Shuffle the message pool so order differs each visit */
  balloonMsgs = [...BALLOON_MESSAGES_POOL].sort(() => Math.random() - 0.5);

  const grid        = document.getElementById('balloons-grid');
  const counter     = document.getElementById('balloon-counter');
  const doneEl      = document.getElementById('balloon-done');
  const balloonNext = document.getElementById('balloon-next');
  const msgEl       = document.getElementById('balloon-msg');

  msgEl.classList.remove('show');
  msgEl.innerHTML = '';

  /* Reset */
  grid.innerHTML = '';
  counter.textContent = `0 / ${TOTAL_BALLOONS} popped`;
  counter.classList.remove('done');
  doneEl.classList.add('hidden');
  balloonNext.classList.add('hidden');

  BALLOON_COLORS.slice(0, TOTAL_BALLOONS).forEach((color, i) => {
    const wrap = document.createElement('div');
    wrap.style.position = 'relative';
    wrap.style.height   = '80px';
    wrap.style.display  = 'flex';
    wrap.style.alignItems = 'center';
    wrap.style.justifyContent = 'center';

    const b = document.createElement('div');
    b.className = 'balloon';
    b.style.setProperty('--b-color', color);
    b.style.setProperty('--b-dur',   `${2.0 + Math.random() * 1.2}s`);
    b.style.setProperty('--b-delay', `${i * 0.15}s`);
    b.style.background = color;

    /* Shine spot */
    const shine = document.createElement('div');
    shine.className = 'balloon-shine';
    b.appendChild(shine);

    b.setAttribute('role', 'button');
    b.setAttribute('aria-label', `Pop balloon ${i + 1}`);
    b.setAttribute('tabindex', '0');

    const pop = (e) => {
      if (b.classList.contains('popping')) return;
      const rect = b.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;

      b.classList.add('popping');
      createBurst(cx, cy, 18);

      setTimeout(() => {
        b.style.visibility = 'hidden';
        const idx = poppedCount;      /* capture before increment */
        poppedCount++;
        counter.textContent = `${poppedCount} / ${TOTAL_BALLOONS} popped`;

        /* Show the message assigned to this balloon */
        showBalloonMsg(balloonMsgs[idx]);

        if (poppedCount === TOTAL_BALLOONS) {
          counter.classList.add('hidden');
          setTimeout(() => {
            doneEl.classList.remove('hidden');
            setTimeout(() => balloonNext.classList.remove('hidden'), 700);
          }, 400);
        }
      }, 300);
    };

    b.addEventListener('click', pop);
    b.addEventListener('touchstart', e => { e.preventDefault(); pop(e); }, { passive: false });
    b.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pop(e); } });

    wrap.appendChild(b);
    grid.appendChild(wrap);
  });
}


/* ══════════════════════════════════════════════════════
   SCREEN 4 · TRIBUTE
   ══════════════════════════════════════════════════════ */
function initTributeScreen() {
  const container   = document.getElementById('tribute-container');
  const tributeNext = document.getElementById('tribute-next');

  tributeNext.classList.add('hidden');

  const cards = container.querySelectorAll('.mcard');
  cards.forEach(c => c.classList.remove('visible'));

  cards.forEach((card, i) => {
    setTimeout(() => {
      requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('visible')));
      setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
    }, 1000 + i * 260);
  });

  setTimeout(
    () => tributeNext.classList.remove('hidden'),
    1000 + (cards.length - 1) * 260 + 700
  );
}


/* ══════════════════════════════════════════════════════
   SCREEN 5 · STAY TOGETHER GROW TOGETHER
   ══════════════════════════════════════════════════════ */
function initGrowScreen() {
  const growNext = document.getElementById('grow-next');
  growNext.classList.add('hidden');

  const paras = document.querySelectorAll('#grow-text .grow-para');
  paras.forEach(p => p.classList.remove('visible'));

  paras.forEach((p, i) => {
    setTimeout(() => {
      requestAnimationFrame(() => requestAnimationFrame(() => p.classList.add('visible')));
      setTimeout(() => p.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
    }, 700 + i * 520);
  });

  setTimeout(
    () => growNext.classList.remove('hidden'),
    700 + (paras.length - 1) * 520 + 650
  );
}


/* ══════════════════════════════════════════════════════
   SCREEN 6 · PINOCCHIO
   ══════════════════════════════════════════════════════ */
function initPinocchioScreen() {
  const nextBtn = document.getElementById('pinocchio-next');
  nextBtn.classList.add('hidden');

  const paras = document.querySelectorAll('#pinocchio-text .pinocchio-para');
  paras.forEach(p => p.classList.remove('visible'));

  paras.forEach((p, i) => {
    setTimeout(() => {
      requestAnimationFrame(() => requestAnimationFrame(() => p.classList.add('visible')));
    }, 600 + i * 540);
  });

  setTimeout(
    () => nextBtn.classList.remove('hidden'),
    600 + (paras.length - 1) * 540 + 600
  );
}


/* ══════════════════════════════════════════════════════
   SCREEN 7 · POEM
   ══════════════════════════════════════════════════════ */
function initPoemScreen() {
  const container  = document.getElementById('poem-container');
  const scrollWrap = document.getElementById('poem-scroll-wrap');
  const finale     = document.getElementById('poem-finale');

  container.innerHTML = '';
  finale.classList.add('hidden');

  let cumDelay = 400;   /* initial pause before first line */

  POEM.forEach((entry, i) => {
    cumDelay += entry.delay;

    setTimeout(() => {
      const p = document.createElement('p');
      p.className = 'poem-line';

      if (entry.spacer) {
        p.classList.add('spacer');
        p.innerHTML = '&nbsp;';
      } else {
        if (entry.bold)  p.classList.add('bold');
        if (entry.final) p.classList.add('final');
        p.textContent = entry.text;
      }

      container.appendChild(p);

      /* Scroll so the new line is visible */
      setTimeout(() => {
        p.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);

      /* After last line, show finale heart */
      if (i === POEM.length - 1) {
        setTimeout(() => finale.classList.remove('hidden'), 900);
      }
    }, cumDelay);
  });
}


/* ══════════════════════════════════════════════════════
   MUSIC TOGGLE
   ══════════════════════════════════════════════════════ */
function toggleMusic() {
  const noSrc = bgMusic.networkState === HTMLMediaElement.NETWORK_NO_SOURCE
             || bgMusic.readyState   === HTMLMediaElement.HAVE_NOTHING;
  if (noSrc) { musicToggle.title = 'Add music.mp3 next to index.html'; return; }

  if (musicPlaying) {
    bgMusic.pause();
    musicPlaying = false;
    musicIcon.textContent = '🎵';
    musicToggle.classList.remove('playing');
    musicToggle.title = 'Play music';
  } else {
    bgMusic.volume = 0.35;
    bgMusic.play()
      .then(() => {
        musicPlaying = true;
        musicIcon.textContent = '🎶';
        musicToggle.classList.add('playing');
        musicToggle.title = 'Pause music';
      })
      .catch(() => {
        musicIcon.textContent = '🔇';
        musicToggle.title = 'Blocked — try again';
      });
  }
}


/* ══════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* Dark intro layers */
  initDarkScreen();
  document.addEventListener('mousemove', onDarkMouseMove);
  document.addEventListener('touchmove',  onDarkTouch,  { passive: true });
  if (lightupBtn) {
    lightupBtn.addEventListener('click', lightUp);
    lightupBtn.addEventListener('touchstart', e => { e.preventDefault(); lightUp(); }, { passive: false });
  }

  /* Background */
  createOrbs();
  createTwinklingStars();
  initFloatingHearts();
  createBgBalloons();
  initCardTilt();
  document.addEventListener('mousemove', onMouseMove);

  /* Landing open button */
  openBtn.addEventListener('click', e => { addRipple(e); openBirthday(); });

  /* Birthday screen */
  surpriseBtn.addEventListener('click', e => { addRipple(e); showSurprise(); });

  /* All "Continue →" / "next screen" buttons */
  document.querySelectorAll('.next-screen-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      addRipple(e);
      navigateTo(+btn.dataset.to);
    });
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
    });
  });

  /* Music */
  musicToggle.addEventListener('click', toggleMusic);

  /* Poem finale heart → secret message overlay */
  const secretOverlay = document.getElementById('secret-overlay');
  const poemFinale    = document.getElementById('poem-finale');
  if (poemFinale && secretOverlay) {
    poemFinale.addEventListener('click', () => {
      secretOverlay.classList.add('visible');
      secretOverlay.setAttribute('aria-hidden', 'false');
    });
    secretOverlay.addEventListener('click', () => {
      secretOverlay.classList.remove('visible');
      secretOverlay.setAttribute('aria-hidden', 'true');
    });
  }

  /* Keyboard for open + surprise */
  [openBtn, surpriseBtn, musicToggle].forEach(btn => {
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
    });
  });

});
