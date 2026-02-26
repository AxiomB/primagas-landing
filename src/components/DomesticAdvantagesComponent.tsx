'use client'

import React from 'react';
import { motion } from 'motion/react';

export const DomesticAdvantagesComponent: React.FC<{ title: string, backgroundImage: any, content: string }> = ({ title, backgroundImage, content }: { title: string, backgroundImage: any, content: string }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl border-2 border-brand shadow-sm flex flex-col items-center gap-4"
        >
            <div className="w-24 h-24 rounded-xl bg-branding flex items-center justify-center" style={{
                backgroundImage: `url(${backgroundImage.url})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <p className="text-lg text-gray-500 leading-relaxed"><span className="font-bold text-lg mb-4 text-dark leading-tight">{title} </span>{content}</p>
        </motion.div>
    );
}