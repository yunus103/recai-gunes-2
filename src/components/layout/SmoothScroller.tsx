'use client'
import { ReactLenis, useLenis } from 'lenis/react'
import { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'

function ScrollToTop() {
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    // When pathname changes (navigation), scroll to top immediately
    // Use lenis if available (smooth scroll engine), otherwise native
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, lenis])

  return null
}

export default function SmoothScroller({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.11,          // Slightly more responsive cursor lag
        duration: 1.8,       // Animation duration when using scrollTo
        smoothWheel: true,
        wheelMultiplier: 0.9, // Slightly slower wheel for premium feel
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      <ScrollToTop />
      {children}
    </ReactLenis>
  )
}
