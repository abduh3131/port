import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

const Projects = () => (
  <PageTransition className="projects">
    <section className="page-hero">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Selected Missions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        Every project is a living system. Explore prototypes, operational consoles, and story-driven
        showcases crafted for visionary teams.
      </motion.p>
    </section>
    <div className="projects__grid">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  </PageTransition>
)

export default Projects
