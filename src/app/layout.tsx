import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'XuXu - Senior Test Engineer & Automation Expert',
  description: 'Exploring cutting-edge testing technologies, from automated testing to test development. Currently focused on Web3 testing and Kubernetes.',
  keywords: ['Test Engineer', 'Automation', 'QA', 'Kubernetes', 'Web3', 'Testing'],
  authors: [{ name: 'XuXu', url: 'https://www.xuxuclassmate.com' }],
  creator: 'XuXu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.xuxuclassmate.com',
    title: 'XuXu - Senior Test Engineer & Automation Expert',
    description: 'Exploring cutting-edge testing technologies, from automated testing to test development.',
    siteName: 'XuXu Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'XuXu Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XuXu - Senior Test Engineer & Automation Expert',
    description: 'Exploring cutting-edge testing technologies.',
    creator: '@xuxuclassmate',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  manifest: '/manifest.json',
  themeColor: '#2563EB',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
