import { CopyIcon } from 'lucide-react'
import { Button } from 'react-aria-components'
import { toast } from 'sonner'

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
    <div className="flex flex-col justify-between sm:flex-row sm:items-center sm:gap-4">
      <p className="shrink-0 grow-0 text-sm font-semibold text-opium-900 sm:basis-[125px] sm:text-right">
        {dateFormat}
      </p>

      <div className="flex flex-1 items-center justify-between gap-4 sm:min-w-0">
        <p className="min-w-0 truncate font-mono text-sm tabular-nums text-desert-700">
          {formattedDate}
        </p>

        <Button
          aria-label="Copy date"
          className="rounded-md p-2 hover:bg-desert-50"
          onPress={() => {
            navigator.clipboard.writeText(formattedDate.toString())
            toast('Copied to clipboard')
          }}
        >
          <CopyIcon color="#4a4a42" size={16} strokeWidth={1.5} />
        </Button>
      </div>
    </div>
  )
}
