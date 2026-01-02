import { Github, ExternalLink, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Project } from '../../types/content'
import { Badge } from '../ui/Badge'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="glass-card flex flex-col gap-4 p-5 md:p-6"
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-muted">
            <Rocket size={16} className="text-accent" />
            <span>{project.status === 'in-progress' ? 'In progress' : 'Shipped'}</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        </div>
        <div className="flex gap-2 text-muted">
          {project.links.github ? (
            <a
              href={project.links.github}
              className="rounded-full border border-border p-2 transition hover:border-accent hover:text-accent"
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
            >
              <Github size={16} />
            </a>
          ) : null}
          {project.links.live ? (
            <a
              href={project.links.live}
              className="rounded-full border border-border p-2 transition hover:border-accent hover:text-accent"
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={16} />
            </a>
          ) : null}
        </div>
      </div>

      <p className="prose-mild">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="muted" className="text-[11px] lowercase">
            {tech}
          </Badge>
        ))}
      </div>
    </motion.article>
  )
}
