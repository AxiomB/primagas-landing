import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor, TextStateFeature } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { SiteSettings } from './globals/SiteSettings'
import { StaticPages } from './collections/StaticPages'
import { DomesticaPage } from './globals/DomesticaPage'
import { HorecaPage } from './globals/HorecaPage'
import { HorecaBenefits } from './collections/HorecaBenefits'
import { DomesticAdvantages } from './collections/DomesticAdvantage'
import { DomesticConditions } from './collections/DomesticConditions'
import { DomesticFaqs } from './collections/DomesticFaqs'
import { DomesticSteps } from './collections/DomesticSteps'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, StaticPages, HorecaBenefits, DomesticAdvantages, DomesticConditions, DomesticFaqs, DomesticSteps],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      TextStateFeature({
        state: {
          color: {
            'text-brand': {
              label: 'Text Shocking',
              css: {
                color: '#df2b2a',
              },
            },
            'text-midnight': {
              label: 'Midnight Blue',
              css: {
                color: '#0a1128',
              },
            },
            'text-white': {
              label: 'White',
              css: {
                color: '#ffffff',
              },
            },
            'text-black': {
              label: 'Black',
              css: {
                color: '#000000',
              },
            },
            'text-lighter-black': {
              label: 'Lighter Black',
              css: {
                color: '#050505'
              }
            },
            'text-titanium': {
              label: 'Titanium',
              css: {
                color: '#444444'
              }
            }
          },
        },
      }),
    ]
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
  globals: [DomesticaPage, HorecaPage, SiteSettings],
})
