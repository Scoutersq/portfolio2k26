import type { ComponentType } from 'react'

export type Project = {
  title: string
  description: string
  stack: string[]
  links: {
    github?: string
    live?: string
  }
  status?: 'in-progress' | 'shipped'
}

export type Blog = {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  component: ComponentType
}

export type Snippet = {
  title: string
  language: string
  description: string
  code: string
  slug: string
}
