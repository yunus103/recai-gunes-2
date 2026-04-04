import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import '../globals.css'
import { sanityFetch } from '@/sanity/lib/client'
import { siteSettingsQuery } from '@/sanity/lib/queries'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScroller from '@/components/layout/SmoothScroller'
import CustomCursor from '@/components/ui/CustomCursor'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://recaigunes.com').replace(/\/$/, '')
  const settings = await sanityFetch({ query: siteSettingsQuery, tags: ['siteSettings'] })

  if (!settings) {
    return {
      metadataBase: new URL(baseUrl),
      title: 'Recai Güneş | Portfolio',
      description: 'Photography Portfolio',
    }
  }

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: `%s | ${settings.title}`,
      default: settings.title,
    },
    description: settings.description,
    openGraph: {
      title: settings.title,
      description: settings.description,
      url: baseUrl,
      siteName: settings.title,
      locale: 'tr_TR',
      type: 'website',
      images: settings.ogImageUrl ? [{ url: settings.ogImageUrl, width: 1200, height: 630 }] : [],
    },
    icons: {
      icon: settings.faviconUrl || '/favicon.ico',
      apple: settings.faviconUrl || '/apple-touch-icon.png',
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await sanityFetch({ query: siteSettingsQuery, tags: ['siteSettings'] })

  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable} dark`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col relative selection:bg-amber-500/30 selection:text-amber-500" suppressHydrationWarning>
        <SmoothScroller>
          <CustomCursor />
          <Header settings={settings} />
          <main className="flex-1 z-10 relative">{children}</main>
          <Footer settings={settings} />
        </SmoothScroller>
      </body>
    </html>
  )
}
