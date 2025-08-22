'use client'

import * as React from 'react'

import { isValid } from 'date-fns'
import { useSetAtom } from 'jotai'
import {
  DateField,
  DateInput,
  DateSegment,
  FieldError,
  Input,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Text,
  TextField,
} from 'react-aria-components'

import { dateAtom } from '@/app/components/atoms'
import { cn, parseDateString } from '@/helpers'

const tabs = [
  { id: 'select-date', label: 'Select date' },
  { id: 'convert-date', label: 'Convert date' },
]

export default function DateInputTabs() {
  const [inputDateError, setInputDateError] = React.useState(false)

  const setDateTime = useSetAtom(dateAtom)

  return (
    <Tabs className="flex orientation-horizontal:flex-col">
      <TabList className="flex" aria-label="Date inputs">
        {tabs.map(tab => {
          return (
            <Tab
              key={tab.id}
              id={tab.id}
              className="relative flex-1 cursor-pointer border-b-[2.5px] border-desert-200 px-1 py-2 text-desert-300 outline-none text-lg transition-colors duration-300 selected:border-desert-800 selected:text-desert-900 dark:border-desert-600 dark:text-desert-600 dark:selected:border-opium-100 dark:selected:text-desert-100"
            >
              {tab.label}
            </Tab>
          )
        })}
      </TabList>

      <TabPanel id="select-date" className="mt-2 flex items-start gap-1 outline-none">
        <DateField
          granularity="second"
          aria-label="Date Input"
          className="flex flex-1 flex-col"
          onChange={dateValue => {
            setDateTime(dateValue ? new Date(dateValue.toString()) : null)
          }}
          hourCycle={24}
          autoFocus
        >
          <DateInput
            className={({ isFocusWithin }) =>
              `flex flex-1 rounded-md border border-desert-300 bg-white px-1.5 py-2 ${
                isFocusWithin
                  ? 'outline outline-opium-800 dark:outline-offset-2 dark:outline-desert-500'
                  : ''
              }`
            }
          >
            {segment => {
              const ddd = ['hour', 'minute', 'second'].includes(segment.type)

              return (
                <DateSegment
                  className={({ isPlaceholder, isFocused }) =>
                    cn(
                      `relative tabular-nums type-literal:px-1 text-desert-800 focus:outline-none transition-all`,
                      {
                        'text-desert-400': isPlaceholder,
                        'rounded-sm text-desert-900 bg-desert-200 px-1': isFocused,
                        'text-transparent min-w-5': ddd,
                      },
                    )
                  }
                  segment={segment}
                />
              )
            }}
          </DateInput>
          <Text
            className="mt-2 pl-1 text-xs italic text-desert-600 dark:text-desert-300"
            slot="description"
          >
            Input a date and time by filling all segments. Date is in 24h format.
          </Text>
        </DateField>
      </TabPanel>

      <TabPanel id="convert-date" className="mt-2 flex gap-1 outline-none">
        <TextField
          aria-label="Enter your date string"
          className="flex flex-1 flex-col"
          onChange={val => {
            setInputDateError(false)

            if (val.length > 0) {
              const formattedValue = parseDateString(val)
              const isValidDate = isValid(formattedValue)

              if (isValidDate) {
                setDateTime(formattedValue)
              } else {
                setInputDateError(true)
              }
            } else {
              setDateTime(null)
            }
          }}
          isInvalid={inputDateError}
          validationBehavior="aria"
        >
          <Input
            className={({ isInvalid, isFocused }) =>
              `w-full min-w-0 rounded-md border border-desert-300 bg-white px-1.5 py-2 text-desert-900 outline-none transition-colors placeholder:text-sm placeholder:text-desert-500 ${
                isInvalid
                  ? 'outline-red-600 dark:outline-re-400 outline-1 outline-offset-1 dark:outline-offset-2'
                  : ''
              } ${
                isFocused
                  ? 'outline-1 outline-offset-1 outline-opium-800 dark:outline-offset-2 dark:outline-desert-500'
                  : ''
              }`
            }
            placeholder="Input your date string"
          />

          {inputDateError ? (
            <FieldError className="text-red-600 dark:text-red-400 mt-1 pl-1 text-xs">
              Invalid date string
            </FieldError>
          ) : (
            <Text
              className="mt-1 pl-1 text-xs italic text-desert-600 dark:text-desert-300"
              slot="description"
            >
              Convert a date string into all formats below.
            </Text>
          )}
        </TextField>
      </TabPanel>
    </Tabs>
  )
}
