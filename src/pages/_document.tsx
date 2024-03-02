import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script
          src="noflash.js"
          strategy="beforeInteractive"
          onReady={() => console.log('loaded')}
        ></Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
