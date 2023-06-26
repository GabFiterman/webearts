import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import '../scss/root.scss';
import textData from '../data/text-main.json';
import Heading from "../components/Heading";
import Introduction from "../components/Introduction";

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
      </Container>
    );
  }