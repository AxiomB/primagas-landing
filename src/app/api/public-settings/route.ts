import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
  const payload = await getPayload({ config });
  
  const settings = await payload.findGlobal({
    slug: 'site-settings',
  });
  
  const { id, gtmId, googleVerificationId, cookiebotId, ...publicSettings } = settings;

  return NextResponse.json(publicSettings);
}