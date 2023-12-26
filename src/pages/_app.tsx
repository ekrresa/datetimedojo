import '@/styles/globals.css'
import { GeistSans } from 'geist/font/sans'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={GeistSans.variable}>
      <Component {...pageProps} />
    </main>
  )
}
