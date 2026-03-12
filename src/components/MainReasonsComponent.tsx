'use client'

import React from 'react';
import { motion } from 'motion/react';

export const MainReasonComponent: React.FC<{ title: string, backgroundImage: any }> = ({ title, backgroundImage }: { title: string, backgroundImage: any }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl border-2 border-brand shadow-sm flex flex-col items-center gap-4"
        >
            <div className="w-32 h-32 rounded-xl bg-branding flex items-center justify-center" style={{
                backgroundImage: `url(${backgroundImage.url})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <p className="text-md font-semibold text-dark leading-tight">{title}</p>
        </motion.div>
    );
}