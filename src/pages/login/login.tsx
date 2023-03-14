import './login.scss'
import '../../common-components/common.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from './login.actions'

import { NavBarComponent } from './components/navbar/navbar-component'
import { useEffect, useState } from 'react'
import InView, { useInView } from 'react-intersection-observer'

import ClujWhoLogo from './../../assets/ClujWHOLogo.png'
import './login.scss'
import Paper from '@mui/material/Paper'
import { TeamMemberCard } from './components/team-member-component/team-member-component'

function Home(props: any): JSX.Element {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', handleResize, false)
  }, [])

  useEffect(() => {
    if (dimensions.width < 600) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [dimensions])

  if (mobile) {
    return (
      <>
        <div className="homePageGridContainerMobile ">
          <div className="titleContainer " ref={ref}>
            <div className="titleGrid">
              {/* //?IMAGE */}
              <div className="logoContainer ">
                <div className="logoBackground">
                  <img className="logo" src={ClujWhoLogo} />
                </div>
              </div>
              {/* //?TITLE */}
              <div className="tileGridItem ">
                <h2 className="title">Cluj World Health Organisation Model</h2>
              </div>
              {/* //?MESSAGE */}
              <div className="tileGridItem ">
                <div className="message ">
                  First of its kind in Eastern Europe
                </div>
              </div>
            </div>
          </div>

          <div className="page-grid-item ">
            <div className="paper-flex">
              <div className="out-paper">
                <Paper elevation={10}>
                  <div className="in-paper">We need a description here!</div>
                </Paper>
              </div>
            </div>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="homePageGridContainerMobile ">
          <div className="titleContainer " ref={ref}>
            <div className="titleGrid">
              {/* //?IMAGE */}
              <div className="logoContainer ">
                <div className="logoBackground">
                  <img className="logo" src={ClujWhoLogo} />
                </div>
              </div>
              {/* //?TITLE */}
              <div className="tileGridItem ">
                <h2 className="title">Cluj World Health Organisation Model</h2>
              </div>
              {/* //?MESSAGE */}
              <div className="tileGridItem ">
                <div className="message ">
                  First of its kind in Eastern Europe
                </div>
              </div>
            </div>
          </div>

          <div className="page-grid-item ">
            <div className="paper-flex">
              <div className="out-paper">
                <Paper elevation={10}>
                  <div className="in-paper">We need a description here!</div>
                </Paper>
              </div>
            </div>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={false} mobile={mobile} />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({
  ...state
})

const mapDispatchToProps = (dispatch: any) => ({
  dispatch,
  ...bindActionCreators({ login }, dispatch)
})

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home)
// conecteaza pagina la store, deci avem access la store
