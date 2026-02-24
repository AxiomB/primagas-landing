import { Block } from 'payload'

export const ConditionsBlock: Block = {
    slug: 'conditions',
    interfaceName: 'ConditionsBlock',
    fields: [
        {
            name: 'domesticconditions',
            type: 'relationship',
            relationTo: 'domesticconditions',
            hasMany: true,
            label: 'Benefits to Display',
        },
    ],
}