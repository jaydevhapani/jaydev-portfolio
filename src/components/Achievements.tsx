import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { achievements } from '../data'

const ICONS: Record<string, string> = {
  star: '⭐',
  trophy: '🏆',
  certificate: '🎓',
}

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="achievements" className="section-wrapper relative overflow-hidden">
      <div
        className="orb orb-cyan"
        style={{ width: 400, height: 400, bottom: '-5%', left: '-10%', opacity: 0.4 }}
      />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="section-title" style={{ fontFamily: 'Sora, sans-serif' }}>
            Awards &{' '}
            <span className="gradient-text">Recognition</span>
          </h2>
          <p className="section-subtitle">Milestones earned along the journey</p>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              {/* Card */}
              <div
                className="glass-card p-8 h-full relative overflow-hidden"
                style={{
                  border: `1px solid ${ach.color}22`,
                }}
              >
                {/* Gradient glow bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${ach.color}10 0%, transparent 60%)`,
                  }}
                />

                {/* Top border gradient */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${ach.color}, transparent)`,
                    opacity: 0.7,
                  }}
                />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl"
                  style={{
                    background: `${ach.color}18`,
                    border: `1px solid ${ach.color}30`,
                    boxShadow: `0 0 24px ${ach.color}20`,
                  }}
                >
                  {ICONS[ach.icon]}
                </motion.div>

                {/* Year badge */}
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{
                    background: `${ach.color}15`,
                    color: ach.color,
                    border: `1px solid ${ach.color}30`,
                    fontFamily: 'Fira Code, monospace',
                  }}
                >
                  {ach.year}
                </div>

                <h3
                  className="text-lg font-bold mb-2 leading-snug"
                  style={{ color: '#f8fafc', fontFamily: 'Sora, sans-serif' }}
                >
                  {ach.title}
                </h3>

                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: ach.color }}
                >
                  {ach.company}
                </p>

                <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 h-px origin-left"
          style={{
            background: 'linear-gradient(90deg, #7c3aed, #06b6d4, transparent)',
          }}
        />

        {/* Education highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 glass-card p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.3)' }}
          >
            🎓
          </div>
          <div>
            <h4
              className="text-base font-bold mb-1"
              style={{ color: '#f8fafc', fontFamily: 'Sora, sans-serif' }}
            >
              Bachelor of Science (B.Sc.) – Computer Science
            </h4>
            <p className="text-sm" style={{ color: '#94a3b8' }}>
              IIMT, Delhi • Graduated 2021
            </p>
          </div>
          <div className="md:ml-auto">
            <span
              className="px-4 py-2 rounded-xl text-sm font-semibold"
              style={{
                background: 'rgba(6,182,212,0.12)',
                border: '1px solid rgba(6,182,212,0.25)',
                color: '#67e8f9',
              }}
            >
              B.Sc. Computer Science
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
