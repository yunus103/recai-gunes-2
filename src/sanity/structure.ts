import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('İçerik Yönetimi')
    .items([
      S.listItem()
        .title('Site Ayarları')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
        .title('Sayfalar')
        .child(
          S.list()
            .title('Sayfalar')
            .items([
              S.listItem()
                .title('Ana Sayfa')
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('homePage')
                ),
              S.listItem()
                .title('Portfolyo Sayfası')
                .child(
                  S.document()
                    .schemaType('portfolioPage')
                    .documentId('portfolioPage')
                ),
              S.listItem()
                .title('Hakkımda Sayfası')
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                ),
              S.listItem()
                .title('İletişim Sayfası')
                .child(
                  S.document()
                    .schemaType('contactPage')
                    .documentId('contactPage')
                ),
            ])
        ),
      S.divider(),
      S.documentTypeListItem('portfolio').title('Portfolyo Öğeleri'),
      S.documentTypeListItem('category').title('Kategoriler'),
      S.documentTypeListItem('referenceLogo').title('Referans Markalar'),
    ])
