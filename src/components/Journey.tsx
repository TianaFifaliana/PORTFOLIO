import { motion, useReducedMotion } from 'framer-motion'
import { Section } from './Section'
import { journeySteps } from '../data/content'
import { easeOut, slideIn } from '../lib/motion'

export function Journey() {
  const reduce = useReducedMotion()

  return (
    <Section
      id="journey"
      eyebrow="Parcours"
      title="Parcours académique, pratique en évolution"
      intro={<p>Une chronologie interactive des études et de la progression en informatique et en génie logiciel.</p>}
      className="bg-deep/25"
    >
      <div className="relative">
        <motion.div
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: reduce ? 0 : 1.3, ease: easeOut }}
          style={{ originY: 0 }}
          className="timeline-glow absolute left-3 top-0 hidden h-full w-px bg-gradient-to-b from-lavender via-electric to-transparent shadow-[0_0_14px_rgba(168,85,247,0.45)] sm:left-1/2 sm:block sm:-translate-x-1/2"
        />
        <ol className="space-y-6 sm:space-y-10">
          {journeySteps.map((step, i) => {
            const left = i % 2 === 0
            return (
              <li key={step.level} className="relative sm:grid sm:grid-cols-2 sm:gap-12">
                <div className={`hidden sm:block ${left ? '' : 'sm:col-start-2'}`}>
                  <TimelineCard step={step} align={left ? 'right' : 'left'} reduce={reduce} delay={i * 0.08} />
                </div>
                <div className="sm:hidden">
                  <TimelineCard step={step} align="left" reduce={reduce} delay={i * 0.08} mobile />
                </div>
                <motion.div
                  aria-hidden
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: reduce ? 0 : i * 0.12 }}
                  className="absolute left-3 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-lavender bg-midnight shadow-[0_0_16px_rgba(168,85,247,0.6)] sm:left-1/2 sm:block"
                />
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}

function TimelineCard({
  step,
  align,
  mobile,
  reduce,
  delay,
}: {
  step: { level: string; period: string; focus: string; detail: string }
  align: 'left' | 'right'
  reduce: boolean | null
  delay: number
  mobile?: boolean
}) {
  const direction = mobile ? 18 : align === 'right' ? 28 : -28
  const variants = slideIn(reduce, direction, 0.7, delay)

  return (
    <motion.article
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={reduce ? undefined : { y: -5 }}
      className={`sheen group glass relative rounded-2xl p-6 transition-colors duration-300 hover:border-electric/40 sm:p-8 ${
        !mobile && align === 'right' ? 'sm:text-right' : 'text-left'
      }`}
    >
      <div className={`mb-5 flex flex-wrap items-center gap-3 ${!mobile && align === 'right' ? 'sm:justify-end' : ''}`}>
        <span className="eyebrow text-lavender">{step.period}</span>
        <span className="h-px w-6 bg-gradient-to-r from-lavender to-electric" />
        <span className="eyebrow">{step.level}</span>
      </div>
      <h3 className="font-display text-2xl font-medium tracking-tight text-silver sm:text-3xl">{step.level}</h3>
      <p className="mt-4 text-sm leading-relaxed text-silver/70 sm:text-base">{step.focus}</p>
      <p className="mt-5 border-t border-lilac/10 pt-5 text-sm leading-relaxed text-muted">{step.detail}</p>
    </motion.article>
  )
}
