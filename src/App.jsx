import { nav, profile } from './data/content'
import useActiveSection from './hooks/useActiveSection'
import useReveal from './hooks/useReveal'
import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

const sectionIds = nav.map((n) => n.id)

export default function App() {
  const active = useActiveSection(sectionIds)
  const [dark, toggleTheme] = useTheme()
  useReveal()

  return (
    <>
      <Navbar active={active} dark={dark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
        © {new Date().getFullYear()} {profile.name}. Hecho con React, Vite y Tailwind CSS.
      </footer>
    </>
  )
}
