'use client'

import { useUtms } from '@/hooks/useUtem';
import { Check, ChevronRight, Phone } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { returnUtmsToString } from './utils/utmsToString';
import { setPhoneInWindowForAnalytics } from '../utils/setPhoneInWindow';
import Script from 'next/script';

export const CallMeHorecaComponent: React.FC<{ facebookNumber: string, googleNumber: string, defaultNumber: string }> = ({ facebookNumber, googleNumber, defaultNumber }: { facebookNumber: string, googleNumber: string, defaultNumber: string }) => {

    const utms = useUtms();
    const router = useRouter();
    const pathname = usePathname();
    const [inputNumber, setInputNumber] = useState<string>("");
    const [accepted, setAccepted] = useState<boolean>(false);
    const [showTooltip, setShowTooltip] = useState<boolean>(false);
    const [calling, setCalling] = useState<boolean>(false);

    useEffect(() => {
        if (showTooltip) {
            const timer = setTimeout(() => setShowTooltip(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showTooltip]);

    const sendNumber = async () => {
        if (!accepted) {
            setShowTooltip(true);
            return;
        }

        if (!inputNumber) return;

        if (calling) return;

        setCalling(true);

        setPhoneInWindowForAnalytics(inputNumber);

        try {
            const res = await fetch('/api/call', {
                method: 'POST',
                body: JSON.stringify({
                    channel: utms?.utm_source == 'google' ? 'google' : utms?.utm_source == 'meta' ? 'meta' : 'default',
                    phone: inputNumber
                }),
                headers: { 'Content-Type': 'application/json' },
            })

            if (res.ok) {
                const utmString = returnUtmsToString(utms);
                if (utmString.length > 0) {
                    router.push(pathname + '?modal=thankyouhoreca&' + utmString, { scroll: false });
                }
                else {
                    router.push(pathname + '?modal=thankyouhoreca', { scroll: false });
                }
                router.push(pathname + '?modal=thankyouhoreca', { scroll: false })
            } else {
                throw new Error()
            }
            setCalling(false);
        }
        catch (error) {
            setCalling(false);
            console.error(error);
        }
    }

    return (
        <section>
            <div className="bg-brand p-6 text-white text-center">
                <p className="text-md text-bold tracking-widest mb-1">Llama para informarte</p>
                <h2 className="text-4xl text-dark font-black">{utms?.utm_source == 'google' ? googleNumber : utms?.utm_source == 'meta' ? facebookNumber : defaultNumber}</h2>
                <p className="text-md text-bold">Solo para nuevos clientes</p>
            </div>

            <div className="p-4">
                <div className="flex items-start gap-4">
                    <div className="bg-red-50 pt-1 pb-3 px-4 mx-2 rounded-full">
                        <img className='w-24 h-12' src='/assets/horeca/icon-phone.png'></img>
                    </div>
                    <div>
                        <p className="text-lg text-dark leading-tight">Déjanos tus datos y un agente contactará contigo en el menor tiempo posible</p>
                    </div>
                </div>

                <div className="space-y-0">
                    <Script src="https://js.hsforms.net/forms/embed/5603597.js" defer></Script>
                    <div className="hs-form-frame" data-region="na1" data-form-id="28264d9e-2895-4820-8511-5f201aa66247"
                        data-portal-id="5603597"></div>
                </div>
            </div>
        </section >
    );
}