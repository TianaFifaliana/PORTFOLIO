import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Stack } from './components/Stack'
import { Projects } from './components/Projects'
import { AlgorithmLab } from './components/AlgorithmLab'
import { Journey } from './components/Journey'
import { Contact } from './components/Contact'
import { useActiveSection } from './hooks/useActiveSection'
import { navItems } from './data/content'

function App() {
  const activeId = useActiveSection(navItems.map((n) => n.id))

  return (
    <div className="relative min-h-screen overflow-x-clip bg-paper text-ink">
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <AlgorithmLab />
        <Journey />
        <Contact />
      </main>
    </div>
  )
}

export default App
