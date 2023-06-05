import React from "react";

const Modal = ({ show, onClose, children }) => {
  return (
    <>
      <div className="backdrop">
        <div className="modal">
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
