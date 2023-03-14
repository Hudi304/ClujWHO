export function getTimeToConferenceStart(): Date {
  const TimeToConferenceStart = new Date()
  TimeToConferenceStart.setMonth(4)
  TimeToConferenceStart.setDate(13)
  TimeToConferenceStart.setFullYear(2022)
  TimeToConferenceStart.setHours(0)
  TimeToConferenceStart.setMinutes(0)
  TimeToConferenceStart.setSeconds(0)
  return TimeToConferenceStart
}

export function getTimeToChairRegistrationEnd(): Date {
  const TimeToChairRegistrationEnd = new Date()
  TimeToChairRegistrationEnd.setMonth(3)
  TimeToChairRegistrationEnd.setDate(10)
  TimeToChairRegistrationEnd.setFullYear(2022)
  TimeToChairRegistrationEnd.setHours(0)
  TimeToChairRegistrationEnd.setMinutes(0)
  TimeToChairRegistrationEnd.setSeconds(0)
  return TimeToChairRegistrationEnd
}

export function getTimeToDelegateRegistrationEnd(): Date {
  const TimeToChairRegistrationEnd = new Date()
  TimeToChairRegistrationEnd.setMonth(3)
  TimeToChairRegistrationEnd.setDate(17)
  TimeToChairRegistrationEnd.setFullYear(2022)
  TimeToChairRegistrationEnd.setHours(0)
  TimeToChairRegistrationEnd.setMinutes(0)
  TimeToChairRegistrationEnd.setSeconds(0)
  return TimeToChairRegistrationEnd
}

export type TimerType = {
  seconds: number
  minutes: number
  hours: number
  days: number
  weeks: number
}

function monthToDays(month: number, year: number): number {
  switch (month) {
    case 0:
      return 31
    case 1:
      if (year % 4 == 0) {
        return 29
      } else {
        return 28
      }
    case 2:
      return 31
    case 3:
      return 30
    case 4:
      return 31
    case 5:
      return 30
    case 6:
      return 31
    case 7:
      return 31
    case 8:
      return 30
    case 9:
      return 31
    case 10:
      return 30
    case 11:
      return 31
    default:
      return 0
  }
}

export function getDayOfYear(date: Date) {
  let nrOfDays = 0
  const year = date.getFullYear()
  for (let i = 0; i < date.getMonth(); i++) {
    nrOfDays += monthToDays(i, year)
  }

  return nrOfDays + date.getDate()
}

export function nrOfDaysBetween(date1: Date, date2: Date) {
  const date1DayNr = getDayOfYear(date1)
  const date2DayNr = getDayOfYear(date2)
  return date2DayNr - date1DayNr
}

export function getTimerTypeUntil(untilDate: Date): TimerType {
  const now = new Date()

  const rez: TimerType = {
    seconds: 60 - now.getSeconds(),
    minutes: 59 - now.getMinutes(),
    hours: 23 - now.getHours(),
    days: Math.abs(nrOfDaysBetween(now, untilDate) % 7),
    weeks: Math.abs((nrOfDaysBetween(now, untilDate) / 7) | 0)
  }

  return rez
}
