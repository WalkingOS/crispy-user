import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CrispyUser',
  description: 'Lets fetch a crispy user',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative h-full bg-gray-100 antialiased`}
      >
        <Header />
        <div className="container pt-12">{children}</div>
      </body>
    </html>
  )
}
