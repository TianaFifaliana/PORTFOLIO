import { motion, useReducedMotion } from 'framer-motion'
import { Braces, Cpu, Database, Lock, Server, Smartphone, Wrench, type LucideIcon } from 'lucide-react'
import { Section, Reveal } from './Section'
import { stackGroups } from '../data/content'
import { hoverLift } from '../lib/motion'

const groupIcons: LucideIcon[] = [Braces, Server, Smartphone, Database, Wrench, Cpu, Lock]

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
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stackGroups.map((group, i) => {
          const Icon = groupIcons[i] ?? Braces
          return (
            <Reveal key={group.title} delay={i * 0.04}>
              <motion.article
                whileHover={reduce ? undefined : hoverLift}
                className="sheen group glass relative flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-lavender/45 sm:p-7"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-lavender/25 bg-lavender/10 text-lilac transition-colors duration-300 group-hover:border-electric/50 group-hover:text-electric">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-lg leading-snug font-medium tracking-tight text-silver sm:text-xl">
                        {group.title}
                      </h3>
                      <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-lavender/60 uppercase">domaine {String(i + 1).padStart(2, '0')}</p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-lilac/50">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted">{group.note}</p>
                <ul className="mt-auto flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : 0.15 + j * 0.035 }}
                      whileHover={reduce ? undefined : { y: -3 }}
                      className="rounded-full border border-lilac/12 bg-white/[0.025] px-3 py-1.5 text-[12px] text-silver/70 transition-colors hover:border-electric/50 hover:text-lilac"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
