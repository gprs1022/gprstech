export interface EcosystemNode {
  id: string;
  label: string;
  category: 'technology' | 'creative' | 'ai';
  role: string;
  details: string[];
}

export interface SolutionItem {
  id: string;
  goal: string;
  headline: string;
  description: string;
  deliverables: string[];
  ctaText: string;
  path: string;
  accent: 'blue' | 'cyan' | 'green' | 'violet';
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  focusAreas: string[];
  icon: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  project: string;
  projectSlug?: string;
  rating: number;
}

export interface HomeFaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'pricing' | 'process' | 'capabilities' | 'legal';
}

// 03. TRUST & METRICS (Verified internal & project metrics)
export const TRUST_METRICS = [
  { value: '24+', label: 'Projects & Products Shipped' },
  { value: '8+', label: 'Core Engineering Disciplines' },
  { value: '6+', label: 'Years Combined Experience' },
  { value: '10+', label: 'Industries Served' },
];

export const TRUST_PROJECTS = [
  { name: 'SmartAgri IoT Monitor', type: 'IoT & Mobile Suite' },
  { name: 'Apex CRM Web Suite', type: 'Enterprise Web Platform' },
  { name: 'THE SPRS Mobile', type: 'Native Android Utility' },
  { name: 'Mobimist Cross-Platform', type: 'Flutter & Cloud Firestore' },
  { name: 'ToonAcharya 3D', type: 'Animation & Narrative Storytelling' },
  { name: 'Career Charm', type: 'Student Guidance Platform' },
];

// 06. CONNECTED DIGITAL ECOSYSTEM NODES
export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 'mobile',
    label: 'Mobile Applications',
    category: 'technology',
    role: 'Native & Cross-Platform',
    details: ['Flutter Engine', 'Native Android (Kotlin)', 'iOS Compilation', 'Offline SQLite', 'FCM Push Notifications'],
  },
  {
    id: 'web',
    label: 'Web Platforms',
    category: 'technology',
    role: 'Modern Reactive Frontends',
    details: ['React 19 & Next.js', 'TypeScript Architecture', 'Design Tokens', 'Server-Side Rendering', 'Technical SEO'],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    category: 'technology',
    role: 'Scalable Microservices',
    details: ['Node.js & Express', 'RESTful API Gateways', 'JWT Authentication', 'Webhook Pipelines', 'Rate Limiting'],
  },
  {
    id: 'database',
    label: 'Database & Cloud',
    category: 'technology',
    role: 'Persistence & Real-Time Sync',
    details: ['MongoDB NoSQL', 'MySQL Relational', 'Firebase Suite', 'Cloud Firestore', 'Cloud Functions'],
  },
  {
    id: 'ai-agents',
    label: 'AI & Automation',
    category: 'ai',
    role: 'Intelligent Workflows',
    details: ['LLM Integration', 'Retrieval-Augmented Gen (RAG)', 'Autonomous Agents', 'Operational Automation', 'Semantic Search'],
  },
  {
    id: 'ecommerce',
    label: 'Digital Commerce',
    category: 'technology',
    role: 'Transactional Storefronts',
    details: ['Secure Payment Gateways', 'Dynamic Catalogs', 'Order Management', 'Checkout Micro-interactions'],
  },
  {
    id: 'animation-3d',
    label: '3D Animation & CGI',
    category: 'creative',
    role: 'Cinematic Storytelling',
    details: ['Blender 3D Modeling', 'Armature Rigging', 'Photorealistic Lighting', 'CGI Product Renders', 'Narrative Worlds'],
  },
  {
    id: 'motion-video',
    label: 'Motion Graphics & Video',
    category: 'creative',
    role: 'Retention & Product Demos',
    details: ['Adobe After Effects', 'Premiere Pro Editing', 'Explainer Videos', 'Kinetic Typography', 'Social Reels & Shorts'],
  },
];

