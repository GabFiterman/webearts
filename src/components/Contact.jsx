import { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import "../scss/contact.scss";


function EmailForm({ _t }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const emailServiceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const emailTemplateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
  const [showSuccess, setShowSuccess] = useState(false);
  const checkSrc = '/img/icon-check.gif';
  const templateParams = {
    from_name: name,
    message: message,
    email: email
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    emailjs.send(emailServiceId, emailTemplateId, templateParams, emailPublicKey).then(() => {
      setName('')
      setEmail('')
      setMessage('')
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false)
      }, 2000)
    }, (err) => {
      console.error('ERRO AO ENVIAR EMAIL: ', err)
    })

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
        <div className="Contact__submit">
          <button type="submit" className="Contact__form--button">
            Enviar
          </button>
          {showSuccess && (
          <div className="Contact__success">
            <img className="Contact__success--image" src={checkSrc} alt="Mensagem enviada com Sucesso!" />
          </div>
          )}
        </div>
      </form>
    </Container>
  );
}


export default function Contact({ _t }) {
  const logoWhatsappSrc = "/img/Logo_Whatsapp_1.webp";
  const linkWhatsapp = "https://api.whatsapp.com/send?phone=5562984602348";
  return (
    <Container className="Contact">
      <Row className="align-items-center justify-content-between">
        <Col xs={8} md={9} className="Contact__heading">
          <h1 className="title Contact__heading--title">
            {ReactHtmlParser(_t.title)}
          </h1>
          <div className="subtitle Contact__headign--subtitle">
            {ReactHtmlParser(_t.subtitle)}
          </div>
        </Col>
        <Col xs={4} md={3}>
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
