import { education } from '../data/content'
import SectionTitle from './SectionTitle'

export default function Education() {
  return (
    <section id="educacion" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          index={3}
          subtitle="Mi formación académica, la base de todo lo que construyo."
        >
          Educación
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e) => (
            <article
              key={e.degree}
              className="reveal group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-500/60 hover:shadow-xl hover:shadow-brand-500/10 dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Franja de color lateral */}
              <span
                className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-500 to-accent-500"
                aria-hidden="true"
              />

              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <time className="font-mono text-sm text-brand-600 dark:text-brand-400">
                  {e.period}
                </time>
                {e.status && (
                  <span className="rounded-full bg-accent-500/15 px-3 py-1 font-mono text-xs text-accent-500">
                    {e.status}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-400">
                {e.degree}
              </h3>
              <p className="mt-1 font-medium text-slate-700 dark:text-slate-300">
                {e.school}
              </p>

              {e.description && (
                <p className="mt-3 text-slate-600 dark:text-slate-400">{e.description}</p>
              )}

              {e.highlights?.length > 0 && (
                <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-0.5 text-brand-500" aria-hidden="true">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
