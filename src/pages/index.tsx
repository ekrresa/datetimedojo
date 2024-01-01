import { Button, DateField, DateInput, DateSegment } from 'react-aria-components'
import { CalendarDays, CopyIcon } from 'lucide-react'
import {
  formatISO,
  formatISO9075,
  formatRFC3339,
  formatRFC7231,
  getTime,
  getUnixTime,
  parseISO,
} from 'date-fns'
import { useCurrentTime } from '@/hooks/useCurrentTime'
import clientOnly from 'next/dynamic'
import { convertDateToExcelFormat } from '@/helpers'
import { ClientOnly } from '@/components/ClientOnly'
import { DateDisplay } from '@/components/DateDisplay'

export default function Home() {
  const currentTime = useCurrentTime()

  const time = getTime(currentTime ?? new Date())
  const unixTime = getUnixTime(currentTime ?? new Date())
  const ISODate = parseISO(new Date(time).toISOString())

  return (
    <section className="flex min-h-svh flex-col items-center px-5 pt-24">
      <h1 className="text-4xl font-bold text-gray-800">Date-Time Dojo</h1>
      <p className="mt-4 w-full max-w-[50rem] text-center text-lg text-gray-600">
        A solution for converting dates into different formats. Enter a date and choose from a
        variety of formats below.
      </p>

      <div className="mt-10 w-full max-w-[40rem] rounded-xl border border-desert-200 bg-white p-4 sm:shadow-[rgba(0,0,0,0.04)_0px_8px_8px]">
        <DateField
          granularity="minute"
          aria-label="Date Input"
          className="flex rounded-lg border p-2"
        >
          <DateInput className="flex flex-1">
            {segment => (
              <DateSegment
                className={({ isPlaceholder }) =>
                  isPlaceholder ? 'text-gray-400' : 'text-gray-600'
                }
                segment={segment}
              />
            )}
          </DateInput>
          <CalendarDays className="h-6 w-6" />
        </DateField>

        <ClientOnly>
          <div className="mt-10 border-t border-gray-100 pt-2">
            <div className="flex flex-col gap-6 text-sm">
              <DateDisplay dateFormat="Locale Date String" formattedDate={ISODate.toString()} />
              <DateDisplay dateFormat="Timestamp" formattedDate={time} />
              <DateDisplay dateFormat="Unix Timestamp" formattedDate={unixTime} />
              <DateDisplay dateFormat="Date String" formattedDate={ISODate.toLocaleString()} />
              <DateDisplay dateFormat="Date (UTC)" formattedDate={ISODate.toUTCString()} />

              <DateDisplay dateFormat="Date (ISO 8601)" formattedDate={formatISO(ISODate)} />
              <DateDisplay dateFormat="Date (ISO 9075)" formattedDate={formatISO9075(ISODate)} />
              <DateDisplay dateFormat="Date (RFC 3339)" formattedDate={formatRFC3339(ISODate)} />
              <DateDisplay dateFormat="Date (RFC 7231)" formattedDate={formatRFC7231(ISODate)} />

              <DateDisplay
                dateFormat="Excel Format"
                formattedDate={convertDateToExcelFormat(ISODate)}
              />
            </div>
          </div>
        </ClientOnly>
      </div>

      <footer className="mt-auto w-full py-4">
        <div className="mx-auto flex max-w-[50rem] flex-col items-center justify-between gap-2 text-sm text-gray-500 sm:flex-row">
          <p className="uppercase">All rights reserved &#169; {new Date().getFullYear()}</p>
          <p className="hidden uppercase sm:block">
            <a href="https://github.com/ekrresa" target="_blank" rel="noreferrer noopener">
              Ochuko Ekrresa
            </a>
          </p>
        </div>
      </footer>
    </section>
  )
}
