import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import codeVideo from '../assets/code.mp4'
import { Section, Reveal } from './Section'
import { easeOut } from '../lib/motion'

export function About() {
  const reduce = useReducedMotion()
  const visualRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const inView = useInView(visualRef, { amount: 0.25 })
  const [playing, setPlaying] = useState(!reduce)
  const { scrollYProgress } = useScroll({ target: visualRef, offset: ['start end', 'end start'] })
  const videoY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 24, reduce ? 0 : -24])

  useEffect(() => {
    const video = videoRef.current
    if (!video || reduce) return
    if (inView && playing) void video.play().catch(() => {})
    else video.pause()
  }, [inView, playing, reduce])

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
         Étudiante en Licence 3 Informatique en Génie Logiciel à l’ESMIA, je recherche un stage de 6 mois en développement full-stack ou logiciel à partir du 21 décembre 2026.
        </p>
      }
      className="bg-deep/20"
    >
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="space-y-10">
          <motion.div
            ref={visualRef}
            initial={{ opacity: 0, y: reduce ? 0 : 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reduce ? 0 : 0.7, ease: easeOut }}
            className="glass overflow-hidden rounded-2xl shadow-[0_30px_80px_-40px_rgba(124,58,237,0.35)]"
          >
            <div className="flex items-center gap-2 border-b border-lilac/10 bg-deep/50 px-4 py-3">
              <span aria-hidden className="h-2 w-2 rounded-full bg-lavender/70" />
              <span aria-hidden className="h-2 w-2 rounded-full bg-electric/60" />
              <span aria-hidden className="h-2 w-2 rounded-full bg-lilac/40" />
              <span className="ml-2 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">session.dev</span>
              <button
                type="button"
                onClick={() => setPlaying((value) => !value)}
                aria-label={playing ? 'Mettre la vidéo en pause' : 'Lire la vidéo'}
                className="ml-auto rounded-full border border-lilac/20 p-1.5 text-lilac transition-colors hover:border-lavender hover:text-silver"
              >
                {playing ? <Pause size={12} /> : <Play size={12} />}
              </button>
            </div>
            <div className="relative aspect-video overflow-hidden bg-deep">
              <motion.video
                ref={videoRef}
                src={codeVideo}
                aria-label="Vidéo montrant du code écrit par Tiana Fifaliana"
                autoPlay={!reduce}
                muted
                loop
                playsInline
                controls={reduce ? true : undefined}
                preload="metadata"
                style={{ y: videoY }}
                className="absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/45 via-transparent to-lavender/5" />
              <span aria-hidden className="scan-y pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-transparent via-electric/10 to-transparent" />
              <span className="absolute bottom-3 left-4 font-mono text-[10px] tracking-[0.18em] text-lilac/85 uppercase">
               
              </span>
            </div>
          </motion.div>

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
        </div>

        <div className="grid gap-6">
          <Reveal delay={0.05} className="glass relative overflow-hidden rounded-2xl border-l-2 border-l-lavender p-7 sm:p-9">
            <span aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lavender/10 blur-2xl" />
            <p className="relative font-display text-2xl leading-snug font-medium tracking-tight text-lilac sm:text-3xl">
              « La curiosité me pousse. La logique me guide. La créativité me fait construire. »
            </p>
            <p className="eyebrow relative mt-6 text-lavender"></p>
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
                  className="group border-b border-lilac/10 bg-silver/[0.02] px-4 py-5 transition-colors hover:bg-lavender/5 sm:odd:border-r sm:px-5"
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
