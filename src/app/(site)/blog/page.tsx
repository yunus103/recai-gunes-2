import BlogClient from './BlogClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Yemek ve Ürün Fotoğrafçılığı Yazıları',
  description: 'Yemek fotoğrafçılığı teknikleri, ışık kullanımı, editoryal kompozisyon kuralları ve profesyonel fotoğrafçılık ekipman incelemeleri.',
  alternates: {
    canonical: '/blog',
  },
}

const posts = [
  { id: 1, title: 'Yemek Fotoğrafçılığında Işık Kullanımı', date: '12 Mart 2024', cat: 'Teknik', slug: 'yemek-fotografciligi-isik' },
  { id: 2, title: 'Editoryal Çekimlerde Kompozisyon Kuralları', date: '05 Mart 2024', cat: 'Sanat', slug: 'editoryal-kompozisyon' },
  { id: 3, title: 'Sony A7R V İncelemesi: Bir Fotoğrafçının Gözünden', date: '28 Şubat 2024', cat: 'Ekipman', slug: 'sony-a7rv-inceleme' },
]

export default function BlogPage() {
  return <BlogClient posts={posts} />
}
