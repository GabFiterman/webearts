import "../scss/designProject.scss";
import { Col, Container, Row } from "react-bootstrap";
import ReturnButton from "../components/ReturnButton.jsx";
import StarsBackground from "../components/starsBackground";
import portfolioData from "../data/portfolio-design.json";
import ReactHtmlParser from "react-html-parser";
import ImageGallery from "../components/ImageGallery";

export default function DesignProjectSocialMedia() {
  const data = portfolioData[0];
  return (
    <Container fluid className="SocialMedia DesignProject Root px-4">
      <StarsBackground />
      <Row className="px-4">
        <Col>
          <h1 className="title title-big highlight text-center">
            {data.CategoryName}
          </h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>{data.TechnologiesTitle}</h3>
        </Col>
      </Row>

      <Row className="technologies__list">
        {data.Technologies.map((item, index) => (
          <Col key={index}>
            <p>{item}</p>
          </Col>
        ))}
      </Row>

      <Row>
        <Col>
          <h3>{data.AboutTitle}</h3>
        </Col>
      </Row>

      <Row>
        <Col>{ReactHtmlParser(data.About)}</Col>
      </Row>

      <ImageGallery gallery={data.Gallery} />
      <ReturnButton />
    </Container>
  );
}
