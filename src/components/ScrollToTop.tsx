import { useEffect } from 'react'
import { useLocation } from 'wouter'

export default function ScrollToTop (): null {
  const [pathname] = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return null
}
