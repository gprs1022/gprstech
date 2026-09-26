import type { TeamMember } from '../types';
import profileImg from '../assets/profiles/profile.png';
import person1 from '../assets/profiles/person1.jpg';
import person2 from '../assets/profiles/person2.jpg';
import person3 from '../assets/profiles/person3.jpg';
import person4 from '../assets/profiles/person4.jpg';
import person5 from '../assets/profiles/person5.jpg';
import person6 from '../assets/profiles/person6.jpg';
import person7 from '../assets/profiles/person7.jpg';
import person8 from '../assets/profiles/person8.jpg';
import person9 from '../assets/profiles/person9.jpg';
import person10 from '../assets/profiles/person10.jpg';

import culture1 from '../assets/profiles/culture1.jpg';
import culture2 from '../assets/profiles/culture2.jpg';
import culture3 from '../assets/profiles/culture3.jpg';
import culture4 from '../assets/profiles/culture4.jpg';
import culture5 from '../assets/profiles/culture5.jpg';

export const CULTURE_PHOTOS = [
  { id: 'c1', url: culture1, caption: 'Collaborative code and design sprint' },
  { id: 'c2', url: culture2, caption: 'Creative brainstorming and storyboarding' },
  { id: 'c3', url: culture3, caption: 'Engineering sync & architecture review' },
  { id: 'c4', url: culture4, caption: 'Studio celebration & milestone demo' },
  { id: 'c5', url: culture5, caption: 'Community & creative team meetup' }
];

