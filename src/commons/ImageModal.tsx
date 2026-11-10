import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";

// duración de la animación de zoom out al cerrar (igual que la foto de perfil)
const CLOSE_MS = 250;

export function getHiRes(src) {
  return src && src.includes("w_800") ? src.replace("w_800", "w_1000") : src;
}

export function preloadImage(src) {
  if (!src) return;
  const img = new Image();
  img.src = getHiRes(src);
}

function ImageModal({ open, src, alt, onClose, onPrev, onNext }) {
  const hiResSrc = getHiRes(src);
  const [closing, setClosing] = useState(false);
  const closingRef = useRef(false);
  const closeTimer = useRef<number | undefined>(undefined);

  // al abrir reseteamos el estado de cierre
  useEffect(() => {
    if (open) {
      closingRef.current = false;
      setClosing(false);
    }
  }, [open]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  // al cerrar hace el zoom out inverso (de grande a chico) y recien ahi cierra,
  // igual que la foto de perfil de la navbar
  const requestClose = () => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    closeTimer.current = window.setTimeout(() => {
      closingRef.current = false;
      setClosing(false);
      onClose && onClose();
    }, CLOSE_MS);
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={requestClose}
      className={`image-modal${closing ? " image-modal--closing" : ""}`}
      overlayClassName={`image-modal__overlay${closing ? " image-modal__overlay--closing" : ""}`}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      contentLabel={alt}
    >
      <button
        className="image-modal__btn image-modal__btn--close"
        aria-label="Close"
        onClick={requestClose}
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
      <img className="image-modal__img" src={hiResSrc} alt={alt} />
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
