import React from "react";

function Card({ src, title, content }) {
  return (
    <div className="w-full">
      <img src={src} alt={title} className="w-full" />
      <div className="text-left p-6">
        <h1 className="text-2xl text-[#364037] font-bold leading-snug">
          {title}
        </h1>
        <hr className="bg-gray-300 border-0 h-px my-4" />
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
}

export default Card;
