'use client'

import { motion } from 'framer-motion'
import Magnetic from '@/components/ui/Magnetic'
import { PortableText } from '@portabletext/react'
import SanityImage from '@/components/ui/SanityImage'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function HakkimdaClient({ data }: { data?: any }) {
  const defaultEquipment = [
    { category: 'Kameralar', items: ['Sony A7R V', 'Sony A7 IV', 'Fujifilm GFX 100S'] },
    { category: 'Lensler', items: ['90mm Macro f/2.8', '24-70mm f/2.8 GM II', '50mm f/1.2 GM'] },
    { category: 'Işıklandırma', items: ['Profoto B10X Plus', 'Aputure 600d Pro', 'Godox AD600Pro'] }
  ]
  const equipment = data?.equipmentList?.length > 0 ? data.equipmentList : defaultEquipment

  const defaultBioFirst = "Gastronomi dünyasının estetiğini, editoryal bir gözle yakalamaya odaklanmış bir görsel sanatçıyım."
  
  return (
    <div className="pt-32 pb-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Title Section */}
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumb />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-6 block">HAKKIMDA</span>
            <h1 className="font-display text-5xl md:text-8xl tracking-tighter">
              {data?.title ? (
                 <span dangerouslySetInnerHTML={{__html: data.title.replace('Bir Hikaye.', '<span class="text-gold italic">Bir Hikaye.</span>')}} />
              ) : (
                <>Işıkla Yazılan <br/><span className="text-gold italic">Bir Hikaye.</span></>
              )}
            </h1>
          </motion.div>
        </header>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90">
              {data?.bioFirstParagraph || defaultBioFirst}
            </p>
            {data?.bioContent ? (
              <div className="text-foreground/70 font-light leading-relaxed space-y-4">
                <PortableText value={data.bioContent} />
              </div>
            ) : (
              <>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Profesyonel kariyerim boyunca, ışığı sadece bir aydınlatma aracı değil, bir duygu aktarım yöntemi olarak kullandım. Yemek fotoğrafçılığında dokuyu, rengi ve taze hissini teknik kusursuzlukla birleştirerek markaların vizyonunu paylaşıyorum.
                </p>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Her çekim, benim için yeni bir kompozisyon ve anlatılmayı bekleyen bir hikaye. Sanatı ve ticari profesyonelliği dengeleyerek, izleyicide tat alma duyusunu harekete geçiren kareler üretiyorum.
                </p>
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square md:aspect-[4/3] bg-card border border-white/5 overflow-hidden rounded-sm"
          >
            {/* Image Placeholder or Sanity Image */}
            {data?.portraitImage?.asset ? (
              <SanityImage
                image={data.portraitImage}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="absolute inset-0 bg-[#0c0c0c] flex items-center justify-center">
                <span className="text-white/10 font-display text-4xl italic">Vision &amp; Style</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Equipment & Tech Section */}
        <section className="py-24 border-y border-white/5 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {equipment.map((group: any, i: number) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">{group.category}</h3>
                <ul className="space-y-4">
                  {group.items.map((item: string) => (
                    <li key={item} className="text-lg font-light text-foreground/80 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Philosophy - CTA */}
        <div className="text-center max-w-3xl mx-auto py-24">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl mb-12 tracking-tight"
          >
            Sizin vizyonunuzu <br/><span className="text-gold italic">birlikte somutlaştıralım.</span>
          </motion.h2>
          <Magnetic strength={0.2}>
            <a href="/iletisim" className="inline-block px-12 py-5 bg-gold text-white font-semibold tracking-widest text-xs uppercase rounded-sm hover:bg-amber-500 transition-colors">
              PROJENİZİ BAŞLATIN
            </a>
          </Magnetic>
        </div>

      </div>
    </div>
  )
}
