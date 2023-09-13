// import "../scss/designProject.scss";
import { Col, Container, Row } from "react-bootstrap";
import ReturnButton from "../components/ReturnButton.jsx";
import StarsBackground from "../components/StarsBackground";
import portfolioData from "../data/portfolio-design.json";
import ReactHtmlParser from "react-html-parser";
import ImageGallery from "../components/ImageGallery";
import IconTech from "../components/IconTech";

export default function DesignProjectSocialMedia() {
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
        <Col>{ReactHtmlParser(data.About)}</Col>
      </Row>

      <ImageGallery gallery={data.Gallery} rootPath="social_media" />
      <ReturnButton />
    </Container>
  );
}
