import { useState, useEffect } from "react";
import ReactHtmlParser from 'react-html-parser';
import "../scss/heading.scss";
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
    <div className="fade-text">
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

export default function Heading({ textData }) {
  console.log(textData.bodyText);
  return (
    <>
      <h1 className="title title-big">{ReactHtmlParser(textData.title)}</h1>
      <h3>{ReactHtmlParser(textData.subtitle)}</h3>
      <FadeText texts={textData.bodyText} interval={textData.bodyTextInterval} />
    </>
  );
}
