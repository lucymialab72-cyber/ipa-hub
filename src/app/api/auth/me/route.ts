import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('ipa-hub-session')?.value

  if (!sessionId) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const { data: user } = await supabase
    .from('hub_users')
    .select('id, name, email, phone, state, agent_type, created_at')
    .eq('id', sessionId)
    .single()

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 401 })
  }

  return NextResponse.json({ user })
}
