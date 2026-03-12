import { Block } from 'payload'

export const HomeBlock: Block = {
    slug: 'home',
    interfaceName: 'HomeBlock',
    fields: [
        {
            name: 'mainHeader',
            type: 'text',
            label: 'Main Header',
            defaultValue: 'QUE NUNCA FALTE CALOR EN TU HOGAR CON GLP',
        },
        {
            name: 'imgHeader',
            type: 'text',
            label: 'IMG Header',
            defaultValue: 'Si vives en una vivienda unifamiliar o en una casa situada fuera de la red de gas natural, el GLP de Primagas puede ofrecerte calefacción, agua caliente y energía para tu cocina con total comodidad',
        },
        {
            name: 'listHeader',
            type: 'text',
            label: 'List Header',
            defaultValue: 'Con Primagas puedes disfrutar de:',
        },
        {
            name: 'backgroundImage',
            type: 'upload',
            relationTo: 'media',
            required: true
        },
    ],
}