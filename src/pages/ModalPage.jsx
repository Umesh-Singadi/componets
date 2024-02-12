import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal onClose={handleClose}>
      <p>Model Component</p>
    </Modal>
  );
  return (
    <>
      <Button
        primary
        rounded
        className="h-10 text-center"
        onClick={handleClick}
      >
        Open Modal
      </Button>
      {showModal && modal}
    </>
  );
}

export default ModalPage;
