'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { PortableText } from '@portabletext/react'
import SanityImage from '@/components/ui/SanityImage'

export default function AboutStats({ data }: { data?: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = data?.stats?.length > 0 ? data.stats : [
    { label: 'Yıllık Tecrübe', value: 12, suffix: '+' },
    { label: 'Tamamlanan Proje', value: 500, suffix: '+' },
    { label: 'Uluslararası Ödül', value: 8, suffix: '' },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-1/2 relative aspect-[3/4] md:aspect-square lg:aspect-[3/4] max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gold/20 -translate-x-4 translate-y-4 rounded-sm" />
            <div className="relative w-full h-full overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
              {data?.aboutSectionImage?.asset ? (
                <SanityImage
                  image={data.aboutSectionImage}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="relative w-full h-full overflow-hidden rounded-sm bg-[#0c0c0c] border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                </div>
              )}
            </div>
            {/* Signature Overlay */}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="font-script text-4xl text-white transform -rotate-12 drop-shadow-lg inline-block">
                Recai Güneş
              </span>
            </div>
          </motion.div>

          {/* Text & Stats */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-5xl mb-6 relative inline-block"
              >
                {data?.aboutSectionTitle ? (
                  <span dangerouslySetInnerHTML={{__html: data.aboutSectionTitle.replace('Yakalamak', '<span class="text-gold italic">Yakalamak</span>')}} />
                ) : (
                  <>Görünmeyeni <span className="text-gold italic">Yakalamak</span></>
                )}
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-foreground/70 font-light leading-relaxed mb-6 space-y-4"
              >
                {data?.aboutSectionText ? (
                  <PortableText value={data.aboutSectionText} />
                ) : (
                  <>
                    <p>10 yılı aşkın süredir markaların hikayelerini estetik ve derinlikle buluşturuyoruz. Sadece bir ürün değil, bir yaşam tarzı sunmak için ışığı bir enstrüman gibi kullanıyor, en ufak detayı sanat eserine dönüştürüyoruz.</p>
                    <p>Gastronomi ve editoryal dünyaya olan tutkumu her karede hissettirmek, imza attığım en büyük değer.</p>
                  </>
                )}
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-white/10">
              {stats.map((stat: any, i: number) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="text-center md:text-left"
                >
                  <div className="font-display text-4xl md:text-5xl text-gold mb-2">
                    {isInView ? (
                      <CountUp end={stat.value} duration={2.5} separator="," />
                    ) : '0'}
                    {stat.suffix}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
