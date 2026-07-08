import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiGlobe,
  FiSend,
  FiCheckCircle,
  FiCalendar,
} from 'react-icons/fi'
import { personalInfo } from '../data'

const contactItems = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#06b6d4',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: '#64748b',
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
    color: 'var(--text-primary)',
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
    value: 'Open to Remote',
    href: null,
    color: '#10b981',
  },
]

export default function ContactPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
      return
    }

    const subject = formData.subject
      ? `Portfolio Contact: ${formData.subject}`
      : 'Portfolio Contact'

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ].join('\n')

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(mailtoUrl, '_blank')

    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitStatus('idle'), 4000)
  }

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
          <span className="section-eyebrow">
            <span className="dot" /> Let's talk
          </span>
          <h2 className="section-title" style={{ fontFamily: 'Sora, sans-serif' }}>
            Let's build something <span className="gradient-text">amazing</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Have an idea, a product to scale, or a team to level up? Book a free
            discovery call and let's figure out how to ship it.
          </p>
          <motion.a
            href={personalInfo.calendly}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
          >
            <FiCalendar size={16} />
            <span>Book a Discovery Call</span>
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ fontFamily: 'Sora, sans-serif', color: 'var(--text-primary)' }}
              >
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#06b6d4] transition-colors"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#06b6d4] transition-colors"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry..."
                    className="w-full px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#06b6d4] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#06b6d4] transition-colors resize-none"
                    required
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg flex items-center gap-2"
                    style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}
                  >
                    <FiCheckCircle size={18} />
                    <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg flex items-center gap-2"
                    style={{ background: 'rgba(239, 68, 68, 0.12)', color: '#ef4444' }}
                  >
                    <span className="text-sm">
                      {!formData.name.trim() || !formData.email.trim() || !formData.message.trim()
                        ? 'Please fill in all required fields'
                        : 'Error sending message. Please try again.'}
                    </span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary justify-center mt-6"
                >
                  <FiSend size={16} />
                  <span>Send Message</span>
                </motion.button>
              </form>
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
                <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium transition-colors hover:underline break-all"
                    style={{ color }}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
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
          <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
            I speak
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {personalInfo.languages.map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 rounded-xl text-sm font-medium"
                style={{
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1px solid rgba(6, 182, 212, 0.25)',
                  color: '#22d3ee',
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
