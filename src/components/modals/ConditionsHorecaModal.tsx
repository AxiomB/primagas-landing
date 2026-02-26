'use client'

import { X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export const ConditionsHorecaModal: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    const closeModal = () => {
        router.push(pathname, { scroll: true })
    }
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={closeModal} />

            <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200">

                <div className="bg-brand p-6 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="text-white text-center text-2xl font-bold ml-[20rem]">Condiciones de la oferta</h2>
                    <button
                        onClick={closeModal}
                        className="text-white hover:text-brand p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="bg-white flex-1 overflow-y-auto p-8 text-slate-600 leading-relaxed custom-scrollbar">
                    <div className="min-w-full overflow-x-auto">
                        <p>
                            *Oferta para nuevos clientes de GLP profesionales con domicilio en las comunidades
                            de Catalunya, Galicia, País Vasco, Cantabria y Asturias (que hayan superado el análisis
                            de riesgo de crédito, así como los demás requisitos necesarios para que los términos
                            la oferta se concreten en un acuerdo). Esta oferta sólo será válida para solicitudes
                            realizadas en 2026 e incluye: (i) instalación gratuita de un tanque aéreo de hasta
                            4.880L, con presupuesto límite de 3.000€ para su instalación, e incluye OCA,
                            legalización y puesta en marcha (los gastos que sobrepasen dicho presupuesto irán a
                            cargo del cliente); (ii) Precio fijo durante 2026 de 1,15€/kg (impuestos no incluidos),
                            siendo válido hasta el 31/12/2026.
                        </p>
                        <p>
                            Durante el mes de diciembre de cada año, se informará del nuevo precio fijo para el
                            siguiente período (aplicable de enero a diciembre) y se podrá elegir entre la tarifa
                            variable o ese nuevo precio fijo anual determinado según mercado.
                            Servicio Primaconfort: 9,95€/mes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}