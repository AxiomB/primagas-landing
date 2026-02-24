import { BenefitsBlock } from '@/blocks/horeca/Benefits/config'
import { HeroBlock } from '@/blocks/horeca/Hero/config'
import { SubfooterBlock } from '@/blocks/horeca/Subfooter/config'
import { GlobalConfig } from 'payload'

export const HorecaPage: GlobalConfig = {
    slug: 'horecapage',
    fields: [
        {
            name: 'layout',
            type: 'blocks',
            blocks: [HeroBlock, BenefitsBlock, SubfooterBlock],
        },
    ],
}