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
  manifest: '/manifest.json',

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
        <meta name="theme-color" content="#2563EB" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
