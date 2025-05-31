import Image from "next/image";
import React from "react";

const Button = ({
  title,
  icon,
  clickHandler,
  className = "bg-blue-700",
  number = null,
  borderRadius = "rounded-[14px]",
}) => {
  return (
    <button
      className={`h-[52px]  pt-[12px] pr-[24px] pb-[12px] pl-[18px] flex items-center gap-[10px] text-white transition-colors duration-200 cursor-pointer  ${className} ${borderRadius}`}
      onClick={clickHandler}
    >
      {icon && <Image src={icon} height={17} width={17} alt="icon" />}
      <span>{title}</span>
      {number && (
        <span className="font-normal text-base text-[#C5D1FF] ml-4">
          {number}
        </span>
      )}
    </button>
  );
};

export default Button;
