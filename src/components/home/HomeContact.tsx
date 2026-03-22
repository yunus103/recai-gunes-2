'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Magnetic from '@/components/ui/Magnetic'
import { ArrowRight } from 'lucide-react'

export default function HomeContact({ settings }: { settings?: any }) {
  const email = settings?.email || 'hello@recaigunes.com'
  return (
    <section className="py-32 bg-[#0c0c0c] relative border-t border-white/5">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-6 block">İletişimde Kalalım</span>
          <h2 className="font-display text-5xl md:text-7xl mb-12 tracking-tighter">
            Projenizi Beraber <br/><span className="text-gold italic">Hayata Geçirelim.</span>
          </h2>
          <p className="text-foreground/60 font-light text-lg mb-16 max-w-2xl mx-auto">
            Gıda, editoryal veya ticari çekim talepleriniz için bize ulaşın. Markanızın hikayesini en estetik şekilde anlatalım.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Magnetic strength={0.2}>
              <Link href="/iletisim" className="group flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-gold text-white font-medium tracking-widest text-xs uppercase rounded-full hover:bg-amber-500 transition-colors">
                İLETİŞİME GEÇ <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href={`mailto:${email}`} className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-medium tracking-widest text-xs uppercase rounded-full hover:bg-white/5 transition-colors">
                {email}
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
