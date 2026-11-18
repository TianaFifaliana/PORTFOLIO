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
      className="bg-sand pb-16 sm:pb-20"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <Reveal className="grid gap-6">
          <div className="border border-line bg-white p-7 sm:p-10">
            <p className="eyebrow text-cobalt">Disponibilité</p>
            <p className="mt-5 font-display text-2xl font-medium text-ink sm:text-3xl">Disponible de suite.</p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              Si vous avez un concept, un défi produit ou une équipe avec laquelle construire, je serai ravie d’échanger.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href={`mailto:${email}`}
                whileHover={reduce ? undefined : { y: -3 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="group inline-flex items-center gap-3 bg-cobalt px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-cobalt/20 transition-colors hover:bg-ink"
              >
                Contacter
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
              <motion.a
                href={cvUrl}
                download={cvFileName}
                whileHover={reduce ? undefined : { y: -3 }}
                className="quiet-link group inline-flex items-center gap-2 border border-line px-6 py-3.5 text-sm font-medium text-ink hover:border-cobalt hover:text-cobalt"
                aria-label="Télécharger le CV"
                title="Télécharger le CV"
              >
                <Download className="h-4 w-4 text-cobalt transition-transform duration-300 group-hover:-translate-y-0.5" /> Télécharger le CV
              </motion.a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="border border-line bg-white p-7 sm:p-9">
            <p className="eyebrow text-cobalt">Écrire un message</p>
            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="eyebrow">Nom</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border-b border-line bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-cobalt"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="eyebrow">Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border-b border-line bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-cobalt"
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
                className="resize-none border-b border-line bg-transparent py-2 text-sm text-ink outline-none transition-colors focus:border-cobalt"
              />
            </label>
            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-3 border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-cobalt hover:bg-cobalt hover:text-white"
            >
              Envoyer le message
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.05} className="grid gap-4">
          <motion.a
            href={`mailto:${email}`}
            whileHover={reduce ? undefined : hoverLift}
            className="group flex items-start gap-4 border border-line bg-white p-5 transition-colors hover:border-cobalt hover:shadow-lg hover:shadow-ink/5"
          >
            <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center border border-line text-cobalt">
              <Mail className="h-4 w-4" />
            </span>
            <span>
              <span className="eyebrow block">Email</span>
              <span className="mt-1.5 block text-sm text-ink transition-colors group-hover:text-cobalt">{email}</span>
            </span>
          </motion.a>
          <motion.a
            href="https://github.com/TianaFifaliana"
            target="_blank"
            rel="noreferrer"
            whileHover={reduce ? undefined : hoverLift}
            className="group flex items-start gap-4 border border-line bg-white p-5 transition-colors hover:border-cobalt hover:shadow-lg hover:shadow-ink/5"
          >
            <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center border border-line text-cobalt">
              <FolderGit2 className="h-4 w-4" />
            </span>
            <span>
              <span className="eyebrow block">GitHub</span>
              <span className="mt-1.5 block break-all text-sm text-ink transition-colors group-hover:text-cobalt">github.com/TianaFifaliana</span>
            </span>
          </motion.a>
          <motion.div whileHover={reduce ? undefined : { y: -4 }} className="border border-line bg-white p-5 transition-shadow hover:shadow-lg hover:shadow-ink/5">
            <p className="eyebrow">Note</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              D’autres liens et ressources pourront être ajoutés ici dès qu’ils seront disponibles. Aucun autre profil social n’est listé.
            </p>
          </motion.div>
        </Reveal>
      </div>

      <footer className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 font-mono text-[10px] tracking-[0.2em] text-muted uppercase sm:flex-row sm:items-center">
        <span>Tiana Fifaliana — Portfolio</span>
        <span>Réalisé avec React, TypeScript et beaucoup de soin</span>
      </footer>
    </Section>
  )
}
