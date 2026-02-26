import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { RenderDomestica } from '@/blocks/renders/RenderDomestica'


export const dynamic = 'force-dynamic'

export default async function Page() {

  const payload = await getPayload({ config: configPromise })

  const pageData = await payload.findGlobal({
    slug: 'domesticapage'
  })

  if (!pageData) return notFound()

  return (
    <RenderDomestica layout={pageData.layout || []} />
  )
}