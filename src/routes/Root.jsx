import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "../scss/root.scss";
import textData from "../data/text-main.json";
import Heading from "../components/Heading";
import Introduction from "../components/Introduction";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact";
import Team from '../components/Team';
import Footer from '../components/Footer';

export default function Root() {
  return (
    <Container className="Root">
      <Row className="mb-5">
        <Col className="px-4 py-1 mb-2">
          <Heading textData={textData.Heading} />
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mt-5">
          <Introduction />
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mb-5">
          <Services />
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mt-5">
          <Portfolio />
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mt-5">
          <Contact />
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mt-5">
          <Team />
        </Col>
      </Row>
      <Row>
        <Col className="px-0 mt-5">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
