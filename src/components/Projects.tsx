import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, FolderGit2, X } from 'lucide-react'
import { Section, Reveal } from './Section'
import { projects, type Project } from '../data/content'
import { hoverLift } from '../lib/motion'

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (p: Project) => void }) {
  const reduce = useReducedMotion()
  const number = String(index + 1).padStart(2, '0')

  return (
    <Reveal delay={index * 0.04} className={index % 3 === 0 ? 'md:col-span-2' : ''}>
      <motion.article
        whileHover={reduce ? undefined : hoverLift}
        className="sheen group glass flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-lavender/45"
      >
        <div className={`relative flex h-44 items-end justify-between overflow-hidden border-b border-lilac/10 bg-gradient-to-br p-5 sm:h-52 sm:p-6 ${project.accent}`}>
          <div aria-hidden className="hero-grid absolute inset-0 opacity-80" />
          <span aria-hidden className="pointer-events-none absolute -bottom-8 left-4 font-display text-[9rem] leading-none font-semibold tracking-[-0.07em] text-lilac/[0.07] transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-105">
            {number}
          </span>
          <motion.span
            aria-hidden
            className="scan-y pointer-events-none absolute inset-y-0 left-1/3 w-24 bg-gradient-to-r from-transparent via-electric/12 to-transparent"
          />
          <span aria-hidden className="pointer-events-none absolute right-8 top-6 h-20 w-20 rounded-full border border-lilac/12 transition-transform duration-700 group-hover:scale-125" />
          <span className="eyebrow relative rounded-full border border-lilac/15 bg-midnight/50 px-3 py-1.5 backdrop-blur-sm">Image / maquette à venir</span>
          <span aria-hidden className="relative h-px w-16 bg-gradient-to-r from-lavender to-electric transition-all duration-500 group-hover:w-24" />
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="mb-5 flex items-center justify-between">
            <span className="eyebrow text-lavender">Projet {number}</span>
            <span className="h-px w-10 bg-lilac/15 transition-all duration-500 group-hover:w-16 group-hover:bg-electric/60" aria-hidden />
          </div>

          <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-silver sm:text-3xl">{project.name}</h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.length > 0 ? (
              project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-lilac/15 px-3 py-1 font-mono text-[11px] text-silver/70">{tag}</span>
              ))
            ) : (
              <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">Tags : à confirmer</span>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-lilac/10 pt-5">
            <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">Sélection de projets</span>
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-2 rounded-full border border-lavender/25 bg-lavender/5 px-4 py-2 text-sm font-medium text-lilac transition-colors hover:border-electric hover:text-silver"
            >
              Voir les détails <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [selected])

  return (
    <Section
      id="projects"
      eyebrow="Projets"
      title="Réalisations et explorations produit"
      intro={<p>Des espaces projets présentés avec des contenus provisoires modifiables lorsque des informations détaillées et confirmées ne sont pas encore disponibles.</p>}
      className="bg-deep/15"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onOpen={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="fixed inset-0 z-[60] flex items-end justify-center bg-midnight/80 p-4 backdrop-blur-md sm:items-center sm:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : 12 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { type: 'spring', stiffness: 280, damping: 26, mass: 0.8 }
              }
              className="glass relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border-lavender/30 p-6 shadow-[0_35px_100px_-30px_rgba(146,117,216,0.5)] sm:p-9"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`Détails de ${selected.name}`}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-lilac/20 text-silver transition-colors hover:border-electric hover:text-lilac"
                aria-label="Fermer les détails"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="eyebrow text-lavender">Détails du projet</p>
              <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-silver sm:text-4xl">{selected.name}</h3>
              <div className={`mt-7 flex aspect-[16/9] w-full items-center justify-center rounded-xl border border-dashed border-lilac/20 bg-gradient-to-br p-4 ${selected.accent}`}>
                <span className="eyebrow rounded-full border border-lilac/15 bg-midnight/60 px-3 py-2 backdrop-blur-sm">Image / maquette à venir</span>
              </div>
              <p className="mt-7 leading-relaxed text-silver/70">{selected.details}</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-lilac/12 pt-5">
                {selected.github ? (
                  <a href={selected.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-lilac transition-colors hover:text-electric">
                    <FolderGit2 className="h-4 w-4" /> GitHub
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                    <FolderGit2 className="h-4 w-4" /> Lien GitHub à venir
                  </span>
                )}
                <span className="text-sm text-muted">Technologies : {selected.tags.length ? selected.tags.join(', ') : 'non confirmées'}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
