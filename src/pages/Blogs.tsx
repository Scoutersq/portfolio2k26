import { SectionHeader } from '../components/ui/SectionHeader'
import { BlogCard } from '../components/cards/BlogCard'
import { blogs } from '../data/blogs'

export default function BlogsPage() {
  return (
    <section className="w-full">
      <SectionHeader
        eyebrow="Writing"
        title="Blog posts"
        description="Short notes on shipping side projects, design decisions, and lessons from building in public."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.slug} blog={blog} index={index} />
        ))}
      </div>
    </section>
  )
}
