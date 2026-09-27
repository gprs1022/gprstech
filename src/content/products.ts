// =============================================================================
// GPRS TECH — PRODUCTS CONTENT COLLECTION
// Centralized data for all games, apps & digital products.
// Each product auto-generates: detail page, privacy policy page, support page.
// =============================================================================

// ─── Types ────────────────────────────────────────────────────────────────────

export type ProductCategory = 'game' | 'utility' | 'tool' | 'creative';
export type ProductStatus = 'live' | 'beta' | 'coming-soon' | 'discontinued';
export type Platform = 'android' | 'ios' | 'web';

export interface ThirdParty {
  name: string;
  purpose: string;
  privacyUrl: string;
}

export interface ProductPrivacy {
  effectiveDate: string;       // ISO date, e.g. "2026-09-11"
  dataCollected: string[];     // empty array = zero data collected
  thirdParties: ThirdParty[];  // e.g. AdMob, Firebase
  retentionPolicy: string;
  deletionInstructions: string;
  contactEmail: string;
  lastReviewed: string;
  coppaCompliant: boolean;     // true = show Children's Privacy section
  gdprCompliant: boolean;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;               // URL slug — e.g. "balloon-kingdom"
  name: string;
  packageName?: string;     // e.g. "com.gprstech.ballonpop"
  tagline: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  platforms: Platform[];
  icon: string;             // path under /public/products/:id/
  screenshots: string[];
  featureGraphic?: string;  // Google Play banner 1024×500
  trailerUrl?: string;      // YouTube embed src
  playStoreUrl?: string;
  appStoreUrl?: string;
  webAppUrl?: string;
  version?: string;
  lastUpdated: string;
  features: string[];
  privacyPolicy: ProductPrivacy;
  faq?: ProductFAQ[];
  supportEmail: string;
  relatedProducts?: string[]; // array of product ids
  publishedAt: string;
  isPublished: boolean;
}

// ─── Helper Functions ─────────────────────────────────────────────────────────

export const getPublishedProducts = (): Product[] =>
  PRODUCTS.filter((p) => p.isPublished);

export const getProductById = (id: string): Product | undefined =>
  PRODUCTS.find((p) => p.id === id);

export const getPublishedProductById = (id: string): Product | undefined =>
  PRODUCTS.find((p) => p.id === id && p.isPublished);

export const getProductsByCategory = (cat: ProductCategory): Product[] =>
  PRODUCTS.filter((p) => p.isPublished && p.category === cat);

export const getRelatedProducts = (product: Product): Product[] =>
  (product.relatedProducts ?? [])
    .map((id) => getPublishedProductById(id))
    .filter((p): p is Product => p !== undefined);

