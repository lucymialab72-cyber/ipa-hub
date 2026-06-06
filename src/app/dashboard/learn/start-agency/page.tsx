import Link from 'next/link'

export default function StartAgencyPage() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm text-text-muted mb-6 flex items-center gap-2">
        <Link href="/dashboard" className="hover:text-text">Dashboard</Link>
        <span>›</span>
        <Link href="/dashboard/learn" className="hover:text-text">Learn</Link>
        <span>›</span>
        <span className="text-text">How to Start Your Agency</span>
      </nav>

      {/* Hero */}
      <div className="bg-primary rounded-2xl p-8 text-white mb-8">
        <div className="text-5xl mb-4">🏗️</div>
        <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Complete Guide</div>
        <h1 className="text-3xl font-black mb-3 leading-tight">
          How to Start an Independent Insurance Agency
        </h1>
        <p className="text-white/70 text-lg leading-relaxed">
          Everything you need to go from licensed agent to fully operational independent agency — carriers, structure, marketing, and realistic expectations.
        </p>
        <div className="flex items-center gap-4 mt-4 text-white/50 text-sm">
          <span>📖 15 min read</span>
          <span>•</span>
          <span>Updated June 2026</span>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-card rounded-xl border border-border p-6 mb-8">
        <h2 className="font-bold text-primary mb-3">What's in this guide</h2>
        <ol className="space-y-1.5">
          {[
            'Before you start: What to expect',
            'Step 1: Get your license (if you haven\'t)',
            'Step 2: Set up your business entity',
            'Step 3: Get your E&O coverage',
            'Step 4: Open a business bank account',
            'Step 5: Get your first carriers',
            'Step 6: Build your agency presence',
            'Step 7: Start generating leads',
            'Common mistakes to avoid',
            'Your IPA path forward',
          ].map((item, i) => (
            <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-accent font-bold">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      </div>

      {/* Article content */}
      <div className="prose-custom space-y-8">

        {/* Section 1 */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">Before You Start: What to Expect</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Starting an independent insurance agency is one of the best business decisions you can make — but it requires realistic expectations. Here's the honest version:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <h3 className="font-bold text-emerald-800 mb-2">✅ The Good News</h3>
              <ul className="space-y-1 text-sm text-emerald-700">
                <li>• Recurring revenue — clients pay renewals every year</li>
                <li>• Work from anywhere, set your own hours</li>
                <li>• You own your book of business (it's an asset)</li>
                <li>• Unlimited upside — no salary ceiling</li>
                <li>• High demand — insurance is never optional</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h3 className="font-bold text-amber-800 mb-2">⚠️ The Reality Check</h3>
              <ul className="space-y-1 text-sm text-amber-700">
                <li>• Year 1-2 are the hardest — expect $0-50K income</li>
                <li>• Carriers won't appoint you without track record</li>
                <li>• E&O, licensing, and overhead cost money</li>
                <li>• Prospecting is required — it won't come to you</li>
                <li>• Takes 3-5 years to build real momentum</li>
              </ul>
            </div>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
            <p className="text-sm text-primary font-medium">
              <strong>Bottom line:</strong> The income is real, but it takes time to build. Most successful agencies were nearly broke in year one and crushing it by year three. The key is surviving the early years with the right structure and carrier access.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">Step 1: Get Your License</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            If you don't have your P&C license yet, that's your starting point. Here's what the process looks like in most states:
          </p>
          <div className="space-y-3 mb-4">
            {[
              { step: '1', title: 'Choose your lines of authority', desc: 'Property & Casualty (P&C) is the most versatile. Many agents also get Life & Health (L&H) eventually, but start with P&C.' },
              { step: '2', title: 'Complete pre-licensing education', desc: 'Typically 20-40 hours of required coursework. Kaplan, ExamFX, and StateRequirement.com are popular resources. Costs $100-300.' },
              { step: '3', title: 'Pass the state exam', desc: 'Register through Pearson Vue or PSI. Score 70%+ to pass. Most people pass in 1-2 attempts. Study the practice tests heavily.' },
              { step: '4', title: 'Apply for your license', desc: 'Submit to your state\'s Department of Insurance. Includes background check, fee ($50-200), and fingerprinting in some states.' },
            ].map(s => (
              <div key={s.step} className="flex gap-4 p-4 bg-bg rounded-lg">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-semibold text-primary text-sm mb-1">{s.title}</h4>
                  <p className="text-sm text-text-muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted">
            <strong>Timeline:</strong> 2-6 weeks from start to licensed. <strong>Total cost:</strong> $200-600 depending on state.
          </p>
        </section>

        {/* Section 3 */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">Step 2: Set Up Your Business Entity</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            You don't need a complex corporate structure — but you do need to be an actual business. Here's the practical approach:
          </p>
          <div className="space-y-4">
            <div className="border border-border rounded-xl p-4">
              <h3 className="font-bold text-primary mb-2">🏢 LLC (Recommended for Most Agents)</h3>
              <p className="text-sm text-text-muted mb-2">A Limited Liability Company gives you personal liability protection and is simple to set up. Cost: $50-500 depending on state. File with your Secretary of State online.</p>
              <p className="text-xs text-text-muted font-medium">Best for: Most independent agents starting out</p>
            </div>
            <div className="border border-border rounded-xl p-4">
              <h3 className="font-bold text-primary mb-2">💼 S-Corp (For Higher Income Agents)</h3>
              <p className="text-sm text-text-muted mb-2">More tax optimization at higher income levels. Requires more bookkeeping. Generally worth it when you're making $100K+. Talk to a CPA first.</p>
              <p className="text-xs text-text-muted font-medium">Best for: Established agents with significant income</p>
            </div>
          </div>
          <div className="bg-bg rounded-xl p-4 mt-4">
            <p className="text-sm text-text-muted">
              <strong>Note:</strong> Most states require your agency entity to also hold a separate agency license (not just your individual license). Check your state's DOI requirements — you may need to file for an agency license as well.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">Step 3: Get Your E&O Coverage</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Errors & Omissions (E&O) insurance is your professional liability coverage. It's not optional — carriers won't appoint you without it, and you need it before you ever advise a client.
          </p>
          <div className="space-y-3">
            {[
              { label: 'What it covers', value: 'Claims from clients alleging you gave bad advice, made errors, or omitted important information about their coverage.' },
              { label: 'Typical cost', value: '$500-1,500/year for a new agent with minimal revenue. Goes up as your book grows.' },
              { label: 'Minimum coverage', value: 'Most carriers require at least $500K/$1M coverage. Get at least $1M/$1M if you can afford it.' },
              { label: 'Where to get it', value: 'IIABA, PIA, Utica National, RLI, or ask your aggregator — most include discounted E&O as part of membership.' },
            ].map(item => (
              <div key={item.label} className="flex gap-3 p-3 bg-bg rounded-lg">
                <span className="text-accent font-bold text-sm w-36 flex-shrink-0">{item.label}</span>
                <p className="text-sm text-text-muted">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">Step 4: Open a Business Bank Account</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Keep your business finances completely separate from personal. This is not negotiable — mixing them creates legal and tax problems.
          </p>
          <ul className="space-y-2 text-sm text-text-muted">
            <li className="flex gap-2"><span className="text-accent">✓</span> Open a business checking account (Chase, Bank of America, local credit union)</li>
            <li className="flex gap-2"><span className="text-accent">✓</span> Get a business credit card (build business credit, track expenses)</li>
            <li className="flex gap-2"><span className="text-accent">✓</span> Set up bookkeeping software (Wave is free, QuickBooks is $30/month)</li>
            <li className="flex gap-2"><span className="text-accent">✓</span> Hire a CPA before your first full year — worth every penny</li>
          </ul>
        </section>

        {/* Section 6 - Carriers */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-2">Step 5: Get Your First Carriers</h2>
          <p className="text-accent font-semibold text-sm mb-4">This is where most new agents hit a wall — and where IPA can help.</p>
          <p className="text-text-muted leading-relaxed mb-4">
            Carriers want production history before they'll appoint you directly. If you're brand new, most carriers will say no. This is the biggest challenge new agents face.
          </p>

          <h3 className="font-bold text-primary mb-3">Your Options:</h3>
          <div className="space-y-4">
            <div className="border border-blue-200 bg-blue-50 rounded-xl p-4">
              <h4 className="font-bold text-blue-800 mb-1">Option A: Join an Aggregator (Recommended)</h4>
              <p className="text-sm text-blue-700 mb-2">
                Aggregators like IPA give new agents access to their carrier appointments. You write business under their umbrella while you build your history. This is the fastest legal path to market access.
              </p>
              <p className="text-xs text-blue-600 font-medium">Best for: Most new agents</p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-4">
              <h4 className="font-bold text-emerald-800 mb-1">Option B: MIA Referral Program (Easiest Start)</h4>
              <p className="text-sm text-emerald-700 mb-2">
                No production minimum. No experience required. Share a link, VIU quotes and binds the policy, you earn a referral commission on every bind. Instant access to 50+ carriers on day one.
              </p>
              <p className="text-xs text-emerald-600 font-medium">Best for: Brand new agents who need immediate income</p>
              <Link href="/dashboard/learn/mia-referral" className="text-xs font-bold text-emerald-800 underline mt-1 inline-block">
                Learn more about MIA →
              </Link>
            </div>
            <div className="border border-border rounded-xl p-4">
              <h4 className="font-bold text-primary mb-1">Option C: Direct Appointments (Long Road)</h4>
              <p className="text-sm text-text-muted">
                Apply directly to carriers. Most require 2-3 years of experience and production history. Some entry-level carriers (Openly, Hippo, Demotech companies) are more accessible to new agents.
              </p>
              <p className="text-xs text-text-muted font-medium">Best for: Agents with existing book from captive career</p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">Step 6: Build Your Agency Presence</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            You don't need an expensive office or a fancy website to start. You need to be findable and look professional.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Professional email', desc: 'yourname@youragency.com via Google Workspace ($6/mo). No Gmail or Yahoo.', priority: 'Day 1' },
              { title: 'Google Business Profile', desc: 'Free. Shows up when people search for insurance in your area. Critical for local SEO.', priority: 'Day 1' },
              { title: 'Simple website', desc: 'Squarespace or WordPress. 1-2 pages is fine to start. You just need to exist online.', priority: 'Week 1' },
              { title: 'LinkedIn profile', desc: 'Professional headshot, clear description, connect with everyone you know. B2B gold.', priority: 'Week 1' },
              { title: 'Business cards', desc: 'Vistaprint, $20. Still works. Still relevant. Hand them to everyone.', priority: 'Week 2' },
              { title: 'Agency management system', desc: 'HawkSoft, Applied Epic, or NowCerts. Keeps your policies and clients organized.', priority: 'Month 1' },
            ].map(item => (
              <div key={item.title} className="flex gap-3 p-3 bg-bg rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm text-primary">{item.title}</span>
                    <span className="text-xs bg-accent/20 text-accent-dark px-1.5 py-0.5 rounded font-medium">{item.priority}</span>
                  </div>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8 */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">Step 7: Start Generating Leads</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            The honest truth: prospecting is the hardest part of the job. Here are the channels that actually work for new agencies:
          </p>
          <div className="space-y-3">
            {[
              { channel: 'Your network', desc: 'Start with everyone you know. Tell family, friends, former coworkers. First 20-30 clients often come from personal network.', effort: 'Free' },
              { channel: 'Referral partnerships', desc: 'Mortgage loan officers, real estate agents, car dealers, and accountants all refer clients. Build 5-10 real partnerships.', effort: 'Free' },
              { channel: 'Google reviews', desc: 'Ask every client for a Google review. 10-20 reviews puts you on the map for local searches.', effort: 'Free' },
              { channel: 'Social media', desc: 'LinkedIn for commercial. Facebook/Instagram for personal lines. Consistent content builds trust over time.', effort: 'Free ($100/mo for ads)' },
              { channel: 'Purchased leads', desc: 'EverQuote, MediaAlpha, Openhouse. Expensive ($20-80/lead) but fast. Controversial — works for some, not for others.', effort: '$500+/mo' },
            ].map(item => (
              <div key={item.channel} className="flex gap-3 p-3 border border-border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-primary">{item.channel}</span>
                    <span className="text-xs text-accent font-medium">{item.effort}</span>
                  </div>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">Common Mistakes to Avoid</h2>
          <div className="space-y-3">
            {[
              { mistake: 'Signing a bad aggregator contract', fix: 'Read every line. Understand ownership, termination, and non-compete clauses before signing anything.' },
              { mistake: 'Chasing every market', fix: 'Focus on 2-3 niches and master them. Trying to write everything leads to writing nothing well.' },
              { mistake: 'Skipping E&O', fix: 'Don\'t risk it. One claim can end your agency. E&O is your seatbelt.' },
              { mistake: 'Overinvesting in tech too early', fix: 'Simple tools first. You don\'t need a $500/month CRM on day one.' },
              { mistake: 'Not tracking production', fix: 'Know your numbers: policies in force, premium volume, loss ratio. Data helps you make decisions.' },
              { mistake: 'Going it alone', fix: 'Join an association (IIABA, PIA) or aggregator that provides support. You don\'t have to figure everything out yourself.' },
            ].map(item => (
              <div key={item.mistake} className="flex gap-3 p-3 bg-bg rounded-lg">
                <span className="text-red-500 flex-shrink-0 mt-0.5">✗</span>
                <div>
                  <p className="font-semibold text-sm text-text">{item.mistake}</p>
                  <p className="text-xs text-text-muted mt-0.5"><strong className="text-emerald-600">Fix:</strong> {item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-black mb-3">Ready to Take the Next Step?</h2>
          <p className="text-white/70 mb-6 text-lg">
            IPA has programs designed specifically for agents at every stage. Whether you need instant market access or direct carrier appointments, we've got a path for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/dashboard/learn/mia-referral"
              className="btn-gold px-6 py-3 rounded-xl font-bold inline-block hover:shadow-lg transition-all">
              Start with MIA (Zero Requirements) →
            </Link>
            <Link href="/dashboard/programs"
              className="border border-white/30 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors inline-block">
              Explore All Programs
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
