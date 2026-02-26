import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl: string = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.laminarpay.com';

    const payload = await getPayload({ config: configPromise })
    const landingPage = await payload.findGlobal({
        slug: 'domesticapage',
    })
    const horecaPage = await payload.findGlobal({
        slug: 'horecapage'
    })
    const staticPages = await payload.find({
        collection: 'staticpages',
    });

    const pages: any = [];

    for (const staticpage of staticPages.docs) {
        pages.push({
            url: baseUrl + `/` + staticpage.slug,
            lastModified: staticpage?.updatedAt || new Date(),
            changeFrequency: "monthly" as const,
            alternatives: {
                languages: {
                    en: `${baseUrl}/en/` + staticpage.slug,
                    es: `${baseUrl}/es/` + staticpage.slug,
                    'x-default': `${baseUrl}/en/` + staticpage.slug,
                }
            },
            priority: 2,
        });
    }

    pages.push({
        url: `${baseUrl}`,
        lastModified: landingPage?.updatedAt || new Date(),
        changeFrequency: "monthly" as const,
        priority: 1,
    });

    pages.push({
        url: `${baseUrl}/hogar`,
        lastModified: landingPage?.updatedAt || new Date(),
        changeFrequency: "monthly" as const,
        priority: 1,
    });

    pages.push({
        url: `${baseUrl}/negocios`,
        lastModified: horecaPage?.updatedAt || new Date(),
        changeFrequency: "monthly" as const,
        priority: 1,
    });

    return pages;
}