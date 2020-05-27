export const formatTime = (timestemp:number):string => {
  let date = new Date(timestemp),
      y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate()
  return `${m > 9 ? m : '0' + m + '月'}${d}, ${y}`
}