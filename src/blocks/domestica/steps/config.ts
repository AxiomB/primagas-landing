import { Block } from 'payload'

export const StepsBlock: Block = {
    slug: 'steps',
    interfaceName: 'StepsBlock',
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'title',
            defaultValue: 'TÚ DEPÓSITO EN 3 SENCILLOS PASOS',
            required: true,
        },
        {
            name: 'domesticsteps',
            type: 'relationship',
            relationTo: 'domesticsteps',
            hasMany: true,
            label: 'Steps to Display',
        },
        {
            name: 'buttonText',
            type: 'text',
            label: 'Button Text',
            defaultValue: 'Me interesa',
            required: true,
        },
    ],
}