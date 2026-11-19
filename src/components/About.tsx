import { motion, useReducedMotion } from 'framer-motion'
import { Section, Reveal } from './Section'
import { easeOut } from '../lib/motion'

export function About() {
  const reduce = useReducedMotion()

  return (
    <Section
      id="about"
      eyebrow="À propos"
      title={
        <>
          Développeuse logicielle,
          <span className="text-muted"> étudiante en informatique</span>
        </>
      }
      intro={
        <p>
          Spécialisée en génie logiciel, avec un intérêt pour la création de produits numériques réfléchis où la
          structure, l’ergonomie et la rigueur technique se rencontrent.
        </p>
      }
      className="bg-deep/20"
    >
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <div className="space-y-6 text-base leading-relaxed text-silver/65 sm:text-lg">
            <p>
              J’aborde le développement à la fois comme une pratique d’ingénierie et comme une discipline créative. Des
              interfaces à la logique des systèmes, je veille à la façon dont les idées deviennent des expériences
              claires, intentionnelles et utiles.
            </p>
            <p>
              Mon attention se porte aujourd’hui sur le développement web et mobile, l’architecture logicielle et la
              pensée algorithmique, avec une volonté constante d’explorer de nouvelles technologies et de meilleures
              façons de construire.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6">
          <Reveal delay={0.05} className="glass relative overflow-hidden rounded-2xl border-l-2 border-l-lavender p-7 sm:p-9">
            <span aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lavender/10 blur-2xl" />
            <p className="relative font-display text-2xl leading-snug font-medium tracking-tight text-lilac sm:text-3xl">
              « La curiosité me pousse. La logique me guide. La créativité me fait construire. »
            </p>
            <p className="eyebrow relative mt-6 text-lavender">État d’esprit</p>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-0 overflow-hidden rounded-2xl border border-lilac/12 sm:grid-cols-2">
            {['Développement web', 'Développement mobile', 'Architecture logicielle', 'Raisonnement algorithmique', 'Innovation', 'Exploration de nouvelles technologies'].map(
              (item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : 0.2 + i * 0.05, ease: easeOut }}
                  whileHover={reduce ? undefined : { x: 5 }}
                  className="group border-b border-lilac/10 bg-white/[0.015] px-4 py-5 transition-colors hover:bg-lavender/5 sm:odd:border-r sm:px-5"
                >
                  <div className="mb-3 h-px w-6 bg-gradient-to-r from-lavender to-electric transition-all duration-500 group-hover:w-12" />
                  <p className="text-sm text-silver/75 transition-colors group-hover:text-lilac">{item}</p>
                </motion.div>
              ),
            )}
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
