import type { LifeEntry } from '../types';
import animPipelineImg from '../assets/thumbnails/image3.png';
import animCharacterTurnaroundImg from '../assets/thumbnails/image2.png';
import animVillageSceneImg from '../assets/thumbnails/image1.png';

export const LIFE_ENTRIES: LifeEntry[] = [
  {
    id: 'animation-production-pipeline',
    title: 'From Storyboard Sketch to Final 4K Cinematic Frame',
    category: 'Production Process',
    date: 'February 2026',
    explanation:
      'A deep dive into our creative studio workflow: starting with loose pencil storyboard animatics to establish narrative pacing, moving through character facial expression model sheets, and culminating in multi-layered atmospheric lighting and compositing.',
    mediaUrl: animPipelineImg,
    mediaType: 'image',
    caption: 'Step-by-step production breakdown: pencil storyboard sketch (top-left), color rough (mid-left), expression sheet (bottom-left), and final composited scene (right).',
    relatedSlug: 'toonacharya-creative-animation-showcase',
    relatedType: 'project'
  },
  {
    id: 'character-acting-run-cycle',
    title: 'Character Turnaround & Dynamic Run Cycle Choreography',
    category: 'Animation WIP',
    date: 'January 2026',
    explanation:
      'Rigorous character turnarounds and keyframe timing exploration. Analyzing squash-and-stretch arcs and onion-skin trajectory lines to guarantee that character movement conveys joyful energy and fluid momentum.',
    mediaUrl: animCharacterTurnaroundImg,
    mediaType: 'image',
    caption: 'Character turnaround study: default idle stance, expressive conversational gesture, and running cycle with visual motion trajectory arcs.',
    relatedSlug: 'retention-engineered-animation',
    relatedType: 'blog'
  },
  {
    id: 'folklore-storytelling-composition',
    title: 'Lighting & Atmosphere in Village Folklore Storytelling',
    category: 'Design Exploration',
    date: 'December 2025',
    explanation:
      'Exploration of warm golden-hour lighting, environmental depth, and cultural warmth in animated storytelling. Designed with contrasting cyan and vivid lime ribbon accents reflecting the GPRS Tech visual signature.',
    mediaUrl: animVillageSceneImg,
    mediaType: 'image',
    caption: 'Completed cinematic frame: Wise grandfather recounting folklore tales under the village banyan tree at sunset.',
    relatedSlug: 'why-technology-needs-storytelling',
    relatedType: 'blog'
  }
];
