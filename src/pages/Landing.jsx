import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'

const signals = [
  {
    label: 'mission uptime',
    value: '9+ yrs',
    description: 'Leading high-stakes web and desktop builds from prototype to production.',
  },
  {
    label: 'deploy velocity',
    value: '400+ pushes',
    description: 'Continuous delivery pipelines hardened for teams shipping daily.',
  },
  {
    label: 'breach-free launches',
    value: '27',
    description: 'Security-first releases with full observability and incident rehearsals.',
  },
]

const focusAreas = [
  {
    title: 'Secure product engineering',
    description:
      'From auth hardening to observability, I translate ambiguous mission goals into resilient, testable features.',
    tools: ['TypeScript', 'React', 'Node', 'GraphQL'],
  },
  {
    title: 'Human-friendly ops tooling',
    description:
      'I craft dashboards, CLI companions, and automation that fit naturally into team rituals without slowing them down.',
    tools: ['Design systems', 'Realtime UX', 'CI/CD orchestration'],
  },
  {
    title: 'Collaborative security culture',
    description:
      'Pairing engineers and analysts, shaping runbooks, and coaching teams to prevent incidents before they escalate.',
    tools: ['Threat modeling', 'Incident response', 'Knowledge sharing'],
  },
]

const timeline = [
  {
    period: '2023 — Present',
    title: 'Senior Frontend + Platform · Vaultline',
    summary:
      'Built shared component library, telemetry dashboards, and security review workflows used by every product squad.',
  },
  {
    period: '2020 — 2023',
    title: 'Lead Engineer · SignalWorks',
    summary:
      'Shipped privacy-first analytics suite, unified login across properties, and automated compliance evidence collection.',
  },
  {
    period: '2017 — 2020',
    title: 'Full-stack Developer · GridOps Collective',
    summary:
      'Delivered real-time monitoring tools, data ingestion services, and developer enablement tooling for global ops teams.',
  },
]

const skillHighlights = [
  ['Design systems', 'Zero-trust UX', 'WebAssembly'],
  ['React 19', 'TypeScript', 'Node.js'],
  ['GraphQL', 'Rust', 'Docker'],
  ['Playwright', 'Cypress', 'Storybook'],
]

const Landing = () => (
  <PageTransition className="landing">
    <section className="landing__hero">
      <div className="landing__intro">
        <Reveal as="span" className="landing__tag" delay={0.1} distance={8}>
          Access granted · portfolio v3
        </Reveal>
        <Reveal as="h1" delay={0.2}>
          Hey, I’m Elliot Cipher — I design and ship hacker-grade digital products.
        </Reveal>
        <Reveal as="p" delay={0.35}>
          I turn complex infrastructure, security workflows, and product ambitions into polished experiences that people trust.
          Whether it’s a mission dashboard or a desktop companion app, I build with resilience, accessibility, and velocity in
          mind.
        </Reveal>
        <Reveal as="div" className="landing__actions" delay={0.45}>
          <Link className="button button--primary" to="/projects">
            View project dossiers
          </Link>
          <Link className="button button--ghost" to="/contact">
            Initiate contact
          </Link>
        </Reveal>
      </div>
      <Reveal as="aside" className="landing__terminal" delay={0.4} distance={12}>
        <div className="landing__terminal-header">
          <span>status: online</span>
          <span>session id: 0xEC</span>
        </div>
        <div className="landing__terminal-body">
          <code>
            {`const engineer = {
  name: 'Elliot Cipher',
  origin: 'NYC → Remote',
  focus: ['security-forward products', 'realtime UI', 'DX tooling'],
  currently: 'building resilient teams at Vaultline'
}`}          </code>
          <div className="landing__terminal-grid">
            {skillHighlights.flat().map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>

    <section className="landing__signals">
      {signals.map((signal) => (
        <Reveal key={signal.label} className="landing__signal" threshold={0.3}>
          <span>{signal.label}</span>
          <strong>{signal.value}</strong>
          <p>{signal.description}</p>
        </Reveal>
      ))}
    </section>

    <section>
      <div className="section-heading">
        <Reveal as="span" delay={0.1} distance={8}>
          focus areas
        </Reveal>
        <Reveal as="h2" delay={0.18}>
          Building confident, modern interfaces for teams who defend and create.
        </Reveal>
        <Reveal as="p" delay={0.26}>
          Every project blends deep collaboration with designers, analysts, and stakeholders. I ship accessible systems that
          stay maintainable long after the launch window closes.
        </Reveal>
      </div>
      <div className="landing__grid">
        {focusAreas.map((area) => (
          <Reveal key={area.title} className="landing__card" threshold={0.2}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <ul>
              {area.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>

    <section>
      <div className="section-heading">
        <Reveal as="span" delay={0.1} distance={8}>
          trajectory
        </Reveal>
        <Reveal as="h2" delay={0.18}>
          Experience forged inside incident rooms, product studios, and midnight deploys.
        </Reveal>
        <Reveal as="p" delay={0.26}>
          I thrive at the intersection of security, design systems, and developer experience — guiding cross-functional teams
          as they navigate ambiguous problem spaces.
        </Reveal>
      </div>
      <div className="landing__grid">
        {timeline.map((entry) => (
          <Reveal key={entry.title} className="landing__card" threshold={0.25}>
            <span className="landing__tag" style={{ marginBottom: 0 }}>
              {entry.period}
            </span>
            <h3>{entry.title}</h3>
            <p>{entry.summary}</p>
          </Reveal>
        ))}
      </div>
    </section>
  </PageTransition>
)

export default Landing
