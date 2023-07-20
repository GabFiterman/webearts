import StarsBackground from "../components/starsBackground";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import portfolioData from "../data/portfolio-dev.json";
import { Container, Row, Col } from "react-bootstrap";
import "../scss/DevProject.scss";

function ProjectInfos({ project }) {
  return (
    <>
      <Row>
        <Col xs={6}>
          <h2 className="highlight">Core</h2>
        </Col>
        <Col xs={6}>
          <h2 className="highlight">Status</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <h3>{project.infos.core}</h3>
        </Col>
        <Col xs={6}>
          <h3>{project.infos.status}</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h2 className="highlight">Atualizado em</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h3>{project.infos.lastUpdate}</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h2 className="highlight">Tecnologias</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ul className="DevProject__techList">
            {project.infos.tech.map((tech, i) => (
              <li key={i}>{tech} | &nbsp;</li>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  );
}

function MainBanner({ project }) {
  return (
    <Row>
      <Col>

      </Col>
    </Row>
  );
}

export default function DevProject() {
  const { id } = useParams();
  const project = portfolioData.find((project) => project.id === parseInt(id));

  return (
    <Container fluid className="DevProject Root">
      <StarsBackground />
      <Row className="my-4">
        <h1 className="title title-big highlight text-center">
          {project.projectName}
        </h1>
      </Row>
      <ProjectInfos project={project} />
      <Row>
        <Col>
          <h3 className="DevProject__about--title">sobre ...</h3>
        </Col>
      </Row>
      <MainBanner project={project} />
    </Container>
  );
}
