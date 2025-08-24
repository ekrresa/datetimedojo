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

import { cn, parseDateString } from '@/helpers'
import { dateAtom } from '../lib/atoms'
import SegmentDisplay from './SegmentDisplay'

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
              className="relative flex-1 cursor-pointer border-b-[2.5px] border-desert-200 px-1 py-2 text-desert-300 outline-none text-lg transition-colors duration-300 selected:border-desert-800 selected:text-desert-900 dark:border-desert-500 dark:text-desert-500 dark:selected:border-desert-100 dark:selected:text-desert-100"
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
              cn(
                `flex flex-1 rounded-md border border-desert-300 outline outline-transparent bg-white px-1.5 py-2 transition-colors`,
                {
                  'outline-desert-800 dark:outline-offset-1 dark:outline-desert-400': isFocusWithin,
                },
              )
            }
          >
            {segment => {
              return (
                <DateSegment
                  className={({ isPlaceholder, isFocused }) =>
                    cn(
                      `relative tabular-nums type-literal:px-0.5 text-desert-800 focus:outline-none transition-all`,
                      {
                        'text-desert-400': isPlaceholder,
                        'rounded-sm text-desert-900 bg-desert-200 px-1': isFocused,
                      },
                    )
                  }
                  segment={segment}
                >
                  <SegmentDisplay segment={segment} />
                </DateSegment>
              )
            }}
          </DateInput>
          <Text
            className="mt-2 pl-1 text-xs italic text-desert-600 dark:text-desert-300 tracking-wide"
            slot="description"
          >
            Input a date and time in 24-hour format, filling all segments.
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
              cn(
                `w-full min-w-0 rounded-md border border-desert-300 bg-white px-1.5 py-2 text-desert-900 outline-1 outline-transparent transition-colors placeholder:text-desert-400`,
                {
                  'outline-desert-800 dark:outline-offset-1 dark:outline-desert-400': isFocused,
                  'outline-red-400 outline-1 dark:outline-offset-1 border-red-400': isInvalid,
                },
              )
            }
            placeholder="Input your date string"
          />

          {inputDateError ? (
            <FieldError className="text-red-500 dark:text-red-400 tracking-wide mt-1 pl-1 text-xs">
              Please enter a valid date string
            </FieldError>
          ) : (
            <Text
              className="mt-2 pl-1 text-xs italic text-desert-600 dark:text-desert-300 tracking-wide"
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
