import { CollectionConfig } from 'payload'

export const DomesticConditions: CollectionConfig = {
    slug: 'domesticconditions',
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
    ],
}