import React, { FC } from "react";
import style from "./modalSuccess.module.css"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalSuccess: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={style["modal-overlay"]}>
      <div className={style["modal-content"]}>
        <h3>{title}</h3>
        <div>{children}</div>
        <button onClick={onClose} className={style["close-button"]}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default ModalSuccess;
