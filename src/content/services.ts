import type { ServiceItem, CombinedEngagement } from '../types';

export const TECHNOLOGY_SERVICES: ServiceItem[] = [
  {
    id: 'mobile-app-development',
    studio: 'technology',
    title: 'Mobile App Development',
    shortDesc: 'Native & cross-platform Flutter and Android applications engineered for fluid performance.',
    fullDesc:
      'We design and build clean, scalable mobile apps for Android and iOS using Flutter and Android/Kotlin. From initial architecture and responsive UI to offline caching, push notifications, and API integrations, we deliver dependable apps built to scale.',
    targetAudience: 'Founders building an MVP, established businesses expanding to mobile, and startups needing dependable apps.',
    typicalProblem: 'Apps that are sluggish, difficult to maintain, or inconsistent across mobile operating systems.',
    deliverables: [
      'Cross-platform Flutter or native Android codebase',
      'Secure authentication & state management',
      'REST/GraphQL API & database integrations (Firebase/SQLite)',
      'Store-ready release builds (APK/AAB/IPA) with release documentation'
    ],
    toolsAndTech: ['Flutter', 'Dart', 'Android/Kotlin', 'Firebase', 'SQLite', 'REST APIs'],
    relevantPortfolioCategory: 'apps',
    iconName: 'Smartphone',
    badge: 'Flagship Core'
  },
  {
    id: 'websites-and-web-apps',
    studio: 'technology',
    title: 'Websites & Web Applications',
    shortDesc: 'Fast, responsive web applications, high-converting landing pages, and interactive dashboards.',
    fullDesc:
      'We develop modern, responsive web experiences using React, TypeScript, and Vite. Whether you need a high-impact business site, a client dashboard, or a custom tool, we focus on speed, accessible markup, and smooth responsiveness.',
    targetAudience: 'Businesses launching a new brand, companies needing web tools, or teams replacing outdated web platforms.',
    typicalProblem: 'Websites that look dated, load slowly on mobile, or fail to clearly convert visitors into qualified leads.',
    deliverables: [
      'Production-ready React/TypeScript web application',
      'Mobile-first responsive layouts across all device sizes',
      'Technical SEO tags, canonicals, and OpenGraph social cards',
      'Automated deployment setup with analytics & contact flows'
    ],
    toolsAndTech: ['React', 'TypeScript', 'Vite', 'HTML5/CSS3', 'Node.js', 'Vercel/Netlify'],
    relevantPortfolioCategory: 'websites',
    iconName: 'Globe'
  },
  {
    id: 'custom-software',
    studio: 'technology',
    title: 'Custom Software & Internal Tools',
    shortDesc: 'Tailored administrative portals, workflow automation, and custom business utilities.',
    fullDesc:
      'Off-the-shelf software often forces businesses to compromise. We build bespoke web applications, role-based admin panels, and backend systems designed specifically around your operational workflows and data requirements.',
    targetAudience: 'Growing businesses seeking to automate manual spreadsheets, track operations, or integrate disconnected software.',
    typicalProblem: 'Clunky manual spreadsheets, disconnected third-party tools, and lack of consolidated operational visibility.',
    deliverables: [
      'Role-based dashboard & administrative interface',
      'Custom database models & data querying endpoints',
      'Third-party software & API integration bridges',
      'Role permissions & security audit logging'
    ],
    toolsAndTech: ['Node.js', 'REST APIs', 'PostgreSQL / MongoDB', 'TypeScript', 'Docker'],
    relevantPortfolioCategory: 'websites',
    iconName: 'Cpu'
  },
  {
    id: 'ui-ux-product-design',
    studio: 'technology',
    title: 'UI/UX & Product Design',
    shortDesc: 'User journey mapping, wireframing, high-fidelity prototypes, and cohesive design systems.',
    fullDesc:
      'Great software begins with deep understanding of user behavior. We design intuitive interfaces with clean information hierarchy, interactive Figma prototypes, and modular design tokens that translate seamlessly into engineering.',
    targetAudience: 'Startups planning a new digital product or companies redesigning existing apps for better user retention.',
    typicalProblem: 'Complex, confusing navigation, high user drop-off, and developer friction without clear design specifications.',
    deliverables: [
      'Interactive Figma prototypes & wireframe specs',
      'Reusable design token library (colors, typography, components)',
      'Responsive mobile & desktop UI screen kits',
      'Developer handoff documentation & asset packages'
    ],
    toolsAndTech: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    relevantPortfolioCategory: 'apps',
    iconName: 'Layout'
  },
  {
    id: 'practical-ai-automation',
    studio: 'technology',
    title: 'Practical AI & Automation',
    shortDesc: 'Smart workflows, LLM API integrations, and practical business process automations.',
    fullDesc:
      'We incorporate practical AI capabilities into digital products where they generate real business value — from automated content pipelines and intelligent search to customer inquiry routing and process automations.',
    targetAudience: 'Companies looking to streamline customer interactions, automate repetitive digital workflows, or augment tools with AI.',
    typicalProblem: 'Repetitive manual tasks eating up valuable staff hours or software lacking modern intelligent capabilities.',
    deliverables: [
      'AI model/API integration (OpenAI, Gemini, Anthropic)',
      'Automated background webhook & processing pipeline',
      'Prompt-engineered workflows with graceful fallbacks',
      'Operational monitoring & usage cost controls'
    ],
    toolsAndTech: ['Gemini API', 'OpenAI API', 'Python', 'Node.js', 'Webhooks'],
    relevantPortfolioCategory: 'websites',
    iconName: 'Sparkles'
  },
  {
    id: 'maintenance-and-improvements',
    studio: 'technology',
    title: 'Maintenance & Code Improvements',
    shortDesc: 'Code refactoring, performance audits, bug resolution, and continuous feature evolution.',
    fullDesc:
      'Software requires ongoing care. We provide structured maintenance, dependency upgrades, bug diagnosis, and performance optimization to ensure your mobile apps and websites remain secure and fast.',
    targetAudience: 'Teams with existing apps that need performance tuning, SDK updates, or ongoing technical support.',
    typicalProblem: 'Accumulated technical debt, broken third-party libraries after OS updates, and sluggish performance.',
    deliverables: [
      'Comprehensive codebase health & performance audit',
      'Framework & dependency version migrations',
      'Critical bug fixes & crash reduction reports',
      'Continuous feature iterations on agreed cycles'
    ],
    toolsAndTech: ['Git', 'Flutter SDK Upgrades', 'CI/CD Pipelines', 'Performance Profilers'],
    relevantPortfolioCategory: 'apps',
    iconName: 'Wrench'
  }
];

