import React from 'react'

import { HeroBlockComponent } from '../main/Hero/Hero'
import { HomeBlockComponent } from '../main/Home/Home'
import { BusinessBlockComponent } from '../main/Business/Business'
import { WhyPrimagasBlockComponent } from '../main/WhyPrimagas/WhyPrimagas';

const blockComponents = {
    hero: HeroBlockComponent,
    home: HomeBlockComponent,
    business: BusinessBlockComponent,
    whyprimagas: WhyPrimagasBlockComponent
}

export const RenderMain = ({ layout }: { layout: any[] }) => {
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
    );
}