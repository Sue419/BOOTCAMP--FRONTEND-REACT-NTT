import React, { FC } from "react";
import style from "./modal.module.css"

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isVisible, onClose, title, children }) => {
  if (!isVisible) return null;

  return (
    <div className={style["modal-overlay"]}>
      <div className={style["modal-content"]}>
        <h2>{title}</h2>
        <div>{children}</div>
        <button onClick={onClose} className={style["modal-close-button"]}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
