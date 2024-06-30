// src/components/Button.tsx
import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-blue-500 text-white p-2 rounded">
      {children}
    </button>
  );
};

export default Button;
