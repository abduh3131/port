import { useEffect, useMemo, useRef } from 'react'

const AnimatedBackground = () => {
  const pointerTarget = useRef({ x: 0.5, y: 0.5 })
  const pointerPosition = useRef({ x: 0.5, y: 0.5 })
  const rafRef = useRef(null)

  useEffect(() => {
    const root = document.documentElement

    let isAnimating = false

    const animatePointer = () => {
      const { x: targetX, y: targetY } = pointerTarget.current
      const current = pointerPosition.current

      current.x += (targetX - current.x) * 0.08
      current.y += (targetY - current.y) * 0.08

      root.style.setProperty('--pointer-x', current.x.toFixed(4))
      root.style.setProperty('--pointer-y', current.y.toFixed(4))

      const deltaX = Math.abs(targetX - current.x)
      const deltaY = Math.abs(targetY - current.y)

      if (deltaX > 0.0005 || deltaY > 0.0005) {
        rafRef.current = requestAnimationFrame(animatePointer)
      } else {
        rafRef.current = null
        isAnimating = false
      }
    }

    const handlePointerMove = (event) => {
      const { innerWidth, innerHeight } = window

      pointerTarget.current = {
        x: event.clientX / innerWidth,
        y: event.clientY / innerHeight,
      }

      if (!isAnimating) {
        isAnimating = true
        rafRef.current = requestAnimationFrame(animatePointer)
      }
    }

    root.style.setProperty('--pointer-x', pointerPosition.current.x.toString())
    root.style.setProperty('--pointer-y', pointerPosition.current.y.toString())

    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 16 + Math.random() * 12,
        delay: Math.random() * 12,
        size: 3 + Math.random() * 7,
        driftX: (Math.random() - 0.5) * 80,
        driftY: -40 - Math.random() * 60,
      })),
    [],
  )

  return (
    <div className="background-canvas" aria-hidden="true">
      <div className="background-gradient" />
      <div className="background-grid" />
      <div className="background-ring" />
      <div className="background-orbs">
        <span className="background-orb" />
        <span className="background-orb background-orb--secondary" />
      </div>
      <div className="background-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="background-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              '--drift-x': `${particle.driftX}px`,
              '--drift-y': `${particle.driftY}px`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AnimatedBackground
