import Link from 'next/link'

const PROGRAMS = [
  {
    id: 'ipa-direct',
    icon: '🏢',
    title: 'IPA Direct Appointments',
    tagline: 'The flagship program for experienced independent agents.',
    badge: 'Flagship',
    badgeColor: 'bg-primary text-white',
    available: true,
    details: [
      { label: 'Commission Split', value: '80/20 — You keep 80%' },
      { label: 'Carrier Access', value: '50+ carriers, personal + commercial' },
      { label: 'Requirement', value: '3+ years P&C experience' },
      { label: 'Appointment Type', value: 'Direct appointments (you own the relationship)' },
      { label: 'Profit Sharing', value: 'Yes — passed through to members' },
      { label: 'Contingency Bonuses', value: 'Yes — shared with agents' },
    ],
    desc: 'The IPA Direct program gives experienced independent agents direct appointments with 50+ carriers at an 80/20 commission split. You own your book of business, keep 80% of every commission, and participate in carrier profit sharing and contingency bonuses. This is the foundation that IPA was built on.',
    cta: 'Apply for IPA Direct',
    ctaHref: 'https://insuranceproagencies.com/get-started',
    ctaExternal: true,
    color: 'border-primary',
  },
  {
    id: 'mia',
    icon: '🚀',
    title: 'MIA Referral Program',
    tagline: 'Instant market access with zero requirements.',
    badge: 'No Experience Needed',
    badgeColor: 'bg-emerald-600 text-white',
    available: true,
    details: [
      { label: 'Experience Required', value: 'None — open to all agents' },
      { label: 'Production Minimum', value: 'None' },
      { label: 'Commission', value: '5-15% referral commissions' },
      { label: 'Carrier Access', value: '50+ carriers via VIU by HUB' },
      { label: 'Lines Available', value: 'Auto, Home, Renters, Life, and more' },
      { label: 'Client Service', value: 'VIU handles quoting and service' },
    ],
    desc: 'MIA (My Independent Agent) powered by VIU gives you instant access to 50+ carriers through a simple referral model. Share your link, clients get quoted and bound, you earn a commission. No experience required, no production minimums, no service burden on you.',
    cta: 'Join MIA Free',
    ctaHref: 'https://portal.myindependentagent.com',
    ctaExternal: true,
    color: 'border-emerald-500',
  },
  {
    id: 'commercial',
    icon: '🏗️',
    title: 'Commercial Lines Program',
    tagline: 'Build commercial revenue alongside personal lines.',
    badge: 'P2',
    badgeColor: 'bg-amber-600 text-white',
    available: true,
    details: [
      { label: 'Lines Available', value: 'BOP, commercial auto, liability, E&O, workers comp' },
      { label: 'Markets', value: 'Specialty and standard commercial carriers' },
      { label: 'Training', value: 'David\'s commercial training program included' },
      { label: 'Appetite', value: 'Contractors, restaurants, retail, professional services' },
      { label: 'Support', value: 'Commercial specialist support available' },
      { label: 'Requirement', value: 'IPA member or eligible account basis' },
    ],
    desc: 'IPA\'s commercial lines program gives members access to specialty commercial markets that most independents can\'t access alone. Combined with David\'s commercial training program, you\'ll be equipped to win commercial accounts and earn significantly higher premiums per client.',
    cta: 'Explore Commercial',
    ctaHref: '/dashboard/support',
    ctaExternal: false,
    color: 'border-amber-500',
  },
  {
    id: 'retail-producer',
    icon: '🏪',
    title: 'Retail Producer Program',
    tagline: 'Coming soon — state-by-state expansion.',
    badge: 'Waitlist Open',
    badgeColor: 'bg-purple-600 text-white',
    available: true,
    details: [
      { label: 'Phase 1', value: 'Illinois (pilot)' },
      { label: 'Model', value: 'Retail storefont model for branded locations' },
      { label: 'Status', value: 'Accepting waitlist signups' },
      { label: 'Timeline', value: 'Q3 2026 Illinois launch' },
      { label: 'Expansion', value: 'State by state based on demand' },
      { label: 'Action', value: 'Join waitlist to be notified for your state' },
    ],
    desc: 'The IPA Retail Producer Program is a new model for branded storefront insurance agencies. We\'re piloting in Illinois and expanding state-by-state. Join the waitlist for your state to be notified when we launch near you.',
    cta: 'Join Waitlist',
    ctaHref: '/dashboard/support',
    ctaExternal: false,
    color: 'border-purple-500',
  },
  {
    id: 'covu',
    icon: '⚙️',
    title: 'COVU Servicing Partnership',
    tagline: 'Focus on growth. Let experts handle the rest.',
    badge: 'Unique Offering',
    badgeColor: 'bg-indigo-600 text-white',
    available: true,
    details: [
      { label: 'What COVU Does', value: 'Takes over policy servicing for personal lines' },
      { label: 'You Keep', value: 'Commission income — just not the service burden' },
      { label: 'Split Structure', value: '30% COVU, 20-30% IPA, rest to agency' },
      { label: 'Best For', value: 'Agencies wanting to shed PL, focus on commercial' },
      { label: 'Also For', value: 'Semi-retirement — keep earning, stop working' },
      { label: 'Result', value: 'More time, more focus, same book income' },
    ],
    desc: 'COVU is IPA\'s servicing partnership that lets agencies hand off personal lines servicing while continuing to earn income. No other aggregator offers this. It\'s perfect for agencies that want to focus 100% on growth and commercial lines, or for agents planning a gradual exit.',
    cta: 'Learn About COVU',
    ctaHref: '/dashboard/support',
    ctaExternal: false,
    color: 'border-indigo-500',
  },
  {
    id: 'ce',
    icon: '🎓',
    title: 'Free CE Credit Program',
    tagline: '48 hours of CE credits — completely free.',
    badge: 'Free',
    badgeColor: 'bg-teal-600 text-white',
    available: true,
    details: [
      { label: 'CE Hours', value: '48 hours total (personal + commercial tracks)' },
      { label: 'Modules', value: '18 modules, self-paced' },
      { label: 'Format', value: 'Video + quiz format, open-book' },
      { label: 'Cost', value: 'Free for all IPA Hub members' },
      { label: 'Provider Status', value: 'CE provider approval in progress' },
      { label: 'Access', value: 'Available in the Training section' },
    ],
    desc: 'IPA\'s 18-module masterclass covers how the independent channel really works — carrier relationships, commercial lines, agency management, profitability, and growth strategies. 48 CE hours available once provider approval is finalized. Currently open as free professional development.',
    cta: 'Access Training',
    ctaHref: '/dashboard/training',
    ctaExternal: false,
    color: 'border-teal-500',
  },
]