// 10. AI & AUTOMATION CARDS
export const AI_SOLUTIONS = [
  {
    id: 'ai-integration',
    title: 'AI Feature Integration',
    subtitle: 'Enhance Existing Software',
    description: 'Embed intelligent NLP, predictive categorization, and automated data extraction directly into existing web apps and mobile interfaces.',
    tags: ['LLM APIs', 'Feature Augmentation', 'Structured Output'],
  },
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents',
    subtitle: 'Workflows on Autopilot',
    description: 'Design deterministic agentic workflows that inspect data, make tool-assisted decisions, execute multi-step APIs, and report back to users.',
    tags: ['Multi-Tool Agents', 'Task Automation', 'Guardrails'],
  },
  {
    id: 'rag-knowledge',
    title: 'Knowledge Base & RAG',
    subtitle: 'Private Context Grounding',
    description: 'Connect internal business documentation, manuals, customer logs, and product data to vector databases for hallucination-free querying.',
    tags: ['Vector DBs', 'Semantic Search', 'Grounding'],
  },
  {
    id: 'business-automation',
    title: 'Operational Automation',
    subtitle: 'Zero Manual Repetition',
    description: 'Build automated bridges between customer requests, CRM pipelines, webhook handlers, and background processing engines.',
    tags: ['Webhook Bridges', 'CRM Automation', 'ETL Pipelines'],
  },
];

// 11. SOLUTIONS BY BUSINESS GOAL
export const BUSINESS_SOLUTIONS: SolutionItem[] = [
  {
    id: 'launch-startup',
    goal: 'Launch a Startup',
    headline: 'From Concept to MVP in Record Time',
    description: 'Architecture, UX wireframing, Flutter mobile app, and backend setup engineered for rapid user validation and investor demos.',
    deliverables: ['Product Scope & Architecture', 'Clickable Prototype', 'Cross-Platform MVP', 'App Store Ready'],
    ctaText: 'Explore Startup MVP',
    path: '/contact?goal=startup',
    accent: 'blue',
  },
  {
    id: 'digitize-business',
    goal: 'Digitize Operations',
    headline: 'Modernize Legacy Workflows',
    description: 'Custom internal software, responsive administrative dashboards, and automated tools designed to eliminate spreadsheet bottlenecks.',
    deliverables: ['Custom Web Portals', 'Role-Based Access Control', 'Automated Reporting', 'Data Migration'],
    ctaText: 'Explore Enterprise Tools',
    path: '/contact?goal=digital-tools',
    accent: 'cyan',
  },
  {
    id: 'sell-online',
    goal: 'Sell Online & Scale',
    headline: 'Frictionless Digital Commerce',
    description: 'Fast, secure online stores and mobile commerce applications with frictionless checkout, payment gateway hooks, and catalog sync.',
    deliverables: ['Responsive Storefront', 'Payment Integration', 'Order Management API', 'High-Converting UI'],
    ctaText: 'Explore Commerce',
    path: '/contact?goal=ecommerce',
    accent: 'blue',
  },
  {
    id: 'add-ai',
    goal: 'Adopt Applied AI',
    headline: 'Practical Business Intelligence',
    description: 'Integrate conversational assistants, private document search (RAG), and smart classification without disruptive overhauls.',
    deliverables: ['Custom AI Agents', 'Private Document Search', 'Workflow Automation', 'API Middleware'],
    ctaText: 'Explore AI Systems',
    path: '/contact?goal=ai',
    accent: 'violet',
  },
  {
    id: 'build-brand',
    goal: 'Build Brand Authority',
    headline: 'Memorable Online Presence',
    description: 'High-impact corporate web platforms, modern design token systems, and kinetic motion assets that build immediate client trust.',
    deliverables: ['Custom Web Design', 'Design Token System', 'Kinetic Micro-Interactions', 'SEO Optimization'],
    ctaText: 'Explore Brand Platforms',
    path: '/contact?goal=branding',
    accent: 'green',
  },
  {
    id: 'explain-product',
    goal: 'Explain a Product',
    headline: 'High-Retention Video & 3D',
    description: '2D/3D animated explainer videos and product demos that break down complex software features into engaging, understandable narratives.',
    deliverables: ['Script & Storyboarding', '2D/3D Character Animation', 'Motion Graphics', 'Sound Design & Mastering'],
    ctaText: 'Explore Explainer Videos',
    path: '/contact?goal=explainer',
    accent: 'green',
  },
];

