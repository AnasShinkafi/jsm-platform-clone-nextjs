import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'JS Mastery',
  description: 'Created by Shinxsoft',
  other: {
    'theme-color': '#0d1117',
    'color-scheme': 'dark only',
    "twitter:image": 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' min-h-screen bg-black-100 font-poppins'>{children}</body>
    </html>
  )
}
