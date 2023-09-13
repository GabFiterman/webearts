// import "../scss/portfolioDev.scss";
import portfolioData from "../data/portfolio-dev.json";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function CoverBanner({ coverSource }) {
  const { type, host, name, description, src, source } = coverSource;
  if (type === "gif" || type === "image") {
    const imgSrc = host === "self" ? `/img/portfolio/${src}` : src;
    return (
      <div className="coverBanner__container">
        <img
          className="coverBanner coverBanner--gif"
          src={imgSrc}
          alt={description}
        />
      </div>
    );
  }
}

function PortfolioGallery(props) {
  const { _t } = props;
  const navigate = useNavigate();

  return (
    <>
      {portfolioData.map((project, index) => (
        <>
          <Row
            key={index}
            className="gallery__item"
            onClick={() => navigate(`portfolio/dev-projects/${project.id}`)}
            >
            <Col>
              <h1 className="title text-center gallery__item--title">
                {project.projectName}
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-center" onClick={() => navigate(`portfolio/dev-projects/${project.id}`)}>
            <Col xs={11} md={10} lg={8}>
              <CoverBanner coverSource={project.coverSource} />
            </Col>
          </Row>
        </>
      ))}
    </>
  );
}

export default function PortfolioDev({ _t }) {
  return (
    <Container fluid className="portfolioDev">
      <PortfolioGallery _t={_t} />
    </Container>
  );
}
