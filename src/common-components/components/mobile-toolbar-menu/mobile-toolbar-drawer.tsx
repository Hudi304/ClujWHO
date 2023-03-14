import './navbar-component.scss'

import ClujWhoLogoBar from '../../../../assets/ClujWHOLogoBar.png'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'

export function NavBarComponent(props: any): JSX.Element {
  const { inView } = props

  const [navBarClasses, setNavBarClasses] = useState('')
  // const history = useHistory()
  const navigate = useNavigate()

  useEffect(() => {
    if (inView) {
      setNavBarClasses('')
    } else {
      setNavBarClasses('nav-bar-active')
    }
  }, [inView])

  function redirect(path: string, e: any) {
    navigate(path)
  }

  if (props.mobile) {
    return <div className={`nav-bar-component ${navBarClasses}`}></div>
  } else {
    return (
      <div className={`nav-bar-component ${navBarClasses}`}>
        <div className="nav-bar-container-grid">
          <div className="nav-bar-logo-container">
            <img className="nav-bar-logo" src={ClujWhoLogoBar} />
          </div>

          <div className="nav-bar-flex-container">
            <div className="nav-bar-buttons-container">
              <NavBarButton
                text={'Home'}
                onClick={(e: any) => {
                  redirect('/DevClujWho/home', e)
                }}
              />
              {/* <NavBarButton
                text={'Apply now'}
                onClick={(e: any) => {
                  redirect('/DevClujWho/apply_now', e)
                }}
              /> */}
              <NavBarButton
                text={'About us'}
                onClick={(e: any) => {
                  redirect('/DevClujWho/about_us', e)
                }}
              />
              <NavBarButton
                text={'Schedule'}
                onClick={(e: any) => {
                  redirect('/DevClujWho/schedule', e)
                }}
              />
              <NavBarButton
                text={'Committees'}
                onClick={(e: any) => {
                  redirect('/DevClujWho/committees', e)
                }}
              />
              <NavBarButton
                text={'Our Team'}
                onClick={(e: any) => {
                  redirect('/DevClujWho/our_team', e)
                }}
              />
              <NavBarButton
                text={'Resources'}
                onClick={(e: any) => {
                  redirect('/DevClujWho/resources', e)
                }}
              />
              <NavBarButton
                text={'Contact'}
                onClick={(e: any) => {
                  redirect('/DevClujWho/contact', e)
                }}
              />
              <NavBarButton
                text={'Sponsors'}
                onClick={(e: any) => {
                  redirect('/DevClujWho/sponsors', e)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

interface NavBarButtonProps {
  text: string
  onClick: any
}

function NavBarButton(props: NavBarButtonProps): JSX.Element {
  const { text, onClick } = props
  return (
    <button className="nav-bar-btn" onClick={onClick}>
      {text}
    </button>
  )
}
