import { defineType, defineField } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'İletişim Sayfası',
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
      name: 'introText',
      title: 'Giriş Metni',
      type: 'text',
    }),
    defineField({
      name: 'calendlyLink',
      title: 'Calendly Linki',
      type: 'url',
    }),
  ],
})
