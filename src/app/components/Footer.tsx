import {
  LucideGithub,
  LucideInstagram,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-start items-center px-6 lg:px-14 mt-24 md:mt-8 lg:mt-4  ">
      <div className="flex justify-center gap-2 lg:gap-4">
        <Link href={"https://github.com/EganAr"}>
          <LucideGithub className="w-6 h-6 lg:w-7 lg:h-7 transition-all duration-500 hover:text-purple-400 " />
        </Link>
        <Link href={"https://www.instagram.com/egan_ardenna/"}>
          <LucideInstagram className="w-6 h-6 lg:w-7 lg:h-7  transition-all duration-500 hover:text-purple-400 " />
        </Link>
      </div>
    </footer>
  );
}
