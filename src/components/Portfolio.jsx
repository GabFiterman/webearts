// import "../scss/portfolio.scss";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioDev from "./PortfolioDev";
import PortfolioDesign from './PortfolioDesign';

function CategoriesContainer(props) {
  const { _t } = props;
  const categories = _t.categories;
  const [activeCategory, setActiveCategory] = useState(categories[1]);

  return (
    <>
    <div className="CategoriesContainer mt-3">
      {categories.map((category, i) => (
        <h3
          className={
            category === activeCategory
              ? "activeCategory category__title"
              : "category__title"
          }
          key={i}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </h3>
      ))}
    </div>
      {activeCategory === "desenvolvimento" ? (
        <PortfolioDev _t={_t} />
      ) : (
        <PortfolioDesign _t={_t} />
      )}
    </>
  );
}
export default function Portfolio({ _t }) {
  const astronautFlying = "/img/astronauts/Astronaut_LoveU.webp";
  return (
    <Container className="Portfolio">
      <Row className="align-items-end">
        <Col>
          <h1 className="title title-big">{_t.title}</h1>
        </Col>
        <Col xs={2} className="Services__image--astronaut--column">
          <img
            className="image__astronaut--flying"
            src={astronautFlying}
            alt="Astronauta voando em foguete te mandando corações"
          />
        </Col>
      </Row>
      <Row className="mt-5">
        <CategoriesContainer _t={_t} />
      </Row>
    </Container>
  );
}
