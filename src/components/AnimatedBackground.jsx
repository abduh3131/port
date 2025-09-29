import { useMemo } from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 36 }, (_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 18 + Math.random() * 12,
        delay: Math.random() * 6,
        size: 4 + Math.random() * 6,
      })),
    [],
  )

  return (
    <div className="background-canvas" aria-hidden="true">
      <div className="background-gradient" />
      <div className="background-grid" />
      <motion.div
        className="background-ring"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
      />
      <div className="background-orbs">
        <motion.span
          className="background-orb"
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 10, 0] }}
          transition={{ repeat: Infinity, duration: 24, ease: 'easeInOut' }}
        />
        <motion.span
          className="background-orb background-orb--secondary"
          animate={{ x: [0, -20, 20, 0], y: [0, 25, -15, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
        />
      </div>
      <div className="background-particles">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="background-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [particle.y, particle.y - 15, particle.y],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: particle.duration,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AnimatedBackground
