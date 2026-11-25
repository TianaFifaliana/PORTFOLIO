import { useState, type FormEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, AtSign, Download, FolderGit2, Mail, MessageSquare, Phone, User } from 'lucide-react'
import { Section, Reveal } from './Section'
import { cvFileName, cvUrl } from '../data/content'
import { hoverLift } from '../lib/motion'

const email = 'fifalianatiana4@gmail.com'
const phones = ['+261 33 60 59242', '+261 38 69 99621']

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
      title={<>Un stage ? <span className="text-muted"> <br /> Parlons-en</span></>}
      intro={
        <p>
          Ouverte aux échanges autour du développement logiciel et de la collaboration.
        </p>
      }
      className="bg-midnight pb-16 sm:pb-20"
    >
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.16),transparent_70%)]" />
      <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <Reveal className="grid gap-6">
          <div className="relative rounded-2xl bg-gradient-to-br from-lavender/45 via-electric/15 to-transparent p-px">
            <div className="relative h-full rounded-[calc(1rem-1px)] bg-deep/90 p-7 backdrop-blur-xl sm:p-10">
              <span aria-hidden className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-lavender/15 blur-3xl" />
              <p className="eyebrow relative text-lavender">Disponibilité</p>
              <p className="relative mt-5 font-display text-2xl font-medium tracking-tight text-silver sm:text-3xl">Disponible à partir de 21 Décembre 2026.</p>
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
                  className="quiet-link group inline-flex items-center gap-2 rounded-full border border-lilac/20 bg-silver/[0.02] px-6 py-3.5 text-sm font-medium text-silver hover:border-lavender hover:text-lilac"
                  aria-label="Télécharger le CV"
                  title="Télécharger le CV"
                >
                  <Download className="h-4 w-4 text-lavender transition-transform duration-300 group-hover:-translate-y-0.5" /> Télécharger le CV
                </motion.a>
              </div>
            </div>
          </div>

          <motion.a
            href={`mailto:${email}`}
            whileHover={reduce ? undefined : hoverLift}
            className="group flex items-start gap-4 rounded-2xl border border-lilac/12 bg-silver/[0.02] p-5 transition-colors hover:border-lavender/45 hover:bg-lavender/5"
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
            className="group flex items-start gap-4 rounded-2xl border border-lilac/12 bg-silver/[0.02] p-5 transition-colors hover:border-lavender/45 hover:bg-lavender/5"
          >
            <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-lavender/25 bg-lavender/10 text-lilac">
              <FolderGit2 className="h-4 w-4" />
            </span>
            <span>
              <span className="eyebrow block text-lavender">GitHub</span>
              <span className="mt-1.5 block break-all text-sm text-silver/80 transition-colors group-hover:text-lilac">github.com/TianaFifaliana</span>
            </span>
          </motion.a>
          {phones.map((phone) => (
            <motion.a
              key={phone}
              href={`tel:${phone.replace(/\s/g, '')}`}
              whileHover={reduce ? undefined : hoverLift}
              className="group flex items-start gap-4 rounded-2xl border border-lilac/12 bg-silver/[0.02] p-5 transition-colors hover:border-lavender/45 hover:bg-lavender/5"
            >
              <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-lavender/25 bg-lavender/10 text-lilac">
                <Phone className="h-4 w-4" />
              </span>
              <span>
                <span className="eyebrow block text-lavender">Téléphone</span>
                <span className="mt-1.5 block break-all text-sm text-silver/80 transition-colors group-hover:text-lilac">{phone}</span>
              </span>
            </motion.a>
          ))}
        </Reveal>

        <Reveal delay={0.05} className="grid content-start">
          <form onSubmit={onSubmit} className="glass relative overflow-hidden rounded-3xl p-7 sm:p-10">
            <span aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-electric/10 blur-3xl" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-lavender">Écrivez-moi</p>
                <p className="mt-3 font-display text-xl tracking-tight text-silver sm:text-2xl">Parlons de votre projet.</p>
              </div>
              <span aria-hidden className="hidden font-mono text-[0.65rem] tracking-[0.3em] text-muted/60 sm:block">01 / 03</span>
            </div>

            <div className="relative mt-8 grid gap-6 sm:grid-cols-2">
              <label className="group flex flex-col gap-3">
                <span className="eyebrow flex items-center gap-2 text-lilac/90 transition-colors group-focus-within:text-lilac">
                  <User className="h-3.5 w-3.5 text-lavender" /> Nom
                </span>
                <span className="flex items-center rounded-2xl border border-lilac/20 bg-deep/40 px-5 transition-all duration-300 group-hover:border-lavender/40 group-focus-within:border-lavender group-focus-within:bg-deep/70 group-focus-within:shadow-[0_0_0_4px_rgba(124,58,237,0.14)]">
                  <input
                    type="text"
                    required
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent py-4 font-display text-base text-silver outline-none placeholder:text-muted/50 sm:text-lg"
                  />
                </span>
              </label>
              <label className="group flex flex-col gap-3">
                <span className="eyebrow flex items-center gap-2 text-lilac/90 transition-colors group-focus-within:text-lilac">
                  <AtSign className="h-3.5 w-3.5 text-lavender" /> Email
                </span>
                <span className="flex items-center rounded-2xl border border-lilac/20 bg-deep/40 px-5 transition-all duration-300 group-hover:border-lavender/40 group-focus-within:border-lavender group-focus-within:bg-deep/70 group-focus-within:shadow-[0_0_0_4px_rgba(124,58,237,0.14)]">
                  <input
                    type="email"
                    required
                    placeholder="vous@exemple.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent py-4 font-display text-base text-silver outline-none placeholder:text-muted/50 sm:text-lg"
                  />
                </span>
              </label>
            </div>
            <label className="group relative mt-7 flex flex-col gap-3">
              <span className="eyebrow flex items-center gap-2 text-lilac/90 transition-colors group-focus-within:text-lilac">
                <MessageSquare className="h-3.5 w-3.5 text-lavender" /> Message
              </span>
              <span className="block rounded-2xl border border-lilac/20 bg-deep/40 px-5 py-4 transition-all duration-300 group-hover:border-lavender/40 group-focus-within:border-electric group-focus-within:bg-deep/70 group-focus-within:shadow-[0_0_0_4px_rgba(168,85,247,0.14)]">
                <textarea
                  required
                  rows={10}
                  placeholder="Votre message..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-72 w-full resize-y bg-transparent font-display text-base leading-relaxed tracking-wide text-silver outline-none placeholder:font-mono placeholder:text-xs placeholder:uppercase placeholder:tracking-[0.2em] placeholder:text-muted/60 sm:text-lg"
                />
              </span>
            </label>
            <div className="relative mt-8 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-lavender to-electric px-7 py-4 text-sm font-semibold text-midnight shadow-lg shadow-lavender/25 transition-all hover:-translate-y-0.5 hover:shadow-electric/40 sm:w-auto"
              >
                Envoyer le message
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted/60">Réponse sous 48h</span>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
