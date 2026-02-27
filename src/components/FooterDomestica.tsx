'use client'

import React from 'react';
import Link from 'next/link';

export const FooterDomesticaComponent = () => {
  return (
    <footer className="bg-dark border-t border-white/5 pt-8 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <img className='w-xs h-xs' src="/assets/img/LOGO-PRIMAGAS-ICON.svg" alt="Primagas Logo"></img>
          </div>

          <div className="flex flex-col md:flex-row gap-6 text-center text-xs font-medium text-gray-300 uppercase tracking-widest">
            <Link
              href="https://s-sml.mtrbio.com/public/smartlink/primagas-espana"
              target='_blank'
              className="hover:text-pink transition-colors"
            >
              ESTUDIOS EFICIENCIA ENERGÉTICA
            </Link>
            <Link
              href="https://www.primagas.es/privacidad"
              target='_blank'
              className="hover:text-pink transition-colors"
            >
              Política de privacidad
            </Link>
            <Link
              href="?modal=cookies"
              className="hover:text-pink transition-colors"
            >
              Politica de Cookies
            </Link>
            <Link
              href="https://www.primagas.es/privacidad"
              target='_blank'
              className="hover:text-pink transition-colors"
            >
              Aviso Legal
            </Link>
            <Link
              href="?modal=conditionsdomestic"
              className="hover:text-pink transition-colors"
            >
              *Condiciones de la oferta
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}