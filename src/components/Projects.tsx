import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGlobe, FiLayers, FiCode } from 'react-icons/fi'
import { projects } from '../data'

type Filter = 'all' | 'lead' | 'developer'

const FILTERS: { value: Filter; label: string; count?: number }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'lead', label: 'Lead Developer' },
  { value: 'developer', label: 'Developer' },
]

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.roleType === filter)

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
          className="mb-14 text-center"
        >
          <h2 className="section-title" style={{ fontFamily: 'Sora, sans-serif' }}>
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">19 production apps shipped across 10+ countries</p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex gap-3 justify-center mb-10 flex-wrap"
        >
          {FILTERS.map((f) => {
            const count =
              f.value === 'all'
                ? projects.length
                : projects.filter((p) => p.roleType === f.value).length
            return (
              <motion.button
                key={f.value}
                onClick={() => setFilter(f.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-2.5 rounded-xl text-sm font-medium overflow-hidden"
                style={{
                  background:
                    filter === f.value
                      ? 'linear-gradient(135deg, #7c3aed22, #06b6d422)'
                      : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${filter === f.value ? '#7c3aed55' : 'rgba(255,255,255,0.08)'}`,
                  color: filter === f.value ? '#a78bfa' : '#64748b',
                }}
              >
                {f.label}
                <span
                  className="ml-2 px-1.5 py-0.5 rounded-md text-xs"
                  style={{
                    background:
                      filter === f.value ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.06)',
                    color: filter === f.value ? '#a78bfa' : '#475569',
                  }}
                >
                  {count}
                </span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card project-card overflow-hidden relative group"
              >
                {/* Top color bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, ${project.color}44)`,
                  }}
                />

                <div className="p-5">
                  {/* Number + role badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-4xl font-black opacity-10 select-none"
                      style={{ color: project.color, fontFamily: 'Sora, sans-serif' }}
                    >
                      {String(project.id).padStart(2, '0')}
                    </span>
                    <span
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                      style={{
                        background:
                          project.roleType === 'lead'
                            ? 'rgba(124,58,237,0.15)'
                            : 'rgba(6,182,212,0.12)',
                        color: project.roleType === 'lead' ? '#a78bfa' : '#67e8f9',
                        border: `1px solid ${project.roleType === 'lead' ? '#7c3aed44' : '#06b6d444'}`,
                      }}
                    >
                      {project.roleType === 'lead' ? 'Lead Dev' : 'Developer'}
                    </span>
                  </div>

                  {/* Project name */}
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ color: '#f8fafc', fontFamily: 'Sora, sans-serif' }}
                  >
                    {project.name}
                  </h3>

                  {/* Meta row */}
                  <div className="flex items-center gap-3 mb-3">
                    {project.country !== '—' && (
                      <div
                        className="flex items-center gap-1 text-xs"
                        style={{ color: '#64748b' }}
                      >
                        <FiGlobe size={11} />
                        {project.country}
                      </div>
                    )}
                    <div
                      className="flex items-center gap-1 text-xs"
                      style={{ color: '#64748b' }}
                    >
                      <FiLayers size={11} />
                      {project.domain}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-4 line-clamp-3"
                    style={{ color: '#94a3b8' }}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-xs font-medium"
                        style={{
                          background: `${project.color}12`,
                          color: project.color,
                          border: `1px solid ${project.color}30`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span
                        className="px-2 py-0.5 rounded-md text-xs font-medium"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          color: '#64748b',
                        }}
                      >
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${project.color}08 0%, transparent 60%)`,
                  }}
                />

                {/* Code icon overlay on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <FiCode size={16} style={{ color: project.color }} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-14 text-center"
        >
          <p className="text-sm" style={{ color: '#64748b' }}>
            Shipped across{' '}
            <span style={{ color: '#a78bfa' }}>India, UK, USA, Australia, Africa, Dubai, China, South Africa</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
