import React from "react";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
}
function Button({ label, onClick, disabled, outline, small }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-sm md:text-md relative disabled:opacity-70 disabled:cursor-not-allowed rounded-full hover:opacity-80 transition ${
        outline ? "bg-transparent" : "bg-dark"
      } ${small ? "text-sm" : "text-md"}
        font-medium px-6 py-2 cursor-pointer ${
        outline ? "border-gray-400" : "border-black"
      } ${outline ? "text-black" : "text-white"}
        border-2

  `}
      style={{
        color: outline ? "black" : "white",
      }}
    >
      {label}
    </button>
  );
}

export default Button;
