import React from "react";

export default function ImageDivider() {
  return (
    <div className="relative w-full h-[30rem] overflow-hidden">
      <img
        src="/imageDivider1.jpg"
        alt="Image Divider"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-10%"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#b5b4b5] to-10%"></div>
    </div>
  );
}
