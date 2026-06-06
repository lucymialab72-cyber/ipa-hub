import Link from 'next/link'

export default function TrainingPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-primary mb-2">🎓 Training</h1>
        <p className="text-text-muted text-lg">
          Professional development, CE credits, and industry education — all free for IPA Hub members.
        </p>
      </div>

      {/* Masterclass featured */}
      <div className="bg-primary rounded-2xl p-8 text-white mb-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #c9a84c 0%, transparent 50%)' }} />
        <div className="relative flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Featured Program</div>
            <h2 className="text-2xl font-black mb-3">IPA Masterclass — The Independent Agent's Complete Education</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              18 modules. 48 CE hours. Everything you need to understand how the independent channel actually works — carrier relationships, profitability, commercial lines, agency growth, and exit strategies.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-5">
              {[
                { num: '18', label: 'Modules' },
                { num: '48', label: 'CE Hours' },
                { num: 'Free', label: 'For Members' },
              ].map(s => (
                <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                  <div className="text-2xl font-black text-accent">{s.num}</div>
                  <div className="text-white/60 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
            <a href="https://ipa-ce-portal.vercel.app" target="_blank" rel="noopener noreferrer"
              className="btn-gold px-6 py-3 rounded-xl font-bold inline-block hover:shadow-lg transition-all">
              Access Masterclass →
            </a>
          </div>
          <div className="md:w-56 flex-shrink-0">
            <div className="bg-white/10 rounded-xl p-4">
              <h3 className="font-bold text-sm mb-3 text-accent">Module Topics</h3>
              <ul className="space-y-1.5 text-xs text-white/70">
                {[
                  'Independent Agency Fundamentals',
                  'Carrier Relationship Management',
                  'Personal Lines Profitability',
                  'Commercial Lines Basics',
                  'Agency Marketing Systems',
                  'Loss Ratio Management',
                  'Commission Optimization',
                  'Agency Valuation & Exit',
                  'Technology & AI Tools',
                  '+ 9 more modules',
                ].map(m => (
                  <li key={m} className="flex items-start gap-1.5">
                    <span className="text-accent mt-0.5">›</span> {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CE Credits notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⏳</span>
          <div>
            <h3 className="font-bold text-amber-800 mb-1">CE Credit Provider Status</h3>
            <p className="text-sm text-amber-700 leading-relaxed">
              IPA is actively pursuing CE provider approval. Once approved, all 48 course hours will count toward your P&C CE requirements. In the meantime, the content is fully available as free professional development — the knowledge is just as valuable, the official CE credit is coming.
            </p>
          </div>
        </div>
      </div>

      {/* Other training resources */}
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            icon: '🏗️',
            title: 'Commercial Lines Training',
            desc: 'David\'s commercial producer training program. Learn how to write BOP, commercial auto, liability, and specialty lines.',
            status: 'IPA Members',
            href: '/dashboard/support',
            linkLabel: 'Request Access',
          },
          {
            icon: '📜',
            title: 'CE Portal',
            desc: 'Track your CE progress, access completed modules, and download certificates when provider approval is finalized.',
            status: 'Available',
            href: 'https://ipa-ce-portal.vercel.app/dashboard',
            linkLabel: 'Go to CE Portal',
            external: true,
          },
          {
            icon: '🎯',
            title: 'Carrier Appetite Training',
            desc: 'What carriers actually want. How to pre-qualify accounts, understand appetites, and write the business that gets renewed.',
            status: 'Coming Soon',
            href: null,
          },
          {
            icon: '📱',
            title: 'Agency Technology Bootcamp',
            desc: 'AMS systems, CRM tools, quoting platforms, and AI tools. A practical guide to running a modern insurance agency.',
            status: 'Coming Soon',
            href: null,
          },
        ].map(item => (
          <div key={item.title} className="bg-card rounded-xl border border-border p-5">
            <div className="flex items-start justify-between gap-2 mb-3">
              <span className="text-3xl">{item.icon}</span>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                item.status === 'Coming Soon' ? 'bg-gray-100 text-gray-500'
                : item.status === 'Available' ? 'bg-emerald-100 text-emerald-700'
                : 'bg-primary/10 text-primary'
              }`}>{item.status}</span>
            </div>
            <h3 className="font-bold text-primary mb-2">{item.title}</h3>
            <p className="text-sm text-text-muted leading-relaxed mb-3">{item.desc}</p>
            {item.href && (
              item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium text-accent hover:underline">{item.linkLabel} →</a>
              ) : (
                <Link href={item.href} className="text-sm font-medium text-accent hover:underline">{item.linkLabel} →</Link>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
