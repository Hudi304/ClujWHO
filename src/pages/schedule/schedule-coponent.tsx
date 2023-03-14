import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'
import { Bubble } from './schedule-bubble'
import SwipeableViews from 'react-swipeable-views'

import './schedule.scss'
import {
  hoursArraySaturday,
  activityArraySaturday,
  hoursArraySunday,
  activityArraySunday,
  activityArrayFiday,
  bubbleOptionsArrayFriday,
  hoursArrayFriday,
  getFridayBubbleOptions,
  getSaturdayBubbleOptions,
  getSundayBubbleOptions,
  bubbleOptionsArraySaturday,
  bubbleOptionsArraySunday
} from './scheduler-constants'
import { Helmet } from 'react-helmet'
/* eslint-disable */

export function Schedule(props: any): JSX.Element {
  const now = new Date()
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  const [fridayBubbleOpt, setFridayBubbleOpt] = useState(
    getFridayBubbleOptions(now)
  )
  const [saturdayBubbleOpt, setSaturdayBubbleOpt] = useState(
    getSaturdayBubbleOptions(now)
  )
  const [sundayBubbleOpt, setSundayBubbleOpt] = useState(
    getSundayBubbleOptions(now)
  )
  const [timeLeft, setTimeLeft] = useState(true)
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

  useEffect(() => {
    const timer = setTimeout(() => {
      const now = new Date()

      console.log(now.getDate())
      console.log(now.getMonth())

      if (now.getMinutes() % 15 == 0 && now.getSeconds() % 10 == 0) {
        if (now.getMonth() > 3) {
          setSundayBubbleOpt(getSundayBubbleOptions(now))
          setFridayBubbleOpt(getFridayBubbleOptions(now))
          setSaturdayBubbleOpt(getSaturdayBubbleOptions(now))
        }
        if (now.getDate() > 15) {
          setFridayBubbleOpt(bubbleOptionsArrayFriday)
          setSaturdayBubbleOpt(bubbleOptionsArraySaturday)
          setSundayBubbleOpt(bubbleOptionsArraySunday)
        }
      }

      setTimeLeft(!timeLeft)
    }, 1000)
    return () => clearTimeout(timer)
  })

  function ScheduleComponentWebFriday() {
    return (
      <div className="scheduleComponentContainer ">
        <div className="scheduleOxGrid ">
          <p className="scheduleTitle " style={{ paddingLeft: '7vh' }}>
            Friday
          </p>
          <p></p>
          <p></p>

          <div className="scheduleOyHourGrid ">
            {hoursArrayFriday.map((hour, index) => {
              return (
                <div key={index * 13} className="scheduleHourGridItem ">
                  {hour}
                </div>
              )
            })}
          </div>
          <div className="scheduleOyBubbleGrid ">
            {bubbleOptionsArrayFriday.map((bubbleOpt, index) => {
              return (
                <div key={index * 5} className="scheduleBubbleGridItem">
                  <Bubble
                    key={index * 17}
                    connectTop={bubbleOpt.connectTop}
                    connectBotomn={bubbleOpt.connectBotomn}
                    colorHashT={bubbleOpt.colorHashT}
                    colorHashC={bubbleOpt.colorHashC}
                    colorHashB={bubbleOpt.colorHashB}
                    width="5vh"
                    height="5vh"
                  ></Bubble>
                </div>
              )
            })}
          </div>
          <div className="scheduleOyActivityGrid">
            {activityArrayFiday.map((activity, index) => {
              return (
                <div key={index * 19} className="scheduleActivityGridItem">
                  {activity}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  function ScheduleComponentWebSaturday() {
    return (
      <div className="scheduleComponentContainer ">
        <div className="scheduleOxGrid ">
          <p className="scheduleTitle ">Saturday</p>
          <p></p>
          <p></p>

          <div className="scheduleOyHourGrid ">
            {hoursArraySaturday.map((hour, index) => {
              return (
                <div key={index * 13} className="scheduleHourGridItem ">
                  {hour}
                </div>
              )
            })}
          </div>
          <div className="scheduleOyBubbleGrid ">
            {bubbleOptionsArraySaturday.map((bubbleOpt, index) => {
              return (
                <div key={index * 5} className="scheduleBubbleGridItem">
                  <Bubble
                    key={index * 17}
                    connectTop={bubbleOpt.connectTop}
                    connectBotomn={bubbleOpt.connectBotomn}
                    colorHashT={bubbleOpt.colorHashT}
                    colorHashC={bubbleOpt.colorHashC}
                    colorHashB={bubbleOpt.colorHashB}
                    width="5vh"
                    height="5vh"
                  ></Bubble>
                </div>
              )
            })}
          </div>
          <div className="scheduleOyActivityGrid">
            {activityArraySaturday.map((activity, index) => {
              return (
                <div key={index * 19} className="scheduleActivityGridItem">
                  {activity}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  function ScheduleComponentWebSunday() {
    return (
      <div className="scheduleComponentContainer ">
        <div className="scheduleOxGrid ">
          <p className="scheduleTitle " style={{ paddingLeft: '6vh' }}>
            Sunday
          </p>
          <p></p>
          <p></p>

          <div className="scheduleOyHourGridSunday ">
            {hoursArraySunday
              .filter(act => act != '')
              .map((hour, index) => {
                return (
                  <div key={index * 13} className="scheduleHourGridItem ">
                    {hour}
                  </div>
                )
              })}
          </div>
          <div className="scheduleOyBubbleGridSunday ">
            {bubbleOptionsArraySunday.map((bubbleOpt, index) => {
              return (
                <div key={index * 5} className="scheduleBubbleGridItem">
                  <Bubble
                    key={index * 17}
                    connectTop={bubbleOpt.connectTop}
                    connectBotomn={bubbleOpt.connectBotomn}
                    colorHashT={bubbleOpt.colorHashT}
                    colorHashC={bubbleOpt.colorHashC}
                    colorHashB={bubbleOpt.colorHashB}
                    width="5vh"
                    height="5vh"
                  ></Bubble>
                </div>
              )
            })}
          </div>
          <div className="scheduleOyActivityGridSunday">
            {activityArraySunday
              .filter(act => act != '')
              .map((activity, index) => {
                return (
                  <div key={index * 19} className="scheduleActivityGridItem">
                    {activity}
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    )
  }

  function ScheduleComponentMobileFriday() {
    return (
      <div className="scheduleComponentContainer ">
        <div className="scheduleOxGrid ">
          <p className="scheduleTitle ">Friday</p>
          <div className="scheduleCardBodyContainer">
            <div className="schedulerBodyOxGrid">
              <div className="scheduleOyHourGrid ">
                {hoursArrayFriday.map((hour, index) => {
                  return (
                    <div
                      key={'FridayHour' + index}
                      className="scheduleHourGridItem "
                    >
                      {hour}
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyBubbleGrid ">
                {fridayBubbleOpt.map((bubbleOpt, index) => {
                  return (
                    <div
                      key={'FridayBubble' + index}
                      className="scheduleBubbleGridItem "
                    >
                      <Bubble
                        key={index * 17}
                        connectTop={bubbleOpt.connectTop}
                        connectBotomn={bubbleOpt.connectBotomn}
                        colorHashT={bubbleOpt.colorHashT}
                        colorHashC={bubbleOpt.colorHashC}
                        colorHashB={bubbleOpt.colorHashB}
                        width="7vh"
                        height="7vh"
                      ></Bubble>
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyActivityGrid">
                {activityArrayFiday.map((activity, index) => {
                  return (
                    <div
                      key={'FridayActivity' + index}
                      className="scheduleActivityGridItem"
                    >
                      {activity}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function ScheduleComponentMobileSaturday() {
    return (
      <div className="scheduleComponentContainer">
        <div className="scheduleOxGrid ">
          <p className="scheduleTitle ">Saturday</p>
          <div className="scheduleCardBodyContainer">
            <div className="schedulerBodyOxGrid">
              <div className="scheduleOyHourGrid ">
                {hoursArraySaturday.map((hour, index) => {
                  return (
                    <div
                      key={'FridayHour' + index}
                      className="scheduleHourGridItem "
                    >
                      {hour}
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyBubbleGrid ">
                {saturdayBubbleOpt.map((bubbleOpt, index) => {
                  return (
                    <div
                      key={'FridayBubble' + index}
                      className="scheduleBubbleGridItem "
                    >
                      <Bubble
                        key={index * 17}
                        connectTop={bubbleOpt.connectTop}
                        connectBotomn={bubbleOpt.connectBotomn}
                        colorHashT={bubbleOpt.colorHashT}
                        colorHashC={bubbleOpt.colorHashC}
                        colorHashB={bubbleOpt.colorHashB}
                        width="7vh"
                        height="7vh"
                      ></Bubble>
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyActivityGrid">
                {activityArraySaturday.map((activity, index) => {
                  return (
                    <div
                      key={'FridayActivity' + index}
                      className="scheduleActivityGridItem"
                    >
                      {activity}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function ScheduleComponentMobileSaturdy() {
    return (
      <div className="scheduleComponentContainer ">
        <div className="scheduleOxGrid ">
          <p className="scheduleTitle ">Saturday</p>
          <div className="scheduleCardBodyContainerSaturday">
            <div className="schedulerBodyOxGridSaturday">
              <div className="scheduleOyHourGridSaturday ">
                {hoursArraySaturday.map((hour, index) => {
                  return (
                    <div
                      key={'SaturdayHour' + index}
                      className="scheduleHourGridItemSaturday "
                    >
                      {hour}
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyBubbleGridSaturday ">
                {saturdayBubbleOpt.map((bubbleOpt, index) => {
                  return (
                    <div
                      key={'SaturdayBubble' + index}
                      className="scheduleBubbleGridItemSaturday "
                    >
                      <Bubble
                        key={index * 17}
                        connectTop={bubbleOpt.connectTop}
                        connectBotomn={bubbleOpt.connectBotomn}
                        colorHashT={bubbleOpt.colorHashT}
                        colorHashC={bubbleOpt.colorHashC}
                        colorHashB={bubbleOpt.colorHashB}
                        width="6vh"
                        height="6vh"
                      ></Bubble>
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyActivityGridSaturday">
                {activityArraySaturday.map((activity, index) => {
                  return (
                    <div
                      key={'SaturdayActivity' + index}
                      className="scheduleActivityGridItemSaturday"
                    >
                      {activity}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function ScheduleComponentMobileSunday() {
    return (
      <div className="scheduleComponentContainer ">
        <div className="scheduleOxGrid ">
          <p className="scheduleTitle ">Sunday</p>
          <div className="scheduleCardBodyContainerSaturday">
            <div className="schedulerBodyOxGridSaturday">
              <div className="scheduleOyHourGridSaturday ">
                {hoursArraySunday.map((hour, index) => {
                  return (
                    <div
                      key={'SundayHour' + index}
                      className="scheduleHourGridItemSaturday "
                    >
                      {hour}
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyBubbleGridSaturday ">
                {sundayBubbleOpt.map((bubbleOpt, index) => {
                  return (
                    <div
                      key={'SundayBubble' + index}
                      className="scheduleBubbleGridItemSaturday "
                    >
                      <Bubble
                        key={index * 17}
                        connectTop={bubbleOpt.connectTop}
                        connectBotomn={bubbleOpt.connectBotomn}
                        colorHashT={bubbleOpt.colorHashT}
                        colorHashC={bubbleOpt.colorHashC}
                        colorHashB={bubbleOpt.colorHashB}
                        width="6vh"
                        height="6vh"
                      ></Bubble>
                    </div>
                  )
                })}
              </div>

              <div className="scheduleOyActivityGridSaturday">
                {activityArraySunday.map((activity, index) => {
                  if (activity != '') {
                    return (
                      <div
                        key={'SundayActivity' + index}
                        className="scheduleActivityGridItemSaturday"
                      >
                        {activity}
                      </div>
                    )
                  } else {
                    return (
                      <div
                        key={'SundayActivity' + index}
                        className="scheduleActivityGridItemSaturdayNoBorder"
                      >
                        {activity}
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (mobile) {
    return (
      <div>
        <div className="schedulePageContainer ">
          <div className="schedulePageGridContainer">
            <SwipeableViews
              className="swipeContainer"
              containerStyle={{ width: '100vw' }}
              slideStyle={{
                overflow: 'visible',
                width: '100vw'
              }}
              hysteresis={0.3}
              index={1}
              resistance
              enableMouseEvents
              springConfig={{
                duration: '0.3s',
                easeFunction: 'ease',
                delay: '0s'
              }}
            >
              <ScheduleComponentMobileFriday />
              <ScheduleComponentMobileSaturdy />
              <ScheduleComponentMobileSunday />
            </SwipeableViews>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={true} mobile={mobile} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Helmet>
          <title>Event Schedule | ClujWHO</title>
          <meta
            name="description"
            content="ClujWHO takes place over three days. Discover the event talksthat will be available and their time and location so you don't miss out on any of them. "
          />
        </Helmet>
        <div className="schedulePageContainer ">
          <div className="schedulePageGridContainer">
            <div className="scheduleGridItem">
              <ScheduleComponentWebFriday />
            </div>
            <div className="scheduleGridItem">
              <ScheduleComponentWebSaturday />
            </div>
            <div className="scheduleGridItem">
              <ScheduleComponentWebSunday />
            </div>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  }
}
