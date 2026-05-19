import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiPhone, FiDownload } from 'react-icons/fi'
import ParticleBackground from './ParticleBackground'
import { useTypewriter } from '../hooks/useTypewriter'
import { personalInfo, stats } from '../data'

const socialLinks = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  { icon: FiPhone, href: `tel:${personalInfo.phone}`, label: 'Phone' },
]

const floatingBadges = [
  { label: 'React Native', color: '#06b6d4', delay: 0 },
  { label: 'TypeScript', color: '#3b82f6', delay: 0.5 },
  { label: 'Firebase', color: '#f59e0b', delay: 1.0 },
  { label: 'Team Lead', color: '#10b981', delay: 1.5 },
  { label: '5+ Years', color: '#ec4899', delay: 2.0 },
  { label: 'CI/CD', color: '#22d3ee', delay: 2.5 },
]

export default function Hero() {
  const typedText = useTypewriter(personalInfo.roles, 75, 2000)
  const [photoError, setPhotoError] = useState(false)

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
    >
      <ParticleBackground />

      {/* Gradient orbs */}
      <div className="orb orb-purple" style={{ width: 600, height: 600, top: '-10%', left: '-15%' }} />
      <div className="orb orb-cyan" style={{ width: 500, height: 500, bottom: '0%', right: '-10%' }} />
      <div className="orb orb-pink" style={{ width: 400, height: 400, top: '40%', left: '30%' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mb-2"
              style={{ color: 'var(--text-muted)', fontFamily: 'Inter, sans-serif' }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-bold leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontFamily: 'Sora, sans-serif' }}
            >
              <span className="shimmer-text">Jaydev</span>
              <br />
              <span style={{ color: 'var(--text-primary)' }}>Hapani</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-2 mb-8 justify-center lg:justify-start"
              style={{ minHeight: 36 }}
            >
              <span
                className="text-xl font-semibold"
                style={{ color: 'var(--secondary-light)', fontFamily: 'Inter, sans-serif' }}
              >
                {typedText}
              </span>
              <span
                className="w-0.5 h-6 animate-blink"
                style={{ background: 'var(--secondary-light)' }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
              style={{ color: 'var(--text-muted)' }}
            >
              {personalInfo.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                <span>View Projects</span>
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
              >
                Contact Me
              </motion.button>
              {personalInfo.resumeUrl && (
                <motion.a
                  href={personalInfo.resumeUrl}
                  download="Jaydev_Hapani_Resume.pdf"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-secondary inline-flex gap-2 items-center"
                >
                  <FiDownload size={16} />
                  <span>Download Resume</span>
                </motion.a>
              )}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(6, 182, 212, 0.08)',
                    border: '1px solid rgba(6, 182, 212, 0.18)',
                    color: 'var(--text-muted)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'
                    e.currentTarget.style.color = '#22d3ee'
                    e.currentTarget.style.background = 'rgba(6, 182, 212, 0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.18)'
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.background = 'rgba(6, 182, 212, 0.08)'
                  }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <div className="h-6 w-px mx-1" style={{ background: 'var(--border)' }} />
              <span className="text-sm" style={{ color: 'var(--secondary-light)' }}>
                {personalInfo.location}
              </span>
            </motion.div>
          </div>

          {/* Right: Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex-shrink-0 relative"
          >
            {/* Spinning outer ring */}
            <div
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center animate-spin-slow"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0%, #06b6d4 30%, transparent 60%, #3b82f6 90%, transparent 100%)',
                padding: 2,
              }}
            >
              <div className="w-full h-full rounded-full" style={{ background: 'var(--bg-primary)' }} />
            </div>

            {/* Profile photo / initials fallback */}
            <div
              className="absolute inset-3 rounded-full overflow-hidden"
              style={{ border: '1px solid rgba(6, 182, 212, 0.25)' }}
            >
              {!photoError ? (
                <img
                  src="/profile.jpg"
                  alt="Jaydev Hapani"
                  className="w-full h-full object-cover object-center"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center animate-pulse-glow"
                  style={{
                    background: 'radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
                  }}
                >
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center mb-3"
                    style={{
                      background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                      boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)',
                      fontFamily: 'Sora, sans-serif',
                    }}
                  >
                    <span className="text-4xl font-bold text-white">JH</span>
                  </div>
                  <div className="text-center px-4" style={{ fontFamily: 'Fira Code, monospace' }}>
                    <p className="text-xs" style={{ color: 'var(--secondary-light)' }}>
                      {'<'}<span style={{ color: '#22d3ee' }}>developer</span>{' />'}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Floating skill badges */}
            {floatingBadges.map((badge, i) => {
              const angle = (i / floatingBadges.length) * 360 - 90
              const rad = (angle * Math.PI) / 180
              const r = 175
              const cx = 160
              const cy = 160
              const x = cx + r * Math.cos(rad) - 50
              const y = cy + r * Math.sin(rad) - 16

              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + badge.delay * 0.3, type: 'spring' }}
                  className="absolute px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap"
                  style={{
                    left: x,
                    top: y,
                    background: `${badge.color}1a`,
                    border: `1px solid ${badge.color}44`,
                    color: badge.color,
                    backdropFilter: 'blur(8px)',
                    animation: `float ${5 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${badge.delay}s`,
                  }}
                >
                  {badge.label}
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card p-5 text-center"
            >
              <div
                className="text-3xl font-bold mb-1 gradient-text"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="text-xs" style={{ color: 'var(--secondary-dark)', fontFamily: 'Fira Code, monospace' }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ border: '1px solid var(--border)' }}
        >
          <FiArrowDown size={14} style={{ color: '#06b6d4' }} />
        </motion.div>
      </motion.button>
    </section>
  )
}
