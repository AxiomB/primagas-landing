'use client'

import { HorecaBenefitsComponent } from '@/components/HorecaBenefitsComponent';
import React from 'react';

export const BenefitsBlockComponent: React.FC = ({
    mainHeader,
    horecaBenefits,
}: any) => {

    console.log(horecaBenefits);
    const benefits = horecaBenefits || [];

    return (
        <section id="benefits-header">
            <section className="bg-gray-50 py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xl md:text-3xl font-black text-dark text-center mb-16 tracking-tight">
                        {mainHeader}
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit: any, index: number) => {
                            return (
                                <HorecaBenefitsComponent
                                    title={benefit.title}
                                    backgroundImage={benefit.backgroundImage}
                                    content={benefit.content}
                                    isRed={index % 2 === 0}
                                ></HorecaBenefitsComponent>
                            )
                        })}
                    </div>
                </div>
            </section>
        </section>
    );
};