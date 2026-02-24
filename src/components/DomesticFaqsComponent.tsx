'use client'

import { JsxConverters } from '@/utils/jsxConverter';
import { RichText } from '@payloadcms/richtext-lexical/react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const DomesticFaqsComponent: React.FC<{ question: string, content: any }> = ({ question, content }: { question: string, content: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primagas-red text-white flex items-center justify-center font-bold text-lg">?</div>
                    <span className="font-semibold text-gray-800">{question}</span>
                </div>
                {isOpen ? <ChevronUp className="text-primagas-red" /> : <ChevronDown className="text-gray-400" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 bg-gray-50 text-gray-600 leading-relaxed border-t border-gray-200">
                            <RichText
                                data={content as any}
                                converters={JsxConverters}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}