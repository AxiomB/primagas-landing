'use client'

import React, { useState } from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { JsxConverters } from '@/utils/jsxConverter';
import { InterestedModal } from '@/components/modals/InterestedModal';

export const SubfooterBlockComponent: React.FC = ({
    mainHeader,
    firstParagraph,
    secondParagraph,
    endText
}: any) => {
    const [activeModal, setActiveModal] = useState<boolean>(false);

    const closeModal = () => {
        setActiveModal(false);
    }

    const openModal = () => {
        setActiveModal(true);
    }
    return (
        <section id="subfooter" className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-brand mb-8 leading-tight">
                    {mainHeader}
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-tight">
                    <RichText data={firstParagraph} converters={JsxConverters} />
                    <RichText data={secondParagraph} converters={JsxConverters} />
                    <button onClick={openModal} className="w-[26dw] md:w-[20dvw] lg:w-[16dvw] bg-brand text-white px-2 py-3 rounded-full hover:bg-red-700 transition-all shadow-xl tracking-widest text-md">
                        {endText}
                    </button>
                    {
                        activeModal ? <>
                            <InterestedModal closeModal={closeModal}></InterestedModal>
                        </> : ""}
                </div>
            </div>
        </section>
    );
};