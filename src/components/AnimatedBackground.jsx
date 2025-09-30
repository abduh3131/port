import { useEffect, useMemo, useRef } from 'react'

const AnimatedBackground = () => {
  const pointerTarget = useRef({ x: 0.5, y: 0.5 })
  const pointerPosition = useRef({ x: 0.5, y: 0.5 })
  const rafRef = useRef(null)

  useEffect(() => {
    const root = document.documentElement
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    let isAnimating = false

    const setPointer = (x, y) => {
      pointerTarget.current = { x, y }
      pointerPosition.current = { x, y }
      root.style.setProperty('--pointer-x', x.toFixed(4))
      root.style.setProperty('--pointer-y', y.toFixed(4))
    }

    const stopAnimation = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      isAnimating = false
    }

    const animatePointer = () => {
      const { x: targetX, y: targetY } = pointerTarget.current
      const current = pointerPosition.current

      current.x += (targetX - current.x) * 0.06
      current.y += (targetY - current.y) * 0.06

      root.style.setProperty('--pointer-x', current.x.toFixed(4))
      root.style.setProperty('--pointer-y', current.y.toFixed(4))

      const deltaX = Math.abs(targetX - current.x)
      const deltaY = Math.abs(targetY - current.y)

      if (deltaX > 0.001 || deltaY > 0.001) {
        rafRef.current = requestAnimationFrame(animatePointer)
      } else {
        stopAnimation()
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

    const enablePointerTracking = () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.addEventListener('pointermove', handlePointerMove, { passive: true })
    }

    const disablePointerTracking = () => {
      window.removeEventListener('pointermove', handlePointerMove)
      stopAnimation()
      setPointer(0.5, 0.5)
    }

    const handlePreferenceChange = (event) => {
      if (event.matches) {
        disablePointerTracking()
      } else {
        setPointer(pointerPosition.current.x, pointerPosition.current.y)
        enablePointerTracking()
      }
    }

    setPointer(pointerPosition.current.x, pointerPosition.current.y)

    if (mediaQuery.matches) {
      disablePointerTracking()
    } else {
      enablePointerTracking()
    }

    mediaQuery.addEventListener('change', handlePreferenceChange)

    return () => {
      disablePointerTracking()
      mediaQuery.removeEventListener('change', handlePreferenceChange)
    }
  }, [])

  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 20 + Math.random() * 16,
        delay: Math.random() * 14,
        size: 3 + Math.random() * 6,
        driftX: (Math.random() - 0.5) * 60,
        driftY: -30 - Math.random() * 50,
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
