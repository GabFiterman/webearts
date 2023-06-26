import { useRef, useEffect } from 'react';
import textData from "../data/text-main.json";
import ReactHtmlParser from 'react-html-parser';
const _t = textData.Services;
import {Row, Col } from 'react-bootstrap';

function TestingCard(props) {
  return (
    <div>
      <div className="card testingCard">
        <div className="card-body">{ReactHtmlParser(props.text)}</div>
      </div>
    </div>
  );
}

export default function TestingComponent() {

    const galleryRef = useRef(null);
    useEffect(() => {
        const galleryElement = galleryRef.current;
        const scrollInterval = setInterval(() => {
          galleryElement.scrollLeft += galleryElement.offsetWidth;
        }, 5000); // Defina o intervalo de tempo desejado (em milissegundos)
    
        return () => clearInterval(scrollInterval);
      }, []);

  return (
    <>
      <Row className="mb-5">
        <Col className="horizontalGallery" ref={galleryRef}>
          {_t.design.map((item, index) => (
            <div key={index}>
              <TestingCard text={item} />
            </div>
          ))}
        </Col>
      </Row>
    </>
  );
}
