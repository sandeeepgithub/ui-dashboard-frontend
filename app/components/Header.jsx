"use client";

import Button from "./Button";
import Tiles from "./Tiles";

export default function Header({ title }) {
  const tilesData = [
    {
      heading: "Total Jobs Posted",
      number: "32",
      icon: "/job.png",
      className: "bg-[#293369]",
    },
    {
      heading: "Application Received",
      number: "665",
      icon: "/app-received.png",
      className: "bg-[#682938]",
    },
    {
      heading: "Hired",
      number: "11",
      icon: "/hired.png",
      className: "bg-[#163235]",
    },
  ];

  return (
    <header className="w-full text-white  py-4 shadow-md rounded-xl mb-6">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <div className="flex mt-3">
        {tilesData.map((el) => (
          <Tiles
            key={el.heading}
            heading={el.heading}
            number={el.number}
            icon={el.icon}
            className={el.className}
          />
        ))}
        <div className="flex items-end mr-2">
          <Button
            icon={"/draft.png"}
            title={"Drafts"}
            className={"bg-[#000B37] w-[154px]"}
            number={4}
          />
        </div>
        <div className="flex items-end">
          <Button
            icon={"/plus.png"}
            title={"Post New Job"}
            className="w-[174px] bg-blue-700"
          />
        </div>
      </div>
    </header>
  );
}
