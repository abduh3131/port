import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', code: '01' },
  { to: '/projects', label: 'Projects', code: '02' },
  { to: '/resume', label: 'Résumé', code: '03' },
  { to: '/contact', label: 'Contact', code: '04' },
]

const Navigation = () => (
  <header className="navigation">
    <div className="navigation__inner">
      <Link to="/" className="navigation__brand" aria-label="Go to home">
        <span className="navigation__brand-mark">EC</span>
        <span className="navigation__meta">
          <span className="navigation__title">Elliot Cipher</span>
          <span className="navigation__subtitle">full-stack engineer</span>
        </span>
      </Link>
      <nav className="navigation__links" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => `navigation__link${isActive ? ' active' : ''}`}>
            <span>{item.code}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <Link className="navigation__cta" to="/resume" aria-label="View résumé">
        Access Résumé
      </Link>
    </div>
  </header>
)

export default Navigation
