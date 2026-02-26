import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { JsxConverters } from '@/utils/jsxConverter'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
        collection: 'staticpages',
        where: { slug: { equals: slug } },
        limit: 1,
    })

    const page = result.docs[0]
    if (!page) return notFound()

    return (
        <div className="relative min-h-screen pt-48 pb-20 overflow-hidden bg-black-light">
            <div className="absolute inset-0 z-0 pointer-events-none">
                {page.backgroundImage && (
                    <div
                        className="absolute inset-0 opacity-40"
                        style={{
                            backgroundImage: `url(${page.backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black-light via-transparent to-black" />
                <div className="absolute inset-0 bg-black-light/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-bg-black-light via-transparent to-black opacity-80" />
            </div>

            <div className="max-w-4xl mx-auto px-8 relative z-10">
                <h1 className="text-4xl md:text-6xl text-white mb-20 tracking-tight">
                    {page.title}
                </h1>

                <div className="max-w-none">
                    <RichText
                        data={page.content as any}
                        converters={JsxConverters}
                    />
                </div>
            </div>
        </div>
    )
}