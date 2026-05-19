import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] overflow-x-hidden transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <ContactPage />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
