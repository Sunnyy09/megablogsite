import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 sm:rounded-lg text-lg font-medium ${textColor} ${bgColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
