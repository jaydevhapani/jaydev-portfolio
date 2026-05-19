import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

const COLORS = ['rgba(37, 99, 235', 'rgba(124, 58, 237', 'rgba(96, 165, 250']
const LINK_DIST_SQ = 110 * 110
const LINK_DIST = 110

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    // Fewer particles = much less CPU
    const count = Math.min(40, Math.floor((window.innerWidth * window.innerHeight) / 25000))
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.35 + 0.08,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    let animId: number
    let lastTime = 0
    // Cap at ~30fps for background canvas — smooth enough, half the CPU
    const FRAME_MS = 1000 / 30

    const draw = (now: number) => {
      animId = requestAnimationFrame(draw)
      if (now - lastTime < FRAME_MS) return
      lastTime = now

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}, ${p.opacity})`
        ctx.fill()

        // Use squared distance — no sqrt until we need the alpha
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distSq = dx * dx + dy * dy
          if (distSq < LINK_DIST_SQ) {
            const alpha = (1 - Math.sqrt(distSq) / LINK_DIST) * 0.12
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    animId = requestAnimationFrame(draw)
    window.addEventListener('resize', resize, { passive: true })

    // Pause when tab is hidden to save CPU
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animId)
      } else {
        animId = requestAnimationFrame(draw)
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
}
