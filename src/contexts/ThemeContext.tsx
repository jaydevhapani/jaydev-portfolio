import { createContext, useContext, useEffect, ReactNode } from 'react'

interface ThemeContextType {
  isDark: true
}

const ThemeContext = createContext<ThemeContextType>({ isDark: true })

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
    document.documentElement.style.colorScheme = 'dark'
  }, [])

  return (
    <ThemeContext.Provider value={{ isDark: true }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
