import React from "react";

interface Props {
  color: string;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ 
  color,
  children,
  onClick, 
}) => { 
  return (
    <button 
      onClick={onClick}
      style={{
        backgroundColor: color,
        border: "none",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        color: "#fff",
        cursor: "pointer",
        height: "50px",
        outline: "none",
        transition: "background-color 0.3s ease-out",
        width: "100px",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
