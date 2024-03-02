import { ThemeProvider } from '@/hooks/useAppTheme'
import '@/styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { Toaster } from 'sonner'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main
        className={`${GeistSans.variable} dark:bg-charcoal bg-desert-50 font-sans text-desert-900`}
      >
        <NextSeo
          title="Date-Time Dojo"
          description="A solution for converting dates into different formats."
          noindex
          nofollow
        />
        <Toaster duration={4000} position="top-right" />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
