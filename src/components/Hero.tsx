import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Braces } from 'lucide-react'
import photo from '../assets/photo_pro.jpg'
import { easeOut, riseIn, staggerContainer } from '../lib/motion'

const roles = ['Développeuse logicielle', 'Pensée créative', 'Résolution de problèmes']

export function Hero() {
  const reduce = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -48])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 110])

  const container: Variants = staggerContainer(reduce, 0.09, 0.08)
  const item: Variants = riseIn(reduce, 22, 0.7)
  const line: Variants = {
    hidden: { y: reduce ? 0 : '110%' },
    show: { y: 0, transition: { duration: reduce ? 0 : 0.85, ease: easeOut } },
  }
  const underline: Variants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.65, ease: easeOut } },
  }
  const roleList: Variants = staggerContainer(reduce, 0.08, 0.5)
  const roleItem: Variants = riseIn(reduce, 10, 0.5)

  return (
    <section ref={heroRef} id="home" className="relative min-h-[100svh] overflow-hidden pt-32 pb-24 sm:pt-36 lg:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-grid absolute inset-0" />
        <motion.div style={{ y: glowY }} className="hero-glow absolute -top-64 -right-24 h-[38rem] w-[38rem] rounded-full bg-lavender/18 blur-[120px]" />
        <motion.div style={{ y: glowY }} className="hero-glow absolute -bottom-80 -left-40 h-[32rem] w-[32rem] rounded-full bg-electric/10 blur-[130px]" />
        <div className="absolute right-[18%] top-[18%] h-40 w-40 rounded-full border border-lilac/8" />
        <div className="absolute right-[15%] top-[14%] h-56 w-56 rounded-full border border-lavender/8" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-midnight to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-6 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16 lg:px-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={item} className="eyebrow flex items-center gap-3 text-lilac/80">
            <span aria-hidden className="h-px w-9 bg-gradient-to-r from-lavender to-electric" />
            Rakotoarizao Tiana Fifaliana
          </motion.p>

          <motion.h1 variants={item} className="mt-7 font-display text-5xl leading-[1.02] font-medium tracking-[-0.05em] text-silver sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
            <span className="block overflow-hidden pb-1">
              <motion.span variants={line} className="block">Développeuse Web</motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span variants={line} className="block bg-gradient-to-r from-lilac via-lavender to-electric bg-clip-text text-transparent">&amp; IA<span className="shimmer-text">.</span></motion.span>
            </span>
            <motion.span
              variants={underline}
              style={{ originX: 0 }}
              aria-hidden
              className="mt-3 block h-px w-full max-w-xs bg-gradient-to-r from-lavender/70 to-transparent"
            />
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-2xl text-base leading-relaxed text-silver/70 sm:text-lg">
            Je conçois des expériences numériques utiles, élégantes et pensées pour résoudre des problèmes concrets.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-lavender/25 bg-lavender/5 px-3.5 py-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lavender/60 motion-reduce:hidden" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] text-lilac/85 uppercase">Disponible de suite</span>
            </span>
          </motion.div>

          <motion.ul variants={roleList} className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            {roles.map((role, i) => (
              <motion.li key={role} variants={roleItem} className="flex items-center gap-5">
                <span>{role}</span>
                {i < roles.length - 1 && <span className="h-px w-5 bg-electric/35" aria-hidden />}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p variants={item} className="mt-7 max-w-xl border-l border-lavender/45 pl-5 text-sm leading-relaxed text-muted">
            Je transforme des idées en expériences numériques grâce au code, à la logique et à la créativité.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              whileHover={reduce ? undefined : { y: -3 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-lavender to-electric px-6 py-4 text-sm font-semibold text-midnight shadow-lg shadow-lavender/25 transition-shadow hover:shadow-electric/30"
            >
              Découvrir mes projets
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={reduce ? undefined : { y: -3 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="quiet-link inline-flex items-center gap-3 rounded-full border border-lilac/20 bg-white/[0.02] px-6 py-4 text-sm font-medium text-silver hover:border-electric hover:text-lilac"
            >
              Me contacter
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: reduce ? 0 : 0.25, ease: easeOut }}
          className="relative mx-auto w-full max-w-[22rem] lg:max-w-sm"
        >
          <div aria-hidden className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-lavender/15 via-transparent to-electric/10 blur-2xl" />
          <motion.div
            whileHover={reduce ? undefined : { y: -8, rotate: -0.5 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="glass relative flex aspect-[4/5] flex-col rounded-[1.75rem] p-6 shadow-[0_35px_90px_-35px_rgba(146,117,216,0.55)] sm:p-7"
          >
            <div className="flex items-center justify-between">
              <span className="eyebrow text-lilac/70">system.state</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-electric">01 / 07</span>
            </div>

            <div className="relative mt-5 min-h-0 flex-1 overflow-hidden rounded-xl border border-lilac/12 bg-deep/60">
              <img
                src={photo}
                alt="Portrait de Tiana Fifaliana"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/55 via-transparent to-lavender/5" />
              <span aria-hidden className="scan-y pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-electric/10 to-transparent" />
              <motion.span
                initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.9, duration: 0.5, ease: easeOut }}
                className="float-y absolute bottom-4 left-4 rounded-full border border-lilac/25 bg-midnight/75 px-3 py-2 font-mono text-[10px] tracking-[0.16em] text-lilac uppercase backdrop-blur-md"
              >
                build / iterate / repeat
              </motion.span>
            </div>

            <div className="mt-5 flex items-end justify-between border-t border-lilac/12 pt-4">
              <span className="eyebrow">construire des idées</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">Tiana Fifaliana</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reduce ? 0 : -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: reduce ? 0 : 0.75, duration: 0.6, ease: easeOut }}
            className="glass absolute -bottom-6 -left-3 hidden items-center gap-2.5 rounded-xl px-3.5 py-3 sm:flex lg:-left-8"
          >
            <Braces className="h-4 w-4 text-electric" aria-hidden />
            <span className="font-mono text-[10px] tracking-[0.14em] text-lilac/80">web &amp; mobile</span>
          </motion.div>

          <motion.span
            aria-hidden
            animate={reduce ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-3 top-1/4 h-2.5 w-2.5 rounded-full bg-electric shadow-[0_0_18px_rgba(85,140,255,0.8)]"
          />
          <motion.span
            aria-hidden
            animate={reduce ? undefined : { y: [0, 8, 0], rotate: [0, 45, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-2 bottom-1/3 h-2 w-2 border border-lavender"
          />
          <div aria-hidden className="absolute -right-4 -bottom-4 -z-10 h-24 w-24 rounded-b-3xl border-b border-r border-lilac/15" />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-lilac sm:flex"
      >
        Défiler
        <motion.span
          animate={reduce ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: reduce ? 0 : 1.4, repeat: reduce ? 0 : Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="mt-1 h-px w-10 origin-top bg-gradient-to-r from-lavender to-electric"
        />
      </a>
    </section>
  )
}
