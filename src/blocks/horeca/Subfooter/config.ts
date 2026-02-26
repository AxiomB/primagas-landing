import { Block } from 'payload'

export const SubfooterBlock: Block = {
    slug: 'subfooter',
    interfaceName: 'SubfooterBlock',
    fields: [
        {
            name: 'mainHeader',
            type: 'text',
            label: 'Main Header',
            defaultValue: '¿SABÍAS QUE EL 1 DE ENERO DE 2025 ENTRÓ EN VIGOR EL REAL DECRETO 1042/2017 SOBRE LIMITACIONES DE EMISIONES A LA ATMÓSFERA?',
        },
        {
            name: 'firstParagraph',
            type: 'richText',
            label: 'Main Paragraph',
            required: true,
        },
        {
            name: 'secondParagraph',
            type: 'richText',
            label: 'Secondary Paragraph',
            required: true,
        },
        {
            name: 'endText',
            type: 'text',
            label: 'End Text',
            defaultValue: 'INSTALACIÓN GRATUITA',
        },
    ],
}