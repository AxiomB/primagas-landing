import { Block } from 'payload'

export const SubfooterBlock: Block = {
    slug: 'subfooter',
    interfaceName: 'SubfooterBlock',
    fields: [
        {
            name: 'firstParagraph',
            type: 'text',
            label: 'Main Paragraph',
            required: true,
        },
        {
            name: 'secondParagraph',
            type: 'text',
            label: 'Secondary Paragraph',
            required: true,
        },
        {
            name: 'backgroundImage',
            type: 'upload',
            relationTo: 'media',
            required: true
        },
    ],
}