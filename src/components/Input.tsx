import React, { InputHTMLAttributes } from 'react';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return (
    <div className="contact-one__input-box">
      <input {...props} />
    </div>
  );
};

export default Input;
