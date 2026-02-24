'use client'

import { DomesticAdvantagesComponent } from '@/components/DomesticAdvantagesComponent';
import React from 'react';

export const AdvantagesBlockComponent: React.FC = ({
    title,
    domesticadvantages,
}: any) => {

    const advantages = domesticadvantages || [];

    return (
        <section id="ventajas" className="py-24 bg-gray-50">
            <section className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                        {title}
                    </h2>
                </div>
                <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((advantage: any, i: number) => {
                        return (
                            <DomesticAdvantagesComponent
                                key={i}
                                title={advantage.title}
                                backgroundImage={advantage.backgroundImage}
                                content={advantage.content}
                            ></DomesticAdvantagesComponent>
                        )
                    })}
                </section>
            </section>
        </section>
    );
};