export const CREATIVE_SERVICES: ServiceItem[] = [
  {
    id: '2d-animation',
    studio: 'creative',
    title: '2D Animation & Storytelling',
    shortDesc: 'Character-driven 2D animation, motion stories, and stylized narrative content.',
    fullDesc:
      'Engaging 2D animation breathes life into brands. We develop original character animations, digital shorts, and story sequences with rich expression and dynamic timing that captivate audiences.',
    targetAudience: 'Content creators, brands, and entertainment channels aiming to entertain, educate, and stand out.',
    typicalProblem: 'Static visuals failing to hold viewer attention in crowded social feeds.',
    deliverables: [
      'Concept sketches & character model sheets',
      'Full scene animation rendered in 1080p/4K',
      'Synchronized sound effects & voiceover integration',
      'Exported master video files for multiple platform ratios'
    ],
    toolsAndTech: ['Adobe Animate', 'After Effects', 'Photoshop', 'Illustrator'],
    clientProvides: ['Character concept or brand brief', 'Voiceover audio (if applicable)', 'Target duration and aspect ratio'],
    relevantPortfolioCategory: 'animation',
    iconName: 'Film',
    badge: 'Creative Showcase'
  },
  {
    id: '3d-animation',
    studio: 'creative',
    title: '3D Animation & Modeling',
    shortDesc: 'Cinematic 3D scenes, stylized 3D assets, and dynamic environment animation.',
    fullDesc:
      'We create 3D animations, stylized 3D models, and dynamic product sequences that elevate your brand presentation into a tactile, cinematic dimension.',
    targetAudience: 'Brands needing high-end visual product showcases, 3D character narratives, or immersive visuals.',
    typicalProblem: '2D flat graphics unable to convey the dimensional depth and premium quality of a product.',
    deliverables: [
      '3D modeling, texturing, and lighting setups',
      'Custom camera staging & cinematic animation',
      'Photorealistic or stylized renders in master quality',
      'Composited video with sound effects'
    ],
    toolsAndTech: ['Blender', 'Cinema 4D', 'After Effects', 'Substance Painter'],
    relevantPortfolioCategory: 'animation',
    iconName: 'Box'
  },
  {
    id: 'motion-graphics',
    studio: 'creative',
    title: 'Motion Graphics',
    shortDesc: 'Kinetic typography, animated logo reveals, and sophisticated brand graphic motion.',
    fullDesc:
      'Transform static graphic assets into energetic motion. We produce kinetic typography, seamless transitions, UI animations, and animated logo signatures for video intros and digital marketing.',
    targetAudience: 'Marketing teams, YouTube creators, and corporate brands establishing premium brand identity motion.',
    typicalProblem: 'Boring, static brand presentations that feel unpolished in modern digital channels.',
    deliverables: [
      'Brand motion guidelines & animated logo stings',
      'Kinetic typography sequences for promos',
      'Reusable motion graphic template files (MOGRTs)',
      'Transparent alpha channel overlays for video editors'
    ],
    toolsAndTech: ['After Effects', 'Illustrator', 'Premiere Pro'],
    relevantPortfolioCategory: 'animation',
    iconName: 'Activity'
  },
  {
    id: 'explainer-product-videos',
    studio: 'creative',
    title: 'Explainer & Product Videos',
    shortDesc: 'Concise visual walkthroughs that explain complex tech features in simple, compelling stories.',
    fullDesc:
      'Explain what your product does in 60 to 90 seconds. We combine screen recordings, motion graphics, and animated UI elements to demonstrate product value clearly and convert prospects.',
    targetAudience: 'SaaS companies, mobile app developers, and tech startups preparing for launch or funding.',
    typicalProblem: 'Prospective customers failing to understand product features from text alone.',
    deliverables: [
      'Structured script & visual storyboard',
      'Product UI screen choreography & zoom highlights',
      'Voiceover sync, background music & sound design',
      'High-res video master ready for landing pages and pitches'
    ],
    toolsAndTech: ['After Effects', 'Premiere Pro', 'Figma', 'Screen Recording Tools'],
    relevantPortfolioCategory: 'animation',
    iconName: 'PlayCircle'
  },
  {
    id: 'youtube-editing',
    studio: 'creative',
    title: 'YouTube Video Editing',
    shortDesc: 'Retention-focused video editing, sound design, and pacing tailored to YouTube audiences.',
    fullDesc:
      'We edit long-form YouTube videos crafted for maximum audience retention. Using snappy cuts, dynamic B-roll, on-screen callouts, sound design, and narrative pacing, we keep viewers watching to the end.',
    targetAudience: 'Tech reviewers, educational creators, entrepreneurs, and channels building their subscriber base.',
    typicalProblem: 'High viewer drop-off in the first 60 seconds due to slow pacing and weak visual hooks.',
    deliverables: [
      'Full video edit with color grading & audio enhancement',
      'Retention-engineered visual hooks & pattern interrupts',
      'Curated sound effects & royalty-free music mix',
      'YouTube chapter markers & metadata suggestions'
    ],
    toolsAndTech: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Audition'],
    relevantPortfolioCategory: 'animation',
    iconName: 'Tv'
  },
  {
    id: 'shorts-reels-ads',
    studio: 'creative',
    title: 'Shorts, Reels & Ad Editing',
    shortDesc: 'High-energy vertical video content engineered for algorithmic virality on TikTok, Reels, and Shorts.',
    fullDesc:
      'Vertical short-form video requires immediate visual hooks. We create high-engagement 9:16 videos with animated captions, eye-catching transitions, and energetic pacing designed for organic discovery.',
    targetAudience: 'Brands and creators running ad campaigns or growing organic reach on Instagram, YouTube Shorts, and TikTok.',
    typicalProblem: 'Slow-starting videos that users swipe away from in the first 2 seconds.',
    deliverables: [
      'Vertical 9:16 high-impact video edit',
      'Dynamic styled animated captions with keyword highlights',
      'Punchy sound effects and trending audio sync',
      'Multiple variation hooks for paid ad testing'
    ],
    toolsAndTech: ['Premiere Pro', 'CapCut Pro', 'After Effects'],
    relevantPortfolioCategory: 'animation',
    iconName: 'Video'
  },
  {
    id: 'branding-graphic-design',
    studio: 'creative',
    title: 'Branding & Graphic Design',
    shortDesc: 'Visual identity design, logos, color palettes, and digital brand style guides.',
    fullDesc:
      'Your visual identity is the foundation of customer trust. We craft memorable logos, distinctive typography pairings, curated color systems, and digital brand kits that unify your web and social presence.',
    targetAudience: 'New ventures needing an original identity or existing brands looking for a modern visual refresh.',
    typicalProblem: 'Inconsistent branding across digital touchpoints creating an amateur impression.',
    deliverables: [
      'Primary, secondary, and mark logo variations (SVG/PNG)',
      'Curated brand color palette & font pairings',
      'Comprehensive Brand Style Guide PDF',
      'Social media banner and avatar kit'
    ],
    toolsAndTech: ['Illustrator', 'Photoshop', 'Figma'],
    relevantPortfolioCategory: 'websites',
    iconName: 'Palette'
  },
  {
    id: 'thumbnails-social-creatives',
    studio: 'creative',
    title: 'Thumbnails & Social Creatives',
    shortDesc: 'Click-optimized YouTube thumbnails, ad graphics, and promotional social creative kits.',
    fullDesc:
      'A great video is useless if nobody clicks. We design high-CTR YouTube thumbnails and social promo banners with bold typography, expressive facial cutouts, and high-contrast color theory.',
    targetAudience: 'YouTubers seeking higher click-through rates and brands running promotional social campaigns.',
    typicalProblem: 'Low click-through rates (CTR) on videos despite quality content.',
    deliverables: [
      'High-CTR YouTube thumbnail designs in 1280x720',
      'A/B test thumbnail variations (color/text hooks)',
      'Social promotional graphics (LinkedIn, X, Instagram)',
      'Layered source PSD/Figma files upon request'
    ],
    toolsAndTech: ['Photoshop', 'Illustrator', 'Lightroom'],
    relevantPortfolioCategory: 'animation',
    iconName: 'Image'
  }
];

