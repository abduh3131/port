import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

const Projects = () => (
  <PageTransition className="projects">
    <header className="projects__intro">
      <div className="section-heading">
        <Reveal as="span" delay={0.1} distance={8}>
          project dossiers
        </Reveal>
        <Reveal as="h2" delay={0.18}>
          A curated collection of experiments, platforms, and toolchains.
        </Reveal>
        <Reveal as="p" delay={0.26}>
          Each project ships with design systems, testing strategies, and documentation so teams can scale confidently.
          Everything is modular — add a new entry in the data file and it renders instantly.
        </Reveal>
      </div>
    </header>
    <div className="projects__grid">
      {projects.map((project, index) => (
        <Reveal key={project.id} threshold={0.2} delay={index * 0.05}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  </PageTransition>
)

export default Projects
