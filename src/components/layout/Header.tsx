'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import Image from 'next/image'
import Magnetic from '@/components/ui/Magnetic'

export default function Header({ settings }: { settings: any }) {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Fix #7: Check scroll position immediately on mount AND whenever pathname changes
  useEffect(() => {
    const checkScroll = () => setIsScrolled(window.scrollY > 20)
    checkScroll()
    window.addEventListener('scroll', checkScroll, { passive: true })
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: 'ANA SAYFA', href: '/' },
    { name: 'PORTFOLYO', href: '/portfolio' },
    { name: 'HAKKIMDA', href: '/hakkimda' },
    { name: 'İLETİŞİM', href: '/iletisim' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-500 ease-out',
        isScrolled || isMobileMenuOpen ? 'py-2 bg-[#050505]/90 backdrop-blur-lg border-b border-white/5' : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
        <Magnetic>
          <Link href="/" className="relative z-50 block">
            {settings?.logoUrl ? (
              <div className="relative h-16 md:h-20 w-56 md:w-60 lg:w-80">
                <Image
                  src={settings.logoUrl}
                  alt={settings.title || 'Recai Güneş'}
                  fill
                  sizes="(max-width: 768px) 224px, 320px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            ) : (
              <span className="font-display font-medium text-xl tracking-widest uppercase text-white hover:text-gold transition-colors duration-500">
                {settings?.title?.split(' ')[0] || 'RECAİ'}
              </span>
            )}
          </Link>
        </Magnetic>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 lg:gap-10 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Magnetic key={link.name}>
                <Link 
                  href={link.href}
                  className={clsx(
                    'text-xs font-semibold tracking-[0.2em] transition-colors relative inline-block group py-2 whitespace-nowrap',
                    isActive ? 'text-gold' : 'text-white hover:text-gold/80'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </Magnetic>
            )
          })}
        </nav>

        {/* Mobile Toggle */}
        <Magnetic>
          <button
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Magnetic>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
              animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
              exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
              transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
              className="fixed top-0 left-0 w-full h-screen bg-[#050505] flex flex-col items-center justify-center gap-8 z-40"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-4xl md:text-6xl font-light hover:text-gold transition-colors tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
