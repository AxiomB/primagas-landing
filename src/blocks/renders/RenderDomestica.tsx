import React from 'react'

import { HeroBlockComponent } from '../domestica/Hero/Hero'
import { AdvantagesBlockComponent } from '../domestica/advantages/Advantages'
import { ConditionsBlocksComponent } from '../domestica/conditions/Conditions'
import { FaqBlocksComponent } from '../domestica/faq/Faq'
import { StepsBlockComponent } from '../domestica/steps/Steps'
import { SubfooterBlockComponent } from '../domestica/subfooter/SubFooter'

const blockComponents = {
  hero: HeroBlockComponent,
  advantages: AdvantagesBlockComponent,
  conditions: ConditionsBlocksComponent,
  faq: FaqBlocksComponent,
  steps: StepsBlockComponent,
  subfooter: SubfooterBlockComponent
}

export const RenderDomestica = ({ layout }: { layout: any[] }) => {
  if (!layout) return null

  return (
    <>
      {layout.map((block, index) => {
        const { blockType } = block
        const Component = blockComponents[blockType as keyof typeof blockComponents]

        if (Component) {
          return <Component key={index} {...block} />
        }
        return null
      })}
    </>
  )
}