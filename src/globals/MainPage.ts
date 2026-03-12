import { AdvantagesBlock } from '@/blocks/domestica/advantages/config'
import { ConditionsBlock } from '@/blocks/domestica/conditions/config'
import { FaqBlock } from '@/blocks/domestica/faq/config'
import { HeroBlock } from '@/blocks/main/Hero/config'
import { HomeBlock } from '@/blocks/main/Home/config'
import { StepsBlock } from '@/blocks/domestica/steps/config'
import { SubfooterBlock } from '@/blocks/domestica/subfooter/config'
import { GlobalConfig } from 'payload'

export const MainPage: GlobalConfig = {
    slug: 'mainpage',
    fields: [
        {
            name: 'layout',
            type: 'blocks',
            blocks: [HeroBlock, HomeBlock],
        },
    ],
}