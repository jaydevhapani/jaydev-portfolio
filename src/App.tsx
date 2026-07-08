import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import About from './components/About'
import WhyHireMe from './components/WhyHireMe'
import AIProcess from './components/AIProcess'
import CaseStudies from './components/CaseStudies'
import Projects from './components/Projects'
import Experience from './components/Experience'
import HowILead from './components/HowILead'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
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
          <Metrics />
          <About />
          <WhyHireMe />
          <AIProcess />
          <CaseStudies />
          <Projects />
          <Experience />
          <HowILead />
          <Skills />
          <Testimonials />
          <ContactPage />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
