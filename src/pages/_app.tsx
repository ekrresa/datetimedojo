import { GeistSans } from "geist/font/sans";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { Toaster } from "sonner";
import { SEO } from "@/helpers/seo";
import { ThemeProvider } from "@/hooks/useAppTheme";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main
        className={`${GeistSans.variable} bg-desert-50 font-sans text-desert-900 dark:bg-charcoal`}
      >
        <NextSeo {...SEO} />
        <Toaster duration={4000} position="top-right" />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
