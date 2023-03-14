import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useInView } from 'react-intersection-observer'
import { Footer } from '../../common-components/components/footer/footer'
import { CustomPaper } from '../../components/custom-paper/paper-component'
import { NavBarComponent } from '../login/components/navbar/navbar-component'
import './about-us.scss'

export function AboutUs(props: any): JSX.Element {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  const [ref1, inView1] = useInView({
    threshold: 0.99
  })

  const [ref2, inView2] = useInView({
    threshold: 0.99
  })

  const [ref3, inView3] = useInView({
    threshold: 0.99
  })

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (dimensions.width < 600) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [dimensions])

  if (mobile) {
    return (
      <div>
        <div className="aboutUsPageContainer">
          <div className="aboutUsPageGrid">
            <div className="about-us-content">
              <h2 className="title">WHO?</h2>
              <p>
                A group of students from Cluj-Napoca who are planning to
                organize the first Model WHO in Eastern Europe.
              </p>
              <p>
                Inspired by similar, well-established simulations all around the
                world, we believe it is time to bring this type of conference
                closer to students in our geographical area.
              </p>
              <p>
                This is a fully student-led conference, beginning with the
                person who first came up with this exciting idea, Ioana Tăbușcă,
                the organizing committee, and finally, our dedicated volunteers.
                We are all working to help put together and popularize this type
                of simulation, in the hope of putting Cluj-Napoca on the Model
                WHO map, alongside more well-known conferences happening in
                Paris, London, Rotterdam and Sheffield.
              </p>
              <h2 className="title">WHAT?</h2>
              <p>
                A three-day simulation of the annual World Health Assembly in
                Geneva.
              </p>
              <p>
                For the first time in our part of the continent, students have
                the opportunity to embody a country's WHO Ambassador and see for
                themselves how crucial global public health decisions are
                discussed, assessed and ultimately taken. Similar to MUNs, our
                participants have the chance to take part in engaging debates,
                expand their knowledge and better their team-work, diplomacy and
                negotiating skills.
              </p>
              <p>
                Moreover, they are able to meet new like-minded people, make
                connections and learn from new experiences. The conference has a
                well-established schedule, consisting of debate sessions
                (Regional Office Sessions and Plenaries), coffee and lunch
                breaks, and Speaker Sessions in order for them to better
                understand the year's theme and how the issues they discuss can
                be solved in the real world.
              </p>
              <p>
                If you need any clarification on the aforementioned terms, check
                our Instagram page. We encourage everyone to participate, even
                if it sounds intimidating at first glance!
              </p>
              <h2 className="title">WHY?</h2>
              <p>
                The pandemic shed light on a bunch of irregularities in the
                medical and educational systems.
              </p>
              <p>
                We saw the population become divided over a series of scientific
                facts, governmental and global public health decisions. We
                believe one of the driving factors of this shift in public
                opinion is the lack of understanding of how global health
                policies come to be.
              </p>
              <p>
                As students, we understand one's necessity of familiarizing with
                the mechanics of an ever-changing world. This includes knowledge
                about how health policies come to be, which is especially
                important for future workers in health-related fields. However,
                students from all fields are more than welcome to participate.
              </p>

              <p>
                With ClujWHO, our goal is to raise awareness and further the
                understanding of this decision-making process, as it has a big,
                although invisible, impact on all our lives.
              </p>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Helmet>
          <title>About Us | ClujWHO</title>
          <meta
            name="description"
            content="ClujWHO was started by a group of students from Cluj-Napoca to organise the first WHO event in Eastern Europe. Learn about the team and their objectives here."
          />
        </Helmet>
        <div className="aboutUsPageContainer">
          <div className="aboutUsPageGrid">
            <div className="about-us-content">
              <div className="web-card" ref={ref1}>
                <div className={`title ${inView1 ? 'title-up' : null}`}>
                  <h2 className="title-inner-container"> WHO?</h2>
                </div>

                <div className="content">
                  <p>
                    A group of students from Cluj-Napoca who are planning to
                    organize the first Model WHO in Eastern Europe.
                  </p>
                  <p>
                    Inspired by similar, well-established simulations all around
                    the world, we believe it is time to bring this type of
                    conference closer to students in our geographical area.
                  </p>
                  <p>
                    This is a fully student-led conference, beginning with the
                    person who first came up with this exciting idea, Ioana
                    Tăbușcă, the organizing committee, and finally, our
                    dedicated volunteers. We are all working to help put
                    together and popularize this type of simulation, in the hope
                    of putting Cluj-Napoca on the Model WHO map, alongside more
                    well-known conferences happening in Paris, London, Rotterdam
                    and Sheffield.
                  </p>
                </div>
              </div>

              <div className="web-card" ref={ref2}>
                <div className={`title ${inView2 ? 'title-up2' : null}`}>
                  <h2 className="title-inner-container">WHAT?</h2>
                </div>

                <div className="content">
                  <p>
                    A three-day simulation of the annual World Health Assembly
                    in Geneva.
                  </p>
                  <p>
                    For the first time in our part of the continent, students
                    have the opportunity to embody a country's WHO Ambassador
                    and see for themselves how crucial global public health
                    decisions are discussed, assessed and ultimately taken.
                    Similar to MUNs, our participants have the chance to take
                    part in engaging debates, expand their knowledge and better
                    their team-work, diplomacy and negotiating skills.
                  </p>
                  <p>
                    Moreover, they are able to meet new like-minded people, make
                    connections and learn from new experiences. The conference
                    has a well-established schedule, consisting of debate
                    sessions (Regional Office Sessions and Plenaries), coffee
                    and lunch breaks, and Speaker Sessions in order for them to
                    better understand the year's theme and how the issues they
                    discuss can be solved in the real world.
                  </p>
                  <p>
                    If you need any clarification on the aforementioned terms,
                    check our Instagram page. We encourage everyone to
                    participate, even if it sounds intimidating at first glance!
                  </p>
                </div>
              </div>

              <div className="web-card" ref={ref3}>
                <div className={`title ${inView3 ? 'title-up3' : null}`}>
                  <h2 className="title-inner-container">WHY?</h2>
                </div>

                <div className="content">
                  <p>
                    The pandemic shed light on a bunch of irregularities in the
                    medical and educational systems.
                  </p>
                  <p>
                    We saw the population become divided over a series of
                    scientific facts, governmental and global public health
                    decisions. We believe one of the driving factors of this
                    shift in public opinion is the lack of understanding of how
                    global health policies come to be.
                  </p>
                  <p>
                    As students, we understand one's necessity of familiarizing
                    with the mechanics of an ever-changing world. This includes
                    knowledge about how health policies come to be, which is
                    especially important for future workers in health-related
                    fields. However, students from all fields are more than
                    welcome to participate.
                  </p>

                  <p>
                    With ClujWHO, our goal is to raise awareness and further the
                    understanding of this decision-making process, as it has a
                    big, although invisible, impact on all our lives.
                  </p>
                </div>
              </div>
            </div>
            {/* <div>
              <Footer />
            </div> */}
          </div>
        </div>

        <div className={`nav-bar-container`}>
          <NavBarComponent inView={inView} mobile={mobile} />
        </div>
      </div>
    )
  }
}
