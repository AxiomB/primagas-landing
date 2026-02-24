import React from 'react'
import { HeroBlockComponent } from '../horeca/Hero/Hero'
import { BenefitsBlockComponent } from '../horeca/Benefits/Benefits'
import { SubfooterBlockComponent } from '../horeca/Subfooter/SubFooter'


const blockComponents = {
  hero: HeroBlockComponent,
  benefits: BenefitsBlockComponent,
  subfooter: SubfooterBlockComponent
}

export const RenderHoreca = ({ layout }: { layout: any[] }) => {
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