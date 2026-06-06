'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { US_STATES, AGENT_TYPES, encodeToken, type UserProfile } from '@/lib/auth'

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    state: '',
    agentType: '',
  })
  const [error, setError] = useState('')

  function update(key: string, val: string) {
    setForm(f => ({ ...f, [key]: val }))
    setError('')
  }

  function handleStep1(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.password) {
      setError('Please fill out all required fields.')
      return
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    setStep(2)
  }

  function handleStep2(e: React.FormEvent) {
    e.preventDefault()
    if (!form.phone || !form.state || !form.agentType) {
      setError('Please fill out all required fields.')
      return
    }
    handleSignup()
  }

  function handleSignup() {
    setLoading(true)
    const user: UserProfile = {
      id: Math.random().toString(36).slice(2),
      name: form.name,
      email: form.email,
      phone: form.phone,
      state: form.state,
      agentType: form.agentType,
      createdAt: new Date().toISOString(),
    }
    const token = encodeToken(user)
    document.cookie = `ipa-hub-token=${token}; path=/; max-age=${60 * 60 * 24 * 30}`
    setTimeout(() => router.push('/dashboard'), 500)
  }

  const agentTypeLabel = AGENT_TYPES.find(a => a.value === form.agentType)?.label || ''

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      {/* Nav */}
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
            {[1, 2].map(s => (
              <div key={s} className="flex-1">
                <div className={`h-1.5 rounded-full transition-all ${s <= step ? 'bg-accent' : 'bg-white/20'}`} />
                <p className={`text-xs mt-1 text-center ${s <= step ? 'text-accent' : 'text-white/40'}`}>
                  {s === 1 ? 'Your Info' : 'Your Situation'}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-2xl">
            {step === 1 ? (
              <>
                <h1 className="text-2xl font-black text-primary mb-1">Create Your Free Account</h1>
                <p className="text-text-muted mb-6 text-sm">Join thousands of agents using IPA Hub to grow.</p>
                {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>}
                <form onSubmit={handleStep1} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => update('name', e.target.value)}
                      placeholder="Dave O'Reilly"
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => update('email', e.target.value)}
                      placeholder="you@youragency.com"
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Password <span className="text-red-500">*</span></label>
                    <input
                      type="password"
                      value={form.password}
                      onChange={e => update('password', e.target.value)}
                      placeholder="Minimum 6 characters"
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <button type="submit" className="w-full btn-gold py-3 rounded-xl font-bold text-sm mt-2">
                    Continue →
                  </button>
                </form>
              </>
            ) : (
              <>
                <button onClick={() => setStep(1)} className="text-text-muted text-sm hover:text-text flex items-center gap-1 mb-4">
                  ← Back
                </button>
                <h1 className="text-2xl font-black text-primary mb-1">Tell Us About Yourself</h1>
                <p className="text-text-muted mb-6 text-sm">We'll personalize your experience based on your situation.</p>
                {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>}
                <form onSubmit={handleStep2} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => update('phone', e.target.value)}
                      placeholder="(555) 555-5555"
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Your State <span className="text-red-500">*</span></label>
                    <select
                      value={form.state}
                      onChange={e => update('state', e.target.value)}
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                    >
                      <option value="">Select your state...</option>
                      {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Your Current Situation <span className="text-red-500">*</span></label>
                    <div className="space-y-2">
                      {AGENT_TYPES.map(t => (
                        <label key={t.value} className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          form.agentType === t.value 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/40'
                        }`}>
                          <input
                            type="radio"
                            name="agentType"
                            value={t.value}
                            checked={form.agentType === t.value}
                            onChange={e => update('agentType', e.target.value)}
                            className="mt-0.5 accent-primary"
                          />
                          <span className="text-sm text-text leading-tight">{t.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-gold py-3 rounded-xl font-bold text-sm mt-2 disabled:opacity-60"
                  >
                    {loading ? 'Creating your account...' : 'Access IPA Hub Free →'}
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
