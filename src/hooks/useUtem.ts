'use client'

import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export interface UtmData {
    utm_source?: string
    utm_medium?: string
    utm_campaign?: string
    utm_term?: string
    utm_content?: string
}

export const useUtms = () => {
    const [utms, setUtms] = useState<UtmData | null>(null)

    useEffect(() => {
        const cookieValue = Cookies.get('utm_session')

        if (cookieValue) {
            try {
                const parsed = JSON.parse(cookieValue) as UtmData
                setUtms(parsed)
            } catch (error) {
                console.error('Error parsing UTM cookie:', error)
            }
        }
    }, [])

    return utms
}