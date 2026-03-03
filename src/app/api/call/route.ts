import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'
import { createHmac } from 'crypto';

const clearWhitespaces = (text: string) => {
    return text.replaceAll(' ', '');
}

const generateSignature = (secret: any, data: any) => {
    return createHmac('sha256', secret).update(data).digest('hex');
}

export async function POST(req: Request) {
    const payload = await getPayload({ config });
    const { channel, phone } = await req.json();

    if (!channel || !phone) return NextResponse.json({ error: 'Channel and phone are required' }, { status: 400 });

    const cleanPhone = '+34' + clearWhitespaces(phone);
    const env: string = process.env.NEXT_ENVIRONMENT ? process.env.NEXT_ENVIRONMENT : "test";
    const endpoint: string = process.env.VOICEBENDPOINT ? process.env.VOICEBENDPOINT : "";

    if (env === "test") {
        return NextResponse.json({ message: "ok" });
    }
    else {
        try {

            let apiKey: string = "";
            let signature: string = "";

            const body = {
                phone: cleanPhone,
            };
            const textBody = JSON.stringify(body);

            if (channel === "meta") {
                apiKey = process.env.FACEBOOK_OUT_API_KEY ? process.env.FACEBOOK_OUT_API_KEY : "";
                signature = process.env.FACEBOOK_OUT_API_SECRET ? generateSignature(process.env.FACEBOOK_OUT_API_SECRET, textBody) : "";
            }
            else {
                apiKey = process.env.GOOGLE_OUT_API_KEY ? process.env.GOOGLE_OUT_API_KEY : "";
                signature = process.env.GOOGLE_OUT_API_SECRET ? generateSignature(process.env.GOOGLE_OUT_API_SECRET, textBody) : "";
            }

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'api-key': apiKey,
                    'signature': signature,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: cleanPhone,
                }),
            });

            await payload.create({
                collection: 'voicebcalls',
                data: { channel, phone: cleanPhone, result: await response.text() },
            });

            return NextResponse.json({ message: response.json() });
        }
        catch (error) {
            await payload.create({
                collection: 'voicebcalls',
                data: { channel, phone: cleanPhone, result: error as string },
            });
            return NextResponse.json({ message: error });
        }
    }
}