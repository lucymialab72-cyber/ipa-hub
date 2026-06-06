import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IPA Hub — The Independent Agent\'s Resource Center',
  description: 'Free resources, tools, and programs for independent insurance agents. Education, market access, and growth — all in one place.',
  openGraph: {
    title: 'IPA Hub — The Independent Agent\'s Resource Center',
    description: 'Free resources, tools, and programs for independent insurance agents.',
    type: 'website',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
