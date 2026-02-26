import { CollectionConfig } from 'payload'

export const DomesticFaqs: CollectionConfig = {
    slug: 'domesticfaqs',
    admin: {
        useAsTitle: 'question',
    },
    fields: [
        {
            name: 'question',
            type: 'text',
            required: true
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