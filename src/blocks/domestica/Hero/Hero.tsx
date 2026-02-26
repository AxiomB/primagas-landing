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
        <section id="hero-header" className="flex flex-col">
            <section className="relative flex flex-col md:block md:min-h-[70dvh] overflow-hidden">
                <div className="absolute w-full h-[100dvh] md:h-[40dvh] md:inset-0 md:h-full z-0">
                    <img
                        src={backgroundImage.url}
                        alt="Chef en cocina"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center py-10 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white"
                    >
                        <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight">
                            {mainHeader}
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-md">
                            {subHeader}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-sm md:max-w-xs mx-auto md:ml-auto w-full"
                    >
                        <CallMeDomesticaComponent facebookNumber={facebooknumber} googleNumber={googlenumber} />
                    </motion.div>
                </div>
            </section>

            <section className="bg-brand flex flex-col md:flex-row items-center">
                <div className="hidden md:flex p-8 items-center justify-center gap-6 text-white min-w-[50%] max-h-[20dvh]">
                    <img
                        className="h-90 w-142 relative -top-40 mb-[-8rem]"
                        src="assets/domestica/tanque-banner.png"
                        alt='tanque'
                    />
                </div>
                <div className="p-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-white w-full md:min-w-[50%]">
                    <img className="w-16 h-16 shrink-0" src="assets/domestica/icono-banner.png" alt='icon' />
                    <div className="text-center sm:text-left">
                        <p className="text-2xl md:text-4xl font-bold uppercase">{downBoxtext}</p>
                        <h3 className="text-xl md:text-3xl font-light leading-tight">
                            AHORRA HASTA <span className="font-bold">1.200€*</span>
                        </h3>
                    </div>
                </div>
            </section>
        </section>
    );
};