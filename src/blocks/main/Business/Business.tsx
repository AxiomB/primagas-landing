'use client'

import React from 'react';
import { motion } from 'motion/react';

export const BusinessBlockComponent: React.FC = ({
    backgroundImage,
    mainHeader,
    listHeader,
    imgHeader,

}: any) => {
    return (
        <section id="main-home" className=" bg-[#fafafa] flex flex-col py-[5%]">
            <h1 className="flex mx-20 md:mx-auto text-center text-3xl text-black uppercase">
                TU NEGOCIO NO PUEDE PARAR, PÁSATE AL GAS DE PRIMAGAS <br></br> Y EMPIEZA A AHORRAR
            </h1>
            <section className="px-[20%] mt-10 grid grid-rows-2 mx-auto md:grid-cols-2 md:grid-rows-1 gap-20 md:gap-10">
                <section className="md:px-8 lg:px-20 flex flex-col items-start h-full">
                    <ul className="mb-15 list-inside marker:text-[#df2b2a] list-disc text-black">
                        <h2 className="mb-15 text-2xl text-[#df2b2a]">
                            {listHeader}
                        </h2>
                        <li className='list-style-position:inside'>
                            Un suministro adaptado a negocios ubicados fuera de la red de gas canalizado (zonas rurales).*
                        </li>
                        <li>
                            Instalación gratuita* de tu tanque de gas para operar sin complicaciones.
                        </li>
                        <li>
                            Precio fijo.*
                        </li>
                    </ul>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex h-full"
                    >
                        <button className="self-end bg-[#df2b2a] hover:bg-[#df2b2a]/30 text-white w-3xs h-10 rounded-full">
                            <p className="mt-3 mt-auto mb-auto text-white text-m md:text-m">
                                Ver oferta para negocios
                            </p>
                        </button>
                    </motion.div>
                </section>
                <section className="flex-col">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className=""
                    >
                        <p className="mb-6 text-sm text-black">
                            {imgHeader}
                        </p>
                    </motion.div>
                    <div>
                        <img
                            src={backgroundImage.url}
                            alt="Padre jugando con su hija en el exterior del jardín de su casa"
                            referrerPolicy="no-referrer"
                            className="rounded-3xl"
                        />
                    </div>
                </section>
            </section>
        </section>
    );
};