import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '../data'
import TechMarquee from './TechMarquee'

const CATEGORY_ICONS: Record<string, string> = {
  Mobile: '📱',
  Languages: '💻',
  'State & Data': '🗄️',
  'Backend & Cloud': '☁️',
  'AI Tools': '🤖',
  DevOps: '⚙️',
  Leadership: '👑',
}

const CATEGORY_COLORS: Record<string, string> = {
  Mobile: '#7c3aed',
  Languages: '#06b6d4',
  'State & Data': '#f59e0b',
  'Backend & Cloud': '#10b981',
  'AI Tools': '#ec4899',
  DevOps: '#3b82f6',
  Leadership: '#8b5cf6',
}

const categories = Object.keys(skillCategories)

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState(categories[0])

  const currentSkills = skillCategories[activeTab] || []
  const color = CATEGORY_COLORS[activeTab] || '#7c3aed'

  return (
    <section id="skills" className="section-wrapper relative overflow-hidden">
      <div
        className="orb orb-purple"
        style={{ width: 500, height: 500, bottom: '-10%', left: '-15%', opacity: 0.5 }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="section-title" style={{ fontFamily: 'Sora, sans-serif' }}>
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I use to build great products</p>
        </motion.div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <TechMarquee />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((cat) => {
            const isActive = cat === activeTab
            const catColor = CATEGORY_COLORS[cat]
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveTab(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-250"
                style={{
                  background: isActive ? `${catColor}22` : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${isActive ? catColor + '55' : 'rgba(255,255,255,0.08)'}`,
                  color: isActive ? catColor : '#64748b',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                <span>{CATEGORY_ICONS[cat]}</span>
                {cat}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-5"
        >
          {currentSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ x: 4 }}
              className="glass-card p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="font-medium text-sm"
                  style={{ color: '#e2e8f0', fontFamily: 'Inter, sans-serif' }}
                >
                  {skill.name}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color, fontFamily: 'Fira Code, monospace' }}
                >
                  {skill.level}%
                </span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: skill.level / 100 } : { scaleX: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.07, ease: 'easeOut' }}
                  style={{
                    background: `linear-gradient(90deg, ${color} 0%, ${color}aa 100%)`,
                  }}
                />
              </div>

              {/* Level label */}
              <div className="mt-2">
                <span
                  className="text-xs px-2 py-0.5 rounded-md"
                  style={{
                    background: `${color}15`,
                    color: color,
                    fontFamily: 'Fira Code, monospace',
                  }}
                >
                  {skill.level >= 90
                    ? 'Expert'
                    : skill.level >= 80
                    ? 'Advanced'
                    : skill.level >= 70
                    ? 'Proficient'
                    : 'Familiar'}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All skills summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 glass-card p-8 text-center"
        >
          <h3
            className="text-xl font-bold mb-3"
            style={{ fontFamily: 'Sora, sans-serif', color: '#f8fafc' }}
          >
            Always Learning, Always Growing
          </h3>
          <p className="text-sm mb-6" style={{ color: '#94a3b8' }}>
            Beyond my primary tech stack, I continuously explore new tools, frameworks, and patterns
            to stay at the forefront of mobile development.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              'React Native', 'TypeScript', 'Redux', 'Firebase', 'CI/CD',
              'REST APIs', 'TanStack Query', 'SQLite', 'RevenueCat', 'OneSignal',
              'Stripe', 'Claude AI', 'GitHub Copilot', 'Performance Optimisation',
            ].map((tag) => (
              <span key={tag} className="tech-badge">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
