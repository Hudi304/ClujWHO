import './Amro-styles.scss'

export function AMRODescriptionNew(props: any): JSX.Element {
  const { mobile } = props

  if (mobile) {
    return (
      <div className="AMRO-mobile-page-card">
        <h3>The Americas Regional Office (AMRO)</h3>

        <p>
          AMRO, The Americas Regional Office, is comprised of 35 countries
          spreading across both South and North America, meaning that the
          entirety of the two American continents are under the World Health
          Organisation’s (WHO) tutelage. In spite of this fact, we can see very
          big differences within the individual healthcare systems of the two
          different continents of this regional office, encountering vastly
          different problems.
        </p>

        <p>
          In North America, advancements have been made on this issue,
          especially regarding education and inclusivity. Meanwhile, South
          America still faces vast disparity and inaccessibility regarding
          numerous health issues. However, despite all their differences, these
          regions face similar obstacles in resolving their problems, the
          magnitude varying from case to case.
        </p>

        <p className="AFRO-bullet-point-list-title">
          Main problems of the region:
        </p>
        <ul className="AFRO-bullet-point-list">
          <li className="AFRO-bullet-point-list-item">
            Insufficient sexual education, primarily in the South American
            continent – abstinence-based sexual education leads to the spread of
            communicable diseases and increased rates of teenage pregnancies,
            abortions or poor family planning
          </li>

          <li className="AFRO-bullet-point-list-item">
            Sexually transmitted diseases – due to the population at large
            adopting a more sexually liberated mentality without being given the
            resources to do so safely
          </li>

          <li className="AFRO-bullet-point-list-item">
            Cervical cancer – leading cause of death among women in Latin
            America and the Caribbean, despite being highly preventable: it
            kills 35,700 women each year
          </li>

          <li className="AFRO-bullet-point-list-item">
            Hostile abortion laws – in Latin America, less than 10% of women
            have access to safe procedures if they wish to terminate a pregnancy
          </li>

          <li className="AFRO-bullet-point-list-item">
            High maternal mortality from easily preventable causes in
            economically depreciated areas of this region
          </li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className="AFRO-web-page-card">
        <h3>The Americas Regional Office (AMRO)</h3>

        <p>
          AMRO, The Americas Regional Office, is comprised of 35 countries
          spreading across both South and North America, meaning that the
          entirety of the two American continents are under the World Health
          Organisation’s (WHO) tutelage. In spite of this fact, we can see very
          big differences within the individual healthcare systems of the two
          different continents of this regional office, encountering vastly
          different problems.
        </p>

        <p>
          In North America, advancements have been made on this issue,
          especially regarding education and inclusivity. Meanwhile, South
          America still faces vast disparity and inaccessibility regarding
          numerous health issues. However, despite all their differences, these
          regions face similar obstacles in resolving their problems, the
          magnitude varying from case to case.
        </p>

        <p className="AFRO-bullet-point-list-title">
          Main problems of the region:
        </p>
        <ul className="AFRO-bullet-point-list">
          <li className="AFRO-bullet-point-list-item">
            Insufficient sexual education, primarily in the South American
            continent – abstinence-based sexual education leads to the spread of
            communicable diseases and increased rates of teenage pregnancies,
            abortions or poor family planning
          </li>

          <li className="AFRO-bullet-point-list-item">
            Sexually transmitted diseases – due to the population at large
            adopting a more sexually liberated mentality without being given the
            resources to do so safely
          </li>

          <li className="AFRO-bullet-point-list-item">
            Cervical cancer – leading cause of death among women in Latin
            America and the Caribbean, despite being highly preventable: it
            kills 35,700 women each year
          </li>

          <li className="AFRO-bullet-point-list-item">
            Hostile abortion laws – in Latin America, less than 10% of women
            have access to safe procedures if they wish to terminate a pregnancy
          </li>

          <li className="AFRO-bullet-point-list-item">
            High maternal mortality from easily preventable causes in
            economically depreciated areas of this region
          </li>
        </ul>
      </div>
    )
  }
}
