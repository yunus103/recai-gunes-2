'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { ArrowRight, ChevronLeft } from 'lucide-react'
import SanityImage from '@/components/ui/SanityImage'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { urlForImage } from '@/sanity/lib/image'
import PortfolioLightbox from '@/components/ui/PortfolioLightbox'

interface Props {
  portfolio: any
  related: any[]
}

export default function PortfolioDetailClient({ portfolio, related }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const allImages = portfolio.gallery?.length > 0 ? portfolio.gallery : []

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)

  return (
    <article className="pt-28 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12">

        {/* Back + Breadcrumb */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <Breadcrumb />
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-gold transition-colors mt-1"
            >
              <ChevronLeft size={14} />
              Tüm Projeler
            </Link>
          </div>
          {portfolio.category && (
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold border border-gold/30 px-4 py-2 rounded-full">
              {portfolio.category}
            </span>
          )}
        </div>

        {/* Split Layout: Info Left | Cover Right (Smaller) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 xl:gap-20 mb-20 items-center">
          
          {/* Left: Title + Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="font-display text-4xl md:text-5xl xl:text-7xl tracking-tight leading-[1.05]">
              {portfolio.title}
            </h1>

            {portfolio.description && (
              <div className="text-foreground/70 font-light leading-relaxed space-y-4 text-lg max-w-lg prose prose-invert">
                <PortableText value={portfolio.description} />
              </div>
            )}

            {/* Decorative line */}
            <div className="w-16 h-[1px] bg-gold/50" />

            {allImages.length > 0 && (
              <p className="text-white/30 text-xs uppercase tracking-widest">
                {allImages.length} fotoğraf
              </p>
            )}
          </motion.div>

          {/* Right: Cover Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative aspect-[4/5] lg:aspect-[3/4] rounded-sm overflow-hidden bg-card group lg:max-w-md lg:ml-auto w-full"
          >
            {portfolio.coverImage?.asset && (
              <SanityImage
                image={portfolio.coverImage}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
            {/* Gold border accent */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-sm pointer-events-none" />
          </motion.div>
        </div>

        {/* Gallery Section */}
        {allImages.length > 0 && (
          <section className="mb-24">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-display text-2xl md:text-4xl">
                Proje <span className="text-gold italic">Galerisi</span>
              </h2>
              <span className="text-white/30 text-xs uppercase tracking-widest">{allImages.length} kare</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 grid-flow-dense">
              {allImages.map((img: any, i: number) => (
                <motion.button
                  key={img._key || i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  onClick={() => openLightbox(i)}
                  className={`relative overflow-hidden bg-card rounded-sm group cursor-pointer
                    ${i % 7 === 0 ? 'col-span-2 row-span-2 aspect-[4/5]' : 'aspect-[4/5]'}
                  `}
                  aria-label={`Fotoğraf ${i + 1}`}
                >
                  {img.asset && (
                    <SanityImage
                      image={img}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </section>
        )}

        {/* Related Projects */}
        {related.length > 0 && (
          <section className="pt-16 border-t border-white/5">
            <div className="mb-10">
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold block mb-3">Keşfet</span>
              <h2 className="font-display text-3xl md:text-5xl">
                Diğer <span className="text-gold italic">Projeler</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p: any, i: number) => (
                <motion.div
                  key={p._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Link href={`/portfolio/${p.slug}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-card rounded-sm mb-4">
                      {p.coverImage?.asset && (
                        <SanityImage
                          image={p.coverImage}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    </div>
                    <div>
                      {p.category && (
                        <span className="text-[10px] uppercase tracking-widest text-gold/70 block mb-1">{p.category}</span>
                      )}
                      <h3 className="font-display text-xl group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Lightbox */}
      <PortfolioLightbox
        images={allImages.map((img: any) => {
          const dimensions = img.asset?.metadata?.dimensions || { width: 1600, height: 1200 }
          const ratio = dimensions.height / dimensions.width
          
          return {
            src: urlForImage(img).width(1600).auto('format').url(),
            alt: img.alt || portfolio.title || '',
            thumbnail: urlForImage(img).width(200).height(150).auto('format').fit('crop').url(),
            srcSet: [
              { src: urlForImage(img).width(800).auto('format').url(), width: 800, height: Math.round(800 * ratio) },
              { src: urlForImage(img).width(1200).auto('format').url(), width: 1200, height: Math.round(1200 * ratio) },
              { src: urlForImage(img).width(1600).auto('format').url(), width: 1600, height: Math.round(1600 * ratio) },
            ]
          }
        })}
        startingSlideIndex={lightboxIndex ?? 0}
        open={lightboxIndex !== null}
        onClose={closeLightbox}
      />


    </article>
  )
}
