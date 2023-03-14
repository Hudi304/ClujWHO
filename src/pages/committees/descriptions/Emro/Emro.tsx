import './Emro-styles.scss'

import EMRO_Image from '../../../../assets/images/EMRO-map-image.png'

export function EMRODescriptionNew(props: any): JSX.Element {
  const { mobile } = props

  if (mobile) {
    return (
      <div className="EMRO-mobile-page-card">
        <h3 className="committee-description-title-m">
          Eastern Mediterranean Regional Office (EMRO)
        </h3>

        <p>
          Formed between 1948 and 1952, the WHO Regional Office for the Eastern
          Mediterranean is one of WHO’s 6 regional offices around the world. It
          serves the WHO Eastern Mediterranean Region, which comprises 21 Member
          States and occupied Palestinian territory (including East Jerusalem),
          with a population of nearly 679 million people located in the Middle
          East, the North Africa, the Horn of Africa and Central Asia.
        </p>

        {/* <div className="EMRO-image-container-m">
          <img className="EMRO-Image" src={EMRO_Image}></img>
        </div> */}

        <p>
          Despite achievements in the population and health sectors during the
          last decades, several reproductive health issues remain, while new
          challenges have emerged.
        </p>

        <p>
          There is a correlation between reproductive health issues, a country'
          s level of social development, and the size of gaps within a country;
          between men and women, urban and rural, rich and poor and the EMRO
          region is heterogeneous in terms of both culture and socioeconomic
          development. The region encompasses the oil-rich states of the Gulf
          Cooperation Council—among the wealthiest countries in the world—
          alongside struggling countries that rank among the world’s poorest.
        </p>

        <p>
          Major reproductive health issues in the region include high maternal
          mortality, particularly in Yemen, Morocco, Egypt, and Iraq; high
          fertility and slowing fertility decline; early marriage and high
          teenage fertility; the increasing prevalence of sexually transmitted
          infections and HIV/AIDS; and female genital cutting in Egypt and
          Yemen.
        </p>

        {/* <a href="https://www.who.int/publications/i/item/WHO-SRH-21.21">
          www.who.int/publications
        </a> */}
      </div>
    )
  } else {
    return (
      <div className="EMRO-web-page-card">
        <h3 className="committee-description-title-m">
          Eastern Mediterranean Regional Office (EMRO)
        </h3>

        <p>
          Formed between 1948 and 1952, the WHO Regional Office for the Eastern
          Mediterranean is one of WHO’s 6 regional offices around the world. It
          serves the WHO Eastern Mediterranean Region, which comprises 21 Member
          States and occupied Palestinian territory (including East Jerusalem),
          with a population of nearly 679 million people located in the Middle
          East, the North Africa, the Horn of Africa and Central Asia.
        </p>

        {/* <div className="EMRO-image-container-m">
      <img className="EMRO-Image" src={EMRO_Image}></img>
    </div> */}

        <p>
          Despite achievements in the population and health sectors during the
          last decades, several reproductive health issues remain, while new
          challenges have emerged.
        </p>

        <p>
          There is a correlation between reproductive health issues, a country'
          s level of social development, and the size of gaps within a country;
          between men and women, urban and rural, rich and poor and the EMRO
          region is heterogeneous in terms of both culture and socioeconomic
          development. The region encompasses the oil-rich states of the Gulf
          Cooperation Council—among the wealthiest countries in the world—
          alongside struggling countries that rank among the world’s poorest.
        </p>

        <p>
          Major reproductive health issues in the region include high maternal
          mortality, particularly in Yemen, Morocco, Egypt, and Iraq; high
          fertility and slowing fertility decline; early marriage and high
          teenage fertility; the increasing prevalence of sexually transmitted
          infections and HIV/AIDS; and female genital cutting in Egypt and
          Yemen.
        </p>

        {/* <a href="https://www.who.int/publications/i/item/WHO-SRH-21.21">
          www.who.int/publications
        </a> */}
      </div>
    )
  }
}
