import { useInView } from 'react-intersection-observer'
import { NavBarComponent } from '../login/components/navbar/navbar-component'

import './committees.scss'
import { WorldMap, WorldMapNewColors } from './world-map'
import { useState, useEffect, useRef } from 'react'

import { EURODescriptionNew } from './descriptions/Euro/Euro'
import { AFRODescriptionNew } from './descriptions/Afro/Afro'
import { EMRODescriptionNew } from './descriptions/Emro/Emro'
import { AMRODescriptionNew } from './descriptions/Amro/Amro'
import { SEARODescriptionNew } from './descriptions/Searo/Searo'
import { WPROescriptionNew } from './descriptions/Wpro/Wpro'

import { Footer } from '../../common-components/components/footer/footer'
import WorldMapEuro from './descriptions/Euro/EuroMap'
import WorldMapAfro from './descriptions/Afro/AfroMap'
import WorldMapEmro from './descriptions/Emro/EmroMap'
import WorldMapAmro from './descriptions/Amro/AmroMap'
import WorldMapSearo from './descriptions/Searo/SearoMap'
import WorldMapWpro from './descriptions/Wpro/WproMap'
import { Helmet } from 'react-helmet'

export function Committees(props: any): JSX.Element {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [mobile, setMobile] = useState(false)

  const AFRO_desc_ref = useRef<any>(null)
  const EMRO_desc_ref = useRef<any>(null)
  const EURO_desc_ref = useRef<any>(null)
  const AMRO_desc_ref = useRef<any>(null)
  const WPRO_desc_ref = useRef<any>(null)
  const SEARO_desc_ref = useRef<any>(null)

  useEffect(() => {
    if (dimensions.width < 600) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [dimensions])

  function handleMapClick(comm: string) {
    const scrollOptions = { behavior: 'smooth', block: 'center' }
    switch (comm) {
      case 'AFRO':
        AFRO_desc_ref.current.scrollIntoView(scrollOptions)
        break
      case 'EMRO':
        EMRO_desc_ref.current.scrollIntoView(scrollOptions)
        break
      case 'EURO':
        EURO_desc_ref.current.scrollIntoView(scrollOptions)
        break
      case 'AMRO':
        AMRO_desc_ref.current.scrollIntoView(scrollOptions)
        break
      case 'WPRO':
        WPRO_desc_ref.current.scrollIntoView(scrollOptions)
        break
      case 'SEARO':
        SEARO_desc_ref.current.scrollIntoView(scrollOptions)
        break
      default:
        break
    }
  }

  if (mobile) {
    return (
      <div className="committees-backgroud">
        <div className="world-map-container">
          <WorldMapNewColors />
        </div>

        <div className="committees-content">
          <EURODescriptionNew mobile={mobile} />
          <AFRODescriptionNew mobile={mobile} />
          <EMRODescriptionNew mobile={mobile} />
          <AMRODescriptionNew mobile={mobile} />
          <SEARODescriptionNew mobile={mobile} />
          <WPROescriptionNew mobile={mobile} />
        </div>

        <div className="footer-container">
          <Footer />
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
          <title>Comittees | ClujWHO</title>
          <meta
            name="description"
            content="ClujWHO is formed out of six committees. Learn more about each committee, their challenges and some of their plans to combat the issues they are facing."
          />
        </Helmet>
        <div className="committees-web-backgroud ">
          <div className="committees-web-page-grid">
            <div className="map-container-container ">
              <div className="map-container">
                <WorldMap onCommitteeClick={handleMapClick} />
              </div>
            </div>

            <div className="descriptions-list-container ">
              <div className="descriptions-list">
                <EuroCard refCont={EURO_desc_ref} mobile={mobile} />

                <AfroCard refCont={AFRO_desc_ref} mobile={mobile} />

                <EmroCard refCont={EMRO_desc_ref} mobile={mobile} />

                <AmroCard refCont={AMRO_desc_ref} mobile={mobile} />

                <SearoCard refCont={SEARO_desc_ref} mobile={mobile} />

                <WproCard refCont={WPRO_desc_ref} mobile={mobile} />
              </div>
            </div>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={false} mobile={mobile} />
        </div>
      </div>
    )
  }
}

function EuroCard(props: { mobile: any; refCont: any }) {
  const [ref, inView] = useInView({
    threshold: 0.99
  })

  const { refCont } = props

  return (
    <div ref={refCont}>
      <div className="description-list-item" ref={ref}>
        <div
          className={`description-map-container ${
            inView ? 'description-map-container-left' : null
          }`}
        >
          <WorldMapEuro />
        </div>
        <div
          className={`description-container ${
            inView ? 'description-container-right' : null
          }`}
        >
          <EURODescriptionNew mobile={props.mobile} />
        </div>
      </div>
    </div>
  )
}

function EmroCard(props: { mobile: any; refCont: any }) {
  const [ref, inView] = useInView({
    threshold: 0.99
  })
  const { refCont } = props

  return (
    <div ref={refCont}>
      <div className="description-list-item" ref={ref}>
        <div
          className={`description-map-container ${
            inView ? 'description-map-container-left' : null
          }`}
        >
          <WorldMapEmro />
        </div>
        <div
          className={`description-container ${
            inView ? 'description-container-right' : null
          }`}
        >
          <EMRODescriptionNew mobile={props.mobile} />
        </div>
      </div>
    </div>
  )
}

function AfroCard(props: { mobile: any; refCont: any }) {
  const [ref, inView] = useInView({
    threshold: 0.99
  })
  const { refCont } = props

  return (
    <div ref={refCont}>
      <div className="description-list-item" ref={ref}>
        <div
          className={`description-map-container ${
            inView ? 'description-map-container-left' : null
          }`}
        >
          <WorldMapAfro />
        </div>
        <div
          className={`description-container ${
            inView ? 'description-container-right' : null
          }`}
        >
          <AFRODescriptionNew mobile={props.mobile} />
        </div>
      </div>
    </div>
  )
}

function AmroCard(props: { mobile: any; refCont: any }) {
  const [ref, inView] = useInView({
    threshold: 0.99
  })
  const { refCont } = props

  return (
    <div ref={refCont}>
      <div className="description-list-item" ref={ref}>
        <div
          className={`description-map-container ${
            inView ? 'description-map-container-left' : null
          }`}
        >
          <WorldMapAmro />
        </div>
        <div
          className={`description-container ${
            inView ? 'description-container-right' : null
          }`}
        >
          <AMRODescriptionNew mobile={props.mobile} />
        </div>
      </div>
    </div>
  )
}

function SearoCard(props: { mobile: any; refCont: any }) {
  const [ref, inView] = useInView({
    threshold: 0.99
  })
  const { refCont } = props

  return (
    <div ref={refCont}>
      <div className="description-list-item" ref={ref}>
        <div
          className={`description-map-container ${
            inView ? 'description-map-container-left' : null
          }`}
        >
          <WorldMapSearo />
        </div>
        <div
          className={`description-container ${
            inView ? 'description-container-right' : null
          }`}
        >
          <SEARODescriptionNew mobile={props.mobile} />
        </div>
      </div>
    </div>
  )
}

function WproCard(props: { mobile: any; refCont: any }) {
  const [ref, inView] = useInView({
    threshold: 0.99
  })
  const { refCont } = props

  return (
    <div ref={refCont}>
      <div className="description-list-item" ref={ref}>
        <div
          className={`description-map-container ${
            inView ? 'description-map-container-left' : null
          }`}
        >
          <WorldMapWpro />
        </div>
        <div
          className={`description-container ${
            inView ? 'description-container-right' : null
          }`}
        >
          <WPROescriptionNew mobile={props.mobile} />
        </div>
      </div>
    </div>
  )
}

interface SignitureProps {
  name: string
  image: any
  mobile: any
}

function Signiture(props: SignitureProps) {
  const { mobile, name, image } = props

  if (mobile) {
    return (
      <div className="signiture-container">
        <div className="signiture-card">
          <img className="signiture-image" src={image}></img>
          <div className="signiture-name">{name}</div>
        </div>
      </div>
    )
  } else {
    return <> </>
  }
}