export default function ProgramsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-primary mb-2">🔗 Programs</h1>
        <p className="text-text-muted text-lg">
          Six programs for every stage of your insurance career. No commitment required to explore.
        </p>
      </div>

      {/* Program grid */}
      <div className="space-y-6">
        {PROGRAMS.map(p => (
          <div key={p.id} className={`bg-card rounded-2xl border-2 ${p.color} p-6 md:p-8`}>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left */}
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{p.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h2 className="text-xl font-black text-primary">{p.title}</h2>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                    </div>
                    <p className="text-text-muted text-sm">{p.tagline}</p>
                  </div>
                </div>
                <p className="text-text-muted leading-relaxed text-sm mb-4">{p.desc}</p>

                {/* CTA */}
                {p.ctaExternal ? (
                  <a href={p.ctaHref} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 btn-gold px-5 py-2.5 rounded-xl font-bold text-sm hover:shadow-lg transition-all">
                    {p.cta} →
                  </a>
                ) : (
                  <Link href={p.ctaHref}
                    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-primary-light transition-colors">
                    {p.cta} →
                  </Link>
                )}
              </div>

              {/* Right: details */}
              <div className="md:w-64 flex-shrink-0">
                <div className="bg-bg rounded-xl p-4">
                  <h3 className="font-bold text-xs text-text-muted uppercase tracking-wider mb-3">Program Details</h3>
                  <div className="space-y-2">
                    {p.details.map(d => (
                      <div key={d.label}>
                        <p className="text-xs text-text-muted font-medium">{d.label}</p>
                        <p className="text-sm font-semibold text-text">{d.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Not sure CTA */}
      <div className="mt-8 bg-primary rounded-2xl p-6 text-white text-center">
        <h2 className="text-xl font-black mb-2">Not Sure Which Program Is Right for You?</h2>
        <p className="text-white/70 mb-4 text-sm">Schedule a free 20-minute call with an IPA expert. No pressure, just clarity.</p>
        <a href="https://cal.com/daveoreilly/ipa-call" target="_blank" rel="noopener noreferrer"
          className="btn-gold px-6 py-2.5 rounded-xl font-bold text-sm inline-block hover:shadow-lg transition-all">
          Book a Free Discovery Call →
        </a>
      </div>
    </div>
  )
}
