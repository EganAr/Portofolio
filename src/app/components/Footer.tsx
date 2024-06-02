import {
  GitBranch,
  LucideFacebook,
  LucideGithub,
  LucideInstagram,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="justify-between items-center hidden md:flex  lg:flex ">
      <Link href={"https://github.com/EganAr"}>
        <LucideGithub className="w-6 h-6 lg:w-7 lg:h-7 transition-all duration-500 hover:text-purple-400 absolute bottom-12 left-5 md:left-[9vw] lg:left-[9%] mt-20 md:mt-0 lg:mt-0" />
      </Link>
      <Link href={"https://www.instagram.com/egan_ardenna/"}>
        <LucideInstagram className="w-6 h-6 lg:w-7 lg:h-7  transition-all duration-500 hover:text-purple-400 absolute  bottom-12 left-[16%] md:left-[14vw] lg:left-[12.5%] mt-20 md:mt-0 lg:mt-0" />
      </Link>
      <footer className="absolute bottom-12 left-28 md:left-[39%] lg:left-[43%] text-gray-600 text-xs md:text-sm lg:text-sm mt-44 md:mt-8 lg:mt-8">
        &copy; 2024 All Right Reserved
      </footer>
    </div>
  );
}
