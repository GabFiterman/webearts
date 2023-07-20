import { Container, Row, Col } from "react-bootstrap";

export default function PortfolioDesign ({_t}) {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <img style={{maxWidth: '100%'}} src="/public/img/Art_404.webp"/>
                </Col>
            </Row>
        </Container>
    )
}