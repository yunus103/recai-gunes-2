import Hero from '@/components/home/Hero'
import Marquee from '@/components/home/Marquee'
import AboutStats from '@/components/home/AboutStats'
import Timeline from '@/components/home/Timeline'
import FeaturedPortfolio from '@/components/home/FeaturedPortfolio'
import HomeContact from '@/components/home/HomeContact'

import { sanityFetch } from '@/sanity/lib/client'
import { homePageQuery, featuredPortfoliosQuery, referenceLogosQuery, siteSettingsQuery } from '@/sanity/lib/queries'

export default async function Home() {
  const [homePageData, portfolios, logos, siteSettings] = await Promise.all([
    sanityFetch({ query: homePageQuery, tags: ['homePage'] }),
    sanityFetch({ query: featuredPortfoliosQuery, tags: ['portfolio'] }),
    sanityFetch({ query: referenceLogosQuery, tags: ['referenceLogo'] }),
    sanityFetch({ query: siteSettingsQuery, tags: ['siteSettings'] })
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
