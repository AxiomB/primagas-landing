import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

export function middleware(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const response = NextResponse.next()

    const hasUtms = UTM_PARAMS.some(param => searchParams.has(param))

    if (hasUtms) {
        const utmData: Record<string, string> = {}

        UTM_PARAMS.forEach(param => {
            const value = searchParams.get(param)
            if (value) utmData[param] = value
        })

        response.cookies.set('utm_session', JSON.stringify(utmData), {
            path: '/',
            httpOnly: false,
        })
    }

    return response
}

export const config = {
    matcher: [
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
        '/',
    ],
}