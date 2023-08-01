import { Row } from "react-bootstrap";
import { useNavigate} from "react-router-dom";

export default function Return() {
    const navigate = useNavigate();
    const AstronautGoBack = "/img/astronauts/Astronaut-MontadoAviaoPapel.webp";
  
    const handleBack = () => {
      navigate("/");
    };

    return (
        <Row className="justify-content-center mt-5">
          <img
            className="return__image"
            src={AstronautGoBack}
            alt="voltar"
            onClick={handleBack}
          />
        </Row>
      );
}