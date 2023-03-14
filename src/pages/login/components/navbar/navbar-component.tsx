import './navbar-component.scss'
import ClujWhoLogo from '../../../../assets/ClujWHOLogo.png'
import { useState, useEffect } from 'react'
import {
  AccountBalance,
  CalendarToday,
  Home,
  Info,
  Menu
} from '@mui/icons-material'
import { IconButton, List, SwipeableDrawer } from '@mui/material'
import { blue, pink } from '@mui/material/colors'
import { minWidth } from '@mui/system'
import { useNavigate } from 'react-router-dom'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export function NavBarComponent(props: any): JSX.Element {
  const { inView } = props

  const [navBarClasses, setNavBarClasses] = useState('')
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const [drawerOpen, setDrawerOpen] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (!props.mobile) {
      if (inView) {
        setNavBarClasses('nav-bar-active')
      } else {
        setNavBarClasses('nav-bar-active')
      }
    } else {
      setNavBarClasses('nav-bar-active-mobile')
    }
  }, [inView])

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  function redirect(path: string, e: any) {
    navigate(path)
  }

  if (props.mobile) {
    return (
      <>
        <div className={`nav-bar-component-mobile ${navBarClasses} `}>
          <div className="nav-bar-mobile-hamburger-container ">
            <IconButton
              className="hamburger-menu"
              onClick={() => {
                toggleDrawer('left', true)
                setDrawerOpen(true)
              }}
              aria-label="delete"
            >
              <Menu
                className="hamburger-menu"
                sx={{ color: '#bbc5d1', fontSize: '4vh' }}
              />
            </IconButton>
          </div>
          <div className="nav-bar-mobile-title "> ClujWHO</div>
          <div className=""></div>
        </div>

        <div>
          <SwipeableDrawer
            className="menu-drawer"
            anchor={'left'}
            open={drawerOpen}
            onClose={() => {
              setDrawerOpen(false)
            }}
            onOpen={() => {
              setDrawerOpen(true)
            }}
            disableSwipeToOpen={false}
          >
            <List className="menu-btn-list">
              <div className="menu-list-item">
                <IconButton
                  className="menu-icon-btn"
                  onClick={e => {
                    redirect('/home', e)
                    setDrawerOpen(false)
                  }}
                  aria-label="delete"
                >
                  <Home sx={{ color: blue[500], fontSize: '4vh' }} />
                  Home
                </IconButton>
              </div>

              <div className="menu-list-item">
                <IconButton
                  className="menu-icon-btn"
                  onClick={e => {
                    redirect('/about_us', e)
                    setDrawerOpen(false)
                  }}
                  aria-label="delete"
                >
                  <Info sx={{ color: blue[500], fontSize: '4vh' }} />
                  About us
                </IconButton>
              </div>
              <div className="menu-list-item">
                <IconButton
                  className="menu-icon-btn"
                  onClick={e => {
                    redirect('/schedule', e)
                    setDrawerOpen(false)
                  }}
                  aria-label="delete"
                >
                  <CalendarToday sx={{ color: blue[500], fontSize: '4vh' }} />
                  Schedule
                </IconButton>
              </div>
              <div className="menu-list-item">
                <IconButton
                  className="menu-icon-btn"
                  onClick={e => {
                    redirect('/committees', e)
                    setDrawerOpen(false)
                  }}
                  aria-label="delete"
                >
                  <AccountBalance sx={{ color: blue[500], fontSize: '4vh' }} />
                  Committees
                </IconButton>
              </div>
            </List>
          </SwipeableDrawer>
        </div>
      </>
    )
  } else {
    return (
      <div className={`nav-bar-component ${navBarClasses}`}>
        <div className="nav-bar-container-grid">
          <div className="nav-bar-logo-container">
            <div className="iconContainer">
              <img className="nav-bar-logo" src={ClujWhoLogo} />
            </div>
            <p className="navBarTitle">ClujWHO</p>
          </div>

          <div className="nav-bar-buttons-container">
            <NavBarButton
              text={'Home'}
              onClick={(e: any) => {
                redirect('/home', e)
              }}
            />
            <NavBarButton
              style={{ minWidth: '112px' }}
              text={'About us'}
              onClick={(e: any) => {
                redirect('/about_us', e)
              }}
            />
            <NavBarButton
              text={'Schedule'}
              onClick={(e: any) => {
                redirect('/schedule', e)
              }}
            />
            <NavBarButton
              text={'Committees'}
              onClick={(e: any) => {
                redirect('/committees', e)
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

interface NavBarButtonProps {
  text: string
  onClick: any
  style?: any
}

function NavBarButton(props: NavBarButtonProps): JSX.Element {
  const { text, onClick, style } = props
  return (
    <button style={style} className="nav-bar-btn" onClick={onClick}>
      {text}
    </button>
  )
}
