export interface UserProfile {
  id: string
  name: string
  email: string
  phone: string
  state: string
  agentType: string
  createdAt: string
}

// Client-side: fetch user from API
export async function fetchUser(): Promise<UserProfile | null> {
  try {
    const res = await fetch('/api/auth/me')
    if (!res.ok) return null
    const data = await res.json()
    return {
      id: data.user.id,
      name: data.user.name,
      email: data.user.email || '',
      phone: data.user.phone,
      state: data.user.state || '',
      agentType: data.user.agent_type || 'exploring',
      createdAt: data.user.created_at,
    }
  } catch {
    return null
  }
}

export const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
  'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming'
]

export const AGENT_TYPES = [
  { value: 'new', label: 'New Agent — Just Got Licensed' },
  { value: 'captive', label: 'Captive Agent — Thinking About Going Independent' },
  { value: 'independent', label: 'Independent Agent — Already Running My Agency' },
  { value: 'owner', label: 'Agency Owner — Looking to Grow or Optimize' },
  { value: 'exploring', label: 'Exploring Options — Not Sure Yet' },
]
