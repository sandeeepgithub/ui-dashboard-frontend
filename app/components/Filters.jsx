"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function Filters({ onFilter }) {
  const [title, setTitle] = useState("");
  const [profile, setProfile] = useState("");
  const [minExp, setMinExp] = useState("");
  const [maxExp, setMaxExp] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    onFilter({ title, profile, minExp, maxExp });
  }, [title, profile, minExp, maxExp]);

  const restoreHandler = () => {
    setTitle("");
    setProfile("");
    setMinExp("");
    setMaxExp("");
    setExperience("");
  };

  const inputClasses =
    "p-2 bg-[#101111] text-[#BCC2C3] rounded-lg border-none outline-none focus:ring-0";

  return (
    <div className="flex justify-between">
      <div className="flex flex-wrap gap-4 p-4 rounded-lg">
        <input
          className={inputClasses}
          placeholder="Enter a job title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className={inputClasses}
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        >
          <option value="">Job profile</option>
          <option value="ui/ux">UI/UX</option>
          <option value="node">Node.js</option>
          <option value="mern">MERN</option>
          <option value="testing">Testing</option>
        </select>

        <select
          className={inputClasses}
          value={experience}
          onChange={(e) => {
            const value = e.target.value;
            setExperience(value);
            if (value.includes("-")) {
              const [min, max] = value.split("-");
              setMinExp(min);
              setMaxExp(max);
            } else {
              setMinExp("");
              setMaxExp("");
            }
          }}
        >
          <option value="">Exp </option>
          <option value="2-6">Exp 2-6</option>
          <option value="1-3">Exp 1-3</option>
          <option value="3-7">Exp 3-7</option>
        </select>

        <Image
          src={"/restore.png"}
          alt="icon"
          height={44}
          width={44}
          className="cursor-pointer"
          onClick={restoreHandler}
        />
      </div>
      <Button
        icon={"/closed.png"}
        title={"Closed"}
        borderRadius="rounded-[12px]"
        className="bg-[#1E2027]"
        number={12}
      />
    </div>
  );
}
