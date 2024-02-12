import ReactDOM from "react-dom";
import Button from "./Button";
import { useEffect } from "react";

function Modal({ onClose, children }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed inset-40 bg-white p-10 rounded-md">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">
            <Button primary rounded onClick={onClose} className="text-white">
              I accept
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
