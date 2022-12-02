import React from "react";

const PrimaryButton = ({ text, onClick, disabled = false }) => {
  return (
    <button
      className="bg-transparent text-white border border-white rounded-full h-10 w-fit flex justify-center items-center px-10 sm:px-16 cursor-pointer hover:ease-in-out hover:duration-300 hover:bg-white hover:text-[#111111]"
      onClick={onClick}
      disabled={disabled}
    >
      <p className="font-light text-xs m-0">{text}</p>
    </button>
  );
};

export default PrimaryButton;

