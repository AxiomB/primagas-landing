'use client'

import { DomesticConditionsComponent } from '@/components/DomesticConditionsComponent';
import { DomesticFaqsComponent } from '@/components/DomesticFaqsComponent';
import React from 'react';

export const FaqBlocksComponent: React.FC = ({
    domesticfaqs,
}: any) => {

    const faqs = domesticfaqs || [];

    return (
        <section id="faq" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark uppercase tracking-tight">
                        Preguntas Frecuentes
                    </h2>
                </div>

                <div className='flex flex-col'>
                    {faqs.map((faq: any, i: number) => {
                        return (
                            <DomesticFaqsComponent
                                key={i}
                                question={faq.question}
                                content={faq.content}
                            ></DomesticFaqsComponent>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};