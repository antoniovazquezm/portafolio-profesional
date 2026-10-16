import { useEffect, useState } from 'react'

// Devuelve el id de la sección visible y actualiza el hash de la URL (#aboutme, etc.)
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
            history.replaceState(null, '', `#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
