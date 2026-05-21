import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiAlertCircle, FiCompass, FiTrendingUp, FiCode } from 'react-icons/fi'
import { caseStudies } from '../data'

export default function CaseStudies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })
  const [active, setActive] = useState(caseStudies[0].id)

  const current = caseStudies.find((c) => c.id === active) ?? caseStudies[0]

  return (
    <section id="case-studies" className="section-wrapper relative overflow-hidden">
      <div
        className="orb orb-cyan"
        style={{ width: 500, height: 500, top: '15%', left: '-12%', opacity: 0.45 }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title" style={{ fontFamily: 'Sora, sans-serif' }}>
            How I <span className="gradient-text">Solve Problems</span>
          </h2>
          <p className="section-subtitle">
            Three anonymized stories — problem, approach, and outcome
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {caseStudies.map((cs) => {
            const isActive = cs.id === active
            return (
              <motion.button
                key={cs.id}
                onClick={() => setActive(cs.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: isActive ? `${cs.color}1f` : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${isActive ? cs.color + '55' : 'rgba(255,255,255,0.08)'}`,
                  color: isActive ? cs.color : '#64748b',
                }}
              >
                {cs.domain}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Active case study */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="glass-card overflow-hidden"
          >
            {/* Top color bar */}
            <div
              className="h-1 w-full"
              style={{
                background: `linear-gradient(90deg, ${current.color}, ${current.color}44)`,
              }}
            />

            <div className="p-7 md:p-10">
              {/* Role + domain */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span
                  className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: `${current.color}1a`,
                    color: current.color,
                    border: `1px solid ${current.color}40`,
                  }}
                >
                  {current.role}
                </span>
                <span className="text-xs" style={{ color: '#64748b' }}>
                  Domain: {current.domain}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-7">
                {/* Challenge */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: '#ef444418', color: '#ef4444' }}
                    >
                      <FiAlertCircle size={15} />
                    </div>
                    <h3
                      className="font-bold text-sm uppercase tracking-wider"
                      style={{ color: '#f8fafc', fontFamily: 'Sora, sans-serif' }}
                    >
                      Challenge
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                    {current.challenge}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${current.color}18`, color: current.color }}
                    >
                      <FiCompass size={15} />
                    </div>
                    <h3
                      className="font-bold text-sm uppercase tracking-wider"
                      style={{ color: '#f8fafc', fontFamily: 'Sora, sans-serif' }}
                    >
                      Approach
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {current.approach.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed flex gap-2"
                        style={{ color: '#94a3b8' }}
                      >
                        <span
                          className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full"
                          style={{ background: current.color }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: '#10b98118', color: '#10b981' }}
                    >
                      <FiTrendingUp size={15} />
                    </div>
                    <h3
                      className="font-bold text-sm uppercase tracking-wider"
                      style={{ color: '#f8fafc', fontFamily: 'Sora, sans-serif' }}
                    >
                      Impact
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {current.impact.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed flex gap-2"
                        style={{ color: '#94a3b8' }}
                      >
                        <span
                          className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full"
                          style={{ background: '#10b981' }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stack */}
              <div
                className="mt-8 pt-6 flex items-center gap-3 flex-wrap"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-2 text-xs" style={{ color: '#64748b' }}>
                  <FiCode size={13} />
                  Stack:
                </div>
                {current.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                    style={{
                      background: `${current.color}10`,
                      color: current.color,
                      border: `1px solid ${current.color}28`,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
