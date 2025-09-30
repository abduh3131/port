import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Reveal from './Reveal.jsx'

const ProjectCard = ({ project, index }) => (
  <Reveal as="article" className="project-card" delay={Math.min(index * 0.08, 0.35)}>
    <div className="project-card__media">
      {project.images.map((image, idx) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`project-card__image project-card__image--${idx}`}
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
  </Reveal>
)

export default ProjectCard
