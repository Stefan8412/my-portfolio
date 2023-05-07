import React from "react"
import { Container, Row, Col } from "reactstrap"
import Image from "next/image"
import SectionSubtitle from "./SectionSubtitle"
import network from "../../public/images/connected.png"
import Slider from "react-slick"
import classes from "../../styles/testimonial.module.css"

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Experience" />
            <h4 className="mt-4 mb-5">Working and volunteering experiences</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>IBM</h6>
                    <h6>Frontend developer</h6>
                  </div>
                </div>

                <p>
                  Working as Frontend developer on IBM internal project IBM
                  documentation{" "}
                  <a
                    href="https://www.ibm.com/docs/en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IBM documentation
                  </a>
                  , with React and Carbon(design system for IBM web and product,
                  like styles,components and guidlines used for creating unified
                  UI).
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Freelance</h6>
                    <h6>Web Developer</h6>
                  </div>
                </div>

                <p>
                  Creating small websites in Drupal or Wordpress , also some
                  animations created in After Effects for documentary movies.You
                  can check animations on my instagram account.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Work and Travel</h6>
                    <h6>Student worker</h6>
                  </div>
                </div>
                <p>
                  I visited USA 4 times, mostly working in restaurant and spent
                  vacation in New York, Boston ,New Jersey , Miami, ship cruise
                  to Bahamas.
                </p>
              </div>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/hero.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Volunteering</h6>
                    <h6>Student worker</h6>
                  </div>
                </div>
                <p>
                  I was volunteer during World Hockey Championship in
                  Kosice(provide technical support for journalist ). In IBM i
                  helped with sending christmas presents to orphanage.
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
