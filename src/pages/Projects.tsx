import { SectionHeader } from '../components/ui/SectionHeader'
import { ProjectCard } from '../components/cards/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <section className="w-full">
      <SectionHeader
        eyebrow="Projects"
        title="Building proof over promises"
        description="No resumes, no filler — just the work that taught me the most."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
