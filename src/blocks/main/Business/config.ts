import { Block } from 'payload'

export const BusinessBlock: Block = {
    slug: 'business',
    interfaceName: 'BusinessBlock',
    fields: [
        {
            name: 'mainHeader',
            type: 'text',
            label: 'Main Header',
            defaultValue: 'TU NEGOCIO NO PUEDE PARAR, PÁSATE AL GAS DE PRIMAGAS Y EMPIEZA A AHORRAR',
        },
        {
            name: 'imgHeader',
            type: 'text',
            label: 'IMG Header',
            defaultValue: 'Bares, restaurantes, hoteles o empresas situadas fuera de la red de gas canalizado pueden contar con una solución energética eficiente gracias al GLP de Primagas. Asegura el funcionamiento de tu cocina profesional y calefacción con una energía que rinde más por menos.',
        },
        {
            name: 'listHeader',
            type: 'text',
            label: 'List Header',
            defaultValue: 'Pensado para negocios que necesitan:',
        },
        {
            name: 'backgroundImage',
            type: 'upload',
            relationTo: 'media',
            required: true
        },
    ],
}