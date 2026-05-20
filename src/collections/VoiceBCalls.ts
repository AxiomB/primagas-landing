import { CollectionConfig } from 'payload'

export const VoiceBCalls: CollectionConfig = {
    slug: 'voicebcalls',
    fields: [
        {
            name: 'channel',
            type: 'text',
            required: true
        },
        {
            name: 'phone',
            type: 'text',
            required: true
        },
        {
            name: 'apiKey',
            type: 'text',
            defaultValue: '',
            required: true
        },
        {
            name: 'signature',
            type: 'text',
            defaultValue: '',
            required: true
        },
        {
            name: 'requestBody',
            type: 'text',
            defaultValue: '',
            required: true
        },
        {
            name: 'result',
            type: 'text',
            required: true
        }
    ],
}