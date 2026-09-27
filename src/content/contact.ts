import type { ContactConfig } from '../types';

export const CONTACT_CONFIG: ContactConfig = {
  businessEmail: 'gprspradeep@gmail.com',
  whatsappNumberInternational: '917471178742',
  whatsappDisplayNumber: '+91 74711 78742',
  enquiryEndpoint: '/api/enquiry',
};

export const INQUIRY_TYPES = [
  { value: 'mobile', label: 'Flutter / Mobile App Development' },
  { value: 'web', label: 'Full-Stack Web / SaaS Platform' },
  { value: 'animation', label: '3D Animation & Motion Graphics' },
  { value: 'integrated', label: 'Integrated Product + Storytelling Bundle' },
  { value: 'consulting', label: 'Technical Architecture & Strategy' },
] as const;

export const BUDGET_TIERS = [
  { value: 'starter', label: '< $3,000 / Starter MVP' },
  { value: 'growth', label: '$3,000 – $10,000 / Production Build' },
  { value: 'enterprise', label: '$10,000+ / Full System & Multi-Discipline' },
  { value: 'undecided', label: 'To be determined with studio' },
] as const;
