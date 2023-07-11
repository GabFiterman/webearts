import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import "../scss/heading.scss";

function FadeText({ texts, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex === texts.length - 1 ? 0 : prevIndex + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <Col>
      {texts.map((text, index) => (
        <div
          key={index}
          className={`FadeText__item mb-lg-4 ${
            index === currentIndex ? "FadeText__item--visible" : ""
          }`}
        >
          {ReactHtmlParser(text)}
        </div>
      ))}
    </Col>
  );
}

function FunnyImage() {
  const imageSrc = "/img/StickerEinstein.webp";
  return (
    <>
      <img
        className="FunnyImage__image--animation"
        src={imageSrc}
        alt="Sticker Albert Einstein"
      />
    </>
  );
}

export default function Heading({ _t }) {
  return (
    <Container fluid className="Heading">
      <Row>
        <Col xs={12} md={10} lg={6}>
          <h1 className="title title-big firstTitle--animation">
            {ReactHtmlParser(_t.title)}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="subtitle">{ReactHtmlParser(_t.subtitle)}</h3>
        </Col>
      </Row>
      <Row>
        <Col className="FunnyImage__col" xs={12}>
          <FunnyImage />
        </Col>
      </Row>
      <Row xs={12} md={8} lg={7}>
        <FadeText texts={_t.bodyText} interval={_t.bodyTextInterval} />
      </Row>
    </Container>
  );
}
