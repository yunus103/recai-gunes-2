'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Magnetic from '@/components/ui/Magnetic'
import SanityImage from '@/components/ui/SanityImage'

export default function FeaturedMasonry({ portfolios, data }: { portfolios?: any[], data?: any }) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  // Fallback items with placeholder backgrounds (no external URLs)
  const defaultItems = [
    { id: 1, title: 'Luxury Burger', cat: 'Gıda', size: 'medium' },
    { id: 2, title: 'Whiskey Pour', cat: 'İçecek', size: 'medium' },
    { id: 3, title: 'Fine Dining Set', cat: 'Editorial', size: 'medium' },
    { id: 4, title: 'Espresso Art', cat: 'İçecek', size: 'medium' },
    { id: 5, title: 'Chef at Work', cat: 'Portre', size: 'small' },
    { id: 6, title: 'Fresh Brew', cat: 'İçecek', size: 'small' },
    { id: 7, title: 'Gourmet Pizza', cat: 'Gıda', size: 'small' },
    { id: 8, title: 'Sweet Treat', cat: 'Editorial', size: 'small' },
  ]

  const validPortfolios = portfolios ? portfolios.filter((p: any) => p !== null && p !== undefined && p._id) : []
  const isSanityData = validPortfolios.length > 0
  
  const displayItems = isSanityData
    ? validPortfolios.map((p: any, i: number) => ({
        id: p._id,
        title: p.title,
        cat: p.category,
        // i=0,1,2,3: Medium (1x2), 4-7: Small (1x1)
        size: i >= 0 && i <= 3 ? 'medium' : 'small',
        sanityImage: p.coverImage, 
        alt: p.coverImage?.alt || p.title,
        slug: p.slug
      }))
    : defaultItems

  return (
    <section ref={container} className="py-32 bg-background relative z-20">
      <div className="container mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-4">Seçili<br/><span className="text-gold italic">Şaheserler</span></h2>
          <p className="text-foreground/60 max-w-sm font-light">
            Işık, gölge ve renklerin olağanüstü uyumuyla markanızı ön plana çıkaran kareler.
          </p>
        </div>
        <Magnetic>
          <Link href="/portfolio" className="text-xs uppercase tracking-[0.2em] font-medium border-b border-gold/50 hover:border-gold pb-1 transition-colors text-white">
            Tüm Galeriyi Gör
          </Link>
        </Magnetic>
      </div>

      <motion.div style={{ y }} className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 auto-rows-auto md:auto-rows-[300px]">
          {displayItems.map((item: any, i: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group overflow-hidden cursor-pointer bg-card rounded-md aspect-[4/5] md:aspect-auto
                ${item.size === 'large' ? 'md:col-span-2 lg:col-span-2 md:row-span-2' : ''}
                ${item.size === 'medium' ? 'md:row-span-2' : 'md:row-span-1'}
              `}
            >
              {/* Sanity Image or dark placeholder */}
              {item.sanityImage?.asset ? (
                <SanityImage
                  image={item.sanityImage}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 bg-[#0c0c0c] transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105" />
              )}

              <div className="absolute inset-0 border border-white/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

              {/* Overlay Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                <span className="text-gold text-xs uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.cat}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-white">{item.title}</h3>
              </div>

              {/* Clickable overlay for Sanity items */}
              {item.slug && (
                <Link href={`/portfolio/${item.slug}`} className="absolute inset-0 z-10" aria-label={`${item.title} projesini görüntüle`} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
