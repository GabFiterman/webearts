import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../scss/root.scss';
import textData from '../data/text-main.json';
import Heading from "../components/Heading";

export default function Root() {
    return (
      <Container className="Root" fluid>
        <Row>
            <Col>
                <Heading textData={textData.Heading} />
            </Col>
        </Row>
      </Container>
    );
  }