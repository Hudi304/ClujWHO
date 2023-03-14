import './home.scss'

import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { NavBarComponent } from '../login/components/navbar/navbar-component'
import { login } from '../login/login.actions'
import Catedrala1080p_logo from '../../assets/ClujWho/Catedrala.jpg'
import OSM_Logo from '../../assets/ClujWho/siglaosmbuna_400.png'
import { Orbit } from './orbit'
import { LGBT } from '../../assets/ClujWho/icons/LGBT'
import Condom from '../../assets/ClujWho/icons/Condom'
import Baby from '../../assets/ClujWho/icons/Baby'
import Virus from '../../assets/ClujWho/icons/Virus'
import Teacher from '../../assets/ClujWho/icons/Teacher'
import Tear from '../../assets/ClujWho/icons/Tear'
import Genders from '../../assets/ClujWho/icons/Genders'
import Pregnant from '../../assets/ClujWho/icons/Pregnant'
import CancerRibbon from '../../assets/ClujWho/icons/CancerRibbon'
import Facebook from '../../assets/ClujWho/icons/Facebook'
import Instagram from '../../assets/ClujWho/icons/Instagram'
import Wave1 from '../../assets/ClujWho/waves/Wave1'
import FooterWaves from '../../assets/ClujWho/waves/FooterWaves'
import GrayToGray from '../../assets/ClujWho/waves/GrayToGray'
import SexHea from './../../assets/ClujWho/SexHea.png'
import UalLth from './../../assets/ClujWho/UalLth.png'
import Email from '../../assets/ClujWho/icons/Email'
import { WebFooter } from '../../common-components/components/footer/web-footer'
import Wave_6_7 from '../../assets/ClujWho/waves/Wave_6_7'
import WavesGlobe from '../../assets/ClujWho/waves/WavesGlobe'
import { Helmet } from 'react-helmet'

export const FaceBookUrl = 'https://www.facebook.com/clujwho'
export const InstaUrl = 'https://www.instagram.com/clujwho/'

//! 13/15 mai

