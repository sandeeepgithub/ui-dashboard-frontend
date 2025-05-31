"use client";

import Image from "next/image";
import Link from "next/link";
import UserBox from "./UserBox";

const navItems = [
  { name: "Dashboard", href: "/", icon: "/dashboard.png" },
  { name: "Notification", href: "/notifications", icon: "/bell.png" },
  { name: "Jobs", href: "/jobs", icon: "/jobs.png" },
];

export default function Sidebar() {
  return (
    <aside
      className={`h-screen bg-[#131415] text-white transition-all duration-300 w-[25%] flex flex-col justify-between `}
    >
      <div>
        <nav className="flex flex-col gap-2">
          <Image
            className="my-10 pl-8"
            src={"/logo.png"}
            alt="logo"
            width={141}
            height={48}
          />
          {navItems.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors gap-2 py-3 pl-8 flex my-3 ${
                  item.name === "Jobs"
                    ? "bg-[#1E2027] border-l-4 border-[#0033FF]"
                    : null
                }`}
              >
                <Image src={item.icon} alt="icon" height={20} width={20} />
                <p className="text-[#BCC2C3] font-normal text-sm ml-4">
                  {item.name}
                </p>
              </Link>
            );
          })}
        </nav>
      </div>

      <UserBox />
    </aside>
  );
}
