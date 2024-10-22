import React from "react";
import "./input.css";
type Props = {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
};

const Input = ({ type, placeholder, value, maxLength, onChange }: Props) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};

export default Input;
