import { Block } from 'payload'

export const HeroBlock: Block = {
    slug: 'hero',
    interfaceName: 'HeroBlock',
    fields: [
        {
            name: 'mainHeader',
            type: 'text',
            label: 'Main Header',
            defaultValue: 'INSTALACIÓN GRATUITA Y PRECIO FIJO*',
        },
        {
            name: 'subHeader',
            type: 'text',
            label: 'Sub Header',
            defaultValue: 'PARA TU NEGOCIO O TU HOGAR',
        },
        {
            name: 'subText',
            type: 'text',
            label: 'Sub Text',
            defaultValue: 'Si tu vivienda o tu negocio está fuera de la red de gas canalizado, Primagas te ofrece GLP con la instalación gratuita y precio fijo*',
        },
        {
            name: 'backgroundImage',
            type: 'upload',
            relationTo: 'media',
            required: true
        },
    ],
}