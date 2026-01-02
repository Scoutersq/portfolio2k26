import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { blogs } from '../data/blogs'
import { SectionHeader } from '../components/ui/SectionHeader'

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const blog = blogs.find((item) => item.slug === slug)

  if (!blog) {
    return (
      <section className="w-full space-y-4">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-accent">
          <ArrowLeft size={16} />
          Back to blogs
        </Link>
        <p className="text-lg font-semibold">Post not found.</p>
      </section>
    )
  }

  const Content = blog.component

  return (
    <article className="w-full space-y-8">
      <div className="space-y-4">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm text-accent">
          <ArrowLeft size={16} />
          Back to blogs
        </Link>
        <SectionHeader title={blog.title} description={blog.description} />
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-muted">
          <span className="inline-flex items-center gap-1"><Calendar size={14} />{formatDate(blog.date)}</span>
          <span className="h-px w-6 bg-border" aria-hidden />
          <span className="inline-flex items-center gap-1"><Clock size={14} />{blog.readingTime}</span>
        </div>
      </div>
      <div className="prose prose-invert prose-headings:font-semibold prose-a:text-accent prose-code:font-mono prose-li:marker:text-accent max-w-none">
        <Content />
      </div>
    </article>
  )
}

function formatDate(date: string) {
  const parsed = new Date(date)
  return parsed.toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })
}
