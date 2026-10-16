import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content'

export default function Navbar({ active, dark, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(y > 20)
      setProgress(max > 0 ? (y / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = (id) =>
    `relative px-3 py-2 text-sm font-medium transition-colors ${
      active === id
        ? 'text-brand-600 dark:text-brand-400'
        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
        aria-label="Navegación principal"
      >
        <a href="#inicio" className="font-mono text-sm font-medium">
          <span className="text-brand-500">&lt;</span>
          {profile.name.split(' ')[0]}
          <span className="text-brand-500"> /&gt;</span>
        </a>

        {/* Escritorio */}
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={linkClass(item.id)}
                aria-current={active === item.id ? 'page' : undefined}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-transform duration-300 ${
                    active === item.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
          <li>
            <ThemeButton dark={dark} onClick={onToggleTheme} />
          </li>
        </ul>

        {/* Móvil */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeButton dark={dark} onClick={onToggleTheme} />
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-slate-200 bg-white/95 px-5 py-3 backdrop-blur-lg md:hidden dark:border-slate-800 dark:bg-slate-950/95">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base font-medium ${
                  active === item.id
                    ? 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                    : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Barra de progreso de lectura */}
      <div
        className="h-0.5 bg-gradient-to-r from-brand-500 to-accent-500"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </header>
  )
}

function ThemeButton({ dark, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
      aria-label={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {dark ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        </svg>
      )}
    </button>
  )
}
