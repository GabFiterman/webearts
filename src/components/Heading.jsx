import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import "../scss/heading.scss";
import { Col, Container, Row } from "react-bootstrap";
// import textMain from '../data/text-main.json'

function FadeText({ texts, interval }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <Col className="FadeText__col">
      {texts.map((text, index) => (
        <div
          key={index}
          className={`FadeText__item ${
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
  const imageSrc = "/img/StickerEinstein.png";
  return (
    <img
      className="FunnyImage__image--animation"
      src={imageSrc}
      alt="Sticker Albert Einstein"
    />
  );
}

export default function Heading({ _t }) {
  console.log("Heading Says: \n _t.bodyText:\n", _t.bodyText);
  return (
    <Container fluid>
      <Row>
        <Col className="px-0 mt-5">
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
        <Col className="FunnyImage__col">
          <FunnyImage />
        </Col>
      </Row>
      <Row>
        <FadeText texts={_t.bodyText} interval={_t.bodyTextInterval} />
      </Row>
    </Container>
  );
}
