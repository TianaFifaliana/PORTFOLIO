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
      className="bg-white/40"
    >
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <div className="space-y-6 text-base leading-relaxed text-ink/75 sm:text-lg">
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

        <div className="grid gap-8">
          <Reveal delay={0.05} className="border-l-2 border-cobalt pl-6 sm:pl-8">
            <p className="font-display text-2xl leading-snug font-medium text-ink sm:text-3xl">
              « La curiosité me pousse. La logique me guide. La créativité me fait construire. »
            </p>
            <p className="eyebrow mt-5">État d’esprit</p>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-0 border-t border-line sm:grid-cols-2">
            {['Développement web', 'Développement mobile', 'Architecture logicielle', 'Raisonnement algorithmique', 'Innovation', 'Exploration de nouvelles technologies'].map(
              (item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: reduce ? 0 : 0.45, delay: reduce ? 0 : 0.2 + i * 0.05, ease: easeOut }}
                  whileHover={reduce ? undefined : { x: 5 }}
                  className="group border-b border-line px-1 py-5 transition-colors hover:text-cobalt sm:px-4 sm:odd:border-r"
                >
                  <div className="mb-3 h-px w-6 bg-cobalt/60 transition-all duration-500 group-hover:w-10" />
                  <p className="text-sm text-ink/80">{item}</p>
                </motion.div>
              ),
            )}
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
