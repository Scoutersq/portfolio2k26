import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ProjectCard } from '../components/cards/ProjectCard'
import { BlogCard } from '../components/cards/BlogCard'
import { SnippetCard } from '../components/cards/SnippetCard'
import { projects } from '../data/projects'
import { blogs } from '../data/blogs'
import { snippets } from '../data/snippets'
import { siteConfig } from '../data/site'

export default function HomePage() {
  return (
    <div className="flex w-full flex-col gap-12">
      <HeroSection />

      <section>
        <SectionHeader
          eyebrow="Projects"
          title="Recent builds"
          description="Production-ready web products built with a focus on quality, usability, and engineering best practices."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        <div className="mt-6">
          <Button variant="ghost" href="/projects" className="gap-2">
            View all projects
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Writing"
          title="Blogs"
          description="Notes from building in public and the patterns I reuse."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {blogs.slice(0, 2).map((blog, index) => (
            <BlogCard key={blog.slug} blog={blog} index={index} />
          ))}
        </div>
        <div className="mt-6">
          <Button variant="ghost" href="/blogs" className="gap-2">
            Read all posts
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Snippets"
          title="Reusable bits"
          description="Tiny helpers I drop into new projects: hooks, utilities, and styling tokens."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {snippets.slice(0, 2).map((snippet, index) => (
            <SnippetCard key={snippet.slug} snippet={snippet} index={index} />
          ))}
        </div>
        <div className="mt-6">
          <Button variant="ghost" href="/snippets" className="gap-2">
            Explore snippets
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="glass-card relative overflow-hidden p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_35%)]" />
      <div className="relative flex flex-col gap-6">
        <motion.span
          className="text-xs font-semibold uppercase tracking-[0.28em] text-muted"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {siteConfig.role}
        </motion.span>
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-muted md:max-w-2xl">
            <span className="font-semibold">{siteConfig.tagline}</span> — {siteConfig.intro}
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Button href={siteConfig.ctaPrimary} className="gap-2">
            View projects
            <ArrowRight size={16} />
          </Button>
          <Button variant="ghost" href={siteConfig.ctaSecondary} className="gap-2">
            Read blogs
          </Button>
          <div className="ml-2 flex items-center gap-2 text-muted">
            <a
              href="https://github.com/Scoutersq"
              className="rounded-full border border-border p-2 transition hover:border-accent hover:text-accent"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-raj-prasad-b819012b4/"
              className="rounded-full border border-border p-2 transition hover:border-accent hover:text-accent"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-3 text-sm text-muted"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
        >
          <span className="rounded-full border border-border/70 bg-card px-3 py-1">Learning in public</span>
          <span className="rounded-full border border-border/70 bg-card px-3 py-1">GEN AI</span>
          <span className="rounded-full border border-border/70 bg-card px-3 py-1">Full Stack Developer</span>
        </motion.div>
      </div>
    </section>
  )
}
