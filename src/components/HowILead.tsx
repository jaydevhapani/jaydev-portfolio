import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGitPullRequest, FiFileText, FiUsers, FiCheck } from 'react-icons/fi'
import { leadershipPrinciples, type LeadershipPrinciple } from '../data'

const ICONS: Record<LeadershipPrinciple['icon'], typeof FiGitPullRequest> = {
  review: FiGitPullRequest,
  fsd: FiFileText,
  mentor: FiUsers,
}

export default function HowILead() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="how-i-lead" className="section-wrapper relative overflow-hidden">
      <div
        className="orb orb-purple"
        style={{ width: 460, height: 460, top: '5%', right: '-12%', opacity: 0.4 }}
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
            Leading <span className="gradient-text">By Practice</span>
          </h2>
          <p className="section-subtitle">
            Code reviews, FSDs, and mentorship — the three things a Mobile Team Lead actually does every week
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {leadershipPrinciples.map((p, i) => {
            const Icon = ICONS[p.icon]
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card overflow-hidden relative group"
              >
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${p.color}, ${p.color}44)`,
                  }}
                />

                <div className="p-6">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${p.color}1a`,
                      color: p.color,
                      border: `1px solid ${p.color}33`,
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: '#f8fafc', fontFamily: 'Sora, sans-serif' }}
                  >
                    {p.title}
                  </h3>

                  {/* Summary */}
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: '#94a3b8' }}
                  >
                    {p.summary}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {p.bullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="text-sm leading-relaxed flex gap-2.5"
                        style={{ color: '#cbd5e1' }}
                      >
                        <FiCheck
                          size={14}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: p.color }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${p.color}0a 0%, transparent 60%)`,
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
