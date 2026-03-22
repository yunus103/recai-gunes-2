import { client } from '@/sanity/lib/client'
import { aboutPageQuery } from '@/sanity/lib/queries'
import HakkimdaClient from './HakkimdaClient'

export const revalidate = 0

export default async function HakkimdaPage() {
  const data = await client.fetch(aboutPageQuery)

  return <HakkimdaClient data={data} />
}
