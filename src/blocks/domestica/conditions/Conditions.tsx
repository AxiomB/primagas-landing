'use client'

import { Check, ContainerIcon, Headphones, PiggyBank, Wrench } from 'lucide-react';
import React from 'react';

export const ConditionsBlocksComponent: React.FC = ({
    domesticconditions,
}: any) => {

    const conditions = domesticconditions || [];

    return (
        <section className="bg-primagas-red py-20 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                    <div className="flex gap-6">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                            <PiggyBank size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3">Precio Fijo:</h3>
                            <p className="text-white/80 leading-relaxed">
                                Ahorra con un precio de 1,55 €/Kg fijo hasta el 31 de diciembre de 2026.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                            <Wrench size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3">Instalación rápida, sencilla y gratuita:</h3>
                            <p className="text-white/80 leading-relaxed">
                                Instalar el GLP de Primagas es más fácil y rápido de lo que te imaginas.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                            <ContainerIcon size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3">Comodidad y tranquilidad:</h3>
                            <ul className="text-white/80 space-y-2">
                                <li className="flex items-center gap-2"><Check size={14} /> Temperatura regulable en cada habitación.</li>
                                <li className="flex items-center gap-2"><Check size={14} /> Agua caliente al instante y sin interrupciones.</li>
                                <li className="flex items-center gap-2"><Check size={14} /> Cocinarás manteniendo el sabor y propiedades.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                            <Headphones size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3">Primaconfort:</h3>
                            <p className="text-white/80 leading-relaxed">
                                El confort y la tranquilidad de contar con el servicio de mantenimiento y además, servicio de urgencias 24h los 365 días del año.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};