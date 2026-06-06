export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-primary mb-2">💬 Support</h1>
        <p className="text-text-muted text-lg">
          Get answers fast — AI-powered chatbot, expert calls, or browse the FAQ.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">

        {/* AI Chatbot */}
        <div className="bg-card rounded-2xl border-2 border-primary/30 p-6">
          <div className="text-4xl mb-4">🤖</div>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-xl font-black text-primary">AI Assistant</h2>
            <span className="text-xs bg-amber-100 text-amber-700 font-bold px-2.5 py-1 rounded-full">Coming Soon</span>
          </div>
          <p className="text-text-muted text-sm leading-relaxed mb-4">
            24/7 AI-powered assistant that knows everything about IPA programs, carrier requirements, aggregator contracts, and agency operations. Get instant answers without waiting for a human.
          </p>
          <div className="bg-bg rounded-xl p-4 mb-4">
            <p className="text-xs text-text-muted font-medium mb-2">The AI will be able to answer:</p>
            <ul className="space-y-1 text-xs text-text-muted">
              {[
                'What carriers does IPA have access to in my state?',
                'How does the MIA program commission structure work?',
                'What\'s the difference between IPA Direct and MIA?',
                'How do I read an aggregator contract?',
                'When am I eligible for IPA Direct appointments?',
              ].map(q => (
                <li key={q} className="flex items-start gap-1.5">
                  <span className="text-accent flex-shrink-0">›</span> {q}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm text-text-muted flex items-center gap-2">
            <span>⏳</span> Launching soon — check back shortly
          </div>
        </div>

        {/* Schedule a Call */}
        <div className="bg-card rounded-2xl border-2 border-accent/50 p-6">
          <div className="text-4xl mb-4">📞</div>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-xl font-black text-primary">Schedule a Discovery Call</h2>
            <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-2.5 py-1 rounded-full">Available Now</span>
          </div>
          <p className="text-text-muted text-sm leading-relaxed mb-4">
            Talk directly with an IPA expert. We'll review your situation, answer your questions, and help you figure out which program (if any) is the right fit. Zero pressure.
          </p>
          <div className="bg-bg rounded-xl p-4 mb-5">
            <p className="text-xs text-text-muted font-medium mb-2">Good for:</p>
            <ul className="space-y-1 text-xs text-text-muted">
              <li className="flex gap-1.5"><span className="text-accent">✓</span> Complex situations that need a human conversation</li>
              <li className="flex gap-1.5"><span className="text-accent">✓</span> Evaluating IPA Direct vs MIA for your situation</li>
              <li className="flex gap-1.5"><span className="text-accent">✓</span> Commercial lines program qualification</li>
              <li className="flex gap-1.5"><span className="text-accent">✓</span> Existing agency looking to optimize or transition</li>
            </ul>
          </div>
          <a
            href="https://cal.com/daveoreilly/ipa-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-6 py-3 rounded-xl font-bold text-sm inline-block hover:shadow-lg transition-all w-full text-center"
          >
            Book a Free 20-Minute Call →
          </a>
          <p className="text-xs text-text-muted text-center mt-2">No sales pressure. Just clarity.</p>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-card rounded-2xl border border-border p-6 mb-6">
        <h2 className="text-xl font-black text-primary mb-5">📋 Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Do I need experience to join IPA?',
              a: 'For IPA Direct appointments, yes — we require 3+ years P&C production experience. However, the MIA Referral Program has zero experience requirements. Most new agents start with MIA and graduate to IPA Direct when they\'re ready.'
            },
            {
              q: 'How is the 80/20 split structured?',
              a: 'On IPA Direct appointments, you receive 80% of the carrier commission and IPA retains 20%. For example, if the carrier pays 12% commission on a $1,000 premium ($120 total), you receive $96. Carrier contingency bonuses and profit sharing are also passed through to members.'
            },
            {
              q: 'Do I own my book of business?',
              a: 'Yes — with IPA Direct appointments, your carrier relationships and book of business are yours. Direct appointments mean the carrier appoints YOUR agency, not IPA\'s. If you ever leave IPA, your appointments stay with you. This is a key differentiator from sub-code aggregators.'
            },
            {
              q: 'What states does IPA operate in?',
              a: 'IPA has expanded to all 50 states for the MIA referral program. For IPA Direct appointments, coverage varies by carrier. Some of our 50+ carrier partners have limited state availability. We can confirm specific carrier availability in your state during a discovery call.'
            },
            {
              q: 'How quickly can I start writing business?',
              a: 'Through MIA, you can start referring clients and earning commissions the same day you sign up. For IPA Direct, the onboarding and appointment process typically takes 2-4 weeks depending on the carriers.'
            },
            {
              q: 'Is there a fee to join IPA Hub?',
              a: 'IPA Hub membership is free. There are no fees to access the education content, tools overview, or support resources. IPA Direct program has its own fee structure which we discuss during the discovery call process. MIA has no fees.'
            },
          ].map(({ q, a }) => (
            <details key={q} className="border border-border rounded-xl p-4 group">
              <summary className="font-semibold text-primary cursor-pointer flex items-center justify-between gap-3 text-sm list-none">
                {q}
                <span className="text-text-muted text-lg transition-transform group-open:rotate-180 flex-shrink-0">▾</span>
              </summary>
              <p className="text-sm text-text-muted mt-3 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Contact info */}
      <div className="bg-primary rounded-2xl p-6 text-white">
        <h2 className="text-lg font-black mb-3">Direct Contact</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-white/50 text-xs font-medium mb-1">PHONE</p>
            <p className="font-bold text-accent">(844) 569-7272</p>
            <p className="text-white/50 text-xs">Mon-Fri business hours</p>
          </div>
          <div>
            <p className="text-white/50 text-xs font-medium mb-1">WEBSITE</p>
            <a href="https://insuranceproagencies.com" target="_blank" rel="noopener noreferrer"
              className="font-bold text-accent hover:underline">
              insuranceproagencies.com
            </a>
            <p className="text-white/50 text-xs">Programs + Applications</p>
          </div>
          <div>
            <p className="text-white/50 text-xs font-medium mb-1">BOOK A CALL</p>
            <a href="https://cal.com/daveoreilly/ipa-call" target="_blank" rel="noopener noreferrer"
              className="font-bold text-accent hover:underline">
              cal.com/daveoreilly/ipa-call
            </a>
            <p className="text-white/50 text-xs">Free 20-min consultation</p>
          </div>
        </div>
      </div>
    </div>
  )
}
