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
                <div className="relative z-10 max-w-7xl px-6 md:px-12 w-full grid md:grid-cols-2 gap-18 items-center py-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white text-center justify-center content-center lg:text-left max-w-full lg:max-w-sm"
                    >
                        <h1 className="text-brand text-2xl sm:text-2xl md:text-3xl lg:text-6xl font-black leading-[1] mb-8 tracking-tighter">
                            {mainHeader}
                        </h1>
                        <p className="text-center max-w-full text-lg max-w-xs md:2text-xl lg:text-2xl max-w-md mx-auto lg:mx-0 leading-tight text-gray-100">
                            {subHeader}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center content-center lg:justify-end"
                    >
                        <div className="w-full max-w-full md:max-w-[48dvw] lg:max-w-[24dvw] bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                            <CallMeHorecaComponent facebookNumber={facebooknumber} googleNumber={googlenumber} />
                        </div>
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