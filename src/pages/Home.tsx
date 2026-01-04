import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin } from 'lucide-react'
import avatarImg from '../assets/avatar.jpeg'
import { useMemo, useRef, useState, useLayoutEffect } from 'react'
import { Button } from '../components/ui/Button'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ProjectCard } from '../components/cards/ProjectCard'
import { BlogCard } from '../components/cards/BlogCard'
import { projects } from '../data/projects'
import { blogs } from '../data/blogs'
import { siteConfig } from '../data/site'

const journey = [
  {
    year: '2019',
    title: 'First Step into Coding',
    description:
      'I was first introduced to programming through Java as part of my school syllabus. Initially, it felt unfamiliar and challenging, and my interest was limited. However, as I spent more time understanding the logic behind it, my curiosity slowly grew, laying the foundation for my journey into development.',
  },
  {
    year: '2020',
    title: 'Building Strong Foundations',
    description:
      'In 2020, my interest in Java grew significantly. I focused on learning the core fundamentals and spent time solving problems ranging from basic to advanced levels. This phase helped me strengthen my logical thinking and build a solid foundation in programming.',
  },
  {
    year: 'Mid 2020 – 2021',
    title: 'A Temporary Pause',
    description:
      'Due to the lockdown and limited access to resources, my focus shifted toward school studies and other activities. During this period, I stepped away from coding and gradually lost touch with Java. However, this break gave me time to reflect and later return with renewed clarity and motivation.',
  },
  {
    year: '2022',
    title: 'Reconnecting with Programming',
    description:
      'In 2022, I returned to Java as it became part of my board examination syllabus. Revisiting the language helped me reconnect with programming and rebuild my interest in coding, strengthening my fundamentals once again.',
  },
  {
    year: '2023',
    title: 'Discovering Web Development',
    description:
      'In 2023, during my first year of college, I began exploring web development. I learned the fundamentals of HTML and CSS through online resources and YouTube, which introduced me to building and styling web pages and sparked my interest in creating user-focused interfaces.',
  },
  {
    year: '2024 – Present',
    title: 'Exploring, Building, and Evolving',
    description:
      'From 2024 onward, my interest in web development grew naturally as I began exploring the technologies used in modern web applications. I worked across different areas of web development, gaining hands-on experience and building a strong understanding of how complete applications come together. Currently, my primary focus is on Generative AI and integrating it into web products to create smarter and more impactful user experiences.',
  },
]

export default function HomePage() {
  const mailHref = useMemo(
    () => (siteConfig.contactEmail ? `mailto:${siteConfig.contactEmail}?subject=Project%20inquiry&body=Hi%20Aditya,%20I%27d%20like%20to%20discuss%20a%20project.` : '#'),
    [],
  )

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
          {projects.slice(0, 4).map((project, index) => (
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
          eyebrow="Journey"
          title="My journey"
          description="Here is my learning journey so far, from my first step into coding to exploring web development and Generative AI."
        />
        <div className="glass-card space-y-4 rounded-2xl p-6 shadow-lg shadow-accent/10">
          {journey.map((item) => (
            <div key={item.year} className="flex flex-col gap-2 rounded-xl border border-border/70 bg-card/60 p-4">
              <h3 className="text-lg font-semibold text-foreground md:text-xl">
                {item.year} — {item.title}
              </h3>
              {item.description ? <p className="text-sm text-muted md:text-base">{item.description}</p> : null}
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="glass-card flex flex-col gap-6 rounded-2xl p-6 shadow-lg shadow-accent/10 md:p-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold md:text-2xl">Have a project in mind? I’d love to discuss how I can help.</h2>
            <p className="text-muted">Drop your message and let's discuss about your project.</p>
            <div className="flex flex-wrap gap-3">
              <Button href={mailHref} className="rounded-none bg-[#d32f2f] text-white hover:bg-[#b71c1c]">
                Click to mail me
              </Button>
            </div>
          </div>

          <hr className="border-border" />

          <div className="space-y-3">
            <p className="text-muted">Drop in your email ID and I will get back to you.</p>
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                aria-label="Your email"
              />
              <Button
                type="button"
                href={mailHref}
                className="md:w-[120px] justify-center rounded-full bg-[#0ea5e9] text-white hover:bg-[#0284c7]"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function HeroSection() {
  const [avatarLoaded, setAvatarLoaded] = useState(false)

  return (
    <section className="glass-card relative overflow-hidden p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_35%)]" />
      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex flex-1 flex-col gap-6">
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
            <NameOrbit>{siteConfig.name}</NameOrbit>
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

        <motion.div
          className="relative mx-auto mt-2 h-40 w-40 shrink-0 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-lg shadow-accent/20 md:mt-0 md:h-52 md:w-52"
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.08, type: 'spring', stiffness: 160, damping: 18 }}
          aria-hidden="false"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.12),transparent_40%)]" />
          <img
            src={avatarImg}
            alt="Aditya Raj Prasad portrait"
            className={`h-full w-full object-cover object-[50%_22%] transition duration-500 ${avatarLoaded ? 'blur-0' : 'blur-sm'}`}
            loading="lazy"
            onLoad={() => setAvatarLoaded(true)}
          />
        </motion.div>
      </div>
    </section>
  )
}

function NameOrbit({ children }: { children: React.ReactNode }) {
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const [box, setBox] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const el = textRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setBox({ width, height })
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const paddingX = 14
  const paddingY = 10
  const boxWidth = box.width ? box.width + paddingX * 2 : undefined
  const boxHeight = box.height ? box.height + paddingY * 2 : undefined

  return (
    <div className="relative inline-flex w-fit items-center px-1 py-1">
      {boxWidth && boxHeight ? (
        <motion.svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          width={boxWidth}
          height={boxHeight}
          viewBox={`0 0 ${boxWidth} ${boxHeight}`}
          fill="none"
          aria-hidden="true"
        >
          <motion.rect
            x={3}
            y={3}
            width={boxWidth - 6}
            height={boxHeight - 6}
            rx={14}
            stroke="#38bdf8"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="120 480"
            initial={{ strokeDashoffset: 0, opacity: 0.8 }}
            animate={{ strokeDashoffset: -600, opacity: 0.4 }}
            transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
          />
        </motion.svg>
      ) : null}
      <h1 ref={textRef} className="relative z-10 text-3xl font-semibold leading-tight md:text-4xl">
        {children}
      </h1>
    </div>
  )
}
