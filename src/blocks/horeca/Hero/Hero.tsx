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
    defaultnumber,
    leftBoxText,
    rightBoxFirstText,
    rightBoxSecondText
}: any) => {
    return (
        <section id="hero-header">
            <section className="relative mb-[2rem] md:mb-0 min-h-[600px] flex items-center overflow-hidden pt-12 pb-12">
                <div className="absolute w-full h-full lg:h-[100dvh] z-0">
                    <img
                        src={backgroundImage.url}
                        alt="Chef en cocina"
                        className="w-full h-full object-cover object-[70%_50%]"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/70 via-black/50 md:via-black/10 to-transparent md:to-transparent" />
                </div>
                <div className="relative z-10 mx-6 md:mx-20 w-full flex flex-col md:flex-row md:items-center md:justify-between gap-8 min-w-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white text-center md:text-left max-w-full lg:max-w-md md:ml-[5%] lg:ml-[5%]"
                    >
                        <h1 className="text-brand text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-black leading-[1] mb-8 tracking-tighter">
                            {mainHeader}
                        </h1>
                        <p className="text-center md:text-left max-w-full text-lg md:text-xl lg:text-2xl mx-auto lg:mx-0 leading-tight text-gray-100">
                            {subHeader}
                        </p>
                    </motion.div>

                    <div className="w-full max-w-sm md:max-w-[42dvw] bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.00] transition-transform duration-300 mx-auto md:ml-auto md:mr-0 shrink-0">
                        <CallMeHorecaComponent facebookNumber={facebooknumber} googleNumber={googlenumber} defaultNumber={defaultnumber} />
                    </div>
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