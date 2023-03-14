import { TimerType } from '../../apply-now-utils'

type RegistrationFormsProps = {
  chair: boolean
  delegate: boolean
  timeToConferenceStart: TimerType
  timeToDelegateRegistrationEnd: TimerType
  timeToChaiRegistrationEnd: TimerType
  className?: string
}

export function WebApplyNowTimer({
  chair,
  delegate,
  timeToConferenceStart,
  timeToDelegateRegistrationEnd,
  timeToChaiRegistrationEnd,
  className
}: RegistrationFormsProps): JSX.Element {
  return (
    <div className={className}>
      {!chair && !delegate ? (
        <div className="countDownContainer xOyCenter">
          <div className="counterContainer">
            <div className="cardContainer">
              <div className="counterCard">{`${timeToConferenceStart.weeks}`}</div>
              <p className="cardLabel xOyCenter">Weeks</p>
            </div>
            <div className="xOyCenter points "> : </div>

            <div className="cardContainer">
              <div className="counterCard">{`${timeToConferenceStart.days}`}</div>
              <p className="cardLabel xOyCenter">Days</p>
            </div>
            <div className="xOyCenter points "> : </div>
            <div className="cardContainer">
              <div className="counterCard">{`${timeToConferenceStart.hours}`}</div>
              <p className="cardLabel xOyCenter">Hours</p>
            </div>
            <div className="xOyCenter points "> : </div>
            <div className="cardContainer">
              <div className="counterCard">{`${timeToConferenceStart.minutes}`}</div>
              <p className="cardLabel xOyCenter">Minutes</p>
            </div>
            <div className="xOyCenter points "> : </div>
            <div className="cardContainer">
              <div className="counterCard">{`${timeToConferenceStart.seconds}`}</div>
              <p className="cardLabel xOyCenter">Seconds</p>
            </div>
          </div>
        </div>
      ) : null}

      {delegate ? (
        <div>
          <div className="countDownContainer xOyCenter">
            <div className="counterContainer">
              <div className="cardContainer">
                <div className="counterCard">{`${timeToDelegateRegistrationEnd.weeks}`}</div>
                <p className="cardLabel xOyCenter">Weeks</p>
              </div>
              <div className="xOyCenter points "> : </div>

              <div className="cardContainer">
                <div className="counterCard">{`${timeToDelegateRegistrationEnd.days}`}</div>
                <p className="cardLabel xOyCenter">Days</p>
              </div>
              <div className="xOyCenter points "> : </div>
              <div className="cardContainer">
                <div className="counterCard">{`${timeToDelegateRegistrationEnd.hours}`}</div>
                <p className="cardLabel xOyCenter">Hours</p>
              </div>
              <div className="xOyCenter points "> : </div>
              <div className="cardContainer">
                <div className="counterCard">{`${timeToDelegateRegistrationEnd.minutes}`}</div>
                <p className="cardLabel xOyCenter">Minutes</p>
              </div>
              <div className="xOyCenter points "> : </div>
              <div className="cardContainer">
                <div className="counterCard">{`${timeToDelegateRegistrationEnd.seconds}`}</div>
                <p className="cardLabel xOyCenter">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {chair ? (
        <div>
          <div className="countDownContainer xOyCenter">
            <div className="counterContainer">
              <div className="cardContainer">
                <div className="counterCard">{`${timeToChaiRegistrationEnd.weeks}`}</div>
                <p className="cardLabel xOyCenter">Weeks</p>
              </div>
              <div className="xOyCenter points "> : </div>

              <div className="cardContainer">
                <div className="counterCard">{`${timeToChaiRegistrationEnd.days}`}</div>
                <p className="cardLabel xOyCenter">Days</p>
              </div>
              <div className="xOyCenter points "> : </div>
              <div className="cardContainer">
                <div className="counterCard">{`${timeToChaiRegistrationEnd.hours}`}</div>
                <p className="cardLabel xOyCenter">Hours</p>
              </div>
              <div className="xOyCenter points "> : </div>
              <div className="cardContainer">
                <div className="counterCard">{`${timeToChaiRegistrationEnd.minutes}`}</div>
                <p className="cardLabel xOyCenter">Minutes</p>
              </div>
              <div className="xOyCenter points "> : </div>
              <div className="cardContainer">
                <div className="counterCard">{`${timeToChaiRegistrationEnd.seconds}`}</div>
                <p className="cardLabel xOyCenter">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
