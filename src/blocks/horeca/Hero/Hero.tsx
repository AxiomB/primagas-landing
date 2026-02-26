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
                <div className="absolute w-full h-[100dvh] md:h-[40dvh] md:inset-0 md:h-full z-0">
                    <img
                        src={backgroundImage.url}
                        alt="Chef en cocina"
                        className="w-full h-full object-cover object-[70%_50%]"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center py-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white"
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-brand mb-6 mr-6">
                            {mainHeader}
                        </h1>
                        <p className="text-xl md:text-xl max-w-[22dvw] leading-6">
                            {subHeader}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md ml-[15dvw]"
                    >
                        <CallMeHorecaComponent number={facebooknumber}></CallMeHorecaComponent>
                    </motion.div>
                </div>
            </section>
            <section className="grid md:grid-cols-2">
                <div className="bg-white border-y md:border-y-0 md:border-r border-gray-100 p-8 flex items-center justify-center gap-6">
                    <img className="w-32 h-18 text-brand" src="/assets/horeca/icon-install.png" alt='install-icon' />
                    <div>
                        <h3 className="text-3xl font-bold text-brand leading-tight ml-6">INSTALACIÓN <br></br> GRATUITA*</h3>
                    </div>
                </div>
                <div className="bg-brand p-8 flex items-center justify-center gap-6 text-white">
                    <img className="w-20 h-18" src="/assets/horeca/icon-piggybank.png" alt='piggybank-icon' />
                    <div>
                        <p className="text-xl">{rightBoxFirstText}</p>
                        <h3 className="text-3xl font-bold leading-tight">{rightBoxSecondText}</h3>
                    </div>
                </div>
            </section>
        </section>
    );
};