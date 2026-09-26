import type { CareerOpening } from '../types';

export const CAREER_PRINCIPLES = [
  {
    title: 'Craftsmanship Over Velocity',
    description: 'We prioritize clean architecture, accessible components, and meticulous keyframes over hasty, rushed output.'
  },
  {
    title: 'Transparent Attribution',
    description: 'We credit contributors openly and accurately. Your actual role and contributions are acknowledged with complete integrity.'
  },
  {
    title: 'Asynchronous Independence',
    description: 'We value deep, uninterrupted focus blocks and clear written communication rather than continuous meetings.'
  },
  {
    title: 'Ownership & Accountability',
    description: 'When you work on a feature or scene, you have direct creative and technical ownership from brief to delivery.'
  }
];

// Openings array: currently no active vacancies per docs/enhancement.md
export const CAREER_OPENINGS: CareerOpening[] = [];

export const getPublishableOpenings = (): CareerOpening[] => {
  return CAREER_OPENINGS.filter((j) => j.publishable);
};

export const getOpeningBySlug = (slug: string): CareerOpening | undefined => {
  return CAREER_OPENINGS.find((j) => j.slug === slug && j.publishable);
};
