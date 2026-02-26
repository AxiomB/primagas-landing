import { CollectionConfig } from 'payload'

export const HorecaBenefits: CollectionConfig = {
    slug: 'horecabenefits',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'backgroundImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'content',
            type: 'text',
            required: true,
            label: 'Multi-paragraph content',
        },
        {
            name: 'color',
            type: 'text',
            required: true,
            label: 'Color in hex format'
        }
    ],
}