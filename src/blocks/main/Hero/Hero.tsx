'use client'

import React from 'react';
import { motion } from 'motion/react';

export const HeroBlockComponent: React.FC = ({
    backgroundImage,
    mainHeader,
    subHeader,
    subText,

}: any) => {
    return (
        <section id="hero-header" className="flex flex-col">
            <section className="relative flex flex-col md:block md:min-h-[70dvh] overflow-hidden">
                <div className="absolute w-full h-[100dvh] md:h-[40dvh] md:inset-0 md:h-full z-0">
                    <img
                        src={backgroundImage.url}
                        alt="Fogon encendido"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <div className="backdrop-brightness-60 md:backdrop-brightness-100 relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center py-10 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#df2b2a] md:mb-10 lg:mb-10 pr-50"
                    >
                        <h1 className="text-3xl md:text-5xl font-black uppercase leading-[1.2]">
                            {mainHeader}
                        </h1>
                        <p className="mt-4 text-xl md:text-xl max-w-md">
                            {subHeader}
                        </p>
                        <p className="mt-3 text-white text-m md:text-m max-w-md">
                            {subText}
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="backdrop-brightness-60 md:backdrop-brightness-100 relative z-10 flex flex-col md:flex-row justify-center content-center gap-4 md:gap-x-100"
                >
                    <button className="flex flex-row relative justify-center content-center mx-auto md:mx-0 bg-[#df2b2a] hover:bg-[#df2b2a]/30 text-white font-bold w-sm h-15 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                            <path
                                d="M147.48 285.93c-13.71 0-24.38-11.65-24.38-26.06l-.02-83.92c-2.72 1.61-4.83 3.56-7.27 5.25-3.04 2.11-6.95 1.36-9.02-1.72-1.89-2.81-1.74-7.38 1.33-9.68l77.66-58.29c8.44-6.34 19.42-6.69 27.89-.37l19.23 14.36.04-11.18c.02-6.64 4.87-11.88 11.11-11.88l21.87.02c5.95 0 10.91 5.04 10.92 11.51l.07 44.52 14.58 10.96c3.06 2.3 3.82 6.59 1.86 9.79-2.06 3.35-6.25 4.16-9.43 1.8-2.29-1.71-4.43-3.52-6.98-5.09l-.14 84.77c-.02 13.79-10.79 25.15-23.69 25.16l-105.61.06h-.02Zm116.17-137.48v-31.89h-17.54l.02 18.95 17.52 12.94ZM200 194.12c7.37-10.77 18.24-16.41 30.03-16.39h9.1c3.87-.16 6.98 3.03 6.98 7.18v10.99c-.43 22.76-18.36 39.99-39.55 38.19v37.75h46.12c6.28-.17 10.95-5.21 11.01-11.99v-94l-57.46-43.04c-3.99-2.77-8.52-2.79-12.49 0l-57.49 43.08.03 94.36c.24 6.6 4.87 11.42 11.01 11.59h46.12v-37.75c-21.51 1.83-39.62-15.97-39.56-39.07l.04-10.54c.02-3.78 3.01-6.72 6.53-6.72h9.93c11.84-.02 22.51 5.97 29.65 16.37Zm-6.75 25.87c.85-7.79-1.57-15.52-6.66-20.95s-12.44-8.02-19.5-6.98c-.62 8.27 1.8 15.61 6.89 20.94 4.96 5.2 11.75 7.69 19.27 6.99Zm39.46-28.09c-7.96-.65-14.64 2.04-19.54 7.38-4.91 5.35-7.19 12.71-6.51 20.65 7.22.85 14.49-1.67 19.56-7.18 5.05-5.48 7.51-13.28 6.48-20.85Z"
                                style={{
                                    fill: "#ffffff",
                                }}
                            />
                        </svg>
                        <p className="mt-3 mt-auto mb-auto text-white text-m md:text-m">
                            VER OFERTA GLP
                            <br></br>
                            PARA HOGARES
                        </p>
                    </button>
                    <button className="flex flex-row relative justify-center content-center mx-auto md:mx-0 bg-[#df2b2a] hover:bg-[#df2b2a]/30 text-white font-bold w-sm h-15 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                            <path
                                d="m270.83 280.55-141.82-.02c-12.69 0-22.65-10.44-22.65-22.98v-88.96c0-12.69 9.95-22.97 22.59-23l29.58-.09c.34-2.38.11-4.43.16-6.56.27-11.07 9.06-19.5 20.13-19.48l43.03.05c10.92.01 19.47 8.73 19.54 19.62.01 2.15-.14 4.03.14 6.39l29.11.03c12.81.01 23 10.16 23 23.04v88.95c0 12.55-9.93 23.01-22.81 23.01Zm-42.55-135.04c.24-2.79.09-4.36.1-6.38.02-3.81-2.88-6.67-6.75-6.66l-43.67.08c-3.12 0-5.8 2.93-6.07 5.8-.23 2.52-.11 4.75.11 7.2l56.28-.03Zm-10.23 52.44c4.26.01 6.51 4.41 5.82 8.49l45.93.15c6.06.02 10.78-4.12 10.78-10.28l-.03-27.76c0-5.48-4.33-9.91-9.96-9.91H129.42c-5.63 0-9.87 4.49-9.89 9.92l-.11 27.8c-.02 5.39 4.07 10.12 9.66 10.12h47.06c-.79-4.57 1.98-8.63 6.34-8.62l35.56.09Zm-7.28 17.33c.37-1.99.35-3-.08-4.32h-21.26c-.39 1.47-.32 2.75-.02 4.32h21.37Zm59.84 4.49h-46.63c.14 2.75-.23 4.93-1.83 6.63-1.45 1.55-3.44 2.13-5.85 2.12l-34.25-.15c-4.3-.02-6.59-4.33-5.96-8.57h-45.06c-4.18 0-7.78-.56-11.6-2.22v39.99c.01 5.55 4.31 10.01 9.99 10.01l141.14-.04c5.88 0 10.04-4.79 10.02-10.38l-.11-39.57c-3.68 1.47-6.45 2.17-9.88 2.17Z"
                                style={{
                                    fill: "#ffffff",
                                }}
                            />
                        </svg>
                        <p className="mt-3 mt-auto mb-auto text-white text-m md:text-m">
                            VER OFERTA GLP
                            <br></br>
                            PARA NEGOCIOS
                        </p>
                    </button>
                </motion.div>
            </section>
        </section>
    );
};