function Home2(props: any): JSX.Element {
  const [ref, inView] = useInView({
    threshold: 0.1
  })

  const [ref5, inView5] = useInView({
    threshold: 0.99
  })

  const [ref6, inView6] = useInView({
    threshold: 0.1
  })

  const [webCourtains, inViewWebCourtains] = useInView({
    threshold: 0.99
  })

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const pop = () => {}

  window.addEventListener('scroll', () => pop(), true)

  const [mobile, setMobile] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  function globeAnimation(inView: boolean) {
    if (hasScrolled) {
      return true
    }
    if (inView && !hasScrolled) {
      setHasScrolled(true)
      return true
    }
    return false
  }

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
        <div className="moblie-BackGround">
          <div className="mobile-imageContainer  ">
            <img className="mobile-firstImage" src={Catedrala1080p_logo} />
          </div>

          <div className="mobile-secondContainer ">
            <Waves />
          </div>

          <div className="mobile-thirdContainer " ref={ref}>
            <div className="mobile-homePageTitleGridContainer">
              <div className="mobile-homePageTitleContainer ">
                <h1 className="mobile-homePageTitle1 ">Cluj World Health</h1>
                <h1 className="mobile-homePageTitle2 ">Organisation Model</h1>
              </div>
              {/* //?MESSAGE */}
              <div className="mobile-homePageMessageContainer ">
                <div className="mobile-homePageMessage ">
                  First of its kind in Eastern Europe
                </div>
              </div>

              <div className="mobile-homePageDateContainer">
                <b> May 13-15, 2022</b>
              </div>
            </div>
          </div>

          <div className="mobile-fourthContainer " ref={ref5}>
            <div className="mobile-fourthContainer-content-container ">
              <div className="mobile-fourthContainer-content ">
                {/* <p>WHY pick sexual health during a global pandemic?</p> */}
                <p className="title">This year, the theme is Sexual Health</p>
                <p>
                  When the whole world is watching over the coronavirus, we feel
                  other, very pressing global health threats have taken the back
                  seat. One of these issues is sexual health, a matter that
                  concerns every individual’s day to day lives and has
                  implications beyond the medical aspects.
                </p>
                <p>
                  Also, as this is our first edition and we want to bring as
                  many people, not necessarily familiar with these simulations,
                  we feel sexual health is the more approachable topic we could
                  choose.
                </p>
              </div>
            </div>

            <div
              className={`mobile-thirdContainerLeft ${
                inView5
                  ? 'mobile-thirdContainerLeftInside'
                  : 'mobile-thirdContainerLeftOutside'
              }`}
            >
              <div className="mobile-leftRect  ">
                <img className="sexual-image" src={SexHea} />
              </div>
              <div className="mobile-leftTri  "></div>
            </div>

            <div
              className={`mobile-thirdContainerRight ${
                inView5
                  ? 'mobile-thirdContainerRightInside'
                  : 'mobile-thirdContainerRightOutside'
              }`}
            >
              <div className="mobile-rightTri  "></div>
              <div className="mobile-rightRect  ">
                <img className="health-image" src={UalLth} />
              </div>
            </div>
          </div>

          <div className="wave1">
            <Wave1 />
          </div>

          <div className="mobile-fifthContainer " ref={ref6}>
            <div
              className={`mobile-orbit-container ${
                globeAnimation(inView6)
                  ? 'mobile-orbit-container-animation'
                  : ''
              }`}
            >
              <Orbit
                className={`mobile-orbit ${
                  globeAnimation(inView6) ? 'mobile-orbit-animation' : ''
                }`}
              />
            </div>

            <div className="mobile-globe-container-container">
              <div
                className={`mobile-globe-container ${
                  globeAnimation(inView6)
                    ? 'mobile-globe-container-animation'
                    : ''
                }`}
              >
                <Globe />
              </div>
            </div>
          </div>

          <div className="mobile-sixthContainer " ref={ref6}>
            <h2 className="mobile-main-topics">Main topics</h2>
            <h3 className="the-main">
              The main discussed topics are going to be:
            </h3>

            <div className="topic-list-container">
              <div className="topic-list">
                <div className="icon">
                  <Baby />
                </div>
                <div className="centerOy">Abortion & family planning</div>

                <div className="icon">
                  <Virus />
                </div>
                <div className="centerOy">STDs & STIs</div>

                <div className="icon">
                  <Teacher />
                </div>
                <div className="centerOy">Sexual education</div>

                <div className="icon">
                  <Tear />
                </div>
                <div className="centerOy">Domestic violence</div>

                <div className="icon">
                  <Genders />
                </div>
                <div className="centerOy">Gender discrepancies</div>

                <div className="icon">
                  <CancerRibbon />
                </div>
                <div className="centerOy">Genital cancers</div>

                <div className="icon">
                  <Pregnant />
                </div>
                <div className="centerOy">
                  Pregnancy and birth complications
                </div>

                <div className="icon">
                  <LGBT />
                </div>
                <div className="centerOy">LGBTQIA+</div>

                <div className="icon">
                  <Condom />
                </div>
                <div className="list">
                  <div className="centerOy paddinTop">Access to :</div>
                  <div className="padding-left">Contraceptives</div>
                  <div className="padding-left">Medical treatments</div>
                  <div className="padding-left">Prophylaxis</div>
                </div>
              </div>
            </div>
          </div>

          <div className="waves2">
            <GrayToGray />
          </div>

          <div className="mobile-seventhContainer ">
            <h2 className="implications">Implications</h2>
            <div className="content">
              <p>
                Financial burdens – WHO estimates 1.4 billion USD go each year
                towards treatment of complications coming from the practice of
                female genital mutilation.
              </p>
              <p>
                Legal issues - Over 71 jurisdictions criminalize private,
                consensual sexual activities among same sex individuals.
              </p>
              <p>
                Social security – UN Women reported that 1 in 4 women feel more
                unsafe at home since COVID-19 and only 1 in 10 would seek help
                from the police.
              </p>
              <p>
                Cultural – the unfortunately underreported cases of domestic and
                sexual violence against men, as a cause of social prejudice,
                embarrassment and shame
              </p>
            </div>
          </div>

          <div className="mobile-waves-footer ">
            <FooterWaves />
          </div>

          <div className="footer">
            <div className="facebook-insta-container">
              <div className="facebook-icon-container">
                <a className="anchor" href={FaceBookUrl}>
                  <button className="anchor-button">
                    <Facebook />
                  </button>
                </a>
              </div>
              <div className="instagram-icon-container">
                <a className="anchor-insta" href={InstaUrl}>
                  <button className="anchor-button-insta">
                    <Instagram />
                  </button>
                </a>
              </div>
            </div>

            <div className="email-container">
              <div className="email-icon-container">
                <Email />
              </div>

              <h3 className="email">clujwho@osmcluj.ro</h3>
            </div>

            <div className="osm-logo-container">
              <img className="osm-logo" src={OSM_Logo} />
            </div>
          </div>

          <div className="mobile-fourthContainerWaves  ">
            <WavesBot />
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={false} mobile={mobile} />
        </div>
      </>
    )
  } else {
    return (
      <>
        <Helmet>
          <title>ClujWHO | World Health Organisation Model</title>
          <meta
            name="description"
            content="Cluj World Health Organization is the first student-led organisation in Eastern Europe whose mission is to educate students and professionals on health issues."
          />
          <meta
            name="google-site-verification"
            content="79cXqfnHwQNmbh_rsrixFkX5fIgPbfFbhjsqvQ16VxM"
          />
        </Helmet>
        <div className="desktopBackGround " id="desktopBackGround">
          <div className="firstImageContainer">
            <img className="web-firstImage" src={Catedrala1080p_logo} />
          </div>

          <div className="secondContainer">
            <Waves />
          </div>

          <div className="thirdContainer " ref={ref}>
            <div className="homePageTitleGridContainer">
              <div className="homePageTitleContainer ">
                <h1 className="homePageTitle">
                  Cluj World Health Organisation Model
                </h1>
              </div>
              <div className="homePageMessageContainer ">
                <div className="homePageMessage ">
                  First of its kind in Eastern Europe
                </div>
              </div>

              <div className="home-page-date">
                <b>May 13-15, 2022</b>
              </div>
            </div>
          </div>

          <div className="fourthContainerWaves">{/* <WavesBot /> */}</div>

          <div className="web-fourthContainer" ref={webCourtains}>
            <div className="web-fourthContainer-content-container ">
              <div className="web-fourthContainer-content ">
                {/* <p>WHY pick sexual health during a global pandemic?</p>
                 */}
                <p className="title">This year, the theme is Sexual Health</p>

                <p>
                  When the whole world is watching over the coronavirus, we feel
                  other, very pressing global health threats have taken the back
                  seat. One of these issues is sexual health, a matter that
                  concerns every individual’s day to day lives and has
                  implications beyond the medical aspects.
                </p>
                <p>
                  Also, as this is our first edition and we want to bring as
                  many people, not necessarily familiar with these simulations,
                  we feel sexual health is the more approachable topic we could
                  choose.
                </p>
              </div>
            </div>

            <div
              className={`web-thirdContainerLeft ${
                inViewWebCourtains
                  ? 'web-thirdContainerLeftInside'
                  : 'web-thirdContainerLeftOutside'
              }`}
            >
              <div className="web-leftRect  ">
                <img className="web-sexual-image" src={SexHea} />
              </div>
            </div>

            <div
              className={`web-thirdContainerRight ${
                inViewWebCourtains
                  ? 'web-thirdContainerRightInside'
                  : 'web-thirdContainerRightOutside'
              }`}
            >
              <div className="web-rightRect  ">
                <img className="web-health-image" src={UalLth} />
              </div>
            </div>
          </div>

          <div className="wavesGlobe">
            <WavesGlobe />
          </div>

          <div className="web-fifthContainer " ref={ref6}>
            <div
              className={`web-orbit-container ${
                globeAnimation(inView6) ? 'web-orbit-container-animation' : ''
              }`}
            >
              <Orbit
                className={`web-orbit ${
                  globeAnimation(inView6) ? 'web-orbit-animation' : ''
                }`}
              />
            </div>

            <div className="web-globe-container-container ">
              <div
                className={`web-globe-container ${
                  globeAnimation(inView6) ? 'web-globe-container-animation' : ''
                }`}
              >
                <Globe />
              </div>
            </div>
          </div>

          <div className="web-sixthContainer " ref={ref6}>
            <h2 className="web-main-topics">Main topics</h2>
            <h3 className="web-the-main">
              The main discussed topics are going to be:
            </h3>

            <div className="topic-list-container">
              <div className="topic-list">
                <div className="topic-list-item">
                  <div className="icon">
                    <Baby />
                  </div>
                  <div className="centerOy">Abortion & family planning</div>
                </div>

                <div className="topic-list-item">
                  <div className="icon">
                    <Virus />
                  </div>
                  <div className="centerOy">STDs & STIs</div>
                </div>

                <div className="topic-list-item">
                  <div className="icon">
                    <Teacher />
                  </div>
                  <div className="centerOy">Sexual education</div>
                </div>

                <div className="topic-list-item">
                  <div className="icon">
                    <Tear />
                  </div>
                  <div className="centerOy">Domestic violence</div>
                </div>

                <div className="topic-list-item">
                  <div className="icon">
                    <Genders />
                  </div>
                  <div className="centerOy">Gender discrepancies</div>
                </div>

                <div className="topic-list-item">
                  <div className="icon">
                    <CancerRibbon />
                  </div>
                  <div className="centerOy">Genital cancers</div>
                </div>

                <div className="topic-list-item">
                  <div className="icon">
                    <Pregnant />
                  </div>
                  <div className="centerOy">
                    Pregnancy and birth complications
                  </div>
                </div>

                <div className="topic-list-item">
                  <div className="icon">
                    <LGBT />
                  </div>
                  <div className="centerOy">LGBTQIA+</div>
                </div>

                <div className="topic-list-item">
                  <div className="icon">
                    <Condom />
                  </div>
                  <div className="list">
                    <div className="centerOy paddinTop">Access to :</div>
                    <div className="padding-left">Contraceptives</div>
                    <div className="padding-left">Medical treatments</div>
                    <div className="padding-left">Prophylaxis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="waves_6_7">
            <Wave_6_7 />
          </div>

          <div className="web-seventhContainer ">
            <div className="web-implications">Theme Implications</div>
            <div className="web-content">
              <p>
                Financial burdens – WHO estimates 1.4 billion USD go each year
                towards treatment of complications coming from the practice of
                female genital mutilation.
              </p>
              <p>
                Legal issues - Over 71 jurisdictions criminalize private,
                consensual sexual activities among same sex individuals.
              </p>
              <p>
                Social security – UN Women reported that 1 in 4 women feel more
                unsafe at home since COVID-19 and only 1 in 10 would seek help
                from the police.
              </p>
              <p>
                Cultural – the unfortunately underreported cases of domestic and
                sexual violence against men, as a cause of social prejudice,
                embarrassment and shame
              </p>
            </div>
          </div>

          <WebFooter />
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

export const HomePage2 = connect(mapStateToProps, mapDispatchToProps)(Home2)

function Waves() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="visual"
      viewBox="0 0 1920 400"
      width="100vw"
      height="21vw"
      version="1.1"
      className="waves"
    >
      <path
        d="M0 104L26.7 96.5C53.3 89 106.7 74 160 79.3C213.3 84.7 266.7 110.3 320 122.8C373.3 135.3 426.7 134.7 480 144.7C533.3 154.7 586.7 175.3 640 179.8C693.3 184.3 746.7 172.7 800 170.5C853.3 168.3 906.7 175.7 960 176C1013.3 176.3 1066.7 169.7 1120 159.8C1173.3 150 1226.7 137 1280 116.8C1333.3 96.7 1386.7 69.3 1440 77.7C1493.3 86 1546.7 130 1600 147C1653.3 164 1706.7 154 1760 127C1813.3 100 1866.7 56 1893.3 34L1920 12L1920 401L1893.3 401C1866.7 401 1813.3 401 1760 401C1706.7 401 1653.3 401 1600 401C1546.7 401 1493.3 401 1440 401C1386.7 401 1333.3 401 1280 401C1226.7 401 1173.3 401 1120 401C1066.7 401 1013.3 401 960 401C906.7 401 853.3 401 800 401C746.7 401 693.3 401 640 401C586.7 401 533.3 401 480 401C426.7 401 373.3 401 320 401C266.7 401 213.3 401 160 401C106.7 401 53.3 401 26.7 401L0 401Z"
        fill="#0751e6"
        fillOpacity="0.2"
      />
      <path
        d="M0 195L26.7 181.2C53.3 167.3 106.7 139.7 160 120.2C213.3 100.7 266.7 89.3 320 91.8C373.3 94.3 426.7 110.7 480 111.2C533.3 111.7 586.7 96.3 640 85.3C693.3 74.3 746.7 67.7 800 88C853.3 108.3 906.7 155.7 960 160.2C1013.3 164.7 1066.7 126.3 1120 117.8C1173.3 109.3 1226.7 130.7 1280 134.5C1333.3 138.3 1386.7 124.7 1440 122.8C1493.3 121 1546.7 131 1600 144.3C1653.3 157.7 1706.7 174.3 1760 187.5C1813.3 200.7 1866.7 210.3 1893.3 215.2L1920 220L1920 401L1893.3 401C1866.7 401 1813.3 401 1760 401C1706.7 401 1653.3 401 1600 401C1546.7 401 1493.3 401 1440 401C1386.7 401 1333.3 401 1280 401C1226.7 401 1173.3 401 1120 401C1066.7 401 1013.3 401 960 401C906.7 401 853.3 401 800 401C746.7 401 693.3 401 640 401C586.7 401 533.3 401 480 401C426.7 401 373.3 401 320 401C266.7 401 213.3 401 160 401C106.7 401 53.3 401 26.7 401L0 401Z"
        fill="#004bc6"
        fillOpacity="0.4"
      />
      <path
        d="M0 204L26.7 213.3C53.3 222.7 106.7 241.3 160 234.3C213.3 227.3 266.7 194.7 320 175C373.3 155.3 426.7 148.7 480 165.5C533.3 182.3 586.7 222.7 640 223C693.3 223.3 746.7 183.7 800 172.2C853.3 160.7 906.7 177.3 960 186.3C1013.3 195.3 1066.7 196.7 1120 207.7C1173.3 218.7 1226.7 239.3 1280 236.8C1333.3 234.3 1386.7 208.7 1440 196.5C1493.3 184.3 1546.7 185.7 1600 173.2C1653.3 160.7 1706.7 134.3 1760 131C1813.3 127.7 1866.7 147.3 1893.3 157.2L1920 167L1920 401L1893.3 401C1866.7 401 1813.3 401 1760 401C1706.7 401 1653.3 401 1600 401C1546.7 401 1493.3 401 1440 401C1386.7 401 1333.3 401 1280 401C1226.7 401 1173.3 401 1120 401C1066.7 401 1013.3 401 960 401C906.7 401 853.3 401 800 401C746.7 401 693.3 401 640 401C586.7 401 533.3 401 480 401C426.7 401 373.3 401 320 401C266.7 401 213.3 401 160 401C106.7 401 53.3 401 26.7 401L0 401Z"
        fill="#0044a7"
        fillOpacity="0.6"
      />
      <path
        d="M0 190L26.7 195.3C53.3 200.7 106.7 211.3 160 224C213.3 236.7 266.7 251.3 320 243.3C373.3 235.3 426.7 204.7 480 186.7C533.3 168.7 586.7 163.3 640 169.7C693.3 176 746.7 194 800 210.5C853.3 227 906.7 242 960 233.3C1013.3 224.7 1066.7 192.3 1120 188.3C1173.3 184.3 1226.7 208.7 1280 229.3C1333.3 250 1386.7 267 1440 274.5C1493.3 282 1546.7 280 1600 260.8C1653.3 241.7 1706.7 205.3 1760 187.7C1813.3 170 1866.7 171 1893.3 171.5L1920 172L1920 401L1893.3 401C1866.7 401 1813.3 401 1760 401C1706.7 401 1653.3 401 1600 401C1546.7 401 1493.3 401 1440 401C1386.7 401 1333.3 401 1280 401C1226.7 401 1173.3 401 1120 401C1066.7 401 1013.3 401 960 401C906.7 401 853.3 401 800 401C746.7 401 693.3 401 640 401C586.7 401 533.3 401 480 401C426.7 401 373.3 401 320 401C266.7 401 213.3 401 160 401C106.7 401 53.3 401 26.7 401L0 401Z"
        fill="#003c87"
        fillOpacity="0.8"
      />
      <path
        d="M0 254L26.7 255.8C53.3 257.7 106.7 261.3 160 261.5C213.3 261.7 266.7 258.3 320 252.7C373.3 247 426.7 239 480 245.7C533.3 252.3 586.7 273.7 640 277.2C693.3 280.7 746.7 266.3 800 260C853.3 253.7 906.7 255.3 960 249.5C1013.3 243.7 1066.7 230.3 1120 239.5C1173.3 248.7 1226.7 280.3 1280 285.7C1333.3 291 1386.7 270 1440 266.5C1493.3 263 1546.7 277 1600 271.5C1653.3 266 1706.7 241 1760 233.3C1813.3 225.7 1866.7 235.3 1893.3 240.2L1920 245L1920 401L1893.3 401C1866.7 401 1813.3 401 1760 401C1706.7 401 1653.3 401 1600 401C1546.7 401 1493.3 401 1440 401C1386.7 401 1333.3 401 1280 401C1226.7 401 1173.3 401 1120 401C1066.7 401 1013.3 401 960 401C906.7 401 853.3 401 800 401C746.7 401 693.3 401 640 401C586.7 401 533.3 401 480 401C426.7 401 373.3 401 320 401C266.7 401 213.3 401 160 401C106.7 401 53.3 401 26.7 401L0 401Z"
        fill="#0d3368"
        fillOpacity="0.9"
      />
      <path
        d="M0 319L26.7 318.8C53.3 318.7 106.7 318.3 160 317.3C213.3 316.3 266.7 314.7 320 308.5C373.3 302.3 426.7 291.7 480 293.2C533.3 294.7 586.7 308.3 640 309C693.3 309.7 746.7 297.3 800 288.7C853.3 280 906.7 275 960 282.7C1013.3 290.3 1066.7 310.7 1120 317.7C1173.3 324.7 1226.7 318.3 1280 306.2C1333.3 294 1386.7 276 1440 267.7C1493.3 259.3 1546.7 260.7 1600 269.5C1653.3 278.3 1706.7 294.7 1760 308.8C1813.3 323 1866.7 335 1893.3 341L1920 347L1920 401L1893.3 401C1866.7 401 1813.3 401 1760 401C1706.7 401 1653.3 401 1600 401C1546.7 401 1493.3 401 1440 401C1386.7 401 1333.3 401 1280 401C1226.7 401 1173.3 401 1120 401C1066.7 401 1013.3 401 960 401C906.7 401 853.3 401 800 401C746.7 401 693.3 401 640 401C586.7 401 533.3 401 480 401C426.7 401 373.3 401 320 401C266.7 401 213.3 401 160 401C106.7 401 53.3 401 26.7 401L0 401Z"
        fill="#172a49"
      />
      <path
        d="M0 330L26.7 338.5C53.3 347 106.7 364 160 364.5C213.3 365 266.7 349 320 343.7C373.3 338.3 426.7 343.7 480 342C533.3 340.3 586.7 331.7 640 337.7C693.3 343.7 746.7 364.3 800 362.7C853.3 361 906.7 337 960 326.7C1013.3 316.3 1066.7 319.7 1120 330.2C1173.3 340.7 1226.7 358.3 1280 369C1333.3 379.7 1386.7 383.3 1440 373.8C1493.3 364.3 1546.7 341.7 1600 333.7C1653.3 325.7 1706.7 332.3 1760 332.3C1813.3 332.3 1866.7 325.7 1893.3 322.3L1920 319L1920 401L1893.3 401C1866.7 401 1813.3 401 1760 401C1706.7 401 1653.3 401 1600 401C1546.7 401 1493.3 401 1440 401C1386.7 401 1333.3 401 1280 401C1226.7 401 1173.3 401 1120 401C1066.7 401 1013.3 401 960 401C906.7 401 853.3 401 800 401C746.7 401 693.3 401 640 401C586.7 401 533.3 401 480 401C426.7 401 373.3 401 320 401C266.7 401 213.3 401 160 401C106.7 401 53.3 401 26.7 401L0 401Z"
        fill="#1a202c"
      />
    </svg>
  )
}

function WavesBot() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="visual"
      viewBox="0 0 1920 100"
      width="1920"
      height="100"
      version="1.1"
    >
      <path
        d="M0 24L13.8 20.2C27.7 16.3 55.3 8.7 83.2 9.8C111 11 139 21 166.8 20.8C194.7 20.7 222.3 10.3 250.2 5.2C278 0 306 0 333.8 3C361.7 6 389.3 12 417.2 12.5C445 13 473 8 500.8 10.8C528.7 13.7 556.3 24.3 584.2 27C612 29.7 640 24.3 667.8 22.8C695.7 21.3 723.3 23.7 751.2 23.3C779 23 807 20 834.8 18.8C862.7 17.7 890.3 18.3 918.2 16.3C946 14.3 974 9.7 1001.8 7C1029.7 4.3 1057.3 3.7 1085.2 3.7C1113 3.7 1141 4.3 1168.8 5C1196.7 5.7 1224.3 6.3 1252.2 7.5C1280 8.7 1308 10.3 1335.8 13.8C1363.7 17.3 1391.3 22.7 1419.2 22.2C1447 21.7 1475 15.3 1502.8 13C1530.7 10.7 1558.3 12.3 1586.2 13.3C1614 14.3 1642 14.7 1669.8 14.2C1697.7 13.7 1725.3 12.3 1753.2 11.3C1781 10.3 1809 9.7 1836.8 11.7C1864.7 13.7 1892.3 18.3 1906.2 20.7L1920 23L1920 0L1906.2 0C1892.3 0 1864.7 0 1836.8 0C1809 0 1781 0 1753.2 0C1725.3 0 1697.7 0 1669.8 0C1642 0 1614 0 1586.2 0C1558.3 0 1530.7 0 1502.8 0C1475 0 1447 0 1419.2 0C1391.3 0 1363.7 0 1335.8 0C1308 0 1280 0 1252.2 0C1224.3 0 1196.7 0 1168.8 0C1141 0 1113 0 1085.2 0C1057.3 0 1029.7 0 1001.8 0C974 0 946 0 918.2 0C890.3 0 862.7 0 834.8 0C807 0 779 0 751.2 0C723.3 0 695.7 0 667.8 0C640 0 612 0 584.2 0C556.3 0 528.7 0 500.8 0C473 0 445 0 417.2 0C389.3 0 361.7 0 333.8 0C306 0 278 0 250.2 0C222.3 0 194.7 0 166.8 0C139 0 111 0 83.2 0C55.3 0 27.7 0 13.8 0L0 0Z"
        fill="#1a202c"
      />
    </svg>
  )
}

