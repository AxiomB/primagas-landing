'use client'

import React from 'react';
import { motion } from 'motion/react';

export const HorecaBenefitsComponent: React.FC<{ title: string, backgroundImage: any, content: string, isRed: boolean }> = ({ title, backgroundImage, content, isRed }: { title: string, backgroundImage: any, content: string, isRed: boolean }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full"
        >
            <div className="h-48 overflow-hidden relative">
                <img src={backgroundImage.url} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className={`p-8 flex-grow ${isRed ? 'bg-brand text-white' : 'bg-white text-gray-800'}`}>
                <h3 className={`text-xl font-black mb-4 leading-tight ${!isRed ? 'text-brand' : ''}`}>
                    {title}
                </h3>
                <p className={`text-sm leading-relaxed ${isRed ? 'opacity-90' : 'text-gray-600'}`}>
                    {content}
                </p>
            </div>
        </motion.div>
    );
}