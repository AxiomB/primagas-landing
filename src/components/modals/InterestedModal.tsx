'use client'

import { useUtms } from '@/hooks/useUtem';
import { Check, ChevronRight, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { returnUtmsToString } from '../utils/utmsToString';
import { setPhoneInWindowForAnalytics } from '@/utils/setPhoneInWindow';
import Script from 'next/script';

interface InterestedModalProps {
    thankyouId: string
    closeModal: () => void;
}

export const InterestedModal: React.FC<InterestedModalProps> = ({ thankyouId, closeModal }) => {
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

    useEffect(() => {
        function handleHubspotSuccess(event: Event) {
            const customEvent = event as CustomEvent;
            const { formId, instanceId } = customEvent.detail ?? {};

            window.dataLayer = window.dataLayer || [];
            (window.dataLayer as unknown[]).push({
                event: 'form_gracias_hogar_v2',
                form_id: formId,
                instance_id: instanceId,
                utm_source: utms?.utm_source ?? null,
            });
            (window.dataLayer as unknown[]).push({
                event: 'btn_llamadme_negocio_v2',
                form_id: formId,
                instance_id: instanceId,
                utm_source: utms?.utm_source ?? null,
            });
        }

        window.addEventListener('hs-form-event:on-submission:success', handleHubspotSuccess);
        return () => window.removeEventListener('hs-form-event:on-submission:success', handleHubspotSuccess);
    }, [utms]);

    const sendNumber = async () => {
        if (!accepted) {
            setShowTooltip(true);
            return;
        }

        if (!inputNumber) return;

        if (calling) return;

        setCalling(true);

        setPhoneInWindowForAnalytics(inputNumber)

        try {
            const res = await fetch('/api/call', {
                method: 'POST',
                body: JSON.stringify({
                    channel: utms?.utm_source == 'google' ? 'google' : 'meta',
                    phone: inputNumber
                }),
                headers: { 'Content-Type': 'application/json' },
            })

            if (res.ok) {
                const utmString = returnUtmsToString(utms);
                if (utmString.length > 0) {
                    router.push(pathname + '?modal=' + thankyouId + '&' + utmString, { scroll: false });
                }
                else {
                    router.push(pathname + '?modal=' + thankyouId, { scroll: false });
                }
                closeModal();
            } else {
                throw new Error('Failed to send number')
            }
            setCalling(false);
        }
        catch (error) {
            setCalling(false);
            console.error(error);
        }
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={closeModal} />
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
                    <Script src="https://js.hsforms.net/forms/embed/5603597.js" defer></Script>
                    <div className="hs-form-frame" data-region="na1" data-form-id="28264d9e-2895-4820-8511-5f201aa66247"
                        data-portal-id="5603597"></div>
                </div>
            </div>
        </div>
    );
}