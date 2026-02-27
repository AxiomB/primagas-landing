'use client'

import React from 'react';
import { motion } from 'motion/react';

export const FaqBlocksComponent: React.FC = ({
    domesticfaqs,
}: any) => {

    const faqs = domesticfaqs || [];

    return (
        <section id="faq" className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark uppercase tracking-tight">
                        ¿Qué es el glp?
                    </h2>
                </div>

                <div className='flex flex-col'>
                    <div className="border border-brand border-2 rounded-2xl overflow-hidden mb-6 py-2 px-2">
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                        >
                            <div className="pl-10 pt-5 pb-5 text-gray-600 leading-relaxed flex flex-row gap-6">
                                <div className="px-4 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg">?</div>
                                <p className='text-2xl'>
                                    <span className='font-bold'>El GLP (Gas Licuado del Petróleo)</span> es una mezcla de propano y butano que se almacena en estado
                                    líquido y se utiliza como fuente de energía versátil y eficiente.<br></br>
                                    En el ámbito <span className='font-bold'>doméstico</span>, se emplea para <span className='font-bold'>calefacción, agua caliente sanitaria y cocina</span>, ofreciendo un
                                    calor rápido y estable. Es ideal para viviendas sin acceso a gas natural, proporcionando un suministro
                                    seguro y continuo mediante depósito
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};