import { Link, useParams } from "react-router-dom";
import { Carousel, Col, Row, Container } from "react-bootstrap";
import portfolioData from "../data/portfolio.json";
import "../scss/project.scss";

export default function Project() {
  const { id } = useParams();
  const project = portfolioData.find((project) => project.id === parseInt(id));
  const imageAsronautSrc = "/img/astronauts/Astronaut-MontadoAviaoPapel.png";

  if (!project) {
    return (
      <div>
        <h2>Projeto não encontrado!</h2>
      </div>
    );
  }

  return (
    <Container className="Project">
      <Row className="justify-content-start align-items-end">
        <Col xs={4}>
          <img
            className="Project__company--logo"
            src={`/public/img/portfolio/${project.company.logoFile}`}
            alt={`Logo ${project.company.name}`}
          />
        </Col>
        <Col xs={8}>
          <h2 className="Project__company--name">{project.company.name}</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={4}></Col>
        <Col xs={8}>
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
        <Col>
          <Carousel>
            {project.gallery.map((item) => (
              <Carousel.Item key={item.id}>
                <img
                  className="Project__gallery--image d-block w-100"
                  src={`/public/img/portfolio/${item.imageName}${item.imageExtension}`}
                  alt={item.descriptionTitle}
                />
                {/* <Carousel.Caption>
                  <h3>{item.descriptionTitle}</h3>
                  <p>{item.descriptionBody}</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <div className="Project__image--container">
        {/* TODO: Preciso fazer com que retorne diretamente para a secção do portfólio*/}
        <Link to="/">
          <img
            className="Project__image--astronaut"
            src={imageAsronautSrc}
            alt="Botão de voltar (ilustração de astronauta voando em avião de papel)"
          />
        </Link>
      </div>
    </Container>
  );
}
