import './footer-styles.scss'
import Email from '../../../assets/ClujWho/icons/Email'
import Facebook from '../../../assets/ClujWho/icons/Facebook'
import Instagram from '../../../assets/ClujWho/icons/Instagram'

import OSM_Logo from '../../../assets/ClujWho/siglaosmbuna_400.png'
import FooterWaves from './footer-waves'

export const FaceBookUrl = 'https://www.facebook.com/clujwho'
export const InstaUrl = 'https://www.instagram.com/clujwho/'

export function Footer() {
  return (
    <div className="footer-grid">
      <div className="footer-waves-container">
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
    </div>
  )
}
