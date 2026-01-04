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
          I’m a passionate Web Developer and a BCA third-year student, focused on building modern, user-friendly, and scalable web applications. I enjoy turning ideas into real products and believe in learning by building. Every project I work on helps me sharpen my problem-solving skills, improve code quality, and understand real-world development practices.
        </p>
        <p className="prose-mild">
          I’m actively working towards building a strong career in the tech field by exploring new technologies, improving my fundamentals, and creating production-ready projects. I value clean design, performance, and continuous improvement, and I’m always open to learning, collaborating, and taking on new challenges that help me grow as a developer.
        </p>
        <p className="prose-mild">
          I aim to write maintainable, well-structured code and follow best practices that make applications reliable and easy to scale. I enjoy working on end-to-end features, from designing intuitive interfaces to integrating APIs and deploying applications. With a strong focus on consistency and attention to detail, I strive to build solutions that not only work well but also deliver meaningful user experiences.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass-card space-y-3 p-5">
          <h3 className="text-lg font-semibold">What I learned</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="muted">HTML</Badge>
            <Badge variant="muted">CSS</Badge>
            <Badge variant="muted">JavaScript</Badge>
            <Badge variant="muted">React</Badge>
            <Badge variant="muted">NextJS</Badge>
            <Badge variant="muted">Python</Badge>
            <Badge variant="muted">JAVA</Badge>
            <Badge variant="muted">DSA</Badge>
            <Badge variant="muted">Tailwind CSS</Badge>
          </div>
        </div>
        <div className="glass-card space-y-3 p-5">
          <h3 className="text-lg font-semibold">What I’m learning</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="muted">Gen AI</Badge>
            <Badge variant="muted">TypeScript</Badge>
            <Badge variant="muted">NextJS</Badge>
            <Badge variant="muted">Three.js</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
