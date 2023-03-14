import { useInView } from 'react-intersection-observer'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import './appy-now.scss'
import { useEffect, useState } from 'react'
import { Timer } from './timer/timer'
import {
  getTimeToChairRegistrationEnd,
  getTimeToConferenceStart,
  getTimeToDelegateRegistrationEnd,
} from './apply-now-utils'
import { ApplyNowWeb } from './apply-now-web/apply-now-web'

//! chairs 10/4/2022
//! delegates 17/4/2022

export function ApplyNow(props: any): JSX.Element {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  const [chair, setChair] = useState(false)
  const [delegate, setDelegate] = useState(false)

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (dimensions.width < 600) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [dimensions])


  const ChairRegEndData = getTimeToChairRegistrationEnd()
  const DelegatesRegEndData = getTimeToDelegateRegistrationEnd()
  const CujWhoStart = getTimeToConferenceStart()

  if (mobile) {
    return (
      <div>
        <div className="apply-now-container OxCenter">
          <div className="apply-now-grid">
            {!chair && !delegate ? (
              <div>
                <p className="titleContainerMobile xOyCenter">
                  The experience of your studenthood
                </p>
                <p className="titleContainerMobile xOyCenter">starts in:</p>
              </div>
            ) : null}

            {chair ? (
              <>
                <p className="titleContainerMobile xOyCenter">
                  Chair Registration ends in :
                </p>
              </>
            ) : null}

            {delegate ? (
              <>
                <p className="titleContainerMobile xOyCenter">
                  Delegates Registration ends in :
                </p>
              </>
            ) : null}

            {!chair && !delegate ? (
              <div>
                <Timer endDate={CujWhoStart} />
              </div>
            ) : null}

            {chair ? (
              <div>
                <Timer endDate={ChairRegEndData} />
              </div>
            ) : null}

            {delegate ? (
              <div>
                <Timer endDate={DelegatesRegEndData} />
              </div>
            ) : null}

            <div className="explanation-container">
              <div className="center-gray">
                The fee for registering as a delegate is 30€,
              </div>

              <div className="center-gray">
                it includes: coffee breaks, lunch and social events.
              </div>
              <div className="center-gray">
                You will receive the payment info in your acceptance email.
              </div>

              <div className="center-gray">* No accomodation is provided.</div>
            </div>

            <div className="button-bar">
              <button
                className="form-btn"
                onClick={() => {
                  setChair(true)
                  setDelegate(false)
                }}
              >
                Chair
              </button>
              <button
                className="form-btn"
                onClick={() => {
                  setChair(false)
                  setDelegate(true)
                }}
              >
                Delegate
              </button>
            </div>

            {chair ? (
              <div>
                <div className="container-form-mobile OxCenter">
                  <div className="iframe-container-mobile OxCenter">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLScjPbjWOtO4-cPVf-83h4NuuNeGqZ4LmOl393lEC-J79c1f-Q/viewform?embedded=true"
                      width="100%"
                      className="iframe"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
              </div>
            ) : null}

            {delegate ? (
              <div>
                <div className="container-form-mobile OxCenter">
                  <div className="iframe-container-mobile OxCenter">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLScj6xGbjMMttGS2VwbbEkUZ9tTWLpOIRFJTexjN1k9jhFtD7A/viewform?embedded=true"
                      width="100%"
                      className="iframe"
                    >
                      Loading…
                    </iframe>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <ApplyNowWeb
          ChairRegEndData={ChairRegEndData}
          DelegatesRegEndData={DelegatesRegEndData}
          CujWhoStart={CujWhoStart}
        />

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  }
}
