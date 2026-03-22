'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-200)
  const cursorY = useMotionValue(-200)
  const scale = useMotionValue(1)
  const opacity = useMotionValue(0)
  const [isVisible, setIsVisible] = useState(false)

  const springConfig = { damping: 20, stiffness: 800, mass: 0.1 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const ringSpringConfig = { damping: 30, stiffness: 450, mass: 0.3 }
  const ringXSpring = useSpring(cursorX, ringSpringConfig)
  const ringYSpring = useSpring(cursorY, ringSpringConfig)

  useEffect(() => {
    // Touch device check — don't show custom cursor on touch
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches

    if (isTouch) return

    setIsVisible(true)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      opacity.set(1)
    }

    const handleMouseLeave = () => opacity.set(0)
    const handleMouseEnter = () => opacity.set(1)

    // Event delegation — no need to attach to individual elements
    // This is stable even when DOM changes (lightbox, portals, etc.)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], [role="link"], .cursor-pointer, label'
      )
      scale.set(isInteractive ? 2.2 : 1)
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    document.documentElement.addEventListener('mouseenter', handleMouseEnter, { passive: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const ringOpacity = useTransform(scale, [1, 2.2], [0.5, 0])

  if (!isVisible) return null

  return (
    <>
      {/* Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none mix-blend-difference"
        style={{
          zIndex: 2147483647, // Maximum possible z-index
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-50%',
          y: '-50%',
          scale,
          opacity,
        }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none"
        style={{
          zIndex: 2147483646,
          translateX: ringXSpring,
          translateY: ringYSpring,
          x: '-50%',
          y: '-50%',
          opacity: ringOpacity,
        }}
      />
    </>
  )
}
