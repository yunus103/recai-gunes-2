import { defineType, defineField } from 'sanity'

export const portfolioPage = defineType({
  name: 'portfolioPage',
  title: 'Portfolyo Sayfası Ayarları',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sayfa Başlığı',
      type: 'string',
      description: 'Portfolyo sayfasının en üstündeki başlık. Örn: Tüm Çalışmalarım',
    }),
    defineField({
      name: 'description',
      title: 'Sayfa Açıklaması',
      type: 'text',
      description: 'Başlığın altındaki kısa tanıtım metni.',
    }),
  ],
})
