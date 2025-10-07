
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '', disabled = false }) => {
  const baseClasses = 'w-full text-white font-bold py-3 px-4 border-2 border-b-4 transform transition-transform duration-150';
  const colorClasses = 'bg-pink-500 border-pink-700 hover:bg-pink-600 active:border-b-2 active:translate-y-px';
  const disabledClasses = 'bg-gray-500 border-gray-700 cursor-not-allowed';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? disabledClasses : colorClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
