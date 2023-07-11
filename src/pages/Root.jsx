import Heading from "../components/Heading";
import Introduction from "../components/Introduction";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Team from "../components/Team";
import Footer from "../components/Footer";

import "../scss/root.scss";
import { Col, Container, Row } from "react-bootstrap";
import textData from "../data/text-main.json";

export default function Root() {
  return (
    <Container fluid className="Root">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <Row className="mb-5">
        <Col className="px-4 mb-sm-4">
          <Heading _t={textData.Heading} />
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mt-5">
          <Introduction _t={textData.Introduction} />
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mb-5">
          <Services _t={textData.Services} />
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mt-5" id="portfolioSection">
          <Portfolio _t={textData.Portfolio} />
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mt-5">
          <Contact _t={textData.Contact} />
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mt-5">
          <Team _t={textData.Team} />
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mt-5">
          <Footer _t={textData.Footer} />
        </Col>
      </Row>
    </Container>
  );
}
