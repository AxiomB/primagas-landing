'use client'

import { CallMeHorecaComponent } from '@/components/CallMeHorecaComponent';
import React from 'react';
import { motion } from 'motion/react';

export const HeroBlockComponent: React.FC = ({
    backgroundImage,
    mainHeader,
    subHeader,
    facebooknumber,
    googlenumber,
    leftBoxText,
    rightBoxFirstText,
    rightBoxSecondText
}: any) => {
    return (
        <section id="hero-header">
            <section className="relative min-h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={backgroundImage.url}
                        alt="Chef en cocina"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/60 md:to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center py-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white"
                    >
                        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                            {mainHeader}
                        </h1>
                        <p className="text-xl md:text-2xl font-light max-w-md leading-relaxed">
                            {subHeader}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md ml-auto"
                    >
                        <CallMeHorecaComponent number={facebooknumber}></CallMeHorecaComponent>
                    </motion.div>
                </div>
            </section>
            <section className="grid md:grid-cols-2">
                <div className="bg-white border-y md:border-y-0 md:border-r border-gray-100 p-8 flex items-center justify-center gap-6">
                    <img className="w-16 h-16 text-red-600" src="/assets/horeca/icon-install.png" alt='install-icon' />
                    <div>
                        <h3 className="text-2xl font-black text-red-600 leading-tight">{leftBoxText}</h3>
                    </div>
                </div>
                <div className="bg-red-600 p-8 flex items-center justify-center gap-6 text-white">
                    <img className="w-16 h-16" src="/assets/horeca/icon-piggybank.png" alt='piggybank-icon' />
                    <div>
                        <p className="text-lg font-light">{rightBoxFirstText}</p>
                        <h3 className="text-3xl font-black leading-tight">{rightBoxSecondText}</h3>
                    </div>
                </div>
            </section>
        </section>
    );
};