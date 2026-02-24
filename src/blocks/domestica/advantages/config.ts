import { Block } from 'payload'

export const AdvantagesBlock: Block = {
    slug: 'advantages',
    interfaceName: 'AdvantagesBlock',
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Title',
            defaultValue: 'VENTAJAS DEL GLP DE PRIMAGAS:',
            required: true,
        },
        {
            name: 'advantages',
            type: 'relationship',
            relationTo: 'domesticadvantages',
            hasMany: true,
            label: 'Advantages to Display',
        },
    ],
}