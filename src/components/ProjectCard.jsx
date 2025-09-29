import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const ProjectCard = ({ project, index }) => (
  <motion.article
    className="project-card"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
  >
    <div className="project-card__media">
      {project.images.map((image, idx) => (
        <motion.img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`project-card__image project-card__image--${idx}`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        />
      ))}
    </div>
    <div className="project-card__content">
      <div className="project-card__label">{project.tagline}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="project-card__highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="project-card__footer">
        <div className="project-card__tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-card__links">
          <a href={project.repo} target="_blank" rel="noreferrer">
            <FiGithub /> Code
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              <FiExternalLink /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.article>
)

export default ProjectCard
