import { motion, useReducedMotion } from 'framer-motion'
import { Section, Reveal } from './Section'
import { stackGroups } from '../data/content'
import { hoverLift } from '../lib/motion'

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
      className="border-b border-line bg-sand"
    >
      <div className="grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
        {stackGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.04}>
            <motion.article whileHover={reduce ? undefined : hoverLift} className="sheen group flex h-full flex-col bg-paper p-6 transition-colors duration-300 hover:bg-white hover:shadow-lg hover:shadow-ink/5 sm:p-7">
              <div className="mb-6 flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">{group.title}</h3>
                <span className="font-mono text-[10px] tracking-[0.2em] text-cobalt">{String(i + 1).padStart(2, '0')}</span>
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
                    whileHover={reduce ? undefined : { y: -3, borderColor: 'rgba(41, 75, 219, 0.5)' }}
                    className="border border-line bg-white px-2.5 py-1.5 text-[13px] text-ink/75 transition-colors group-hover:border-cobalt/40"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
