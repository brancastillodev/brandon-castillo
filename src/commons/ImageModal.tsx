import React from "react";
import Modal from "react-modal";

function ImageModal({ open, src, alt, onClose, onPrev, onNext }) {
  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      className="image-modal"
      overlayClassName="image-modal__overlay"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      contentLabel={alt}
    >
      <button
        className="image-modal__btn image-modal__btn--close"
        aria-label="Close"
        onClick={onClose}
      >
        &#10005;
      </button>
      {onPrev && (
        <button
          className="image-modal__btn image-modal__btn--prev"
          aria-label="Previous"
          onClick={onPrev}
        >
          &#8592;
        </button>
      )}
      <img className="image-modal__img" src={src} alt={alt} />
      {onNext && (
        <button
          className="image-modal__btn image-modal__btn--next"
          aria-label="Next"
          onClick={onNext}
        >
          &#8594;
        </button>
      )}
    </Modal>
  );
}

export default ImageModal;