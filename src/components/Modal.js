import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ show, onClose, children }) => {
  return show ? createPortal(
    <>
      <div className="backdrop">
        <div className="modal">
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>, document.body
  ) : null;
};

export default Modal;
