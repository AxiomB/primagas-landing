'use client'
import { useUtms } from '@/hooks/useUtem';
import { Check, ChevronRight, Phone } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

export const CallMeHorecaComponent: React.FC<{ facebookNumber: string, googleNumber: string }> = ({ facebookNumber, googleNumber }: { facebookNumber: string, googleNumber: string }) => {

    const utms = useUtms();
    const router = useRouter();
    const pathname = usePathname();
    const [inputNumber, setInputNumber] = useState<string>("");
    const [accepted, setAccepted] = useState<boolean>(false);

    const sendNumber = async () => {
        if (!accepted || !inputNumber) return;

        try {
            const res = await fetch('/api/call', {
                method: 'POST',
                body: JSON.stringify({
                    channel: utms?.utm_source === 'meta' ? '+34' + facebookNumber : '+34' + googleNumber,
                    phone: inputNumber
                }),
                headers: { 'Content-Type': 'application/json' },
            })

            if (res.ok) {
                router.push(pathname + '?modal=thankyou', { scroll: false })
            } else {
                throw new Error()
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <section>
            <div className="bg-brand p-6 text-white text-center">
                <p className="text-md text-bold tracking-widest mb-1">Llama para informarte</p>
                <h2 className="text-4xl text-dark font-black">{utms?.utm_source == 'meta' ? facebookNumber : googleNumber}</h2>
                <p className="text-md text-bold">Solo para nuevos clientes</p>
            </div>

            <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                    <div className="bg-red-50 pt-1 pb-3 px-3 rounded-full">
                        <img className='w-14 h-12' src='/assets/horeca/icon-phone.png'></img>
                    </div>
                    <div>
                        <p className="text-lg text-dark leading-tight">O Déjanos tu número<br></br> <span className='font-bold'>y te llamamos en<br></br> unos minutos</span></p>
                    </div>
                </div>

                <div className="space-y-4">
                    <input
                        type="tel"
                        placeholder="Introduce tu número*"
                        className="text-dark w-full px-5 py-4 text-lg text-center justify-center border border-dark rounded-4xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all shadow-sm"
                        value={inputNumber}
                        onChange={(e) => setInputNumber(e.target.value)}
                    />

                    <label className="flex items-start gap-3 cursor-pointer group">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${accepted ? 'bg-brand border-brand' : 'border-gray-300 group-hover:border-red-400'}`} onClick={() => setAccepted(!accepted)}>
                            {accepted && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-xs text-gray-500 leading-tight">
                            Acepto la <a href="https://www.primagas.es/privacidad" className="underline hover:text-brand">política de privacidad</a> y <a href="https://www.primagas.es/privacidad" className="underline hover:text-brand">aviso legal</a>.
                        </span>
                    </label>

                    <button
                        className={`w-full font-bold py-5 rounded-full flex flex-row items-center justify-center gap-2 transition-all active:scale-[0.98] ${accepted && inputNumber
                            ? 'bg-brand hover:bg-red-700 text-white shadow-lg'
                            : 'bg-brand text-white cursor-not-allowed'
                            }`}
                        onClick={sendNumber}
                    >
                        <span className='text-lg'>Llamadme</span>
                        <ChevronRight className="w-6 h-6 pt-1" />
                    </button>
                </div>
            </div>
        </section >
    );
}