import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const { token } = await request.json()

  if (!token) {
    return NextResponse.json({ error: 'Token required' }, { status: 400 })
  }

  // Find device token
  const { data: deviceToken } = await supabase
    .from('hub_device_tokens')
    .select('user_id')
    .eq('token', token)
    .single()

  if (!deviceToken) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  // Update last used
  await supabase
    .from('hub_device_tokens')
    .update({ last_used_at: new Date().toISOString() })
    .eq('token', token)

  // Update user login stats
  await supabase
    .from('hub_users')
    .update({ last_login_at: new Date().toISOString() })
    .eq('id', deviceToken.user_id)

  // Set session cookie
  const cookieStore = await cookies()
  cookieStore.set('ipa-hub-session', deviceToken.user_id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })

  return NextResponse.json({ success: true })
}
