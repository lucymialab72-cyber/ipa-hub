'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { fetchUser, type UserProfile } from '@/lib/auth'

const QUICK_ACTIONS = [
  { href: '/dashboard/learn/start-agency', icon: '📖', label: 'How to Start Your Agency', desc: 'The complete beginner\'s guide', badge: 'New' },
  { href: '/dashboard/learn/understanding-aggregators', icon: '🔍', label: 'Understanding Aggregators', desc: 'Honest education on how they work', badge: null },
  { href: '/dashboard/programs', icon: '🔗', label: 'Explore IPA Programs', desc: 'Find the right fit for your situation', badge: null },
  { href: '/dashboard/learn/mia-referral', icon: '💰', label: 'MIA Referral Program', desc: 'Instant access to 50+ carriers', badge: 'Start Earning' },
]

const SECTIONS = [
  {
    href: '/dashboard/learn',
    icon: '📚',
    title: 'Learn',
    desc: 'Education hub: guides, playbooks, and insider knowledge for every agent type.',
    color: 'bg-blue-50 border-blue-200',
    items: ['How to Start an Agency', 'Aggregator Guide', 'Contract Academy', 'Industry Secrets']
  },
  {
    href: '/dashboard/programs',
    icon: '🔗',
    title: 'Programs',
    desc: 'IPA Direct, MIA Referral, Commercial Lines, Retail Producer waitlist, and more.',
    color: 'bg-emerald-50 border-emerald-200',
    items: ['IPA Direct (80/20 split)', 'MIA Referral (Instant Carriers)', 'Commercial Lines', 'COVU Servicing']
  },
  {
    href: '/dashboard/tools',
    icon: '🛠️',
    title: 'Tools',
    desc: 'Book evaluator, PLR education, reverse audit overview, and AI tools.',
    color: 'bg-purple-50 border-purple-200',
    items: ['Book Evaluator', 'PLR Overview', 'Reverse Audit', 'AI Tools']
  },
  {
    href: '/dashboard/training',
    icon: '🎓',
    title: 'Training',
    desc: '48 hours of free CE credits. Masterclass access. Professional development.',
    color: 'bg-amber-50 border-amber-200',
    items: ['IPA Masterclass (18 modules)', '48 CE Hours Available', 'CE Portal Access', 'Commercial Training']
  },
  {
    href: '/dashboard/support',
    icon: '💬',
    title: 'Support',
    desc: 'AI chatbot, expert support, and calendar booking for when you need a human.',
    color: 'bg-rose-50 border-rose-200',
    items: ['AI Chatbot (24/7)', 'Schedule a Call', 'FAQ', 'Community']
  },
]

export default function DashboardPage() {
  const [user, setUser] = useState<UserProfile | null>(null)

  useEffect(() => {
    fetchUser().then(u => { if (u) setUser(u) })
  }, [])

  const agentGreeting: Record<string, string> = {
    new: 'Start with the "How to Start Your Agency" guide — it covers everything.',
    captive: 'Check out "The Captive Agent\'s Roadmap" to understand your options.',
    independent: 'Explore the Tools section — PLR analysis and book valuation could be game-changers.',
    owner: 'The Commercial Lines program and Book Evaluator are built for owners like you.',
    exploring: 'Take your time. Explore the Learn section to understand your options.',
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-primary rounded-2xl p-6 md:p-8 mb-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 80% 50%, #c9a84c 0%, transparent 50%)'
        }} />
        <div className="relative">
          <h1 className="text-2xl md:text-3xl font-black mb-2">
            Welcome{user?.name ? `, ${user.name.split(' ')[0]}` : ''}! 👋
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-xl">
            {user?.agentType ? agentGreeting[user.agentType] : 'Your independent agent resource hub is ready. Explore, learn, and grow.'}
          </p>
          {user?.state && (
            <div className="mt-3 inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs px-3 py-1.5 rounded-full">
              <span>📍</span> {user.state} Agent
            </div>
          )}
        </div>
      </div>

      {/* Quick Start */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-primary mb-4">🚀 Quick Start</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_ACTIONS.map(a => (
            <Link key={a.href} href={a.href}
              className="bg-card rounded-xl p-5 border border-border hover:border-accent/50 hover:shadow-md transition-all group">
              <div className="text-2xl mb-3">{a.icon}</div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-sm text-primary leading-tight group-hover:text-accent transition-colors">
                  {a.label}
                </h3>
                {a.badge && (
                  <span className="flex-shrink-0 text-xs bg-accent/20 text-accent-dark font-bold px-2 py-0.5 rounded-full">
                    {a.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-text-muted">{a.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* All Sections */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-primary mb-4">📋 All Sections</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTIONS.map(s => (
            <Link key={s.href} href={s.href}
              className="bg-card rounded-xl p-5 border border-border hover:shadow-md transition-all group block">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="font-bold text-primary group-hover:text-accent transition-colors">{s.title}</h3>
              </div>
              <p className="text-sm text-text-muted mb-3 leading-relaxed">{s.desc}</p>
              <ul className="space-y-1">
                {s.items.map(item => (
                  <li key={item} className="text-xs text-text-muted flex items-center gap-1.5">
                    <span className="text-accent">›</span> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-xs font-medium text-accent">
                Explore {s.title} →
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Network Stats */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <h2 className="text-lg font-bold text-primary mb-4">📊 The IPA Network</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: '50+', label: 'Carrier Partners', icon: '🏢' },
            { num: '50', label: 'States Covered', icon: '🗺️' },
            { num: '48', label: 'Free CE Hours', icon: '🎓' },
            { num: '80%', label: 'Commission Split', icon: '💰' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl mb-1">{s.icon}</div>
              <div className="text-2xl font-black text-primary">{s.num}</div>
              <div className="text-xs text-text-muted mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
