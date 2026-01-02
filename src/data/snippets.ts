import type { Snippet } from '../types/content'

export const snippets: Snippet[] = [
  {
    title: 'useMediaQuery hook',
    language: 'TypeScript',
    description: 'Listen to a CSS media query and stay in sync with prefers-color-scheme.',
    slug: 'use-media-query',
    code: `import { useEffect, useState } from 'react'

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}
`,
  },
  {
    title: 'Clamp utility',
    language: 'JavaScript',
    description: 'Tiny clamp helper for layout math.',
    slug: 'clamp',
    code: `export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
`,
  },
  {
    title: 'Focus-visible outline',
    language: 'CSS',
    description: 'Accessible outline that respects :focus-visible only.',
    slug: 'focus-visible-outline',
    code: `:root {
  --ring: 2px solid #38bdf8;
  --ring-offset: 2px;
}

:focus-visible {
  outline: var(--ring);
  outline-offset: var(--ring-offset);
}
`,
  },
]
