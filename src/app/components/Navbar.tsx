"use client";

import { LucideMessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col lg:flex-row justify-between px-14 pt-10 gap-4 sm:px-10 sm:pt-8 ">
      <h1 className="lg:text-xl sm:text-lg flex justify-center lg:justify-start">
        Ega<span className="text-green-400">n Arden</span>na
      </h1>
      <div className="flex lg:flex-col sm:flex-row justify-center gap-3 lg:gap-1 text-sm ">
        <Link
          href={"/"}
          className="transition-all duration-500 hover:text-purple-700"
        >
          {pathname === "/" ? (
            <span className="text-purple-700">Home</span>
          ) : (
            "Home"
          )}
        </Link>
        <Link
          href={"/about"}
          className="transition-all duration-500 hover:text-purple-700"
        >
          {pathname === "/about" ? (
            <span className="text-purple-700">About</span>
          ) : (
            "About"
          )}
        </Link>
        <Link
          href={"/contact"}
          className="transition-all duration-500 hover:text-purple-700"
        >
          {pathname === "/contact" ? (
            <span className="text-purple-700">Contact</span>
          ) : (
            "Contact"
          )}
        </Link>
        <Link
          href={"/projects"}
          className="transition-all duration-500 hover:text-purple-700"
        >
          {pathname === "/projects" ? (
            <span className="text-purple-700">My Projects</span>
          ) : (
            "My Projects"
          )}
        </Link>
      </div>
    </div>
  );
}

export function Message() {
  return (
    <div>
      <Link href={"/message"}>
        <LucideMessageCircle
          size={28}
          className="transition-all duration-500 hover:text-purple-400 ml-10"
        />
      </Link>
    </div>
  );
}
