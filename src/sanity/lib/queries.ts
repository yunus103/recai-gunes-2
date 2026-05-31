import { groq } from 'next-sanity'

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    "logoUrl": logo.asset->url,
    "faviconUrl": favicon.asset->url,
    "ogImageUrl": ogImage.asset->url,
    email,
    phone,
    address,
    socialLinks[]{
      platform,
      url
    }
  }
`

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    heroSubtitle,
    heroTitle,
    heroDescription,
    heroImages[]{
      alt,
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions
        }
      }
    },
    aboutSectionTitle,
    aboutSectionText,
    aboutSectionImage {
      alt,
      objectPosition,
      hotspot,
      crop,
      asset-> {
        _id,
        url,
        metadata { lqip, dimensions }
      }
    },
    stats[]{
      label,
      value,
      suffix
    }
  }
`

export const portfolioPageQuery = groq`
  *[_type == "portfolioPage"][0] {
    title,
    description
  }
`

export const allPortfoliosQuery = groq`
  *[_type == "portfolio"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    "category": category->title,
    coverImage {
      alt,
      objectPosition,
      hotspot,
      crop,
      asset-> {
        _id,
        url,
        metadata {
          lqip,
          dimensions
        }
      }
    }
  }
`

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    title,
    subtitle,
    bioFirstParagraph,
    bioContent,
    portraitImage {
      alt,
      objectPosition,
      hotspot,
      crop,
      asset-> {
        _id,
        url,
        metadata { lqip, dimensions }
      }
    },
    equipmentList[]{
      category,
      items
    }
  }
`

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    title,
    subtitle,
    introText,
    calendlyLink
  }
`

export const featuredPortfoliosQuery = groq`
  *[_type == "homePage"][0] {
    "featuredPortfolios": featuredPortfolios[]-> {
      _id,
      title,
      "slug": slug.current,
      "category": category->title,
      coverImage {
        alt,
        objectPosition,
        hotspot,
        crop,
        asset-> {
          _id,
          url,
          metadata { lqip, dimensions }
        }
      }
    }
  }.featuredPortfolios[0...8]
`

export const portfolioBySlugQuery = groq`
  *[_type == "portfolio" && slug.current == $slug][0] {
    _id,
    title,
    "category": category->title,
    description,
    coverImage {
      alt,
      objectPosition,
      hotspot,
      crop,
      asset-> {
        _id,
        url,
        metadata { lqip, dimensions }
      }
    },
    gallery[]{
      _key,
      alt,
      objectPosition,
      hotspot,
      crop,
      asset-> {
        _id,
        url,
        metadata { lqip, dimensions }
      }
    }
  }
`

export const referenceLogosQuery = groq`
  *[_type == "referenceLogo"] | order(_createdAt desc) {
    _id,
    name,
    logo {
      alt,
      asset-> {
        _id,
        url,
        metadata { lqip, dimensions }
      }
    }
  }
`

export const relatedPortfoliosQuery = groq`
  *[_type == "portfolio" && slug.current != $slug] | order(_createdAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    "category": category->title,
    coverImage {
      alt,
      objectPosition,
      hotspot,
      crop,
      asset-> {
        _id,
        url,
        metadata { lqip, dimensions }
      }
    }
  }
`
