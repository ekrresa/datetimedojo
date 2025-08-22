'use client'

import Image from 'next/image'

import { Button } from 'react-aria-components'

import { GITHUB_URL } from '@/helpers/constants'
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
        <Image className="w-7" src="/logo.png" width={100} height={100} alt="app logo" />

        <div className="inline-flex items-center gap-4 text-desert-600">
          <a href={GITHUB_URL} target="_blank" rel="noopener">
            <GithubIcon className="text-desert-600" width={22} />
          </a>

          <a href={GITHUB_URL} target="_blank" rel="noopener">
            <XIcon className="text-desert-600" width={22} />
          </a>

          <Button
            className="flex items-center justify-center outline-none dark:text-opium-100"
            aria-label="Dark mode toggle"
            onPress={toggleTheme}
          >
            {theme === 'dark' ? <SunIcon width={28} /> : <MoonIcon width={28} />}
          </Button>
        </div>
      </div>
    </header>
  )
}
