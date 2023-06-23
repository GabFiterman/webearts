function TestingCard(props) {
  return (
    <div>
      <div className="card testingCard">
        <div className="card-body">{props.text}</div>
      </div>
    </div>
  );
}

import { useRef, useEffect } from 'react';
import textData from "../data/text-main.json";
const _t = textData.Services;

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
      <h1 className="testingStyle">Testing Component is working</h1>
      <div className="row">
        <div className="horizontalGallery" ref={galleryRef}>
          {_t.design.map((item, index) => (
            <div key={index}>
              <TestingCard text={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
