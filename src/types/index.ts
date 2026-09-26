export type StudioType = 'technology' | 'creative';

export type ProjectCategory = 'apps' | 'websites' | 'animation';

export type AttributionType =
  | 'GPRS Tech Client Project'
  | 'Founder Project'
  | 'Work Completed While Employed'
  | 'Internal Project'
  | 'Concept or Experiment';

export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  caption: string;
  thumbnail?: string;
  aspectRatio?: string;
}

export interface ProjectDeliverable {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  studio: StudioType;
  attribution: AttributionType;
  headline: string;
  summary: string;
  publishable: boolean;
  featured: boolean;
  platform?: string[];
  technologies: string[];
  clientOrContext?: string;
  year: string;
  role: string[];
  coverImage: string;
  heroVideo?: string;
  problemOrBrief: string;
  goalsAndScope: string[];
  processAndDecisions: string[];
  deliverables: ProjectDeliverable[];
  challengesAndSolutions?: { challenge: string; solution: string }[];
  outcome?: string;
  publicUrl?: string;
  githubUrl?: string;
  demoVideoUrl?: string;
  mediaGallery: ProjectMedia[];
}

export interface ServiceItem {
  id: string;
  slug?: string;
  studio: StudioType;
  title: string;
  shortDesc: string;
  fullDesc: string;
  targetAudience: string;
  typicalProblem: string;
  deliverables: string[];
  toolsAndTech: string[];
  clientProvides?: string[];
  relevantPortfolioCategory: ProjectCategory;
  iconName: string;
  badge?: string;
  publishable?: boolean;
  detailedCase?: {
    scopeOverview: string;
    phases: { title: string; desc: string }[];
    sampleDeliverables: string[];
  };
}

export interface CombinedEngagement {
  id: string;
  title: string;
  tagline: string;
  servicesIncluded: string[];
  idealFor: string;
  outcome: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: 'general' | 'technology' | 'creative' | 'process';
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  timeline?: string;
  message: string;
}

/* ==========================================================================
   EXPANSION TYPES (Per docs/enhancement.md)
   ========================================================================== */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  status: 'Founder & Principal' | 'Independent Collaborator' | 'Project Contributor';
  photo: string;
  bio: string;
  detailedBio: string[];
  capabilities: string[];
  socialLinks: { label: string; url: string }[];
  keyContributions: { project: string; role: string }[];
}

export interface LifeEntry {
  id: string;
  title: string;
  category: 'Development Experiment' | 'Animation WIP' | 'Design Exploration' | 'Learning Note' | 'Production Process';
  date: string;
  explanation: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  caption: string;
  relatedSlug?: string;
  relatedType?: 'project' | 'blog' | 'service';
}

export interface CareerOpening {
  id: string;
  slug: string;
  title: string;
  department: 'Technology Studio' | 'Creative Studio' | 'General';
  engagementType: 'Full-time' | 'Contract / Project-based' | 'Collaborator';
  type?: string;
  location: string;
  shortDesc: string;
  overview?: string;
  responsibilities: string[];
  requirements?: string[];
  requiredSkills: string[];
  optionalSkills?: string[];
  experienceRequired?: string;
  compensation?: string;
  postedDate?: string;
  publishable: boolean;
  applicationInstructions?: string;
}

export type TechCategory =
  | 'mobile'
  | 'mobile-core'
  | 'web-backend'
  | 'database-cloud'
  | 'ai-automation'
  | 'creative-tools'
  | 'version-control';

export interface TechnologyItem {
  id: string;
  name: string;
  category: TechCategory;
  categoryLabel: string;
  shortDesc: string;
  whatItIsUsedFor: string;
  experienceLevel: 'Established Production' | 'Core Discipline' | 'Active Exploration';
  relatedService: string;
  relatedServicePath: string;
  relatedProject?: string;
  relatedProjectPath?: string;
  iconName?: string;
}

export type BlogCategory = 'article' | 'tutorial' | 'breakdown';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  excerpt: string;
  content: string[];
  author: string;
  authorPhoto?: string;
  publishedDate: string;
  updatedDate?: string;
  readTime: string;
  type: BlogCategory;
  typeLabel: 'Article' | 'Tutorial & Guide' | 'Project Breakdown';
  tags: string[];
  coverImage: string;
  tableOfContents?: { id: string; title: string }[];
  codeSnippets?: { language: string; code: string; caption?: string }[];
  relatedServices?: { title: string; path: string }[];
  relatedProjects?: { title: string; path: string }[];
  publishable: boolean;
}

export interface DocGuide {
  id: string;
  slug: string;
  title: string;
  section: 'Mobile Architecture' | 'Creative Pipeline' | 'Web Engineering' | 'Workflow';
  overview: string;
  prerequisites: string[];
  steps: { title: string; instructions: string; codeSnippet?: string; language?: string }[];
  troubleshooting?: { problem: string; resolution: string }[];
  version?: string;
  lastReviewed: string;
  relatedGuides?: { title: string; slug: string }[];
  publishable: boolean;
}

export interface ContactConfig {
  businessEmail: string;
  whatsappNumberInternational: string;
  whatsappDisplayNumber: string;
  enquiryEndpoint?: string;
}

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage?: string;
}

