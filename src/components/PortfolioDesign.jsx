import { Container, Row, Col } from "react-bootstrap";
import "../scss/portfolioDesign.scss";
import { useNavigate } from "react-router-dom";

export default function PortfolioDesign({ _t }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="justify-content-center align-items-center text-center">
        {_t.designSubCategories.map((category) => (
          <Col
            onClick={() => {
              navigate(`portfolio/design-projects/${category.slug}`);
            }}
            xs={8}
            className="PortfolioDesign__card"
            key={category.id}
            style={{
              backgroundImage: `url(/img/portfolio/${category.backgroundName})`,
            }}
          >
            <h2 className="PortfolioDesgin__card--title">{category.name}</h2>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
