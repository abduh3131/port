import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'

const experience = [
  {
    period: '2023 — Present',
    title: 'Senior Frontend + Platform · Vaultline',
    summary:
      'Owned design system architecture, rolled out secure component primitives, and embedded observability throughout the stack.',
  },
  {
    period: '2020 — 2023',
    title: 'Lead Engineer · SignalWorks',
    summary:
      'Shipped privacy-first analytics platform, automated compliance evidence, and mentored cross-discipline squads.',
  },
  {
    period: '2017 — 2020',
    title: 'Full-stack Developer · GridOps Collective',
    summary:
      'Launched telemetry tooling, service dashboards, and developer workflows powering 24/7 operations teams.',
  },
]

const stackGroups = [
  {
    label: 'languages & frameworks',
    items: ['TypeScript', 'React', 'Node.js', 'GraphQL', 'Rust', 'Go'],
  },
  {
    label: 'tooling',
    items: ['Vite', 'Tauri', 'Storybook', 'Playwright', 'Cypress', 'Jest'],
  },
  {
    label: 'practices',
    items: ['Design systems', 'Performance budgets', 'Accessibility', 'Incident response', 'Threat modeling'],
  },
]

const recognitions = [
  {
    period: '2024',
    title: 'Vaultline Zero Trust Initiative',
    summary: 'Introduced zero-trust guardrails that cut review time by 40% and passed the first red-team audit without critical issues.',
  },
  {
    period: '2022',
    title: 'SignalWorks DX Award',
    summary: 'Recognised for automation that reduced onboarding time for new engineers from two weeks to four days.',
  },
]

const Resume = () => (
  <PageTransition className="resume">
    <header className="projects__intro">
      <div className="section-heading">
        <Reveal as="span" delay={0.1} distance={8}>
          credentials
        </Reveal>
        <Reveal as="h2" delay={0.18}>
          Résumé snapshot and supporting signals.
        </Reveal>
        <Reveal as="p" delay={0.26}>
          Download the PDF for full details, or skim the highlights below. These modules stay in sync with the PDF so any
          update lands everywhere.
        </Reveal>
      </div>
    </header>

    <div className="resume__panels">
      <Reveal className="resume__panel" threshold={0.2}>
        <h3>Summary</h3>
        <p>
          Security-focused front-end + platform engineer who loves translating complex requirements into polished, maintainable
          interfaces. I combine systems thinking with hands-on coaching so teams can ship quickly without sacrificing safety.
        </p>
        <a className="resume__download" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download résumé PDF
        </a>
      </Reveal>
      <Reveal className="resume__panel" threshold={0.2} delay={0.1}>
        <h3>Recognition</h3>
        <div className="resume__timeline">
          {recognitions.map((item) => (
            <article key={item.title} className="resume__timeline-item">
              <span>{item.period}</span>
              <h4>{item.title}</h4>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </div>

    <div className="resume__panels">
      <Reveal className="resume__panel" threshold={0.2}>
        <h3>Experience</h3>
        <div className="resume__timeline">
          {experience.map((item) => (
            <article key={item.title} className="resume__timeline-item">
              <span>{item.period}</span>
              <h4>{item.title}</h4>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </Reveal>
      <Reveal className="resume__panel" threshold={0.2} delay={0.1}>
        <h3>Stack & Practices</h3>
        <div className="resume__stack">
          {stackGroups.map((group) => (
            <div key={group.label} className="resume__stack-group">
              <strong>{group.label}</strong>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </PageTransition>
)

export default Resume
