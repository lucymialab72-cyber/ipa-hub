import Link from 'next/link'

export default function UnderstandingAggregatorsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <nav className="text-sm text-text-muted mb-6 flex items-center gap-2">
        <Link href="/dashboard" className="hover:text-text">Dashboard</Link>
        <span>›</span>
        <Link href="/dashboard/learn" className="hover:text-text">Learn</Link>
        <span>›</span>
        <span className="text-text">Understanding Aggregators</span>
      </nav>

      <div className="bg-primary rounded-2xl p-8 text-white mb-8">
        <div className="text-5xl mb-4">🔍</div>
        <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Honest Education</div>
        <h1 className="text-3xl font-black mb-3 leading-tight">
          Understanding Aggregators: The Honest Guide
        </h1>
        <p className="text-white/70 text-lg leading-relaxed">
          What aggregators are, how they actually work, major players compared, red flags to watch for, and exactly where IPA fits — without the sales pitch.
        </p>
        <div className="flex items-center gap-4 mt-4 text-white/50 text-sm">
          <span>📖 12 min read</span>
          <span>•</span>
          <span>Updated June 2026</span>
        </div>
      </div>

      <div className="space-y-8">

        {/* What is an aggregator */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">What Is an Insurance Aggregator?</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            An insurance aggregator (sometimes called a cluster, network, or alliance) is a company that holds direct carrier appointments and allows independent agents to write business through those appointments.
          </p>
          <p className="text-text-muted leading-relaxed mb-4">
            Think of it like a franchise system, but for carrier access. The aggregator does the heavy lifting to get appointed with carriers. You plug in under their umbrella and write business.
          </p>
          <div className="bg-bg rounded-xl p-5">
            <h3 className="font-bold text-primary mb-3">Why aggregators exist:</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex gap-2"><span className="text-accent">›</span> Carriers want large, consolidated production — not a thousand tiny agencies writing $50K each</li>
              <li className="flex gap-2"><span className="text-accent">›</span> Individual agents can't meet carrier production minimums on their own</li>
              <li className="flex gap-2"><span className="text-accent">›</span> Aggregators pool production to hit tier thresholds → better commission rates → everyone wins</li>
              <li className="flex gap-2"><span className="text-accent">›</span> Carriers reduce their administrative burden by dealing with one entity instead of hundreds</li>
            </ul>
          </div>
        </section>

        {/* How the money works */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">How the Money Works</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Understanding commission flow is critical before you sign with any aggregator. Here's the simplified version:
          </p>
          <div className="bg-bg rounded-xl p-5 mb-4">
            <div className="flex flex-col md:flex-row items-center gap-3 text-center text-sm font-medium">
              <div className="bg-primary text-white rounded-xl p-3 flex-1">
                <div className="text-2xl mb-1">🏢</div>
                Carrier pays 12-15% commission on premium
              </div>
              <div className="text-text-muted text-xl">→</div>
              <div className="bg-accent/20 text-accent-dark rounded-xl p-3 flex-1">
                <div className="text-2xl mb-1">🏗️</div>
                Aggregator keeps 2-4% (their cut)
              </div>
              <div className="text-text-muted text-xl">→</div>
              <div className="bg-emerald-100 text-emerald-800 rounded-xl p-3 flex-1">
                <div className="text-2xl mb-1">👤</div>
                Agent gets 8-13% on their book
              </div>
            </div>
          </div>
          <p className="text-text-muted text-sm mb-4">
            The aggregator's value proposition to carriers is volume. The more agents they have, the more premium they write, the better their commission tiers and contingency bonuses — which they pass some of back to agents.
          </p>
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
            <p className="text-sm text-amber-800">
              <strong>⚠️ Important:</strong> Not all aggregators pass contingency bonuses to agents. Some keep them entirely. IPA passes them to agents. Always ask this question before signing.
            </p>
          </div>
        </section>

        {/* Major players */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">Major Aggregators Compared</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            The landscape is crowded. Here's an honest look at the major players:
          </p>
          <div className="space-y-4">
            {[
              {
                name: 'SIAA',
                type: 'Large Alliance',
                pros: ['Huge carrier lineup', 'Direct appointments in some states', 'Strong brand recognition'],
                cons: ['High production minimums', 'Long-term commitment required', 'Variable support quality by region'],
                split: '80-90%',
                minProd: 'Varies by market',
              },
              {
                name: 'Smart Choice',
                type: 'Network/Cluster',
                pros: ['Large agency count', 'Technology tools', 'Nationwide presence'],
                cons: ['Mostly sub-code appointments', 'Contract terms can be complex', 'Mixed reviews on support'],
                split: '85%',
                minProd: 'Low',
              },
              {
                name: 'First Choice Agent Network',
                type: 'Network',
                pros: ['No production minimums', 'Low cost to join', 'Good for new agents'],
                cons: ['Sub-code appointments', 'Fewer carrier options', 'Less competitive on larger accounts'],
                split: '80-85%',
                minProd: 'None',
              },
              {
                name: 'IPA (That\'s Us)',
                type: 'Aggregator',
                pros: ['80/20 split on direct appointments', '50+ carrier partners', 'Commercial + personal lines', 'MIA path for new agents', 'Profit sharing passed to agents', 'No production minimums on MIA'],
                cons: ['3-year experience for IPA Direct', 'Not yet in every state for all programs'],
                split: '80%',
                minProd: 'IPA Direct: 3yr exp. MIA: Zero',
              },
            ].map(agg => (
              <div key={agg.name} className={`border rounded-xl p-5 ${agg.name === 'IPA (That\'s Us)' ? 'border-accent bg-accent/5' : 'border-border'}`}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-primary">{agg.name}</h3>
                    <span className="text-xs text-text-muted">{agg.type}</span>
                  </div>
                  <div className="text-right text-xs">
                    <div className="font-bold text-primary">{agg.split}</div>
                    <div className="text-text-muted">agent split</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-emerald-700 mb-1">Pros</p>
                    <ul className="space-y-0.5">
                      {agg.pros.map(p => <li key={p} className="text-xs text-text-muted flex gap-1"><span className="text-emerald-500">+</span>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-700 mb-1">Cons</p>
                    <ul className="space-y-0.5">
                      {agg.cons.map(c => <li key={c} className="text-xs text-text-muted flex gap-1"><span className="text-red-400">-</span>{c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contract structures */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">Contract Structures Explained</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            Not all aggregator appointments are equal. The structure of your appointment matters enormously.
          </p>
          <div className="space-y-4">
            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-4">
              <h3 className="font-bold text-emerald-800 mb-2">✅ Direct Appointment (Best)</h3>
              <p className="text-sm text-emerald-700 mb-2">
                The carrier appoints YOUR agency directly. You have a relationship with the carrier. If you ever leave the aggregator, you keep your appointments. Your book is fully portable.
              </p>
              <p className="text-xs text-emerald-600 font-medium">IPA Direct works this way — your appointments are yours.</p>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
              <h3 className="font-bold text-amber-800 mb-2">⚠️ Sub-Code Appointment (Common but Weaker)</h3>
              <p className="text-sm text-amber-700 mb-2">
                The aggregator holds the appointment and you write under their code. Your book technically lives in their system. If you leave, the carrier relationship goes with the aggregator — not you.
              </p>
              <p className="text-xs text-amber-600 font-medium">Common with Smart Choice, First Choice, and many smaller clusters.</p>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-xl p-4">
              <h3 className="font-bold text-red-800 mb-2">🚫 Ownership Trap (Red Flag)</h3>
              <p className="text-sm text-red-700">
                Some contracts include clauses that give the aggregator ownership of your book, or right of first refusal when you want to sell. These are predatory. Walk away.
              </p>
            </div>
          </div>
        </section>

        {/* Red flags */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">🚩 Red Flags in Aggregator Contracts</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            These are the things that hurt agents long-term. Read every word before you sign:
          </p>
          <div className="space-y-3">
            {[
              { flag: 'Non-compete clauses', detail: 'Prevents you from joining another aggregator or writing directly for X years after leaving. Some are legitimate (6 months), some are predatory (5 years).' },
              { flag: 'Book ownership claims', detail: 'Any language suggesting the aggregator owns or co-owns your book of business. Your book is yours — period.' },
              { flag: 'Production clawbacks', detail: 'If you miss production minimums, they claw back previously earned commissions. Not always wrong, but understand the terms.' },
              { flag: 'Lock-in without exit path', detail: 'Multi-year lock-in with no exit provisions. Life changes. You need a clear, reasonable exit path.' },
              { flag: 'Vague contingency language', detail: '"May share contingency bonuses" is very different from "will share contingency bonuses at these tiers." Get specific numbers in writing.' },
              { flag: 'No direct appointment path', detail: 'If the aggregator can never lead to direct appointments, they\'re renting you access forever. Look for a clear graduation path.' },
            ].map(item => (
              <div key={item.flag} className="flex gap-3 p-3 bg-bg rounded-lg">
                <span className="text-red-500 flex-shrink-0 mt-0.5 text-lg">🚩</span>
                <div>
                  <p className="font-semibold text-sm text-text">{item.flag}</p>
                  <p className="text-xs text-text-muted mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Where IPA fits */}
        <section className="bg-card rounded-2xl border border-border p-7">
          <h2 className="text-2xl font-black text-primary mb-4">Where IPA Fits (Honest Positioning)</h2>
          <p className="text-text-muted leading-relaxed mb-4">
            We're not going to pretend IPA is the only right answer. Here's the honest version of what we offer and who it's right for:
          </p>
          <div className="space-y-4">
            <div className="border border-accent bg-accent/5 rounded-xl p-5">
              <h3 className="font-bold text-primary mb-3">IPA is a great fit if:</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex gap-2"><span className="text-accent">✓</span> You have 3+ years P&C experience and want direct appointments with an 80/20 split</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> You want access to commercial lines alongside personal lines</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> You want profit sharing that actually gets passed down to you</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> You're a new agent who wants to start earning while you build history (MIA path)</li>
                <li className="flex gap-2"><span className="text-accent">✓</span> You value education, tools, and support — not just carrier access</li>
              </ul>
            </div>
            <div className="border border-border rounded-xl p-5">
              <h3 className="font-bold text-primary mb-3">IPA might not be right if:</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex gap-2"><span className="text-red-400">✗</span> You're already writing $3M+ and have strong direct relationships — you may not need an aggregator at all</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> You're looking for a captive-style arrangement where someone tells you exactly what to sell</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> You want a large group of captive-style agents under your agency model (different program)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-black mb-3">See Our Programs In Detail</h2>
          <p className="text-white/70 mb-6 text-lg">
            Now that you understand how aggregators work, explore what IPA specifically offers — with full transparency on every program.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/dashboard/programs"
              className="btn-gold px-6 py-3 rounded-xl font-bold inline-block hover:shadow-lg transition-all">
              Explore IPA Programs →
            </Link>
            <Link href="/dashboard/learn/mia-referral"
              className="border border-white/30 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors inline-block">
              Learn About MIA
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
