import '@/styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={GeistSans.variable}>
      <NextSeo
        title="Date-Time Dojo"
        description="A solution for converting dates into different formats."
        noindex
        nofollow
      />
      <Component {...pageProps} />
    </main>
  )
}
