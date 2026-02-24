'use client'

import React from 'react';

export const DomesticStepsComponent: React.FC<{ stepNumber: number, title: string, backgroundImage: any, content: string }> = ({ stepNumber, title, backgroundImage, content }: { stepNumber: number, title: string, backgroundImage: any, content: string }) => {
    return (
        <section className="relative group">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-primagas-red text-white rounded-full flex items-center justify-center font-black text-xl z-10 shadow-lg">
                {stepNumber}
            </div>
            <div className="overflow-hidden rounded-2xl mb-6 shadow-md">
                <img
                    src={backgroundImage.url}
                    alt={title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                />
            </div>
            <h3 className="font-bold text-xl mb-4 text-primagas-red">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
        </section>
    );
}