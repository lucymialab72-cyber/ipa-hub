'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { decodeToken, type UserProfile } from '@/lib/auth'

const NAV_ITEMS = [
  { href: '/dashboard', icon: '🏠', label: 'Dashboard', exact: true },
  { href: '/dashboard/learn', icon: '📚', label: 'Learn', exact: false },
  { href: '/dashboard/programs', icon: '🔗', label: 'Programs', exact: false },
  { href: '/dashboard/tools', icon: '🛠️', label: 'Tools', exact: false },
  { href: '/dashboard/training', icon: '🎓', label: 'Training', exact: false },
  { href: '/dashboard/support', icon: '💬', label: 'Support', exact: false },
  { href: '/dashboard/profile', icon: '👤', label: 'Profile', exact: false },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<UserProfile | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const cookie = document.cookie.split('; ').find(c => c.startsWith('ipa-hub-token='))
    if (!cookie) {
      router.push('/login')
      return
    }
    const token = cookie.split('=')[1]
    const decoded = decodeToken(token)
    if (!decoded) {
      router.push('/login')
      return
    }
    setUser(decoded)
  }, [router])

  function handleLogout() {
    document.cookie = 'ipa-hub-token=; path=/; max-age=0'
    router.push('/')
  }

  function isActive(item: typeof NAV_ITEMS[0]) {
    if (item.exact) return pathname === item.href
    return pathname.startsWith(item.href)
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-primary font-medium">Loading your dashboard...</div>
      </div>
    )
  }

  const agentTypeLabels: Record<string, string> = {
    new: 'New Agent',
    captive: 'Captive Agent',
    independent: 'Independent Agent',
    owner: 'Agency Owner',
    exploring: 'Exploring',
  }

  return (
    <div className="min-h-screen bg-bg flex">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-sidebar text-white flex flex-col z-50 transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Logo */}
        <div className="p-5 border-b border-white/10">
          <Link href="/dashboard" className="flex items-center gap-2" onClick={() => setSidebarOpen(false)}>
            <span className="text-xl font-black text-white">IPA</span>
            <span className="text-accent font-black text-xl">Hub</span>
          </Link>
          <p className="text-white/40 text-xs mt-1">Independent Agent Resource Center</p>
        </div>

        {/* User info */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-sm flex-shrink-0">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm text-white truncate">{user.name}</p>
              <p className="text-white/50 text-xs truncate">{agentTypeLabels[user.agentType] || 'Agent'}</p>
            </div>
          </div>
          {user.state && (
            <div className="mt-2 flex items-center gap-1.5 text-xs text-white/40">
              <span>📍</span>
              <span>{user.state}</span>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3 overflow-y-auto">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-5 py-3 text-sm font-medium transition-all nav-inactive ${
                isActive(item)
                  ? 'nav-active'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
              {item.href === '/dashboard/programs' && (
                <span className="ml-auto bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full">6</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Bottom links */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <a
            href="https://insuranceproagencies.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            <span>🌐</span> insuranceproagencies.com
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs text-white/40 hover:text-red-400 transition-colors w-full"
          >
            <span>🚪</span> Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-border px-4 py-3 flex items-center justify-between sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-1.5 rounded-lg hover:bg-bg transition-colors"
          >
            <span className="text-xl">☰</span>
          </button>
          <div className="hidden lg:block">
            <p className="text-sm text-text-muted">
              Welcome back, <span className="font-semibold text-text">{user.name.split(' ')[0]}</span>! 👋
            </p>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <a
              href="https://portal.myindependentagent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-accent bg-accent/10 hover:bg-accent/20 px-3 py-1.5 rounded-lg transition-colors"
            >
              MIA Portal →
            </a>
            <Link href="/dashboard/profile" className="text-xs font-medium text-text-muted hover:text-text px-3 py-1.5 rounded-lg hover:bg-bg transition-colors">
              Profile
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
