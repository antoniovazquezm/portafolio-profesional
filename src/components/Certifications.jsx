import { certifications } from '../data/content'
import SectionTitle from './SectionTitle'

export default function Certifications() {
  return (
    <section id="certificaciones" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          index={3}
          subtitle="Formación continua y reconocimientos que respaldan mi experiencia."
        >
          Certificaciones
        </SectionTitle>

        <ol className="relative ml-3 border-l-2 border-slate-200 dark:border-slate-800">
          {certifications.map((c) => (
            <li key={c.title} className="reveal mb-10 ml-8 last:mb-0">
              <span className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-4 border-white bg-gradient-to-br from-brand-500 to-accent-500 dark:border-slate-950" />
              <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-500/60 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <time className="font-mono text-sm text-brand-600 dark:text-brand-400">
                    {c.date}
                  </time>
                </div>
                <p className="mt-1 text-slate-600 dark:text-slate-400">{c.issuer}</p>
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-brand-600 hover:underline dark:text-brand-400"
                  >
                    Ver credencial ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
