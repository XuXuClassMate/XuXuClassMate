import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'XuXuClassMate',
  description: 'Welcome to XuXuClassMate\'s personal website — sharing software testing insights, learning experiences, and personal growth stories.',
  keywords: ['xuxuclassmate', 'XuXuClassMate', 'QA engineer', 'software testing', 'technology blog', 'test automation', 'learning', '旭旭同学'],
  authors: [{ name: 'XuXuClassMate', url: 'https://www.xuxuclassmate.com' }],
  creator: 'XuXuClassMate',
  manifest: '/manifest.json',
  icons: {
    icon: '/images/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1677ff" />
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
