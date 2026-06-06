import Link from 'next/link'

const LEARN_ARTICLES = [
  {
    href: '/dashboard/learn/start-agency',
    icon: '🏗️',
    title: 'How to Start an Independent Insurance Agency',
    desc: 'Everything a new agent needs: licensing, E&O, business entity, carriers, marketing, and realistic expectations. The complete roadmap.',
    time: '15 min read',
    badge: 'Essential',
    badgeColor: 'bg-blue-100 text-blue-700',
    tags: ['New Agents', 'Getting Started'],
  },
  {
    href: '/dashboard/learn/understanding-aggregators',
    icon: '🔍',
    title: 'Understanding Aggregators: The Honest Guide',
    desc: 'What aggregators are, how they work, major players compared, red flags to watch for, and where IPA fits in the landscape.',
    time: '12 min read',
    badge: 'Must Read',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    tags: ['All Agents', 'Education'],
  },
  {
    href: '/dashboard/learn/mia-referral',
    icon: '💰',
    title: 'The MIA Referral Program',
    desc: 'Instant access to 50+ carriers with zero production minimums. Perfect for new agents and anyone testing the independent channel.',
    time: '8 min read',
    badge: 'Start Earning',
    badgeColor: 'bg-amber-100 text-amber-700',
    tags: ['MIA', 'New Agents', 'Captive Agents'],
  },
  {
    href: '#',
    icon: '📑',
    title: 'Contract Academy: Reading Aggregator Contracts',
    desc: 'How to read any aggregator contract. Key terms, ownership clauses, non-competes, termination rights, and red flags.',
    time: '10 min read',
    badge: 'Coming Soon',
    badgeColor: 'bg-gray-100 text-gray-500',
    tags: ['All Agents', 'Contracts'],
    disabled: true,
  },
  {
    href: '#',
    icon: '🔐',
    title: 'Industry Secrets: What Carriers Don\'t Tell You',
    desc: 'Commission tiers, contingency bonuses, how to negotiate with carrier reps, and why some $5M agencies are barely profitable.',
    time: '12 min read',
    badge: 'Coming Soon',
    badgeColor: 'bg-gray-100 text-gray-500',
    tags: ['All Agents', 'Advanced'],
    disabled: true,
  },
  {
    href: '#',
    icon: '📣',
    title: 'Marketing 101 for Insurance Agents',
    desc: 'How to generate your first leads, build referral partnerships, digital marketing basics, and personal brand building in 2026.',
    time: '15 min read',
    badge: 'Coming Soon',
    badgeColor: 'bg-gray-100 text-gray-500',
    tags: ['All Agents', 'Marketing'],
    disabled: true,
  },
  {
    href: '#',
    icon: '🔄',
    title: 'The Captive Agent\'s Escape Plan',
    desc: 'Thinking about leaving State Farm, Allstate, or Farmers? What you\'ll gain, what you\'ll lose, and how to make the transition work.',
    time: '12 min read',
    badge: 'Coming Soon',
    badgeColor: 'bg-gray-100 text-gray-500',
    tags: ['Captive Agents'],
    disabled: true,
  },
  {
    href: '#',
    icon: '📈',
    title: 'Maximizing Your Book Value: 2X → 5X',
    desc: 'What buyers look for, how to structure your agency for maximum sale value, and why IPA\'s systems increase attractiveness.',
    time: '10 min read',
    badge: 'Coming Soon',
    badgeColor: 'bg-gray-100 text-gray-500',
    tags: ['Agency Owners', 'Exit Planning'],
    disabled: true,
  },
]

export default function LearnPage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-primary mb-2">📚 Learn</h1>
        <p className="text-text-muted text-lg">
          Free education for every agent, at every stage. No sales pitch. Just real knowledge.
        </p>
      </div>

      {/* Featured / Available now */}
      <div className="mb-8">
        <h2 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">Available Now</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {LEARN_ARTICLES.filter(a => !a.disabled).map(article => (
            <Link key={article.href} href={article.href}
              className="bg-card rounded-xl border border-border p-5 hover:shadow-md hover:border-accent/50 transition-all group block">
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-3xl">{article.icon}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${article.badgeColor}`}>
                  {article.badge}
                </span>
              </div>
              <h3 className="font-bold text-primary mb-2 leading-tight group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-text-muted mb-3 leading-relaxed">{article.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-muted">{article.time}</span>
                <span className="text-xs font-medium text-accent">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div>
        <h2 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">Coming Soon</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {LEARN_ARTICLES.filter(a => a.disabled).map(article => (
            <div key={article.title}
              className="bg-card rounded-xl border border-border p-5 opacity-70">
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-2xl">{article.icon}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${article.badgeColor}`}>
                  {article.badge}
                </span>
              </div>
              <h3 className="font-bold text-primary mb-2 leading-tight">{article.title}</h3>
              <p className="text-sm text-text-muted mb-3 leading-relaxed">{article.desc}</p>
              <div className="flex gap-1.5 flex-wrap">
                {article.tags.map(t => (
                  <span key={t} className="text-xs bg-bg text-text-muted px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
