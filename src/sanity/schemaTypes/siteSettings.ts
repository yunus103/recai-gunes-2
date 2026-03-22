import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Ayarları',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Başlığı (SEO)',
      type: 'string',
      description: 'Tarayıcı sekmesinde ve arama motorlarında görünecek ana başlık.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Açıklaması (SEO)',
      type: 'text',
      description: 'Arama motorlarında sitenizin altında çıkacak açıklama metni.',
    }),
    defineField({
      name: 'logo',
      title: 'Site Logosu',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'email',
      title: 'E-posta Adresi',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Telefon Numarası',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Açık Adres / Stüdyo',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Sosyal Medya Linkleri',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string', options: { list: ['Instagram', 'Behance', 'Twitter', 'LinkedIn'] } },
            { name: 'url', title: 'URL', type: 'url' },
          ]
        }
      ]
    })
  ],
})
