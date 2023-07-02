import { Col, Row } from "react-bootstrap";
import "../scss/introduction.scss";
import ReactHtmlParser from "react-html-parser";
import { useState, useEffect } from "react";

export default function Introduction({ _t }) {
  const [showContainer, setShowContainer] = useState(false);
  const logoSrc = "/img/Logo.png";
  const iconSrc = "/img/FavIco.png";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 225; // Defina aqui a posição de scroll em que a transição deve ocorrer

      setShowContainer(scrollPosition >= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <img
        className={`Introduction__logo ${showContainer ? "hide" : ""}`}
        src={logoSrc}
        alt="Logo Webearts"
      />
      <div
        className={`Introduction__container ${showContainer ? "show" : ""}`}
      >
        <Row className="p-4">
          <Col xs={10} md={8} lg={6} className="p-4">
            <h2 className="title Introduction__text--title mx-4">
              {ReactHtmlParser(_t.title)}
            </h2>
          </Col>
          <Col xs={2} md={4} lg={6}>
            <img
              className="Introduction__icon"
              src={iconSrc}
              alt="Icone Webearts"
            />
          </Col>
        </Row>
        <Row className="px-4 mx-4">
          <Col>
            <p className="Introduction__text--body">
              {ReactHtmlParser(_t.bodyText)}
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
