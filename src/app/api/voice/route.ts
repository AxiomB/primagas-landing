import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'

export async function POST() {
    const payload = await getPayload({ config });

    return NextResponse.json();
}