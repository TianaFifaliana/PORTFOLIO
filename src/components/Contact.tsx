import { useState, type FormEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Download, FolderGit2, Mail } from 'lucide-react'
import { Section, Reveal } from './Section'
import { cvFileName, cvUrl } from '../data/content'
import { hoverLift } from '../lib/motion'

const email = 'fifalianatiana4@gmail.com'

export function Contact() {
  const reduce = useReducedMotion()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio — message de ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Une idée ? <span className="text-muted">Construisons-la.</span></>}
      intro={
        <p>
          Ouverte aux échanges autour du développement logiciel et de la collaboration.
        </p>
      }
      className="bg-midnight pb-16 sm:pb-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(ellipse_at_bottom,rgba(146,117,216,0.12),transparent_70%)]" />
      <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <Reveal className="grid gap-6">
          <div className="relative rounded-2xl bg-gradient-to-br from-lavender/45 via-electric/15 to-transparent p-px">
            <div className="relative h-full rounded-[calc(1rem-1px)] bg-deep/90 p-7 backdrop-blur-xl sm:p-10">
              <span aria-hidden className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-lavender/15 blur-3xl" />
              <p className="eyebrow relative text-lavender">Disponibilité</p>
              <p className="relative mt-5 font-display text-2xl font-medium tracking-tight text-silver sm:text-3xl">Disponible de suite.</p>
              <p className="relative mt-4 max-w-xl leading-relaxed text-muted">
                Si vous avez un concept, un défi produit ou une équipe avec laquelle construire, je serai ravie d’échanger.
              </p>
              <div className="relative mt-8 flex flex-wrap gap-3">
                <motion.a
                  href={`mailto:${email}`}
                  whileHover={reduce ? undefined : { y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-lavender to-electric px-6 py-3.5 text-sm font-semibold text-midnight shadow-lg shadow-lavender/25 transition-shadow hover:shadow-electric/30"
                >
                  Contacter
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
                <motion.a
                  href={cvUrl}
                  download={cvFileName}
                  whileHover={reduce ? undefined : { y: -3 }}
                  className="quiet-link group inline-flex items-center gap-2 rounded-full border border-lilac/20 bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-silver hover:border-lavender hover:text-lilac"
                  aria-label="Télécharger le CV"
                  title="Télécharger le CV"
                >
                  <Download className="h-4 w-4 text-lavender transition-transform duration-300 group-hover:-translate-y-0.5" /> Télécharger le CV
                </motion.a>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass rounded-2xl p-7 sm:p-9">
            <p className="eyebrow text-lavender">Écrire un message</p>
            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="eyebrow">Nom</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border-b border-lilac/15 bg-transparent py-2 text-sm text-silver outline-none transition-colors placeholder:text-muted focus:border-lavender"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="eyebrow">Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border-b border-lilac/15 bg-transparent py-2 text-sm text-silver outline-none transition-colors placeholder:text-muted focus:border-lavender"
                />
              </label>
            </div>
            <label className="mt-6 flex flex-col gap-2">
              <span className="eyebrow">Message</span>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="resize-none border-b border-lilac/15 bg-transparent py-2 text-sm text-silver outline-none transition-colors placeholder:text-muted focus:border-lavender"
              />
            </label>
            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-3 rounded-full border border-lavender/40 bg-lavender/10 px-6 py-3 text-sm font-medium text-lilac transition-colors hover:border-electric hover:bg-electric/10 hover:text-silver"
            >
              Envoyer le message
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.05} className="grid content-start gap-4">
          <motion.a
            href={`mailto:${email}`}
            whileHover={reduce ? undefined : hoverLift}
            className="group flex items-start gap-4 rounded-2xl border border-lilac/12 bg-white/[0.02] p-5 transition-colors hover:border-lavender/45 hover:bg-lavender/5"
          >
            <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-lavender/25 bg-lavender/10 text-lilac">
              <Mail className="h-4 w-4" />
            </span>
            <span>
              <span className="eyebrow block text-lavender">Email</span>
              <span className="mt-1.5 block break-all text-sm text-silver/80 transition-colors group-hover:text-lilac">{email}</span>
            </span>
          </motion.a>
          <motion.a
            href="https://github.com/TianaFifaliana"
            target="_blank"
            rel="noreferrer"
            whileHover={reduce ? undefined : hoverLift}
            className="group flex items-start gap-4 rounded-2xl border border-lilac/12 bg-white/[0.02] p-5 transition-colors hover:border-lavender/45 hover:bg-lavender/5"
          >
            <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-lavender/25 bg-lavender/10 text-lilac">
              <FolderGit2 className="h-4 w-4" />
            </span>
            <span>
              <span className="eyebrow block text-lavender">GitHub</span>
              <span className="mt-1.5 block break-all text-sm text-silver/80 transition-colors group-hover:text-lilac">github.com/TianaFifaliana</span>
            </span>
          </motion.a>
          <motion.div whileHover={reduce ? undefined : { y: -4 }} className="rounded-2xl border border-lilac/12 bg-white/[0.02] p-5 transition-shadow hover:shadow-lg hover:shadow-lavender/5">
            <p className="eyebrow text-lavender">Note</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              D’autres liens et ressources pourront être ajoutés ici dès qu’ils seront disponibles. Aucun autre profil social n’est listé.
            </p>
          </motion.div>
        </Reveal>
      </div>
    </Section>
  )
}
