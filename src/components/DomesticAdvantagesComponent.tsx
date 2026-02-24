'use client'

import React from 'react';
import { motion } from 'motion/react';

export const DomesticAdvantagesComponent: React.FC<{ title: string, backgroundImage: any, content: string }> = ({ title, backgroundImage, content }: { title: string, backgroundImage: any, content: string }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
        >
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6">
                <img src={backgroundImage.url} alt='image' />
            </div>
            <h3 className="font-bold text-lg mb-4 text-dark leading-tight">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{content}</p>
        </motion.div>
    );
}