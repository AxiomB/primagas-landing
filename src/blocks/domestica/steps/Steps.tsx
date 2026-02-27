'use client'

import { DomesticStepsComponent } from '@/components/DomesticStepsComponent';
import { InterestedModal } from '@/components/modals/InterestedModal';
import React, { useState } from 'react';

export const StepsBlockComponent: React.FC = ({
    title,
    domesticsteps,
    buttonText
}: any) => {

    const steps = domesticsteps || [];

    const [activeModal, setActiveModal] = useState<boolean>(false);

    const closeModal = () => {
        setActiveModal(false);
    }

    const openModal = () => {
        setActiveModal(true);
    }

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
                    <button onClick={openModal} className="w-sm md:w-[40dvw] lg:w-[18dvw] bg-brand text-white px-2 py-3 rounded-full hover:bg-red-700 transition-all shadow-xl tracking-widest text-md">
                        {buttonText}
                    </button>
                </div>
            </div>
            {
                activeModal ? <>
                    <InterestedModal closeModal={closeModal}></InterestedModal>
                </> : ""}
        </section>
    );
};