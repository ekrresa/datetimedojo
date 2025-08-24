import { CopyButton } from './CopyButton'

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
    <div className="flex flex-col justify-between sm:flex-row sm:items-center sm:gap-4 bg-desert-50 dark:bg-charcoal-950 px-2 py-1.5 rounded-md">
      <p className="shrink-0 grow-0 text-sm text-desert-900 sm:basis-[125px] dark:text-desert-100">
        {dateFormat}
      </p>

      <div className="flex flex-1 items-center justify-between gap-4 sm:min-w-0">
        <p className="min-w-0 truncate font-mono text-sm tabular-nums text-desert-700 dark:text-desert-200">
          {formattedDate}
        </p>

        <CopyButton text={formattedDate.toString()} />
      </div>
    </div>
  )
}
