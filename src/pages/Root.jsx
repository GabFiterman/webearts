import {
    StarsBackground,
    Footer,
    Heading,
    Introduction,
    Portfolio,
    Services,
    Team,
} from '@/components';
import { Col, Container, Row } from 'react-bootstrap';
import textData from '@/data/text-main.json';
import './root.scss';

export default function Root() {
    return (
        <Container fluid className="Root">
            <StarsBackground />
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
                <Col className="px-0 mt-5" id="portfolioSection">
                    <Portfolio _t={textData.Portfolio} />
                </Col>
            </Row>
            <Row>
                <Col className="px-0 mb-5">
                    <Services _t={textData.Services} />
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
