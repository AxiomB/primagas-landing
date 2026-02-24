'use client'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { X } from 'lucide-react' // or any icon library

const MODAL_CONTENT = {
    privacy: {
        title: 'Privacy Policy',
        content: 'Our privacy policy details go here...'
    },
    terms: {
        title: 'Terms of Service',
        content: 'Our terms and conditions go here...'
    }
}

export const ModalController = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    // 1. Get the value of 'modal' from the URL
    const modalType = searchParams.get('modal') as keyof typeof MODAL_CONTENT | null

    if (!modalType || !MODAL_CONTENT[modalType]) return null

    // 2. Function to close the modal by removing the param
    const closeModal = () => {
        router.push(pathname, { scroll: false })
    }

    const { title, content } = MODAL_CONTENT[modalType]

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={closeModal} />

            <div className="relative bg-white w-full max-w-lg p-8 rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full"
                >
                    <X size={20} />
                </button>

                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <div className="text-slate-600 leading-relaxed">
                    {content}
                </div>
            </div>
        </div>
    )
}