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

  // Duplicate for seamless infinite scrolling (2 copies + translateX(-50%) is the standard way)
  const allLogos = [...displayedLogos, ...displayedLogos]

  return (
    <section className="py-8 bg-background border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 text-center text-[9px] uppercase tracking-[0.4em] font-semibold text-white/20">
        REFERANSLAR
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex whitespace-nowrap items-center w-max">
          {allLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="mx-12 md:mx-20 w-28 md:w-40 h-28 md:h-40 relative opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer [filter:brightness(0)_invert(1)] hover:[filter:brightness(1)_invert(0)] hover:scale-110 flex-shrink-0"
            >
              <Image
                src={logo.url}
                alt={logo.alt}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 112px, 160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
