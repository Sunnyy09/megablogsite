import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          className="inline-block mb-1 pl-1 font-medium text-[#364037]"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 bg-white sm:rounded-lg text-[#333333] outline-none shadow focus:bg-gray-50 duration-200 border border-gray-200 w-full placeholder:font-medium placeholder-gray-300 focus:border-[#364037] ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
