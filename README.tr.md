<div align="right">
  <a href="./README.md">
    <img src="https://img.shields.io/badge/English_EN-374151?style=for-the-badge" alt="English" />
  </a>
  <img src="https://img.shields.io/badge/Türkçe_TR-2563EB?style=for-the-badge" alt="Türkçe" />
</div>

# Recai Güneş — Fotoğrafçılık Portfolyosu ve Headless CMS Platformu

**Recai Güneş** için özel olarak geliştirilmiş; ticari gastronomi, yemek stilistliği ve stüdyo ürün fotoğrafçılığı alanlarına odaklanan, yüksek performanslı ve tasarım odaklı bir dijital portfolyo ve editoryal içerik yönetim platformudur. Sistem; editoryal düzeyde görsel sunumu, entegre headless içerik yönetim mimarisi, talep üzerine statik yenileme (On-Demand ISR) ve modern mikro etkileşimler ile bir araya getirir.

---

## 🏗 Mimari ve Teknoloji Yığını

| Katman | Teknoloji | Uygulama ve Amaç |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Server & Client Components mimarisi, `(site)` ve `(admin)` Route Grupları |
| **Headless CMS** | Sanity v5 / `next-sanity` | Dahili Sanity Studio (`/studio`), şema modelleme, GROQ sorguları |
| **Arayüz ve Stil** | Tailwind CSS v3 | Özel koyu lüks tema, amber vurguları, `tailwindcss-animate` |
| **Tipografi** | `next/font/google` | Sıfır kümülatif düzen kayması (CLS) optimizasyonu (*Outfit* & *Inter*) |
| **Hareket & UX** | Framer Motion & Lenis | Eylemsizlik bazlı akıcı kaydırma (Lenis), dinamik imleç, manyetik butonlar |
| **Medya & Lightbox** | Next.js Image & Lightbox | Sanity CDN optimizasyonu, tam ekran `yet-another-react-lightbox` |
| **Önbellek & ISR** | Next.js Cache & Webhook | Etiket bazlı önbellekleme (Tag-based cache), kriptografik webhook yenileme |
| **E-posta & İletişim**| Nodemailer | Sunucu taraflı SMTP aktarımı, SSL/TLS güvenliği, HTML şablonları |
| **Tip Güvenliği** | TypeScript 5 & ESLint 9 | Sıkı tip tanımları, linting kuralları ve modüler kod standartları |

---

## ⚡ Temel Modüller ve Fonksiyonel Özellikler

- **Editoryal Portfolyo Galerisi:** Dinamik kategori filtreleme, derin bağlantılı slug rotaları ve yüksek çözünürlüklü Lightbox önizleme desteği.
- **Entegre Sanity Studio:** `/studio` altında çalışan bağımsız CMS paneli üzerinden portfolyo çalışmaları, referans marka logoları, zaman tüneli kilometre taşları ve site genel ayarlarının anlık yönetimi.
- **İnteraktif Hareket Motoru:** Donanım hızlandırmalı Lenis akıcı kaydırma deneyimi, etkileşimli özel imleç takibi, manyetik buton fiziği ve marka referans bandı (marquee).
- **Güvenli İletişim Hattı:** Sunucu taraflı doğrulama ve biçimlendirilmiş HTML çıktılarıyla doğrudan stüdyoya e-posta ileten Nodemailer SMTP entegrasyonu.

---

## 🗂 Rota Mimarisi

Proje, Next.js App Router rota gruplarını kullanarak ön yüz ve yönetim panelini izole eder:

```
src/app/
├── (admin)/                    # İzole Headless CMS Yönetim Alanı
│   └── studio/[[...tool]]/     # Dahili Sanity Studio çalışma alanı
├── (site)/                     # Ziyaretçiye Açık Ön Yüz Mimarisi
│   ├── blog/                   # Fotoğrafçılık teknikleri ve makaleler
│   ├── hakkimda/               # Biyografi ve stüdyo istatistikleri
│   ├── iletisim/               # Teklif/iletişim formu ve stüdyo bilgileri
│   ├── portfolio/              # Portfolyo ızgarası & [slug] proje detayları
│   └── layout.tsx              # Lenis, İmleç, Header & Footer barındıran ana kabuk
└── api/                        # Sunucusuz API rotaları (iletişim & ISR webhook)
```

---

## 🚀 Önbellekleme, ISR ve SEO Standartları

### 1. Etiket Bazlı Anlık Statik Yenileme (On-Demand ISR)
Veriler `sanityFetch` fonksiyonu üzerinden spesifik önbellek etiketleriyle (`siteSettings`, `portfolio`, `homePage` vb.) çekilir. Sanity üzerinden bir içerik güncellendiğinde tetiklenen `/api/revalidate` webhook'u, `SANITY_REVALIDATE_SECRET` imzasını doğrular ve yalnızca ilgili etiketleri (`revalidateTag`) milisaniyeler içinde yeniler.

### 2. Kapsamlı SEO ve Yapılandırılmış Veri (JSON-LD)
- **Dinamik Meta Veri:** Sayfa bazında dinamik OpenGraph kartları, başlıklar, açıklamalar ve kanonik URL tanımlamaları (`generateMetadata()`).
- **JSON-LD Schema.org:** Arama motorlarının içeriği en iyi şekilde indekslemesi için `WebSite`, `Photographer`, `PostalAddress` ve `ImageGallery` mikro verileri.
- **Sitemap & Robots:** Tüm portfolyo ve blog içeriklerini dinamik olarak dizine ekleyen `sitemap.ts` ve `/studio/` rotasını arama motorlarına kapatan `robots.ts`.

---

## 📁 Proje Dizin Yapısı

```
recai-gunes-2/
├── public/                 # Statik varlıklar, logolar ve favicon
├── src/
│   ├── app/                # Next.js App Router (Site, Admin, API ve SEO Rotaları)
│   ├── components/
│   │   ├── home/           # Hero, Marquee, AboutStats, Timeline, FeaturedPortfolio
│   │   ├── layout/         # Header, Footer, SmoothScroller
│   │   └── ui/             # CustomCursor, Magnetic, Lightbox, SanityImage
│   └── sanity/
│       ├── lib/            # Sanity istemcisi, görsel oluşturucu, GROQ sorguları
│       ├── schemaTypes/    # Şemalar: portfolio, category, sayfalar, ayarlar
│       └── env.ts          # Dataset, project ID ve API sürüm yapılandırması
├── sanity.config.ts        # Sanity Studio kök konfigürasyonu
└── tailwind.config.ts      # Özel tasarım token'ları, yazı tipleri ve animasyonlar
```

---

## 🔒 Güvenlik ve Mühendislik Standartları

- **Ortam Değişkeni İzolasyonu:** `.gitignore` dosyasındaki çok katmanlı `.env*` kuralları ile API anahtarları, gizli anahtarlar ve SMTP kimlik bilgilerinin sızması kesin olarak engellenmiştir.
- **Sunucu Taraflı Gizlilik:** Hassas ortam değişkenleri (`EMAIL_PASS`, `SANITY_REVALIDATE_SECRET`) yalnızca sunucu ortamında çalışır ve hiçbir şekilde istemci koduna dahil edilmez.
- **Görsel Dağıtım Optimizasyonu:** `@sanity/image-url` üzerinden dinamik CDN dönüşümleri sağlanarak modern formatlar (WebP/AVIF) ve sıfır görsel kayması (CLS) güvenceye alınmıştır.
