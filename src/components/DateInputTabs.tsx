'use client'

import * as React from 'react'

import { isValid } from 'date-fns'
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

import { parseDateString } from '@/helpers'

interface Props {
  onDateTimeChange: (date: Date | null) => void
}
export default function DateInputTabs(props: Props) {
  const { onDateTimeChange } = props

  const [inputDateError, setInputDateError] = React.useState(false)

  return (
    <Tabs className="flex orientation-horizontal:flex-col">
      <TabList className="flex" aria-label="Date inputs">
        <Tab
          id="select-date"
          className="relative flex-1 cursor-pointer border-b-[2.5px] border-desert-200 px-1 py-2 text-desert-400 outline-none transition-colors duration-300 selected:border-opium-800 selected:text-opium-900 dark:border-desert-600 dark:text-desert-600 dark:selected:border-opium-100 dark:selected:text-desert-100"
        >
          Enter a date
        </Tab>
        <Tab
          id="convert-date"
          className="relative flex-1 cursor-pointer border-b-[2.5px] border-desert-200 px-1 py-2 text-desert-400 outline-none transition-colors duration-300 selected:border-opium-800 selected:text-opium-900 dark:border-desert-500 dark:text-desert-500 dark:selected:border-opium-100 dark:selected:text-desert-100"
        >
          Convert a date
        </Tab>
      </TabList>
      <TabPanel id="select-date" className="mt-2 flex items-start gap-1 outline-none">
        <DateField
          granularity="second"
          aria-label="Date Input"
          className="flex flex-1 flex-col"
          onChange={dateValue => {
            onDateTimeChange(dateValue ? new Date(dateValue.toString()) : null)
          }}
          hourCycle={24}
          autoFocus
        >
          <DateInput
            className={({ isFocusWithin }) =>
              `flex flex-1 rounded-md border bg-white p-1.5 ${
                isFocusWithin
                  ? 'outline outline-offset-1 outline-opium-800 dark:outline-offset-2 dark:outline-desert-500'
                  : ''
              }`
            }
          >
            {segment => (
              <DateSegment
                className={({ isPlaceholder, isFocused }) =>
                  `relative tabular-nums type-literal:px-1 focus:outline-none ${
                    isPlaceholder ? 'italic text-desert-400' : 'text-desert-800'
                  } ${isFocused ? 'rounded-sm bg-opium-800   caret-transparent' : ''}`
                }
                segment={segment}
              />
            )}
          </DateInput>
          <Text
            className="mt-1 pl-1 text-xs italic text-desert-600 dark:text-desert-300"
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
                onDateTimeChange(formattedValue)
              } else {
                setInputDateError(true)
              }
            } else {
              onDateTimeChange(null)
            }
          }}
          isInvalid={inputDateError}
          validationBehavior="aria"
        >
          <Input
            className={({ isInvalid, isFocused }) =>
              `w-full min-w-0 rounded-md border bg-white p-1.5 text-desert-900 outline-none transition-colors placeholder:text-sm placeholder:text-desert-500 ${
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
