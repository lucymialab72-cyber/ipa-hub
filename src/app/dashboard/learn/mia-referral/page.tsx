import Link from 'next/link'

export default function MIAReferralPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <nav className="text-sm text-text-muted mb-6 flex items-center gap-2">
        <Link href="/dashboard" className="hover:text-text">Dashboard</Link>
        <span>›</span>
        <Link href="/dashboard/learn" className="hover:text-text">Learn</Link>
        <span>›</span>
        <span className="text-text">MIA Referral Program</span>
      </nav>

      <div className="bg-emerald-900 rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 80% 50%, #d4a843 0%, transparent 50%)'
        }} />
        <div className="relative">
          <div className="text-5xl mb-4">💰</div>
          <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">Start Earning</div>
          <h1 className="text-3xl font-black mb-3 leading-tight">
            The MIA Referral Program
          </h1>
          <p className="text-emerald-100 text-lg leading-relaxed">
            Instant access to 50+ carriers. Zero production minimums. No experience required. Start earning referral commissions on day one — even before you build your own book.
          </p>
          <div className="flex items-center gap-4 mt-4 text-emerald-300/70 text-sm">
            <span>📖 8 min read</span>
            <span>•</span>
            <span>Updated June 2026</span>
          </div>
        </div>
      </div>

      <div className="space-y-8">

        {/* What is MIA */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">What Is MIA?</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            MIA stands for <strong>My Independent Agent</strong> — a platform powered by VIU by HUB, one of the nation's largest independent insurance brokerages. It's a technology layer that lets agents refer clients to a professional quoting and binding engine — and earn commissions when those clients buy policies.
          </p>
          <div className="bg-bg rounded-xl p-5">
            <p className="text-sm text-text-muted leading-relaxed">
              <strong className="text-primary">The simple version:</strong> You send a client a link. VIU's technology shops 50+ carriers and presents the best quotes. The client picks a policy and buys it. You get paid. No underwriting, no service calls, no policy management — you just refer and earn.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">How It Works: Step by Step</h2>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Sign Up for Free',
                desc: 'Create your MIA agent account at portal.myindependentagent.com. No production history required. Takes 5 minutes.',
                color: 'bg-primary',
              },
              {
                step: '2',
                title: 'Get Your Unique Agent Link',
                desc: 'After signup, you receive a personal referral link and a custom quoting portal with your branding.',
                color: 'bg-primary',
              },
              {
                step: '3',
                title: 'Share With Clients Who Need Insurance',
                desc: 'Send your link via text, email, or social media. Client clicks, enters their info, and VIU shops 50+ carriers for the best rate.',
                color: 'bg-primary',
              },
              {
                step: '4',
                title: 'VIU Quotes and Binds',
                desc: 'VIU\'s licensed agents handle the quoting, binding, and service. You don\'t need to do anything on the carrier side.',
                color: 'bg-primary',
              },
              {
                step: '5',
                title: 'You Earn a Commission',
                desc: 'When the policy binds, your commission is tracked automatically. Payments are processed and sent to you regularly.',
                color: 'bg-emerald-600',
              },
            ].map(s => (
              <div key={s.step} className="flex gap-4">
                <div className={`w-9 h-9 ${s.color} text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5`}>
                  {s.step}
                </div>
                <div className="pb-4 border-b border-border last:border-0 flex-1">
                  <h3 className="font-bold text-primary mb-1">{s.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">Who MIA Is Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: '🎓 Brand New Agents',
                desc: 'No carrier experience? No problem. MIA doesn\'t require production history. It\'s the fastest way to start earning commissions while you build your agency.',
                highlight: true,
              },
              {
                title: '🔄 Captive Agents Testing Waters',
                desc: 'Still at State Farm or Allstate but curious about going independent? Use MIA on the side to earn extra income and understand how the independent channel works — with zero risk.',
                highlight: false,
              },
              {
                title: '📊 Existing Agents Needing More Markets',
                desc: 'Already independent but your carriers don\'t write certain clients? Refer those accounts to MIA instead of turning them away.',
                highlight: false,
              },
              {
                title: '💼 Non-Agent Referral Partners',
                desc: 'Mortgage brokers, real estate agents, financial advisors, and auto dealers can all refer clients to MIA and earn commissions without an insurance license in many states.',
                highlight: false,
              },
            ].map(item => (
              <div key={item.title} className={`rounded-xl p-4 border ${item.highlight ? 'border-emerald-200 bg-emerald-50' : 'border-border bg-bg'}`}>
                <h3 className={`font-bold mb-2 ${item.highlight ? 'text-emerald-800' : 'text-primary'}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed ${item.highlight ? 'text-emerald-700' : 'text-text-muted'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What You Can Write */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">Lines of Business Available</h2>
          <p className="text-text-muted mb-4">MIA through VIU can quote and bind the following lines:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'Auto Insurance',
              'Home Insurance',
              'Renters Insurance',
              'Condo Insurance',
              'Motorcycle Insurance',
              'Life Insurance',
              'Umbrella Insurance',
              'Small Business (Basic)',
              'Flood Insurance',
            ].map(line => (
              <div key={line} className="flex items-center gap-2 p-3 bg-bg rounded-lg text-sm">
                <span className="text-emerald-500">✓</span>
                <span className="text-text">{line}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Commission structure */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">The Commission Structure</h2>
          <div className="bg-bg rounded-xl p-5 mb-4">
            <p className="text-sm text-text-muted leading-relaxed">
              MIA referral commissions are a percentage of the annual premium on policies that bind through your referral link. The exact rate varies by line of business and carrier, but typically ranges from <strong className="text-primary">5-15% of annual premium</strong> on new business.
            </p>
          </div>
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
            <h3 className="font-bold text-amber-800 mb-2">💡 The Real Earning Potential</h3>
            <p className="text-sm text-amber-700 mb-3">
              Consider this: the average homeowner pays $2,000-3,000/year in home insurance. A referral commission of 10% = $200-300 per client. If you refer 2 clients per week, that's $20,000+ per year in passive referral income — just from home insurance.
            </p>
            <p className="text-sm text-amber-700">
              Add auto ($150-200 average), umbrella, and life insurance — and a consistent referral flow becomes serious supplemental income, especially while you build your independent agency.
            </p>
          </div>
        </section>

        {/* MIA vs IPA Direct */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">MIA vs IPA Direct: What's the Difference?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-bold text-text-muted">Feature</th>
                  <th className="text-left py-3 pr-4 font-bold text-emerald-700">MIA Referral</th>
                  <th className="text-left py-3 font-bold text-primary">IPA Direct</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ['Experience Required', 'None', '3+ years P&C'],
                  ['Production Minimum', 'None', 'Varies by carrier'],
                  ['Carrier Appointments', 'VIU handles it', 'Your agency, direct'],
                  ['Commission %', '5-15% referral', '80% of carrier rate'],
                  ['Client Service', 'VIU handles it', 'You handle it'],
                  ['Book Ownership', 'Shared with VIU', 'Fully yours'],
                  ['Best For', 'New agents, side income', 'Established agencies'],
                  ['How to Start', 'Sign up today', 'Apply when qualified'],
                ].map(([feature, mia, ipa]) => (
                  <tr key={feature}>
                    <td className="py-3 pr-4 text-text-muted font-medium">{feature}</td>
                    <td className="py-3 pr-4 text-emerald-700">{mia}</td>
                    <td className="py-3 text-primary">{ipa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-bg rounded-xl p-4">
            <p className="text-sm text-text-muted">
              <strong className="text-primary">The IPA Path:</strong> Many agents start with MIA, build their book and income history, then graduate to IPA Direct appointments for higher commission rates and full ownership of their book. It's a natural progression — not an either/or.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-emerald-900 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-black mb-3">Ready to Start Earning?</h2>
          <p className="text-emerald-100 mb-6 text-lg">
            Join the MIA program today. Free signup. No experience required. Your referral link is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://portal.myindependentagent.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary px-8 py-3 rounded-xl font-black inline-block hover:shadow-lg transition-all text-lg"
            >
              Sign Up for MIA Free →
            </a>
            <Link href="/dashboard/programs"
              className="border border-white/30 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors inline-block">
              View All Programs
            </Link>
          </div>
          <p className="text-emerald-300/60 text-sm mt-4">Takes 5 minutes. No contract. No credit card.</p>
        </section>
      </div>
    </div>
  )
}
