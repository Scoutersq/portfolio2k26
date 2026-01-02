import { SectionHeader } from '../components/ui/SectionHeader'
import { Badge } from '../components/ui/Badge'
import { siteConfig } from '../data/site'

export default function AboutPage() {
  return (
    <section className="w-full space-y-6">
      <SectionHeader
        eyebrow="About"
        title="Building a deliberate career"
        description={
          <span>
            {siteConfig.name} — <span className="font-semibold">{siteConfig.tagline}</span>
          </span>
        }
      />

      <div className="glass-card space-y-4 p-6 md:p-8">
        <p className="prose-mild">
          I’m a student developer focused on front-end craft: thoughtful UI, calm animations, and code that is
          easy to extend. I build small products to practice the skills I want to get paid for: shipping fast,
          writing clear docs, and keeping design systems consistent.
        </p>
        <p className="prose-mild">
          Right now I’m doubling down on React, TypeScript, and motion design. I document what I learn so others
          can reuse it, and so future me remembers why decisions were made.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass-card space-y-3 p-5">
          <h3 className="text-lg font-semibold">Focus areas</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="muted">Design Systems</Badge>
            <Badge variant="muted">Animation</Badge>
            <Badge variant="muted">Docs</Badge>
            <Badge variant="muted">Performance</Badge>
          </div>
        </div>
        <div className="glass-card space-y-3 p-5">
          <h3 className="text-lg font-semibold">What I’m learning</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="muted">React patterns</Badge>
            <Badge variant="muted">TypeScript</Badge>
            <Badge variant="muted">Framer Motion</Badge>
            <Badge variant="muted">MDX</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
