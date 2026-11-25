import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { easeOut, riseIn } from '../lib/motion'

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
}: {
  id: string
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  const variants = riseIn(reduce, 24, 0.75)

  return (
    <section id={id} className={`relative scroll-mt-24 border-t border-lilac/8 py-24 sm:py-28 lg:py-36 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14 grid gap-6 lg:mb-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            {eyebrow && (
              <motion.p className="eyebrow mb-6 flex items-center gap-3 text-lavender">
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.15, ease: easeOut }}
                  style={{ originX: 0 }}
                  className="h-px w-10 bg-gradient-to-r from-lavender to-electric"
                />
                {eyebrow}
              </motion.p>
            )}
            <h2 className="page-title font-display text-4xl leading-[1.06] font-medium tracking-[-0.04em] text-silver sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>
          {intro && <div className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:justify-self-end">{intro}</div>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 18, filter: reduce ? 'none' : 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
