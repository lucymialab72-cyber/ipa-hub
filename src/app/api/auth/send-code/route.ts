import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const { phone } = await request.json()

  if (!phone) {
    return NextResponse.json({ error: 'Phone number required' }, { status: 400 })
  }

  const digits = phone.replace(/\D/g, '')

  // Find user by phone
  const { data: user } = await supabase
    .from('hub_users')
    .select('id, name')
    .eq('phone', digits)
    .single()

  if (!user) {
    return NextResponse.json({ error: 'No account found with this phone number. Create a free account first.' }, { status: 404 })
  }

  // Generate 6-digit code
  const isTestPhone = digits === '4440000000'
  const code = isTestPhone ? '123456' : String(Math.floor(100000 + Math.random() * 900000))

  // Store code in DB (expires in 5 minutes)
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString()
  await supabase.from('hub_otp_codes').insert({
    phone: digits,
    code,
    user_id: user.id,
    expires_at: expiresAt,
  })

  // Send via Twilio
  const hasTwilio = !!process.env.TWILIO_ACCOUNT_SID
  if (hasTwilio && !isTestPhone) {
    try {
      const accountSid = process.env.TWILIO_ACCOUNT_SID!
      const authToken = process.env.TWILIO_AUTH_TOKEN!
      const fromNumber = process.env.TWILIO_PHONE_NUMBER!
      const toNumber = `+1${digits}`

      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`
      const auth = Buffer.from(`${accountSid}:${authToken}`).toString('base64')

      const body = new URLSearchParams({
        To: toNumber,
        From: fromNumber,
        Body: `Your IPA Hub login code is: ${code}\n\nThis code expires in 5 minutes. Do not share it with anyone.`,
      })

      const twilioRes = await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      })

      if (!twilioRes.ok) {
        const errData = await twilioRes.json()
        console.error('[AUTH] Twilio error:', errData)
        return NextResponse.json({ error: 'Failed to send verification code. Please try again.' }, { status: 500 })
      }
    } catch (err) {
      console.error('[AUTH] Twilio send failed:', err)
      return NextResponse.json({ error: 'Failed to send verification code. Please try again.' }, { status: 500 })
    }
  } else {
    console.log(`[AUTH] Code for ${digits}: ${code}`)
  }

  return NextResponse.json({
    success: true,
    message: isTestPhone ? 'Demo mode: use code 123456' : 'Verification code sent to your phone',
    ...(isTestPhone ? { devCode: '123456' } : {}),
  })
}
