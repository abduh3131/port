import PageTransition from '../components/PageTransition.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import Reveal from '../components/Reveal.jsx'

const Projects = () => (
  <PageTransition className="projects">
    <section className="page-hero">
      <Reveal as="h1" distance={16}>
        Selected Missions
      </Reveal>
      <Reveal as="p" className="page-hero__lead" delay={0.1}>
        Every project is a living system. Explore prototypes, operational consoles, and story-driven
        showcases crafted for visionary teams.
      </Reveal>
    </section>
    <div className="projects__grid">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  </PageTransition>
)

export default Projects
