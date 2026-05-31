import { notFound } from 'next/navigation'
import BlogDetailClient from './BlogDetailClient'
import type { Metadata } from 'next'

const BLOG_POSTS: Record<string, {
  title: string
  date: string
  isoDate: string
  cat: string
  subtitle: string
  content: string[]
}> = {
  'yemek-fotografciligi-isik': {
    title: 'Yemek Fotoğrafçılığında Işık Kullanımı',
    date: '12 Mart 2024',
    isoDate: '2024-03-12',
    cat: 'Teknik',
    subtitle: 'Işık, fotoğrafçının fırçasıdır. Doğru ışıkla sıradan bir tabak, bir sanat eserine dönüşebilir.',
    content: [
      'Yemek fotoğrafçılığında ışığın rolü, sadece nesneyi görünür kılmak değil, onun dokusunu, rengini ve sıcaklığını izleyiciye hissettirmektir. Çekim yapılırken ışığın yönü, sertliği ve rengi büyük önem taşır.',
      'Pek çok profesyonel yemek fotoğrafçısı için en iyi ışık kaynağı, büyük bir pencereden gelen yumuşak gün ışığıdır. Ters ışık (backlight) tekniği, ürünün dokusunu ve üzerinden çıkan buharı yakalamak için idealdir.',
      'Yapay ışık kullanıldığında ise, softboxlar ve difüzörler yardımıyla bu doğal yumuşaklığın taklit edilmesi hedeflenir. Gölgelerin derinliği, tabağın üç boyutlu görünmesini sağlar.'
    ]
  },
  'editoryal-kompozisyon': {
    title: 'Editoryal Çekimlerde Kompozisyon Kuralları',
    date: '05 Mart 2024',
    isoDate: '2024-03-05',
    cat: 'Sanat',
    subtitle: 'Görsel bir hikaye anlatmanın sırrı, ögeleri doğru yerleştirmektir.',
    content: [
      'Editoryal yemek fotoğrafçılığı, sadece tabağı değil, o tabağın etrafındaki dünyayı, malzemeleri ve duyguyu da yansıtmayı amaçlar. Kompozisyonda üçler kuralı (rule of thirds) en temel rehberdir.',
      'Negatif alan (negative space) kullanımı, izleyicinin gözünü ana nesneye (yemeğe) yönlendirmek için harika bir yöntemdir. Ayrıca çapraz yerleşimler ve hareket hissi (aksiyon anları) görsele dinamizm katar.',
      'Aksesuarların (çatal, peçete, arka plan dokuları) yemeğin rengi ve tarzıyla uyumlu olması, hikayeyi zenginleştiren en önemli katmanlardandır.'
    ]
  },
  'sony-a7rv-inceleme': {
    title: 'Sony A7R V İncelemesi: Bir Fotoğrafçının Gözünden',
    date: '28 Şubat 2024',
    isoDate: '2024-02-28',
    cat: 'Ekipman',
    subtitle: '61 megapiksel çözünürlük ve yapay zeka destekli otofokus sistemi yemek fotoğrafçılığında ne sunuyor?',
    content: [
      'Sony A7R V, özellikle stüdyo ve detay çekimleri yapan profesyoneller için tam bir canavar. 61 MP çözünürlük sayesinde, tabaktaki en ufak sos detayını, dokuyu ve renk geçişlerini kusursuz şekilde yakalayabiliyorsunuz.',
      'Yeni AI (Yapay Zeka) destekli otofokus ünitesi, nesneleri tanımada inanılmaz derecede kararlı. Piksel kaydırmalı çoklu çekim modu ise, sıfır harelenme ile inanılmaz derecede keskin görseller sunuyor.',
      'Yemek stüdyosunda veya konsept çekimlerde, bu yüksek detay gücü müşterilerimize devasa baskılarda ve detay kırpmalarında inanılmaz esneklik sağlıyor.'
    ]
  }
}

export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS[slug]
  if (!post) return {}

  return {
    title: post.title,
    description: post.subtitle,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  }
}

export default async function BlogPostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS[slug]

  if (!post) notFound()

  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://recaigunes.com').replace(/\/$/, '')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.subtitle,
    'datePublished': post.isoDate,
    'author': {
      '@type': 'Person',
      'name': 'Recai Güneş',
      'jobTitle': 'Yemek ve Ürün Fotoğrafçısı',
      'url': baseUrl
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Recai Güneş',
      'url': baseUrl
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${slug}`
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailClient post={post} />
    </>
  )
}
