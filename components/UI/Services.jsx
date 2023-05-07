import React from "react"
import { Container, Row, Col } from "reactstrap"
import SectionSubtitle from "./SectionSubtitle"
import classes from "../../styles/services.module.css"
import ServicesItem from "./ServicesItem"

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              In case you need help with hosting, created simple webapp or
              e-shop let me know. Currently mostly working with ReactJS but i
              don't have a problem to use any CMS like Drupal, Wordpress or
              ecommerce platform like Shopify.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
