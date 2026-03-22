'use client'

import Image from 'next/image'

export default function Marquee({ logos }: { logos?: any[] }) {
  // Use passed logos from Sanity or fall back to demo ones
  const displayedLogos = logos?.length ? logos.map(l => ({
    id: l._id,
    url: l.logo?.asset?.url,
    alt: l.name || l.logo?.alt || 'Logo'
  })).filter(l => l.url) : [
    { id: 1, url: 'https://cdn.sanity.io/images/qhtzbs5k/production/2d7a2267b1bf7ed46049ab46505b33100db50b2e-200x50.svg?w=200&auto=format', alt: 'Demo 1' },
    { id: 2, url: 'https://cdn.sanity.io/images/qhtzbs5k/production/1739c36fb5631248c8c253deaf1d7c35e380eabb-200x50.svg?w=200&auto=format', alt: 'Demo 2' },
  ]

  // Duplicate for seamless infinite scrolling
  const allLogos = [...displayedLogos, ...displayedLogos, ...displayedLogos, ...displayedLogos]

  return (
    <section className="py-20 bg-background border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/40">Güvenen Markalar</span>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap items-center whitespace-nowrap">
          {allLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="mx-16 md:mx-24 w-24 md:w-36 h-12 relative opacity-20 hover:opacity-100 transition-opacity duration-1000 cursor-pointer"
            >
              <Image
                src={logo.url}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="200px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
