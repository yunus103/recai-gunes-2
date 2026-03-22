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
    description: `${portfolio.title} — Recai Güneş Portfolyo`,
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

  return <PortfolioDetailClient portfolio={portfolio} related={related || []} />
}
