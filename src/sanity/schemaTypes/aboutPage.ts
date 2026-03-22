import { defineType, defineField } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Hakkımda Sayfası',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sayfa Başlığı',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Alt Başlık',
      type: 'string',
    }),
    defineField({
      name: 'bioFirstParagraph',
      title: 'Bio İlk Paragraf (Büyük Test)',
      type: 'text',
    }),
    defineField({
      name: 'bioContent',
      title: 'Ana Bio İçeriği',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'portraitImage',
      title: 'Portre Görseli',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Görsel Alt Metni (SEO)',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'objectPosition',
          type: 'string',
          title: 'Görsel Pozisyonu',
          description: 'Resmin odak noktasını belirler.',
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
      ]
    }),
    defineField({
      name: 'equipmentList',
      title: 'Ekipman Listesi',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', title: 'Kategori Adı', type: 'string' },
            { name: 'items', title: 'Ekipmanlar', type: 'array', of: [{ type: 'string' }] }
          ]
        }
      ]
    }),
  ],
})
