'use client'

import { Check, ContainerIcon, Headphones, PiggyBank, Wrench } from 'lucide-react';
import React from 'react';

export const ConditionsBlocksComponent: React.FC = ({
    domesticconditions,
}: any) => {

    const conditions = domesticconditions || [];

    return (
        <section className="bg-brand py-20 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 w-full">
                    {/* Card 1 */}
                    <div className="bg-white flex flex-col md:flex-row items-center w-full p-8 gap-6 rounded-xl shadow-sm border border-gray-50">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                            <img src="/assets/domestica/destacado-1.png" alt='piggybank' className="w-14 h-14 object-contain" />
                        </div>
                        <div className="flex-1">
                            <p className="text-dark text-lg leading-relaxed">
                                <span className="font-bold text-brand text-lg">Precio Fijo:{" "}</span>
                                Ahorra con un precio de 1,55 €/Kg fijo hasta el 31 de diciembre de 2026.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white flex flex-col md:flex-row items-start w-full p-8 gap-6 rounded-xl shadow-sm border border-gray-50">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-50 mt-1">
                            <img src="/assets/domestica/destacado-2.png" alt='wrench' className="w-14 h-14 object-contain" />
                        </div>
                        <div className="flex-1">
                            <p className="text-dark text-lg leading-relaxed">
                                <span className="text-brand font-bold block text-lg">Instalación rápida, sencilla y gratuita:</span>
                                Instalar el GLP de Primagas es más fácil y rápido de lo que te imaginas.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white flex flex-col md:flex-row items-center w-full p-8 gap-6 rounded-xl shadow-sm border border-gray-50">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-50 mt-1">
                            <img src="/assets/domestica/destacado-3.png" alt='container' className="w-14 h-14 object-contain" />
                        </div>
                        <div className="text-dark flex-1">
                            <h3 className="text-brand font-bold mb-2 text-lg">Comodidad y tranquilidad:</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2"><span className="text-brand">-</span> <span className='text-lg'>Temperatura regulable en cada habitación.</span></li>
                                <li className="flex items-start gap-2"><span className="text-brand">-</span> <span className='text-lg'>Agua caliente al instante y sin interrupciones.</span></li>
                                <li className="flex items-start gap-2"><span className="text-brand">-</span> <span className='text-lg'>Cocinarás manteniendo el sabor y propiedades.</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white flex flex-col md:flex-row items-center w-full p-8 gap-6 rounded-xl shadow-sm border border-gray-50">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-50 mt-1">
                            <img src="/assets/domestica/destacado-4.png" alt='help' className="w-14 h-14 object-contain" />
                        </div>
                        <div className="flex-1">
                            <p className="text-dark text-lg leading-relaxed">
                                <span className="text-brand font-bold text-lg">Primaconfort:{" "}</span>
                                El confort y la tranquilidad de contar con el servicio de mantenimiento y además, servicio de urgencias 24h los 365 días del año.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};