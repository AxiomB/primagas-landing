'use client'

import React from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { JsxConverters } from '@/utils/jsxConverter';

export const SubfooterBlockComponent: React.FC = ({
    mainHeader,
    firstParagraph,
    secondParagraph,
    endText
}: any) => {
    return (
        <section id="subfooter" className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-brand mb-8 leading-tight">
                    {mainHeader}
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-tight">
                    <RichText data={firstParagraph} converters={JsxConverters} />
                    <RichText data={secondParagraph} converters={JsxConverters} />
                    <p className="text-brand font-bold text-xl">{endText}</p>
                </div>
            </div>
        </section>
    );
};