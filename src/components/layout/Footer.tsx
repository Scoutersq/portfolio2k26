import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { socialLinks } from '../../data/navigation'

const icons = {
  github: Github,
  linkedin: Linkedin,
  x: Twitter,
  email: Mail,
}

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">Aditya Raj Prasad</p>
          <p className="text-sm text-muted">Building and learning in public.</p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons] ?? Github
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.icon === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                className="rounded-full border border-border p-2 text-muted transition hover:border-accent hover:text-accent"
                aria-label={item.label}
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
