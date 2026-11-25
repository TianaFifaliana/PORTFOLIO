import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stack } from './components/Stack'
import { Projects } from './components/Projects'
import { Journey } from './components/Journey'
import { Contact } from './components/Contact'
import { useActiveSection } from './hooks/useActiveSection'
import { navItems } from './data/content'

function App() {
  const { activeId, select } = useActiveSection(navItems.map((n) => n.id))

  return (
    <div className="relative min-h-screen overflow-x-clip bg-midnight text-silver">
      <Navbar activeId={activeId} onNavigate={select} />
      <main className="relative">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </div>
  )
}

export default App
