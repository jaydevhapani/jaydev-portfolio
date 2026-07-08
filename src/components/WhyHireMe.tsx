import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiTarget,
  FiShield,
  FiLayers,
  FiCpu,
  FiTrendingUp,
  FiMessageCircle,
} from 'react-icons/fi'
import { hireReasons } from '../data'

const ICONS: Record<string, typeof FiTarget> = {
  product: FiTarget,
  ownership: FiShield,
  architecture: FiLayers,
  ai: FiCpu,
  scale: FiTrendingUp,
  comms: FiMessageCircle,
  ship: FiTrendingUp,
}

export default function WhyHireMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="why-me" className="section-wrapper relative overflow-hidden">
      <div className="orb orb-purple" style={{ width: 500, height: 500, top: '-5%', left: '-15%', opacity: 0.4 }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="section-eyebrow">
            <span className="dot" /> Beyond the stack
          </span>
          <h2 className="section-title" style={{ fontFamily: 'Sora, sans-serif' }}>
            Why founders <span className="gradient-text">hire me</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto" style={{ marginBottom: 0 }}>
            You can hire a developer anywhere. You hire me for judgment, ownership,
            and a product that still stands up at scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hireReasons.map((reason, i) => {
            const Icon = ICONS[reason.icon] || FiTarget
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-7 group relative overflow-hidden"
              >
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${reason.color}22 0%, transparent 70%)` }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative"
                  style={{ background: `${reason.color}18`, color: reason.color, border: `1px solid ${reason.color}33` }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold mb-2.5 relative" style={{ fontFamily: 'Sora, sans-serif', color: 'var(--text-primary)' }}>
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed relative" style={{ color: 'var(--text-muted)' }}>
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
