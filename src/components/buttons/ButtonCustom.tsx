// components/Button.tsx
import React from "react";

interface ButtonCustomProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({ text, onClick, variant = "primary" }) => {
  const baseStyles = "px-4 py-2 rounded-md font-semibold transition-all";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
      style={{
        fontSize:'14px',

      }}
    >
      {text}
    </button>
  );
};

export default ButtonCustom;
