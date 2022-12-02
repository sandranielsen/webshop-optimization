import React from "react";

const SecondaryButton = ({ text, onClick, disabled = false }) => {
  return (
    <button
      className="bg-transparent text-[#ff5802] border border-[#ff5802] rounded-full h-10 w-fit flex justify-center items-center px-10 sm:px-16 cursor-pointer hover:ease-in-out hover:duration-300 hover:bg-[#ff5802] hover:text-white"
      onClick={onClick}
      disabled={disabled}
    >
      <p className="font-light text-xs m-0">{text}</p>
    </button>
  );
};

export default SecondaryButton;

