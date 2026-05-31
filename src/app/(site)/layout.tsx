import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import '../globals.css'
import { sanityFetch } from '@/sanity/lib/client'
import { siteSettingsQuery } from '@/sanity/lib/queries'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScroller from '@/components/layout/SmoothScroller'
import CustomCursor from '@/components/ui/CustomCursor'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://recaigunes.com').replace(/\/$/, '')
  const settings = await sanityFetch({ query: siteSettingsQuery, tags: ['siteSettings'] })

  const defaultTitle = 'Recai Güneş | Yemek ve Ürün Fotoğrafçısı'
  const defaultDescription = 'Profesyonel yemek ve ürün fotoğrafçılığı, gastronomi çekimleri, konsept ürün çekimleri ve yemek stilistliği hizmetleri.'

  if (!settings) {
    return {
      metadataBase: new URL(baseUrl),
      title: {
        template: `%s | Recai Güneş`,
        default: defaultTitle,
      },
      description: defaultDescription,
      alternates: {
        canonical: baseUrl,
      },
    }
  }

  const titleText = settings.title || defaultTitle
  const descText = settings.description || defaultDescription

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: `%s | ${settings.title || 'Recai Güneş'}`,
      default: titleText,
    },
    description: descText,
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: titleText,
      description: descText,
      url: baseUrl,
      siteName: settings.title || 'Recai Güneş',
      locale: 'tr_TR',
      type: 'website',
      images: settings.ogImageUrl ? [{ url: settings.ogImageUrl, width: 1200, height: 630 }] : [],
    },
    icons: {
      icon: settings.faviconUrl || '/favicon.ico',
      apple: settings.faviconUrl || '/apple-touch-icon.png',
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await sanityFetch({ query: siteSettingsQuery, tags: ['siteSettings'] })
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://recaigunes.com').replace(/\/$/, '')
  
  const email = settings?.email || 'info@recaigunes.com'
  const phone = settings?.phone || '0536 601 9436'
  const address = settings?.address || 'İstanbul, Türkiye'
  const description = settings?.description || 'Profesyonel yemek ve ürün fotoğrafçılığı, gastronomi çekimleri, konsept ürün çekimleri ve yemek stilistliği hizmetleri.'
  const logo = settings?.logoUrl || settings?.faviconUrl || ''
  const sameAs = settings?.socialLinks?.map((link: any) => link.url) || []

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        'url': baseUrl,
        'name': settings?.title || 'Recai Güneş',
        'description': description,
        'publisher': {
          '@id': `${baseUrl}/#photographer`
        }
      },
      {
        '@type': 'Photographer',
        '@id': `${baseUrl}/#photographer`,
        'name': 'Recai Güneş',
        'url': baseUrl,
        'logo': logo,
        'image': settings?.ogImageUrl || logo,
        'description': 'Profesyonel Yemek ve Ürün Fotoğrafçısı',
        'email': email,
        'telephone': phone,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': address,
          'addressLocality': 'İstanbul',
          'addressCountry': 'TR'
        },
        'sameAs': sameAs
      }
    ]
  }

  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col relative selection:bg-amber-500/30 selection:text-amber-500" suppressHydrationWarning>
        <SmoothScroller>
          <CustomCursor />
          <Header settings={settings} />
          <main className="flex-1 z-10 relative">{children}</main>
          <Footer settings={settings} />
        </SmoothScroller>
      </body>
    </html>
  )
}
