import { sanityFetch } from '@/sanity/lib/client'
import { portfolioBySlugQuery, allPortfoliosQuery, relatedPortfoliosQuery } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import PortfolioDetailClient from './PortfolioDetailClient'

export async function generateStaticParams() {
  const portfolios = await sanityFetch({ query: allPortfoliosQuery, tags: ['portfolio'] })
  return portfolios.map((portfolio: any) => ({
    slug: portfolio.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const portfolio = await sanityFetch({ query: portfolioBySlugQuery, params: { slug }, tags: ['portfolio'] })
  if (!portfolio) return {}
  return {
    title: portfolio.title,
    description: `${portfolio.title} — Profesyonel yemek ve ürün fotoğrafçılığı projesi detayları ve görsel galerisi.`,
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
    openGraph: {
      images: portfolio.coverImage?.asset?.url ? [portfolio.coverImage.asset.url] : [],
    }
  }
}

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [portfolio, related] = await Promise.all([
    sanityFetch({ query: portfolioBySlugQuery, params: { slug }, tags: ['portfolio'] }),
    sanityFetch({ query: relatedPortfoliosQuery, params: { slug }, tags: ['portfolio'] }),
  ])

  if (!portfolio) notFound()

  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://recaigunes.com').replace(/\/$/, '')
  const imageUrls: string[] = []
  if (portfolio.coverImage?.asset?.url) {
    imageUrls.push(portfolio.coverImage.asset.url)
  }
  if (portfolio.gallery && portfolio.gallery.length > 0) {
    portfolio.gallery.forEach((img: any) => {
      if (img.asset?.url) {
        imageUrls.push(img.asset.url)
      }
    })
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    'name': portfolio.title,
    'description': `${portfolio.title} yemek ve ürün fotoğrafçılığı projesi görsel galerisi.`,
    'url': `${baseUrl}/portfolio/${slug}`,
    'image': imageUrls,
    'author': {
      '@type': 'Person',
      'name': 'Recai Güneş'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioDetailClient portfolio={portfolio} related={related || []} />
    </>
  )
}
