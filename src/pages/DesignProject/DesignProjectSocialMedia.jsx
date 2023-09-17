import './designProject.scss';
import { Col, Container, Row } from 'react-bootstrap';
import {
    StarsBackground,
    IconTech,
    ImageGallery,
    ReturnButton,
} from '@/components';
import portfolioData from '@/data/portfolio-design';
import { scrollTo } from '@/utils/utils';
import { useEffect } from 'react';

export default function DesignProjectSocialMedia() {

    useEffect(() => {
        scrollTo()
    }, []);

    const data = portfolioData[0];
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

            <ImageGallery gallery={data.Gallery} rootPath="social_media" />
            <ReturnButton />
        </Container>
    );
}
