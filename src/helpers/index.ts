export function convertDateToExcelFormat(date: Date) {
  return (date.getTime() / (1000 * 60 * 60 * 24) + 25569).toFixed(12)
}

export function getDateFromExcel(excelFormat: string | number) {
  return new Date((Number(excelFormat) - (25567 + 2)) * 86400 * 1000)
}
