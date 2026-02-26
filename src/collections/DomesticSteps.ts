import { CollectionConfig } from 'payload'

export const DomesticSteps: CollectionConfig = {
    slug: 'domesticsteps',
    admin: {
        useAsTitle: 'header',
    },
    fields: [
        {
            name: 'stepNumber',
            type: 'number',
            label: 'Step Number',
            defaultValue: 1,
            required: true
        },
        {
            name: 'backgroundImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'header',
            type: 'text',
            required: true
        },
        {
            name: 'content',
            type: 'text',
            required: true
        },
    ],
}