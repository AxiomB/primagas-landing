'use client'

import React from 'react';
import { motion } from 'motion/react';

export const HomeBlockComponent: React.FC = ({
    backgroundImage,
    mainHeader,
    listHeader,
    imgHeader,

}: any) => {
    return (
        <section id="main-home" className="flex flex-col py-[5%]">
            <h1 className="relative flex mx-auto text-3xl text-black uppercase">
                {mainHeader}
            </h1>
            <section className="px-[20%] my-10 relative grid grid-cols-2">
                <section className="relative flex-col">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className=""
                    >
                        <p className="text-m text-black">
                            {imgHeader}
                        </p>
                    </motion.div>
                    <div className="relative">
                        <img
                            src={backgroundImage.url}
                            alt="Padre jugando con su hija en el exterior del jardín de su casa"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </section>
                <section className="px-20 py-0 relative flex flex-col h-full">
                    <ul className="list-disc text-black">
                        <h2 className="text-2xl text-[#df2b2a]">
                            {listHeader}
                        </h2>
                        <li>
                            Una solución energética pensada para viviendas fuera de red.
                        </li>
                        <li>
                            Calefacción, agaua caliente y cocina con un suministro estable.*
                        </li>
                        <li>
                            Instalación del depósito incluida dentro de la oferta*.
                        </li>
                        <li>
                            La tranquilidad de contar con un proveedor con 30 años de experiencia en zonas rurales.
                        </li>
                    </ul>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative flex h-full"
                    >
                        <button className="relative self-end mx-auto bg-[#df2b2a] hover:bg-[#df2b2a]/30 text-white font-bold w-sm h-15 rounded-full">
                            <p className="mt-3 mt-auto mb-auto text-white text-m md:text-m">
                                Ver oferta para hogares
                            </p>
                        </button>
                    </motion.div>
                </section>
            </section>
        </section>
    );
};