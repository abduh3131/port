import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground.jsx'
import Navigation from './components/Navigation.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Landing from './pages/Landing.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  const location = useLocation()

  return (
    <div className="app-frame">
      <AnimatedBackground />
      <Navigation />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/connect" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
