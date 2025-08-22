import { type ClassValue, clsx } from 'clsx'
import { isValid } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export function convertDateToExcelFormat(date: Date) {
  return (date.getTime() / (1000 * 60 * 60 * 24) + 25569).toFixed(12)
}

export function getDateFromExcel(excelFormat: string | number) {
  return new Date((Number(excelFormat) - (25567 + 2)) * 86400 * 1000)
}

const ISO8601_REGEX =
  /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/
const ISO9075_REGEX =
  /^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})(\.[0-9]{1,6})?(([+-])([0-9]{2}):([0-9]{2})|Z)?$/

const RFC3339_REGEX =
  /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(\.[0-9]{1,9})?(([+-])([0-9]{2}):([0-9]{2})|Z)$/

const RFC7231_REGEX =
  /^[A-Za-z]{3},\s[0-9]{2}\s[A-Za-z]{3}\s[0-9]{4}\s[0-9]{2}:[0-9]{2}:[0-9]{2}\sGMT$/

const EXCEL_FORMAT_REGEX = /^-?\d+(\.\d+)?$/

const UNIX_TIMESTAMP_REGEX = /^[0-9]{1,10}$/
const TIMESTAMP_REGEX = /^[0-9]{1,13}$/

export function parseDateString(date: string) {
  if (ISO9075_REGEX.test(date)) {
    console.log('iso9075')
    return new Date(date)
  }

  if (RFC3339_REGEX.test(date)) {
    console.log('rfc3339')
    return new Date(date)
  }

  if (RFC7231_REGEX.test(date)) {
    console.log('rfc7231')
    return new Date(date)
  }

  if (ISO8601_REGEX.test(date)) {
    console.log('iso8601')
    return new Date(date)
  }

  if (UNIX_TIMESTAMP_REGEX.test(date)) {
    console.log('unix')
    return new Date(Number(date) * 1000)
  }

  if (TIMESTAMP_REGEX.test(date)) {
    console.log('timestamp')
    return new Date(Number(date))
  }

  if (EXCEL_FORMAT_REGEX.test(date)) {
    console.log('excel')
    return getDateFromExcel(date)
  }

  if (isValid(new Date(date))) {
    console.log('date')
    return new Date(date)
  }

  console.log('no match')

  return null
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
