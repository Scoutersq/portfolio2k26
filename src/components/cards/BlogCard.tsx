import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Blog } from '../../types/content'

export function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  return (
    <motion.article
      className="glass-card flex flex-col gap-4 p-5 md:p-6"
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted">
        <span className="inline-flex items-center gap-1"><Calendar size={14} />{formatDate(blog.date)}</span>
        <span className="h-px w-6 bg-border" aria-hidden />
        <span className="inline-flex items-center gap-1"><Clock size={14} />{blog.readingTime}</span>
      </div>
      <div className="flex flex-col gap-3">
        <Link
          to={`/blogs/${blog.slug}`}
          className="text-lg font-semibold text-foreground transition hover:text-accent"
        >
          {blog.title}
        </Link>
        <p className="prose-mild text-sm text-muted">{blog.description}</p>
      </div>
      <div className="flex items-center justify-between text-sm text-accent">
        <Link to={`/blogs/${blog.slug}`} className="inline-flex items-center gap-2 font-semibold">
          Read post
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  )
}

function formatDate(date: string) {
  const parsed = new Date(date)
  return parsed.toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })
}
