import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGlobe, FiLayers, FiAward, FiUsers } from 'react-icons/fi'
import { projectCategories, projectMeta } from '../data'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section id="projects" className="section-wrapper relative overflow-hidden">
      <div
        className="orb orb-purple"
        style={{ width: 500, height: 500, top: '10%', right: '-15%', opacity: 0.4 }}
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
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">
            {projectMeta.total}+ production apps shipped across {projectMeta.countries.length} countries
          </p>
          <p className="text-xs mt-2" style={{ color: '#64748b', fontFamily: 'Fira Code, monospace' }}>
            * Project names withheld under client confidentiality
          </p>
        </motion.div>

        {/* Top stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {[
            { icon: FiLayers, label: 'Total Apps', value: `${projectMeta.total}+`, color: '#a78bfa' },
            { icon: FiAward, label: 'Lead Developer', value: projectMeta.leadRole, color: '#06b6d4' },
            { icon: FiUsers, label: 'Developer', value: projectMeta.developerRole, color: '#f59e0b' },
            { icon: FiGlobe, label: 'Countries', value: projectMeta.countries.length, color: '#10b981' },
          ].map((s) => (
            <div
              key={s.label}
              className="glass-card p-4 text-center"
              style={{ border: `1px solid ${s.color}22` }}
            >
              <s.icon size={18} style={{ color: s.color, margin: '0 auto 6px' }} />
              <div
                className="text-2xl font-black"
                style={{ color: s.color, fontFamily: 'Sora, sans-serif' }}
              >
                {s.value}
              </div>
              <div className="text-xs" style={{ color: '#64748b' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Category grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projectCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card project-card overflow-hidden relative group p-6"
            >
              <div
                className="h-1 w-full absolute top-0 left-0"
                style={{
                  background: `linear-gradient(90deg, ${cat.color}, ${cat.color}44)`,
                }}
              />

              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-lg font-bold"
                  style={{ color: '#f8fafc', fontFamily: 'Sora, sans-serif' }}
                >
                  {cat.name}
                </h3>
                <span
                  className="px-2.5 py-1 rounded-lg text-xs font-bold whitespace-nowrap"
                  style={{
                    background: `${cat.color}18`,
                    color: cat.color,
                    border: `1px solid ${cat.color}44`,
                  }}
                >
                  {cat.count} {cat.count === 1 ? 'app' : 'apps'}
                </span>
              </div>

              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                {cat.description}
              </p>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${cat.color}0a 0%, transparent 60%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Countries footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-14 text-center"
        >
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#64748b' }}>
            Shipped across
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {projectMeta.countries.map((c) => (
              <span
                key={c}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(124,58,237,0.08)',
                  color: '#a78bfa',
                  border: '1px solid rgba(124,58,237,0.25)',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
