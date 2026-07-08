import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown, FiArrowRight, FiCalendar } from 'react-icons/fi'
import ParticleBackground from './ParticleBackground'
import { useTypewriter } from '../hooks/useTypewriter'
import { personalInfo, stats, trustSignals } from '../data'

const socialLinks = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
]

const floatingBadges = [
  { label: 'AI Product Engineer', color: '#8b5cf6', delay: 0 },
  { label: 'React Native', color: '#06b6d4', delay: 0.5 },
  { label: 'Mobile Architect', color: '#3b82f6', delay: 1.0 },
  { label: '19+ Apps Shipped', color: '#10b981', delay: 1.5 },
  { label: 'Team Lead', color: '#f59e0b', delay: 2.0 },
  { label: '70% Fewer Crashes', color: '#ec4899', delay: 2.5 },
]

export default function Hero() {
  const typedText = useTypewriter(personalInfo.roles, 75, 2000)
  const [photoError, setPhotoError] = useState(false)

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-6 flex justify-center lg:justify-start"
            >
              <span className="status-pill">
                <span className="live-dot" />
                Available for select projects · Remote-first
              </span>
            </motion.div>

            {/* Name kicker */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm font-medium mb-4 tracking-wide"
              style={{ color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace' }}
            >
              {personalInfo.name} — {personalInfo.location}
            </motion.p>

            {/* Outcome headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-bold mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', lineHeight: 1.05, fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}
            >
              <span style={{ color: 'var(--text-primary)' }}>Building </span>
              <span className="shimmer-text">AI-powered mobile products</span>
              <br />
              <span style={{ color: 'var(--text-primary)' }}>that ship fast and </span>
              <span className="gradient-text">scale.</span>
            </motion.h1>

            {/* Rotating positioning subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-2 mb-6 justify-center lg:justify-start"
              style={{ minHeight: 32 }}
            >
              <span className="text-lg md:text-xl font-semibold" style={{ color: '#67e8f9', fontFamily: 'Sora, sans-serif' }}>
                {typedText}
              </span>
              <span className="w-0.5 h-6 animate-blink" style={{ background: '#67e8f9' }} />
            </motion.div>

            {/* Value paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ color: 'var(--text-muted)' }}
            >
              {personalInfo.tagline} From architecture and AI-assisted development to release
              and crash monitoring — I own the outcome, not just the code.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                onClick={() => scrollTo('contact')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                <FiCalendar size={16} />
                <span>Book a Discovery Call</span>
              </motion.button>
              <motion.button
                onClick={() => scrollTo('case-studies')}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
              >
                <span>View Case Studies</span>
                <FiArrowRight size={16} />
              </motion.button>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 justify-center lg:justify-start mb-6"
            >
              {trustSignals.map((signal) => (
                <span key={signal} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22d3ee' }} />
                  {signal}
                </span>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(6, 182, 212, 0.08)',
                    border: '1px solid rgba(6, 182, 212, 0.18)',
                    color: 'var(--text-muted)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)'
                    e.currentTarget.style.color = '#22d3ee'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.18)'
                    e.currentTarget.style.color = 'var(--text-muted)'
                  }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <div className="h-6 w-px mx-1" style={{ background: 'var(--border)' }} />
              <span className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace' }}>
                {personalInfo.timezone}
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
            <div className="absolute inset-3 rounded-full overflow-hidden" style={{ border: '1px solid rgba(6, 182, 212, 0.25)' }}>
              {!photoError ? (
                <img
                  src="/profile.jpg"
                  alt="Jaydev Hapani — AI Product Engineer and Senior Mobile Architect"
                  className="w-full h-full object-cover object-center"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center animate-pulse-glow"
                  style={{ background: 'radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)' }}
                >
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center mb-3"
                    style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)', fontFamily: 'Sora, sans-serif' }}
                  >
                    <span className="text-4xl font-bold text-white">JH</span>
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
              <div className="text-3xl font-bold mb-1 gradient-text" style={{ fontFamily: 'Sora, sans-serif' }}>
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
        onClick={() => scrollTo('impact')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll to impact"
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
