import { useEffect, useState } from 'react'
import { profile } from '../data/content'

// Efecto de máquina de escribir que rota entre varios textos
function useTypewriter(words, speed = 70, pause = 1600) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    const delay = !deleting && text === word ? pause : deleting ? speed / 2 : speed
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true)
      if (deleting && text === '') {
        setDeleting(false)
        return setI((n) => n + 1)
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-16"
    >
      {/* Fondo decorativo */}
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -left-32 top-1/4 h-96 w-96 animate-float rounded-full bg-brand-500/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 bottom-1/4 h-80 w-80 animate-float rounded-full bg-accent-500/20 blur-3xl [animation-delay:-3s]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="reveal font-mono text-sm text-brand-600 dark:text-brand-400">
          Hola, soy
        </p>
        <h1 className="reveal mt-3 text-5xl font-bold tracking-tight sm:text-7xl">
          {profile.name}
          <span className="text-gradient">.</span>
        </h1>
        <h2 className="reveal mt-4 text-2xl font-medium text-slate-600 sm:text-4xl dark:text-slate-400">
          {profile.role}
        </h2>

        <p className="reveal mt-6 h-8 font-mono text-lg text-slate-500 dark:text-slate-400">
          <span className="text-accent-500">&gt;</span> {typed}
          <span className="ml-0.5 inline-block h-5 w-2 translate-y-1 animate-pulse bg-brand-500" />
        </p>

        <p className="reveal mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
          {profile.tagline}
        </p>

        <div className="reveal mt-10 flex flex-wrap gap-4">
          <a
            href="#proyectosYTrabajos"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 font-medium text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/40"
          >
            Ver proyectos
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contacto"
            className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:hover:border-brand-400 dark:hover:text-brand-400"
          >
            Contáctame
          </a>
        </div>
      </div>

      <a
        href="#aboutme"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-400 transition hover:text-brand-500 sm:block"
        aria-label="Bajar a Sobre mí"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
