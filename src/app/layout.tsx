import React, { Suspense } from 'react'
import '@/styles/global.css';
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { GoogleTagManager } from '@next/third-parties/google'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config: configPromise })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  return {
    description: 'Solución ideal para calefacción y agua caliente donde no llega el gas natural. Descubre las mejores ofertas de Primagas: Instalación gratuita* y precio fijo*.',
    title: 'Ofertas Primagas | Gas y energía para empresas y hogares',
    verification: {
      google: settings.googleVerificationId
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
        <meta name="facebook-domain-verification" content="zsuievznxnus9u8sdp7xhm7zb00xrh" />
        <link rel="icon" href="/favicon.ico" sizes="48x48"></link>
      </head>
      {settings.gtmId && <GoogleTagManager gtmId={settings.gtmId} />}
      <body className='overflow-x-hidden'>
        {children}
      </body>
    </html>
  )
}