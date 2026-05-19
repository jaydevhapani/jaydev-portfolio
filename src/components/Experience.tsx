import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi'
import { experiences } from '../data'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="section-wrapper relative overflow-hidden">
      <div
        className="orb orb-cyan"
        style={{ width: 450, height: 450, top: '20%', right: '-10%', opacity: 0.4 }}
      />

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title" style={{ fontFamily: 'Sora, sans-serif' }}>
            Career <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">5+ years of building mobile experiences</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
            className="absolute left-6 top-0 bottom-0 w-0.5 origin-top"
            style={{
              background: 'linear-gradient(180deg, #7c3aed 0%, #06b6d4 60%, transparent 100%)',
            }}
          />

          <div className="space-y-10 pl-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring' }}
                  className="absolute -left-16 top-5 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: exp.color,
                    boxShadow: `0 0 16px ${exp.color}80`,
                    border: `3px solid #050816`,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="glass-card p-6 gradient-border"
                  style={{
                    borderLeft: `3px solid ${exp.color}`,
                    borderRadius: '0 16px 16px 0',
                  }}
                >
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className="text-lg font-bold"
                          style={{ color: '#f8fafc', fontFamily: 'Sora, sans-serif' }}
                        >
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-semibold"
                            style={{
                              background: 'rgba(16, 185, 129, 0.15)',
                              color: '#10b981',
                              border: '1px solid rgba(16,185,129,0.3)',
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <FiBriefcase size={13} style={{ color: exp.color }} />
                        <span
                          className="font-semibold text-sm"
                          style={{ color: exp.color }}
                        >
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <div
                        className="flex items-center gap-1.5 text-xs"
                        style={{ color: '#64748b' }}
                      >
                        <FiCalendar size={11} />
                        {exp.period}
                      </div>
                      <div
                        className="flex items-center gap-1.5 text-xs"
                        style={{ color: '#64748b' }}
                      >
                        <FiMapPin size={11} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2">
                    {exp.points.map((point, pi) => (
                      <motion.li
                        key={pi}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 + i * 0.1 + pi * 0.02 }}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ color: '#94a3b8' }}
                      >
                        <FiCheckCircle
                          size={14}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: exp.color }}
                        />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
