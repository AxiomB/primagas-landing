import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

export function middleware(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const response = NextResponse.next()

    // 1. Check if any UTM params are in the URL
    const hasUtms = UTM_PARAMS.some(param => searchParams.has(param))

    if (hasUtms) {
        const utmData: Record<string, string> = {}

        UTM_PARAMS.forEach(param => {
            const value = searchParams.get(param)
            if (value) utmData[param] = value
        })

        // 2. Store in a cookie (Expires in 30 days or session)
        // Using a stringified JSON object
        response.cookies.set('utm_session', JSON.stringify(utmData), {
            path: '/',
            maxAge: 60 * 60 * 24 * 30, // 30 days
            httpOnly: false, // Set to false so you can read it via JS on forms
        })
    }

    return response
}

// Ensure this only runs on page routes, not assets or APIs
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}