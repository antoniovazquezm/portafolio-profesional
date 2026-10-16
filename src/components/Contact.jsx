import { profile, socials } from '../data/content'
import SectionTitle from './SectionTitle'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Contacto desde tu portafolio: ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const field =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-900'

  return (
    <section id="contacto" className="bg-slate-50 px-5 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle index={4} subtitle="¿Tienes un proyecto o una oportunidad? Escríbeme.">
          Contacto
        </SectionTitle>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal space-y-6">
            <a
              href={`mailto:${profile.email}`}
              className="text-gradient block text-2xl font-bold sm:text-3xl"
            >
              {profile.email}
            </a>
            <p className="text-slate-600 dark:text-slate-400">{profile.location}</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:hover:text-brand-400"
                >
                  {s.label} ↗
                </a>
              ))}
              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-brand-500"
                >
                  Descargar CV
                </a>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal space-y-4">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Nombre</span>
              <input name="name" required className={field} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Correo</span>
              <input name="email" type="email" required className={field} />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Mensaje</span>
              <textarea name="message" rows="5" required className={field} />
            </label>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 font-medium text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
