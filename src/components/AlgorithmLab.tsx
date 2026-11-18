import { useMemo, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Section, Reveal } from './Section'
import { labTracks } from '../data/content'
import { easeOut } from '../lib/motion'
import { Binary, Cpu, FlaskConical } from 'lucide-react'

export function AlgorithmLab() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const current = labTracks[active]

  const lines = useMemo(
    () => [
      `> initialisation ${current.signal}`,
      '> chargement des contraintes...',
      '> statut : exploration',
      `> module : ${current.title.toLowerCase()}`,
    ],
    [current],
  )

  return (
    <Section
      id="lab"
      eyebrow="Labo d’algorithmes"
      title={
        <>
          Au-delà de l’interface,
          <span className="text-muted"> il y a la logique.</span>
        </>
      }
      intro={
        <p>
          Un espace dédié à la programmation compétitive et à la pratique de la résolution de problèmes, où les idées
          sont testées à travers les contraintes, la stratégie et l’itération.
        </p>
      }
      className="border-b border-line bg-sand"
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <Reveal className="border border-line bg-white p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
              <FlaskConical className="h-4 w-4 text-cobalt" /> lab.index
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-cobalt">06 modules</span>
          </div>
          <ul className="space-y-2">
            {labTracks.map((track, i) => {
              const selected = i === active
              return (
                <li key={track.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`group relative flex w-full items-start justify-between gap-4 overflow-hidden border px-4 py-4 text-left transition-colors ${
                      selected ? 'border-transparent' : 'border-line hover:border-cobalt/30 hover:bg-paper'
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="lab-active"
                        transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                        className="absolute inset-0 border border-cobalt/40 border-l-2 border-l-cobalt bg-paper"
                      />
                    )}
                    <div className="relative">
                      <p className={`text-sm font-medium ${selected ? 'text-cobalt' : 'text-ink'}`}>{track.title}</p>
                      <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-muted uppercase">{track.signal}</p>
                    </div>
                    <motion.span
                      animate={reduce ? undefined : selected ? { scale: [1, 1.5, 1], opacity: [1, 0.6, 1] } : { scale: 1 }}
                      transition={{ duration: 2, repeat: selected && !reduce ? Infinity : 0, ease: 'easeInOut' }}
                      className={`relative mt-1.5 h-1.5 w-1.5 rounded-full ${selected ? 'bg-cobalt' : 'bg-line group-hover:bg-cobalt/50'}`}
                    />
                  </button>
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.05} className="grid gap-5">
          <div className="relative overflow-hidden border border-line bg-white p-6 sm:p-7">
            <span aria-hidden className="scan-y pointer-events-none absolute inset-y-0 left-1/4 w-24 bg-gradient-to-r from-transparent via-cobalt/5 to-transparent" />
            <div className="relative mb-5 flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-cobalt uppercase">
              <Cpu className="h-4 w-4" /> active.trace
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduce ? 0 : -6 }}
                 transition={{ duration: reduce ? 0 : 0.25 }}
                 className="relative"
               >
                 <h3 className="font-display text-2xl font-medium text-ink sm:text-3xl">{current.title}</h3>
                 <p className="mt-4 max-w-xl leading-relaxed text-muted">{current.description}</p>
                 <motion.div
                   aria-hidden
                   initial={{ scaleX: 0 }}
                   animate={{ scaleX: (active + 1) / labTracks.length }}
                   transition={{ duration: reduce ? 0 : 0.6, ease: easeOut }}
                   style={{ originX: 0 }}
                   className="mt-5 h-px w-full bg-cobalt/60"
                 />
               </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid gap-5 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="border border-line bg-paper p-5 font-mono text-[13px] text-ink/75">
              <div className="mb-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
                <Binary className="h-4 w-4 text-cobalt" /> terminal
              </div>
              <div className="space-y-2">
                {lines.map((line, i) => (
                  <motion.p
                    key={`${current.signal}-${line}`}
                    initial={{ opacity: 0, x: reduce ? 0 : -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduce ? 0 : i * 0.05 }}
                    className={i === 0 ? 'text-cobalt' : ''}
                  >
                    {line}
                  </motion.p>
                ))}
                <p className="text-muted">
                  <span className="animate-pulse motion-reduce:animate-none">▍</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between border border-line bg-white p-5">
              <p className="eyebrow">Axes de travail</p>
              <ul className="mt-5 space-y-3 text-sm text-ink/75">
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-cobalt" />Compétitions d’algorithmes</li>
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-cobalt" />Défis logiques</li>
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-cobalt" />Bots stratégiques et jeux</li>
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-cobalt" />Expériences d’optimisation</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
