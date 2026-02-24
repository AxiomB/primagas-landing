import { Block } from 'payload'

export const FaqBlock: Block = {
    slug: 'faq',
    interfaceName: 'FaqBlock',
    fields: [
        {
            name: 'domesticfaqs',
            type: 'relationship',
            relationTo: 'domesticfaqs',
            hasMany: true,
            label: 'Faqs to Display',
        },
    ],
}