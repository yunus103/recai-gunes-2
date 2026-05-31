import { sanityFetch } from '@/sanity/lib/client'
import { contactPageQuery, siteSettingsQuery } from '@/sanity/lib/queries'
import IletisimClient from './IletisimClient'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch({ query: contactPageQuery, tags: ['contactPage'] })
  return {
    title: data?.title || 'İletişim',
    description: data?.subtitle || data?.introText || 'Yemek ve ürün fotoğrafçılığı, reklam, menü ve konsept çekimleri için Recai Güneş ile iletişime geçin.',
    alternates: {
      canonical: '/iletisim',
    },
  }
}

export default async function IletisimPage() {
  const [data, settings] = await Promise.all([
    sanityFetch({ query: contactPageQuery, tags: ['contactPage'] }),
    sanityFetch({ query: siteSettingsQuery, tags: ['siteSettings'] })
  ]);

  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://recaigunes.com').replace(/\/$/, '')
  const email = settings?.email || 'info@recaigunes.com'
  const phone = settings?.phone || '0536 601 9436'
  const address = settings?.address || 'İstanbul, Türkiye'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'url': `${baseUrl}/iletisim`,
    'name': data?.title || 'İletişim | Recai Güneş',
    'description': data?.subtitle || 'Profesyonel yemek ve ürün fotoğrafçılığı iş birlikleri için iletişim sayfası.',
    'mainEntity': {
      '@type': 'Photographer',
      'name': 'Recai Güneş',
      'email': email,
      'telephone': phone,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': address,
        'addressLocality': 'İstanbul',
        'addressCountry': 'TR'
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IletisimClient data={data} settings={settings} />
    </>
  )
}
