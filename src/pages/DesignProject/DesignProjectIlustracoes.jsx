// import "../scss/designProject.scss";
import { Col, Container, Row } from 'react-bootstrap';
import portfolioData from '@/data/portfolio-design.json';
import {
    StarsBackground,
    ReturnButton,
    ImageGallery,
    IconTech,
} from '@/components';

export default function DesignProjectIlustracoes() {
    const data = portfolioData[1];
    return (
        <Container fluid className="SocialMedia DesignProject Root px-4">
            <StarsBackground />
            <Row className="compactRow">
                <Col>
                    <h1 className="title title-big highlight text-center">
                        {data.CategoryName}
                    </h1>
                </Col>
            </Row>

            <Row className="compactRow">
                <Col>
                    <h3>{data.TechnologiesTitle}</h3>
                </Col>
            </Row>

            <Row className="technologies__list compactRow my-3">
                {data.Technologies.map((item, index) => (
                    <Col xs={2} className="mx-2" key={index}>
                        <IconTech techName={item} index={index} />
                    </Col>
                ))}
            </Row>

            <Row className="compactRow">
                <Col>
                    <h3>{data.AboutTitle}</h3>
                </Col>
            </Row>

            <Row className="compactRow">
                <Col dangerouslySetInnerHTML={{ __html: data.About }}></Col>
            </Row>

            <ImageGallery
                gallery={data.Gallery}
                rootPath="ilustracoes_e_manipulacoes"
            />
            <ReturnButton />
        </Container>
    );
}
