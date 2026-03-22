'use client'

import React from 'react'
import Link from 'next/link'
import { Instagram, Mail, Twitter, Linkedin, Github, Facebook, Youtube, ExternalLink } from 'lucide-react'
import { Behance } from '@/components/ui/Icons'

const getSocialIcon = (platform: string) => {
  const p = platform.toLowerCase()
  if (p.includes('instagram')) return <Instagram size={16}/>
  if (p.includes('twitter') || p.includes('x')) return <Twitter size={16}/>
  if (p.includes('linkedin')) return <Linkedin size={16}/>
  if (p.includes('github')) return <Github size={16}/>
  if (p.includes('facebook')) return <Facebook size={16}/>
  if (p.includes('youtube')) return <Youtube size={16}/>
  if (p.includes('behance')) return <Behance size={16}/>
  return <ExternalLink size={16}/>
}

export default function Footer({ settings }: { settings: any }) {
  const socialLinks = settings?.socialLinks || []

  return (
    <footer className="bg-[#050505] text-white py-12 border-t border-white/5 relative z-20">
      <div className="container mx-auto px-6 flex flex-col items-center text-center gap-8">
        
        <div className="font-display text-3xl font-medium tracking-widest uppercase text-white/90 hover:text-gold transition-colors duration-500">
          {settings?.title || "RECAİ GÜNEŞ"}
        </div>
        
        <div className="flex gap-8 text-xs font-light tracking-[0.2em] uppercase text-white/50">
          <Link href="/portfolio" className="hover:text-gold transition-colors">Portfolyo</Link>
          <Link href="/hakkimda" className="hover:text-gold transition-colors">Hakkımda</Link>
          <Link href="/iletisim" className="hover:text-gold transition-colors">İletişim</Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {socialLinks.map((link: any, i: number) => (
            <a 
              key={i}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
              title={link.platform}
            >
              {getSocialIcon(link.platform)}
            </a>
          ))}
          <a href={`mailto:${settings?.email || 'hello@recaigunes.com'}`} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300">
            <Mail size={16}/>
          </a>
        </div>
        
        <div className="text-[10px] font-light text-white/30 uppercase tracking-widest mt-8">
          © {new Date().getFullYear()} {settings?.title || "Recai Güneş"}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}
