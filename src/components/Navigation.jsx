import { NavLink, useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Overview' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Résumé' },
  { to: '/connect', label: 'Connect' },
]

const Navigation = () => {
  const { pathname } = useLocation()

  return (
    <header className="navigation">
      <div className="navigation__inner">
        <motion.div
          className="navigation__brand"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="navigation__logo">Δ</span>
          <span className="navigation__title">Astra Persona</span>
        </motion.div>
        <nav className="navigation__links">
          {links.map((link) => {
            const isActive = pathname === link.to

            return (
              <NavLink key={link.to} to={link.to} className="navigation__link">
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="navigation__indicator"
                    transition={{ type: 'spring', stiffness: 340, damping: 30 }}
                  />
                )}
              </NavLink>
            )
          })}
        </nav>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link className="navigation__cta" to="/resume" aria-label="Jump to résumé">
            View CV
          </Link>
        </motion.div>
      </div>
    </header>
  )
}

export default Navigation
