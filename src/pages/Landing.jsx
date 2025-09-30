import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'

const stats = [
  { value: '12M+', label: 'Lines of code orchestrated', detail: 'across high-availability systems' },
  { value: '48', label: 'Launch cycles', detail: 'for platforms in production' },
  { value: '0.002s', label: 'Fastest render budget', detail: 'achieved on neural UI surfaces' },
]

const capabilities = [
  {
    title: 'Neural Systems Design',
    description: 'Architecting adaptive experiences where AI copilots collaborate with humans in real time.',
    tools: ['Cognitive UX', 'Realtime pipelines', 'Multimodal design'],
  },
  {
    title: 'Immersive Interfaces',
    description: 'Fusing 3D, holographic, and XR canvases with pragmatic workflows that feel effortless.',
    tools: ['WebXR', 'Procedural motion', 'Volumetric visuals'],
  },
  {
    title: 'Mission Operations',
    description: 'Translating complex telemetry into intuitive narratives teams can act on instantly.',
    tools: ['Observability', 'Systems thinking', 'Narrative analytics'],
  },
]

const timeline = [
  {
    period: '2024 — Present',
    title: 'Principal Interface Architect · Celestial Labs',
    summary: 'Leading cross-planet product squads building decision platforms for orbital habitats.',
  },
  {
    period: '2022 — 2024',
    title: 'Staff Frontend Engineer · NebulaWorks',
    summary: 'Scaled a design system powering 28+ mission-critical applications across the federation.',
  },
  {
    period: '2019 — 2022',
    title: 'Creative Technologist · Lumen Collective',
    summary: 'Crafted immersive storytelling surfaces for XR showcases and neural brand theatres.',
  },
]

const Landing = () => (
  <PageTransition className="landing">
    <section className="landing__hero">
      <motion.div
        className="landing__signal"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      />
      <div className="landing__intro">
        <motion.p
          className="landing__eyebrow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hello future collaborator — I’m Nova Quinn.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I engineer luminous digital worlds where complex systems feel effortless.
        </motion.h1>
        <motion.p
          className="landing__lead"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          With a background in immersive design and mission operations, I craft experiences that merge
          narrative, data, and motion. I help ambitious teams translate raw telemetry into decisions,
          amplify their brand stories, and build resilient interfaces that glow in every galaxy.
        </motion.p>
        <motion.div
          className="landing__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          <Link className="button button--primary" to="/projects">
            Explore projects
          </Link>
          <Link className="button button--ghost" to="/connect">
            Let’s connect
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="landing__halo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.6 }}
      />
    </section>

    <section className="landing__stats">
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          className="landing__stat"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <span className="landing__stat-value">{stat.value}</span>
          <span className="landing__stat-label">{stat.label}</span>
          <span className="landing__stat-detail">{stat.detail}</span>
        </motion.div>
      ))}
    </section>

    <section className="landing__capabilities">
      <div className="section-heading">
        <h2>Capabilities</h2>
        <p>High-fidelity strategy, design, and engineering to ignite your next launch.</p>
      </div>
      <div className="landing__capability-grid">
        {capabilities.map((capability) => (
          <motion.article
            key={capability.title}
            className="landing__capability"
            whileHover={{ translateY: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <div className="landing__capability-tools">
              {capability.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="landing__timeline">
      <div className="section-heading">
        <h2>Trajectory</h2>
        <p>Each orbit adds new dimensions to how I craft interfaces and lead teams.</p>
      </div>
      <div className="landing__timeline-grid">
        {timeline.map((item, index) => (
          <motion.article
            key={item.title}
            className="landing__timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
          >
            <span className="landing__timeline-period">{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </motion.article>
        ))}
      </div>
    </section>
  </PageTransition>
)

export default Landing
