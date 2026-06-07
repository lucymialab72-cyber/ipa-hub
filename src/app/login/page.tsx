'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '')
  const cleaned = digits.length > 10 && digits.startsWith('1') ? digits.slice(1) : digits
  const limited = cleaned.slice(0, 10)
  if (limited.length === 0) return ''
  if (limited.length <= 3) return `(${limited}`
  if (limited.length <= 6) return `(${limited.slice(0, 3)}) ${limited.slice(3)}`
  return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`
}

export default function LoginPage() {
  const router = useRouter()
  const [step, setStep] = useState<'phone' | 'code'>('phone')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [autoLogging, setAutoLogging] = useState(true)
  const [error, setError] = useState('')

  // Auto-login from device token
  useEffect(() => {
    const token = localStorage.getItem('ipa_hub_device_token')
    if (!token) { setAutoLogging(false); return }

    const timeout = setTimeout(() => setAutoLogging(false), 8000)

    fetch('/api/auth/token-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    }).then(async res => {
      clearTimeout(timeout)
      if (res.ok) {
        router.push('/dashboard')
      } else {
        if (res.status === 401) localStorage.removeItem('ipa_hub_device_token')
        setAutoLogging(false)
      }
    }).catch(() => { clearTimeout(timeout); setAutoLogging(false) })
  }, [router])

  async function handleSendCode(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const res = await fetch('/api/auth/send-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone }),
    })

    const data = await res.json()
    if (res.ok) {
      setStep('code')
      if (data.devCode) setCode(data.devCode)
    } else {
      setError(data.error || 'Something went wrong')
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
      body: JSON.stringify({ phone, code }),
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

  if (autoLogging) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <span className="text-2xl font-black text-white">IPA</span>
            <span className="text-accent font-black text-2xl">Hub</span>
          </div>
          <p className="text-white/60 text-sm">Signing you in...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <nav className="py-4 px-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-lg font-black text-white">IPA</span>
            <span className="text-accent font-black text-lg">Hub</span>
          </Link>
          <Link href="/signup" className="text-white/60 text-sm hover:text-white transition-colors">
            New here? Create account →
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl p-8 shadow-2xl">
            {step === 'phone' ? (
              <>
                <h1 className="text-2xl font-black text-primary mb-1">Welcome Back</h1>
                <p className="text-text-muted mb-6 text-sm">Enter your phone number to sign in. We&apos;ll text you a 6-digit code.</p>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>
                )}

                <form onSubmit={handleSendCode} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => { setPhone(formatPhone(e.target.value)); setError('') }}
                      placeholder="(555) 123-4567"
                      className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || phone.replace(/\D/g, '').length < 10}
                    className="w-full btn-gold py-3 rounded-xl font-bold text-sm mt-2 disabled:opacity-60"
                  >
                    {loading ? 'Sending code...' : 'Send Verification Code →'}
                  </button>
                </form>

                <div className="flex items-center gap-2 text-text-muted text-xs justify-center mt-4">
                  <span>🔒</span>
                  <span>No passwords. Just a quick text verification.</span>
                </div>
              </>
            ) : (
              <>
                <button onClick={() => { setStep('phone'); setCode(''); setError('') }} className="text-text-muted text-sm hover:text-text flex items-center gap-1 mb-4">
                  ← Change number
                </button>
                <h1 className="text-2xl font-black text-primary mb-1">Enter Your Code</h1>
                <p className="text-text-muted mb-6 text-sm">We sent a 6-digit code to {phone}</p>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">{error}</div>
                )}

                <form onSubmit={handleVerifyCode} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Verification Code</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      value={code}
                      onChange={e => { setCode(e.target.value.replace(/\D/g, '')); setError('') }}
                      placeholder="000000"
                      autoFocus
                      className="w-full border border-border rounded-lg px-4 py-3 text-center tracking-[0.5em] font-mono text-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || code.length < 6}
                    className="w-full btn-gold py-3 rounded-xl font-bold text-sm mt-2 disabled:opacity-60"
                  >
                    {loading ? 'Verifying...' : 'Sign In →'}
                  </button>
                </form>

                <button
                  onClick={() => handleSendCode({ preventDefault: () => {} } as React.FormEvent)}
                  className="w-full text-primary text-sm font-medium hover:underline mt-4"
                >
                  Resend code
                </button>
              </>
            )}

            <div className="mt-6 text-center">
              <p className="text-text-muted text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-primary font-semibold hover:text-accent transition-colors">
                  Create one free →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
