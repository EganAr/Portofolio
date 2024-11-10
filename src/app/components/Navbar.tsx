"use client";

import { LucideMessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row justify-between px-6 lg:px-14 py-4 lg:pt-8 gap-4">
      <h1 className="lg:text-xl font-bold md:text-lg text-base flex justify-start ">
        Egan Ardenna
      </h1>
      <ul className="flex flex-col justify-center gap-1 text-xs lg:text-sm font-semibold">
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
      </ul>
    </nav>
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
