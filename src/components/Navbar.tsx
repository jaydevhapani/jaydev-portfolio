import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { personalInfo } from '../data'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = NAV_LINKS.map((l) => l.href.slice(1))
      for (const sec of [...sections].reverse()) {
        const el = document.getElementById(sec)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sec)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(13, 17, 23, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm text-white"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', fontFamily: 'Sora, sans-serif' }}
          >
            JH
          </motion.button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
                style={{
                  color: active === link.href.slice(1) ? 'var(--primary-light)' : 'var(--text-muted)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(6, 182, 212, 0.1)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {personalInfo.resumeUrl && (
              <motion.a
                href={personalInfo.resumeUrl}
                download="Jaydev_Hapani_Resume.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
                style={{
                  background: 'rgba(37, 99, 235, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                  color: 'var(--primary-light)',
                }}
              >
                <FiDownload size={15} />
                Resume
              </motion.a>
            )}
            <motion.button
              onClick={() => scrollTo('#contact')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2 rounded-xl text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
            >
              Contact Me
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 rounded"
              style={{ background: 'var(--primary-light)' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 rounded"
              style={{ background: 'var(--primary-light)' }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 rounded"
              style={{ background: 'var(--primary-light)' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl p-4 flex flex-col gap-1"
            style={{
              background: 'rgba(13, 17, 23, 0.97)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--border)',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{
                  color: active === link.href.slice(1) ? 'var(--primary-light)' : 'var(--text-muted)',
                  background: active === link.href.slice(1) ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
                }}
              >
                {link.label}
              </motion.button>
            ))}
            <div className="h-px my-1" style={{ background: 'var(--border)' }} />
            <div className="flex items-center gap-2">
              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  download="Jaydev_Hapani_Resume.pdf"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold"
                  style={{
                    background: 'rgba(37, 99, 235, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.25)',
                    color: 'var(--primary-light)',
                  }}
                >
                  <FiDownload size={15} />
                  Resume
                </a>
              )}
              <button
                onClick={() => scrollTo('#contact')}
                className="flex-1 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
