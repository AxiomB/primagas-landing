import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { RenderHoreca } from '@/blocks/renders/RenderHoreca'

export const dynamic = 'force-dynamic'

export default async function Page() {

  const payload = await getPayload({ config: configPromise })

  const pageData = await payload.findGlobal({
    slug: 'horecapage'
  })

  if (!pageData) return notFound()

  return (
    <RenderHoreca layout={pageData.layout || []} />
  )
}