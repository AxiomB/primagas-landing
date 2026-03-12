'use client'

import React from 'react';
import { MainReasonComponent } from '@/components/MainReasonsComponent';

export const WhyPrimagasBlockComponent: React.FC = ({
    title,
    reasons
}: any) => {

    const mainreasons = reasons || [];

    return (
        <>
            <section id="ventajas" className="py-24 bg-brand">
                <section className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                            {title}
                        </h2>
                    </div>
                    <section className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {mainreasons.map((reason: any, i: number) => {
                            return (
                                <MainReasonComponent
                                    key={i}
                                    title={reason.title}
                                    backgroundImage={reason.backgroundImage}
                                ></MainReasonComponent>
                            )
                        })}
                    </section>
                </section>
            </section>
        </>
    );
}