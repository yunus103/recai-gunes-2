import { sanityFetch } from '@/sanity/lib/client'
import { allPortfoliosQuery, portfolioPageQuery } from '@/sanity/lib/queries'
import Link from 'next/link'
import SanityImage from '@/components/ui/SanityImage'

export default async function Portfolio() {
  const [pageData, portfolios] = await Promise.all([
    sanityFetch({ query: portfolioPageQuery, tags: ['portfolioPage'] }),
    sanityFetch({ query: allPortfoliosQuery, tags: ['portfolio'] })
  ])

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display tracking-tight mb-6">
            {pageData?.title || 'Tüm Çalışmalar'}
          </h1>
          <p className="text-foreground/60 font-light text-lg">
            {pageData?.description || 'Fotoğrafçılık yolculuğumda yakaladığım en özel anlar ve projeler.'}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolios.map((item: any) => (
            <Link key={item._id} href={`/portfolio/${item.slug}`} className="group block relative overflow-hidden rounded-lg bg-muted aspect-[4/5] shadow-sm">
              <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-black/50 transition-colors duration-500" />
              <SanityImage
                image={item.coverImage}
                alt={item.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {item.category && <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/80 mb-2 block">{item.category}</span>}
                <h3 className="text-xl md:text-2xl font-display text-white tracking-tight">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