// 12. INDUSTRIES
export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    description: 'Frictionless mobile shopping experiences, real-time inventory management, and high-converting product visualization.',
    focusAreas: ['Mobile Commerce Apps', 'Product 3D Renders', 'Checkout Flow Optimization', 'Promo Reels'],
    icon: 'shopping-bag',
  },
  {
    id: 'iot-agriculture',
    name: 'Agriculture & IoT',
    description: 'Sensor data visualization, offline-capable mobile dashboards, and live telemetry for field operators.',
    focusAreas: ['Sensor Data Ingestion', 'Offline SQLite Mobile Apps', 'Device Telemetry Portals', 'Automated Alerts'],
    icon: 'sprout',
  },
  {
    id: 'fintech',
    name: 'FinTech & Banking',
    description: 'High-security transactional interfaces, biometric mobile authentication, and intuitive visual financial ledgers.',
    focusAreas: ['Biometric App Security', 'ACID SQL Databases', 'Transaction Portals', 'Explainer Animation'],
    icon: 'shield-check',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Wellness',
    description: 'HIPAA-conscious appointment booking, telemedicine mobile portals, and patient habit tracking.',
    focusAreas: ['Cross-Platform Patient Apps', 'Secure Cloud Sync', 'Patient Education Videos', 'Clean UI'],
    icon: 'activity',
  },
  {
    id: 'saas-startups',
    name: 'SaaS & Enterprise Tools',
    description: 'Multi-tenant web applications, complex data table dashboards, and rapid MVP iteration cycles.',
    focusAreas: ['React/Next.js Dashboards', 'RESTful API Backends', 'AI Agent Helpers', 'Product Onboarding Videos'],
    icon: 'cpu',
  },
  {
    id: 'media-entertainment',
    name: 'Media & Entertainment',
    description: 'Character-driven 2D/3D animation, episodic folklore storytelling, and social content editing.',
    focusAreas: ['2D/3D Character Rigging', 'YouTube Channel Production', 'VFX Compositing', 'Cinematic Sound Design'],
    icon: 'film',
  },
];

// 15. WHY GPRS TECH — 4 PILLARS
export const WHY_GPRS_PILLARS = [
  {
    number: '01',
    title: 'One Partner. Two Studios.',
    subtitle: 'Technology + Creative Under One Roof',
    description: 'Building software and creating the videos or graphics to promote it usually requires two separate agencies. GPRS Tech bridges engineering and creative production seamlessly.',
    accent: 'blue',
  },
  {
    number: '02',
    title: 'Built Around Real Outcomes',
    subtitle: 'Problem First, Not Tech Dogma',
    description: 'We never force a trendy technology just because it is hyped. We select frameworks based on performance ceilings, real-world maintainability, and total cost of ownership.',
    accent: 'cyan',
  },
  {
    number: '03',
    title: 'Direct Founder-Led Execution',
    subtitle: 'No Junior Layers or Account Runarounds',
    description: 'Every project receives direct technical direction and architecture oversight from founder Pradeep Singh. You communicate with builders who understand your exact code and frames.',
    accent: 'green',
  },
  {
    number: '04',
    title: 'Built for What Comes Next',
    subtitle: 'Maintainable, Scalable Architecture',
    description: 'From modular Dart widget trees to typed API contracts, your codebase is built with standard conventions so it can effortlessly grow, scale, and evolve long after launch.',
    accent: 'violet',
  },
];

// 18. VERIFIED TESTIMONIALS
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'GPRS Tech delivered our mobile IoT monitor with exceptional offline reliability. The Flutter app runs at a constant 60fps in the field, and local SQLite caching meant zero data loss in poor coverage.',
    author: 'Harish R.',
    role: 'Hardware Lead',
    company: 'AgriTech Systems',
    project: 'SmartAgri IoT Monitor',
    projectSlug: 'smartagri-iot',
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'The dual capability of GPRS Tech was a game changer for us. They engineered our internal CRM dashboard and simultaneously produced a stunning 60-second animated product explainer for our investors.',
    author: 'Vikram S.',
    role: 'Operations Director',
    company: 'Apex Logistics',
    project: 'Apex CRM Web Suite',
    projectSlug: 'apex-crm-suite',
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'Pradeep\'s deep expertise in native Android optimization ensured THE SPRS app passed strict memory profiling tests. Communication was transparent, milestone-driven, and on-time.',
    author: 'Devendra K.',
    role: 'Product Manager',
    company: 'SPRS Platform',
    project: 'THE SPRS Mobile Application',
    projectSlug: 'the-sprs-mobile-platform',
    rating: 5,
  },
];

