'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  { id: 1, title: 'Yemek Fotoğrafçılığında Işık Kullanımı', date: '12 Mart 2024', cat: 'Teknik', slug: 'yemek-fotografciligi-isik' },
  { id: 2, title: 'Editoryal Çekimlerde Kompozisyon Kuralları', date: '05 Mart 2024', cat: 'Sanat', slug: 'editoryal-kompozisyon' },
  { id: 3, title: 'Sony A7R V İncelemesi: Bir Fotoğrafçının Gözünden', date: '28 Şubat 2024', cat: 'Ekipman', slug: 'sony-a7rv-inceleme' },
]

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-6 block">BLOG</span>
            <h1 className="font-display text-5xl md:text-7xl tracking-tighter">
              Görsel Kültür & <br/><span className="text-gold italic">Teknik Yazılar.</span>
            </h1>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-video bg-card mb-8 rounded-sm overflow-hidden border border-white/5 relative group-hover:border-gold/30 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-xs tracking-widest text-gold uppercase border-b border-gold/50">OKUMAYA BAŞLA</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-white/40">
                    <span>{post.cat}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-display text-2xl group-hover:text-gold transition-colors">{post.title}</h3>
                  <p className="text-foreground/60 font-light text-sm line-clamp-2 leading-relaxed">
                    Bu yazıda fotoğrafçılık dünyasındaki son trendleri ve teknik ipuçlarını detaylandırıyoruz...
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
