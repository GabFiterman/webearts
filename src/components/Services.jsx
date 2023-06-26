import { Container, Row, Col } from "react-bootstrap";
import { useRef, useEffect } from "react";
import textData from "../data/text-main.json";
import "../scss/services.scss";
import ReactHtmlParser from "react-html-parser";
const _t = textData.Services;

function HorizontalGallery({ type }) {
  const textArray = type === "design" ? _t.design : _t.desenvolvimento;

  const galleryRef = useRef(null);
  useEffect(() => {
    const galleryElement = galleryRef.current;
    const scrollInterval = setInterval(() => {
      galleryElement.scrollLeft += galleryElement.offsetWidth;
    }, 5000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="horizontalGallery" ref={galleryRef}>
      {textArray.map((item, index) => (
        <div className={`Services__card ${type}`} key={index} type={type}>
          {ReactHtmlParser(item)}
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  const astronautLoveUSrc = "/img/astronauts/Astronaut_LoveU.png";
  const designElementSrc = "/img/PenTool-cutted.png";
  const astronautSleepingSrc = "/img/Astronaut_TouchingStart.png";
  const desenvolvimentoElementSrc = "/img/ChaveDev.png";

  return (
    <Container fluid className="Services">
      <Row className="align-items-center">
        <Col xs={8}>
          <h1 className="title Services__title">{ReactHtmlParser(_t.title)}</h1>
        </Col>
        <Col xs={2} className="Services__image--astronaut--column">
          <img
            className="Services__image--astronaut--animation astronaut--flying"
            src={astronautLoveUSrc}
            alt="Astronauta voando em foguete te mandando corações"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={6} className="design__container px-4">
          <h3 className="title">Design</h3>
        </Col>
        <Col xs={4}>
          <img
            className="design__element"
            src={designElementSrc}
            alt="Elemento de design 'PenTool'"
          />
        </Col>
      </Row>
      <Row>
        <HorizontalGallery type="design" />
      </Row>

      <Row>
        <Col className="Services__image--astronaut--sleeping--container">
          <img
            className="Services__image--astronaut--animation astronaut--sleeping"
            src={astronautSleepingSrc}
            alt="Astronauta deitado e tranquilo"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={6} className="desenvolvimento__container px-4">
          <h3 className="title">Desenvolvimento</h3>
        </Col>
        <Col xs={4}>
          <img
            className="desenvolvimento__element"
            src={desenvolvimentoElementSrc}
            alt="Elemento de desenvolvimento 'Chave (</>)'"
          />
        </Col>
      </Row>
      <Row>
        <HorizontalGallery type="desenvolvimento" />
      </Row>
    </Container>
  );
}
