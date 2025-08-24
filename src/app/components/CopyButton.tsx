import { useState } from 'react'

import { Button } from 'react-aria-components'

import CheckIcon from '@/assets/check.svg'
import CopyIcon from '@/assets/copy.svg'
import { cn } from '@/helpers'

interface Props {
  text: string
}
export function CopyButton({ text }: Props) {
  const [copied, setCopied] = useState(false)

  return (
    <Button
      aria-label="Copy date"
      className={cn(
        'rounded-md p-2 text-desert-800 hover:bg-desert-100/80 dark:text-desert-300 dark:hover:bg-gray-800 transition-colors',
        { 'dark:bg-gray-800 bg-desert-100 pointer-events-none': copied },
      )}
      onPress={() => {
        setCopied(true)

        navigator.clipboard.writeText(text)

        setTimeout(() => {
          setCopied(false)
        }, 4000)
      }}
    >
      {copied ? <CheckIcon width={16} /> : <CopyIcon width={16} />}
    </Button>
  )
}
