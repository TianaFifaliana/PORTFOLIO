import { useEffect, useState } from 'react'
import { ArrowUpRight, Download, Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { cvFileName, cvUrl, navItems } from '../data/content'

const labels: Record<string, string> = {
  home: 'Accueil',
  about: 'À propos',
  stack: 'Compétences',
  projects: 'Projets',
  lab: 'Labo d’algorithmes',
  journey: 'Parcours',
  contact: 'Contact',
}

export function Navbar({ activeId }: { activeId: string }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-line bg-paper/85 backdrop-blur-md' : 'border-transparent bg-paper/70 backdrop-blur-sm'
      }`}
    >
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-cobalt"
      />
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <a href="#home" className="group flex items-baseline gap-2.5" aria-label="Retour à l'accueil">
          <span className="font-display text-2xl leading-none font-semibold tracking-tight text-ink">
            TF<span className="text-cobalt">.</span>
          </span>
          <span className="hidden text-[11px] font-medium tracking-[0.16em] text-muted uppercase transition-colors group-hover:text-ink sm:block">
            Tiana Fifaliana
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = activeId === item.id
            return (
              <li key={item.id}>
                <motion.a
                  href={`#${item.id}`}
                  whileHover={reduce ? undefined : { y: -2 }}
                  className={`quiet-link relative py-2 text-[13px] font-medium ${active ? 'text-ink' : 'text-muted hover:text-ink'}`}
                >
                  {labels[item.id] ?? item.label}
                  {active && (
                    <motion.span layoutId="nav-active" className="absolute -bottom-0.5 left-0 h-px w-full bg-cobalt" />
                  )}
                </motion.a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={cvUrl}
            download={cvFileName}
            aria-label="Télécharger le CV"
            title="Télécharger le CV"
            className="quiet-link group hidden items-center gap-2 border border-line px-4 py-2.5 text-[12px] font-medium text-ink hover:border-cobalt hover:text-cobalt sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            CV
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-cobalt hover:text-cobalt lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto border-t border-line bg-paper lg:hidden"
          >
            <ul className="mx-auto max-w-7xl px-6 py-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : i * 0.035 }}
                  className="border-b border-line"
                >
                  <motion.a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    whileHover={reduce ? undefined : { x: 6 }}
                    className={`flex items-center justify-between py-4 font-display text-2xl ${
                      activeId === item.id ? 'text-cobalt' : 'text-ink'
                    }`}
                  >
                    {labels[item.id] ?? item.label}
                    {activeId === item.id ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 text-line" aria-hidden />
                    )}
                  </motion.a>
                </motion.li>
              ))}
              <li className="pt-8">
                <a
                  href={cvUrl}
                  download={cvFileName}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-medium text-ink"
                >
                  <Download className="h-4 w-4 text-cobalt" /> CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
