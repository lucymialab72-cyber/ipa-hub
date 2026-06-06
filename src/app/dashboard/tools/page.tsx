import Link from 'next/link'

const TOOLS = [
  {
    icon: '📊',
    title: 'Book of Business Evaluator',
    desc: 'Get an estimated valuation for your book of business. Understand what it\'s worth today and how to increase it from 2X to 5X premium.',
    status: 'coming-soon',
    preview: 'Enter your premium volume, loss ratio, lines of business, and client retention — get an instant estimated valuation with growth recommendations.',
    features: ['Instant book valuation estimate', 'Tips to increase value 2X → 5X', 'Buyer readiness checklist', 'IPA acquisition interest form'],
  },
  {
    icon: '🔬',
    title: 'PLR (Profitability Loss Ratio) Overview',
    desc: 'Learn how the 2% of customers causing 50% of claims are silently destroying your profitability — and what smart agencies do about it.',
    status: 'available',
    href: 'https://ipa-plr-engine.vercel.app',
    preview: 'The PLR Engine is a proprietary IPA tool for members. This section gives you an educational overview of the concept.',
    features: ['What PLR is and why it matters', 'How to identify problem accounts', 'Carrier impact on your agency', 'Preview of the full PLR Engine'],
  },
  {
    icon: '🔄',
    title: 'Reverse Audit Tool',
    desc: 'Are you getting paid correctly by your carriers? Most agencies have never audited their commission statements — and most find errors.',
    status: 'available',
    href: 'https://ipa-reverse-audit.vercel.app',
    preview: 'The Reverse Audit tool helps agencies verify they\'re receiving correct commissions from carriers.',
    features: ['Commission verification methodology', 'Common carrier payment errors', 'How to request corrections', 'Access to the full Reverse Audit tool'],
  },
  {
    icon: '🤖',
    title: 'AI Tools for Insurance Agents',
    desc: 'How AI is changing insurance operations. Tools IPA uses and recommends, plus what\'s coming in AI-powered quoting and servicing.',
    status: 'coming-soon',
    preview: 'Overview of AI tools transforming insurance agencies: quoting automation, servicing AI, marketing tools, and the Bolt AI quoting platform.',
    features: ['AI quoting tools overview', 'Servicing automation options', 'Marketing AI tools', 'IPA\'s AI roadmap'],
  },
]

export default function ToolsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-primary mb-2">🛠️ Tools</h1>
        <p className="text-text-muted text-lg">
          Professional tools that used to cost thousands — free for IPA Hub members.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {TOOLS.map(tool => (
          <div key={tool.title} className={`bg-card rounded-2xl border p-6 ${
            tool.status === 'coming-soon' ? 'border-border opacity-80' : 'border-primary/30'
          }`}>
            <div className="flex items-start justify-between gap-3 mb-4">
              <span className="text-4xl">{tool.icon}</span>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${
                tool.status === 'coming-soon'
                  ? 'bg-gray-100 text-gray-500'
                  : 'bg-emerald-100 text-emerald-700'
              }`}>
                {tool.status === 'coming-soon' ? 'Coming Soon' : 'Available'}
              </span>
            </div>
            <h2 className="text-xl font-black text-primary mb-2">{tool.title}</h2>
            <p className="text-text-muted text-sm leading-relaxed mb-4">{tool.desc}</p>

            <div className="bg-bg rounded-xl p-4 mb-4">
              <p className="text-xs text-text-muted leading-relaxed">{tool.preview}</p>
            </div>

            <ul className="space-y-1.5 mb-5">
              {tool.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-text-muted">
                  <span className="text-accent">✓</span> {f}
                </li>
              ))}
            </ul>

            {tool.status === 'available' && tool.href ? (
              <a href={tool.href} target="_blank" rel="noopener noreferrer"
                className="btn-gold px-5 py-2.5 rounded-xl font-bold text-sm inline-block hover:shadow-lg transition-all">
                Access Tool →
              </a>
            ) : (
              <div className="flex items-center gap-2 text-sm text-text-muted">
                <span>⏳</span>
                <span>Notify me when available</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Commission Intelligence */}
      <div className="mt-6 bg-card rounded-2xl border border-border p-6">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💹</span>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-black text-primary">Commission Intelligence</h2>
              <span className="text-xs bg-primary text-white font-bold px-2.5 py-1 rounded-full">IPA Members</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-3">
              Advanced commission analytics for IPA member agencies. Track your commissions across carriers, spot discrepancies, and optimize your earning mix.
            </p>
            <a href="https://ipa-crm.vercel.app" target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:text-accent transition-colors">
              Access via IPA CRM →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
