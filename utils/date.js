export const getFormatedDate = (date) =>
  `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`

export const getPast = (date, days) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)