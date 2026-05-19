import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiBook, FiGlobe, FiUser } from 'react-icons/fi'
import { personalInfo, stats } from '../data'

const allSkillTags = [
  'React Native', 'TypeScript', 'JavaScript', 'Redux', 'Firebase',
  'CI/CD', 'REST APIs', 'TanStack Query', 'SQLite', 'Realm DB',
  'WatermelonDB', 'Android', 'iOS', 'Play Store', 'App Store',
  'RevenueCat', 'OneSignal', 'Stripe', 'Google Maps', 'GitHub Copilot',
]

const infoCards = [
  { icon: FiMapPin, label: 'Location', value: personalInfo.location, color: '#7c3aed' },
  { icon: FiBook, label: 'Education', value: personalInfo.education.degree, color: '#06b6d4' },
  { icon: FiGlobe, label: 'Languages', value: personalInfo.languages.join(', '), color: '#f59e0b' },
  { icon: FiUser, label: 'Available For', value: 'Full-time & Remote', color: '#10b981' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="about" className="section-wrapper relative overflow-hidden">
      {/* Orbs */}
      <div className="orb orb-cyan" style={{ width: 400, height: 400, top: '0%', right: '-10%' }} />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16 text-center"
        >
          <h2 className="section-title" style={{ fontFamily: 'Sora, sans-serif' }}>
            Who Am{' '}
            <span className="gradient-text">I?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Bio */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={1}
              className="text-base leading-relaxed mb-5"
              style={{ color: '#94a3b8' }}
            >
              I'm a <span style={{ color: '#a78bfa', fontWeight: 600 }}>Senior React Native Developer</span> and{' '}
              <span style={{ color: '#67e8f9', fontWeight: 600 }}>Mobile Team Lead</span> based in Ahmedabad, India,
              with over 5 years of hands-on experience crafting high-performance, cross-platform mobile applications
              for Android and iOS.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={2}
              className="text-base leading-relaxed mb-5"
              style={{ color: '#94a3b8' }}
            >
              At <span style={{ color: '#a78bfa', fontWeight: 600 }}>Webs Optimization Pvt. Ltd.</span>, I lead the
              entire mobile development lifecycle — from product discovery and technical architecture to CI/CD pipelines,
              release management, and post-production monitoring. I own the Firebase stack, manage Google Play Console,
              and maintain daily code quality standards across the team.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={3}
              className="text-base leading-relaxed mb-10"
              style={{ color: '#94a3b8' }}
            >
              I'm a strong advocate for leveraging{' '}
              <span style={{ color: '#f59e0b', fontWeight: 600 }}>AI tools</span> — including Claude, GitHub
              Copilot, ChatGPT, Gemini, and DeepSeek — to accelerate development, improve code quality, and
              deliver smarter, more scalable solutions.
            </motion.p>

            {/* Info cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map(({ icon: Icon, label, value, color }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={4 + i}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="glass-card p-4 flex items-start gap-3"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}20`, color }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: '#64748b' }}>{label}</p>
                    <p className="text-sm font-medium" style={{ color: '#e2e8f0' }}>{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Stats + Tags */}
          <div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map(({ label, value, suffix }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={i + 1}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="gradient-border p-6 text-center relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      background: `radial-gradient(circle at center, #7c3aed 0%, transparent 70%)`,
                    }}
                  />
                  <div
                    className="text-4xl font-black mb-1 gradient-text"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {value}{suffix}
                  </div>
                  <div className="text-sm" style={{ color: '#64748b' }}>{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Skill tags */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={6}
            >
              <p className="text-sm font-medium mb-4" style={{ color: '#64748b' }}>
                Technologies I work with:
              </p>
              <div className="flex flex-wrap gap-2">
                {allSkillTags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.4 + i * 0.04 }}
                    whileHover={{ scale: 1.08 }}
                    className="tech-badge cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Education card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={8}
              className="glass-card p-5 mt-8"
            >
              <div className="flex items-center gap-3 mb-1">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(6,182,212,0.15)', color: '#06b6d4' }}
                >
                  <FiBook size={15} />
                </div>
                <span className="text-sm font-semibold" style={{ color: '#f8fafc' }}>
                  {personalInfo.education.degree}
                </span>
              </div>
              <p className="text-xs pl-11" style={{ color: '#64748b' }}>
                {personalInfo.education.institution} • Graduated {personalInfo.education.year}
              </p>
              <p className="text-xs pl-11 mt-1" style={{ color: '#a78bfa' }}>
                Android Knowledge Certification – Google
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
