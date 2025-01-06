// components/Button.tsx
import React from "react";

interface ButtonCustomProps {
  text: string;
  onClick?: () => void;
  disabled?:boolean;
  variant?: "primary" | "secondary" | "danger";
  style?:React.CSSProperties
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({ text, onClick, variant = "primary",style,disabled }) => {
  const baseStyles = "px-4 py-2 rounded-md font-semibold transition-all";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
      style={{
        fontSize:'14px',
        maxHeight:'40px',
        opacity: disabled ? '0.6': '1',
        background: disabled ? '#cccccc' : undefined,
        color: disabled ? '#666666' : undefined,
        cursor: disabled ? undefined : 'pointer',
        ...style
      }}
    >
      {text}
    </button>
  );
};

export default ButtonCustom;
