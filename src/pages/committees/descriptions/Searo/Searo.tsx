import './Searo-styles.scss'

// import './Amro-styles.scss'

export function SEARODescriptionNew(props: any): JSX.Element {
  const { mobile } = props

  if (mobile) {
    return (
      <div className="SEARO-mobile-page-card">
        <h3>South East Asian Regional Office (SEARO)</h3>

        <p>
          SEARO, the South East Asian Regional Office, is home to over a quarter
          of the world’s population. Committed to building a better, healthier
          future for the nearly two billion people in the Region, WHO is working
          with the 11 Member States to address persisting and emerging
          epidemiological and demographic challenges. Promoting universal health
          coverage – health for all - and building robust health systems are key
          priorities.
        </p>

        <p className="AFRO-bullet-point-list-title">
          Currently faced challenges :
        </p>
        <ul className="AFRO-bullet-point-list">
          <li className="AFRO-bullet-point-list-item">
            Viral hepatitis – efforts need to be made to continue offering
            easy-access contraception and push forward sex education programs
            and adolescent health initiatives
          </li>

          <li className="AFRO-bullet-point-list-item">
            Domestic violence of all types – especially in the post-COVID19 era,
            when cases increased dramatically
          </li>

          <li className="AFRO-bullet-point-list-item">
            Cervical cancer – although screening programs exist, the number of
            people accessing them remains very low
          </li>

          <li className="AFRO-bullet-point-list-item">
            HIV – out of the 37.9 million people living with HIV globally, 3.8
            million are found in this region, with only 2.2 million of them
            receiving antiretroviral therapy by the end of 2019
          </li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className="SEARO-web-page-card">
        <h3>South East Asian Regional Office (SEARO)</h3>

        <p>
          SEARO, the South East Asian Regional Office, is home to over a quarter
          of the world’s population. Committed to building a better, healthier
          future for the nearly two billion people in the Region, WHO is working
          with the 11 Member States to address persisting and emerging
          epidemiological and demographic challenges. Promoting universal health
          coverage – health for all - and building robust health systems are key
          priorities.
        </p>

        <p className="AFRO-bullet-point-list-title">
          Currently faced challenges :
        </p>
        <ul className="AFRO-bullet-point-list">
          <li className="AFRO-bullet-point-list-item">
            Viral hepatitis – efforts need to be made to continue offering
            easy-access contraception and push forward sex education programs
            and adolescent health initiatives
          </li>

          <li className="AFRO-bullet-point-list-item">
            Domestic violence of all types – especially in the post-COVID19 era,
            when cases increased dramatically
          </li>

          <li className="AFRO-bullet-point-list-item">
            Cervical cancer – although screening programs exist, the number of
            people accessing them remains very low
          </li>

          <li className="AFRO-bullet-point-list-item">
            HIV – out of the 37.9 million people living with HIV globally, 3.8
            million are found in this region, with only 2.2 million of them
            receiving antiretroviral therapy by the end of 2019
          </li>
        </ul>
      </div>
    )
  }
}
