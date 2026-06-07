'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { US_STATES, AGENT_TYPES } from '@/lib/auth'

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '')
  const cleaned = digits.length > 10 && digits.startsWith('1') ? digits.slice(1) : digits
  const limited = cleaned.slice(0, 10)
  if (limited.length === 0) return ''
  if (limited.length <= 3) return `(${limited}`
  if (limited.length <= 6) return `(${limited.slice(0, 3)}) ${limited.slice(3)}`
  return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`
}

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1) // 1: info, 2: situation, 3: verify code
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', state: '', agentType: '',
  })
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  function update(key: string, val: string) {
    setForm(f => ({ ...f, [key]: val }))
    setError('')
  }

  function handleStep1(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.phone) {
      setError('Please fill out your name and phone number.')
      return
    }
    if (form.phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit phone number.')
      return
    }
    setStep(2)
  }

  function handleStep2(e: React.FormEvent) {
    e.preventDefault()
    if (!form.state || !form.agentType) {
      setError('Please select your state and current situation.')
      return
    }
    handleSignup()
  }

  async function handleSignup() {
    setLoading(true)
    setError('')

    // Step 1: Create account
    const signupRes = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (!signupRes.ok) {
      const data = await signupRes.json()
      setError(data.error || 'Failed to create account')
      setLoading(false)
      return
    }

    // Step 2: Send verification code
    const codeRes = await fetch('/api/auth/send-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: form.phone }),
    })

    const codeData = await codeRes.json()
    if (codeRes.ok) {
      setStep(3)
      if (codeData.devCode) setCode(codeData.devCode)
    } else {
      setError(codeData.error || 'Failed to send code')
    }
    setLoading(false)
  }

  async function handleVerifyCode(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const res = await fetch('/api/auth/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: form.phone, code }),
    })

    if (res.ok) {
      const data = await res.json()
      if (data.deviceToken) {
        localStorage.setItem('ipa_hub_device_token', data.deviceToken)
      }
      router.push('/dashboard')
    } else {
      const data = await res.json()
      setError(data.error || 'Invalid code')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <nav className="py-4 px-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-lg font-black text-white">IPA</span>
            <span className="text-accent font-black text-lg">Hub</span>
          </Link>
          <Link href="/login" className="text-white/60 text-sm hover:text-white transition-colors">
            Already have an account? Sign in →
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Progress */}
          <div className="flex items-center gap-3 mb-8">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex-1">
                <div className={`h-1.5 rounded-full transition-all ${s <= step ? 'bg-accent' : 'bg-white/20'}`} />
                <p className={`text-xs mt-1 text-center ${s <= step ? 'text-accent' : 'text-white/40'}`}>
                  {s === 1 ? 'Your Info' : s === 2 ? 'Your Situation' : 'Verify'}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-2xl">
            {step === 1 && (
              <>
                <h1 className="text-2xl font-black text-primary mb-1">Create Your Free Account</h1>
                <p className="text-text-muted mb-6 text-sm">Get free access to IPA Hub — education, tools, and carrier access.</p>
                {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>}
                <form onSubmit={handleStep1} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" value={form.name} onChange={e => update('name', e.target.value)}
                      placeholder="Dave O'Reilly"
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Email Address</label>
                    <input type="email" value={form.email} onChange={e => update('email', e.target.value)}
                      placeholder="you@youragency.com (optional)"
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" value={form.phone} onChange={e => update('phone', formatPhone(e.target.value))}
                      placeholder="(555) 123-4567"
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    <p className="text-text-muted text-xs mt-1">We&apos;ll text you a code to verify. This is how you&apos;ll log in.</p>
                  </div>
                  <button type="submit" className="w-full btn-gold py-3 rounded-xl font-bold text-sm mt-2">Continue →</button>
                </form>
              </>
            )}

            {step === 2 && (
              <>
                <button onClick={() => setStep(1)} className="text-text-muted text-sm hover:text-text flex items-center gap-1 mb-4">← Back</button>
                <h1 className="text-2xl font-black text-primary mb-1">Tell Us About Yourself</h1>
                <p className="text-text-muted mb-6 text-sm">We&apos;ll personalize your experience based on your situation.</p>
                {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>}
                <form onSubmit={handleStep2} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Your State <span className="text-red-500">*</span></label>
                    <select value={form.state} onChange={e => update('state', e.target.value)}
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white">
                      <option value="">Select your state...</option>
                      {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Your Current Situation <span className="text-red-500">*</span></label>
                    <div className="space-y-2">
                      {AGENT_TYPES.map(t => (
                        <label key={t.value} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          form.agentType === t.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40'
                        }`}>
                          <input type="radio" name="agentType" value={t.value}
                            checked={form.agentType === t.value}
                            onChange={e => update('agentType', e.target.value)}
                            className="mt-0.5 accent-primary" />
                          <span className="text-sm text-text leading-tight">{t.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full btn-gold py-3 rounded-xl font-bold text-sm mt-2 disabled:opacity-60">
                    {loading ? 'Creating account...' : 'Create Account & Verify →'}
                  </button>
                </form>
              </>
            )}

            {step === 3 && (
              <>
                <h1 className="text-2xl font-black text-primary mb-1">Verify Your Phone</h1>
                <p className="text-text-muted mb-6 text-sm">We sent a 6-digit code to {form.phone}</p>
                {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>}
                <form onSubmit={handleVerifyCode} className="space-y-4">
                  <div>
                    <input type="text" inputMode="numeric" maxLength={6} value={code}
                      onChange={e => { setCode(e.target.value.replace(/\D/g, '')); setError('') }}
                      placeholder="000000" autoFocus
                      className="w-full border border-border rounded-lg px-4 py-3 text-center tracking-[0.5em] font-mono text-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <button type="submit" disabled={loading || code.length < 6}
                    className="w-full btn-gold py-3 rounded-xl font-bold text-sm mt-2 disabled:opacity-60">
                    {loading ? 'Verifying...' : 'Verify & Enter Hub →'}
                  </button>
                </form>
              </>
            )}

            <p className="text-center text-xs text-text-muted mt-4">
              By signing up, you agree to receive helpful insurance industry resources and updates. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
