import React, { Suspense } from 'react'
import '@/styles/global.css';
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FooterComponent } from '@/components/Footer';
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'
import { Metadata } from 'next'
import { ModalController } from '@/components/ModalController';

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  return {
    description: 'QUE LA ENERGÍA NUNCA FALTE EN TU HOGAR, VIVAS DONDE VIVAS.',
    title: 'Primagas | Oferta Doméstica',
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
    <html lang="en">
      <head>
        {settings.cookiebotId && (<Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={settings.cookiebotId}
          data-blockingmode="auto"
          type="text/javascript"
          strategy="beforeInteractive"
        />)}
        <link rel="icon" href="/favicon.ico" sizes="48x48"></link>
      </head>
      {settings.gtmId && <GoogleTagManager gtmId={settings.gtmId} />}
      <body className='overflow-x-hidden'>
        <main>
          {children}
        </main>
        <FooterComponent></FooterComponent>
        <Suspense fallback={null}>
          <ModalController />
        </Suspense>
      </body>
    </html>
  )
}