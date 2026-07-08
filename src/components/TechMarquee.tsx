import { motion } from 'framer-motion'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiFirebase,
  SiAndroid,
  SiApple,
  SiExpo,
  SiOpenjdk,
  SiKotlin,
  SiSwift,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiStripe,
  SiGoogleplay,
  SiAppstore,
  SiSqlite,
  SiAnthropic,
  SiGithubcopilot,
  SiOpenai,
  SiGooglegemini,
  SiTailwindcss,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import { techMarquee } from '../data'

const ICON_MAP: Record<string, IconType> = {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiFirebase,
  SiAndroid,
  SiApple,
  SiExpo,
  SiOpenjdk,
  SiKotlin,
  SiSwift,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiStripe,
  SiGoogleplay,
  SiAppstore,
  SiSqlite,
  SiAnthropic,
  SiGithubcopilot,
  SiOpenai,
  SiGooglegemini,
  SiTailwindcss,
}

export default function TechMarquee() {
  // Duplicate the list so the marquee loops seamlessly
  const items = [...techMarquee, ...techMarquee]

  return (
    <div className="relative overflow-hidden py-6">
      {/* Edge fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, var(--bg-primary, #0d1117) 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(270deg, var(--bg-primary, #0d1117) 0%, transparent 100%)',
        }}
      />

      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
      >
        {items.map((tech, i) => {
          const Icon = ICON_MAP[tech.icon]
          if (!Icon) return null
          return (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-3 px-5 py-3 rounded-xl flex-shrink-0"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                minWidth: 160,
              }}
            >
              <Icon size={22} style={{ color: tech.color }} />
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{ color: '#cbd5e1' }}
              >
                {tech.name}
              </span>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
