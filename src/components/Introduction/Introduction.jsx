import { Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './introduction.scss';

export default function Introduction({ _t }) {
    const [showContainer, setShowContainer] = useState(false);
    const logoSrc = '/img/Logo.webp';
    const iconSrc = '/img/FavIco.webp';

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 225; // Defina aqui a posição de scroll em que a transição deve ocorrer

            setShowContainer(scrollPosition >= threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <img
                className={`Introduction__logo ${showContainer ? 'hide' : ''}`}
                src={logoSrc}
                alt="Logo Webearts"
            />
            <div
                className={`Introduction__container ${
                    showContainer ? 'show' : ''
                }`}
            >
                <Row className="p-4">
                    <Col xs={10} md={8} lg={8} className="p-4">
                        <h2
                            className="title Introduction__text--title mx-4"
                            dangerouslySetInnerHTML={{ __html: _t.title }}
                        ></h2>
                    </Col>
                    <Col xs={2} md={4} lg={4}>
                        <img
                            className="Introduction__icon"
                            src={iconSrc}
                            alt="Icone Webearts"
                        />
                    </Col>
                </Row>
                <Row className="px-4 mx-4">
                    <Col>
                        <p
                            className="Introduction__text--body"
                            dangerouslySetInnerHTML={{ __html: _t.bodyText }}
                        ></p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
