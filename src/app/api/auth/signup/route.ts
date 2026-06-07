import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, phone, state, agentType } = body

  if (!name || !phone) {
    return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
  }

  // Normalize phone
  const digits = phone.replace(/\D/g, '')
  if (digits.length !== 10) {
    return NextResponse.json({ error: 'Please enter a valid 10-digit phone number' }, { status: 400 })
  }

  // Check if user already exists
  const { data: existing } = await supabase
    .from('hub_users')
    .select('id')
    .eq('phone', digits)
    .single()

  if (existing) {
    return NextResponse.json({ error: 'This phone number is already registered. Please sign in instead.' }, { status: 409 })
  }

  // Create user
  const { data: user, error } = await supabase
    .from('hub_users')
    .insert({
      name,
      email: email || null,
      phone: digits,
      state: state || null,
      agent_type: agentType || 'exploring',
    })
    .select('id')
    .single()

  if (error) {
    console.error('[SIGNUP]', error)
    return NextResponse.json({ error: 'Failed to create account. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ success: true, userId: user.id })
}
