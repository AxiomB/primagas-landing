'use client'

import { DomesticStepsComponent } from '@/components/DomesticStepsComponent';
import React from 'react';

export const StepsBlockComponent: React.FC = ({
    title,
    domesticsteps,
    buttonText
}: any) => {

    const steps = domesticsteps || [];

    return (
        <section id="steps" className="bg-grey/20 py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl text-dark font-bold uppercase tracking-tight">
                        {title}
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step: any, i: number) => {
                        return (
                            <DomesticStepsComponent
                                key={i}
                                stepNumber={step.stepNumber}
                                title={step.header}
                                backgroundImage={step.backgroundImage}
                                content={step.content}
                            ></DomesticStepsComponent>
                        )
                    })}
                </div>
                <div className="mt-16 text-center">
                    <button className="bg-brand text-white font-bold px-12 py-4 rounded-full hover:bg-red-700 transition-all shadow-xl uppercase tracking-widest text-sm">
                        {buttonText}
                    </button>
                </div>
            </div>
        </section>
    );
};