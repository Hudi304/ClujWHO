import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { getTimerTypeUntil, TimerType } from '../apply-now-utils'
import './apply-now-web.scss'
import { ApplyNowButtonBar } from './web/registration-button-bar'
import { ApplyNowExplanation } from './web/registration-explanation'
import { WebRegistrationForms } from './web/registration-forms'
import { WebApplyNowTimer } from './web/registration-timer'
import { WebApplyNowTitle } from './web/registration-title'

//! chairs 10/4/2022
//! delegates 17/4/2022

type ApplyNowWebProps = {
  ChairRegEndData: Date
  DelegatesRegEndData: Date
  CujWhoStart: Date
}

export function ApplyNowWeb({
  ChairRegEndData,
  DelegatesRegEndData,
  CujWhoStart
}: ApplyNowWebProps): JSX.Element {
  const [chair, setChair] = useState(false)
  const [delegate, setDelegate] = useState(false)
  const date = new Date()

  //prettier-ignore
  const [timeLeft, setTimeLeft] = useState<TimerType>(getTimerTypeUntil(CujWhoStart))
  //prettier-ignore
  const [timeLeftChair, setTimeLeftChair] = useState<TimerType>(getTimerTypeUntil(ChairRegEndData))
  //prettier-ignore
  const [timeLeftDel, setTimeLeftDel] = useState(getTimerTypeUntil(DelegatesRegEndData))

  useEffect(() => {
    const timer = setTimeout(() => {
      const timeLeft = getTimerTypeUntil(CujWhoStart)
      const timeLeftChair = getTimerTypeUntil(ChairRegEndData)
      const timeLeftDel = getTimerTypeUntil(DelegatesRegEndData)

      setTimeLeft(timeLeft)
      setTimeLeftChair(timeLeftChair)
      setTimeLeftDel(timeLeftDel)
    }, 1000)
    return () => clearTimeout(timer)
  })

  return (
    <>
      <Helmet>
        <title>Apply Now | ClujWHO</title>
        <meta
          name="description"
          content="Do you want to be a part of the ClujWHO Model? Apply now to join us to chair or delegate. For any questions please contact us today at clujwho@osmcluj.ro."
        />
      </Helmet>
      <div className="applyNowPageGridContainer OxCenter backgroud-image ">
        <div className="applyNowPageGrid ">
          <WebApplyNowTitle
            // className="debug"
            chair={chair}
            delegate={delegate}
          />

          <WebApplyNowTimer
            // className="debug"
            chair={chair}
            delegate={delegate}
            timeToConferenceStart={timeLeft}
            timeToChaiRegistrationEnd={timeLeftChair}
            timeToDelegateRegistrationEnd={timeLeftDel}
          />

          <ApplyNowExplanation
          //  className="debug"
          />

          <ApplyNowButtonBar
            // className="debug"
            setChair={setChair}
            setDelegate={setDelegate}
          />

          <WebRegistrationForms
            // className="debug"
            chair={chair}
            delegate={delegate}
          />
        </div>
      </div>
    </>
  )
}
