import { Button, DateField, DateInput, DateSegment } from 'react-aria-components'
import { CalendarDays, CopyIcon } from 'lucide-react'

export default function Home() {
  return (
    <section className="flex min-h-svh flex-col items-center px-5 pt-24">
      <h1 className="text-4xl font-bold text-gray-800">Date-Time Dojo</h1>
      <p className="mt-4 w-full max-w-[50rem] text-center text-lg text-gray-600">
        A solution for converting dates into different formats. Enter a date and choose from a
        variety of formats below.
      </p>

      <div className="mt-10 w-full max-w-lg rounded-xl border bg-white p-4 shadow-lg shadow-gray-400/20">
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

        <div className="mt-6 rounded-lg border p-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-700">Timestamp:</p>
              <div className="flex items-center">
                <p className="mr-2 font-mono text-gray-600">1633027200</p>
                <Button aria-label="Copy" className="rounded-lg border p-1.5">
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-700">Unix Timestamp:</p>
              <div className="flex items-center gap-3">
                <p className="font-mono text-gray-600">1633027200</p>
                <Button aria-label="Copy" className="rounded-lg border p-1.5">
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Date String:</span>
              <div className="flex items-center">
                <span className="mr-2 font-mono text-gray-600">2021-09-30T00:00:00Z</span>
                <Button className="rounded-lg border p-1.5">
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Date (UTC):</span>
              <div className="flex items-center">
                <p className="mr-2 font-mono text-gray-600">Thu, 30 Sep 2021 00:00:00 GMT</p>
                <Button className="rounded-lg border p-1.5">
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">ISO 8601:</span>
              <div className="flex items-center">
                <span className="mr-2 font-mono text-gray-600">2021-09-30T00:00:00.000Z</span>
                <Button className="rounded-lg border p-1.5">
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">JS Date String:</span>
              <div className="flex items-center">
                <span className="mr-2 font-mono text-gray-600">Thu, 30 Sep 2021 00:00:00 GMT</span>
                <Button className="rounded-lg border p-1.5">
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Date (Excel):</span>
              <div className="flex items-center">
                <span className="mr-2 font-mono text-gray-600">Thu, 30 Sep 2021 00:00:00 GMT</span>
                <Button className="rounded-lg border p-1.5">
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
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
