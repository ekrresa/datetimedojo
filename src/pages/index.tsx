import * as React from 'react'
import { Button, DateField, DateInput, DateSegment } from 'react-aria-components'
import { CalendarDays } from 'lucide-react'
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
import { convertDateToExcelFormat } from '@/helpers'
import { DateDisplay } from '@/components/DateDisplay'
import { useIsMounted } from '@/hooks/useIsMounted'

export default function Home() {
  const { currentTime } = useCurrentTime()
  const isMounted = useIsMounted()

  const time = getTime(currentTime)
  const unixTime = getUnixTime(currentTime)
  const ISODate = parseISO(currentTime.toISOString())

  return (
    <section className="flex min-h-svh flex-col pt-24">
      <main className="flex flex-col items-center px-5">
        <h1 className="text-center text-4xl font-bold text-gray-800">Date-Time Dojo</h1>
        <p className="mt-4 w-full max-w-[50rem] text-center text-lg text-gray-600">
          Transform dates with ease. Enter a date and choose from a variety of formats below.
        </p>

        <div className="mb-40 mt-10 w-full max-w-[40rem] rounded-xl border border-desert-200 bg-white p-4 sm:shadow-[rgba(0,0,0,0.04)_0px_8px_8px]">
          <DateField
            granularity="minute"
            aria-label="Date Input"
            className="flex items-center rounded-lg border p-2"
          >
            <DateInput className="flex flex-1">
              {segment => (
                <DateSegment
                  className={({ isPlaceholder }) =>
                    `relative type-literal:px-2 focus:outline-none ${
                      isPlaceholder ? 'text-gray-400' : 'text-gray-600'
                    }`
                  }
                  segment={segment}
                />
              )}
            </DateInput>
            <CalendarDays color="#4a4a42" size={20} strokeWidth={1.5} />
          </DateField>

          <React.Suspense key={isMounted ? 'client' : 'server'}>
            <div className="border-gray-100 pt-2">
              <div className="flex flex-col gap-6 text-sm">
                <DateDisplay dateFormat="Date String" formattedDate={ISODate.toLocaleString()} />
                <DateDisplay dateFormat="Locale Date String" formattedDate={ISODate.toString()} />
                <DateDisplay dateFormat="Timestamp" formattedDate={time} />
                <DateDisplay dateFormat="Unix Timestamp" formattedDate={unixTime} />
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
          </React.Suspense>
        </div>
      </main>

      <footer className="mt-auto w-full border-t bg-desert-100 px-5 py-4">
        <div className="mx-auto flex max-w-[50rem] flex-col items-center justify-center gap-2 text-sm text-gray-500 sm:flex-row">
          <p className="uppercase"> &#169; {new Date().getFullYear()}</p>
          <p className="hidden uppercase sm:block">
            <a href="https://ekrresa.com" target="_blank" rel="noreferrer noopener">
              Built by Ochuko Ekrresa
            </a>
          </p>
        </div>
      </footer>
    </section>
  )
}
