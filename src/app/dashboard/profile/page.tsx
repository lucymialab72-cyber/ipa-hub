'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { decodeToken, US_STATES, AGENT_TYPES, encodeToken, type UserProfile } from '@/lib/auth'

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<UserProfile | null>(null)
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState<Partial<UserProfile>>({})
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const cookie = document.cookie.split('; ').find(c => c.startsWith('ipa-hub-token='))
    if (cookie) {
      const token = cookie.split('=')[1]
      const decoded = decodeToken(token)
      if (decoded) {
        setUser(decoded)
        setForm(decoded)
      }
    }
  }, [])

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    if (!user) return
    const updated = { ...user, ...form } as UserProfile
    const token = encodeToken(updated)
    document.cookie = `ipa-hub-token=${token}; path=/; max-age=${60 * 60 * 24 * 30}`
    setUser(updated)
    setEditing(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  function handleLogout() {
    document.cookie = 'ipa-hub-token=; path=/; max-age=0'
    router.push('/')
  }

  const agentTypeLabel = AGENT_TYPES.find(a => a.value === user?.agentType)?.label || 'Not set'

  if (!user) return null

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-primary mb-2">👤 Profile & Settings</h1>
        <p className="text-text-muted">Manage your IPA Hub account and preferences.</p>
      </div>

      {saved && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl mb-6 text-sm flex items-center gap-2">
          ✅ Profile updated successfully!
        </div>
      )}

      {/* Profile Card */}
      <div className="bg-card rounded-2xl border border-border p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black text-2xl">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-black text-primary">{user.name}</h2>
              <p className="text-text-muted text-sm">{agentTypeLabel}</p>
              {user.state && <p className="text-text-muted text-xs">📍 {user.state}</p>}
            </div>
          </div>
          {!editing && (
            <button onClick={() => setEditing(true)}
              className="text-sm font-medium text-primary border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors">
              Edit Profile
            </button>
          )}
        </div>

        {editing ? (
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-text mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={form.name || ''}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email || ''}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-1.5">Phone</label>
                <input
                  type="tel"
                  value={form.phone || ''}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-1.5">State</label>
                <select
                  value={form.state || ''}
                  onChange={e => setForm(f => ({ ...f, state: e.target.value }))}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                >
                  <option value="">Select state...</option>
                  {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-text mb-1.5">Your Situation</label>
              <select
                value={form.agentType || ''}
                onChange={e => setForm(f => ({ ...f, agentType: e.target.value }))}
                className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
              >
                {AGENT_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="btn-gold px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg transition-all">
                Save Changes
              </button>
              <button type="button" onClick={() => setEditing(false)}
                className="px-6 py-2.5 rounded-xl font-medium text-sm border border-border hover:bg-bg transition-colors">
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Email', value: user.email },
              { label: 'Phone', value: user.phone || 'Not set' },
              { label: 'State', value: user.state || 'Not set' },
              { label: 'Member Since', value: new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) },
            ].map(item => (
              <div key={item.label}>
                <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                <p className="text-sm font-medium text-text">{item.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="bg-card rounded-2xl border border-border p-6 mb-6">
        <h2 className="font-bold text-primary mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'IPA Website', href: 'https://insuranceproagencies.com', icon: '🌐' },
            { label: 'MIA Portal', href: 'https://portal.myindependentagent.com', icon: '🚀' },
            { label: 'CE Portal', href: 'https://ipa-ce-portal.vercel.app', icon: '🎓' },
            { label: 'Book a Call', href: 'https://cal.com/daveoreilly/ipa-call', icon: '📞' },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-bg transition-all text-sm font-medium text-text">
              <span>{link.icon}</span> {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Danger zone */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <h2 className="font-bold text-primary mb-2">Account</h2>
        <p className="text-sm text-text-muted mb-4">Sign out of your IPA Hub account.</p>
        <button onClick={handleLogout}
          className="text-sm font-medium text-red-600 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
          Sign Out
        </button>
      </div>
    </div>
  )
}
