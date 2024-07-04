import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  return (
    <header className="flex flex-row p-12 z-[999]">
      <div className="p-4 rounded-full">
        <button>
          <AiOutlineMenu className="text-4xl text-white" />
        </button>
      </div>
    </header>
  );
}
