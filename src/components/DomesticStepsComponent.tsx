'use client'

import React from 'react';

export const DomesticStepsComponent: React.FC<{ stepNumber: number, title: string, backgroundImage: any, content: string }> = ({ stepNumber, title, backgroundImage, content }: { stepNumber: number, title: string, backgroundImage: any, content: string }) => {
    return (
        <section className="bg-white relative group flex flex-col rounded-b-2xl">
            {/* 1. Step Number remains absolute to the section */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center font-black text-xl z-20 shadow-lg">
                {stepNumber}
            </div>

            {/* 2. Image container made relative to hold the H3 overlay */}
            <div className="relative overflow-hidden shadow-md">
                <img
                    src={backgroundImage.url}
                    alt={title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                />

                {/* H3 moved inside here and positioned at the bottom of the image */}
                <h3 className="absolute bottom-0 left-0 right-0 font-bold text-center text-xl py-2 text-white bg-brand">
                    {title}
                </h3>
            </div>

            {/* 3. Added a padding wrapper for the content since the H3 moved */}
            <div className="p-4">
                <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
            </div>
        </section>
    );
}