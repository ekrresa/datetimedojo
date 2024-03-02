import * as React from 'react'
import { MoonIcon, SunDimIcon } from 'lucide-react'
import { Button } from 'react-aria-components'
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
import useCounter from '@/hooks/useCounter'
import { useAppTheme } from '@/hooks/useAppTheme'

export default function Home() {
  const isMounted = useIsMounted()
  const { currentTime, controls } = useCurrentTime()
  const { theme, toggleTheme } = useAppTheme()

  const { counter, startCountdown } = useCounter()

  const [selectedDateTime, setSelectedDateTime] = React.useState<Date | null>(null)

  const ISODate = parseISO(selectedDateTime?.toISOString() ?? currentTime.toISOString())

  const handleDateChange = React.useCallback(
    (date: Date | null) => {
      setSelectedDateTime(date)
      startCountdown()

      if (date) {
        controls.pause()
      } else {
        controls.resume()
      }
    },
    [controls, startCountdown],
  )

  return (
    <section className="flex min-h-svh flex-col">
      <header className="mb-4 flex items-center justify-end px-5 pb-2 pt-6">
        <Button
          className="flex h-8 w-8 items-center justify-center outline-none dark:text-opium-100"
          aria-label="Dark mode toggle"
          onPress={toggleTheme}
        >
          {theme === 'dark' ? (
            <SunDimIcon size={28} strokeWidth={1.5} />
          ) : (
            <MoonIcon size={28} strokeWidth={1.5} />
          )}
        </Button>
      </header>
      <main className="flex flex-col items-center px-5">
        <h1 className="text-center text-4xl font-bold text-opium-950 dark:text-opium-50">
          DateTime Dojo
        </h1>
        <p className="mt-4 w-full max-w-[50rem] text-center text-lg text-desert-700 dark:text-desert-200">
          Transform dates with ease. Enter a date and choose from a variety of formats below.
        </p>

        <div className="dark:bg-pearl mb-40 mt-10 w-full max-w-[38rem] overflow-hidden rounded-xl border border-desert-200 bg-white shadow-none shadow-desert-100 sm:shadow-lg dark:border-desert-900 dark:shadow-desert-900/5">
          <div className="dark:bg-pearl bg-desert-50 p-4">
            <DateInputTabs onDateTimeChange={handleDateChange} />
          </div>

          <React.Suspense key={isMounted ? 'client' : 'server'}>
            <div className="px-4 py-5">
              <h2 className="mb-4 text-center text-2xl font-semibold text-opium-950 dark:text-opium-50">
                {selectedDateTime ? 'Selected date' : 'Current time'}
              </h2>

              <div className="flex flex-col gap-4">
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

      <footer className="dark:bg-charcoal mt-auto w-full bg-desert-100 px-5 py-4">
        <div className="mx-auto flex max-w-[50rem] items-center justify-center gap-2 text-sm text-desert-600">
          <p className="uppercase"> &#169; {new Date().getFullYear()}</p>
          <p className="flex items-center gap-1 uppercase">
            <a
              href="https://ekrresa.com"
              className="transition-all hover:text-opium-900"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="mr-1 hidden sm:inline">Developed by</span>
              <span>Ochuko Ekrresa</span>
            </a>
          </p>
        </div>
      </footer>
    </section>
  )
}
