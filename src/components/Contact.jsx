import { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import sgMail from "@sendgrid/mail";
import { Col, Container, Row } from "react-bootstrap";
import "../scss/contact.scss";
const sendGridApiKey = import.meta.env.VITE_SENDGRID_API_KEY;
sgMail.setApiKey(sendGridApiKey);

function EmailForm({ _t }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(`email: ${email}\nname: ${name}\nmessage: ${message}`)
    try {
      await SendEmail(email, name, message, () => {
        setEmail("");
      });
      console.log("E-mail enviado com sucesso:", email);
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
    }
  };

  return (
    <Container>
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
    </Container>
  );
}

async function SendEmail(email, name, message, callback) {
  const msg = {
    to: "gabriel@webearts.com", // Seu endereço de e-mail
    from: email,
    subject: "Novo e-mail de contato",
    text: `Nome: ${name}\n\nMensagem: ${message}`,
  };

  try {
    await sgMail.send(msg);
    callback(); // Chama a função de callback passada como argumento
  } catch (error) {
    throw new Error("Erro ao enviar o e-mail");
  }
}

export default function Contact({ _t }) {
  const logoWhatsappSrc = "/img/Logo_Whatsapp_1.png";
  const linkWhatsapp = "https://api.whatsapp.com/send?phone=5562984602348";
  return (
    <Container className="Contact">
      <Row className="align-items-center justify-content-between">
        <Col xs={7} md={9} className="Contact__heading">
          <h1 className="title Contact__heading--title">
            {ReactHtmlParser(_t.title)}
          </h1>
          <div className="subtitle Contact__headign--subtitle">
            {ReactHtmlParser(_t.subtitle)}
          </div>
        </Col>
        <Col xs={5} md={3}>
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
          <EmailForm _t={_t} />
        </Col>
      </Row>
    </Container>
  );
}
