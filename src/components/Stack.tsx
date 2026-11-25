import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Braces, Cpu, Database, Lock, Server, Wrench, type LucideIcon } from 'lucide-react'
import { Section, Reveal } from './Section'
import { stackGroups } from '../data/content'
import { easeOut, hoverLift } from '../lib/motion'

const groupIcons: LucideIcon[] = [Braces, Server, Database, Wrench, Cpu, Lock]

function RotatingWord({ items, reduce }: { items: string[]; reduce: boolean | null }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce || items.length < 2) return
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % items.length), 2600)
    return () => window.clearInterval(timer)
  }, [reduce, items.length])

  if (reduce) {
    return (
      <ul className="mt-auto flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li key={item} className="rounded-full border border-lilac/12 bg-silver/[0.03] px-4 py-2 text-sm text-silver/75">
            {item}
          </li>
        ))}
      </ul>
    )
  }

  const word = items[index] ?? ''
  const isLong = word.length > 18

  return (
    <div className="relative mt-auto flex min-h-40 items-end overflow-hidden rounded-xl border border-lilac/10 bg-silver/[0.02] px-4 py-5 sm:min-h-48 sm:px-5 sm:py-6">
      <span className="sr-only">{items.join(', ')}</span>
      <span aria-hidden className="absolute top-4 left-5 h-px w-12 bg-gradient-to-r from-lilac to-transparent" />
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
          transition={{ duration: 0.45, ease: easeOut }}
          className={`shimmer-text font-display leading-[0.95] font-semibold tracking-[-0.05em] break-words ${
            isLong ? 'text-3xl sm:text-4xl' : 'text-5xl sm:text-6xl lg:text-7xl'
          }`}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export function Stack() {
  const reduce = useReducedMotion()

  return (
    <Section
      id="stack"
      eyebrow="Stack technique"
      title="Des outils et technologies en mouvement"
      intro={
        <p>
          Une vue sélectionnée des technologies que j’utilise et que j’explore. Présentée par domaines de pratique,
          sans surestimer mon niveau de maîtrise.
        </p>
      }
      className="bg-midnight"
    >
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {stackGroups.map((group, i) => {
          const Icon = groupIcons[i] ?? Braces
          return (
            <Reveal key={group.title} delay={i * 0.04} className="h-full">
              <motion.article
                whileHover={reduce ? undefined : hoverLift}
                className="sheen group glass relative flex h-full min-h-80 flex-col rounded-2xl p-7 transition-colors duration-300 hover:border-lavender/45 sm:min-h-96 sm:p-8"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-lavender/25 bg-lavender/10 text-lilac transition-colors duration-300 group-hover:border-electric/50 group-hover:text-electric">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-xl leading-snug font-medium tracking-tight text-silver sm:text-2xl">
                        {group.title}
                      </h3>
                      <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-lavender/60 uppercase">domaine {String(i + 1).padStart(2, '0')}</p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-lilac/50">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="mb-7 text-sm leading-relaxed text-muted sm:text-base">{group.note}</p>
                <RotatingWord items={group.items} reduce={reduce} />
              </motion.article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