// ─── Product Data ─────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [

  // ══════════════════════════════════════════════════════════════════════════
  // 1. BALLOON KINGDOM: POP & LEARN ✅ (Live — fully researched)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'balloon-kingdom',
    name: 'Balloon Kingdom: Pop & Learn',
    packageName: 'com.gprstech.ballonpop',
    tagline: 'Where Little Fingers Pop, Learn & Smile!',
    shortDescription:
      'Safe, COPPA-compliant educational balloon-popping game for toddlers and preschoolers — 100% offline, zero ads tracking.',
    description:
      'Balloon Kingdom is the safe, sensory-friendly, and educational balloon-popping adventure designed specifically for toddlers and preschoolers. Pop colorful balloons to learn ABCs, 123s, colors, and phonics — completely offline, with gentle chimes, a puppy companion named Barnaby, and not a single piece of personal data collected. Built under Google Play Designed for Families and COPPA guidelines.',
    category: 'game',
    status: 'live',
    platforms: ['android'],
    icon: '/products/balloon-kingdom/icon.png',
    screenshots: [
      '/products/balloon-kingdom/screenshot-1.png',
      '/products/balloon-kingdom/screenshot-2.png',
      '/products/balloon-kingdom/screenshot-3.png',
      '/products/balloon-kingdom/screenshot-4.png',
    ],
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.gprstech.ballonpop',
    lastUpdated: '2026-09-11',
    features: [
      '🛡️ 100% Kid Safe — COPPA & Google Play Families compliant',
      '🔒 Zero personal data collection — nothing leaves the device',
      '✈️ 100% Offline — works fully in Airplane Mode',
      '🔤 ABCs & Phonics — 26 interactive letter levels with phonetic audio',
      '🔢 123s & Counting — numbers 1–20 with sequential challenges',
      '🎨 Colors & Shapes — 8 rainbow colors + geometric shape recognition',
      '🧘 Sensory & Calm Mode — no timers, no game over, zero pressure',
      '🔒 Math-gated parental controls — parents stay in control',
      '🌍 6 magical worlds with 120+ levels',
      '🐶 Barnaby the puppy companion throughout the journey',
    ],
    privacyPolicy: {
      effectiveDate: '2026-09-11',
      dataCollected: [],   // ZERO — no PII, no device IDs, no location, no microphone
      thirdParties: [],    // no third-party SDKs that collect data
      retentionPolicy:
        'All game progress is stored exclusively on-device using Android SharedPreferences. No data is transmitted to any server, third party, or cloud service at any time.',
      deletionInstructions:
        'Option 1: Open the app → tap the Parent Shield icon → solve the math equation → tap "Reset Progress". Option 2: Go to Android Settings → Apps → Balloon Kingdom: Pop & Learn → Storage → Clear Storage / Clear Data.',
      contactEmail: 'gprspradeep@gmail.com',
      lastReviewed: '2026-09-11',
      coppaCompliant: true,
      gdprCompliant: true,
    },
    faq: [
      {
        question: 'Is Balloon Kingdom safe for toddlers?',
        answer:
          'Yes. Built under Google Play Designed for Families and fully COPPA compliant. Zero personal data is collected, all ads are G-rated family-safe with no behavioral profiling, and all external links are placed behind a Math Gate that only an adult can solve.',
      },
      {
        question: 'Does the game work without internet?',
        answer:
          'Yes. All game content is bundled inside the app. Balloon Kingdom works fully in Airplane Mode — no Wi-Fi or mobile data is needed to play.',
      },
      {
        question: 'Are there in-app purchases?',
        answer:
          'No pay-to-win mechanics. All companions, worlds, and themes unlock by earning stars through play. There are no hidden purchases.',
      },
      {
        question: 'How do parents access settings?',
        answer:
          'Tap the Parent Shield icon on the main screen. Solve the age-appropriate math equation to open the Parent Dashboard where you can manage progress, accessibility options, and reset data.',
      },
      {
        question: 'What is Sensory & Calm mode?',
        answer:
          'A no-timer, no-score, no-failure floating balloon mode with gentle ambient chimes. Designed for sensory-sensitive and neurodiverse learners who benefit from open-ended, non-pressured play.',
      },
      {
        question: 'What age group is the game designed for?',
        answer:
          'Primarily ages 2–6 (toddlers and preschoolers). Sensory & Calm mode suits younger toddlers (1–3) while ABC, 123, and Color modes are designed for preschoolers (3–6).',
      },
      {
        question: 'How do I delete all game data?',
        answer:
          'Inside the app: Parent Shield → math gate → Reset Progress. Or: Android Settings → Apps → Balloon Kingdom → Storage → Clear Data.',
      },
    ],
    supportEmail: 'gprspradeep@gmail.com',
    relatedProducts: ['block-puzzle', 'road-rush'],
    publishedAt: '2026-09-11',
    isPublished: true,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 2. BLOCK PUZZLE: GROW TREES ✅ (Live / Staged)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'block-puzzle',
    name: 'Block Puzzle: Grow Trees',
    packageName: 'com.gprstech.blockpuzzle',
    tagline: 'Small Moves. Big Fun. Clear Lines & Grow Your Garden!',
    shortDescription:
      'Relaxing wooden block puzzle game. Clear lines, earn seeds, plant vibrant flowers, and bloom your dream garden 100% offline.',
    description:
      'Block Puzzle: Grow Trees blends timeless block-fitting puzzle mechanics with a relaxing garden-building journey. Fit wooden and jewel blocks into the grid, clear full rows and columns to harvest Garden Seeds, and nurture blooming flowers and thriving trees. With a stress-free zen mode, gentle nature soundscapes, no pressure timers, and complete offline capability, it is the ultimate brain-relaxing experience for puzzle enthusiasts of all ages.',
    category: 'game',
    status: 'live',
    platforms: ['android'],
    icon: '/products/block-puzzle/icon.png',
    screenshots: [
      '/products/block-puzzle/screenshot-2.png',
      '/products/block-puzzle/screenshot-3.png',
      '/products/block-puzzle/screenshot-4.png',
      '/products/block-puzzle/screenshot-1.png',
    ],
    featureGraphic: '/products/block-puzzle/feature-graphic.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gprstech.blockpuzzle',
    lastUpdated: '2026-09-25',
    features: [
      '🌱 Garden Bloom Mode — Harvest seeds by clearing lines to grow blooming flowers and lush trees',
      '🪵 Timeless Grid Mechanics — Intuitive drag-and-drop block placement on a handcrafted wooden grid',
      '🧘 No Timers, Zero Pressure — Play at your own pace with zen acoustic soundscapes',
      '✨ Combo Multipliers — Clear multiple lines simultaneously for massive seed rewards',
      '✈️ 100% Offline Play — No Wi-Fi or mobile data needed; enjoy anywhere, anytime',
      '🧠 Brain Training & Relaxation — Sharpens spatial awareness and strategic thinking',
      '🎨 Soothing Nature Aesthetics — Lush forest backgrounds with tactile block drop haptics',
    ],
    privacyPolicy: {
      effectiveDate: '2026-09-20',
      dataCollected: [],
      thirdParties: [
        {
          name: 'Google Mobile Ads (AdMob)',
          purpose: 'Family-safe banner and rewarded video ads with personalized ad consent toggles',
          privacyUrl: 'https://policies.google.com/technologies/ads',
        },
        {
          name: 'Google Play Services',
          purpose: 'Optional cloud save sync, achievements, and core Android runtime services',
          privacyUrl: 'https://policies.google.com/privacy',
        },
      ],
      retentionPolicy:
        'All gameplay data, puzzle scores, and garden progress are retained exclusively on your mobile device via Android SharedPreferences. No personal profiles, passwords, or tracking records are stored on remote servers.',
      deletionInstructions:
        'To erase all game progress, high scores, and unlocked gardens, open Android Settings > Apps > Block Puzzle: Grow Trees > Storage > Clear Storage / Clear Data. This immediately wipes all local records.',
      contactEmail: 'gprspradeep@gmail.com',
      lastReviewed: '2026-09-27',
      coppaCompliant: false,
      gdprCompliant: true,
    },
    faq: [
      {
        question: 'How do I earn seeds to grow my garden?',
        answer:
          'Every full horizontal or vertical line cleared gives you 3 Garden Seeds. Clearing multiple lines simultaneously gives bonus seeds that accelerate your tree and flower growth!',
      },
      {
        question: 'Can I play Block Puzzle offline?',
        answer:
          'Yes! The entire game, including all puzzle grids and garden progression, is completely playable offline in Airplane Mode without any internet connection.',
      },
      {
        question: 'Are there any timers or time limits?',
        answer:
          'No! Block Puzzle: Grow Trees is designed as a relaxing, meditative puzzle. Take as much time as you need to plan your moves.',
      },
      {
        question: 'How do I reset my game progress?',
        answer:
          'You can reset your progress either through the in-game Settings menu or via Android Settings > Apps > Block Puzzle: Grow Trees > Storage > Clear Data.',
      },
      {
        question: 'Are ads intrusive?',
        answer:
          'No, ads are kept unobtrusive to maintain a calming experience. Rewarded videos are strictly optional and only play if you choose to watch them for bonus boosts.',
      },
    ],
    supportEmail: 'gprspradeep@gmail.com',
    relatedProducts: ['balloon-kingdom', 'road-rush'],
    publishedAt: '2026-09-25',
    isPublished: true,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 3. ROAD RUSH: RIDE DELHI NCR ✅ (Live / Staged)
  // ══════════════════════════════════════════════════════════════════════════
  {
    id: 'road-rush',
    name: 'Road Rush: Ride Delhi NCR',
    packageName: 'com.gprstech.roadrush',
    tagline: 'Explore • Race • Compete • Upgrade across Delhi, Noida & Gurugram!',
    shortDescription:
      'High-speed highway racing game through iconic Delhi NCR landmarks. Race AI drivers, conquer 20 challenges, and unlock superbikes and hypercars.',
    description:
      'Road Rush: Ride Delhi NCR puts you in the driver seat for high-octane street and highway racing across the National Capital Region. Race down the wide lanes of the Noida-Greater Noida Expressway, weave through Cyber City Gurugram traffic, and zoom past India Gate and the illuminated Signature Bridge. Featuring 20 tactical challenge missions, intense CPU rival duels, an adrenaline-pumping Endless highway mode, and a deep garage upgrade system for motorcycles and supercars.',
    category: 'game',
    status: 'live',
    platforms: ['android'],
    icon: '/products/road-rush/icon.png',
    screenshots: [
      '/products/road-rush/screenshot-3.png',
      '/products/road-rush/screenshot-4.png',
      '/products/road-rush/screenshot-5.png',
      '/products/road-rush/screenshot-1.png',
      '/products/road-rush/screenshot-2.png',
    ],
    featureGraphic: '/products/road-rush/feature-graphic.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gprstech.roadrush',
    lastUpdated: '2026-09-25',
    features: [
      '🏎️ Iconic NCR Landmarks — Race past India Gate, Signature Bridge, Delhi Metro, and Cyber Hub Gurugram',
      '🏁 3 Thrilling Modes — 20 Mission Challenges, Rival CPU Duels, and Endless Highway Traffic Riding',
      '🏍️ Superbikes & Hypercars — Unlock, tune, and customize high-performance motorcycles and exotic cars',
      '⚡ Nitro Boost & Drift Handling — Master drift corners and trigger nitro for blisteringly fast overtaking',
      '🌧️ Dynamic Weather & Lighting — Realistic neon night reflections, wet asphalt physics, and sunset drives',
      '🕹️ Intuitive Controls — Customizable tilt steering, on-screen touch buttons, and haptic rumble',
      '✈️ Offline Play — Race CPU challenges and endless highway without an active internet connection',
    ],
    privacyPolicy: {
      effectiveDate: '2026-09-20',
      dataCollected: [],
      thirdParties: [
        {
          name: 'Google Mobile Ads (AdMob)',
          purpose: 'Non-disruptive banner ads and optional rewarded video ads for in-game garage rewards',
          privacyUrl: 'https://policies.google.com/technologies/ads',
        },
        {
          name: 'Google Play Games Services',
          purpose: 'Optional cloud leaderboard achievements and profile sync',
          privacyUrl: 'https://policies.google.com/privacy',
        },
      ],
      retentionPolicy:
        'Garage unlocks, stage progression, and vehicle modifications are saved locally to your device storage. Diagnostic logs generated during unexpected crashes are automatically scrubbed and deleted after 90 days.',
      deletionInstructions:
        'You can delete all saved vehicles, coins, and records at any time by going to Android Settings > Apps > Road Rush: Ride Delhi NCR > Storage > Clear Storage / Clear Data.',
      contactEmail: 'gprspradeep@gmail.com',
      lastReviewed: '2026-09-27',
      coppaCompliant: false,
      gdprCompliant: true,
    },
    faq: [
      {
        question: 'What game modes are available in Road Rush?',
        answer:
          'Road Rush includes three distinct game modes: 20 Challenges (progressive checkpoint missions), Race vs CPU (head-to-head duels against competitive AI racers), and Endless Race (survival traffic riding where you aim for the highest distance score).',
      },
      {
        question: 'Can I play Road Rush without internet access?',
        answer:
          'Yes! All tracks, challenges, and garage upgrades are accessible 100% offline. An internet connection is only needed if you choose to watch rewarded videos for bonus coins.',
      },
      {
        question: 'What vehicles can I drive?',
        answer:
          'You can unlock and customize high-speed sports bikes, touring motorcycles, street racers, and exotic supercars in your Garage with custom colorways and performance upgrades.',
      },
      {
        question: 'How do I control my vehicle?',
        answer:
          'You can switch between Gyroscope (tilt device to steer) and on-screen Touch buttons in the Settings menu at any time.',
      },
      {
        question: 'How do I reset my progress or coins?',
        answer:
          'Go to Android Settings > Apps > Road Rush: Ride Delhi NCR > Storage > Clear Data. This restores the game to a fresh installation state.',
      },
    ],
    supportEmail: 'gprspradeep@gmail.com',
    relatedProducts: ['balloon-kingdom', 'block-puzzle'],
    publishedAt: '2026-09-25',
    isPublished: true,
  },
];