function Globe(style: any, className: string) {
  return (
    <div style={style} className={`globe-contaiener ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 2000 2000"
        style={style}
      >
        <defs>
          <clipPath id="clip-path">
            <path
              className="cls-1"
              d="M214.75,998.83c-.35-21,.49-49,3.19-69.82,2.45-18.79,4.92-44,8.19-62.62,3.55-20.22,9.32-47,14.54-66.88,4.7-17.87,11.87-41.47,18.05-58.88,6.84-19.27,17.62-44.33,25.32-63.28,7.91-19.47,21-44.4,31.67-62.49,18.11-30.59,44.77-69.89,65.87-98.5a522.3,522.3,0,0,1,47.31-55c12.19-12.07,27.92-28.72,40.73-40.12,18-16,42.81-36.37,61.83-51.12,12.64-9.8,30.36-21.71,43.8-30.37s31.85-19.25,45.65-27.27a644.27,644.27,0,0,1,81.17-39c16.4-6.38,38.35-14.73,55.1-20.14,17.06-5.52,40.13-11.86,57.51-16.26C831,233,853,228.67,869.56,225.76c15.13-2.66,24.15-3.84,46.41-6.44,7.73-.9,27.19-2.63,38-3.17,5.35-.26,12.48-.71,17.84-.84,10.26-.26,24-.54,34.22-.48,5.11,0,11.92.17,17,.32s11.94.48,17.05.69c5.32.22,12.39.7,17.7,1.11s12.69,1,18.12,1.54c5.74.56,13.37,1.46,19.1,2.09,5.88.65,13.69,1.79,19.55,2.63,17.43,2.49,37.66,6.38,47,8.38,16,3.43,37.08,8.81,52.85,13,11.81,3.17,27.38,8.08,38.91,12.16,16.24,5.74,37.72,13.88,53.6,20.53,24.82,10.41,56.61,27.18,80.38,39.79C1579.07,426,1705.42,641.32,1704.93,905.33c-.77,416.54-317,796.65-706.31,849,389.31-52.35,705.54-432.46,706.31-849,.49-264-125.86-479.29-317.59-588.22,18.61,10.87,43.48,25.44,60.77,38.3,13,9.68,30.74,22.11,43.3,32.37,15.81,12.91,36.95,30.19,51.19,44.81,12.1,12.43,28.77,28.5,40.32,41.44,13.44,15,30.74,35.68,42.93,51.75,10.77,14.19,24.51,33.6,34.11,48.6,10.79,16.84,24.62,39.69,33.8,57.46,8.33,16.13,19.14,37.81,26.34,54.48,8,18.43,17.64,43.4,24.1,62.4,12,35.22,23.06,83.74,30.2,120.25,4,20.27,6.73,47.74,8.43,68.32,1.57,19.19,1.83,44.89,2.46,64.13.77,23.42-1.15,54.73-4,78-2.28,18.77-5.36,43.82-8.82,62.41-3.76,20.17-9.8,46.89-15.22,66.68-4.87,17.8-12.27,41.29-18.62,58.61-7,19.21-18.06,44.18-26,63-7,16.67-18.51,37.93-27.45,53.64-10.29,18.09-25.47,41.35-36.6,58.93-11.93,18.82-30.45,42.19-44.78,59.25-22.09,26.29-53.58,59.81-79.42,82.43-18.27,16-43.56,36.28-62.94,50.91-12.68,9.57-30.51,21-43.83,29.69-14,9.11-33.51,20-48.21,28-11.82,6.42-27.83,14.54-40.12,20-17.57,7.8-41.16,17.87-59.19,24.52-16.92,6.23-39.85,13.53-57.21,18.4a807.6,807.6,0,0,1-82.63,18.62c-20.81,3.52-32.59,4.86-46.23,6.41-9.58,1.08-28,2.67-38,3.16-14.88.75-24.71,1.24-35,1.28-5.11,0-11.92.09-17,.05s-11.91-.23-17-.32-12-.4-17.14-.7c-10.65-.62-24.84-1.7-35.47-2.62-5.82-.51-13.56-1.46-19.37-2.12-3-.33-18.87-2.21-42-6.27-7.38-1.29-17.18-3.19-24.5-4.74-7.85-1.65-18.25-4.11-26.06-5.93-10-2.36-23.33-6-33.22-9s-22.86-6.86-32.48-10.3c-16.22-5.81-37.74-13.85-53.61-20.54-24.79-10.44-56.92-26.6-80.37-39.79-21.56-12.11-49.74-29.46-69.44-44.4-16.61-12.6-39.34-28.76-54.68-42.88-12.59-11.59-29.84-26.55-41.91-38.68-14.3-14.38-32.72-34.23-45.92-49.63-23.08-26.93-49.91-66.08-69.5-95.64-11.2-16.89-23.72-40.92-33-58.94-9.14-17.81-20.69-42-27.46-60.82-12.48-34.74-28.15-81.54-36.62-117.47-7.78-33-13.26-78-17-111.71C215.1,1043.82,215.06,1018.08,214.75,998.83Z"
            />
          </clipPath>
          <clipPath id="clip-path-2">
            <path
              className="cls-1"
              d="M612.7,1683.13c-13.61-7.89-31.75-18.49-44.71-27.41-20.64-14.2-47.64-33.94-67.2-49.61-26.73-21.4-58.91-54.07-82.65-78.76-15.61-16.24-34.92-39.44-47.77-57.94-11.9-17.14-28.05-39.82-39.12-57.51-9.57-15.28-21.17-36.36-29.58-52.3-9.54-18-20.72-42.93-28.55-61.78-7-17-14.68-40.26-21-57.51-7-19.18-14-45.62-17.94-65.64-7.35-37.06-15.27-87-17.9-124.65-2.41-34.51-3.05-81,1.15-115.3,2.51-20.51,4.38-48.12,8.68-68.33,3.89-18.29,8.31-42.85,13-60.95,5.1-19.66,12.17-45.9,19.59-64.81,6.67-17,14.92-40,22.36-56.66,8.26-18.51,20.16-42.82,29.9-60.6,8.59-15.68,20.77-36.2,30.61-51.13,11.35-17.2,26.85-40,40-55.88,22-26.59,52.25-61.46,77.38-85.13C474,417.07,494.87,399,510.9,386c12.5-10.16,29.7-23.06,43.08-32,18-12,42.45-27.29,61.1-38.22,11.84-6.94,28.06-15.47,40.48-21.29,12.13-5.69,28.33-13.25,40.65-18.49,10.28-4.38,24.22-9.61,34.66-13.57,17.06-6.47,40.35-13.61,57.92-18.51,8.52-2.38,19.9-5.48,28.53-7.4,16.34-3.65,38.21-8.2,54.7-11.17,6.94-1.25,16.26-2.64,23.27-3.51,6.12-.76,14.28-1.82,20.42-2.48,6-.65,14-1.45,19.95-1.9,6.5-.5,23.75-1.82,36.17-2.14,5.16-.14,12-.41,17.21-.43s11.92-.09,17,0,11.91.22,17,.32,11.95.42,17.06.69c5.29.27,12.34.7,17.61,1.1,5.86.44,19.58,1.47,37,3.61,6,.73,13.88,1.78,19.82,2.66,6.53,1,15.21,2.44,21.73,3.51,7,1.14,16.25,2.88,23.15,4.43,15.89,3.56,37,8.62,52.73,12.84,10.47,2.81,24.25,7.18,34.54,10.58,12,4,27.94,9.73,39.73,14.37,12.15,4.78,28.12,11.73,40,17,18.73,8.33,42.84,21.28,60.81,31.13-110.77-62.93-243.36-90.37-385.92-71.2,142.56-19.17,275.15,8.27,385.92,71.2h0c27.3,16.76,63.89,39.09,89.05,58.92,17.35,13.68,40,32.54,56.41,47.36,12.84,11.61,29.29,27.85,40.94,40.66,14.49,15.94,33.28,37.72,46.64,54.62,11,14,24.78,33.34,34.63,48.16,11.44,17.19,25.55,40.89,35.5,59,8.75,15.89,19,37.83,26.8,54.19,8.78,18.39,18.25,43.93,25,63.15,6.12,17.45,12.49,41.31,17.84,59A458.84,458.84,0,0,1,1774.4,869c2.41,18.79,6.41,43.78,8,62.66,1.72,20.89,2.9,48.84,2.93,69.79.07,38.19-4.92,89.08-10.44,126.86-3.3,22.55-9.36,52.46-16,74.27-5.35,17.67-12,41.42-18.18,58.81-6.75,18.91-16.12,44.08-25,62.1-8,16.25-18.2,38.13-27,54-9.72,17.52-23.52,40.44-34.62,57.12-9.81,14.75-23.57,34-34.54,47.89-12.53,15.89-29.86,36.62-43.73,51.36-11.74,12.49-27.73,28.87-40.36,40.47-15.24,14-36.17,32.07-52.48,44.81-12.61,9.85-29.76,22.58-43.11,31.39-18.13,12-43,26.93-61.75,37.81-11.69,6.76-27.84,14.82-40.06,20.58-14.48,6.84-33.95,15.7-48.92,21.4-17,6.47-39.78,14.66-57.13,20-16.8,5.2-39.47,11.24-56.6,15.19-31.85,7.34-58,11.27-70.71,13-12,1.59-28.06,3.33-40.13,4.36-15.53,1.32-29.6,1.89-36.36,2.16-2.6.1-16.49.61-34.3.48s-32.46-.92-34.07-1c-6.56-.36-20.21-1.12-35.55-2.63-11.62-1.15-27.08-3-38.63-4.7-16.75-2.45-23.71-3.8-44.37-7.82-8.08-1.57-18.76-4.11-26.77-6-8.76-2.07-20.35-5.15-29-7.63-9.74-2.8-22.71-6.64-32.3-9.94-12-4.13-27.93-9.73-39.72-14.37-12.16-4.79-28.13-11.74-40.06-17C654.78,1705.94,630.42,1693.42,612.7,1683.13Z"
            />
          </clipPath>
        </defs>
        <g id="Glob_rotitor" data-name="Glob rotitor">
          <circle className="cls-2" cx="1000.14" cy="1000.12" r="785.1" />
          <g className="cls-3">
            <g className="cls-3">
              <g className="cls-4">
                <g>
                  <path
                    className="cls-5"
                    d="M1530.91,431.54a593.23,593.23,0,0,0-143.57-114.43c57.35,35.2,86.13,52.86,145.46,106.28l32.89,32.18-.12-.12-1.52-1.56-.53-.53,0,0-1.07-.94c1.06,1.87,2.65,3.33,3.81,5.11-2.11-1.5-3.69-2.74-5.32-4s-1.59-1.29-14.24-12.44c-2.54-2.17-3.63-3.07-4.76-4l-.79-.52,0,0c-2-1.1-4.64-2.47-6.64-3.52-1.67-.83-1.67-.83-2.61-.92l-.08-.05a6.43,6.43,0,0,1-.83-.52"
                  />
                  <path
                    className="cls-5"
                    d="M506.34,390c6.95-5.07,13.64-10.48,20.46-15.72l2.44-1.8c3.61-2.35,6.94-4.36,10.44-6.36.5-.28.5-.28,22-13.58l-8.7,8.76a21,21,0,0,0-3.17,3.94c2.74-.65,4.61-2,10.8-6.41a12.5,12.5,0,0,0-.79,2.57A120.08,120.08,0,0,0,574,370.78c1.3.64,1.3.64,10.33,1.73a21.64,21.64,0,0,0,2.92.2l.84-.24c14.19-5,27.87-13.56,12.43-26.09l.23-.08a56.72,56.72,0,0,0,8-3.65l5.43-3.55.74-.55c7.15-5.43,7.15-5.43,32.56-17.7,7.92-3.85,9.57-4.65,20.16-12.75,2.87-2.27,5.38-4.21,7.91-6.12,5.43-4.11,5.43-4.11,9.09-5.88,18.82-9.05,20.37-12,22.34-15.77a4,4,0,0,1,1.85-1.65c.12-.05,12.35-5.6,15.76-8.89l-3.4-1.94c-4,.12-9,2.28-12.83,3.37l-1.17.41-.4.15-.08,0c-4.49,1.75-10.42,4.24-14.88,6.06-58.82,27.2-61.12,28.26-116.53,61.92-23.15,16.06-53.61,38.08-75.77,55.48q3.25-2.65,6.86-5.28"
                  />
                  <path
                    className="cls-5"
                    d="M757.46,1747.05c-1.46-.47-4.35-1.43-6.06-2l-5.39-1.82-.82-.28-2-.68,16.23,5.43-2-.65"
                  />
                  <path
                    className="cls-5"
                    d="M1758.37,862.58c2.89,4.34,3.71,6.61,6.7,22.91,2.32,13.21,2.32,13.21,3.12,35.93a110.93,110.93,0,0,1-.2,13.29l1.25.2c.37,5.9.4,6.93.66,15,.1,6.5-1.19,12.88-1.68,19.33-.37,2.68-.55,3.19-1,4.06-2,2.7-2,2.7-3.66,10l1.29,1.05a13.13,13.13,0,0,1,1.73.5l.48.62.09.17c.36.84.84,2,1.21,2.79.88-1.19,1.61-2.48,2.42-3.72q.36.51.69,1c2.52,5.72,2.48,15.8,1.65,29.18,0,.48-.07,1-.1,1.45h0v0l.89-2c.37-1.64.37-1.64.88-4.39l1.44.17c3.24-11.15,1.87-50.51,1.37-62.31-.26-6.22-.33-9-.4-11.51q-.21-9.16-.41-18.33c-.21-6-.25-7.23-.92-15.48l1.11,5.41c.2.47.4,1,.59,1.43h0l.84-.87c.38-2.53.7-4.71-2.53-27.58-2.81-19.66-2.81-19.66-4.15-26.92-7.63-33.22-19-77.25-29.07-109.83l-.56-1.61c-.36-1-.83-2.35-1.2-3.35s-.56-1.47-.73-1.89l1.06,4.4c.62,2.17.73,2.56,1.84,6.09,2.75,8.6,5.82,17.09,8.32,25.78.37,1.28.73,2.57,1.09,3.86,3.77,13.56,5.33,19.17,5.31,31.23,3.52,18.48,3.52,18.48,6.7,39.87,1.6,13.22,1.44,13.55.4,15.73-.89-.68-1-.81-1.07-.94l-.11-.23-3.39-7.45c-.89-1.52-1.48-2.27-2.38-2.42-.6,2.56-.06,6.14.08,8.77.09.14.23.32.32.46"
                  />
                  <path
                    className="cls-5"
                    d="M1728.66,1125.43l-.14-.28a20.29,20.29,0,0,0,6.76-10.11c-.7,3.94-1.65,9.18-2.35,13.11l-.86,4.47-2.07-4.49c-.66-1.39-1.09-2.24-1.34-2.7m9.61-48.26c-.07-.15-.18-.36-.26-.51a5.78,5.78,0,0,1,4.29-1.93c1.6.1,2.1,1.63,3.19,2.41.94-2.15.94-2.15,4.22-10.05l.3,2.26c1.16,8.47,1.57,9,2.12,9.74l-5.92,14-2.3,4q-1.89-2-3.93-4h0c.17-1.66.22-2.28.34-3.92l-.38-7-.17-.7a26.39,26.39,0,0,0-1.48-4.3m-3.39,67,11.28-14.71,7.09-11.18q1.44-6.62,2.76-13.26l13.53-39.51,4.73-14.23,4.36-16.37c-.52-1.35-1.09-2.71-1.7-4.07l-1.86-.66-3.19,6.85-3.49,10.22,0,.09c.8-3.75.8-3.75,2.52-13,1.17-6.6.78-13.44,3-19.87,1.18-2.59,1.18-2.59,1.89-3.18a10.59,10.59,0,0,1,1.14.3c1,.46,1,.46,1.75,2l.57,1.35c1.19,3.67,4.42,18-4.07,49.15l-4.42,13.65c-4,11.6-7.88,23.21-11.88,34.79-9,25.64-9,25.64-12,30.42-2.29,3.46-2.29,3.46-12.95,16.44a27.18,27.18,0,0,1-2.48,2.46,55,55,0,0,0,3.46-17.73"
                  />
                  <path
                    className="cls-5"
                    d="M1739.8,1094.53c-1.36,11.4-4.85,22.36-6.87,33.62l-.86,4.47.93,2.11a32.77,32.77,0,0,1,1.85,8.34l11.31-13.62,7.09-11.18q1.44-6.62,2.76-13.26l13.53-39.51,4.73-14.23,4.36-16.37c-.52-1.35-1.09-2.71-1.7-4.07l-1.86-.66-3.19,6.85-3.49,10.22,0,.09c-.38,1.67-.52,2.3-2.93,9.69-1.65,4.93-1.65,4.93-4.72,11.41-1.34,2.75-1.34,2.75-3.68,7-3.19,5.37-3.81,4.75-4.82,3.72-1.8,4.16-4.19,9.72-6,13.88l-2.3,4q-1.89-2-3.93-4h0c0,.43-.11,1-.16,1.44"
                  />
                  <path
                    className="cls-5"
                    d="M1729,1108.42l3.39-3.33q1.17-5.29,2.28-10.63l-1.47-1.31-2.81.7-2.48,7.32,1.09,7.25m-7.32.73c0-.57,0-1.34,0-1.92,1.07-.94,2.4-2.1,5.76-12.74a76.25,76.25,0,0,1,4.3-10.18c2.65-5.71,2.67-5.78,3.71-9.51.62,0,.81,0,2.06,1.15.29.36,1.19,1.45,2.4,6.22l.38,7-.08,1.11c-1,12.39-3.76,28.5-11.7,34.87l-.29-.51-.8-.72-.19,0a24.57,24.57,0,0,0-3.61.23,54.31,54.31,0,0,1-1.93-15"
                  />
                  <path
                    className="cls-5"
                    d="M1729,1108.42l3.39-3.33q1.17-5.29,2.28-10.63l-1.47-1.31-2.81.7-2.48,7.32,1.09,7.25"
                  />
                  <path
                    className="cls-5"
                    d="M1666.62,1154.9l.75.93,8.73-4.08,9.59-.21,7.4,1.8q1.85,1.28,3.61,2.53c1.77,1.27,3.5,2.53,5.18,3.8l8.81.54c1.28,1.07,2.53,2.13,3.75,3.2l5.8-1.33,5-5.19,3.41-3.25-5.29-11.7-6.62.71-9.51-1.2-3.61-5.8q-2.21-1.61-4.52-3.19l-6.42-1.19q-1.43,5.25-2.93,10.48l-4.44,3.32c-1.32-.83-2.67-1.67-4-2.5l-4.63,3.34c-1.74-1-3.52-2.07-5.32-3.1l-.27-2.64q-2.15,7.38-4.41,14.73m-5.65,17.64q8.7-26.19,15.75-53l.12.09c.74.74,1.14,1.14,2.35,7.28,2.54-.4,4.63-2.93,7.53-1.55,3.42-8.37,5.3-13,13.52-11.47,3,.56,3,.56,5.49,2.33l.48.34c2.54,1.81,3.67,5,6.32,6.66.55.36.55.36,5.53,1a22.54,22.54,0,0,0,5.57-.13l.77-.08a15.12,15.12,0,0,1,3-.13l.8.72.1.17c.86,1.56,1.08,2,3.74,7.81l.93,2.11c2.44,6.26,6.15,22.83-12.11,41.49-3.36,3.45-3.36,3.45-8,4.48-3.07.66-3.07.66-5-1s-2.08-1.75-7.95-2.12c-2.9-.19-2.9-.19-5.41-2q-2.22-1.63-4.53-3.27c-2-1.33-3.23-1.63-6.13-2.35-2.49-.53-3.14-.51-8.18-.4-2.56.16-4.19.92-7.16,2.29a28.54,28.54,0,0,1-5.56,2c-.54-.32-1.09-.63-1.64-.94l-.15-.17c0-.07-.13-.14-.19-.2"
                  />
                  <path
                    className="cls-5"
                    d="M1666.62,1154.9l.75.93,8.73-4.08,9.59-.21,7.4,1.8q1.85,1.28,3.61,2.53c1.77,1.27,3.5,2.53,5.18,3.8l8.81.54c1.28,1.07,2.53,2.13,3.75,3.2l5.8-1.33,5-5.19,3.41-3.25-5.29-11.7-6.62.71-9.51-1.2-3.61-5.8q-2.21-1.61-4.52-3.19l-6.42-1.19q-1.43,5.25-2.93,10.48l-4.44,3.32c-1.32-.83-2.67-1.67-4-2.5l-4.63,3.34c-1.74-1-3.52-2.07-5.32-3.1l-.27-2.64q-2.15,7.38-4.41,14.73"
                  />
                  <path
                    className="cls-5"
                    d="M1688.72,1067.57q2.35-11.83,4.37-23.75l2.8,10.68q-1.22,6.74-2.54,13.44l1,18.59,7.75,1.81c3.85-3,5.26-2.41,6-2.11q4.31,2.91,8.28,5.82c1.54.4,5.44-2,5.46-2.08,1.8-2.57,2.1-7,3-10l6.29-13.45,1.27-5.18a94.6,94.6,0,0,0,4.88-9.89c3.76-8.76,4.35-14.38,4.59-16.78l0,.7c.08,3.06.14,5.27-1.34,15.34l-.21,1.42a134.77,134.77,0,0,1-3.32,16.65c-2.24,9.14-2.24,9.14-7,19.2-2.64,5.74-3.34,12.23-6.88,17.62-1,1.45-1,1.45-8.61,6-2.65-2-5.41-4-8.29-6-2.28-1.37-2.38-1.28-5.15,1h-.42c-2.06,0-2.81-.22-7-1.2a18.11,18.11,0,0,1-3.29-.87c-2.16-1.76-3.87-3.15-4.81-21.94.13-.59.26-1.18.38-1.77l0-.12c1.8-4.57,1.8-4.57,2.68-13.08"
                  />
                  <path
                    className="cls-5"
                    d="M1693.09,1043.82l2.8,10.68q-1.22,6.74-2.54,13.44l1,18.59,7.75,1.81c3.85-3,5.26-2.41,6-2.11q4.31,2.91,8.28,5.82c4.8.11,4.8.11,8.47-12.11l6.29-13.45,1.27-5.18c-.41.7-.41.7-1.18,1.92l-1.33.33c-5.42.94-7.35-1.27-8.39-2.45-.76-.87-1.26-2.32-2.36-5.5-2-5.93-2.31-6.7-6.34-11.56-5.61-7.15-6.53-13.14-9.17-43.57a2.52,2.52,0,0,0-.7-1.5l-.08,0-1.6-.06c-.34,0-1,0-1.75-.07q-2.6,22.62-6.39,45"
                  />
                  <path
                    className="cls-5"
                    d="M1686,1080.77q1.42-6.58,2.73-13.2v1.5c-.06,2.27-.14,5.39-2.72,11.7"
                  />
                  <path
                    className="cls-5"
                    d="M1687.36,738.17,1698,752.5c2.93,4,3.29,4.46,4.77,6.34l1.91,1.21.26,0c4.53,5.79,8,12.34,12.5,18.14,1.63,10.09,2.9,14.06,9,33.12,4.27,13.18,4.65,13.72,7.14,17.23.84.75,1,.87,1.15,1l.15,0,2.82.14L1736,843.77c-1,7.54-1,7.54-.3,18.05,1,12,1.6,22.49,2,33,.87,17,1,19.15,10.75,39.84,1.65,4.62,1.65,4.62,6.24,28.12,2.34,12.17,2.6,12.45,4.63,14.65l.41-.05c2.52-3.38,2.9-3.9,4.2-22.25.53-5,.53-5,3-14.78,1.63-7.63,1.6-8.51.85-31.06-.52-10.57-.62-12.48-3.35-27.43-1.73-8.93-5.41-17.37-6.75-26.4l.84-2.06a30.2,30.2,0,0,1,3.47,5.88c.56,1.25,1.31,2.91,1.88,4.15l.27.38c2.18-3.23,2.18-3.23-3.16-39.1-3.11-17.89-3.11-17.89-3.11-18.34A198.6,198.6,0,0,0,1752.9,779c-.75-2.7-1.11-4-1.48-5.27-2.69-9.28-6-18.37-8.89-27.58-.75-2.48-1.67-5.81-2.35-8.32.19.05.35.46.51.87.61,1.68,1.41,3.92,2,5.61l-.39-1.13c-28.93-74.06-30.06-76.95-51.79-117.34-40-67.42-41.61-70-70.13-107.14-16.1-19.19-37.59-44.79-54.69-63.1l-1.64-1.68-.53-.53,0,0-1.07-.94c1,1.39,2.4,3.23,3.45,4.59a43.3,43.3,0,0,1-5-3.46c-4.35-3.64-10-8.69-14.24-12.44-1.42-1.2-3.32-2.8-4.76-4l-.79-.52,0,0-6.64-3.52-2.61-.92-.08-.05-.83-.52c75.41,82,130.14,186.59,156.45,306.63"
                  />
                  <path
                    className="cls-5"
                    d="M1755.21,1061.53l3.57-6.48,4.26-9.12,3.5-10.89,3.13-17.1q.52-6.84.93-13.71l-2.42,5.53-2.36-6.13-2.93-.63-2.14,18.49-7.24,27.53,1.7,12.51m-6.51-8.91.51-6.95.17-1c1.13-6.65,1.13-6.65,7-29.25a105.19,105.19,0,0,0,2.07-13.61c2.22-17.39,3.3-18,6.36-17.43a9.5,9.5,0,0,1,1.73.5l.48.62.09.17c.39.89.59,1.36,1.09,2.62l.47.16a21.86,21.86,0,0,1,2.07-3.71q.36.51.69,1c3.1,5.79,2,22.78,1.65,29.18,0,.48-.07,1-.1,1.45h0v0c-.74,10.41-.74,10.41-3.44,24.92-1.4,7.26-1.4,7.26-4.14,15.64-1.66,5-1.66,5-4.72,11.41-1.34,2.75-1.34,2.75-3.68,7-2,3.32-4.21,7.09-5.62,2.12-.56-2-1.35-7.94-1.69-10.48l-.13-1a129.08,129.08,0,0,1-.88-13.5"
                  />
                  <path
                    className="cls-5"
                    d="M1755.21,1061.53l3.57-6.48,4.26-9.12,3.5-10.89,3.13-17.1q.52-6.84.93-13.71l-2.42,5.53-2.36-6.13-2.93-.63-2.14,18.49-7.24,27.53,1.7,12.51"
                  />
                  <path
                    className="cls-5"
                    d="M1699.48,998.82c1.12.06,2.24.09,3.35.13l.08,0c.64.9.64.9,1.8,14.19,1.83,23.37,4.64,26.75,9.28,32.35,3.66,4.76,3.41,11.42,7.72,15.87,1.07,1.09,3.27,3.36,9.49,1.84l.47-.74a88.47,88.47,0,0,0,5.59-11.07c9.13-21.26,2.77-35,1.23-36.64l-.33-.26-.12,0c-.87-.25-.87-.25-2.53-.62a3.28,3.28,0,0,1-.45-1.5c-.28-6.15-1.3-9.21-6.93-26.2a77.1,77.1,0,0,1-2.56-11.21c-1.81-10.19-1.81-10.19-7-20.22-1.6-3.33-1.6-3.33-4.79-16.59-.54-2.11-1-3.66-1.76-6.15-2.34,5.6-5,8-7.79,7q-1.28,30.07-4.7,59.81"
                  />
                  <path
                    className="cls-5"
                    d="M1704.77,920.16l2.16-3.86-2-4.21q0,4-.12,8.07m.16-14.83q0-10-.2-19.94l.12.51c.7,2.93.7,2.93.92,3.91a49.37,49.37,0,0,0,2.92,8.33c13.45,28.38,0,42.44-4.36,40.93.33-11.26.58-22.48.6-33.74"
                  />
                  <path
                    className="cls-5"
                    d="M1704.77,920.16l2.16-3.86-2-4.21q0,4-.12,8.07"
                  />
                  <path
                    className="cls-5"
                    d="M1506.21,1455.75l1.61,3.61,17.27-11.23,7.5-14.13c14.84-16.25,34.83-37.77,49.11-54.52l8.09-10.77c-1.35-.89-2.74-1.79-4.15-2.68l25.47-34.76.87-12.21-1.54-22.89-.59-.9a912.12,912.12,0,0,1-103.64,160.48m-11.68,14.18a911,911,0,0,0,123.53-191.3l.07.09c2.64,4.18,2.64,4.18,4.09,25,.23,4.87.23,4.87-.36,13.3-1.78,13.91-2.49,14.88-20.7,39.78l-.11,1.41-1,3.64c-1.24,4.15-2.14,7.15-11.5,19.4-5.57,7.26-5.57,7.26-47.06,52.79a29.81,29.81,0,0,0-4.25,6c-9.09,15.46-11.06,16.72-29.89,28.78-8.23,5.11-9,4.92-10.59,4.52l-.81-.46-.09-.16c-.68-1.35-.68-1.35-1.31-2.79"
                  />
                  <path
                    className="cls-5"
                    d="M1506.21,1455.75l1.61,3.61,17.27-11.23,7.5-14.13c14.84-16.25,34.83-37.77,49.11-54.52l8.09-10.77c-1.35-.89-2.74-1.79-4.15-2.68l25.47-34.76.87-12.21-1.54-22.89-.59-.9a912.12,912.12,0,0,1-103.64,160.48"
                  />
                </g>
              </g>
            </g>
            <g className="cls-3">
              <g className="cls-6">
                <g>
                  <path
                    className="cls-5"
                    d="M1092.38,910.36a44.94,44.94,0,0,1-2.21,15.18l-4.56,5.86-.83.49a28.67,28.67,0,0,1-11.77,3.36l-2.87.07c-2.85.68-2.85.68-12.77,17.81-5.87,9.94-5.87,9.94-48.23,27-1.88,1.16-1.88,1.16-2.7,4.65-1.58,6.69-3.73,15.85-20.81,17q-18.18-.13-36.27-.51c-24.19-1.31-25.89-22.68-9.46-37.1,4.82-4.22,11.36-9.71,16.23-13.87,2.55-2.95,2.82-4.82,3.23-7.65,2.94-21,11.92-28.88,16.74-33.13,6-5.28,6-5.28,14-8.47,3.62-2,3.62-2,15.35-21.29,5.63-9.15,7-11.33,19.25-12.3,15.53-.14,30.61-.39,45.69-.78a28,28,0,0,1,12.44,3.06l4.93,5.47.43,1a46.91,46.91,0,0,1,3.18,13.84q.51,10.13,1,20.29"
                  />
                  <path
                    className="cls-5"
                    d="M1686.3,706c-.08,8,1.42,11.53,6.37,23.17,1.22,2.7,1.77,3.94,2.33,5.19,12.64,28.06,12.64,28.06,17.52,58.34l0,2.63c-.42,1-.51,1.13-.61,1.23-3.32,5.89-3.32,5.89,1.08,31.66,1.24,6.84,2.15,10.65,3.29,14.93l2.23,5.8.39.7c2.67,4.46,2.67,4.46,2.67,10.08-.08.51-.08.51,6.23,39.33-2.54-3.46-5.68-8.23-8.07-11.78l-2-.7-3.3,3.79a33.15,33.15,0,0,1-4.07,3.69q-3.62,2.58-7.47,5.13c-3,1.89-3,1.89-11.39-.12l-2.43,0c1.89,3.48,4.93,7.83,7.13,11.12,6.83,11.37,8.06,16.54,5.6,45.46-1.35,13.1-1.35,13.1-1.17,18.53.64,15.88.8,19.65-11,40.6-7.6,14.3-7.6,14.3-12.18,19.49-11.47,14.13-15,32.57-25.69,47.15-7.23,9.24-17,16-24.21,25.31-4.25,5.6-4.75,5.94-8.89,7.93-2.52,1-3.29,1.22-4.07,1.48-10.92,2.42-11.46.2-20.43-37-2-7.85-2-7.85-2.6-14.93-.29-3.52-.4-4.92-.52-6.32-1.09-4.3-1.09-4.3-28.76-33-6.66-7-6.66-7-14.27-36.67a40.73,40.73,0,0,0-4-9.42c-3.06-5-4.84-7.86-5.81-9.34-.06,4-.07,4.45-.37,8.16-.83,9.55-.83,9.55-8.91,31.64-5.86,14.24-5.86,14.24-80.62,27.08l.1.62c2.11,13.66,1.47,15.21-.43,19.8-2.79,6.77-11,8.5-14,15.09a156.13,156.13,0,0,1-16.5,3.54c-2.74.72-4.25,1.11-82.74-37.18-3.7-.5-3.7-.5-13.61,5.77a93.39,93.39,0,0,1-8.22,4.68l-4.34.53-.82-.22c-5-1.54-5-1.54-51.82-21-1.37-.64-3.16-1.55-4.48-2.26a19.26,19.26,0,0,1-2-8.12l16.82-39.35c8.48-11.34,14.22-24.63-7.52-37.24,2.11-7,5.68-38.55-7.53-49.63l6-11.07a68.19,68.19,0,0,1,8.32-9.38l4.22-.47h.2l15.81.3c19.32.37,33.77,15.46,52.58,17.36,4.91.55,5.23.61,7.36,1l4.13,1.79.22.08c-1.43-11.75-2.15-17.65,12.5-27.44,4.43-2.93,4.43-2.93,10.65-5.82,1.83-.83,4.34-2,5.7-2.52l3.6-.62,1,.4a79.17,79.17,0,0,1,11.33,6c15.34,6.68,32.06,5.22,48,8.12,5.07.6,5.07.6,13.58-9.83l3.49-.79h.31c3.47.14,3.47.14,14.69.83,4.16-.26,4.33-.34,7.17-1.75,2.23-12.27,12.71-21.33,13.27-34.24.5-11.34-10.23-18.75-10.44-29.84a57.48,57.48,0,0,1,10.53-3.7c2.31-.76,2.31-.76,11-8.44a30.86,30.86,0,0,1,3.82-1.42c3.88-1.18,3.88-1.18,17.32-7.74,7.1-4.49,7.1-4.49,3.34-25l2.51-2.12a51.19,51.19,0,0,0,3.69-3.82c4.34.21,8.25,2.32,12.52,2.85l.94-.35c3.11-2.42,4.67-3.63,2.74-17.18-.15-1.69-.26-3.94-.29-5.63h0c7.32-.26,10.11,4.32,14.72,11.91,6.48,5.37,9.15,15.21,19.21,16.38a21.4,21.4,0,0,0,2.43-.9l.28-.61c1.87-1.15,3.59-3.71,4.7-5.61,1.53-3.83,1.54-3.93,2.33-9.06l3.2-1.56c2.58-.44,6.11.35,8.65.94,4,1.22,4,1.22,8.81,2.94,3.52,1.92,3.52,1.92,11.9,9.73,7.12,6.22,8,5.84,10,4.94.82-1.09,1.88-2.56,2.62-3.69,2.28-3.93,2.28-3.93,3-11.73a15.36,15.36,0,0,1,2.36-6.2,16,16,0,0,0-.18-6.56c-1-5.48-1-5.48-.2-7.86l2-.63c1,.1,1,.1,7.25,2.89l1.39-1.08.09-.2c.69-1.78.69-1.78,2.22-13.82,4.53,2.92,4.53,2.92,6.65,2.92l.39-.37.08-.24c.42-1.77.91-4.14,1.25-5.92a5.52,5.52,0,0,1,2.1-2.48,8.1,8.1,0,0,0,3.72-3.1c7.8.38,12.47,13.88,12.49,14"
                  />
                  <path
                    className="cls-5"
                    d="M1663.3,1184.18c-.82,5.35-1.65,8.48-4.12,17.74-2.28,8.17-2.28,8.17-14.49,46.93-6.87,20-41.81,78.05-42.15,78.62-8.93,14.42-48.68,63.57-49,64-4.15,5.28-4.15,5.28-18.74,26.16l-2.42,4.21c-3.27,8.94-5.57,15.39-8,21.75-1.92,5.71-1.92,5.71-5.93,21.08a76.46,76.46,0,0,0-1.16,9.3c-.34,5.2-.4,6.13-3.59,13.48-6.14,13-12,24.56-18.22,35.77-5.5,9.55-5.5,9.55-29.35,32.22-6.68,6.09-6.68,6.09-22.85,16.32-7.29,5-16.49,12.37-23.48,17.78-5.24,4.14-5.55,4.86-8,10.42a70.84,70.84,0,0,1-4.54,8.06c-3.56,4.89-5.62,7.65-7.71,10.39-8.41,10.29-9.36,10.82-33.77,24.44l-3.77,2a62.3,62.3,0,0,0-4.92,5.22c-6.21,7-6.21,7-33.7,25.55-7,4.55-7,4.55-25.16,16-6.76,4.11-6.76,4.11-22.21,10.85-5,2.12-5,2.12-17.9,6.82a86.62,86.62,0,0,1-9.07,2.56c-3.32.56-5.71,1-8.12,1.34-7.44,1.55-17.22,4.27-24.58,6.2-1.51.37-3.53.89-5.06,1.2l-4.46-.78L1203,1713c-.79-5.3-.85-5.73,5.88-11.4l1.07-.52-1.28-12c-.94-3.38-2.54-7.79-3.78-11.07-1.08-4.63-1.08-4.63,4.19-25.86,2.28-9.41,2.28-9.41-9-38.53a23.56,23.56,0,0,1-1.33-9.28c1.57-6.06,2.33-8.82,3.08-11.61,1.44-5.29,1.44-5.29,15-31.9,4.21-8,13.34-11.77,17.11-20.12a21.3,21.3,0,0,0-1.4-9c-4.85-12.69-3.33-26.41-6.34-39.4-5.57-14.69-19.62-31-28.41-44-5.89-9.49-5.89-9.49,11.66-65.2a26.35,26.35,0,0,0,1.23-5l-4.36-.56c-8.14.6-15.44,1.12-22.75,1.61-9.32.44-9.32.44-19-4.28-7.83-4.18-10.33-14.2-19-17.41-7.62-.76-17.72,2.45-25.2,4.1-11.1,3.39-21.33,8.89-32,13.22-2.58,1-6,2.26-8.67,3.15l-3.05.08-.38,0c-7.3-1.17-17-3-24.25-4.28-5.71,0-13.07,2.64-18.52,4.35l-15.65,4.82c-2.41.7-5.63,1.6-8.06,2.22h-4.29l-.92-.36c-5.82-2.6-5.82-2.6-34.9-18.76-6.78-3.88-6.78-3.88-25.88-22.79-5.88-6-5.88-6-12.9-19.56-10.61-21-10.61-21-13.41-23.56-7.08-6-7.08-6-14.15-19.31-3.74-6.77-3.74-6.77-10.56-17.83-6.59-11.75-7.13-12.71-2.57-32.92.52-6,.36-6.88-1.46-14.49-2.95-14.31-3.07-14.87,9.13-34,3.85-6.08,4.16-6.58,6.56-10.83a48.71,48.71,0,0,0,2.12-8.14q.06-6.11.14-12.23c-.58-7.18-.58-7.18-5-22.12-4.1-16.32-4.1-16.32,47.89-87.11,5.19-7,5.19-7,17-15.52,8.07-5.59,8.07-5.59,17.84-6,9.33.07,18.28.09,27.23.07,9.73-15.35,9.73-15.35,38.45-26.61,5.91-2.37,7.13-2.87,13.64-5.69,3.94-3,7.48-8.77,10.12-12.94l6-9.51c6.71-9.66,6.71-9.66,15.51-11.83,2.52-.52,2.51-.68,2.5-.84-1-26.91-1-26.91,38.85-44.7a80.42,80.42,0,0,0,11.91-7.06c6.63-4.35,7.37-4.46,13.14-5.27,27-1.76,51.25-3.67,75.31-6,9.7,0,16.11.07,20.49,10.16,6,13.82-2,28.39,2.29,42.31,23.47,15.47,13.21,28-1,45.44-3.44,8.74-1.93,19-8.49,26.81a43.09,43.09,0,0,0-.47,10.88q1.44,19.38,2.59,38.85l2.58,2.93c37.17,13.75,37.17,13.75,44.37,9.38,2.49-1.45,5.85-3.32,8.4-4.67l4.67-.56.92.3c6.54,2.46,7.72,2.9,80.27,37.79l4.2-.61c1.93-2.62,1.87-3.7,1.81-4.77a59.88,59.88,0,0,1,1.85-15.9l4.16-6.58.79-.59a66.88,66.88,0,0,1,8.23-4.28c8.09-1.65,13.46-2.61,18.77-3.59q31.44-5.79,60.26-12.32c3.52-2.8,6.51-8.3,8.6-12.29,11.41-20.45,13.31-18,36.56,12.58,5.47,7.86,5.47,7.86,6.84,17.78.51,6,.66,8.22.8,10.49.92,4.29,3.73,9.58,5.87,13.41a64.29,64.29,0,0,0,8.13,8.45c6.45,5.68,6.45,5.68,11,23.14,2.81,5.69,10.23,10.77,15.2,14.73,4.38,3.56,4.38,3.56,11.55,15.7,3.6,6.45,3.6,6.45,5.43,18.38a32.34,32.34,0,0,0,3.16,7.2c4-1.38,4-1.38,26.2-19.27,4.63-3.83,10.76-9,15.35-12.88,1.31-1.11,3-2.61,4.4-3.67l.71-.3,4.64,1.07c2.85,6.23,2.85,6.23,4.55,15.92,1.16,8.87,1.12,9.22.58,13.47"
                  />
                  <path
                    className="cls-5"
                    d="M1593.84,1450.87c-.65,1.17-2.66,4.61-7.37,11.37-6.21,8.8-13.62,16.7-19.41,25.82s-34.93,45.1-59.81,72.52c-8.19,8.75-8.68,9.27-24.81,19.56-8.08,5-8.08,5-11.18,1.4-1.77-2.94-1.75-3.59,4.7-13.36,1.49-2.16,2.71-3.92,3.92-5.7,17.11-26.42,17.11-26.42,24-34,10.78-12,10.78-12,17.81-26.71,4-8.54,4-8.54,15.89-24,7.36-9.61,8.12-10.61,19.82-17.79,3.33-2.26,3.46-2.38,9.87-8.51,3.55-3.5,4.81-4.87,10.15-12.89,21.55-32.39,24.88-34,27.57-35.39,6.93-2.23,5,3.27-7.39,39.07a66.85,66.85,0,0,1-3.76,8.67"
                  />
                  <path
                    className="cls-5"
                    d="M1361,768.71c-.1.31-.22.61-.32.92-2.4-2.85-2.57-3-3.3-3.83a3.81,3.81,0,0,1,1.31-.32,22.72,22.72,0,0,0,2.27,3l.09.08,0,.13m93-68.09a15.89,15.89,0,0,1-6,.09c-19.68-4-19.68-4-23.17-3.64,1-.87,1.45-1.23,2.43-4.85l.72.09,3.15-.79.31-.47a4.79,4.79,0,0,1,2.44.44,49.39,49.39,0,0,0,5.54,1.57c10.52,2.45,10.52,2.45,17.07,6.88l-2.48.68m93.63-5.9c.59,1.8,1,2.94,1.32,3.7-2-3.43-6.68-7.67-10.22-10.62-22.9-18.4-22.9-18.4-26.26-22.17-3.55-4.09-3.55-4.09-4.36-5.15a8.16,8.16,0,0,1,.44-1.47l1.7-4.27c2.37,4.65,8.27,11.43,10,13.39,13.65,15,14.17,15.16,19.15,16.5,1.77.47,1.77.47,2.28,1.1.09.12,5.91,8.94,5.93,9M1407,698.83l-2.68.61c-2.58,3.85-3.4,8.84-7.56,11.67-10.26,5.92-10.26,5.92-11.77,7.24-.75-.63-1.51-1.27-2.27-1.89,1-5,.85-6.27-.15-11.33a10,10,0,0,1,.59-4.82c.9-2.37,2.9-8.4,2.08-13.07-.13-.75-.13-.75,1.92-4.25,3,4,3.44,4.63,5.5,6.27,2.31,1.84,5.3,2.38,7.7,4s4.32,3.85,6.7,5.51H1407M1237.63,539.19c.85,4.8,3.15,9.2,3.82,14.06.46,3.34-.91,6.51-.9,9.81,0,3.45,2.34,6.3,2.51,9.7a2.15,2.15,0,0,1-.61,1.24,9.65,9.65,0,0,1-2.46,2c-.63-.3-1.58-.76-3.67-1.65l-.89-.37-1.85.25-1.2.16c-1.59.72-3.07,1.61-4.61,2.42.74-5.68-3-10.51-3.08-16-.14-5.74,5.45-9.29,5.68-14.89a41,41,0,0,0-.95-9.13c0-.16-4.17-16.09-15.63-20.71,1.15-2,2.14-3.81,3.69-6.1,4.14,6.89,6.12,14.86,10.73,21.53,1.39,2,3,4.29,9.39,7.59l0,.15m64.14-108.71-.15.21v0c-.11-.09-1-.79-2-1.65l2.2,1.45h0m85.57-113.37a585.4,585.4,0,0,0-94.19-43h0l-1.1.27c2.44,1.85,3.61,2.61,4.74,3.38-8.65-2-17-5.22-25.7-6.91l-3.71-.55c.54.8.62.87.7.93a18,18,0,0,0,4.51,4.07,60.64,60.64,0,0,1-7.25-.52c-1.12,1.28-.79,1.71-.48,2.14a76.64,76.64,0,0,0,8.25,4.4c10.6,5,10.6,5,11.82,6l2.82,2.7-1.06.4.09.26,3,1.82V293l.06.22,0,0,5.12,5.25,7.42,8.65a62.93,62.93,0,0,0,7,5.29c9.58,6.2,9.58,6.2,12.46,14,2.52,3.6,2.52,3.6,11.54,8.74l-.55.09-.21.33.11.16,2.28,2.85a9.92,9.92,0,0,1,.54,2.17c-5.93-2.08-12-3.5-18-5.39-1.78.21-1.87.3-2,.4l.22.26c1.53,1.57,3.67,3.55,5.34,4.95l-2.84-.56-.42.42V341l.5,1.58a7.72,7.72,0,0,1-2.46,3.5c.93,3.37.93,3.37,8,9.41,2.08,1.95,4.65,4.75,6.52,6.91,5.18,5.81,5.61,6.29,14.38,12.34l-.8,0-3.52-.47a25,25,0,0,0-2.23,1.15l-5.53,1.36c-3,.46-7-.53-9.94-1.37-1.68-.47-3.93-1.09-5.64-1.49l-.92.49v.17c1.7,5.83,1.92,6.58,11.51,14.23,2.22,2,1.87,2.21,1.51,2.39l0,.08-.68,2-3.62,1.14a15.81,15.81,0,0,0-2.7,0l0,0-2.36,2.93-2.71,3.52a29,29,0,0,0-1.76,5.26l-1,7.22-1.46-1c-6.95-4.61-8.59-5.21-18.26-4.32l-3.36.54-3,.95-2.48,2.71c1.68,4.8,2.24,6.41,9.29,13.21-4.28-2.65-4.28-2.65-20.73-8.36-4.57-1.52-4.57-1.52-14.55-2.51-3.89-.37-9.09-.8-13-1.12l-3.46-.21-5.13,1.16a50.21,50.21,0,0,1-7.36-.24c-11.77-7.62-11.77-7.62-21-8.84-1.08-.13-2.52-.32-3.6-.43l-.73.15-.15,0-.13.09a12.26,12.26,0,0,0-5.9,3.35l-1.22-.07-2.22.41-.16.26-3.57.43-2.72.45a19.76,19.76,0,0,1-6.45,1.08l-2.39.39-.18.16c-5.22,5.58-5.22,5.58-6.34,8.2-6.58-.27-17.6-.72-29.2,15.72-6.44,9.13,1.25,19.3-2.11,28.65-2.49,9.15-2.49,9.15-9.75,21.63-27.46,20.9-27,27.36-25.57,44.63,5,44.1,31.61,47.41,31.88,47.44l.06.28.09.36.09.4.1.41.08.38.08.31,0,.21v.08c2.29,9.15,2.29,9.15,7.5,17.76l-3.14-.66-2,.15-.35.14c-2.72,1.26-6.29,3-9,4.36-6.15,3.53-6.15,3.53-13.74,17.68-2.57,3.58-7.46,7.08-10.92,9.8-6.68,5.76-9.38,14.6-15.87,20.52C1102.85,707,1102.85,707,1074,709.51l.25.7c6.37,4.76,6.89,5.15,6.32,11.38l-4,.77c-10.45.31-18.64.52-26.83.68-14.93.41-14.93.41-19.42-2.2l-4.76,0-.71.34a109.51,109.51,0,0,0-10.79,6.55c-20.81,16.71-7.83,40.74-13.17,60.8-.89,5.1-3.24,18.65,4.71,43.38l4.54,5.55.81.45c9.72,4.09,21.46-2.61,30.4,5.67a74.82,74.82,0,0,0,9.7,7.47l4.68-.09.44-.11c4-1.19,9.29-2.95,13.25-4.26a81.55,81.55,0,0,1,8.35-1.49c2.87-.09,5.75-.17,8.62-.27,5.37-.63,24-5.07,38.34-35.62l.75-6.29-.16-1c-1.72-9.27-1.72-9.27.36-12.34a23,23,0,0,1,5.35-3.8c5.55-1.83,15.89-5.22,22-29.29l8.6,1.71c2,.39,4.6.87,6.57,1.2l3.21-.23.7-.4c23-14.92,23-14.92,31.67-5.16,6.15-3.39,10.91-8.94,17.67-11.38l1.11-.11c22.27,1.25,14.18,28.8,28.43,37.81l-4,1c1.82,4,1.89,4.18,3.35,10.91.82,4.2,1.24,6.39,1.65,8.57,1.93,14.26,1.19,15.14-4.59,21.92,3.31,4.14,3.31,4.14,17.46,7.41,2.23.49,5.22,1.09,7.47,1.49l1.35-.15c26-7.57,16.69-34.43,25.57-51.38l4.47,3.17c3.94,4.56,3.94,4.56,8.88,11.87,3.59,5.44,3.59,5.44,9.55,13.44,8.51,10.5,8.51,10.5,26.08,13.41,2,.31,4.78.68,6.83.92l1.12-.18c8.5-3.49,8.5-3.49,8.71-21.67a25.53,25.53,0,0,0,4.7-6.35l9.1,5.17c8.69,24,19.72,25.84,24.06,25.52l2-.38.59-.46c13.64-12.19,17.3-15.46,36-14.17,1.71.11,4,.24,5.7.29l2.64-.61.52-.48c2.06-2.23,4.64-5.35,6.51-7.74,3.2-.93,5.31-1.54,6.85-3.06l3.53-.87.71.19a62.27,62.27,0,0,0,4.72-4.32l1.73-.44a62.56,62.56,0,0,1,7.37.58c1.39-.39,2.52-.68,3.65-1q5.14-1.38,10.19-2.78c.34-.12.34-.12,12.09-9,1.27-.41,2-.63,2.72-.84,4-1.23,4-1.23,17.32-7.74,5-3.33,11.18-7.48,3.45-23.24.63-1.21,1.36-3,2.4-3.87a28.12,28.12,0,0,1,5.63-4.07,28.78,28.78,0,0,0,10.58,3.1l.94-.35c3.16-2.93,4.47-4.14,2.74-17.18-.56-7.09,1.09-14.28-1-21.29,5.39,6.59,5.39,6.59,11.76,13.44a67.2,67.2,0,0,1,4.16,6.3q1.19,2.56,2.36,5.14c7.47,15.46,9.85,18.12,17,18.95,1-.39,1.43-.59,1.88-.79l.28-.61c1.1-3,2.26-7.23,3.06-10.37l1.69-3a18.65,18.65,0,0,1,2.28-1.28l3.2-1.56a27.22,27.22,0,0,1,8.65.94c2.66.82,6.18,2,8.81,2.94,4,2.3,8.48,6.63,11.9,9.73,6.17,5.24,6.17,5.24,10,4.94.8-1.1,1.88-2.56,2.62-3.69,2.26-4,2.26-4,3-11.73.37-6.37.37-6.37-1-13.94a11.23,11.23,0,0,1,1-5.08,13,13,0,0,1,3.89-2.23c1.9.5,1.9.5,7.25,2.89l1.39-1.08.09-.2c.75-2,.75-2,2.3-14.58a20.19,20.19,0,0,0,6,4,6.86,6.86,0,0,0,1-.73l.08-.24c.4-1.77.92-4.14,1.25-5.92l2.1-2.48,3-1.54,1-3.75a126.45,126.45,0,0,1-8.67-12.82c-7.87-13.26-10.24-17.26-12.18-35.33-.18-1.65-.39-3.85-.5-5.5q.42-.57.81-1.14l.33.1c.33-5.16-1.25-12-2.15-17.1-3-7.83-4.16-10.62-9.17-17.11-3.47-4.63-5-6.75-8.77-12.27l-3.63-6.39-.33-.74a43,43,0,0,1-3.34-10.94c-2.66-8.89-8.89-15.81-13.08-23.86-.77-3.2-.74-3.28-.72-3.36l.06,0,1.39-.43c-3.72-7.75-26.34-47.68-26.54-48a48.12,48.12,0,0,1-3.32-6.32c-.24-1.24-.45-2.17-.69-3.1l2-2.77c-6.31-9.55-15.83-16.64-20.85-27.18,1.73,1.44,4,3.44,5.58,5l-3-3.28-34.51-33.87c-44.18-38-79.07-68-145.46-106.28"
                  />
                  <path
                    className="cls-5"
                    d="M1252,800.48c5.82,34.33-26.91,28.28-31.78,26.21l-5.29-5.11-.5-1a49.44,49.44,0,0,1-4.42-13.37l-.48-3c-1.17-6.55-6.57-11.42-7.14-18.2,0-.35-.68-8.72,3.5-12.66a1.65,1.65,0,0,0,.48-1.27,46.11,46.11,0,0,1-1-15.29c0-.26.09-.61.13-.86s1.84-8.76,16-13.65l1.11-.11c7.9-.15,13.39,6.85,16.61,12.75,3.38,6.21,1.54,13.69,4.84,19.92a112.18,112.18,0,0,1,4.81,10.35c.34,1.13,1,3.57,2,8.74.42,2.18.84,4.37,1.25,6.55"
                  />
                  <path
                    className="cls-5"
                    d="M1167,832.77a29.59,29.59,0,0,1-14.7,7.73l-.21,0a45.1,45.1,0,0,1-7.07-.73l-2.93-2.42c-10.75-9.42-6.34-28.25-5.8-30.36l3.85-5.73.75-.49a25,25,0,0,1,7-3c0,.1-2.29,10.19,1,18.89l.39,3.6c.09.88.18,1.75.28,2.63l2.63-1a32.14,32.14,0,0,0,3.58,3.9c6.17,5.75,9.41,5.65,12.55,5.56-.39.42-.9,1-1.31,1.39"
                  />
                  <path
                    className="cls-5"
                    d="M1149.53,822.93c-.1-.88-.19-1.75-.28-2.63l-.39-3.6a51,51,0,0,0,3.3,5.22l-2.63,1"
                  />
                  <path
                    className="cls-5"
                    d="M1178.76,825.57c-9.39,8.47-15.57,7.93-25.42-2.22-9.73-10.55-10.65-36.74,9.48-39.9,1.63-.1,2.79-.14,4.14-.13-2,2.19-4.63,8.45-5,9.9-1.25,5.2-.44,10.57-1.21,15.81l2.43,2.47,1.71,1.75c5.72,8.62,12.43,11.92,14.1,12.09l-.25.23"
                  />
                  <path
                    className="cls-5"
                    d="M1163.2,811.5l-2.43-2.47.71-4.8c.46,4.42,1.39,5.86,3.43,9l-1.71-1.75"
                  />
                  <path
                    className="cls-5"
                    d="M1183.21,802.18l-3.49,5.53-4.89-4.91,1.39-5.36,6.62,2.14c.12.86.24,1.73.37,2.6m13.9-1.81c-.77-7.41-5.18-17-21.79-20.41l-1.52.11c-12,1.54-12.46,18.5-12.47,20.43,0,4-.09,12.47,12.18,21.85,2,1.57,8.27,6.33,15.41-.32,1.58-1.49,9.45-9.49,8.19-21.66"
                  />
                  <path
                    className="cls-5"
                    d="M1183.21,802.18l-3.49,5.53-4.89-4.91,1.39-5.36,6.62,2.14c.12.86.24,1.73.37,2.6"
                  />
                  <path
                    className="cls-5"
                    d="M1481.22,826.63l-5.9,4.26-5.08,1.23-6.6-4,1.88-6,5.15-6.81,4.11,1.76,5-6.83,4,7.34-2.57,9m13.87-8.82c0-.28-8-27.56-20.93-24.79l-1.73.44-.49.49c-3.8,3.92-3.8,3.92-4.94,3.64l-3.53.87-.5.49c-27,27-1.74,50.24,10,50.8,14.32.69,24.86-14.53,22.11-31.94"
                  />
                  <path
                    className="cls-5"
                    d="M1481.22,826.63l-5.9,4.26-5.08,1.23-6.6-4,1.88-6,5.15-6.81,4.11,1.76,5-6.83,4,7.34-2.57,9"
                  />
                  <path
                    className="cls-5"
                    d="M1096.52,562.14l-2.41,4.62-3.52-2.07-2.29-4.38-1.92-2.14,4-4.64,3.09-.16,3.89,4.26-.8,4.51m10.9-4.12c-1.07-8.21-9.67-20.1-18.25-19.23-10.33,1.27-13.41,14.25-13.42,14.38s-.46,6.26,1.29,10.26c0,.1,6.18,11.26,9.18,13.65,18.18,14.5,22.42-9.71,21.2-19.06"
                  />
                  <path
                    className="cls-5"
                    d="M1096.52,562.14l-2.41,4.62-3.52-2.07-2.29-4.38-1.92-2.14,4-4.64,3.09-.16,3.89,4.26-.8,4.51"
                  />
                  <path
                    className="cls-5"
                    d="M1100.37,686.92c1.54,20.88-27.64,22.64-27.94,22.65-6.71.21-12.81.37-18.92.5a11.34,11.34,0,0,0-6.51,2.25,17.61,17.61,0,0,1-4.17,2.33c-2.9,1.1-6.14.24-9,1.58-2.67,1.25-4.94,3.26-7.84,4-.32.09-1.74.31-6.54-.48l-2.22-1.72c-3.74-3.26-5.57-5.34-6.32-16.79a57.2,57.2,0,0,1,.19-7c2.25-26.33,2.25-26.33,2.77-27.5,1-2.34,3.27-3.84,4.27-6.2l.84-5.85c0-1-2.13-1.79-5.61-3.09-7.56-2.84-11.66-11.92-12.73-14.64a31.8,31.8,0,0,0-1.42-3.24l-.22-.07-1.85-2c-5.92-6.77-8.77-37.34,13.46-48.74h1.74c3.21,0,3.21,0,6.6,3.29,2.93,2.82,5.67-1,8.54-1.14l7.41-.1c10,.19,12.29,3.8,14.42,8.87,4.14.37,17.08,3.6,9.62,29.81,3.81,2.35,3.81,2.35,9.08,7,2.8,2.5,8.62,7.7,11.88,14.07l.7-.18.84,0c15.9,1.11,18.18,32.16,18.93,42.37"
                  />
                  <path
                    className="cls-5"
                    d="M1005.1,509.52c-.3,14.35-5.48,17.38-11,20.58-4.7,2.76-9.09,6-13.86,8.67-4.06,2.24-4.53,2.33-4.94,2.4-12.17,2.31-17.35,2.18-19.05,2.14l-6.79-.2c-7-.38-7.83-1.84-10-5.36-2.57.62-15.48,3.06-16.84-9.56-4.13-2.56-6-5.11-5.51-12.68-1.84-5.42-6.15-18.12,10.44-26.51,15.78-8.27,16.73-8.76,21.82,0,3.41-2.37,7.75-1.78,11.33-3.58l2.66.07.18.09c.9-.36,1-.46,2.24-1.66l2.22-.28c3.11-.25,3.3,0,5.6,2.63,6.33-4.33,6.33-4.33,9.82-4.44,1,0,4.45.2,5.52,1,4,3.12,6.48,7.54,10,11.12,6.32,6.83,6.24,10.48,6.14,15.53"
                  />
                  <path
                    className="cls-5"
                    d="M659.81,663.58c-6.24,14.46-6.24,14.46-29,26.52-2.46,1.15-5.8,2.58-8.33,3.56l-3.09-.65-.35-.24c-5.8-4.9-12.94-12.12-18.38-17.41-3.85-5.28-10.29-14.1,7.17-30.5l-1-.88a30.74,30.74,0,0,1-9.75.67c-8-2-14.91-3.82-21.66-5.68l-1.46,11c-1.39,10.2-1.39,10.2-.78,12.77,3.28.86,8,.48,11.31-.12,1.74-.28,4.06-.68,5.81-.86l.93.23c16.14,14.35,1.59,24.24-46.64,57-5.33,3.27-6,3.69-9.38,5.21l-4.57-1.28-.46-.88a109.36,109.36,0,0,1-3.74-11.63l-22.19,1.47c-9,3.36-19.18,11.53-27.14,16.89-4.31,2.94-4.31,2.94-23,13.72a34.49,34.49,0,0,0-4.76,5.89c-3.37,5.72-11.24,19.1-72,77.18-4.39,8.84-13.32,75.44-13.4,76.09-1.91,12.4-2.87,14.44-5.43,19.89l-3.66-2.62c-1.14-15.28-6.82-19.59-9.88-21.91l-2.51-1.25-2.65-46.95c-1.13-5.59-5.94-12-9.11-16.69l-15.87,4.27a37.1,37.1,0,0,1-4.81,1.59l-1.18-.81-.08-.1-13.5-17.68-11.71,5.68-16.07,44.79c-3.61,16.26-2.87,38.76-3.76,55.39A36.78,36.78,0,0,0,273.56,936L289,916.24a16.59,16.59,0,0,1,8-5.06c3.62,1.86,4.87,2.65,6.15,3.43l3.81,3.51c-3.63,36.62-3.63,36.62-13.14,61.47-.92,4.9-1,11.61-1,16.6a24.57,24.57,0,0,0,7.65,6.21q3.68,2.08,7.48,4.14a43.66,43.66,0,0,1,6.3,7l2,7.08.1,1.13c.19,3.43.29,8,.28,11.43-1,14.07-1.72,24.64-2.19,35.23.62,7.55,4.59,17.09,7,24.28l2.5,3.72c2,1,3.59,1.75,5.24,2.51-1,10-1,10,4.64,49.54l-6.79,6.19-3.82,2.75c-3.65-.91-12.21-3-45.9-104.25l-2.08-3.93c-2.72-1.89-5.09-3.54-7.38-5.2-5-4.71-5-4.71-13.46-47.67a43.89,43.89,0,0,0-7.73-10c-1.8-2.79-10.29-27.88-15.64-72-.63-9.41-.63-9.41,5.93-62.61-1.81.86-1.89.56-2,.26l.05-.85c.72-8.65,2.45-20.11,3.6-28.72,1.58-9.45,1.58-9.45,8.09-34.89,1.24-4.85,2.76-11.36,3.89-16.23,3.29-13,3.29-13,25.25-71.93,4.17-10.26,22.92-52.6,23-52.78,5.43-10.84,6-11.82,14.93-28.24,5-9,8.16-14.43,13.95-24a706.06,706.06,0,0,1,46.66-67.7c3.08-4,37.48-46.29,40.65-49.87,5.83-6.52,5.83-6.52,33.88-35.67,14-13.72,47.22-43,47.46-43.25,3-2.48,3.06-2.54,3.12-2.59,22.3-17.21,52.48-39.62,75.77-55.48,47.44-28.61,58.71-35.41,116.53-61.92-26.86,12.23-27.91,12.71-41.26,20.26-6.78,4.19-16,9.57-22.54,14.07l4.45,4.82.62.34-.2.31-.1.08c-24.33,20.82-24.33,20.82-34,32.33a18.81,18.81,0,0,0-.16,9.7L596,363.86c7-3.66,7-3.66,12.67-5.46.84.3.85.33.86.35v0c-.23,5.39-.6,12.63.08,18,8.51-5.36,10-6,19.78-10.25,16-6.39,18.75-7,29.05-9.21l4.6-.84.66.57-.12.25-5,7.86c-3.72,5.05-5.59,7.59-16.65,14.37l1,.73-.19,3.74-3.53,3.92-.74.64v1l.54.35c-2.2,5-2.2,5-18.19,23.23-11,12.36-12.68,13.29-39.89,28.8-5.84,3.32-5.84,3.32-30.72,14.11-7.47,3.32-17.35,7.92-24.77,11.34a76.35,76.35,0,0,1-6.2,10.4c-4,8.36-1.87,31.73-1.4,36.32a39.16,39.16,0,0,0,10.8,7.71c.92,1.42,2.4,3.32,2.61,5l-1.68,5.2-.48.84c-1.61,2.61-3.86,6-5.59,8.56-5.62,7.27-9.19,11.89-12.71,16.56l-1.24,8.35,3.8-2.42c5.42-7,9.36-12.22,13.36-17.37,8.14-10,10.88-13.32,21.55-16.66l4.45-11.21c6.57-13.38,9.82-16.23,27.09-28l14.57-20.21c10.3-13.47,15.29-16.31,22.28-19.37,3.44.15,3.88.34,4.32.53l-.15.74c-1.67,5.81-4.51,13.37-6.6,19.05,5.09,4.39,9.81,6.15,14.66,7.88l3.56,3.21.52,11.37c0,4.79,0,4.79-3.82,17.61,1.94,2.88,3.22,3.26,4.5,3.65l11-6.81c8.41-5.75,8.41-5.75,13.35-6.34,2.13,4.95,2.13,4.95-3,38.2-.59,4.19-1.28,9.79-1.8,14,.75,7.19,6.44,15.64,9.92,22,2.49,4.65,2.49,4.65,3,26.9.08,8.1-.36,9.25-3.23,16.76-3.51,7.83-5.65,12.58-7.76,17.35l.86.17A28.07,28.07,0,0,1,663.1,642l1.11,5.56-.11.94c-.54,2.91-1.45,6.75-2.24,9.6-1.4,3.84-1.73,4.64-2.05,5.45"
                  />
                  <path
                    className="cls-5"
                    d="M385.6,991.33a64.78,64.78,0,0,1-4.06,14.48l-3.88,4.57-.61.25a12,12,0,0,1-8,.12q-5.62-2.19-11.08-4.44c-3.94-1.7-9.9-4.29-13.2-27.6-.59-4.15-.59-4.15-6.2-11.71-4.71-6.42-5.4-14.49-8.79-21.46-3-5.63-5.26-5.14-13.63-3.32a30,30,0,0,1-4.59.69l-.86-.49c-.14-.09-12.36-11.28,3.18-37.69,4.5-7.58,4.5-7.58,12.85-11.79,5-2.43,5-2.43,9.64-.18,2,1,4,2,6,3l1.52.75c8.38,4.24,10.53,14.53,10.87,22.41a10.39,10.39,0,0,0,4.63,7.91c.62.31.87.42,1.12.53,6,2.67,6,2.67,11.65,18,1.87,4.77,1.87,4.77,9.4,17.17,4.58,7.71,6.29,10.6,4.15,28.15l-.09.66"
                  />
                  <path
                    className="cls-5"
                    d="M775.54,1431.9c.87,8.8.87,8.8-5.2,25.11-2.7,7.06-2.7,7.06-14.28,16.65-4.28,3.51-4.28,3.51-12.66,7.27a245.5,245.5,0,0,0,5.39,36.19c1.29,6.27,1.29,6.27-.91,38-.53,7.23-.53,7.23-13.67,19.95-3.42,3.24-3.42,3.24-20.66,9.44-4.22,1.48-4.22,1.48-21.93,2.5a13.18,13.18,0,0,0-5,3.91l.12,3.61q2.88,6.43,5.85,12.66c3.43,7.5,3.43,7.5.38,17.29-1.21,3.44-4.36,7.34-6.61,10.2a57.34,57.34,0,0,0-3.2,5.86,45.13,45.13,0,0,0-.69,9.29l-.16,3.62-7,5.18a14.83,14.83,0,0,1-6.79.91l2.15,3c1.2,1.4,2.14,2.51,3.09,3.6,6.34,7.65,6.7,9-.8,15.43l-3.43,1c-5-1.09-6.86-1.56-8.76-2l-.11,0c1.06,1.18,2.47,2.75,3.47,4l.51,1.93-.2.09-3.64,0c-2.17-.56-3.68-1-5.19-1.37l5.25,3.71c10.72,7.73,12.09,8.72,15.12,16.45.52.36.85.57,1.17.78,3,1.81,7.09,4,10.17,5.65,15.85,8.3,16.24,8.82,18.37,11.72l7.23,5.21,5,2.26c6.35,2.59,6.35,2.59,25.57,10.13,17.34,6.54,17.34,6.54,21,8l-1.45-.2c-2.67-.78-3.14-.93-3.61-1.08l-16.23-5.43c-2.26-.79-5.26-1.87-7.51-2.68l-1.54-.58c-4.65-1.75-4.65-1.75-7.88-3-2-.78-4.65-1.79-6.65-2.54l-1.25-.45c-6.9-2.57-8.41-3.2-22.82-9.27-6.76-2.94-8.17-3.55-15.14-6.85-8.61-4.18-14.61-7.26-20.54-10.47l-17.27-9.25c-11.17-6.21-12.85-7.33-17.53-10.59,2-.39,2.39-.25,2.76-.11-11.2-7.8-23-14.75-33.64-23.35-7.69-6.27-15.43-12.49-23.13-18.75-7.67-6.58-8.29-7.12-14.41-15.67-4.27-5.18-10.47-11.65-15-16.57-4.14-4.68-4.14-4.68-17-22.74-4.29-6.41-4.29-6.41-21.44-34.79-1.21-2.07-2.88-4.8-4.17-6.84a602.9,602.9,0,0,1-39.2-68.43c-5.89-7.87-16.87-15.55-24.31-22-4.42-3.94-4.42-3.94-21.79-20.91-8.57-8.78-8.57-8.78-26.55-43.38-2.34-4.45-2.34-4.45-30-52.6-3.88-7.23-3.88-7.23-15.75-30.15-3.05-6-3.05-6-7.92-15.36-8.34-17-9.32-23.38-4.52-29.49-.84-8.27-1.9-13.86-2.89-19.48-1.46-8.47-1.46-8.47-1.72-28.53.16-10.34.16-10.34,8.43-22.88,1.78-2.86,4-6.78,5.59-9.74.78-7.19-1.59-16.81-2.7-24-.67-4.47-1-6.72-1.92-12.43l-4.45-30.91c-1.95-18.83-.35-24.47,7.45-26.23,1.24.46,1.64.64,2,.82l.41.44c1.53,1.75,3.53,4.12,5,5.93l3.69-1.37c3-3.93,3-3.93,10.18-16.4,4.91-7.82,4.91-7.82,17.84-7.46,1.36.1,3.17.2,4.53.35l.58.21c5.28,3.69,5.71,4,9.26,16.44a17.33,17.33,0,0,1,6-3.25c1.86.56,2.25.7,2.65.83l.41.32c13.43,11.57,13.43,11.57,14,11.86,1.29-.7,3-1.63,4.33-2.24l2.24.69c10.85,5.39,19.17,15.5,32,17.14,2.8.66,3.41.82,4,1,7.91,2.42,7.91,2.42,17.55,16.2,4.51,6.68,5.71,15.14,11.48,21.14,6.22,5.38,6.22,5.38,11.8,15a42,42,0,0,0,7,8.57c4.37,4,4.37,4,12.41,10.44,5.69,4.56,9.36,11.3,16.06,14.77,5.9,2.67,5.9,2.67,21.17,8.31,9.12,3.62,9.12,3.62,26.7,28.87,3.56,5.12,3.77,5.45,5.42,8l.78,1.93c4.72,14.88,17.29,26.9,16,44-1.52,12.26-2.06,12.59-8.66,16.63l2.51,2.33,1.78-.58c10.24-7.3,12.84-7,20.55-6l8.3,1.29c9.48,1.85,10.7,2.08,21.09,14.51,8.91,10.8,8.91,10.8,14.75,11.41l6.83.91c5.75.77,5.75.77,23.17,5.76,5.62,1.59,5.62,1.59,13.87,4.83,8,3.44,12.64,11.15,19.65,15.86,21.66,13.75,21.66,13.75,28.18,16.1,11.54,5.1,14.28,6.32,17.89,22.64,1.12,11.7,2.17,22.14,3.3,32.4"
                  />
                  <path
                    className="cls-5"
                    d="M1771.76,854.11l-.78-4c-.47-2.2-.47-2.2-1.36-6.3a14.22,14.22,0,0,0,0,1.55c.19,1.9.47,4.43.69,6.33,1.64,12.58,3.51,25.14,5,37.75.82,8.65.82,8.65,2.86,43.4a103.87,103.87,0,0,1-.29,15.46l0,2.21c.35,3.84.63,7,.89,10.07.79,9.76.82,10.56,1.47,31,.41,17.32.41,17.32.38,20.46l-.22-.34-1.11-1.16c-.08.2-.17.39-.26.59-1.49,5.14-1.49,5.14-2.36,35.07-.28,6.45-.49,8.78-1,14.42-.61,6.72-.61,6.72-1,8.57-.51,1-.57,1.06-.63,1.16l-.06,0-1.34.48c-3.19-2-3.19-2-5.49-45.59-.43-4.82-.43-4.82-2.31-13.81-.8-3.56-.8-3.56-5-27.2-6.61-34.41-6.61-34.41-10.85-55.55q-.71-3-1.38-6c-.42-1.68-.46-1.64-.5-1.59l-.23.24-.32.32-.34.36-.35.36-.3.3-.21.21-.08.08c-2.87,2.46-2.87,2.46-10-6.09-.2-.27-19.56-28.26-12.86-61.84a52.42,52.42,0,0,1-4-6.15l-2.23-5.8-.27-1c-2-7.91-2-7.91-5-25.41-2.2-13.09-2.1-13.78,0-18.72a13.73,13.73,0,0,1,1.2-1.75c2.13-9.9-2.79-23.48-4.29-33.5-2.35-9.76-8.15-18-12.22-26.95-1.21-2.7-1.76-3.94-2.33-5.18-6.43-14.7-7.28-17.81-7-25.65,3.72,3.89,8.84,8.94,12.64,12.75a43,43,0,0,0,6.91,6.12c10.39,11.92,13.55,28.14,23.84,40.11,2.35,2.82,2.35,2.82,11.56,9.65a31.76,31.76,0,0,0,5.56,3.1l2.08-11.84-.18-1.21-.15-.68-.11-.42c-.88-3.07-1-3.32-2-6.65-1.28-4.08-1.7-5.4-3.83-11.67,9.81,32.64,21.66,76.56,29.07,109.83"
                  />
                  <path
                    className="cls-5"
                    d="M1779.4,1069.88c-.43,1.11-.88,2.23-1.37,3.34l-1.23-2.15,1.69-18.47.72-22.8,1.37,2.21.39,14.57-.36,13.08-1.21,10.22m2.48-12.58c0-.87.33-5.57.52-13,.19-8.09.19-9-.12-19.74-.43-10.52-.73-11-1.64-12.44l-.22-.34a3.27,3.27,0,0,0-1.11-1.16c-.08.2-.17.39-.26.59-1.46,4.13-1.46,4.13-2.36,35.07-.23,6-.54,9.32-1,14.42-1.87,20.38-2.12,26.82-.16,30.29.15.24.36.55.53.78l.43,0c.24-.48.31-.61.69-1.48l.24-.58c2.79-7.66,4.44-32.11,4.46-32.35"
                  />
                  <path
                    className="cls-5"
                    d="M1779.4,1069.88c-.43,1.11-.88,2.23-1.37,3.34l-1.23-2.15,1.69-18.47.72-22.8,1.37,2.21.39,14.57-.36,13.08-1.21,10.22"
                  />
                  <path
                    className="cls-5"
                    d="M1620.38,518.67c44.79,62.27,47.47,66,70.13,107.14,35.15,71.09,36.52,73.86,51.79,117.34l.39,1.13.92,2.69c1.62,4.85,2,5.92,3.34,10.37.77,2.57,1,3.26,1.65,5.68l.15.68v0l-.47,12.17-1.44.85-3.17-1.54a110.37,110.37,0,0,1-9.77-7.09c-1.62-1.14-1.62-1.14-11.77-12.89-8-9.73-7.66-24-17.8-32.55-2-1.58-2-1.58-15.74-15.33A189,189,0,0,1,1665.42,677c-8.05-13.41-10.21-17-12.18-35.33-.39-3.47-.4-3.7-.5-5.5q.42-.57.81-1.14l.33.1c.58-1.61.58-1.61-2.15-17.1v0c-1.43-6.1-2.37-8.24-9.16-17.08-2.15-2.84-4.82-6.37-8.77-12.27l-3.63-6.39-.33-.74c-2-4.88-2-4.88-3.34-10.94-2-10.21-11.33-16.57-14-26.45.12-.61.15-.69.17-.77l.06,0,1.39-.43c-.13-.67-8.63-17.86-26.54-48-2.71-4.27-2.71-4.27-3.32-6.32-.24-1.24-.45-2.17-.69-3.1l0-1.64,2-1.13c-4.2-11.16-17-15.78-20.85-27.18,1.56,1.11,1.56,1.11,5.79,5.23l-3.2-3.49-1.62-1.69c16.71,18.66,39.53,43.16,54.69,63.1"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}
