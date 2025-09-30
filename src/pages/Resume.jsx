import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'

const timeline = [
  {
    year: '2025',
    role: 'Principal Interface Architect · Celestial Labs',
    bullets: [
      'Directed the Helios design system powering 12 autonomous mission control surfaces.',
      'Mentored a guild of 18 designers and engineers specialising in multimodal UX.',
      'Co-led incident response simulations reducing critical triage time by 36%.',
    ],
  },
  {
    year: '2023',
    role: 'Staff Frontend Engineer · NebulaWorks',
    bullets: [
      'Scaled component orchestration patterns adopted by six product lines.',
      'Deployed AI-assisted QA pipelines that cut regression cycles from days to hours.',
      'Introduced performance choreography reviews raising Lighthouse scores above 98.',
    ],
  },
  {
    year: '2021',
    role: 'Creative Technologist · Lumen Collective',
    bullets: [
      'Crafted volumetric narrative tools for Fortune 100 product launches.',
      'Shipped interactive AR galleries showcased to audiences of 30k+. ',
      'Built audio-reactive shader kits enabling brand teams to design without code.',
    ],
  },
]

const skillGroups = [
  {
    title: 'Core Languages',
    skills: [
      { label: 'TypeScript', level: 'Expert' },
      { label: 'GLSL', level: 'Advanced' },
      { label: 'Python', level: 'Advanced' },
    ],
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { label: 'React / Next.js', level: 'Expert' },
      { label: 'Framer Motion', level: 'Expert' },
      { label: 'Three.js / WebXR', level: 'Advanced' },
    ],
  },
  {
    title: 'Leadership',
    skills: [
      { label: 'Design Systems Strategy', level: 'Expert' },
      { label: 'Team Coaching', level: 'Advanced' },
      { label: 'Inclusive Facilitation', level: 'Advanced' },
    ],
  },
]

const recognitions = [
  'Speaker · FutureUX Summit 2024 — Designing for Human + AI teams.',
  'Judge · Galactic Product Awards 2023 — Immersive experiences category.',
  'Mentor · Quantum Builders Guild — Coaching early-stage founders.',
]

const Resume = () => (
  <PageTransition className="resume">
    <section className="page-hero">
      <Reveal as="h1" distance={16}>
        Résumé & Background
      </Reveal>
      <Reveal as="p" className="page-hero__lead" delay={0.1}>
        Leading teams where imagination and engineering meet. I translate visionary briefs into systems
        that scale gracefully.
      </Reveal>
      <Reveal
        as="a"
        className="button button--primary"
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        delay={0.2}
      >
        Download PDF
      </Reveal>
    </section>

    <section className="resume__timeline">
      <div className="section-heading">
        <h2>Experience</h2>
        <p>Orbiting between design, engineering, and strategy to unlock clarity for ambitious missions.</p>
      </div>
      <div className="resume__timeline-grid">
        {timeline.map((item, index) => (
          <Reveal
            key={item.role}
            as="article"
            className="resume__timeline-item"
            distance={index % 2 === 0 ? 30 : -30}
            threshold={0.35}
          >
            <span className="resume__timeline-year">{item.year}</span>
            <h3>{item.role}</h3>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="resume__skills">
      <div className="section-heading">
        <h2>Skill Constellations</h2>
        <p>Disciplines and technologies I deploy to deliver luminous, resilient products.</p>
      </div>
      <div className="resume__skill-grid">
        {skillGroups.map((group) => (
          <Reveal key={group.title} as="article" className="resume__skill-group">
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill.label}>
                  <span>{skill.label}</span>
                  <span className="resume__skill-level">{skill.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>

    <Reveal as="section" className="resume__recognition" delay={0.1}>
      <h2>Spotlight Moments</h2>
      <ul>
        {recognitions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Reveal>
  </PageTransition>
)

export default Resume
