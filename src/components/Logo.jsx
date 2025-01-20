import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div className="text-3xl">
      <img
        src="../../public/logo.webp"
        alt="logo"
        width={80}
        className="rounded-full"
      />
    </div>
  );
}

export default Logo;
