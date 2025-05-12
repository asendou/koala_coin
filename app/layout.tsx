import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Koala On SOL',
  description: 'Cute. Cuddly. Chaotic. Built on Solana.',
  generator: 'koala',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
