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
} from 'react-aria-components'
import { CalendarDays } from 'lucide-react'

export default function DateInputTabs() {
  return (
    <Tabs className="flex orientation-horizontal:flex-col">
      <TabList className="flex" aria-label="Date inputs">
        <Tab
          id="pick"
          className="relative flex-1 cursor-pointer border-b-[1.5px] border-zinc-200 px-1 py-2 text-zinc-400 outline-none transition-colors duration-300 selected:border-desert-600 selected:text-desert-900"
        >
          Pick a date
        </Tab>
        <Tab
          id="paste"
          className="relative flex-1 cursor-pointer border-b-[1.5px] border-zinc-200 px-1 py-2 text-zinc-400 outline-none transition-colors duration-300 selected:border-desert-600 selected:text-desert-900"
        >
          Paste a date
        </Tab>
      </TabList>
      <TabPanel id="pick" className="mt-2 outline-none">
        <DateField
          granularity="minute"
          aria-label="Date Input"
          className="flex items-center rounded-lg border bg-white p-1.5"
        >
          <DateInput className="flex flex-1">
            {segment => (
              <DateSegment
                className={({ isPlaceholder }) =>
                  `relative type-literal:px-2 focus:outline-none ${
                    isPlaceholder ? 'text-desert-400' : 'text-desert-800'
                  }`
                }
                segment={segment}
              />
            )}
          </DateInput>
          <CalendarDays color="#4a4a42" size={20} strokeWidth={1.5} />
        </DateField>
      </TabPanel>
      <TabPanel id="paste" className="mt-2 outline-none">
        <TextField
          aria-label="Enter your date string"
          className="overflow-hidden rounded-lg border"
        >
          <Input
            className="w-full min-w-0 bg-white p-1.5 text-desert-900 outline-none placeholder:text-desert-500"
            placeholder="Input your date string"
          />
        </TextField>
      </TabPanel>
    </Tabs>
  )
}
