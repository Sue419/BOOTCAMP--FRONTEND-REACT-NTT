import React from 'react';
import './input.css'

interface InputProps {
    id: string;
    label: string;
    className?: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange, errorMessage }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} className="input" />
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default Input;
