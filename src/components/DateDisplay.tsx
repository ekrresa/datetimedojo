import { CopyIcon } from 'lucide-react'
import { Button } from 'react-aria-components'

interface Props {
  dateFormat: string
  formattedDate: string | number
}
export function DateDisplay(props: Props) {
  const { dateFormat, formattedDate } = props

  return (
    <div className="flex flex-wrap items-center justify-between gap-1 sm:flex-nowrap sm:gap-4">
      <p className="shrink-0 grow-0 basis-[125px] font-semibold text-gray-700 sm:text-right">
        {dateFormat}
      </p>
      <div className="flex min-w-80 flex-1 items-center justify-between gap-4">
        <span className="min-w-0 truncate font-mono tabular-nums text-gray-600">
          {formattedDate}
        </span>
        <Button className="pr-2">
          <CopyIcon color="#4a4a42" size={16} strokeWidth={1.5} />
        </Button>
      </div>
    </div>
  )
}
