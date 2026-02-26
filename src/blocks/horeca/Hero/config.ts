import { Block } from 'payload'

export const HeroBlock: Block = {
    slug: 'hero',
    interfaceName: 'HeroBlock',
    fields: [
        {
            name: 'mainHeader',
            type: 'text',
            label: 'Main Header',
            defaultValue: 'CÁMBIATE AL PRECIO FIJO DEL GAS*',
        },
        {
            name: 'subHeader',
            type: 'text',
            label: 'Sub Header',
            defaultValue: 'Disfruta de las ventajas de tener tu propio depósito de gas y un precio fijo*.',
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
            label: 'Facebook Phone Number',
            defaultValue: '919 373 184',
        },
        {
            name: 'backgroundImage',
            type: 'upload',
            relationTo: 'media',
            required: true
        },
        {
            name: 'leftBoxText',
            type: 'text',
            label: 'LEFT BOX TEXT',
            defaultValue: 'INSTALACIÓN GRATUITA'
        },
        {
            name: 'rightBoxFirstText',
            type: 'text',
            label: 'RIGHT BOX TEXT',
            defaultValue: 'ahorra'
        },
        {
            name: 'rightBoxSecondText',
            type: 'text',
            label: 'RIGHT BOX SECOND TEXT',
            defaultValue: 'HASTA 3.000€*'
        },
    ],
}