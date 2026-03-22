'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Magnetic from '@/components/ui/Magnetic'
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Facebook, Youtube, ExternalLink, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { Behance } from '@/components/ui/Icons'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function IletisimClient({ data, settings }: { data?: any, settings?: any }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'İsim gerekli'
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gerekli'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta girin'
    }
    if (!formData.subject) newErrors.subject = 'Konu seçilmeli'
    if (!formData.message.trim()) newErrors.message = 'Mesaj gerekli'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate() || status === 'sending') return

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Gönderim sırasında bir hata oluştu')
      }
    } catch (err: any) {
      console.error(err)
      setStatus('error')
      setErrorMessage(err.message || 'Sunucu bağlantısı sırasında bir hata oluştu. Lütfen tekrar deneyin.')
    }
  }

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        
        <header className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumb />
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">İLETİŞİM</span>
            <h1 className="font-display text-5xl md:text-7xl tracking-tighter leading-tight">
              {data?.title ? (
                 <span dangerouslySetInnerHTML={{__html: data.title.replace('Konuşalım.', '<span class="text-gold italic">Konuşalım.</span>')}} />
              ) : (
                <>Birlikte <br/><span className="text-gold italic">Konuşalım.</span></>
              )}
            </h1>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-16"
          >
            <div className="space-y-8">
              <p className="text-xl text-foreground/70 font-light max-w-md">
                {data?.introText || "Yeni bir marka iş birliği, editoryal çekim veya sadece bir merhaba demek için çekinmeyin."}
              </p>
              
              <div className="space-y-6 pt-8 border-t border-white/5">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-all duration-500">
                    <Mail size={20} className="font-light" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-1">E-Posta</span>
                    <a href={`mailto:${settings?.email || 'hello@recaigunes.com'}`} className="text-lg font-light hover:text-gold transition-colors">{settings?.email || 'hello@recaigunes.com'}</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-all duration-500">
                    <Phone size={20} className="font-light" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-1">Telefon</span>
                    <a href={`tel:${settings?.phone || '+905550000000'}`} className="text-lg font-light hover:text-gold transition-colors">{settings?.phone || '+90 (555) 000 00 00'}</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-background transition-all duration-500">
                    <MapPin size={20} className="font-light" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-1">Stüdyo</span>
                    <span className="text-lg font-light whitespace-pre-line">{settings?.address || 'Nişantaşı, İstanbul'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            {settings?.socialLinks && settings.socialLinks.length > 0 && (
              <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-xl space-y-6">
                <h3 className="font-display text-2xl text-white">Takipte Kalın</h3>
                <p className="text-sm text-foreground/60 font-light leading-relaxed">
                  Çalışmalarımı güncel olarak sosyal medya hesaplarım üzerinden takip edebilir, dijital dünyama ortak olabilirsiniz.
                </p>
                <div className="flex flex-wrap gap-4">
                  {settings.socialLinks.map((link: any, i: number) => {
                    const platform = link.platform.toLowerCase();
                    return (
                      <Magnetic key={i} strength={0.3}>
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-3 px-5 py-2.5 bg-white/5 hover:bg-gold hover:text-background text-white text-[10px] font-medium tracking-widest uppercase transition-all duration-500 rounded-full border border-white/10 group"
                        >
                          <span className="group-hover:scale-110 transition-transform">
                            {platform.includes('instagram') && <Instagram size={14} />}
                            {platform.includes('twitter') && <Twitter size={14} />}
                            {platform.includes('linkedin') && <Linkedin size={14} />}
                            {platform.includes('facebook') && <Facebook size={14} />}
                            {platform.includes('youtube') && <Youtube size={14} />}
                            {platform.includes('behance') && <Behance size={14} />}
                            {!['instagram', 'twitter', 'linkedin', 'facebook', 'youtube', 'behance'].some(p => platform.includes(p)) && <ExternalLink size={14} />}
                          </span>
                          {link.platform}
                        </a>
                      </Magnetic>
                    )
                  })}
                </div>
              </div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#0a0a0a] p-8 md:p-14 border border-white/5 rounded-3xl relative overflow-hidden group/form"
          >
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/5 blur-[100px] rounded-full group-hover/form:bg-gold/10 transition-colors duration-1000" />
            
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              <div className="space-y-2">
                <h3 className="font-display text-4xl mb-2">Mesaj Gönderin</h3>
                <p className="text-sm text-white/40 font-light">
                  Size en kısa sürede dönüş yapacağız.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-1 group">
                  <div className="flex justify-between">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gold/60 ml-0.5 group-focus-within:text-gold transition-colors">İsim Soyisim</label>
                    {errors.name && <span className="text-[9px] text-red-500/80 uppercase tracking-widest">{errors.name}</span>}
                  </div>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500/50' : 'border-white/10'} px-0 py-4 text-white focus:outline-none focus:border-gold transition-all duration-500 font-light placeholder:text-white/10`} 
                    placeholder="Adınız Soyadınız" 
                  />
                </div>
                <div className="space-y-1 group">
                  <div className="flex justify-between">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gold/60 ml-0.5 group-focus-within:text-gold transition-colors">E-Posta</label>
                    {errors.email && <span className="text-[9px] text-red-500/80 uppercase tracking-widest">{errors.email}</span>}
                  </div>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500/50' : 'border-white/10'} px-0 py-4 text-white focus:outline-none focus:border-gold transition-all duration-500 font-light placeholder:text-white/10`} 
                    placeholder="e-posta@adresiniz.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-1 group">
                <div className="flex justify-between">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gold/60 ml-0.5 group-focus-within:text-gold transition-colors">İlginizi Çeken Hizmet</label>
                  {errors.subject && <span className="text-[9px] text-red-500/80 uppercase tracking-widest">{errors.subject}</span>}
                </div>
                <div className="relative">
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b ${errors.subject ? 'border-red-500/50' : 'border-white/10'} px-0 py-4 text-white focus:outline-none focus:border-gold transition-all duration-500 font-light appearance-none [&>option]:bg-[#111] [&>option]:text-white cursor-pointer group-hover:border-white/20`}
                  >
                    <option value="">Lütfen seçiniz...</option>
                    <option value="Yemek Fotoğrafçılığı">Yemek Fotoğrafçılığı</option>
                    <option value="Editoryal / Moda">Editoryal / Moda</option>
                    <option value="Ticari Çekimler">Ticari Çekimler</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 group-hover:text-gold transition-colors">
                    <ArrowRight size={14} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-1 group">
                <div className="flex justify-between">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gold/60 ml-0.5 group-focus-within:text-gold transition-colors">Mesajınız</label>
                  {errors.message && <span className="text-[9px] text-red-500/80 uppercase tracking-widest">{errors.message}</span>}
                </div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500/50' : 'border-white/10'} px-0 py-4 text-white focus:outline-none focus:border-gold transition-all duration-500 font-light resize-none placeholder:text-white/10`} 
                  placeholder="Projeniz veya çekim detayları hakkında kısa bir bilgi..." 
                />
              </div>

              <div className="pt-4 space-y-4">
                <Magnetic strength={0.1}>
                  <button 
                    disabled={status === 'sending'}
                    type="submit" 
                    className={`group/btn relative w-full sm:w-auto px-12 py-5 bg-gold text-background font-bold tracking-[0.25em] text-[10px] uppercase overflow-hidden rounded-sm shadow-2xl hover:shadow-gold/20 transition-all duration-500 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    <span className={`relative z-10 flex items-center justify-center gap-3 ${status !== 'sending' ? 'group-hover/btn:translate-x-1' : ''} transition-transform duration-500`}>
                      {status === 'sending' ? (
                        <>GÖNDERİLİYOR <Loader2 size={14} className="animate-spin" /></>
                      ) : 'GÖNDER'}
                      {status !== 'sending' && <ArrowRight size={14} />}
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.2,1]" />
                  </button>
                </Magnetic>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="flex items-center gap-2 text-green-500 text-xs tracking-wider"
                  >
                    <CheckCircle2 size={16} /> Teşekkürler! Mesajınız başarıyla gönderildi.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="flex items-center gap-2 text-red-500 text-xs tracking-wider"
                  >
                    <AlertCircle size={16} /> {errorMessage}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
