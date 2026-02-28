'use client'

import { useUtms } from '@/hooks/useUtem';
import { Check, ChevronRight, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface InterestedModalProps {
    closeModal: () => void;
}

export const InterestedModal: React.FC<InterestedModalProps> = ({ closeModal }) => {
    const router = useRouter();
    const pathname = usePathname();
    const utms = useUtms();
    const [inputNumber, setInputNumber] = useState<string>("");
    const [accepted, setAccepted] = useState<boolean>(false);
    const [sent, setSent] = useState<boolean>(false);

    const sendNumber = async () => {
        if (!accepted || !inputNumber) return;

        try {
            const res = await fetch('/api/call', {
                method: 'POST',
                body: JSON.stringify({
                    channel: utms?.utm_source === 'meta' ? '+34930349169' : '+34930340131',
                    phone: inputNumber
                }),
                headers: { 'Content-Type': 'application/json' },
            })

            if (res.ok) {
                setSent(true);
            } else {
                throw new Error('Failed to send number')
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={closeModal} />
            {!sent ?
                <div className="relative bg-white w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
                    <div className="bg-brand p-6 border-b border-slate-100 flex items-center justify-between">
                        <div className="w-10 md:block hidden" />
                        <h2 className="text-white text-center text-xl md:text-2xl font-bold flex-1">
                            ¡Date prisa, solo para las 50 primeras instalaciones!
                        </h2>
                        <button
                            onClick={closeModal}
                            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-8 text-slate-600 leading-relaxed rounded-2xl custom-scrollbar">
                        <div className="max-w-xl mx-auto py-4">
                            <div className="flex content-center justify-center items-center gap-6 mb-8">
                                <div>
                                    <p className="text-xl text-dark text-center leading-tight">
                                        Déjanos tu número <br></br> <span className='font-bold'>y te llamamos en unos minutos</span>
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <input
                                    type="tel"
                                    placeholder="Introduce tu número*"
                                    className="text-dark w-full px-5 py-4 text-lg text-center justify-center border border-dark rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all shadow-sm"
                                    value={inputNumber}
                                    onChange={(e) => setInputNumber(e.target.value)}
                                />

                                <label className="flex items-start content-center justify-center gap-3 cursor-pointer group">
                                    <button
                                        type="button"
                                        className={`w-6 h-6 shrink-0 rounded border flex items-center justify-center transition-colors ${accepted ? 'bg-brand border-brand' : 'border-gray-300 group-hover:border-red-400'}`}
                                        onClick={() => setAccepted(!accepted)}
                                    >
                                        {accepted && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                                    </button>
                                    <span className="text-sm text-gray-500 leading-snug">
                                        Acepto la <a href="?modal=privacy" className="underline font-medium hover:text-brand">política de privacidad</a> y <a href="?modal=legal" className="underline font-medium hover:text-brand">aviso legal</a>.
                                    </span>
                                </label>

                                <button
                                    disabled={!accepted || !inputNumber}
                                    className={`w-1/2 mx-auto content-center justify-center font-bold py-5 rounded-full flex flex-row items-center justify-center gap-2 transition-all active:scale-[0.98] ${accepted && inputNumber
                                        ? 'bg-brand hover:bg-brand text-white shadow-lg'
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        }`}
                                    onClick={sendNumber}
                                >
                                    <span className='text-xl'>Llamadme</span>
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl animate-in fade-in zoom-in duration-200">
                    <div className="relative bg-white w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200">
                        <div className="p-6 flex items-center justify-between">
                            <div className="w-10 md:block hidden" />
                            <button
                                onClick={closeModal}
                                className="text-brand hover:bg-brand/20 p-2 rounded-full transition-colors"
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="space-y-6 mx-auto my-24">
                            <h2 className='text-brand text-6xl font-bold text-center'>Gracias.</h2>
                            <h3 className='text-dark text-2xl font-bold text-center'>Hemos recibido correctamente tus datos.</h3>
                            <p className='text-dark text-lg text-center'>Nos pondremos en contacto contigo <br></br>lo antes posible</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}