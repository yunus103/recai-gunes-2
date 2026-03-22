import { type SchemaTypeDefinition } from 'sanity'

import { siteSettings } from './siteSettings'
import { homePage } from './homePage'
import { aboutPage } from './aboutPage'
import { contactPage } from './contactPage'
import { portfolioPage } from './portfolioPage'
import { portfolio } from './portfolio'
import { category } from './category'
import { referenceLogo } from './referenceLogo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, homePage, aboutPage, contactPage, portfolioPage, category, portfolio, referenceLogo],
}
