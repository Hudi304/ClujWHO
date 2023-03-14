import './Afro-styles.scss'

// import AFRO_Image from '../../assets/images/AFRO-map-image.png'

import AFRO_Image from '../../../../assets/images/AFRO-map-image.png'

export function AFRODescriptionNew(props: any): JSX.Element {
  const { mobile } = props

  if (mobile) {
    return (
      <div className="AFRO-mobile-page-card">
        <h3 className="committee-description-title-m">
          Africa Regional Office (AFRO)
        </h3>

        <div className="AFRO-first-paragraph">
          The Regional Office for Africa (AFRO) consists of 47 member states.
          AFRO works with member states and other developmental partners to
          improve the health of people living in Africa. The Regional Office
          works in combating both infectious and non-infectious diseases, health
          sector development as well as responding to disasters and emergencies.
        </div>

        <div className="AFRO-content">
          {/* <div className='AFRO-image-container'>
            <img className="AFRO-Image" src={AFRO_Image}></img>
          </div> */}
          <div>
            <p>
              This is achieved by adapting global health initiatives into
              regional plans which meet the specific needs of those living
              within the Region.
            </p>
            <p>
              In regard to sexual health the Region has been working towards the
              eradication of HIV/AIDS, decreasing the prevalence and mortality
              of cervical cancer and improving maternal and neonatal health
              care.
            </p>
          </div>
        </div>

        <div className="AFRO-bullet-point-list-container">
          <p className="AFRO-bullet-point-list-title">
            To achieve these goals the Region has been working on several
            initiatives such as:
          </p>
          <ul className="AFRO-bullet-point-list">
            <li className="AFRO-bullet-point-list-item">
              Working to achieve the UNAIDs 90-90-90 targets – addressing the
              HIV/AIDS problem in the region
            </li>

            <li className="AFRO-bullet-point-list-item">
              Implementing the Treat All policy – focusing on providing access
              to antiretroviral therapy for all HIV-positive people
            </li>

            <li className="AFRO-bullet-point-list-item">
              The Free to Shine campaign – ensuring proper health care for both
              the child and the mother
            </li>

            <li className="AFRO-bullet-point-list-item">
              Introducing a Reproductive, Maternal, New-born, Child and
              Adolescent Health Technical Advisory Group
            </li>

            <li className="AFRO-bullet-point-list-item">
              Assisting data collection and use around the region, focusing on
              the prevention and diagnosis of cervical cancer
            </li>

            <li className="AFRO-bullet-point-list-item">
              Creating an efficient strategy towards the elimination of cervical
              cancer
            </li>

            <li className="AFRO-bullet-point-list-item">
              Supporting the development of national strategies and guidelines
              on sexual reproductive health and rights
            </li>
          </ul>
        </div>
      </div>
    )
  } else {
    return (
      <div className="AFRO-web-page-card">
        <h3 className="committee-description-title-m">
          Africa Regional Office (AFRO)
        </h3>

        <div className="AFRO-first-paragraph">
          The Regional Office for Africa (AFRO) consists of 47 member states.
          AFRO works with member states and other developmental partners to
          improve the health of people living in Africa. The Regional Office
          works in combating both infectious and non-infectious diseases, health
          sector development as well as responding to disasters and emergencies.
        </div>

        <div className="AFRO-content">
          {/* <div className='AFRO-image-container'>
            <img className="AFRO-Image" src={AFRO_Image}></img>
          </div> */}
          <div>
            <p>
              This is achieved by adapting global health initiatives into
              regional plans which meet the specific needs of those living
              within the Region.
            </p>
            <p>
              In regard to sexual health the Region has been working towards the
              eradication of HIV/AIDS, decreasing the prevalence and mortality
              of cervical cancer and improving maternal and neonatal health
              care.
            </p>
          </div>
        </div>

        <div className="AFRO-bullet-point-list-container">
          <p className="AFRO-bullet-point-list-title">
            To achieve these goals the Region has been working on several
            initiatives such as:
          </p>
          <ul className="AFRO-bullet-point-list">
            <li className="AFRO-bullet-point-list-item">
              Working to achieve the UNAIDs 90-90-90 targets – addressing the
              HIV/AIDS problem in the region
            </li>

            <li className="AFRO-bullet-point-list-item">
              Implementing the Treat All policy – focusing on providing access
              to antiretroviral therapy for all HIV-positive people
            </li>

            <li className="AFRO-bullet-point-list-item">
              The Free to Shine campaign – ensuring proper health care for both
              the child and the mother
            </li>

            <li className="AFRO-bullet-point-list-item">
              Introducing a Reproductive, Maternal, New-born, Child and
              Adolescent Health Technical Advisory Group
            </li>

            <li className="AFRO-bullet-point-list-item">
              Assisting data collection and use around the region, focusing on
              the prevention and diagnosis of cervical cancer
            </li>

            <li className="AFRO-bullet-point-list-item">
              Creating an efficient strategy towards the elimination of cervical
              cancer
            </li>

            <li className="AFRO-bullet-point-list-item">
              Supporting the development of national strategies and guidelines
              on sexual reproductive health and rights
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
