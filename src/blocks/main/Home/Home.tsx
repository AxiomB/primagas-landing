'use client'

import React from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useUtms } from '@/hooks/useUtem';
import { returnUtmsToString } from '@/components/utils/utmsToString';

export const HomeBlockComponent: React.FC = ({
    backgroundImage,
    mainHeader,
    listHeader,
    imgHeader,

}: any) => {
    const router = useRouter();
    const utms = useUtms();

    const utmString = returnUtmsToString(utms);

    const clickHogar = () => {
        if (utmString.length > 0) {
            router.push('/hogar?' + utmString, { scroll: false });
        }
        else {
            router.push('/hogar?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={creative}&utm_term={keyword}', { scroll: false })
        }
    }

    return (
        <section id="main-home" className="bg-grey/20 flex flex-col py-[5%]">
            <h1 className="mx-6 md:mx-auto text-center font-bold text-3xl text-black uppercase">
                {mainHeader}
            </h1>
            <section className="mt-10 mx-auto w-full max-w-6xl px-6 flex flex-col md:flex-row gap-6">
                <section className="flex flex-col w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-4 text-md text-black leading-tight">
                            {imgHeader}
                        </p>
                    </motion.div>
                    <div className="w-full">
                        <img
                            src={backgroundImage.url}
                            alt="Padre jugando con su hija en el exterior del jardín de su casa"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover rounded-3xl"
                        />
                    </div>
                </section>
                <section className="flex flex-col w-full md:w-1/2">
                    <h2 className="mb-4 text-2xl font-semibold text-[#df2b2a]">
                        {listHeader}
                    </h2>
                    <ul className="list-disc list-inside marker:text-[#df2b2a] text-black space-y-3 flex-1">
                        <li className="text-xl">
                            Una solución energética pensada para viviendas fuera de red.
                        </li>
                        <li className="text-xl">
                            Calefacción, agua caliente y cocina con un suministro estable.*
                        </li>
                        <li className="text-xl">
                            Instalación del depósito incluida dentro de la oferta.*
                        </li>
                        <li className="text-xl">
                            La tranquilidad de contar con un proveedor con 30 años de experiencia en zonas rurales.
                        </li>
                    </ul>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <button
                            className="mt-6 bg-brand hover:bg-red-700 text-white px-6 h-12 rounded-full"
                            onClick={clickHogar}
                        >
                            <span className="text-white text-sm md:text-base">
                                Ver oferta para hogares
                            </span>
                        </button>
                    </motion.div>
                </section>
            </section>
        </section>
    );
};