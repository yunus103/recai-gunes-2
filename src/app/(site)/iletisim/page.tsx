import { client } from '@/sanity/lib/client'
import { contactPageQuery, siteSettingsQuery } from '@/sanity/lib/queries'
import IletisimClient from './IletisimClient'

export const revalidate = 0

export default async function IletisimPage() {
  const [data, settings] = await Promise.all([
    client.fetch(contactPageQuery),
    client.fetch(siteSettingsQuery)
  ]);

  return <IletisimClient data={data} settings={settings} />
}
