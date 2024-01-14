import { parseDateString } from '@/helpers'
import * as React from 'react'
import {
  DateField,
  DateInput,
  DateSegment,
  Input,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TextField,
  Text,
} from 'react-aria-components'

interface Props {
  onDateTimeChange: (date: Date | null) => void
}
export default function DateInputTabs(props: Props) {
  const { onDateTimeChange } = props

  return (
    <Tabs className="flex orientation-horizontal:flex-col">
      <TabList className="flex" aria-label="Date inputs">
        <Tab
          id="pick"
          className="relative flex-1 cursor-pointer border-b-[1.5px] border-zinc-200 px-1 py-2 text-zinc-400 outline-none transition-colors duration-300 selected:border-desert-600 selected:text-desert-900"
        >
          Enter a date
        </Tab>
        <Tab
          id="paste"
          className="relative flex-1 cursor-pointer border-b-[1.5px] border-zinc-200 px-1 py-2 text-zinc-400 outline-none transition-colors duration-300 selected:border-desert-600 selected:text-desert-900"
        >
          Paste a date string
        </Tab>
      </TabList>
      <TabPanel id="pick" className="mt-2 flex items-start gap-1 outline-none">
        <DateField
          granularity="second"
          aria-label="Date Input"
          className="flex flex-1 flex-col"
          onChange={dateValue => {
            onDateTimeChange(dateValue ? new Date(dateValue.toString()) : null)
          }}
          autoFocus
        >
          <DateInput className="flex flex-1 rounded-md border bg-white p-1.5">
            {segment => (
              <DateSegment
                className={({ isPlaceholder, isFocused }) =>
                  `relative tabular-nums type-literal:px-2 focus:outline-none ${
                    isPlaceholder ? 'italic text-desert-400' : 'text-desert-800'
                  } ${isFocused ? 'rounded-sm bg-[#2C497F] text-white caret-transparent' : ''}`
                }
                segment={segment}
              />
            )}
          </DateInput>
          <Text className="mt-1 text-xs text-gray-600" slot="description">
            Input a date and time by filling all segments.
          </Text>
        </DateField>
      </TabPanel>

      <TabPanel id="paste" className="mt-2 flex gap-1 outline-none">
        <TextField
          aria-label="Enter your date string"
          className="flex flex-1 flex-col"
          onChange={val => {
            if (val.length > 0) {
              onDateTimeChange(parseDateString(val))
            } else {
              onDateTimeChange(null)
            }
            console.log(val)
          }}
        >
          <Input
            className="w-full min-w-0 rounded-md border bg-white p-1.5 text-desert-900 outline-none placeholder:text-desert-500"
            placeholder="Input your date string"
          />
          <Text className="mt-1 text-xs text-gray-600" slot="description">
            Paste a date string in various formats.
          </Text>
        </TextField>
      </TabPanel>
    </Tabs>
  )
}
