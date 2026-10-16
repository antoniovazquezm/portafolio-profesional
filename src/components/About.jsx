import { about, profile } from '../data/content'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="aboutme" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle index={1}>Sobre mí</SectionTitle>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="reveal space-y-5 text-lg leading-relaxed text-slate-600 lg:col-span-3 dark:text-slate-400">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <div className="grid grid-cols-3 gap-4 pt-4">
              {about.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="text-gradient text-3xl font-bold">{s.value}</div>
                  <div className="mt-1 text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal lg:col-span-2">
            <div className="relative mx-auto aspect-square w-full max-w-xs">
              <div className="absolute inset-0 rotate-6 rounded-3xl bg-gradient-to-br from-brand-500 to-accent-500 opacity-70" />
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-900">
                {profile.photo ? (
                  <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-gradient text-7xl font-bold">
                    {profile.name
                      .split(' ')
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join('')}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Habilidades */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {about.skills.map((group) => (
            <div
              key={group.group}
              className="reveal rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="mb-4 font-mono text-sm text-brand-600 dark:text-brand-400">
                {group.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
