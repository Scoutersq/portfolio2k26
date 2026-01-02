import type { Blog } from '../types/content'
import BuildInPublic from '../content/blogs/build-in-public.mdx'
import LearningLog from '../content/blogs/learning-log.mdx'

export const blogs: Blog[] = [
  {
    slug: 'build-in-public',
    title: 'Day 1 of learning GEN AI',
    description: 'Kickoff notes from starting with Gen AI. Content coming soon.',
    date: '2025-11-29',
    readingTime: '3 min',
    component: BuildInPublic,
  },
  {
    slug: 'learning-log',
    title: 'Learning log: shipping weekly',
    description: 'A lightweight cadence to keep momentum high without burning out.',
    date: '2024-11-05',
    readingTime: '4 min',
    component: LearningLog,
  },
]
