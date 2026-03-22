import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import '../globals.css'
import { client } from '@/sanity/lib/client'
import { siteSettingsQuery } from '@/sanity/lib/queries'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScroller from '@/components/layout/SmoothScroller'
import CustomCursor from '@/components/ui/CustomCursor'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(siteSettingsQuery, {}, { cache: 'no-store' })

  if (!settings) {
    return {
      title: 'Recai Güneş | Portfolio',
      description: 'Photography Portfolio',
    }
  }

  return {
    title: {
      template: `%s | ${settings.title}`,
      default: settings.title,
    },
    description: settings.description,
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await client.fetch(siteSettingsQuery, {}, { cache: 'no-store' })

  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable} dark`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col relative selection:bg-amber-500/30 selection:text-amber-500" suppressHydrationWarning>
        <SmoothScroller>
          <div className="noise" />
          <CustomCursor />
          <Header settings={settings} />
          <main className="flex-1 z-10 relative">{children}</main>
          <Footer settings={settings} />
        </SmoothScroller>
      </body>
    </html>
  )
}
