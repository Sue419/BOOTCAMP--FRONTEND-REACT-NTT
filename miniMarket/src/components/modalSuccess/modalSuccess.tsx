import React, { FC } from "react";
import './modalSuccess.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalSuccess: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title}</h3>
        <div>{children}</div>
        <button onClick={onClose} className="close-button">
          Ok
        </button>
      </div>
    </div>
  );
};

export default ModalSuccess;
