import type { Blog } from '../types/content'
import BuildInPublic from '../content/blogs/build-in-public.mdx'
import LearningLog from '../content/blogs/learning-log.mdx'

export const blogs: Blog[] = [
  {
    slug: 'build-in-public',
    title: 'Day 1 of learning GEN AI',
    description: 'Kickoff notes from starting with Gen AI.',
    date: '2025-11-29',
    readingTime: '3 min',
    component: BuildInPublic,
  },
  {
    slug: 'learning-log',
    title: 'Three.js Basics',
    description: 'Basics of Three.js (Camera, Scene, Light, Mesh, Material, Renderer).',
    date: '2026-01-04',
    readingTime: '4 min',
    component: LearningLog,
  },
]
