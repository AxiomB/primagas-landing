import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { RenderMain } from '@/blocks/renders/RenderMain'

export const dynamic = 'force-dynamic'

export default async function Page() {

  const payload = await getPayload({ config: configPromise })

  const pageData = await payload.findGlobal({
    slug: 'mainpage'
  })

  if (!pageData) return notFound()

  return (
    <RenderMain layout={pageData.layout || []} />
  )
}