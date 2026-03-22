import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    )

    if (!isValidSignature) {
      const message = 'Invalid signature'
      console.warn(message)
      return new Response(message, { status: 401 })
    }

    if (!body?._type) {
      const message = 'Bad Request'
      return new Response(message, { status: 400 })
    }

    console.log(`Revalidating tag: ${body._type}`)
    
    // Type bazlı revalidate (Örn: 'portfolio', 'homePage', 'siteSettings')
    revalidateTag(body._type)

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    })
  } catch (err: any) {
    console.error(err)
    return new Response(err.message, { status: 500 })
  }
}
