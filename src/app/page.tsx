'use client'
import Link from 'next/link'

const VALUE_PROPS = [
  {
    icon: '📚',
    title: 'Free Education Hub',
    desc: 'Guides, playbooks, and insider knowledge for agents at every stage — from first license to multi-million dollar book.'
  },
  {
    icon: '🔗',
    title: 'Instant Market Access',
    desc: 'Access 50+ carriers on day one through MIA. No production minimums. No experience required. Start earning immediately.'
  },
  {
    icon: '🛠️',
    title: 'Professional Tools',
    desc: 'Book valuations, loss ratio analysis, reverse commission audits — tools that used to cost thousands, free to Hub members.'
  },
  {
    icon: '📈',
    title: 'Clear Growth Paths',
    desc: 'Whether you\'re just licensed or running a 7-figure agency, IPA has a program that fits exactly where you are right now.'
  },
  {
    icon: '🎓',
    title: '48 Hours of Free CE',
    desc: 'Complete CE credits while learning how the independent channel actually works. Both personal and commercial lines available.'
  },
  {
    icon: '💬',
    title: '24/7 Expert Support',
    desc: 'AI-powered chatbot answers your questions instantly. Schedule a real call when you need it. We\'re here both ways.'
  }
]

const AGENT_TYPES = [
  { emoji: '🎓', label: 'New Agents', desc: 'Just got licensed and need everything — carriers, marketing, business setup, and a clear roadmap.' },
  { emoji: '🔄', label: 'Captive Agents', desc: 'Thinking about leaving State Farm, Allstate, or Farmers? Get the honest facts before you decide.' },
  { emoji: '📊', label: 'Agency Owners', desc: 'Already independent but want better markets, commercial access, or tools to maximize your book value.' },
  { emoji: '🏁', label: 'Retiring Agents', desc: 'Planning your exit? Understand what your book is worth and how to maximize it before you sell.' },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight">IPA</span>
            <span className="text-accent font-black text-xl">Hub</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-white/70 hover:text-white text-sm font-medium transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className="btn-gold px-5 py-2 rounded-lg text-sm font-bold transition-all hover:shadow-lg">
              Get Free Access
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, #c9a84c 0%, transparent 60%), radial-gradient(circle at 70% 50%, #1a3260 0%, transparent 60%)'
        }} />
        <div className="max-w-5xl mx-auto px-4 text-center relative">
          <div className="inline-block bg-accent/20 text-accent border border-accent/30 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            Free For Every Independent Agent
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            The Independent Agent's<br />
            <span className="text-accent">Central Resource Hub</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            Education, market access, professional tools, and growth programs — all in one place. 
            No commitment. No contracts. Just value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup" className="btn-gold px-8 py-4 rounded-xl text-lg font-bold w-full sm:w-auto text-center hover:shadow-xl transition-all">
              Create Free Account →
            </Link>
            <Link href="/login" className="border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/10 transition-colors w-full sm:w-auto text-center">
              Sign In
            </Link>
          </div>
          <p className="text-white/40 text-sm mt-6">No credit card. No contract. Just access.</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary-dark py-6 text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '50+', label: 'Carrier Partners' },
              { num: '48', label: 'Free CE Hours' },
              { num: '50', label: 'States Covered' },
              { num: '100%', label: 'Free to Join' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-black text-accent">{s.num}</div>
                <div className="text-white/60 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-bg">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center text-primary mb-3">Built for Every Agent, Every Stage</h2>
          <p className="text-text-muted text-center mb-10 text-lg">One platform — four different paths to help you win.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENT_TYPES.map(t => (
              <div key={t.label} className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{t.emoji}</div>
                <h3 className="font-bold text-primary text-lg mb-2">{t.label}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center text-primary mb-3">Everything You Need to Thrive</h2>
          <p className="text-text-muted text-center mb-10 text-lg">One login. Six powerful sections. Zero cost.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUE_PROPS.map(p => (
              <div key={p.title} className="flex gap-4 p-6 rounded-2xl border border-border hover:border-accent/50 transition-colors bg-bg">
                <div className="text-3xl flex-shrink-0">{p.icon}</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{p.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside Preview */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-3">Inside the Hub</h2>
          <p className="text-white/60 text-center mb-10 text-lg">A sneak peek at what's waiting for you.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                section: '📚 Learn',
                items: ['How to Start an Independent Agency', 'Understanding Aggregators (Honest)', 'The Captive Agent\'s Escape Plan', 'Contract Academy', 'Marketing 101 for Insurance Agents']
              },
              {
                section: '🔗 Programs',
                items: ['IPA Direct Appointments (80/20 split)', 'MIA Referral Program (Instant Carriers)', 'Commercial Lines Program', 'Retail Producer Waitlist', 'COVU Servicing Partnership']
              },
              {
                section: '🛠️ Tools & Training',
                items: ['Book of Business Evaluator', 'PLR Concept Education', 'Reverse Audit Overview', '48-Hour CE Program', 'Expert Support + Booking']
              }
            ].map(col => (
              <div key={col.section} className="bg-primary-light rounded-2xl p-6 border border-white/10">
                <h3 className="font-bold text-accent mb-4 text-lg">{col.section}</h3>
                <ul className="space-y-2">
                  {col.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-white/70 text-sm">
                      <span className="text-accent mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Quote */}
      <section className="py-16 bg-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">&ldquo;</div>
          <blockquote className="text-2xl font-medium text-primary leading-relaxed mb-6">
            We're just like this badass experienced insurance resource center for market access and great information and tools and modern trends. We're the ones just pumping out value and then people will come.
          </blockquote>
          <cite className="text-text-muted font-medium">— Dave O'Reilly, Founder, Insurance Pro Agencies</cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Build Something Real?</h2>
          <p className="text-white/70 text-lg mb-8">
            Join thousands of independent agents using IPA Hub to grow their business. It's free. It's comprehensive. It's yours.
          </p>
          <Link href="/signup" className="btn-gold px-10 py-4 rounded-xl text-xl font-black inline-block hover:shadow-xl transition-all">
            Get Free Access Now →
          </Link>
          <p className="text-white/40 text-sm mt-4">Takes 60 seconds. No credit card required.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white/50 py-8 text-center text-sm">
        <p className="font-medium text-white/70 mb-1">Insurance Pro Agencies — IPA Hub</p>
        <p>© {new Date().getFullYear()} Insurance Pro Agencies. All rights reserved.</p>
        <p className="mt-2">
          <a href="https://insuranceproagencies.com" className="hover:text-accent transition-colors">insuranceproagencies.com</a>
        </p>
      </footer>
    </div>
  )
}
