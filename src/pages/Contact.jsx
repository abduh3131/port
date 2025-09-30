import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'

const channels = [
  {
    label: 'GitHub',
    handle: '@novaquinn',
    url: 'https://github.com/novaquinn',
    description: 'Code experiments, open source contributions, and bleeding-edge prototypes.',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    handle: 'Nova Quinn',
    url: 'https://www.linkedin.com/in/novaquinn',
    description: 'Let’s connect on leadership, culture, and shaping teams that build the future.',
    icon: FiLinkedin,
  },
  {
    label: 'Email',
    handle: 'hello@novaquinn.studio',
    url: 'mailto:hello@novaquinn.studio',
    description: 'Drop me a line about collaborations, speaking, or simply to say hi.',
    icon: FiMail,
  },
]

const Contact = () => (
  <PageTransition className="contact">
    <section className="page-hero">
      <Reveal as="h1" distance={16}>
        Open Communications
      </Reveal>
      <Reveal as="p" className="page-hero__lead" delay={0.1}>
        I thrive on bold ideas and collaborative teams. Reach out through any channel and let’s
        architect what’s next.
      </Reveal>
    </section>
    <div className="contact__grid">
      {channels.map((channel, index) => {
        const Icon = channel.icon
        return (
          <Reveal
            key={channel.label}
            href={channel.url}
            className="contact__card"
            target={channel.url.startsWith('http') ? '_blank' : undefined}
            rel={channel.url.startsWith('http') ? 'noreferrer' : undefined}
            as="a"
            delay={index * 0.05}
          >
            <Icon />
            <span className="contact__label">{channel.label}</span>
            <span className="contact__handle">{channel.handle}</span>
            <p>{channel.description}</p>
            <span className="contact__cta">Initiate transmission →</span>
          </Reveal>
        )
      })}
    </div>
    <Reveal as="section" className="contact__availability" delay={0.2}>
      <h2>Current bandwidth</h2>
      <p>
        Booking advisory intensives for spring 2026. Limited slots remain for immersive product sprints
        and mission-critical interface audits.
      </p>
      <ul>
        <li>🌌 2-week discovery labs for rapid prototyping</li>
        <li>🛰️ Fractional leadership for emerging product orgs</li>
        <li>🔭 Speaking engagements on futuristic experience design</li>
      </ul>
    </Reveal>
  </PageTransition>
)

export default Contact
