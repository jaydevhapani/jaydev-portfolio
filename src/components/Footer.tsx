import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiMessageSquare } from 'react-icons/fi'
import { personalInfo } from '../data'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex w-12 h-12 rounded-xl items-center justify-center text-white font-bold text-lg mb-3"
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
                fontFamily: 'Sora, sans-serif',
              }}
            >
              JH
            </motion.div>
            <p
              className="text-sm font-semibold block"
              style={{ color: 'var(--text-primary)', fontFamily: 'Sora, sans-serif' }}
            >
              Jaydev Hapani
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              Senior React Native Developer • Mobile Team Lead
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#22d3ee')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social + Contact Me */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  title={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: 'rgba(6, 182, 212, 0.08)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.4)'
                    e.currentTarget.style.color = '#22d3ee'
                    e.currentTarget.style.background = 'rgba(6, 182, 212, 0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.background = 'rgba(6, 182, 212, 0.08)'
                  }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
            {/* Contact Me CTA */}
            <motion.button
              onClick={() => scrollTo('#contact')}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #22d3ee)' }}
            >
              <FiMessageSquare size={14} />
              Contact Me
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.4), rgba(6, 182, 212, 0.4), transparent)',
          }}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Jaydev Hapani. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
            Built with React + TypeScript
            <FiHeart size={11} style={{ color: '#22d3ee' }} />
            Framer Motion
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {personalInfo.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
