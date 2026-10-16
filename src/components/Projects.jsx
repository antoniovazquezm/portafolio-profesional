import { useState } from 'react'
import { projects } from '../data/content'
import SectionTitle from './SectionTitle'

const filters = ['Todos', 'Proyecto', 'Trabajo']

export default function Projects() {
  const [filter, setFilter] = useState('Todos')
  const visible = projects.filter((p) => filter === 'Todos' || p.type === filter)

  return (
    <section id="proyectosYTrabajos" className="bg-slate-50 px-5 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          index={2}
          subtitle="Una selección de lo que he construido y de los lugares donde he trabajado."
        >
          Proyectos y Trabajos
        </SectionTitle>

        <div className="reveal mb-10 flex gap-2" role="tablist" aria-label="Filtrar">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                filter === f
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/30'
                  : 'bg-white text-slate-600 hover:text-brand-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:text-brand-400'
              }`}
            >
              {f === 'Todos' ? f : f + 's'}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <article
              key={p.title}
              className="reveal is-visible group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand-500/60 hover:shadow-xl hover:shadow-brand-500/10 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 font-mono text-xs ${
                    p.type === 'Trabajo'
                      ? 'bg-accent-500/15 text-accent-500'
                      : 'bg-brand-500/15 text-brand-600 dark:text-brand-400'
                  }`}
                >
                  {p.type}
                </span>
                {p.period && (
                  <span className="font-mono text-xs text-slate-500">{p.period}</span>
                )}
              </div>

              <h3 className="text-xl font-bold transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-slate-600 dark:text-slate-400">
                {p.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {(p.demo || p.repo) && (
                <div className="mt-5 flex gap-4 border-t border-slate-100 pt-4 text-sm font-medium dark:border-slate-800">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="text-brand-600 hover:underline dark:text-brand-400">
                      Ver demo ↗
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="text-slate-600 hover:underline dark:text-slate-400">
                      Código ↗
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
