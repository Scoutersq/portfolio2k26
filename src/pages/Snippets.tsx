import { useMemo, useState } from 'react'
import { SectionHeader } from '../components/ui/SectionHeader'
import { SnippetCard } from '../components/cards/SnippetCard'
import { snippets } from '../data/snippets'
import { cn } from '../lib/cn'

export default function SnippetsPage() {
  const languages = useMemo(() => {
    const langs = Array.from(new Set(snippets.map((s) => s.language)))
    return ['All', ...langs]
  }, [])

  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? snippets : snippets.filter((item) => item.language === active)

  return (
    <section className="w-full">
      <SectionHeader
        eyebrow="Snippets"
        title="Reusable snippets"
        description="Copy-ready helpers and tiny utilities that speed up new projects."
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setActive(lang)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition',
              active === lang
                ? 'border-accent bg-accent/10 text-accent'
                : 'border-border bg-card text-foreground/80 hover:border-accent hover:text-accent',
            )}
          >
            {lang}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((snippet, index) => (
          <SnippetCard key={snippet.slug} snippet={snippet} index={index} />
        ))}
      </div>
    </section>
  )
}
