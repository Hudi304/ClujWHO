import { Icon, ICONS } from '../../../../common-components/components/icon/icon'

type ApplyNowExplanationProps = {
  className?: string
}

//TODO clean the css, it's a mess

export function ApplyNowExplanation({
  className
}: ApplyNowExplanationProps): JSX.Element {
  return (
    <div className={`apply-now-fee-bar ${className}`}>
      <div className="fee-container">
        <div className="fee-card bronze ">
          <div className="price-list-container">
            <div className="bronze-text flex-col items-center content-center">
              <div className="fee-card-title ">Bronze</div>
              <div className="price-container">
                <div className="price-euro ">€</div>
                <div className="price-bronze ">10</div>
              </div>
            </div>

            <div className="list-container bronze ">
              <div className="fee-details">Conference expenses :</div>

              <div className="fee-details-subitem padding-left">
                Welcome kit
              </div>
              <div className="fee-details-subitem padding-left">
                Coffee Breaks
              </div>
              <div className="fee-details-subitem padding-left">Brunch</div>
            </div>
          </div>
        </div>

        <div className="fee-card silver ">
          <div className="price-list-container">
            <div className="silver-text flex-col items-center content-center">
              <div className="fee-card-title ">Silver</div>
              <div className="price-container">
                <div className="price-euro ">€</div>
                <div className="price-bronze ">15</div>
              </div>
            </div>

            <div className="list-container silver ">
              <div className="fee-details">Conference expenses :</div>

              <div className="fee-details-subitem padding-left">
                Welcome kit
              </div>
              <div className="fee-details-subitem padding-left">
                Coffee Breaks
              </div>
              <div className="fee-details-subitem padding-left">Brunch</div>

              <div className="fee-details">
                <span>1 Social Event</span>
              </div>

              <div className="fee-details-subitem">
                (Friday or Saturday night)
              </div>
            </div>
          </div>
        </div>

        <div className="fee-card gold ">
          <div className="price-list-container">
            <div className="gold-text flex-col items-center content-center">
              <div className="fee-card-title ">Gold</div>
              <div className="price-container">
                <div className="price-euro ">€</div>
                <div className="price-bronze ">20</div>
              </div>
            </div>

            <div className="list-container gold ">
              <div className="fee-details">Conference expenses :</div>

              <div className="fee-details-subitem padding-left">
                Welcome kit
              </div>
              <div className="fee-details-subitem padding-left">
                Coffee Breaks
              </div>
              <div className="fee-details-subitem padding-left">Brunch</div>

              <div className="fee-details">
                <span>2 Social Events</span>
              </div>

              <div className="fee-details-subitem">
                (Friday AND Saturday night)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="no-accommodation">*No accomodation is provided.</div>
    </div>
  )
}
