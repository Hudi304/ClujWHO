import './Wpro-styles.scss'

export function WPROescriptionNew(props: any): JSX.Element {
  const { mobile } = props

  if (mobile) {
    return (
      <div className="WPRO-mobile-page-card">
        <h3>The Western Pacific Regional Office (WPRO)</h3>

        <p>
          The Western Pacific Region is a region characterized by diversity in
          both health management and quality of life. WPRO’s headquarter is in
          Manila, Philippines, and from there the work of WHO may be observed
          from the Mongolian steppes in central Asia, east to the Pitcairn
          Islands in the Pacific Ocean and south to New Zealand. Working with
          health authorities and other partners in 37 countries and areas, this
          regional office’s aim is to help more than a quarter of the world’s
          population.
        </p>

        <p>
          The most recently developed programs aim to prevent and treat health
          conditions regarding communicable and non-communicable diseases,
          ensure access to family planning and focus on maternal and neonatal
          health care. Infectious disease outbreaks and antimicrobial resistance
          are also important issues of the region.
        </p>

        <p>
          Concerning the sexual health, The Regional Office’s main concerns:
        </p>

        <ul className="AFRO-bullet-point-list">
          <li className="AFRO-bullet-point-list-item">
            High adolescent fertility rate – 14.4 out of 1000 births were
            attributed to girls aged 15-19 between 2015-2020
          </li>

          <li className="AFRO-bullet-point-list-item">
            Infectious diseases – approximatively 1.9 million people are living
            with HIV in the region, with only 75% receiving treatment; 329 new
            HIV infections and 112 deaths related to AIDS are observed daily
          </li>

          <li className="AFRO-bullet-point-list-item">
            Gender inequality – a significant determinant of health outcomes,
            women and girls often face a severe social disadvantage: high
            maternal mortality rate, high prevalence of intimate partner
            violence against women, sex-selective abortions favoring sons, lack
            of access to sexual and reproductive health care services
          </li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className="WPRO-web-page-card">
        <h3>The Western Pacific Regional Office (WPRO)</h3>

        <p>
          The Western Pacific Region is a region characterized by diversity in
          both health management and quality of life. WPRO’s headquarter is in
          Manila, Philippines, and from there the work of WHO may be observed
          from the Mongolian steppes in central Asia, east to the Pitcairn
          Islands in the Pacific Ocean and south to New Zealand. Working with
          health authorities and other partners in 37 countries and areas, this
          regional office’s aim is to help more than a quarter of the world’s
          population.
        </p>

        <p>
          The most recently developed programs aim to prevent and treat health
          conditions regarding communicable and non-communicable diseases,
          ensure access to family planning and focus on maternal and neonatal
          health care. Infectious disease outbreaks and antimicrobial resistance
          are also important issues of the region.
        </p>

        <p>
          Concerning the sexual health, The Regional Office’s main concerns:
        </p>

        <ul className="AFRO-bullet-point-list">
          <li className="AFRO-bullet-point-list-item">
            High adolescent fertility rate – 14.4 out of 1000 births were
            attributed to girls aged 15-19 between 2015-2020
          </li>

          <li className="AFRO-bullet-point-list-item">
            Infectious diseases – approximatively 1.9 million people are living
            with HIV in the region, with only 75% receiving treatment; 329 new
            HIV infections and 112 deaths related to AIDS are observed daily
          </li>

          <li className="AFRO-bullet-point-list-item">
            Gender inequality – a significant determinant of health outcomes,
            women and girls often face a severe social disadvantage: high
            maternal mortality rate, high prevalence of intimate partner
            violence against women, sex-selective abortions favoring sons, lack
            of access to sexual and reproductive health care services
          </li>
        </ul>
      </div>
    )
  }
}
