import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { useSpring, animated } from "react-spring";
import "../scss/heading.scss";
import "../scss/ImageAnimation.scss";
import { Col, Container } from "react-bootstrap";

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
    <div className="fade-text mb-5">
      {texts.map((text, index) => (
        <div
          key={index}
          className={`fade-text__item ${
            index === currentIndex ? "fade-text__item--visible" : ""
          }`}
        >
          {ReactHtmlParser(text)}
        </div>
      ))}
    </div>
  );
}

function FunnyImage({ translateYValue, rotateValue, durationValue }) {
  const imageSrc = "/img/StickerEinstein.png";
  const [isAnimating, setIsAnimating] = useState(true);

  const animationProps = useSpring({
    opacity: isAnimating ? 1 : 0,
    transform: `
      translateY(${isAnimating ? translateYValue : "0"}) 
      rotate(${isAnimating ? rotateValue : "0"})
    `,
    config: {
      duration: durationValue,
    },
    onRest: () => {
      setIsAnimating(!isAnimating);
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(!isAnimating);
    }, 100);

    return () => clearTimeout(timer);
  }, [isAnimating]);

  return <animated.img src={imageSrc} alt="Imagem" style={animationProps} />;
}

export default function Heading({ textData }) {
  console.log(textData.bodyText);
  return (
    <Container fluid>
      <Col>
        <h1 className="title title-big">{ReactHtmlParser(textData.title)}</h1>
        <h3>{ReactHtmlParser(textData.subtitle)}</h3>
      </Col>
      <Col>
        <div className="FunnyImage__container">
          <div className="FunnyImage__One">
            <FunnyImage
              translateYValue="-180%"
              rotateValue="80deg"
              durationValue="2000"
            />
          </div>
          <div className="FunnyImage__Two">
            <FunnyImage
              translateYValue="-200%"
              rotateValue="25deg"
              durationValue="1000"
            />
          </div>
        </div>
      </Col>
      <Col className="FadeText">
        <FadeText
          texts={textData.bodyText}
          interval={textData.bodyTextInterval}
        />
      </Col>
    </Container>
  );
}
