'use client'

import React from 'react';
import { motion } from 'motion/react';
import { CallMeDomesticaComponent } from '@/components/CallMeDomesticaComponent';

export const HeroBlockComponent: React.FC = ({
    backgroundImage,
    mainHeader,
    subHeader,
    facebooknumber,
    googlenumber,
    downBoxtext,
    downBoxtextSecond,
}: any) => {
    return (
        <section id="hero-header">
            <section className="relative max-h-[70dvh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={backgroundImage.url}
                        alt="Chef en cocina"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>

                <div className="z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center py-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white mb-8 md:mb-16"
                    >
                        <h1 className="text-3xl md:text-5xl font-black uppercase">
                            {mainHeader}
                        </h1>
                        <p className="mt-1 pl-1text-xl md:text-xl max-w-md">
                            {subHeader}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-xs ml-auto"
                    >
                        <CallMeDomesticaComponent number={facebooknumber}></CallMeDomesticaComponent>
                    </motion.div>
                </div>
            </section>

            <section className="bg-brand flex flex-grow max-h-[15dvh]">
                <div className="p-8 flex items-center justify-center gap-6 text-white min-w-[50%] max-h-[20dvh]">
                    <img className="h-90 w-142 relative -top-40 mb-[-8rem]" src="assets/domestica/tanque-banner.png" alt='piggybank-icon' />
                </div>
                <div className="p-8 flex items-center justify-center gap-6 text-white min-w-[50%] max-h-[20dvh]">
                    <img className="w-16 h-16" src="assets/domestica/icono-banner.png" alt='piggybank-icon' />
                    <div>
                        <p className="text-4xl font-bold">{downBoxtext}</p>
                        <h3 className="text-3xl font-light leading-tight">AHORRA HASTA <span className="font-bold">1.200€*</span></h3>
                    </div>
                </div>
            </section>
        </section>
    );
};