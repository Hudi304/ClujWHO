import { useEffect, useState } from 'react'
import './timer-styles.scss'

export function monthToDays(month: number, year: number): number {
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

export function Timer(props: { endDate: Date }) {
  const date = new Date()
  const registrationStartDate = props.endDate;
  // registrationStartDate.setMonth(1)
  // registrationStartDate.setDate(1)
  // registrationStartDate.setFullYear(2022)
  // registrationStartDate.setHours(0)
  // registrationStartDate.setMinutes(0)
  // registrationStartDate.setSeconds(0)

  const [timeLeft, setTimeLeft] = useState({
    seconds: 59 - date.getSeconds(),
    minutes: 59 - date.getMinutes(),
    hours: 23 - date.getHours(),
    days: Math.abs(nrOfDaysBetween(date, registrationStartDate) % 7),
    weeks: Math.abs((nrOfDaysBetween(date, registrationStartDate) / 7) | 0)
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      const timeLeft = {
        seconds: 60 - date.getSeconds(),
        minutes: 60 - date.getMinutes(),
        hours: 24 - date.getHours(),
        days: Math.abs(nrOfDaysBetween(date, registrationStartDate) % 7),
        weeks: Math.abs((nrOfDaysBetween(date, registrationStartDate) / 7) | 0)
      }
      setTimeLeft(timeLeft)
    }, 1000)
    return () => clearTimeout(timer)
  })

  return (
    <div className="countDownContainerMobile xOyCenter">
      <div className="counterContainerMobile">
        <div className="cardContainerMobile">
          <div className="counterCardMobile">{`${timeLeft.weeks}`}</div>
          <p className="cardLabelMobile xOyCenter">Weeks</p>
        </div>
        <div className="xOyCenter pointsMobile "> : </div>

        <div className="cardContainerMobile">
          <div className="counterCardMobile">{`${timeLeft.days}`}</div>
          <p className="cardLabelMobile xOyCenter">Days</p>
        </div>
        <div className="xOyCenter pointsMobile "> : </div>
        <div className="cardContainerMobile">
          <div className="counterCardMobile">{`${timeLeft.hours}`}</div>
          <p className="cardLabelMobile xOyCenter">Hours</p>
        </div>
        <div className="xOyCenter pointsMobile "> : </div>
        <div className="cardContainerMobile">
          <div className="counterCardMobile">{`${timeLeft.minutes}`}</div>
          <p className="cardLabelMobile xOyCenter">Minutes</p>
        </div>
        <div className="xOyCenter pointsMobile "> : </div>
        <div className="cardContainerMobile">
          <div className="counterCardMobile">{`${timeLeft.seconds}`}</div>
          <p className="cardLabelMobile xOyCenter">Seconds</p>
        </div>
      </div>
    </div>
  )
}
