import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiSend,
  FiGlobe,
} from 'react-icons/fi'
import { personalInfo } from '../data'

const contactItems = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#7c3aed',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: '#06b6d4',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'hapani-jaydev-33a34b20a',
    href: personalInfo.linkedin,
    color: '#0077b5',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'jaydevhapani',
    href: personalInfo.github,
    color: '#f8fafc',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
    color: '#f59e0b',
  },
  {
    icon: FiGlobe,
    label: 'Remote Work',
    value: 'Open to Remote & Relocation',
    href: null,
    color: '#10b981',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="contact" className="section-wrapper relative overflow-hidden">
      <div
        className="orb orb-purple"
        style={{ width: 500, height: 500, bottom: '-15%', right: '-10%', opacity: 0.5 }}
      />
      <div
        className="orb orb-cyan"
        style={{ width: 400, height: 400, top: '10%', left: '-10%', opacity: 0.3 }}
      />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p
            className="text-sm mb-3"
            style={{ color: '#7c3aed', fontFamily: 'Fira Code, monospace' }}
          >
            {'// 06. contact'}
          </p>
          <h2 className="section-title" style={{ fontFamily: 'Sora, sans-serif' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            I'm actively looking for new opportunities. Whether you have a question, a project idea,
            or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 h-full flex flex-col justify-between">
              <div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'Sora, sans-serif', color: '#f8fafc' }}
                >
                  Open to New Opportunities
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#94a3b8' }}>
                  With 5+ years of React Native expertise and a track record of leading teams and
                  shipping 19+ apps globally, I bring both technical depth and leadership experience
                  to any mobile team.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Senior React Native Developer roles',
                    'Mobile Team Lead positions',
                    'Remote-friendly companies',
                    'Innovative product teams',
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: '#94a3b8' }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
                      />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary inline-flex justify-center"
              >
                <FiSend size={16} />
                <span>Send Me an Email</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Contact info grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start"
          >
            {contactItems.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="glass-card p-5"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${color}18`, color }}
                >
                  <Icon size={18} />
                </div>
                <p className="text-xs mb-1" style={{ color: '#64748b' }}>
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium transition-colors hover:underline break-all"
                    style={{ color: color === '#f8fafc' ? '#e2e8f0' : color }}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium" style={{ color: '#e2e8f0' }}>
                    {value}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 glass-card p-6 text-center"
        >
          <p className="text-sm mb-3" style={{ color: '#64748b' }}>
            I speak
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {personalInfo.languages.map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{
                  background: 'rgba(124,58,237,0.12)',
                  border: '1px solid rgba(124,58,237,0.25)',
                  color: '#a78bfa',
                }}
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
