import { Block } from 'payload'

export const WhyPrimagasBlock: Block = {
    slug: 'whyprimagas',
    interfaceName: 'WhyPrimagasBlock',
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Title',
            defaultValue: 'VENTAJAS DEL GLP DE PRIMAGAS:',
            required: true,
        },
        {
            name: 'reasons',
            type: 'relationship',
            relationTo: 'mainreasons',
            hasMany: true,
            label: 'Reasons To Display',
        },
    ]
}