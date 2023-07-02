import "../scss/project.scss";
import { Carousel, Col, Row, Container } from "react-bootstrap";
import { Link, useParams, useLocation } from "react-router-dom";
import { PortfolioGallery} from "../components/Portfolio";
import { useEffect } from "react";
import portfolioData from "../data/portfolio.json";

export default function Project() {
  const { id } = useParams();
  const imageAsronautSrc = "/img/astronauts/Astronaut-MontadoAviaoPapel.png";
  const location = useLocation();
  const project = portfolioData.find((project) => project.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);
  
  if (!project) {
    return (
      <div>
        <h2>Projeto não encontrado!</h2>
      </div>
    );
  }

  return (
    <Container fluid className="Project">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <Row className="">
        <Col>
          <img
            className="Project__company--logo"
            src={`/public/img/portfolio/${project.company.slug}/${project.company.logoFile}`}
            alt={`Logo ${project.company.name}`}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="Project__company--name">{project.company.name}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="Project__general--core">{project.general.core}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="Project__general--description">
            {project.general.description}
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="Project__gallery">
          <Carousel>
            {project.gallery.map((item) => (
              <Carousel.Item key={item.id}>
                <div className="Project__gallery--image--container">
                  <img
                    className="Project__gallery--image"
                    src={`/public/img/portfolio/${project.company.slug}/${item.imageName}${item.imageExtension}`}
                    alt={item.descriptionTitle}
                  />
                  {/* <Carousel.Caption>
                    <h3>{item.descriptionTitle}</h3>
                    <p>{item.descriptionBody}</p>
                  </Carousel.Caption> */}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <div>
        {/* TODO: Preciso fazer com que retorne diretamente para a secção do portfólio*/}
        <Link to="/">
          <img
            className="Project__image--astronaut"
            src={imageAsronautSrc}
            alt="Botão de voltar (ilustração de astronauta voando em avião de papel)"
          />
        </Link>
      </div>
      <Container>
        <Row className="px-md-4">
          <Col>
            <PortfolioGallery />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
