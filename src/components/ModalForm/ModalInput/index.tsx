import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onChange: (event: any) => void;
}

export const ModalInput = ({ placeholder, onChange }: InputProps) => {
  return (
    <>
      <input placeholder={placeholder} onChange={onChange} />
    </>
  );
};
