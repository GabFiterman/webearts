import { useParams } from "react-router-dom";
import { Carousel, Col, Row, Container } from "react-bootstrap";
import portfolioData from "../data/portfolio.json";

export default function Project() {
  const { id } = useParams();
  const project = portfolioData.find((project) => project.id === parseInt(id));

  console.log("************* id: ", id);
  console.log("************* portfolioData: ", portfolioData);
  console.log("************* Project: ", project);

  if (!project) {
    return (
      <div>
        <h2>Projeto não encontrado!</h2>
      </div>
    );
  }

  return (
    <Container>
      <Row className="justify-content-start">
        <Col xs={8}>
          <h2>{project.company.name}</h2>
        </Col>
        <Col xs={2}>
          <p>{project.general.core}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{project.general.description}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel>
            {project.gallery.map((item) => (
              <Carousel.Item key={item.id}>
                <img
                  className="d-block w-100"
                  src={`/public/img/portfolio/${item.imageName}${item.imageExtension}`}
                  alt={item.descriptionTitle}
                />
                <Carousel.Caption>
                  <h3>{item.descriptionTitle}</h3>
                  <p>{item.descriptionBody}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
