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
            maxAge: 60 * 60 * 24 * 30,
            httpOnly: false,
        })
    }

    return response
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}