export const COMBINED_ENGAGEMENTS: CombinedEngagement[] = [
  {
    id: 'app-mvp-demo',
    title: 'Mobile App MVP + Demo Video',
    tagline: 'Build the product and give it a launch-ready showcase in one unified engagement.',
    servicesIncluded: ['Flutter / Android App Development', 'Product UI/UX Design', '3D / 2D Explainer Video', 'Store Release Assets'],
    idealFor: 'Founders launching an app to early adopters, angels, or app stores.',
    outcome: 'A working app in testers’ hands and a compelling video that converts landing page visitors into downloads.'
  },
  {
    id: 'brand-website-launch',
    title: 'Brand Identity + Modern Web Platform',
    tagline: 'Establish your brand visual identity and deploy a responsive web presence.',
    servicesIncluded: ['Brand Visual Identity & Guidelines', 'React / TypeScript Web Development', 'Motion Graphics & Logo Reveal', 'Technical SEO Setup'],
    idealFor: 'Emerging tech startups, creative agencies, and modern service businesses.',
    outcome: 'A distinct brand style and a fast, high-converting digital storefront that makes a memorable impression.'
  },
  {
    id: 'saas-explainer-content',
    title: 'Web Platform + Video Explainer & Social Kit',
    tagline: 'Showcase complex product features clearly and build organic audience momentum.',
    servicesIncluded: ['Web Application / Dashboard', '60s Animated Product Explainer', 'Short-form Social Reels / Shorts', 'High-CTR Thumbnails'],
    idealFor: 'Software teams needing both functional tools and recurring customer acquisition assets.',
    outcome: 'An operational web platform paired with visual storytelling assets ready for marketing distribution.'
  }
];
