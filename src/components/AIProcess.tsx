import { useRef } from 'react'
import { motion, useInView, useScroll, useSpring } from 'framer-motion'
import { processSteps } from '../data'

export default function AIProcess() {
  const ref = useRef(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  // Progress line that fills as you scroll through the timeline.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 65%', 'end 60%'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 80, damping: 24 })

  return (
    <section id="process" className="section-wrapper relative overflow-hidden">
      <div className="orb orb-purple" style={{ width: 500, height: 500, top: '10%', right: '-15%', opacity: 0.45 }} />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-eyebrow">
            <span className="dot" /> My process
          </span>
          <h2 className="section-title" style={{ fontFamily: 'Sora, sans-serif' }}>
            How I build products <span className="gradient-text">with AI</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto" style={{ marginBottom: 0 }}>
            A repeatable, AI-accelerated workflow that takes an idea from research
            to a monitored, scaling product — not just code that compiles.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={trackRef} className="relative">
          {/* Base line */}
          <div
            className="absolute top-0 bottom-0 w-px md:left-1/2 left-[19px] -translate-x-1/2"
            style={{ background: 'var(--border)' }}
          />
          {/* Animated fill line */}
          <motion.div
            className="absolute top-0 w-px md:left-1/2 left-[19px] -translate-x-1/2 origin-top"
            style={{
              scaleY: lineScale,
              height: '100%',
              background: 'linear-gradient(180deg, #22d3ee 0%, #8b5cf6 50%, #ec4899 100%)',
              boxShadow: '0 0 12px rgba(139, 92, 246, 0.5)',
            }}
          />

          <div className="flex flex-col gap-10 md:gap-4">
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={step.phase}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    className="absolute md:left-1/2 left-[19px] -translate-x-1/2 z-10 w-4 h-4 rounded-full"
                    style={{
                      background: step.color,
                      boxShadow: `0 0 0 4px var(--bg-primary), 0 0 16px ${step.color}`,
                    }}
                  />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className={`glass-card p-6 ml-14 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-md"
                        style={{ background: `${step.color}1e`, color: step.color, fontFamily: 'Fira Code, monospace' }}
                      >
                        {step.phase}
                      </span>
                      <h3 className="text-lg font-bold" style={{ fontFamily: 'Sora, sans-serif', color: 'var(--text-primary)' }}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2.5 py-1 rounded-md font-medium"
                          style={{ background: `${step.color}14`, color: step.color, border: `1px solid ${step.color}30` }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
