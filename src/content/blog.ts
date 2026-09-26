import type { BlogPost } from '../types';
import bannerImg from '../assets/brand/banner.png';
import image1 from '../assets/thumbnails/image1.png';
import image2 from '../assets/thumbnails/image2.png';
import image3 from '../assets/thumbnails/image3.png';

export const BLOG_POSTS: BlogPost[] = [
  // Articles
  {
    id: 'post-1',
    slug: 'why-technology-needs-storytelling',
    title: 'Why Great Technology Needs Creative Storytelling',
    summary: 'Building powerful mobile apps or web software is only half the battle. Without visual clarity, motion, and compelling storytelling, brilliant software remains invisible.',
    excerpt: 'Building a powerful mobile app or website is only half the battle. Without visual clarity, motion, and compelling storytelling, brilliant software remains invisible.',
    author: 'Pradeep Singh',
    publishedDate: 'February 18, 2026',
    updatedDate: 'February 24, 2026',
    readTime: '4 min read',
    type: 'article',
    typeLabel: 'Article',
    tags: ['Strategy', 'UI/UX', 'Storytelling', 'Startup Growth'],
    coverImage: bannerImg,
    tableOfContents: [
      { id: 'invisible-software', title: 'The Problem with Invisible Software' },
      { id: 'dual-studio-philosophy', title: 'The Dual-Studio Philosophy' },
      { id: 'unifying-code-and-art', title: 'Unifying Code and Art in Practice' },
      { id: 'actionable-takeaways', title: 'Actionable Takeaways for Founders' },
    ],
    content: [
      'In today’s crowded digital landscape, hundreds of mobile apps and SaaS web products launch every single day. Most fail not due to algorithmic bugs or backend crashes, but because they fail to communicate their concrete value to the humans they were built to serve.',
      'At GPRS Tech, we founded our studio around a foundational principle: Technology and Creativity are not separate silos — they are two halves of the same product journey.',
      'When mobile engineers and motion animators work side-by-side, magic happens in the details. Onboarding funnels become effortless narratives. The product demo video explains a complex IoT telemetry architecture in 45 seconds flat. The visual brand identity communicates the engineering precision humming beneath the interface.',
      'From Idea to Impact requires code that runs flawlessly and storytelling that moves people. In this article, we look at how combining cross-platform engineering with cinematic motion design sets breakout products apart.'
    ],
    relatedServices: [
      { title: 'Flutter App Development', path: '/services/flutter-app-development' },
      { title: 'Motion Graphics & UI Animation', path: '/services/motion-graphics' },
    ],
    relatedProjects: [
      { title: 'Mythos: Echoes of Bharat', path: '/portfolio/mythos-folklore' },
      { title: 'SmartAgri IoT Monitor', path: '/portfolio/smartagri-iot' },
    ],
    publishable: true,
  },
  {
    id: 'post-2',
    slug: 'flutter-vs-native-android-guide',
    title: 'Flutter vs Native Android in 2026: Choosing the Right Stack for Your MVP',
    summary: 'A practical architectural breakdown comparing Flutter and native Android for early-stage startups, product leaders, and scale-ups.',
    excerpt: 'A practical architectural breakdown comparing Flutter and native Android for early-stage startups and established businesses.',
    author: 'Pradeep Singh',
    publishedDate: 'January 28, 2026',
    readTime: '6 min read',
    type: 'article',
    typeLabel: 'Article',
    tags: ['Flutter', 'Android', 'Mobile Architecture', 'Dart'],
    coverImage: image2,
    tableOfContents: [
      { id: 'decision-matrix', title: 'The 2026 Decision Matrix' },
      { id: 'flutter-advantages', title: 'Where Flutter Excels: Unified Code & Speed' },
      { id: 'native-advantages', title: 'When Native Android (Kotlin) is Essential' },
      { id: 'our-recommendation', title: 'Architectural Recommendation' },
    ],
    content: [
      'Choosing between Flutter and native Android development is one of the most consequential decisions an engineering founder or tech lead makes at the beginning of product conception.',
      'Flutter offers unmatched iteration velocity: a single sound-null-safe Dart codebase, sub-second Hot Reload, and 60fps/120fps rendering powered by Google\'s Impeller graphics engine. For 90% of startup MVPs, enterprise internal tools, and client-facing dashboards, Flutter drastically reduces capital expenditure and maintenance complexity.',
      'However, native Android (Kotlin) remains the gold standard when deep low-level hardware interfacing, continuous background foreground services with custom battery management, or proprietary NDK C++ libraries are central to your value proposition.',
      'Our team evaluates memory profiles, hardware bridges, and team bandwidth before committing client projects to a stack.'
    ],
    relatedServices: [
      { title: 'Cross-Platform Mobile Engineering', path: '/services/mobile-engineering' },
      { title: 'Flutter App Development', path: '/services/flutter-app-development' },
    ],
    relatedProjects: [
      { title: 'SmartAgri IoT Monitor', path: '/portfolio/smartagri-iot' },
    ],
    publishable: true,
  },

  // Tutorials & Guides
  {
    id: 'post-3',
    slug: 'building-offline-first-flutter-apps-sqlite',
    title: 'Tutorial: Building an Offline-First Architecture in Flutter with SQLite',
    summary: 'Step-by-step guide to architecting resilient local-first mobile applications with SQLite local caching and graceful background sync.',
    excerpt: 'Step-by-step guide to architecting resilient local-first mobile applications with SQLite local caching and graceful background sync.',
    author: 'Pradeep Singh',
    publishedDate: 'February 10, 2026',
    readTime: '8 min read',
    type: 'tutorial',
    typeLabel: 'Tutorial & Guide',
    tags: ['Flutter', 'SQLite', 'Offline First', 'Architecture'],
    coverImage: image3,
    tableOfContents: [
      { id: 'why-offline-first', title: 'Why Offline-First Matters' },
      { id: 'schema-design', title: 'Designing the SQLite Schema' },
      { id: 'repository-layer', title: 'Implementing the Repository Pattern' },
      { id: 'sync-reconciliation', title: 'Handling Sync & Conflicts' },
    ],
    codeSnippets: [
      {
        language: 'dart',
        caption: 'SQLite Database Helper Initialization',
        code: `class DatabaseService {
  static final DatabaseService _instance = DatabaseService._internal();
  factory DatabaseService() => _instance;
  DatabaseService._internal();

  static Database? _database;

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDatabase();
    return _database!;
  }

  Future<Database> _initDatabase() async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, 'app_cache.db');
    return await openDatabase(
      path,
      version: 1,
      onCreate: (db, version) async {
        await db.execute('''
          CREATE TABLE telemetry_logs (
            id TEXT PRIMARY KEY,
            payload TEXT NOT NULL,
            synced INTEGER NOT NULL DEFAULT 0,
            created_at INTEGER NOT NULL
          )
        ''');
      },
    );
  }
}`
      }
    ],
    content: [
      'In enterprise utility and field inspection apps, reliable connectivity cannot be assumed. Building an offline-first architecture guarantees that users can record data, interact with complex forms, and navigate workflows with zero latency, even in deep rural environments or underground facilities.',
      'We adopt a repository-first pattern where local SQLite acts as the single source of truth for the presentation layer. UI components never query external REST endpoints directly; they observe local reactive streams or query the SQLite cache.',
      'When connectivity is restored, an asynchronous background sync worker evaluates pending mutation records, serializes batch payloads, and handles timestamp conflicts using deterministic last-write-wins or server-side merge rules.',
      'Explore the code snippet above for our standard database helper template used in production Flutter apps.'
    ],
    relatedServices: [
      { title: 'Flutter App Development', path: '/services/flutter-app-development' },
      { title: 'Cross-Platform Mobile Engineering', path: '/services/mobile-engineering' },
    ],
    relatedProjects: [
      { title: 'SmartAgri IoT Monitor', path: '/portfolio/smartagri-iot' },
    ],
    publishable: true,
  },

  // Project Breakdowns
  {
    id: 'post-4',
    slug: 'mythos-echoes-of-bharat-breakdown',
    title: 'Project Breakdown: Producing Mythos: Echoes of Bharat in Blender 3D',
    summary: 'A deep look into the production pipeline, character modeling, stylized rigging, and dynamic lighting behind our cultural 3D animated series.',
    excerpt: 'A deep look into the production pipeline, character modeling, stylized rigging, and dynamic lighting behind our cultural 3D animated series.',
    author: 'Pradeep Singh',
    publishedDate: 'December 15, 2025',
    readTime: '7 min read',
    type: 'breakdown',
    typeLabel: 'Project Breakdown',
    tags: ['3D Animation', 'Blender', 'Character Design', 'Storyboarding'],
    coverImage: image1,
    tableOfContents: [
      { id: 'concept-storyboard', title: 'From Mythological Concept to Storyboard' },
      { id: 'character-modeling', title: 'Stylized 3D Character Modeling & Topology' },
      { id: 'lighting-color', title: 'Atmospheric Sunset Lighting & Volumetrics' },
      { id: 'render-compositing', title: 'Cycles Rendering and Compositing' },
    ],
    content: [
      'Mythos: Echoes of Bharat represents our studio\'s commitment to reimagining legendary cultural narratives through modern cinematic 3D animation.',
      'Production began with extensive historical and mythological reference gathering, translating traditional lore into a distinct stylized aesthetic balancing painterly textures with expressive digital character designs.',
      'In Blender 3D, our character rigs were engineered for high expressiveness — allowing fluid run cycles, subtle facial gestures, and dramatic physical combat poses. Using custom quad topology, the meshes maintain clean deformation across all joints.',
      'Lighting the signature sunset sequence required a combination of warm directional sun lamps, subtle atmospheric dust volumetrics, and secondary rim lights to carve our heroes against dramatic Himalayan horizons.',
      'The result is a visually captivating animated teaser that proves how small agile studios can produce cinematic-grade storytelling.'
    ],
    relatedServices: [
      { title: '3D Animation & CGI Production', path: '/services/3d-animation-cgi' },
      { title: 'Motion Graphics & UI Animation', path: '/services/motion-graphics' },
    ],
    relatedProjects: [
      { title: 'Mythos: Echoes of Bharat', path: '/portfolio/mythos-folklore' },
    ],
    publishable: true,
  },
  {
    id: 'post-5',
    slug: 'retention-engineered-animation',
    title: 'How 3D Motion & Sound Design Transform Product Demos and Video Retention',
    summary: 'Why static screencasts lose 70% of viewers in 15 seconds, and how kinetic motion graphics turn passive viewers into qualified buyers.',
    excerpt: 'Why static screencasts lose 70% of viewers in 15 seconds, and how kinetic motion graphics turn passive viewers into qualified buyers.',
    author: 'Pradeep Singh',
    publishedDate: 'December 02, 2025',
    readTime: '5 min read',
    type: 'article',
    typeLabel: 'Article',
    tags: ['3D Animation', 'Motion Graphics', 'Video Retention', 'YouTube'],
    coverImage: bannerImg,
    tableOfContents: [
      { id: 'retention-problem', title: 'The 15-Second Screencast Drop-Off' },
      { id: 'motion-choreography', title: 'Visual Hooks & Motion Choreography' },
      { id: 'sound-design', title: 'The Overlooked Power of Audio Interrupts' },
      { id: 'conversion-results', title: 'Measured Impact on Conversion' },
    ],
    content: [
      'Screen recordings with monotone voiceovers are where SaaS conversion funnels go to die. Modern audiences are conditioned by high-tempo cinematic video and dynamic gaming teasers.',
      'By bringing 3D perspective depth, dynamic camera pans, rhythmic sound cues, and kinetic typography into product demos, you elevate software features into visceral experiences.',
      'In our animation work at ToonAcharya and GPRS Tech, we analyze audience retention graphs down to the second. By introducing visual hooks and audio pattern interrupts every 4 to 6 seconds, average view durations can double.',
      'Learn how to choreograph UI animation that explains value without boring your prospective customers.'
    ],
    relatedServices: [
      { title: 'Motion Graphics & UI Animation', path: '/services/motion-graphics' },
      { title: '3D Animation & CGI Production', path: '/services/3d-animation-cgi' },
    ],
    relatedProjects: [
      { title: 'Mythos: Echoes of Bharat', path: '/portfolio/mythos-folklore' },
    ],
    publishable: true,
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find((p) => p.slug === slug);
};

export const getBlogPostsByCategory = (category: BlogPost['type']): BlogPost[] => {
  return BLOG_POSTS.filter((p) => p.type === category);
};
