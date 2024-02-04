import { CopyIcon } from 'lucide-react'
import { Button } from 'react-aria-components'
import { toast } from 'sonner'

interface Props {
  dateFormat: string
  formattedDate: string | number
}
export function DateDisplay(props: Props) {
  const { dateFormat, formattedDate } = props

  return (
    <div className="flex flex-col justify-between sm:flex-row sm:items-center sm:gap-4">
      <p className="shrink-0 grow-0 font-semibold text-gray-700 sm:basis-[125px] sm:text-right">
        {dateFormat}
      </p>

      <div className="flex flex-1 items-center justify-between gap-4 sm:min-w-0">
        <span className="min-w-0 truncate font-mono tabular-nums text-gray-600">
          {formattedDate}
        </span>
        <Button
          className="rounded-md p-2 hover:bg-gray-50"
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
