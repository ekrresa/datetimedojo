import * as React from 'react'
import { useCountdown } from 'react-timing-hooks'
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
import DateInputTabs from '@/components/DateInputTabs'

export default function Home() {
  const { currentTime, controls } = useCurrentTime()
  const isMounted = useIsMounted()

  const [counter] = useCountdown(1.2, 0, { startOnMount: true })

  const [selectedDateTime, setSelectedDateTime] = React.useState<Date | null>(null)

  const ISODate = parseISO(selectedDateTime?.toISOString() ?? currentTime.toISOString())

  const handleDateChange = React.useCallback(
    (date: Date | null) => {
      setSelectedDateTime(date)

      if (date) {
        controls.pause()
      } else {
        controls.resume()
      }
    },
    [controls],
  )

  return (
    <section className="flex min-h-svh flex-col pt-24">
      <main className="flex flex-col items-center px-5">
        <h1 className="text-center text-4xl font-bold text-gray-800">DateTime Dojo</h1>
        <p className="mt-4 w-full max-w-[50rem] text-center text-lg text-gray-600">
          Transform dates with ease. Enter a date and choose from a variety of formats below.
        </p>

        <div className="mb-40 mt-10 w-full max-w-[38rem] overflow-hidden rounded-xl border border-desert-200 bg-white sm:shadow-[rgba(0,0,0,0.04)_0px_8px_8px]">
          <div className="bg-desert-50 p-4">
            <DateInputTabs onDateTimeChange={handleDateChange} />
          </div>

          <React.Suspense key={isMounted ? 'client' : 'server'}>
            <div className=" border-gray-100 px-4 py-5 transition-all ease-out">
              <h2 className="mb-4 text-center text-2xl font-semibold">
                {selectedDateTime ? 'Selected date' : 'Current time'}
              </h2>

              <div className="flex flex-col gap-4 text-sm">
                <DateDisplay
                  dateFormat="Date String"
                  formattedDate={ISODate.toLocaleString()}
                  loading={counter > 0}
                />
                <DateDisplay
                  dateFormat="Locale Date String"
                  formattedDate={ISODate.toString()}
                  loading={counter > 0}
                />
                <DateDisplay
                  dateFormat="Timestamp"
                  formattedDate={getTime(ISODate)}
                  loading={counter > 0}
                />
                <DateDisplay
                  dateFormat="Unix Timestamp"
                  formattedDate={getUnixTime(ISODate)}
                  loading={counter > 0}
                />
                <DateDisplay
                  dateFormat="Date (UTC)"
                  formattedDate={ISODate.toUTCString()}
                  loading={counter > 0}
                />

                <DateDisplay
                  dateFormat="Date (ISO 8601)"
                  formattedDate={formatISO(ISODate)}
                  loading={counter > 0}
                />
                <DateDisplay
                  dateFormat="Date (ISO 9075)"
                  formattedDate={formatISO9075(ISODate)}
                  loading={counter > 0}
                />
                <DateDisplay
                  dateFormat="Date (RFC 3339)"
                  formattedDate={formatRFC3339(ISODate)}
                  loading={counter > 0}
                />
                <DateDisplay
                  dateFormat="Date (RFC 7231)"
                  formattedDate={formatRFC7231(ISODate)}
                  loading={counter > 0}
                />

                <DateDisplay
                  dateFormat="Excel Format"
                  formattedDate={convertDateToExcelFormat(ISODate)}
                  loading={counter > 0}
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
            <a
              href="https://ekrresa.com"
              className="transition-all hover:text-gray-700"
              target="_blank"
              rel="noreferrer noopener"
            >
              Developed by Ochuko Ekrresa
            </a>
          </p>
        </div>
      </footer>
    </section>
  )
}