export const TEAM_MEMBERS: TeamMember[] = [
  // --- Leadership & Architecture ---
  {
    id: 'pradeep-singh',
    name: 'Pradeep Singh',
    role: 'Founder, Software Engineer & Creative Director',
    department: 'Leadership',
    status: 'Founder & Principal',
    photo: profileImg,
    bio: 'Multi-disciplinary founder steering GPRS Tech with hands-on cross-platform mobile engineering (Flutter / Android), modern web platforms, and 3D digital animation storytelling.',
    detailedBio: [
      'Pradeep leads GPRS Tech with hands-on architecture, engineering, and artistic direction. Having developed mobile tools with offline SQLite resilience and real-time Firebase backends, he operates at the direct intersection of code reliability and visual narrative.',
      'In 2024–2026, Pradeep established the creative animation channel ToonAcharya, mastering 3D character staging, Blender pipeline workflows, and retention-focused video pacing on YouTube.',
      'He is committed to transparent client communication, honest attribution, and delivering clean, maintainable codebases owned 100% by the client.'
    ],
    capabilities: [
      'Flutter & Dart Mobile Architecture',
      'Native Android Development (Kotlin/Java)',
      'React 19 & TypeScript Web Engineering',
      'Offline Caching & SQLite Database Design',
      '2D & 3D Character Animation (Blender / After Effects)',
      'High-Retention Video Editing & Sound Design'
    ],
    socialLinks: [
      { label: 'Personal Portfolio', url: 'https://gprspradeep.netlify.app' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/company/gprstech' },
      { label: 'X (@gprstech)', url: 'https://x.com/gprstech' },
      { label: 'YouTube (@ToonAcharya)', url: 'https://www.youtube.com/@ToonAcharya' }
    ],
    keyContributions: [
      { project: 'THE SPRS Mobile Platform', role: 'Lead Android Architect' },
      { project: 'Mobimist Mobile Experience', role: 'Cross-platform Flutter Engineer' },
      { project: 'ToonAcharya Animation Showcase', role: 'Creator & 3D Animator' },
      { project: 'GPRS Tech Brand Web Platform', role: 'Full-Stack Designer & Engineer' }
    ]
  },
  {
    id: 'principal-architect',
    name: 'Pradeep Singh',
    role: 'Principal Systems & Technical Architect',
    department: 'Leadership',
    status: 'Founder & Principal',
    photo: profileImg,
    bio: 'Oversees high-level system topology, multi-tier database caching contracts, security protocols, and client platform scalability.',
    detailedBio: [
      'Directly verifies schema integrity, API backward-compatibility, and modular architecture across all production projects.'
    ],
    capabilities: [
      'Clean Architecture & Repository Pattern',
      'Scalable Microservices Topology',
      'Security Audits & Data Encryption',
      'CI/CD DevOps & Release Governance'
    ],
    socialLinks: [
      { label: 'Founder Portfolio', url: 'https://gprspradeep.netlify.app' }
    ],
    keyContributions: [
      { project: 'SmartAgri IoT Monitor', role: 'Core System Topology' },
      { project: 'Apex CRM Web Suite', role: 'Architectural Blueprint' }
    ]
  },

  // --- Mobile & Web Engineering ---
  {
    id: 'lead-flutter-engineer',
    name: 'Pradeep Singh',
    role: 'Lead Flutter & Android Engineer',
    department: 'Engineering',
    status: 'Founder & Principal',
    photo: profileImg,
    bio: 'Specializes in high-performance Flutter mobile architecture, sound null-safe Dart, 60fps/120fps Impeller rendering, and native Kotlin platform channels.',
    detailedBio: [
      'Engineers mission-critical mobile applications that run smoothly across varying Android OEM devices, screen aspect ratios, and battery states.'
    ],
    capabilities: [
      'Flutter 3.24+ & Dart 3.5+ Null Safety',
      'Native Android Platform Channels (Kotlin)',
      'Bloc & Riverpod State Management',
      'Hardware Sensor & BLE Interfacing'
    ],
    socialLinks: [
      { label: 'Explore Mobile Portfolio', url: '/portfolio/apps' }
    ],
    keyContributions: [
      { project: 'SmartAgri IoT Field App', role: 'Lead Mobile Engineer' },
      { project: 'Mobimist Consumer App', role: 'Flutter UI & State Architecture' }
    ]
  },
  {
    id: 'dev-akhilesh',
    name: 'Akhilesh Sharma',
    role: 'Senior Android & Kotlin Developer',
    department: 'Engineering',
    status: 'Independent Collaborator',
    photo: person1,
    bio: 'Native Android engineer with expertise in Kotlin Coroutines, Jetpack Compose, and custom camera hardware bridges.',
    detailedBio: ['Deep specialization in background telemetry, Bluetooth Low Energy protocols, and device battery optimization.'],
    capabilities: ['Kotlin Jetpack Compose', 'Coroutines & Flow', 'Bluetooth LE Bridges', 'Camera2 API'],
    socialLinks: [{ label: 'Mobile Apps', url: '/portfolio/apps' }],
    keyContributions: [{ project: 'SmartAgri IoT Monitor', role: 'Hardware Bridge Engineer' }]
  },
  {
    id: 'dev-avantika',
    name: 'Avantika Giri',
    role: 'Full-Stack Web & React Engineer',
    department: 'Engineering',
    status: 'Independent Collaborator',
    photo: person2,
    bio: 'Builds responsive enterprise portals and interactive client dashboards using React 19, TypeScript, and modern state architectures.',
    detailedBio: ['Focuses on end-to-end type safety, micro-frontend performance, and accessible design system implementation.'],
    capabilities: ['React 19 & Next.js', 'Strict TypeScript', 'Tailwind & CSS Modules', 'State Machines'],
    socialLinks: [{ label: 'Web Portfolio', url: '/portfolio/websites' }],
    keyContributions: [{ project: 'Apex CRM Web Suite', role: 'Frontend Architecture' }]
  },
  {
    id: 'dev-bismay',
    name: 'Bismay Dutta',
    role: 'Backend & Cloud Systems Engineer',
    department: 'Engineering',
    status: 'Independent Collaborator',
    photo: person3,
    bio: 'Scalable backend API developer specializing in Node.js, Express, Google Firebase, and PostgreSQL serverless microservices.',
    detailedBio: ['Designs high-throughput RESTful endpoints, JWT security layers, and asynchronous worker tasks.'],
    capabilities: ['Node.js & Express', 'Firebase Cloud Functions', 'PostgreSQL & Drift', 'API Gateways'],
    socialLinks: [{ label: 'Architecture Docs', url: '/docs' }],
    keyContributions: [{ project: 'Field Telemetry Sync', role: 'Cloud API Engineer' }]
  },
  {
    id: 'dev-damini',
    name: 'Damini Joshi',
    role: 'Offline-First SQLite Database Specialist',
    department: 'Engineering',
    status: 'Independent Collaborator',
    photo: person4,
    bio: 'Designs local-first embedded database schemas, transactional caching logic, and deterministic conflict resolution algorithms.',
    detailedBio: ['Ensures zero data loss in mobile applications deployed across offline agricultural and industrial operations.'],
    capabilities: ['SQLite Schema Migrations', 'ACID Transactions', 'Sync Reconciliation', 'Data Encryption'],
    socialLinks: [{ label: 'SQLite Guide', url: '/docs/flutter-offline-sqlite-architecture' }],
    keyContributions: [{ project: 'SmartAgri Offline Cache', role: 'Lead Database Specialist' }]
  },

  // --- 3D Animation & CGI Production ---
  {
    id: 'lead-3d-artist',
    name: 'Pradeep Singh',
    role: 'Lead 3D Character Artist & Modeler',
    department: 'Animation',
    status: 'Founder & Principal',
    photo: profileImg,
    bio: 'Designs expressive 3D character meshes, stylized quad topology, organic anatomy sculpts, and production-ready asset models in Blender 3D.',
    detailedBio: [
      'Crafts character turnarounds and stylized folklore concepts that balance traditional cultural warmth with modern digital aesthetics.'
    ],
    capabilities: [
      'Blender 4.0+ Quad Mesh Modeling',
      'Organic Character Sculpting & Retopology',
      'Stylized Texture Painting & Hair Grooming',
      'Turnaround Studies & Model Sheets'
    ],
    socialLinks: [
      { label: 'ToonAcharya 3D YouTube', url: 'https://www.youtube.com/@ToonAcharya' }
    ],
    keyContributions: [
      { project: 'Mythos: Echoes of Bharat', role: 'Hero Character Sculptor' },
      { project: 'Village Grandfather Character', role: 'Character Modeler & Groomer' }
    ]
  },
  {
    id: 'anim-deepika',
    name: 'Deepika Singh',
    role: '3D Rigging & Technical Director',
    department: 'Animation',
    status: 'Independent Collaborator',
    photo: person5,
    bio: 'Armature rigging specialist creating expressive facial shape keys, inverse kinematics (IK/FK), and dynamic weight painting.',
    detailedBio: ['Ensures clean mesh deformation across high-tempo running cycles and subtle facial conversational acting.'],
    capabilities: ['Custom Armature Rigs', 'Facial Shape Keys', 'Weight Painting', 'IK/FK Constraints'],
    socialLinks: [{ label: 'Animation WIP', url: '/about/life' }],
    keyContributions: [{ project: 'Hero Character Rigging', role: 'Lead Rigging Specialist' }]
  },
  {
    id: 'anim-devendra',
    name: 'Devendra Shukla',
    role: 'Cinematic Lighting & Lookdev Artist',
    department: 'Animation',
    status: 'Independent Collaborator',
    photo: person6,
    bio: 'Blender Cycles lookdev artist specializing in atmospheric sunset lighting, volumetric sunbeams, and filmic ACEScg color management.',
    detailedBio: ['Composites multi-layer OpenEXR passes into After Effects to produce warm, cinematic storytelling.'],
    capabilities: ['Blender Cycles GPU Rendering', 'Atmospheric Volumetrics', 'Cryptomatte Extraction', 'ACEScg Color'],
    socialLinks: [{ label: 'Lighting Guide', url: '/docs/blender-to-after-effects-pipeline' }],
    keyContributions: [{ project: 'Village Sunset Scene', role: 'Lighting Director' }]
  },
  {
    id: 'anim-garima',
    name: 'Garima Pant',
    role: 'Environment & 3D Prop Modeler',
    department: 'Animation',
    status: 'Independent Collaborator',
    photo: person7,
    bio: 'Crafts rich 3D cultural environments, traditional architectural sets, and textured natural assets.',
    detailedBio: ['Brings depth and realism to animated landscapes with custom procedural shaders and stylized foliage.'],
    capabilities: ['Environment Modeling', 'Procedural Shading', 'Vegetation & Foliage', 'Asset Optimization'],
    socialLinks: [{ label: 'Animation Portfolio', url: '/portfolio/animation' }],
    keyContributions: [{ project: 'Folklore Ancient Temple Set', role: 'Environment Modeler' }]
  },
  {
    id: 'anim-himanshu',
    name: 'Himanshu Manchanda',
    role: 'Storyboard & Concept Artist',
    department: 'Animation',
    status: 'Independent Collaborator',
    photo: person8,
    bio: 'Illustrates dynamic pencil storyboards, animatic timing passes, and visual character expression model sheets.',
    detailedBio: ['Translates initial script outlines into clear visual narrative beats before full 3D production begins.'],
    capabilities: ['Pencil Storyboarding', 'Color Roughs', 'Animatic Timing', 'Expression Model Sheets'],
    socialLinks: [{ label: 'Production Pipeline', url: '/about/life' }],
    keyContributions: [{ project: 'Mythos Storyboard Animatics', role: 'Lead Storyboard Artist' }]
  },

  // --- Motion Graphics & Creative Storytelling ---
  {
    id: 'lead-motion-designer',
    name: 'Pradeep Singh',
    role: 'Lead Motion Graphics Designer',
    department: 'Motion & Creative',
    status: 'Founder & Principal',
    photo: profileImg,
    bio: 'Choreographs kinetic typography, 3D camera staging, and slick UI micro-interactions that make digital software feel alive and tactile.',
    detailedBio: [
      'Transforms static feature mockups into fluid 60fps animations that clearly explain product value to prospective customers.'
    ],
    capabilities: [
      'Adobe After Effects Motion Choreography',
      'Kinetic Typography & Vector Motion',
      'UI Micro-Interactions & Lottie Export',
      'Promotional Video Identity Systems'
    ],
    socialLinks: [
      { label: 'Explore Motion Portfolio', url: '/portfolio/animation' }
    ],
    keyContributions: [
      { project: 'SaaS Explainer Video Reels', role: 'Motion Choreographer' },
      { project: 'GPRS Tech Motion Branding', role: 'Creative Animator' }
    ]
  },
  {
    id: 'motion-anurag',
    name: 'Anurag Verma',
    role: 'High-Retention Video Editor',
    department: 'Motion & Creative',
    status: 'Independent Collaborator',
    photo: person9,
    bio: 'Masters rhythmic video pacing, auditory pattern interrupts, and visual hooks to maximize audience watch time on YouTube.',
    detailedBio: ['Analyzes retention drop-off graphs to craft dynamic edits that convert passive viewers into qualified leads.'],
    capabilities: ['Adobe Premiere Pro', 'Retention Curve Pacing', 'Pattern Interrupts', 'YouTube Packaging'],
    socialLinks: [{ label: 'Read Retention Article', url: '/blog/retention-engineered-animation' }],
    keyContributions: [{ project: 'ToonAcharya Video Pipeline', role: 'Lead Video Editor' }]
  },
  {
    id: 'motion-shreya',
    name: 'Shreya Kapoor',
    role: 'Audio Engineer & Sound Designer',
    department: 'Motion & Creative',
    status: 'Independent Collaborator',
    photo: person10,
    bio: 'Designs immersive soundscapes, Foley audio effects, and kinetic audio cues that anchor visual motion design.',
    detailedBio: ['Synthesizes cinematic ambient sound, crisp UI click effects, and balanced voiceover EQ mastering.'],
    capabilities: ['Foley & Sound Effects', 'Dialogue Mastering & EQ', 'Auditory Tension & Drops', 'Sound Design Systems'],
    socialLinks: [{ label: 'Creative Studio', url: '/services/creative' }],
    keyContributions: [{ project: 'Folklore Animated Teaser', role: 'Sound Designer' }]
  }
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return TEAM_MEMBERS.find((m) => m.id === id);
};

export const getTeamMembersByDepartment = (dept: TeamMember['department']): TeamMember[] => {
  return TEAM_MEMBERS.filter((m) => m.department === dept);
};
