'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Please enter your email and password.')
      return
    }
    setLoading(true)
    // Mock login — create a demo token
    const demoUser = {
      id: 'demo-' + Math.random().toString(36).slice(2),
      name: 'Agent',
      email: form.email,
      phone: '',
      state: '',
      agentType: 'exploring',
      createdAt: new Date().toISOString(),
    }
    const token = btoa(JSON.stringify(demoUser))
    document.cookie = `ipa-hub-token=${token}; path=/; max-age=${60 * 60 * 24 * 30}`
    setTimeout(() => router.push('/dashboard'), 500)
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
            <h1 className="text-2xl font-black text-primary mb-1">Welcome Back</h1>
            <p className="text-text-muted mb-6 text-sm">Sign in to access your IPA Hub dashboard.</p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="you@youragency.com"
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-1.5">Password</label>
                <input
                  type="password"
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  placeholder="••••••••"
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-gold py-3 rounded-xl font-bold text-sm mt-2 disabled:opacity-60"
              >
                {loading ? 'Signing in...' : 'Sign In →'}
              </button>
            </form>

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
