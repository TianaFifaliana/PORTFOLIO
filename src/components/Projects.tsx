import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight, FolderGit2, X } from 'lucide-react'
import { Section } from './Section'
import { projects, type Project } from '../data/content'

type SlideProps = {
  project: Project
  index: number
  total: number
  active: boolean
  staticView?: boolean
  onOpen: (project: Project) => void
}

function ProjectSlide({ project, index, total, active, staticView = false, onOpen }: SlideProps) {
  const reduce = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  const number = String(index + 1).padStart(2, '0')

  useEffect(() => {
    const video = videoRef.current
    if (!video || reduce) return
    if (active) void video.play().catch(() => {})
    else video.pause()
  }, [active, reduce])

  return (
    <article
      className={`group relative flex shrink-0 overflow-hidden ${
        staticView ? 'w-full rounded-2xl border border-lilac/10' : 'h-[100dvh] w-screen'
      }`}
    >
      <div aria-hidden className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
      <div aria-hidden className="hero-grid absolute inset-0 opacity-60" />
      <div aria-hidden className="pointer-events-none absolute -right-4 -top-16 hidden font-display text-[18rem] leading-none font-semibold tracking-[-0.08em] text-lilac/[0.05] lg:block xl:text-[24rem]">
        {number}
      </div>

      <div
        className={`relative z-10 mx-auto grid w-full min-w-0 max-w-7xl min-h-0 gap-7 px-5 sm:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12 lg:px-16 xl:gap-16 ${
          staticView ? 'py-10 lg:py-14' : 'pt-32 pb-16 lg:pb-20'
        }`}
      >
        <div className="flex min-w-0 flex-col items-start justify-center">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-gradient-to-r from-lavender to-electric" />
            <p className="eyebrow text-lavender">
              Projet {number} / {String(total).padStart(2, '0')}
            </p>
          </div>
          <h3 className="mt-4 font-display text-4xl leading-[1.05] font-medium tracking-[-0.04em] text-silver sm:text-5xl lg:text-5xl xl:text-6xl">
            {project.name}
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{project.summary}</p>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-lavender/30 bg-lavender/5 px-5 py-3 text-sm font-medium text-lilac transition-colors hover:border-electric hover:text-silver"
          >
            Voir les détails <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex min-h-0 min-w-0 items-center justify-center">
          <div className="relative flex w-full items-center justify-center rounded-2xl border border-lilac/15 bg-deep/70 p-2 shadow-[0_30px_90px_-30px_rgba(124,58,237,0.4)] sm:p-3">
            {project.video ? (
              <video
                ref={videoRef}
                src={project.video}
                aria-label={`Vidéo du projet ${project.name}`}
                autoPlay={!reduce && active}
                muted
                loop
                playsInline
                controls
                preload={active ? 'auto' : 'metadata'}
                className="max-h-[32vh] w-full rounded-xl border border-lilac/10 bg-deep object-contain sm:max-h-[40vh] lg:max-h-[58vh]"
              />
            ) : (
              <div className={`relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-lilac/20 bg-gradient-to-br p-6 ${project.accent}`}>
                <div aria-hidden className="hero-grid absolute inset-0" />
                <p className="eyebrow relative">Aperçu vidéo à venir</p>
                <p className="relative mt-4 max-w-full truncate font-display text-2xl font-medium tracking-tight text-silver sm:text-4xl">
                  {project.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const reduce = useReducedMotion()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.2 }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-midnight/80 p-4 backdrop-blur-md sm:items-center sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: reduce ? 0 : 12 }}
        transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 280, damping: 26, mass: 0.8 }}
        className="glass relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-2xl border-lavender/30 p-6 shadow-[0_35px_100px_-30px_rgba(124,58,237,0.35)] sm:p-9"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Détails de ${project.name}`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-lilac/20 bg-midnight/70 text-silver transition-colors hover:border-electric hover:text-lilac"
          aria-label="Fermer les détails"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="eyebrow text-lavender">Détails du projet</p>
        <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-silver sm:text-4xl">{project.name}</h3>
        {project.video ? (
          <video
            src={project.video}
            aria-label={`Vidéo du projet ${project.name}`}
            autoPlay={!reduce}
            muted
            loop
            playsInline
            controls
            preload="metadata"
            className="mt-7 max-h-[50vh] w-full rounded-xl border border-lilac/15 bg-deep object-contain"
          />
        ) : (
          <div className={`mt-7 flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-lilac/20 bg-gradient-to-br p-4 ${project.accent}`}>
            <span className="eyebrow rounded-full border border-lilac/15 bg-midnight/60 px-3 py-2 backdrop-blur-sm">Image / maquette à venir</span>
          </div>
        )}
        <p className="mt-7 leading-relaxed text-silver/70">{project.details}</p>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-lilac/12 pt-5">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-lilac transition-colors hover:text-electric">
              <FolderGit2 className="h-4 w-4" /> GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              <FolderGit2 className="h-4 w-4" /> Lien GitHub à venir
            </span>
          )}
          <span className="text-sm text-muted">Technologies : {project.tags.length ? project.tags.join(', ') : 'non confirmées'}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [active, setActive] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(projects.length - 1) * 100}vw`])

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    setActive(Math.min(projects.length - 1, Math.round(progress * (projects.length - 1))))
  })

  const goTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const target = Math.max(0, Math.min(projects.length - 1, index))
    const start = track.getBoundingClientRect().top + window.scrollY
    const range = track.offsetHeight - window.innerHeight
    window.scrollTo({
      top: start + (target / (projects.length - 1)) * range,
      behavior: reduce ? 'auto' : 'smooth',
    })
  }

  const intro = <p>Des espaces projets présentés avec des contenus provisoires modifiables lorsque des informations détaillées et confirmées ne sont pas encore disponibles.</p>

  if (reduce) {
    return (
      <Section id="projects" eyebrow="Projets" title="Réalisations et explorations produit" intro={intro} className="bg-deep/15">
        <div className="grid gap-6">
          {projects.map((project, i) => (
            <ProjectSlide key={project.id} project={project} index={i} total={projects.length} active onOpen={setSelected} staticView />
          ))}
        </div>
        <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
      </Section>
    )
  }

  return (
    <Section id="projects" eyebrow="Projets" title="Réalisations et explorations produit" intro={intro} className="bg-deep/15">
      <div
        ref={trackRef}
        style={{ height: `${projects.length * 100}dvh`, width: '100vw', marginLeft: 'calc(50% - 50vw)' }}
        className="relative"
      >
        <div className="sticky top-0 h-[100dvh] overflow-hidden border-y border-lilac/10 bg-midnight">
          <motion.div style={{ x }} className="flex h-full">
            {projects.map((project, i) => (
              <ProjectSlide
                key={project.id}
                project={project}
                index={i}
                total={projects.length}
                active={active === i}
                onOpen={setSelected}
              />
            ))}
          </motion.div>

          <div className="pointer-events-none absolute inset-x-5 top-24 z-20 flex items-center justify-between sm:inset-x-10 lg:inset-x-16">
            <p className="eyebrow hidden text-lilac sm:block">Défiler pour explorer</p>
            <div className="pointer-events-auto ml-auto flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                aria-label="Projet précédent"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-lilac/20 text-silver transition-colors hover:border-electric disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-mono text-[11px] tracking-[0.2em] text-lavender">
                {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                disabled={active === projects.length - 1}
                aria-label="Projet suivant"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-lilac/20 text-silver transition-colors hover:border-electric disabled:opacity-30"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="pointer-events-auto absolute inset-x-5 bottom-3 z-20 flex gap-1.5 sm:inset-x-10 lg:inset-x-16">
            {projects.map((project, i) => (
              <button
                key={project.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Aller au projet ${project.name}`}
                aria-current={active === i}
                className={`h-0.5 flex-1 transition-colors ${active === i ? 'bg-electric' : 'bg-lilac/20 hover:bg-lilac/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </Section>
  )
}
