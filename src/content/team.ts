import type { TeamMember } from '../types';
import profileImg from '../assets/profiles/profile.png';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'pradeep-singh',
    name: 'Pradeep Singh',
    role: 'Founder, Software Engineer & Creative Director',
    status: 'Founder & Principal',
    photo: profileImg,
    bio: 'Software engineer and creative director with multidisciplinary craft in cross-platform mobile apps (Flutter / Android), modern web platforms, and 2D/3D digital animation storytelling.',
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
  }
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return TEAM_MEMBERS.find((m) => m.id === id);
};
