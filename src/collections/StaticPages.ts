import { CollectionConfig } from 'payload'

export const StaticPages: CollectionConfig = {
  slug: 'staticpages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'The URL path (e.g., "privacy-policy" or "cookies")',
      },
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Multi-paragraph content',
      localized: true
    },
  ],
}