import { useState } from "react";
import { Modal } from "react-bootstrap";

const ImagePopup = ({ imageUrl, imageAlt }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

  return (
    <div className="ImagePopup">
      <div onClick={handleImageClick}>
        <img src={imageUrl} alt="Imagem" className="img-fluid galleryImage" />
      </div>

      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Body>
          <img src={imageUrl} alt="Imagem" className="img-fluid modalImage" />
        </Modal.Body>
        <Modal.Header className="d-flex justify-content-end">
          <button className="btn btn-secondary" onClick={handleClose}>
            X
          </button>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default ImagePopup;
