import { AdvantagesBlock } from '@/blocks/domestica/advantages/config'
import { ConditionsBlock } from '@/blocks/domestica/conditions/config'
import { FaqBlock } from '@/blocks/domestica/faq/config'
import { HeroBlock } from '@/blocks/domestica/Hero/config'
import { StepsBlock } from '@/blocks/domestica/steps/config'
import { SubfooterBlock } from '@/blocks/domestica/subfooter/config'
import { GlobalConfig } from 'payload'

export const DomesticaPage: GlobalConfig = {
    slug: 'domesticapage',
    fields: [
        {
            name: 'layout',
            type: 'blocks',
            blocks: [HeroBlock, AdvantagesBlock, ConditionsBlock, FaqBlock, StepsBlock, SubfooterBlock],
        },
    ],
}