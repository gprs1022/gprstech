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
}

export interface CombinedEngagement {
  id: string;
  title: string;
  tagline: string;
  servicesIncluded: string[];
  idealFor: string;
  outcome: string;
}

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
  category: 'Mobile' | 'Web' | 'Animation' | 'Product' | 'Studio';
  tags: string[];
  videoUrl?: string;
  coverImage?: string;
  relatedProjectSlug?: string;
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
  service: 'App Development' | 'Website / Web App' | 'Animation & Video' | 'Combined Tech + Creative' | 'Other / Unsure';
  budget?: string;
  timeline?: string;
  message: string;
}
