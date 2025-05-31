import Image from "next/image";
import React from "react";

const Tiles = ({ heading, number, icon, className }) => {
  return (
    <div
      className={`w-[296.33px] min-w-[138px] h-[104px] p-6 rounded-[16px] flex justify-between items-center mr-3 ${className}`}
    >
      <div className="px-2 py-1">
        <h3 className="text-sm font-normal text-[#BCC2C3] block">{heading}</h3>
        <p className="font-normal text-4xl text-[#EEF4F5] mt-3">{number}</p>
      </div>
      <div className="h-[100%] mt-[-9px]">
        <Image src={icon} height={37} width={37} alt="icon" />
      </div>
    </div>
  );
};

export default Tiles;
