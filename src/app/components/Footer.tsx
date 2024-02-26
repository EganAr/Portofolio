import {
  GitBranch,
  LucideFacebook,
  LucideGithub,
  LucideInstagram,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-w-[850px] flex justify-between items-center">
      <div className="ml-14">
        <Link href={"https://github.com/EganAr"}>
          <LucideGithub
            size={28}
            className="transition-all duration-500 hover:text-purple-400 absolute bottom-6 lg:bottom-16"
          />
        </Link>
        <Link href={"https://www.instagram.com/egan_ardenna/"}>
          <LucideInstagram
            size={28}
            className="transition-all duration-500 hover:text-purple-400 absolute bottom-6 lg:bottom-16 left-[25%] lg:left-[15%] "
          />
        </Link>
      </div>
      <footer className="absolute bottom-6 lg:bottom-16 left-[42%] text-gray-600 text-sm ">
        &copy; 2024 All Right Reserved
      </footer>
    </div>
  );
}
