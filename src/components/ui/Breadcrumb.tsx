'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { motion } from 'framer-motion'

const routeLabels: Record<string, string> = {
  portfolio: 'Portfolyo',
  hakkimda: 'Hakkımda',
  iletisim: 'İletişim',
  blog: 'Blog',
}

export default function Breadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  // Don't show breadcrumb on homepage or studio
  if (segments.length === 0 || segments[0] === 'studio') return null

  const crumbs = segments.map((seg, i) => {
    const href = '/' + segments.slice(0, i + 1).join('/')
    const label = routeLabels[seg] || decodeURIComponent(seg)
    return { href, label }
  })

  return (
    <motion.nav
      aria-label="Breadcrumb"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-6"
    >
      <Link href="/" className="hover:text-gold transition-colors flex items-center gap-1">
        <Home size={10} />
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={crumb.href} className="flex items-center gap-1.5">
          <ChevronRight size={10} className="opacity-40" />
          {i === crumbs.length - 1 ? (
            <span className="text-gold">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="hover:text-gold transition-colors">{crumb.label}</Link>
          )}
        </span>
      ))}
    </motion.nav>
  )
}
