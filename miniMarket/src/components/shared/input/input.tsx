import React from 'react';
import style from "./input.module.css"

interface InputProps {
    id: string;
    label: string;
    className?: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ 
  id, 
  label, 
  type, 
  value, 
  onChange, 
  errorMessage, 
  className = "" 
}) => {
  return (
    <div className={`${style["input-field"]} ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input 
        id={id}
        type={type} 
        value={value} 
        onChange={onChange} 
        className={style["input"]} 
      />
      {errorMessage && <p className={style["error"]}>{errorMessage}</p>}
    </div>
  );
};


export default Input;
