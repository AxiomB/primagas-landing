import { HeroBlock } from '@/blocks/main/Hero/config'
import { HomeBlock } from '@/blocks/main/Home/config'
import { BusinessBlock } from '@/blocks/main/Business/config'
import { GlobalConfig } from 'payload'

export const MainPage: GlobalConfig = {
    slug: 'mainpage',
    fields: [
        {
            name: 'layout',
            type: 'blocks',
            blocks: [HeroBlock, HomeBlock, BusinessBlock],
        },
    ],
}