// 20. FREQUENTLY ASKED QUESTIONS (Comprehensive Buyer FAQ)
export const HOME_FAQS: HomeFaqItem[] = [
  {
    id: 'faq-1',
    category: 'pricing',
    question: 'How much does it cost to build a mobile app or web platform?',
    answer: 'Project costs depend on scope, target platforms (iOS, Android, Web), backend complexity, and integrations. A focused MVP typically ranges from targeted scope sprints to comprehensive multi-month roadmaps. We provide transparent, itemized fixed-price quotes or monthly sprint models after an initial technical discovery session.',
  },
  {
    id: 'faq-2',
    category: 'pricing',
    question: 'How long does a typical product development project take?',
    answer: 'A focused MVP or production-ready mobile application typically takes 4 to 8 weeks from design sign-off to store submission. Comprehensive enterprise platforms or multi-platform systems take 8 to 14 weeks. Every project is divided into bi-weekly demo sprints with tangible milestones.',
  },
  {
    id: 'faq-3',
    category: 'capabilities',
    question: 'Can GPRS Tech build both our software and our animated product video?',
    answer: 'Yes! That is our primary differentiator. Rather than hiring a separate software agency and a disconnected video production house, our Technology Studio and Creative Studio work in tandem. As developers finalize features, our animators use production UI assets to create marketing explainers, reels, and tutorials.',
  },
  {
    id: 'faq-4',
    category: 'capabilities',
    question: 'Can you integrate AI or build AI agents into our existing software?',
    answer: 'Absolutely. We help businesses integrate practical LLM capabilities, setup Retrieval-Augmented Generation (RAG) over private company documents, and deploy deterministic AI agents that execute repeatable business workflows via standard APIs.',
  },
  {
    id: 'faq-5',
    category: 'process',
    question: 'Can you build an MVP for an early-stage startup?',
    answer: 'Yes, we specialize in high-velocity MVP launches. We help founders prioritize core features, strip away unnecessary complexity, and deliver a polished, investor-ready mobile app or web platform built on solid architecture that can scale post-funding.',
  },
  {
    id: 'faq-6',
    category: 'process',
    question: 'Can you collaborate with our existing in-house development team?',
    answer: 'Yes. We regularly augment existing engineering teams—handling dedicated mobile Flutter builds, complex 3D animation assets, or specialized frontend architecture while adhering to your git workflows, PR reviews, and coding conventions.',
  },
  {
    id: 'faq-7',
    category: 'legal',
    question: 'Do you sign Non-Disclosure Agreements (NDAs)?',
    answer: 'Yes. We protect all client intellectual property and confidential business plans with mutual NDAs prior to any proprietary discovery or architectural deep-dive.',
  },
  {
    id: 'faq-8',
    category: 'legal',
    question: 'Who owns the source code and assets after completion?',
    answer: 'You own 100% of all intellectual property, source code, design files, animations, and compiled binaries upon milestone completion. We provide comprehensive documentation and repository transfer.',
  },
  {
    id: 'faq-9',
    category: 'process',
    question: 'Do you provide ongoing maintenance and post-launch support?',
    answer: 'Yes. We provide flexible post-launch SLA support, operating system updates (iOS/Android major releases), dependency auditing, cloud server monitoring, and iterative feature development retainers.',
  },
  {
    id: 'faq-10',
    category: 'process',
    question: 'Do you work with international clients outside India?',
    answer: 'Yes. We partner with founders, businesses, and agency partners worldwide across North America, Europe, the Middle East, and Asia-Pacific with asynchronous sprint demos, transparent Slack/Discord channels, and flexible overlap hours.',
  },
];
