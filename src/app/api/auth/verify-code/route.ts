import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabase } from '@/lib/supabase'
import { randomUUID } from 'crypto'

export async function POST(request: Request) {
  const { phone, code, deviceFingerprint } = await request.json()

  if (!phone || !code) {
    return NextResponse.json({ error: 'Phone and code required' }, { status: 400 })
  }

  const digits = phone.replace(/\D/g, '')

  // Find valid, unused code
  const { data: otpRecord } = await supabase
    .from('hub_otp_codes')
    .select('id, user_id, expires_at')
    .eq('phone', digits)
    .eq('code', code)
    .eq('used', false)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (!otpRecord) {
    return NextResponse.json({ error: 'Invalid code. Please try again.' }, { status: 401 })
  }

  // Check expiration
  if (new Date(otpRecord.expires_at) < new Date()) {
    return NextResponse.json({ error: 'Code expired. Please request a new one.' }, { status: 401 })
  }

  // Mark code as used
  await supabase
    .from('hub_otp_codes')
    .update({ used: true })
    .eq('id', otpRecord.id)

  // Update user login stats
  await supabase
    .from('hub_users')
    .update({ last_login_at: new Date().toISOString() })
    .eq('id', otpRecord.user_id)

  // Set session cookie
  const cookieStore = await cookies()
  cookieStore.set('ipa-hub-session', otpRecord.user_id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
  })

  // Create device token for auto-login
  const deviceToken = randomUUID()
  await supabase.from('hub_device_tokens').insert({
    user_id: otpRecord.user_id,
    token: deviceToken,
    fingerprint: deviceFingerprint || null,
  })

  return NextResponse.json({
    success: true,
    deviceToken,
  })
}
