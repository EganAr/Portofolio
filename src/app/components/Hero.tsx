"use client";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../../utils/motion";
import Link from "next/link";
import { Book, MessageCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row pt-0 lg:pt-11">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.5)}
      >
        <div className="flex flex-col gap-3 px-14 pt-20 lg:pt-5 max-w-2xl">
          <h1 className="text-3xl lg:text-4xl font-bold">Hi, I`m Egan</h1>
          <TypeAnimation
            sequence={[
              "Frontend Web Developer",
              2000,
              "NextJs Developer",
              1000,
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "20px", display: "inline-block" }}
            repeat={Infinity}
            className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-700"
          />

          <p className="text-sm lg:text-md text-justify items-center tracking-wide">
            Welcome to my profile! I'm a skilled and dedicated frontend
            developer specializing in Next.js, a cutting-edge framework that
            combines the power of React.js with advanced features like
            server-side rendering and static site generation.
          </p>
          <div className="flex gap-8 items-center font-bold py-4">
            <h1 className="text-lg lg:text-xl border-r-2 pr-0 lg:pr-4">
              Tech Stack{" "}
            </h1>
            <div className="w-90 grid grid-cols-5 gap-2 lg:gap-4">
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/html-1.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/css-3.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/javascript-1.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/react-2.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/typescript.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/next-js.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-5 h-5 bg-white rounded-full lg:w-8 lg:h-8"
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-5 h-5 bg-white rounded-full lg:w-8 lg:h-8"
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/git-icon.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-5 h-5 bg-white rounded-full lg:w-8 lg:h-8"
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromRight(0.5)}
        className="px-5 pt-20 lg:pt-0 flex justify-center items-center lg:justify-start"
      >
        <Image
          src="https://github.com/EganAr.png"
          alt="@shadcn"
          width={1000}
          height={1000}
          className="absolute object-cover w-full h-full max-w-[120px] max-h-[120px] lg:max-w-[300px] lg:max-h-[300px] rounded-full"
          // priority
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}
