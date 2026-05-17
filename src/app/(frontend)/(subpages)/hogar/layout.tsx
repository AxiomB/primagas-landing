import React, { Suspense } from 'react'
import '@/styles/global.css';
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Metadata } from 'next'
import { ModalController } from '@/components/ModalController';
import { HeaderComponent } from '@/components/Header';
import { FooterDomesticaComponent } from '@/components/FooterDomestica';

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  return {
    description: 'Lleva el confort a tu vivienda sin importar dónde estés. Instalación gratuita* y precio fijo* garantizado. La energía eficiente donde otros no llegan.',
    title: 'Ofertas Primagas Hogar | Gas GPL donde no llega la red',
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
      <HeaderComponent></HeaderComponent>
      <main className="w-full">
        {children}
      </main>
      <FooterDomesticaComponent></FooterDomesticaComponent>
      <Suspense fallback={null}>
        <ModalController />
      </Suspense>
    </>
  )
}