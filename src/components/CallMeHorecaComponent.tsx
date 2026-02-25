'use client'
import { Check, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

export const CallMeHorecaComponent: React.FC<{ number: string }> = ({ number }: { number: string }) => {

    const [inputNumber, setInputNumber] = useState<string>("");
    const [accepted, setAccepted] = useState<boolean>(false);

    const sendNumber = () => {

    }

    return (
        <section>
            <div className="bg-red-600 p-6 text-white text-center">
                <p className="text-sm uppercase tracking-widest mb-1">Llama para informarte</p>
                <h2 className="text-4xl font-black mb-1">{number}</h2>
                <p className="text-xs opacity-80 italic">Solo para nuevos clientes</p>
            </div>

            <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                    <div className="bg-red-50 p-3 rounded-full">
                        <img className='w-6 h-6' src='/assets/horeca/icon-phone.png'></img>
                    </div>
                    <div>
                        <p className="text-lg text-dark leading-tight">O déjanos tu número <span className='font-bold'>y te llamamos en unos minutos</span></p>
                    </div>
                </div>

                <div className="space-y-4">
                    <input
                        type="tel"
                        placeholder="Introduce tu número*"
                        className="text-dark w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                        value={inputNumber}
                        onChange={(e) => setInputNumber(e.target.value)}
                    />

                    <label className="flex items-start gap-3 cursor-pointer group">
                        <div className={`mt-1 w-5 h-5 rounded border flex items-center justify-center transition-colors ${accepted ? 'bg-red-600 border-red-600' : 'border-gray-300 group-hover:border-red-400'}`} onClick={() => setAccepted(!accepted)}>
                            {accepted && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-xs text-gray-500 leading-tight">
                            Acepto la <a href="#" className="underline hover:text-red-600">política de privacidad</a> y <a href="#" className="underline hover:text-red-600">aviso legal</a>.
                        </span>
                    </label>

                    <button
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                        onClick={sendNumber}
                    >
                        Llamadme
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}