import { Metadata } from 'next'

import { Geist } from 'next/font/google'

import { ThemeProvider } from '@/hooks/useAppTheme'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'DateTime Dojo',
  keywords: [
    'date',
    'time',
    'convert dates online',
    'calendar',
    'time converter',
    'online date formatting',
    'date converter',
    'date time converter',
    'date string converter',
    'date time conversion tool',
    'date format converter',
    'date format switcher',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'DateTime Dojo',
    description: 'Convert dates into different formats',
    url: 'https://datetimedojo.com',
    images: [
      {
        url: 'https://res.cloudinary.com/chuck-huey/image/upload/c_scale,dpr_auto,w_auto,q_auto,f_auto/v1710096874/personal/datetimedojo-og_rp2w3h.png',
        width: 1200,
        height: 600,
        alt: 'DateTime Dojo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary',
  },
  alternates: {
    canonical: 'https://datetimedojo.com',
  },
}

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
  variable: '--font-app',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
