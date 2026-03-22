import { defineType, defineField } from 'sanity'

export const referenceLogo = defineType({
  name: 'referenceLogo',
  title: 'Referans Logosu',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Firma / Marka Adı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Firma Logosu',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternatif Metin (Firma Adı)',
          validation: (Rule) => Rule.required(),
        }
      ],
      description: 'Tercihen yatay formatta, PNG ve arka planı saydam (transparent) logolar yükleyin.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
