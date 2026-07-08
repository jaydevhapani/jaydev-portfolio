import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiAlertTriangle,
  FiCode,
  FiSearch,
  FiTag,
  FiZap,
  FiCheckSquare,
  FiFileText,
  FiGitPullRequest,
  FiUser,
} from 'react-icons/fi'
import { currentlyBuilding } from '../data'

const ICONS: Record<string, typeof FiCode> = {
  alert: FiAlertTriangle,
  code: FiCode,
  search: FiSearch,
  ticket: FiTag,
  bulb: FiZap,
  check: FiCheckSquare,
  doc: FiFileText,
  git: FiGitPullRequest,
  user: FiUser,
}

export default function CurrentlyBuilding() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="building" className="section-wrapper relative overflow-hidden">
      <div className="orb orb-cyan" style={{ width: 520, height: 520, bottom: '-10%', left: '-12%', opacity: 0.4 }} />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="status-pill mb-5">
            <span className="live-dot" />
            Currently building
          </span>
          <h2 className="section-title" style={{ fontFamily: 'Sora, sans-serif' }}>
            {currentlyBuilding.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{currentlyBuilding.title.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto mt-3" style={{ color: '#67e8f9', fontFamily: 'Sora, sans-serif' }}>
            {currentlyBuilding.tagline}
          </p>
          <p className="section-subtitle max-w-2xl mx-auto mt-4" style={{ marginBottom: 0 }}>
            {currentlyBuilding.description}
          </p>
        </motion.div>

        {/* Flow diagram */}
        <div className="glass-card p-6 md:p-10 relative overflow-hidden">
          {/* Ambient grid */}
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentlyBuilding.steps.map((step, i) => {
              const Icon = ICONS[step.icon] || FiCode
              const isLast = i === currentlyBuilding.steps.length - 1
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="relative rounded-2xl p-5 flex items-center gap-4"
                  style={{
                    background: isLast ? 'rgba(16, 185, 129, 0.08)' : 'rgba(6, 182, 212, 0.05)',
                    border: `1px solid ${isLast ? 'rgba(16,185,129,0.3)' : 'rgba(6,182,212,0.18)'}`,
                  }}
                >
                  {/* Step number */}
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: isLast
                        ? 'linear-gradient(135deg, #10b981, #34d399)'
                        : 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                      boxShadow: `0 0 20px ${isLast ? 'rgba(16,185,129,0.4)' : 'rgba(6,182,212,0.35)'}`,
                    }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[0.7rem] font-mono" style={{ color: 'var(--text-muted)' }}>
                      Step {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                      {step.label}
                    </p>
                  </div>

                  {/* Pulsing arrow between nodes (hidden on last) */}
                  {!isLast && (
                    <motion.div
                      className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-xs"
                      style={{ color: '#22d3ee' }}
                      animate={{ x: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                      transition={{ repeat: Infinity, duration: 1.8, delay: i * 0.1 }}
                    >
                      ▶
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Closing loop caption */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-xs mt-8 font-mono"
            style={{ color: 'var(--text-muted)' }}
          >
            crash detected → root cause → fix shipped · the loop closes itself
          </motion.p>
        </div>
      </div>
    </section>
  )
}
