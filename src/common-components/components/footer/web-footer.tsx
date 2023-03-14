import './web-footer-styles.scss'
import Email from '../../../assets/ClujWho/icons/Email'
import Facebook from '../../../assets/ClujWho/icons/Facebook'
import Instagram from '../../../assets/ClujWho/icons/Instagram'

import OSM_Logo from '../../../assets/ClujWho/siglaosmbuna_400.png'
import FooterWaves from './footer-waves'
import FooterWavesWeb from './footer-waves-web'

export const FaceBookUrl = 'https://www.facebook.com/clujwho'
export const InstaUrl = 'https://www.instagram.com/clujwho/'

export function WebFooter() {
  return (
    <div className="web-footer-grid">
      <div className="web-footer-waves-container">
        <FooterWavesWeb />
      </div>
      <div className="web-footer">
        <div className="web-facebook-insta-container">
          <div className="web-facebook-icon-container">
            <a className="web-anchor" href={FaceBookUrl}>
              <button className="web-anchor-button">
                <Facebook />
              </button>
            </a>
          </div>
          <div className="web-instagram-icon-container">
            <a className="web-anchor-insta" href={InstaUrl}>
              <button className="web-anchor-button-insta">
                <Instagram />
              </button>
            </a>
          </div>
        </div>

        <div className="web-email-container">
          <div className="web-email-icon-container">
            <Email />
          </div>

          <h3 className="web-email">clujwho@osmcluj.ro</h3>
        </div>

        <div className="web-osm-logo-container">
          <img className="web-osm-logo" src={OSM_Logo} />
        </div>
      </div>
    </div>
  )
}
