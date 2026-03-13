'use client'

import React from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

export const BusinessBlockComponent: React.FC = ({
    backgroundImage,
    mainHeader,
    listHeader,
    imgHeader,

}: any) => {
    const router = useRouter();

    return (
        <section id="main-business" className="bg-[#fafafa] flex flex-col py-[5%]">
            <h1 className="mx-6 md:mx-auto text-center font-bold text-3xl text-black uppercase">
                TU NEGOCIO NO PUEDE PARAR, PÁSATE AL GAS DE PRIMAGAS <br />
                Y EMPIEZA A AHORRAR
            </h1>
            <section className="mt-10 mx-auto w-full max-w-6xl px-6 flex flex-col md:flex-row gap-6">
                <section className="flex flex-col items-start w-full md:w-1/2">
                    <h2 className="mb-4 text-2xl font-semibold text-[#df2b2a]">
                        {listHeader}
                    </h2>
                    <ul className="mb-6 list-disc list-inside marker:text-[#df2b2a] text-black space-y-3 flex-1">
                        <li className="text-xl">
                            Un suministro adaptado a negocios ubicados fuera de la red de gas canalizado (zonas rurales).*
                        </li>
                        <li className="text-xl">
                            Instalación gratuita* de tu tanque de gas para operar sin complicaciones.
                        </li>
                        <li className="text-xl">
                            Precio fijo.*
                        </li>
                    </ul>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <button
                            className="bg-brand hover:bg-red-700 text-white px-6 h-12 rounded-full"
                            onClick={() => {
                                router.push('/negocio', { scroll: false })
                            }}
                        >
                            <span className="text-white text-sm md:text-base">
                                Ver oferta para negocios
                            </span>
                        </button>
                    </motion.div>
                </section>
                <section className="flex flex-col items-start w-full md:w-1/2">
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
                            alt="Cocinera revisando una tablet"
                            referrerPolicy="no-referrer"
                            className="w-full h-auto object-cover rounded-3xl"
                        />
                    </div>
                </section>
            </section>
        </section>
    );

};