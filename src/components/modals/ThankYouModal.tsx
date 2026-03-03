'use client'

import { X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export const ThankYouModal: React.FC<{ thankyouId: string }> = ({ thankyouId }: { thankyouId: string }) => {
    const router = useRouter();
    const pathname = usePathname();

    const closeModal = () => {
        router.push(pathname, { scroll: true })
    }
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={closeModal} />
            <div className="relative bg-white w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="p-6 flex items-center justify-end">
                    <button
                        onClick={closeModal}
                        className="text-brand hover:bg-brand/10 p-2 rounded-full transition-colors"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="px-8 pb-24 pt-4 flex flex-col items-center justify-center text-center">
                    <div className="space-y-6">
                        <h2 id={thankyouId} className="text-brand text-6xl font-black tracking-tighter">Gracias.</h2>
                        <div className="space-y-2">
                            <h3 className="text-dark text-2xl font-bold">Hemos recibido correctamente tus datos.</h3>
                            <p className="text-slate-500 text-lg">
                                Nos pondremos en contacto contigo <br className="hidden md:block" />
                                lo antes posible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}