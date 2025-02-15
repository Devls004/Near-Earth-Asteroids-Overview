export const sortNumberComparator = (
  currentNumbervalue: number,
  nextNumberValue: number
): number => {
  if (currentNumbervalue == null && nextNumberValue == null) return 0;
  if (currentNumbervalue == null) return -1;
  if (nextNumberValue == null) return 1;
  return Number(currentNumbervalue) - Number(nextNumberValue);
};

export const sortDateComparator = (
  currentDateValue: Date,
  nextDateValue: Date
): number => {
  if (!currentDateValue && !nextDateValue) return 0;
  if (!currentDateValue) return 1;
  if (!nextDateValue) return -1;
  const formattedCurrentDate = new Date(currentDateValue).getTime();
  const formatedNextDate = new Date(nextDateValue).getTime();
  return formattedCurrentDate - formatedNextDate;
};

export const dateComparator = (
  filterLocalDateAtMidnight: Date,
  cellValue: any
): number => {
  if (!cellValue) return -1;
  const cellDate = new Date(cellValue);
  const cellDateNoTime = new Date(cellDate.setHours(0, 0, 0, 0));
  if (cellDateNoTime < filterLocalDateAtMidnight) return -1;
  if (cellDateNoTime > filterLocalDateAtMidnight) return 1;
  return 0;
};
