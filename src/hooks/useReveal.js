import { useEffect } from 'react'

// Anima los elementos con la clase "reveal" cuando entran en pantalla
export default function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
