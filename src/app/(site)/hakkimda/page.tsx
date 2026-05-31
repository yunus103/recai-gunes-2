import { sanityFetch } from '@/sanity/lib/client'
import { aboutPageQuery, siteSettingsQuery } from '@/sanity/lib/queries'
import HakkimdaClient from './HakkimdaClient'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const data = await sanityFetch({ query: aboutPageQuery, tags: ['aboutPage'] })
  return {
    title: data?.title || 'Hakkımda',
    description: data?.subtitle || 'Yemek ve ürün fotoğrafçısı Recai Güneş hakkında bilgi, kariyeri, vizyonu ve profesyonel fotoğraf stüdyosu ekipmanları.',
    alternates: {
      canonical: '/hakkimda',
    },
  }
}

export default async function HakkimdaPage() {
  const [data, settings] = await Promise.all([
    sanityFetch({ query: aboutPageQuery, tags: ['aboutPage'] }),
    sanityFetch({ query: siteSettingsQuery, tags: ['siteSettings'] })
  ])

  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://recaigunes.com').replace(/\/$/, '')
  const sameAs = settings?.socialLinks?.map((link: any) => link.url) || []

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'mainEntity': {
      '@type': 'Person',
      'name': 'Recai Güneş',
      'jobTitle': 'Yemek ve Ürün Fotoğrafçısı',
      'url': baseUrl,
      'image': data?.portraitImage?.asset?.url || settings?.ogImageUrl || '',
      'description': data?.subtitle || 'Profesyonel yemek ve ürün fotoğrafçısı.',
      'sameAs': sameAs
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HakkimdaClient data={data} />
    </>
  )
}
