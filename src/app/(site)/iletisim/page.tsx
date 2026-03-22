import { sanityFetch } from '@/sanity/lib/client'
import { contactPageQuery, siteSettingsQuery } from '@/sanity/lib/queries'
import IletisimClient from './IletisimClient'

export default async function IletisimPage() {
  const [data, settings] = await Promise.all([
    sanityFetch({ query: contactPageQuery, tags: ['contactPage'] }),
    sanityFetch({ query: siteSettingsQuery, tags: ['siteSettings'] })
  ]);

  return <IletisimClient data={data} settings={settings} />
}
