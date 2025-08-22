'use client'

import { Button } from 'react-aria-components'
import { toast } from 'sonner'

import CopyIcon from '@/assets/copy.svg'

interface Props {
  loading: boolean
  dateFormat: string
  formattedDate: string | number
}
export function DateDisplay(props: Props) {
  const { dateFormat, formattedDate, loading } = props

  if (loading) {
    return (
      <div className="flex h-8 gap-4">
        <div className="hidden h-full grow-0 animate-pulse rounded bg-desert-200 sm:block sm:basis-[125px]"></div>
        <div className="h-full flex-1 animate-pulse rounded bg-desert-200"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-between sm:flex-row sm:items-center sm:gap-4 bg-desert-50 px-2 py-1.5 rounded-md">
      <p className="shrink-0 grow-0 text-sm text-desert-900 sm:basis-[125px] dark:text-desert-100">
        {dateFormat}
      </p>

      <div className="flex flex-1 items-center justify-between gap-4 sm:min-w-0">
        <p className="min-w-0 truncate font-mono text-sm tabular-nums text-desert-700 dark:text-desert-200">
          {formattedDate}
        </p>

        <Button
          aria-label="Copy date"
          className="rounded-md p-2 text-opium-800 hover:bg-desert-50 dark:text-opium-100 dark:hover:bg-gray-800"
          onPress={() => {
            navigator.clipboard.writeText(formattedDate.toString())
            toast('Copied to clipboard')
          }}
        >
          <CopyIcon width={16} strokeWidth={1.5} />
        </Button>
      </div>
    </div>
  )
}
