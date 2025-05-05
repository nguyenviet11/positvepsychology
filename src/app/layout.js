import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Positive Psychology Official Site',
  description: 'Positive Psychology Official Site. We needs to review the security of your connection before proceeding Positive Psychology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
