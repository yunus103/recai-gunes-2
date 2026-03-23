'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Magnetic from '@/components/ui/Magnetic'
import Link from 'next/link'

export default function Hero({ data }: { data?: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const container = useRef(null)
  
  const heroImages = data?.heroImages || []
  const currentImage = heroImages[currentImageIndex]

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  })

  // Parallax effects for the container
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Slider logic
  useEffect(() => {
    if (heroImages.length <= 1) return

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <section ref={container} className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Slider */}
      <motion.div 
        role="region"
        aria-label="Image Slider"
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full bg-[#0a0a0a]"
      >
        <AnimatePresence>
          {heroImages.length > 0 ? (
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 2, 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Ken Burns Effect Layer */}
              <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 8, // Adjusted speed for faster slider
                  ease: "linear"
                }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={currentImage?.asset?.url}
                  alt={currentImage?.alt || 'Recai Güneş Fotoğrafçılık'}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center brightness-[0.4]"
                />
              </motion.div>
            </motion.div>
          ) : (
            <div className="absolute inset-0 bg-[#0a0a0a]" />
          )}
        </AnimatePresence>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background/80" />
        <div className="absolute inset-0 border-[20px] border-white/5 m-10 pointer-events-none z-20" />
        
        {/* Slider Indicators - Premium Minimal Design */}
        {heroImages.length > 1 && (
          <div className="absolute bottom-12 right-12 z-40 flex flex-col gap-4 items-end">
            <div className="flex flex-col gap-2">
              {heroImages.map((_: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className="group relative flex items-center gap-3 outline-none"
                  aria-label={`Slide ${idx + 1}`}
                >
                  <span className={`text-[10px] font-sans tracking-widest transition-all duration-500 ${
                    currentImageIndex === idx ? 'text-white scale-110' : 'text-white/20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2'
                  }`}>
                    0{idx + 1}
                  </span>
                  <div className="relative w-12 h-[1px] bg-white/10 overflow-hidden">
                    <div 
                      className={`absolute inset-0 bg-white/40 transition-transform duration-700 ease-in-out ${
                        currentImageIndex === idx ? 'translate-x-0' : '-translate-x-full'
                      }`}
                    />
                    {currentImageIndex === idx && (
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 5, ease: 'linear' }}
                        style={{ originX: 0 }}
                        className="absolute inset-0 bg-gold z-10"
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-gold font-sans tracking-[0.4em] text-[10px] md:text-xs uppercase font-semibold mb-8 block">
            {data?.heroSubtitle || 'Capturing the Essence of Luxury'}
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-9xl tracking-tighter text-white mb-10 mix-blend-difference"
        >
          {data?.heroTitle || 'RECAI GÜNEŞ'}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-white/70 md:text-xl font-light max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          {data?.heroDescription || 'Yemek ve ürünleriniz için temiz, modern ve etkileyici görsel çözümler. İşinizi olduğu gibi, ama en iyi haliyle gösterelim.'}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center"
        >
          <Magnetic strength={0.3}>
            <Link 
              href="/portfolio" 
              className="group relative px-10 py-5 bg-transparent border border-white/20 text-white overflow-hidden flex items-center justify-center hover:border-white transition-colors duration-700 rounded-sm"
            >
              <span className="relative z-10 font-sans tracking-widest text-[10px] uppercase font-medium group-hover:text-background transition-colors duration-700">
                PORTFOLYOYU İNCELE
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] z-0" />
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.2 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-white/30 font-medium">Kaydır</span>
        <div className="w-[1px] h-16 bg-white/10 overflow-hidden relative">
          <motion.div 
            className="w-full h-full bg-gold absolute top-0"
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
