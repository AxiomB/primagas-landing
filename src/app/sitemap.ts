import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.laminarpay.com';

    const payload = await getPayload({ config: configPromise })
    const mainpage = await payload.findGlobal({
        slug: 'mainpage',
    })
    const domesticapage = await payload.findGlobal({
        slug: 'domesticapage',
    })
    const horecaPage = await payload.findGlobal({
        slug: 'horecapage'
    })

    const pages: any = [];

    pages.push({
        url: `${baseUrl}`,
        lastModified: mainpage?.updatedAt || new Date(),
        changeFrequency: "monthly" as const,
        priority: 1,
    });

    pages.push({
        url: `${baseUrl}/hogar`,
        lastModified: domesticapage?.updatedAt || new Date(),
        changeFrequency: "monthly" as const,
        priority: 1,
    });

    pages.push({
        url: `${baseUrl}/negocio`,
        lastModified: horecaPage?.updatedAt || new Date(),
        changeFrequency: "monthly" as const,
        priority: 1,
    });

    return pages;
}