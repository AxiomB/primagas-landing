import React, { Suspense } from 'react'
import '@/styles/global.css';
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FooterHorecaComponent } from '@/components/FooterHoreca';
import { Metadata } from 'next'
import { HeaderComponent } from '@/components/Header';
import { ModalController } from '@/components/ModalController';

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  return {
    description: 'Optimiza tu consumo de gas con Primagas. Instalación gratuita* y precio fijo* garantizado. La energía más eficiente para alojamientos, hostelería e industrial.',
    title: 'Ofertas Primagas Negocio | Soluciones de gas para empresas',
    verification: {
      google: settings.googleVerificationId,
    },
  }
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  return (
    <>
      <>
        <HeaderComponent></HeaderComponent>
        <main className="w-full">
          {children}
        </main>
        <FooterHorecaComponent></FooterHorecaComponent>
        <Suspense fallback={null}>
          <ModalController />
        </Suspense>
      </>
    </>
  )
}