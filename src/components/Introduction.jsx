import { Col, Container, Row } from "react-bootstrap";
import textData from "../data/text-main.json";
import "../scss/introduction.scss";
import ReactHtmlParser from "react-html-parser";
import { useState, useEffect } from "react";

export default function Introduction() {
  const [showContainer, setShowContainer] = useState(false);
  const logoSrc = "/img/Logo.png";
  const iconSrc = "/img/FavIco.png";
  const _t = textData.Introduction;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 250; // Defina aqui a posição de scroll em que a transição deve ocorrer

      setShowContainer(scrollPosition >= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <img className={`Introduction__logo ${showContainer ? "hide" : ""}`} src={logoSrc} alt="Logo Webearts" />
      <Container
        fluid
        className={`Introduction__container ${showContainer ? "show" : ""}`}
      >
        <Row>
          <Col xs={10}>
            <h2 className="title Introduction__text--title">
              {ReactHtmlParser(_t.title)}
            </h2>
          </Col>
          <Col xs={2}>
            <img
              className="Introduction__icon"
              src={iconSrc}
              alt="Icone Webearts"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="Introduction__text--body">
              {ReactHtmlParser(_t.bodyText)}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
