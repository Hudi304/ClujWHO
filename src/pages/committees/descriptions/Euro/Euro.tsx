import './Euro-styles.scss'

export function EURODescriptionNew(props: any): JSX.Element {
  const { mobile } = props

  if (mobile) {
    return (
      <div className="mobile-page-card">
        <h3 className="committee-description-title-m">
          European Regional Office (EURO)
        </h3>

        <p>
          The Regional office for the European Region entails 53 countries,
          around 900 million people, over 200 languages and 17 time zones - thus
          having huge geographical, cultural and health situation variations.
          The main bureau is in Copenhagen, Denmark and there are five technical
          centers as well as separate offices in the member countries. It aims
          to aid the member states in several aspects, including health research
          thus generating data to develop campaigns, emergency operational
          support, training, improvements of public health practices and of
          regional health services.
        </p>

        <p>
          Concerning sexual health in the EURO regional committee, key topics
          include:
        </p>

        <ul>
          <li>
            HIV - the EURO was able to significantly reduce transmission to
            children, however due to the COVID-19 pandemic a dramatically
            increasing number remain undiagnosed
          </li>

          <li>
            Viral hepatitis elimination - promoting vaccinations, diagnosis and
            treatment
          </li>

          <li>Cervical cancer - promoting vaccinations, screening programs</li>

          <li>
            Sexual violence - its is approximated that 1 in 4 women in the EURO
            region experienced physical or sexual violence.
          </li>
        </ul>

        <p>
          The EURO “Action Plan for Sexual and Reproductive Health Agenda 2030”
          aims to:
        </p>

        <ul>
          <li>
            “Enable all people to make informed decisions about their sexual and
            reproductive health and ensure that their human rights are
            respected, protected and fulfilled”
          </li>

          <li>
            “Ensure that all people can enjoy the highest attainable standard of
            sexual and reproductive health and well-being”
          </li>

          <li>
            “Guarantee universal access to sexual and reproductive health and
            eliminate inequities”
          </li>
        </ul>
{/* 
        <p>References</p>
        <ul>
          <li>
            <a href="https://apps.who.int/iris/bitstream/handle/10665/345018/WHO-EURO-2021-3230-42989-60075-eng.pdf?sequence=1&isAllowed=y">
              An introduction to WHO in the European Region.pdf
            </a>
          </li>
          <li>
            <a href="https://www.euro.who.int/__data/assets/pdf_file/0003/322275/Action-plan-sexual-reproductive-health.pdf">
              Action Plan for Sexual and Reproductive Health.pdf
            </a>
          </li>
          <li>
            <a href="https://www.euro.who.int/en/health-topics/Life-stages/sexual-and-reproductive-health">
              www.euro.who.int/en/health-topics
            </a>
          </li>
        </ul> */}
      </div>
    )
  } else {
    return (
      <div className="web-page-card">
        <h3 className="committee-description-title-m">
          European Regional Office (EURO)
        </h3>

        <p>
          The Regional office for the European Region entails 53 countries,
          around 900 million people, over 200 languages and 17 time zones - thus
          having huge geographical, cultural and health situation variations.
          The main bureau is in Copenhagen, Denmark and there are five technical
          centers as well as separate offices in the member countries. It aims
          to aid the member states in several aspects, including health research
          thus generating data to develop campaigns, emergency operational
          support, training, improvements of public health practices and of
          regional health services.
        </p>

        <p>
          Concerning sexual health in the EURO regional committee, key topics
          include:
        </p>

        <ul>
          <li>
            HIV - the EURO was able to significantly reduce transmission to
            children, however due to the COVID-19 pandemic a dramatically
            increasing number remain undiagnosed
          </li>

          <li>
            Viral hepatitis elimination - promoting vaccinations, diagnosis and
            treatment
          </li>

          <li>Cervical cancer - promoting vaccinations, screening programs</li>

          <li>
            Sexual violence - its is approximated that 1 in 4 women in the EURO
            region experienced physical or sexual violence.
          </li>
        </ul>

        <p>
          The EURO “Action Plan for Sexual and Reproductive Health Agenda 2030”
          aims to:
        </p>

        <ul>
          <li>
            “Enable all people to make informed decisions about their sexual and
            reproductive health and ensure that their human rights are
            respected, protected and fulfilled”
          </li>

          <li>
            “Ensure that all people can enjoy the highest attainable standard of
            sexual and reproductive health and well-being”
          </li>

          <li>
            “Guarantee universal access to sexual and reproductive health and
            eliminate inequities”
          </li>
        </ul>

        {/* <p>References</p>
        <ul>
          <li>
            <a href="https://apps.who.int/iris/bitstream/handle/10665/345018/WHO-EURO-2021-3230-42989-60075-eng.pdf?sequence=1&isAllowed=y">
              An introduction to WHO in the European Region.pdf
            </a>
          </li>
          <li>
            <a href="https://www.euro.who.int/__data/assets/pdf_file/0003/322275/Action-plan-sexual-reproductive-health.pdf">
              Action Plan for Sexual and Reproductive Health.pdf
            </a>
          </li>
          <li>
            <a href="https://www.euro.who.int/en/health-topics/Life-stages/sexual-and-reproductive-health">
              www.euro.who.int/en/health-topics
            </a>
          </li>
        </ul> */}
      </div>
    )
  }
}
