import Hero from '@/components/home/Hero'
import Marquee from '@/components/home/Marquee'
import AboutStats from '@/components/home/AboutStats'
import Timeline from '@/components/home/Timeline'
import FeaturedPortfolio from '@/components/home/FeaturedPortfolio'
import HomeContact from '@/components/home/HomeContact'

import { client } from '@/sanity/lib/client'
import { homePageQuery, featuredPortfoliosQuery, referenceLogosQuery, siteSettingsQuery } from '@/sanity/lib/queries'

// Force Next.js to not cache this to always show fresh sanity data
export const revalidate = 0

export default async function Home() {
  const [homePageData, portfolios, logos, siteSettings] = await Promise.all([
    client.fetch(homePageQuery),
    client.fetch(featuredPortfoliosQuery),
    client.fetch(referenceLogosQuery),
    client.fetch(siteSettingsQuery)
  ])

  return (
    <div className="flex flex-col min-h-screen">
      <Hero data={homePageData} />
      <Marquee logos={logos} />
      <AboutStats data={homePageData} />
      <FeaturedPortfolio portfolios={portfolios} data={homePageData} />
      <Timeline data={homePageData} />
      <HomeContact settings={siteSettings} />
    </div>
  )
}
