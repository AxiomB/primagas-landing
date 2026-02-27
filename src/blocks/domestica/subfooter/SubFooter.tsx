'use client'

import React from 'react';
import { motion } from 'motion/react';

export const SubfooterBlockComponent: React.FC = ({
    firstParagraph,
    secondParagraph,
    backgroundImage
}: any) => {

    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage.url}
                    alt="Happy Couple"
                    className="w-full h-full object-cover object-[60%_40%]"
                    referrerPolicy="no-referrer"
                />
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex justify-end">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:max-w-[50%] lg:max-w-[40%] flex flex-col gap-6 text-right text-brand"
                >
                    <h2 className="text-3xl md:text-6xl font-black uppercase leading-none">
                        {firstParagraph}
                    </h2>
                    <p className="text-lg md:text-2xl font-medium ml-auto max-w-[280px] md:max-w-sm">
                        {secondParagraph}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};