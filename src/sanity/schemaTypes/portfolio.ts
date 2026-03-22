import { defineType, defineField } from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolyo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Uzantısı (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'Zorunlu alan. Portfolyo detay sayfasının adresi olacak (örn: /portfolio/yeni-cekim).',
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'reference',
      to: { type: 'category' },
      description: 'Örn: Düğün, Ürün, Moda..',
    }),
    defineField({
      name: 'showOnHomepage',
      title: 'Ana Sayfada Göster (Vitrin)',
      type: 'boolean',
      description: 'Aktif edildiğinde bu proje Ana Sayfadaki vitrinde sergilenir.',
      initialValue: false,
    }),
    defineField({
      name: 'coverImage',
      title: 'Kapak Görseli',
      type: 'image',
      options: {
        hotspot: true, // crop ve focus yönetimi
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Görsel Alternatif Metni (SEO için zorunlu)',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'objectPosition',
          type: 'string',
          title: 'Görsel Pozisyonu',
          description: 'Hotspot yetersizse manuel konumlandırma seçin.',
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
        }
      ],
      description: 'Lütfen yüksek çözünürlüklü ve optimize edilmiş bir görsel girin (Tercihen 1080x1350 veya 1920x1080 yatay min 1MB).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Görsel Galerisi',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternatif Metin',
              validation: (Rule) => Rule.required(),
            }
          ]
        }
      ],
      description: 'Bu portfolyoya ait diğer fotoğraflar.',
    }),
    defineField({
      name: 'description',
      title: 'Açıklama / Metin',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
