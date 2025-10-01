import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'

const Contact = () => (
  <PageTransition className="contact">
    <header className="projects__intro">
      <div className="section-heading">
        <Reveal as="span" delay={0.1} distance={8}>
          contact
        </Reveal>
        <Reveal as="h2" delay={0.18}>
          Open channels for collaborations, audits, and trusted partnerships.
        </Reveal>
        <Reveal as="p" delay={0.26}>
          I’m currently partnering with teams on secure product experiences, design system rollouts, and developer tooling. Drop
          a note and I’ll respond within two business days.
        </Reveal>
      </div>
    </header>

    <div className="contact__grid">
      <Reveal className="contact__panel" threshold={0.2}>
        <h3>Preferred signal</h3>
        <p className="contact__note">
          Email is the fastest way to reach me. Include context about your mission, timeline, and any existing assets so we can
          move quickly.
        </p>
        <div className="contact__methods">
          <a href="mailto:elliot@cipher.dev">
            <span>
              <FiMail />
            </span>
            <span>
              <strong>Email</strong>
              <small>elliot@cipher.dev</small>
            </span>
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <span>
              <FiGithub />
            </span>
            <span>
              <strong>GitHub</strong>
              <small>@your-username</small>
            </span>
          </a>
          <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
            <span>
              <FiLinkedin />
            </span>
            <span>
              <strong>LinkedIn</strong>
              <small>/in/your-username</small>
            </span>
          </a>
        </div>
      </Reveal>
      <Reveal className="contact__panel" threshold={0.2} delay={0.1}>
        <h3>Availability</h3>
        <p className="contact__signal">status: accepting Q3 2025 engagements</p>
        <p className="contact__note">
          Based in NYC with a fully remote setup. Comfortable pairing across time zones and working async-first with written
          updates, Loom walkthroughs, and shared dashboards.
        </p>
        <p className="contact__note">
          Let’s align on the problem space, measure success, and stage your launch plan. I can embed with your team or drive an
          independent strike mission.
        </p>
      </Reveal>
    </div>
  </PageTransition>
)

export default Contact
