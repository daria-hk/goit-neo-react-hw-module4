import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#000",
    border: "none",
  },
};

const ImageModal = ({ isOpen, imageUrl, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <div style={{ position: "relative" }}>
        <img className={css.modalImg} src={imageUrl} alt="Large view" />
      </div>
    </Modal>
  );
};

export default ImageModal;
