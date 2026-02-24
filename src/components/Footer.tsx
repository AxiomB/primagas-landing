'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const FooterComponent = () => {
  const pathname = usePathname()

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-white/5 pt-8 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <img className='w-xs h-xs' src="/assets/img/LOGO-PRIMAGAS-ICON.svg" alt="Primagas Logo"></img>
          </div>

          <div className="flex gap-8 text-xs font-medium text-gray-400 uppercase tracking-widest">
            <Link
              href="?modal=privacy"
              target='_blank'
              className="hover:text-pink transition-colors"
            >
              Política de privacidad
            </Link>
            <Link
              href="?modal=cookies"
              target='_blank'
              className="hover:text-pink transition-colors"
            >
              Politica de Cookies
            </Link>
            <Link
              href="?modal=legal"
              target='_blank'
              className="hover:text-pink transition-colors"
            >
              Aviso Legal
            </Link>
            <Link
              href="?modal=conditions"
              target='_blank'
              className="hover:text-pink transition-colors"
            >
              Condiciones de la oferta
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}