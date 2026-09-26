import type { Project } from '../types';
import brandLogo from '../assets/brand/logo.png';

export const PROJECTS: Project[] = [
  {
    id: 'gprs-tech-web',
    slug: 'gprs-tech-web-platform',
    title: 'GPRS Tech Digital Brand Platform',
    category: 'websites',
    studio: 'technology',
    attribution: 'Internal Project',
    headline: 'High-performance React & TypeScript web platform with custom dual-studio design tokens.',
    summary:
      'The official online headquarters for GPRS Tech. Engineered with React 19, TypeScript, and Vite, featuring an interactive dual-studio experience, custom responsive design tokens, and comprehensive technical SEO.',
    publishable: true,
    featured: true,
    platform: ['Web', 'Responsive Desktop & Mobile'],
    technologies: ['React 19', 'TypeScript', 'Vite', 'CSS Custom Properties', 'React Router'],
    clientOrContext: 'GPRS Tech Internal Studio',
    year: '2026',
    role: ['Product Architecture', 'UI/UX Design', 'Full-stack Frontend', 'Design Tokens', 'Technical SEO'],
    coverImage: '/banner.png',
    problemOrBrief:
      'GPRS Tech required a cohesive digital home to establish its dual identity as both an elite Technology Studio (mobile/web/software) and a dynamic Creative Studio (animation/video/branding) without confusing visitors.',
    goalsAndScope: [
      'Create an immediate, striking first impression using the authoritative electric blue, cyan, and vivid lime green brand identity.',
      'Allow visitors to self-select between Technology and Creative services within seconds.',
      'Provide transparent, honest project attribution across all portfolio entries.',
      'Ensure sub-second page loads, zero runtime errors, and strict WCAG AA accessibility.'
    ],
    processAndDecisions: [
      'Analyzed brand assets (logo.png & banner.png) to extract exact color values and luminous wave motifs.',
      'Built a typed content architecture in TypeScript, isolating data from presentation components for long-term maintainability.',
      'Engineered responsive layouts tested across 360px mobile to 1440px desktop displays.',
      'Implemented accessible focus states, keyboard-traversable navigation, and reduced-motion fallbacks.'
    ],
    deliverables: [
      { title: 'Interactive Multi-route Web App', description: '15 accessible routes covering studio services, category portfolios, about, insights, and contact flow.' },
      { title: 'Unified Design Token Engine', description: 'Scalable CSS variables for typography, elevations, brand gradients, and surface tiers.' },
      { title: 'Responsive Mobile Navigation', description: 'Accessible touch-first navigation drawer with category sub-menus and keyboard traps.' }
    ],
    challengesAndSolutions: [
      {
        challenge: 'Balancing two very distinct studio offerings (engineering vs. creative animation) under one brand umbrella.',
        solution: 'Used visual dual-split cards with distinct brand accent glows (Electric Blue for tech, Vivid Lime Green for creative) united by deep navy backgrounds.'
      }
    ],
    outcome: 'A modern, production-grade website that clearly articulates the "Idea → Product → Story → Growth" thesis.',
    publicUrl: 'https://gprstech.com',
    githubUrl: 'https://github.com/gprspradeep',
    mediaGallery: [
      {
        type: 'image',
        url: '/banner.png',
        caption: 'The official GPRS Tech dual-studio brand composition uniting software engineering with creative storytelling.'
      },
      {
        type: 'image',
        url: brandLogo,
        caption: 'Authoritative circular GPRS Tech 3D mark combining electric blue, organic white, and vivid emerald-to-lime green.'
      }
    ]
  },
  {
    id: 'the-sprs-mobile',
    slug: 'the-sprs-mobile-platform',
    title: 'THE SPRS Mobile Application',
    category: 'apps',
    studio: 'technology',
    attribution: 'Founder Project',
    headline: 'High-performance Android utility app engineered with native performance and clean UI.',
    summary:
      'A streamlined mobile utility application developed for Android by founder Pradeep Singh, focusing on reliable offline workflows, clean layout hierarchy, and responsive local caching.',
    publishable: true,
    featured: true,
    platform: ['Android', 'Mobile'],
    technologies: ['Android SDK', 'Kotlin / Java', 'SQLite', 'Material Design', 'REST APIs'],
    clientOrContext: 'Founder Independent Project',
    year: '2024',
    role: ['Android Engineering', 'UI/UX Layout', 'Database Optimization', 'Release Packaging'],
    coverImage: '/banner.png',
    problemOrBrief:
      'Users needed a rapid mobile application that operated seamlessly in low-connectivity situations with zero UI hitching or background battery drain.',
    goalsAndScope: [
      'Implement native Android architectural patterns for predictable lifecycle management.',
      'Design an uncluttered interface conforming to modern mobile design guidelines.',
      'Optimize database queries for instantaneous search and list rendering.'
    ],
    processAndDecisions: [
      'Selected SQLite with efficient indexing for offline-first data persistence.',
      'Designed responsive XML layouts with clean density independence across diverse screen sizes.',
      'Carried out rigorous memory profiling to eliminate memory leaks and ensure smooth 60fps scrolling.'
    ],
    deliverables: [
      { title: 'Compiled Android Application', description: 'Production-ready release build optimized with Proguard shrinking.' },
      { title: 'Local SQLite Architecture', description: 'Persistent offline storage engine with automated migration schemas.' }
    ],
    challengesAndSolutions: [
      {
        challenge: 'Maintaining instant search responses across large offline datasets on lower-tier Android devices.',
        solution: 'Implemented indexed SQLite query patterns with debounced background thread execution.'
      }
    ],
    outcome: 'Achieved sub-50ms query times and zero crash rates in testing.',
    mediaGallery: [
      {
        type: 'image',
        url: '/banner.png',
        caption: 'Mobile app UI overview showing responsive dashboard layouts and dark mode styling.'
      }
    ]
  },
  {
    id: 'mobimist-flutter-app',
    slug: 'mobimist-mobile-suite',
    title: 'Mobimist Mobile Experience',
    category: 'apps',
    studio: 'technology',
    attribution: 'Founder Project',
    headline: 'Cross-platform mobile application built with Flutter & Firebase backend integration.',
    summary:
      'A cross-platform mobile application engineered by Pradeep Singh using Flutter and Dart. Incorporates Firebase authentication, real-time cloud data sync, and dynamic UI state handling.',
    publishable: true,
    featured: true,
    platform: ['iOS', 'Android', 'Flutter'],
    technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Provider / BLoC'],
    clientOrContext: 'Founder Exploration & Client Solution',
    year: '2024',
    role: ['Cross-platform Flutter Engineering', 'Firebase Integration', 'State Management'],
    coverImage: '/banner.png',
    problemOrBrief:
      'Needed a single codebase that could deploy simultaneously to iOS and Android without sacrificing 60fps animations or native platform feel.',
    goalsAndScope: [
      'Write modular, reusable Dart widget trees with strict state isolation.',
      'Integrate Firebase Authentication (Email/Password & Social OAuth) securely.',
      'Ensure real-time sync with offline caching support.'
    ],
    processAndDecisions: [
      'Adopted Flutter for high-fidelity custom UI components.',
      'Structured application state to gracefully handle network dropouts and auto-sync on reconnect.',
      'Conducted multi-device QA on physical Android and iOS hardware.'
    ],
    deliverables: [
      { title: 'Flutter Multiplatform Codebase', description: 'Clean Dart codebase with unified state management and reusable custom widgets.' },
      { title: 'Cloud Data Pipeline', description: 'Configured Firebase security rules and real-time document listeners.' }
    ],
    outcome: 'Demonstrated unified cross-platform capability with 98% shared code between iOS and Android.',
    mediaGallery: [
      {
        type: 'image',
        url: '/banner.png',
        caption: 'Cross-platform app interface running on modern smartphone hardware.'
      }
    ]
  },
  {
    id: 'career-charm-app',
    slug: 'career-charm-learning-platform',
    title: 'Career Charm Mobile App',
    category: 'apps',
    studio: 'technology',
    attribution: 'Founder Project',
    headline: 'Educational and career guidance mobile tool designed for student empowerment.',
    summary:
      'An educational mobile app developed to help students and job seekers explore career pathways, practice skills, and organize milestones with a clean, friendly interface.',
    publishable: true,
    featured: false,
    platform: ['Android', 'Mobile'],
    technologies: ['Flutter / Android', 'REST API', 'Firebase', 'Clean UI'],
    clientOrContext: 'Founder Project',
    year: '2023',
    role: ['App Development', 'UI Design', 'API Integration'],
    coverImage: '/banner.png',
    problemOrBrief:
      'Students frequently struggle to find structured roadmaps and interview preparation guidance on mobile devices.',
    goalsAndScope: [
      'Provide curated roadmaps and module tracking.',
      'Enable bookmarking and progress monitoring.'
    ],
    processAndDecisions: [
      'Organized UI into clear visual cards with progress indicators.',
      'Integrated lightweight JSON APIs for fast content updates.'
    ],
    deliverables: [
      { title: 'Educational Android App', description: 'Intuitive student career exploration tool.' }
    ],
    outcome: 'Delivered a streamlined learning companion with positive user test feedback.',
    mediaGallery: [
      {
        type: 'image',
        url: '/banner.png',
        caption: 'Learning modules and progress tracking mobile view.'
      }
    ]
  },
  {
    id: 'coffee-buz-concept',
    slug: 'coffee-buz-cafe-experience',
    title: 'Coffee Buz Mobile Concept',
    category: 'apps',
    studio: 'technology',
    attribution: 'Concept or Experiment',
    headline: 'Artisanal coffee ordering and loyalty app UI/UX prototype and mobile design exploration.',
    summary:
      'An interactive mobile UI/UX exploration crafted to test custom order customization flows, interactive cup size selectors, and frictionless checkout interactions.',
    publishable: true,
    featured: false,
    platform: ['Figma', 'Flutter Prototype'],
    technologies: ['Figma', 'Flutter UI', 'Micro-interactions'],
    clientOrContext: 'Studio Concept Exploration',
    year: '2024',
    role: ['UI/UX Design', 'Interactive Prototyping', 'Animation choreography'],
    coverImage: '/banner.png',
    problemOrBrief:
      'Most food and drink ordering apps suffer from tedious checkout steps and uninspired visual design.',
    goalsAndScope: [
      'Design a mouth-watering dark-themed coffee ordering experience.',
      'Create micro-animations for drink temperature and milk selections.'
    ],
    processAndDecisions: [
      'Utilized rich espresso tones accented with warm amber and sleek dark cards.',
      'Prototyped fluid drag-to-add gestures.'
    ],
    deliverables: [
      { title: 'High-fidelity Figma Prototype', description: 'Complete clickable 15-screen customer ordering flow.' },
      { title: 'Flutter UI Implementation', description: 'Interactive demo implementing custom bezier curve transitions.' }
    ],
    challengesAndSolutions: [
      {
        challenge: 'Displaying intricate drink modifier menus without overwhelming user attention.',
        solution: 'Implemented progressive disclosure bottom sheets with instant visual price updates.'
      }
    ],
    outcome: 'Serves as an internal design benchmark for high-touch consumer mobile experiences.',
    mediaGallery: [
      {
        type: 'image',
        url: '/banner.png',
        caption: 'Mobile product layout exploration with interactive beverage modifiers.'
      }
    ]
  },
  {
    id: 'toonacharya-animation',
    slug: 'toonacharya-creative-animation-showcase',
    title: 'ToonAcharya 2D & 3D Animation Showcase',
    category: 'animation',
    studio: 'creative',
    attribution: 'Founder Project',
    headline: 'Dynamic 2D/3D character animation and high-retention video storytelling production.',
    summary:
      'Creative animation and video production created under the ToonAcharya brand, showcasing character animation, cinematic scene pacing, sound design, and digital content mastery.',
    publishable: true,
    featured: true,
    platform: ['YouTube', 'Video', 'Animation'],
    technologies: ['Blender', 'After Effects', 'Premiere Pro', 'Photoshop', 'Audition'],
    clientOrContext: 'Creative Studio Reference / ToonAcharya Channel',
    year: '2024 - 2026',
    role: ['Character Animation', '3D Scene Staging', 'Video Editing', 'Sound Design & Pacing'],
    coverImage: '/banner.png',
    problemOrBrief:
      'Creating engaging animated content that captures both young and mature audiences while sustaining high average view duration on competitive video platforms.',
    goalsAndScope: [
      'Produce rich animated character sequences with lively expressions.',
      'Incorporate punchy cinematic sound design and custom audio cues.',
      'Maintain consistent aesthetic quality across long-form stories and short-form reels.'
    ],
    processAndDecisions: [
      'Drafted detailed storyboards and timing animatics prior to final keyframing.',
      'Used multi-layered After Effects compositing for luminous magical atmospheric effects.',
      'Fine-tuned editorial pacing to minimize viewer drop-off.'
    ],
    deliverables: [
      { title: 'Full Animation Episodes & Shorts', description: 'Multiple rendered animated episodes and vertical shorts in full HD/4K.' },
      { title: 'Sound Design & Compositing Masters', description: 'Multi-stem audio mixes and visual FX composite sequences.' }
    ],
    outcome: 'Established a dedicated audience on YouTube with hundreds of thousands of views and strong subscriber loyalty.',
    demoVideoUrl: 'https://www.youtube.com/@ToonAcharya',
    publicUrl: 'https://www.youtube.com/@ToonAcharya',
    mediaGallery: [
      {
        type: 'image',
        url: '/banner.png',
        caption: 'Creative studio animation production showing 3D character framing and multitrack editing suite.'
      }
    ]
  },
  {
    id: 'segv-tours-app',
    slug: 'segv-tours-experience',
    title: 'SEGV Tours Travel App',
    category: 'apps',
    studio: 'technology',
    attribution: 'Work Completed While Employed',
    headline: 'Travel booking and tour discovery mobile application.',
    summary: 'Travel application experience developed in a professional team capacity.',
    publishable: false, // DRAFT / EXCLUDED PER MASTER.MD INSTRUCTIONS
    featured: false,
    technologies: ['Android', 'REST API'],
    year: '2023',
    role: ['Mobile Engineering'],
    coverImage: '/banner.png',
    problemOrBrief: 'Excluded from public site until explicit client publishing permission is confirmed.',
    goalsAndScope: [],
    processAndDecisions: [],
    deliverables: [],
    mediaGallery: []
  }
];

export const getPublishableProjects = (): Project[] => {
  return PROJECTS.filter((p) => p.publishable);
};

export const getProjectsByCategory = (category: 'apps' | 'websites' | 'animation'): Project[] => {
  return PROJECTS.filter((p) => p.publishable && p.category === category);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return PROJECTS.find((p) => p.slug === slug && p.publishable);
};
