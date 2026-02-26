'use client'
import { useUtms } from '@/hooks/useUtem';
import { Check, ChevronRight, Phone } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

export const CallMeHorecaComponent: React.FC<{ facebookNumber: string, googleNumber: string }> = ({ facebookNumber, googleNumber }: { facebookNumber: string, googleNumber: string }) => {

    const utms = useUtms();
    const router = useRouter();
    const pathname = usePathname();
    const [displayNumber, setDisplayNumber] = useState<string>(utms?.utm_source === 'facebook' ? facebookNumber : googleNumber);
    const [inputNumber, setInputNumber] = useState<string>("");
    const [accepted, setAccepted] = useState<boolean>(false);

    const sendNumber = async () => {
        try {
            const res = await fetch('/api/call', {
                method: 'POST',
                body: JSON.stringify({
                    channel: utms?.utm_source === 'facebook' ? facebookNumber : googleNumber,
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
                <p className="text-sm tracking-widest mb-1">Llama para informarte</p>
                <h2 className="text-3xl text-dark font-black">{displayNumber}</h2>
                <p className="text-sm">Solo para nuevos clientes</p>
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
                        className="text-dark w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                        value={inputNumber}
                        onChange={(e) => setInputNumber(e.target.value)}
                    />

                    <label className="flex items-start gap-3 cursor-pointer group">
                        <div className={`mt-1 w-5 h-5 rounded border flex items-center justify-center transition-colors ${accepted ? 'bg-brand border-brand' : 'border-gray-300 group-hover:border-red-400'}`} onClick={() => setAccepted(!accepted)}>
                            {accepted && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-xs text-gray-500 leading-tight">
                            Acepto la <a href="#" className="underline hover:text-brand">política de privacidad</a> y <a href="#" className="underline hover:text-brand">aviso legal</a>.
                        </span>
                    </label>

                    <button
                        className="w-full bg-brand hover:bg-red-700 text-white font-bold py-4 rounded-4xl flex flex-row align-items-center items-center justify-center gap-2 transition-transform active:scale-[0.98]"
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