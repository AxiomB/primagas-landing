import { Block } from 'payload'

export const HeroBlock: Block = {
    slug: 'hero',
    interfaceName: 'HeroBlock',
    fields: [
        {
            name: 'mainHeader',
            type: 'text',
            label: 'Main Header',
            defaultValue: 'QUE LA ENERGÍA NUNCA FALTE EN TU HOGAR, VIVAS DONDE VIVAS.',
        },
        {
            name: 'subHeader',
            type: 'text',
            label: 'Sub Header',
            defaultValue: 'Disfruta de las ventajas de tener tu propio depósito de gas y un precio fijo*',
        },
        {
            name: 'facebooknumber',
            type: 'text',
            label: 'Facebook Phone Number',
            defaultValue: '919 373 184',
        },
        {
            name: 'googlenumber',
            type: 'text',
            label: 'Google Phone Number',
            defaultValue: '919 373 184',
        },
        {
            name: 'backgroundImage',
            type: 'upload',
            relationTo: 'media',
            required: true
        },
        {
            name: 'downBoxtext',
            type: 'text',
            label: 'Down Box Text',
            defaultValue: 'INSTALACIÓN GRATUITA',
        },
        {
            name: 'downBoxtextSecond',
            type: 'text',
            label: 'Down Box Second Text',
            defaultValue: 'AHORRA HASTA 1.200€*',
        },
    ],
}