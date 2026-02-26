import { Block } from 'payload'

export const BenefitsBlock: Block = {
    slug: 'benefits',
    interfaceName: 'BenefitsBlock',
    fields: [
        {
            name: 'mainHeader',
            type: 'text',
            label: 'Main Header',
            defaultValue: 'CÁMBIATE AL PRECIO FIJO DEL GAS*',
        },
        {
            name: 'horecaBenefits',
            type: 'relationship',
            relationTo: 'horecabenefits',
            hasMany: true,
            label: 'Benefits to Display',
        },
    ],
}