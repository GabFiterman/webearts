import { Col, Container, Row } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import "../scss/team.scss";

function Member({ name }) {
  return (
    <div className="Team__members--container">
      <img
        className={`Team__members--image image--${name}`}
        alt={`${name}, ${
          name === "Gabriel" ? "Desenvolvedor e Designer" : "Designer Gráfica"
        }`}
        src={`/public/img/members/Photo_${name}.png`}
      />
      <span className={`Team__members--span span--${name}`}>{name}</span>
    </div>
  );
}

export default function Team({ _t }) {
  const imgAstronautSrc = "/img/astronauts/Astronaut_Apontando.png";
  return (
    <Container>
      <Row className="Team__heading align-items-start justify-content-between">
        <Col xs={8}>
          <h1 className="Team__title title title-big highlight">{_t.title}</h1>
        </Col>
        <Col xs={4}>
          <img
            className="Team__image--astronaut"
            alt="Figurinha de astronauta apontando para o alto"
            src={imgAstronautSrc}
          />
        </Col>
      </Row>
      <Row className="Team__body">
        <Col>
          <h3 className="Team__body--subtittle">
            {ReactHtmlParser(_t.subtitle)}
          </h3>
          <p className="Team__body--bodyText">{ReactHtmlParser(_t.bodyText)}</p>
        </Col>
      </Row>
      <Row className="Team__members justify-content-end">
        <Col xs={12}>
          <h2 className="Team__members--title title">
            {ReactHtmlParser(_t.teamTitle)}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Member name="Gabriel" />
        </Col>
        <Col xs={6}>
          <Member name="Kakau" />
        </Col>
      </Row>
    </Container>
  );
}
