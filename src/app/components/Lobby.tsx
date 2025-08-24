'use client'

import * as React from 'react'

import {
  formatISO,
  formatISO9075,
  formatRFC3339,
  formatRFC7231,
  getTime,
  getUnixTime,
  parseISO,
} from 'date-fns'
import { useAtomValue } from 'jotai'

import { useCounter } from '@/hooks/useCounter'
import { useCurrentTime } from '@/hooks/useCurrentTime'
import { useIsMounted } from '@/hooks/useIsMounted'

import { convertDateToExcelFormat } from '@/helpers'
import { dateAtom } from '../lib/atoms'
import { DateDisplay } from './DateDisplay'

export default function Lobby(props: React.PropsWithChildren) {
  const { children } = props

  const isMounted = useIsMounted()
  const { currentTime, controls } = useCurrentTime()
  const { counter, startCountdown } = useCounter()

  const [selectedDateTime, setSelectedDateTime] = React.useState<Date | null>(null)

  const dateValue = useAtomValue(dateAtom)

  React.useEffect(() => {
    setSelectedDateTime(dateValue)
    startCountdown()

    if (dateValue) {
      controls.pause()
    } else {
      controls.resume()
    }
  }, [controls.pause, controls.resume, startCountdown, dateValue])

  const ISODate = parseISO(selectedDateTime?.toISOString() ?? currentTime.toISOString())

  return (
    <section className="flex flex-col items-center gap-4 max-w-152 mx-auto overflow-hidden">
      <div className="dark:bg-pearl bg-white p-4 w-full border border-desert-200 dark:border-desert-500/20 rounded-xl shadow-none sm:shadow-lg shadow-desert-50 dark:shadow-charcoal-950">
        {children}
      </div>

      <div className="dark:bg-pearl mb-40 w-full rounded-xl border border-desert-200 bg-white shadow-none shadow-desert-50 sm:shadow-lg dark:border-desert-500/20 dark:shadow-desert-900/5">
        <React.Suspense key={isMounted ? 'client' : 'server'}>
          <div className="px-4 py-5">
            <h2 className="mb-4 text-center text-2xl font-semibold text-desert-950 dark:text-desert-100">
              {selectedDateTime ? 'Selected date' : 'Current time'}
            </h2>

            <div className="flex flex-col gap-3">
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
    </section>
  )
}
