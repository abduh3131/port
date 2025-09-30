import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'

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
      <Reveal as="div" className="landing__signal" distance={0} delay={0.2} />
      <div className="landing__intro">
        <Reveal as="p" className="landing__eyebrow" delay={0.15} distance={12}>
          Hello future collaborator — I’m Nova Quinn.
        </Reveal>
        <Reveal as="h1" delay={0.3}>
          I engineer luminous digital worlds where complex systems feel effortless.
        </Reveal>
        <Reveal as="p" className="landing__lead" delay={0.45}>
          With a background in immersive design and mission operations, I craft experiences that merge
          narrative, data, and motion. I help ambitious teams translate raw telemetry into decisions,
          amplify their brand stories, and build resilient interfaces that glow in every galaxy.
        </Reveal>
        <Reveal as="div" className="landing__actions" delay={0.6}>
          <Link className="button button--primary" to="/projects" aria-label="Explore projects">
            Explore projects
          </Link>
          <Link className="button button--ghost" to="/connect" aria-label="Get in touch">
            Let’s connect
          </Link>
        </Reveal>
      </div>
      <Reveal as="div" className="landing__halo" distance={0} delay={0.5} />
    </section>

    <section className="landing__stats">
      {stats.map((stat) => (
        <Reveal key={stat.label} className="landing__stat" threshold={0.35}>
          <span className="landing__stat-value">{stat.value}</span>
          <span className="landing__stat-label">{stat.label}</span>
          <span className="landing__stat-detail">{stat.detail}</span>
        </Reveal>
      ))}
    </section>

    <section className="landing__capabilities">
      <div className="section-heading">
        <h2>Capabilities</h2>
        <p>High-fidelity strategy, design, and engineering to ignite your next launch.</p>
      </div>
      <div className="landing__capability-grid">
        {capabilities.map((capability) => (
          <Reveal key={capability.title} as="article" className="landing__capability">
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <div className="landing__capability-tools">
              {capability.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="landing__timeline">
      <div className="section-heading">
        <h2>Trajectory</h2>
        <p>Each orbit adds new dimensions to how I craft interfaces and lead teams.</p>
      </div>
      <div className="landing__timeline-grid">
        {timeline.map((item) => (
          <Reveal key={item.title} as="article" className="landing__timeline-item" distance={24} threshold={0.35}>
            <span className="landing__timeline-period">{item.period}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </Reveal>
        ))}
      </div>
    </section>
  </PageTransition>
)

export default Landing
