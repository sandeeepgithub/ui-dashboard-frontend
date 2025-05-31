import Image from "next/image";
import React from "react";

const JobTile = ({ icon, label, jobTitle }) => {
  const colors = {
    Contract: "bg-[#303822]",
    "50-100INR/hr": "bg-[#22382E]",
    "2-4Years": "bg-[#372238]",
  };

  let bgColor = "bg-[#2D3237]";

  if (jobTitle?.toLowerCase() === "backend developer") {
    bgColor = colors[label?.replaceAll(" ", "")];
  }

  return (
    <div
      className={`"h-[24px] flex items-center p-[6px] pr-2 gap-1 rounded ${bgColor} text-[#EEF4F5] text-xs`}
    >
      <Image src={icon} alt="icon" width={10} height={10} className="mr-1" />
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default JobTile;
