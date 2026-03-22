'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function BlogPostDetail({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-16"
        >
          <Link href="/blog" className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> BLOG'A DÖN
          </Link>
        </motion.div>

        <article className="space-y-12">
          <header className="space-y-6">
             <div className="flex gap-4 text-[10px] uppercase tracking-widest text-white/40">
                <span>Sanat</span>
                <span>•</span>
                <span>12 Mart 2024</span>
             </div>
             <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-tight">Yemek Fotoğrafçılığında Işık Kullanımı</h1>
             <p className="text-xl text-foreground/70 font-light leading-relaxed italic">
                Işık, fotoğrafçının fırçasıdır. Doğru ışıkla sıradan bir tabak, bir sanat eserine dönüşebilir.
             </p>
          </header>

          <div className="aspect-[21/9] bg-card border border-white/5 rounded-sm relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
          </div>

          <div className="prose prose-invert prose-gold max-w-none font-light leading-relaxed text-foreground/80 space-y-6">
             <p>
                Yemek fotoğrafçılığında ışığın rolü, sadece nesneyi görünür kılmak değil, onun dokusunu, rengini ve sıcaklığını izleyiciye hissettirmektir. Çekim yapılırken ışığın yönü, sertliği ve rengi büyük önem taşır.
             </p>
             <h2 className="font-display text-3xl text-white pt-8 italic">Doğal Işığın Gücü</h2>
             <p>
                Pek çok profesyonel yemek fotoğrafçısı için en iyi ışık kaynağı, büyük bir pencereden gelen yumuşak gün ışığıdır. Ters ışık (backlight) tekniği, ürünün dokusunu ve üzerinden çıkan buharı yakalamak için idealdir.
             </p>
             <p>
                Yapay ışık kullanıldığında ise, softboxlar ve difüzörler yardımıyla bu doğal yumuşaklığın taklit edilmesi hedeflenir. Gölgelerin derinliği, tabağın üç boyutlu görünmesini sağlar.
             </p>
          </div>
        </article>

      </div>
    </div>
  )
}
