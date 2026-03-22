'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const processSteps = [
  { num: '01', title: 'Konsept & Brief', desc: 'Markanızın ruhunu anlıyor, yaratıcı vizyonumuzu birleştirerek çekim planını oluşturuyoruz.' },
  { num: '02', title: 'Işık & Çekim', desc: 'Üst düzey ekipmanlar ve sanatsal bakış açısıyla her detayı kusursuz bir kareye sığdırıyoruz.' },
  { num: '03', title: 'Post-Prodüksiyon', desc: 'Renk düzenlemeleri, retouch ve detaylı dokunuşlarla fotoğraflara editoryal derinlik katıyoruz.' },
  { num: '04', title: 'Teslimat', desc: 'Sektörün en yüksek kalitesinde, tüm mecralara uygun formatlarda projeyi teslim ediyoruz.' }
]

export default function Timeline({ data }: { data?: any }) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start center', 'end center']
  })

  const steps = data?.timelineSteps?.length > 0 ? data.timelineSteps : processSteps

  return (
    <section ref={container} className="py-32 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-6xl mb-6">Mükemmelliğe <br/><span className="text-gold italic">Giden Yol</span></h2>
          <p className="font-light text-foreground/60 max-w-lg mx-auto">Profesyonel çekim sürecimiz, fikrinizin bir sanat eserine dönüşme yolculuğudur.</p>
        </div>

        <div className="max-w-4xl mx-auto relative cursor-default">
          {/* Vertical Progress Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 rounded-full" />
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-amber-500 to-transparent origin-top -translate-x-1/2"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="space-y-24">
            {steps.map((step: any, i: number) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between group ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-gold z-10 
                  transition-transform duration-500 group-hover:scale-150 group-hover:bg-gold" 
                />

                {/* Content Box */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`pl-16 md:pl-0 w-full md:w-[45%] ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}
                >
                  <span className="text-gold/50 font-display text-6xl md:text-8xl opacity-20 absolute top-[-20px] md:top-[-40px] pointer-events-none group-hover:opacity-40 transition-opacity duration-700">
                    {step.num}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl mb-4 relative z-10">{step.title}</h3>
                  <p className="text-foreground/70 font-light text-sm md:text-base leading-relaxed relative z-10">
                    {step.desc}
                  </p>
                </motion.div>

                {/* Empty Space for opposing side */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
