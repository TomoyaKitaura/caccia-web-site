import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caccia - Official Website',
  description: 'Cacciaロックバンドの公式ウェブサイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen bg-band-secondary text-band-accent">
          {children}
        </div>
      </body>
    </html>
  )
}
