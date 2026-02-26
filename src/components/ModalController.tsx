'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import { CTAModal } from './modals/CTAModal'
import { ThankYouModal } from './modals/ThankYouModal'
import { CookiesModal } from './modals/CookiesModal'
import { ConditionsHorecaModal } from './modals/ConditionsHorecaModal'
import { ConditionsDomesticaModal } from './modals/ConditionsDomesticaModal'

const MODAL_CONTENT = {
    cookies: {
        title: 'Terms of Service',
        content: 'Our terms and conditions go here...'
    },
    conditionshoreca: {
        title: 'Conditions Horeca',
        content: 'Our terms and conditions go here...'
    },
    conditionsdomestic: {
        title: 'Conditions Domestica',
        content: 'Our terms and conditions go here...'
    },
    thankyou: {
        title: 'Gracias',
        content: 'Gracias te llamaremos pronto'
    },
    cta: {
        title: 'CTA',
        content: 'cta'
    }
}

export const ModalController = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const modalType = searchParams.get('modal') as keyof typeof MODAL_CONTENT | null

    if (!modalType || !MODAL_CONTENT[modalType]) return null

    const closeModal = () => {
        router.push(pathname, { scroll: true })
    }

    const { title, content } = MODAL_CONTENT[modalType]

    if (modalType === "cta") {
        return (
            <CTAModal></CTAModal>
        );
    }
    else if (modalType === "thankyou") {
        return (
            <ThankYouModal></ThankYouModal>
        );
    }
    else if (modalType === "cookies") {
        return (
            <CookiesModal></CookiesModal>
        );
    }
    else if (modalType === "conditionshoreca") {
        return (
            <ConditionsHorecaModal></ConditionsHorecaModal>
        );
    }
    else if (modalType === "conditionsdomestic") {
        return (
            <ConditionsDomesticaModal></ConditionsDomesticaModal>
        );
    }
    else {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <div className="absolute inset-0" onClick={closeModal} />

                <div className="relative bg-white w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200">

                    <div className="p-6 border-b border-slate-100 flex justify-between items-center ml-[20rem]">
                        <h2 className="text-dark text-center text-2xl font-bold">Política de cookies</h2>
                        <button
                            onClick={closeModal}
                            className="text-slate-500 p-2 hover:bg-slate-100 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-8 text-slate-600 leading-relaxed custom-scrollbar">
                        <div className="min-w-full overflow-x-auto">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}