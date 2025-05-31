import Image from "next/image";
import React from "react";

const UserBox = () => {
  return (
    <div className="flex items-center justify-between bg-[#232324] p-[4] pr-[8] h-12 rounded-[14px]">
      <Image
        src={"/user.jpg"}
        width={40}
        height={100}
        alt="user"
        className="object-cover overflow-hidden rounded-[10px] h-[100%]"
      />
      <div>
        <p>User name</p>
        <span className="block text-xs text-[#BCC2C3]">Hiring Manager</span>
      </div>
      <Image src={"/down.png"} height={40} width={40} alt="icon" />
    </div>
  );
};

export default UserBox;
