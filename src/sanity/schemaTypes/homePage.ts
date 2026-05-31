import { defineType, defineField } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Ana Sayfa Ayarları',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Alt Başlık',
      type: 'string',
      description: 'Örn: Fashion, Advertising & Editorial Photographer',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Ana Başlık',
      type: 'string',
      description: 'Ana sayfadaki büyük karşılama metni.',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Açıklama Metni',
      type: 'text',
      description: 'Hero başlığının altındaki kısa açıklama.',
    }),
    defineField({
      name: 'heroImages',
      title: 'Hero Slider Görselleri',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Görsel Alt Metni (SEO için önemli)',
            validation: (Rule: any) => Rule.required().warning('Lütfen bir alt metin belirtin.'),
          }
        ]
      }],
      description: 'Ana sayfada arka planda dönen veya gösterilen görseller.',
    }),
    defineField({
      name: 'featuredPortfolios',
      title: 'Öne Çıkan Portfolyolar (Maks 8 Adet)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'portfolio' }],
        },
      ],
      validation: (Rule: any) => Rule.max(8).error('En fazla 8 adet portfolyo ekleyebilirsiniz.'),
      description: 'Ana sayfadaki projeler bölümünde gösterilecek ve sürükle-bırak yöntemiyle sıralanacak portfolyo ögeleri.',
    }),
    defineField({
      name: 'aboutSectionTitle',
      title: 'Hakkımda Bölümü Başlığı',
      type: 'string',
    }),
    defineField({
      name: 'aboutSectionText',
      title: 'Hakkımda Bölümü Metni',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'aboutSectionImage',
      title: 'Hakkımda Bölümü Fotoğrafı',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Görsel Alt Metni',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'objectPosition',
          type: 'string',
          title: 'Görsel Pozisyonu',
          description: 'Resmin hangi bölümünün odaklanacağını belirler.',
          options: {
            list: [
              { title: 'Merkez (Varsayılan)', value: 'center' },
              { title: 'Üst', value: 'top' },
              { title: 'Alt', value: 'bottom' },
              { title: 'Sol', value: 'left' },
              { title: 'Sağ', value: 'right' },
              { title: 'Sol Üst', value: 'left top' },
              { title: 'Sağ Üst', value: 'right top' },
              { title: 'Sol Alt', value: 'left bottom' },
              { title: 'Sağ Alt', value: 'right bottom' },
            ],
            layout: 'radio',
          },
          initialValue: 'center',
        },
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Hakkımda İstatistikleri',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Etiket (Örn: Yıllık Tecrübe)', type: 'string' },
            { name: 'value', title: 'Değer (Sayı)', type: 'number' },
            { name: 'suffix', title: 'Sonek (Örn: +)', type: 'string' },
          ]
        }
      ]
    }),
    defineField({
      name: 'timelineSteps',
      title: 'Çekim Süreci Adımları (Timeline)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'num', title: 'Adım Numarası (Örn: 01)', type: 'string' },
            { name: 'title', title: 'Başlık', type: 'string' },
            { name: 'desc', title: 'Açıklama', type: 'text' },
          ]
        }
      ]
    }),
  ],
})
