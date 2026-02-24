'use client'

import React from 'react';

export const HeaderComponent: React.FC = () => {
    return (
        <nav className="bg-white py-4 px-6 md:px-12 border-b border-gray-100">
            <div className="max-w-7xl mx-auto flex items-center">
                <div className="flex items-center gap-2 color-black">
                    <img className='w-3xs h-3xs' src="/assets/img/LOGO-PRIMAGAS-PRINCIPAL.svg" alt="Primagas Logo"></img>
                </div>
            </div>
        </nav>
    );
};