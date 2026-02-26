'use client'

import React from 'react';
import { motion } from 'motion/react';

export const SubfooterBlockComponent: React.FC = ({
    firstParagraph,
    secondParagraph,
    backgroundImage
}: any) => {

    return (
        <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage.url}
                    alt="Happy Couple"
                    className="w-full h-full object-cover object-[60%_40%]"
                    referrerPolicy="no-referrer"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 text-brand text-right">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl ml-auto"
                >
                    <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
                        {firstParagraph}
                    </h2>
                    <p className="text-2xl font-black mb-8">{secondParagraph}</p>
                </motion.div>
            </div>
        </section>
    );
};