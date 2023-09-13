import { Container, Row, Col } from "react-bootstrap";
import { useRef, useEffect, useState } from "react";
// import "../scss/services.scss";
import ReactHtmlParser from "react-html-parser";

function HorizontalGallery({ type, _t }) {
  const textArray = type === "design" ? _t.design : _t.desenvolvimento;
  const galleryRef = useRef(null);
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    const galleryElement = galleryRef.current;

    const handleScroll = () => {
      const scrollYPosition = window.scrollY;
      const threshold = type === 'design' ? 1100 : 1700;
      setStartScroll(scrollYPosition >= threshold);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    let scrollXInterval;
    
    if (startScroll) {
      const scrollTimer = type === 'design' ? 10000 : 16000;
      scrollXInterval = setInterval(() => {
        galleryElement.scrollLeft += galleryElement.offsetWidth;
      }, scrollTimer);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(scrollXInterval);
    };
  }, [startScroll]);

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

export default function Services({ _t }) {
  const astronautSleepingSrc = "/img/Astronaut_TouchingStart.webp";

  return (
    <Container fluid className="Services">
      <Row className="justify-content-between align-items-center">
        <Col xs={12} md={8}>
          <h1 className="title title-big Services__title">{ReactHtmlParser(_t.title)}</h1>
        </Col>
      </Row>

      <Row className="justify-content-between align-items-center">
        <Col xs={6} className="design__container">
          <h3 className="title title-big mx-4">Design</h3>
        </Col>
      </Row>
      <Row>
        <HorizontalGallery type="design" _t={_t} />
      </Row>

      <Row>
        <Col className="Services__image--astronaut--sleeping--container justify-content-end">
          <img
            className="image__astronaut--sleeping"
            src={astronautSleepingSrc}
            alt="Astronauta deitado e tranquilo"
          />
        </Col>
      </Row>

      <Row>
        <Col xs={6} className="desenvolvimento__container">
          <h3 className="title title-big mx-4">Desenvolvimento</h3>
        </Col>
      </Row>
      <Row>
        <HorizontalGallery type="desenvolvimento" _t={_t} />
      </Row>
    </Container>
  );
}
