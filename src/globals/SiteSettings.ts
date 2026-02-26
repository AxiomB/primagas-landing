import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
    slug: 'site-settings',
    fields: [
        {
            name: 'gtmId',
            type: 'text',
            label: 'Google Tag Manager ID',
        },
        {
            name: 'googleVerificationId',
            type: 'text',
            label: 'Google Search Console Verification ID',
        },
        {
            name: 'cookiebotId',
            type: 'text',
            label: 'Cookiebot ID'
        }
    ]
}