export default function SectionTitle({ index, children, subtitle }) {
  return (
    <div className="reveal mb-14">
      <p className="font-mono text-sm text-brand-600 dark:text-brand-400">
        {String(index).padStart(2, '0')}.
      </p>
      <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
    </div>
  )
}
