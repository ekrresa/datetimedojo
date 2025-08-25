'use client'

import Image from 'next/image'

import { Button } from 'react-aria-components'

import { GITHUB_URL, X_URL } from '@/helpers/constants'
import { useAppTheme } from '@/hooks/useAppTheme'

import GithubIcon from '@/assets/github.svg'
import MoonIcon from '@/assets/moon.svg'
import SunIcon from '@/assets/sun.svg'
import XIcon from '@/assets/x.svg'

export default function Header() {
  const { theme, toggleTheme } = useAppTheme()

  return (
    <header className="w-full border-b border-desert-500/20">
      <div className="flex items-center justify-between max-w-250 py-4 mx-auto px-5">
        <Image
          className="w-7 dark:hidden"
          src="/logo.png"
          width={100}
          height={100}
          alt="app logo"
        />

        <Image
          className="w-7 hidden dark:block"
          src="/dark-logo.png"
          width={100}
          height={100}
          alt="app logo"
        />

        <div className="inline-flex items-center gap-4 text-desert-600 dark:text-desert-100">
          <a
            href={GITHUB_URL}
            className="hover:text-desert-900 transition-colors dark:hover:text-desert-300"
            target="_blank"
            rel="noopener"
          >
            <GithubIcon className="" width={22} />
          </a>

          <a
            href={X_URL}
            className="hover:text-desert-900 transition-colors dark:hover:text-desert-300"
            target="_blank"
            rel="noopener"
          >
            <XIcon className="" width={24} />
          </a>

          <Button
            className="flex items-center justify-center outline-none hover:text-desert-900 transition-colors dark:hover:text-desert-300"
            aria-label="Dark mode toggle"
            onPress={toggleTheme}
          >
            {theme === 'dark' ? <SunIcon width={28} /> : <MoonIcon width={24} />}
          </Button>
        </div>
      </div>
    </header>
  )
}
