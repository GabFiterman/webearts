import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Root() {
    return (
      <Container fluid color="#d4b9ff">
        <Row>
            <Col>
                <h1>Root page Element</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <Link to={`/portfolio`}>
                    <Button className="btn btn-success">Portfolio</Button>
                </Link>
            </Col>
        </Row>
      </Container>
    );
  }