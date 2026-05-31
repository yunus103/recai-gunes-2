import { createClient, type QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to ensure we get some fresh data, but with Next.js caching it will be ok
})

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60, // default revalidate time
  tags = [],
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  const isDev = process.env.NODE_ENV === 'development'
  return client.fetch(query, params, {
    next: {
      revalidate: isDev ? 0 : (tags.length > 0 ? false : revalidate), // disable cache in development, use tag-based in production
      tags,
    },
  })
}
