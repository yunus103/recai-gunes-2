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
  return client.fetch(query, params, {
    next: {
      revalidate: tags.length > 0 ? false : revalidate, // if tags are provided, we use tag-based revalidation
      tags,
    },
  })
}
