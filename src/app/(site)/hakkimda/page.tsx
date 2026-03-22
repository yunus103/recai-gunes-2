import { sanityFetch } from '@/sanity/lib/client'
import { aboutPageQuery } from '@/sanity/lib/queries'
import HakkimdaClient from './HakkimdaClient'

export default async function HakkimdaPage() {
  const data = await sanityFetch({ query: aboutPageQuery, tags: ['aboutPage'] })

  return <HakkimdaClient data={data} />
}
