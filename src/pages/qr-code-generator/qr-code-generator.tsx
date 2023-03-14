import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import QRCode from 'react-qr-code'
import { QrCodeGeneratorToolWeb } from './web/qr-code-generator'

import './qr-code-generator.scss'

export function QrCodeGeneratorTool(props: any): JSX.Element {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
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

  if (mobile) {
    return (
      <div>
        <div className="aboutUsPageContainer backgroud-image ">
          QR CODE GENERATOR
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <QrCodeGeneratorToolWeb />

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  }
}
