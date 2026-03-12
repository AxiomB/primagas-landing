import { CollectionConfig } from 'payload'

export const MainReason: CollectionConfig = {
    slug: 'mainreasons',
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
        }
    ],
}