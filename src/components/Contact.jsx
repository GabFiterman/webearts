import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import textData from "../data/text-main.json";
import ReactHtmlParser from "react-html-parser";
import "../scss/Contact.scss";
const _t = textData.ContactUs;

function EmailForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Chamada assíncrona para o servidor de envio de e-mails
      await SendEmail(email);
      console.log("E-mail enviado com sucesso:", email);
      setEmail("");
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
    }
  };
  return (
    <div className="container">
      <form className="Contact__form" onSubmit={handleSubmit}>
        <div className="Contact__form--group">
          <input
            type="text"
            className="Contact__form--input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={_t.form.name}
            required
          />
          <input
            type="email"
            className="Contact__form--input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={_t.form.email}
            required
          />

          <textarea
            type="textarea"
            className="Contact__form--input Contact__form--input--textarea"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={_t.form.message}
            required
          />
        </div>
        <button type="submit" className="Contact__form--button">
          Enviar
        </button>
      </form>
    </div>
  );
}

async function SendEmail(email, name, message) {
  //TODO: Adicionar API de envio de email
  // Lógica de envio de e-mail
  const response = await fetch("URL_DA_API_DE_ENVIO_DE_EMAIL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar o e-mail");
  }
}

export default function Contact() {
  //   const imgAstronautPlayingSrc = "/img/astronauts/Astronaut_SoltandoFoguete.png";
  const logoWhatsappSrc = "/img/Logo_Whatsapp_1.png";
  const linkWhatsapp = "https://api.whatsapp.com/send?phone=5562984602348";
  return (
    <Container fluid>
      <Row>
        <Col xs={7} className="Contact__heading">
          <h1 className="title Contact__heading--title">
            {ReactHtmlParser(_t.title)}
          </h1>
          <div className="subtitle Contact__headign--subtitle">
            {ReactHtmlParser(_t.subtitle)}
          </div>
        </Col>
        <Col xs={5}>
          <a href={linkWhatsapp} target="_blank" rel="noreferrer">
            <img
              className="Contact__image--logoWhatsapp"
              src={logoWhatsappSrc}
              alt="logo Whatsapp"
            />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <EmailForm />
        </Col>
      </Row>
    </Container>
  );
}
