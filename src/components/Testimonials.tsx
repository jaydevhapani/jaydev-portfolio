import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMessageSquare } from 'react-icons/fi'
import { testimonials } from '../data'

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="testimonials" className="section-wrapper relative overflow-hidden">
      <div
        className="orb orb-pink"
        style={{ width: 480, height: 480, bottom: '-12%', right: '-10%', opacity: 0.35 }}
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
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="section-subtitle">From clients, teammates, and the developers I've mentored</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass-card p-7 relative overflow-hidden flex flex-col"
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${t.color}1a`,
                  color: t.color,
                  border: `1px solid ${t.color}33`,
                }}
              >
                <FiMessageSquare size={18} />
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: '#cbd5e1', fontStyle: 'italic' }}
              >
                "{t.quote}"
              </p>

              {/* Attribution */}
              <div
                className="pt-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p
                  className="font-semibold text-sm"
                  style={{ color: '#f8fafc', fontFamily: 'Sora, sans-serif' }}
                >
                  {t.attribution}
                </p>
                <p className="text-xs mt-0.5" style={{ color: t.color }}>
                  {t.role}
                </p>
              </div>

              {/* Background glow */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: t.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-xs text-center mt-8"
          style={{ color: '#475569', fontFamily: 'Fira Code, monospace' }}
        >
          * Names withheld to respect client &amp; teammate privacy. Verifiable on request.
        </motion.p>
      </div>
    </section>
  )
}
