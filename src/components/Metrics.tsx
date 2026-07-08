import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { metrics, type Metric } from '../data'
import { useCountUp } from '../hooks/useCountUp'

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  const { ref, value } = useCountUp(metric.value)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -6 }}
      className="gradient-border p-6 relative overflow-hidden group"
    >
      {/* Glow wash on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 0%, ${metric.color}18 0%, transparent 70%)` }}
      />
      <div ref={ref} className="relative">
        <div
          className="text-4xl md:text-5xl font-black mb-2"
          style={{ fontFamily: 'Sora, sans-serif', color: metric.color, letterSpacing: '-0.02em' }}
        >
          {value}
          {metric.suffix}
        </div>
        <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
          {metric.label}
        </div>
        <div className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {metric.description}
        </div>
      </div>
    </motion.div>
  )
}

export default function Metrics() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="impact" className="section-wrapper relative overflow-hidden">
      <div className="orb orb-cyan" style={{ width: 500, height: 500, top: '-10%', left: '10%', opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="section-eyebrow">
            <span className="dot" /> Proof, not promises
          </span>
          <h2 className="section-title" style={{ fontFamily: 'Sora, sans-serif' }}>
            Impact I've <span className="gradient-text">shipped</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto" style={{ marginBottom: 0 }}>
            Real numbers from real production apps — the kind founders and CTOs
            actually care about.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
