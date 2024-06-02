"use client";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../../utils/motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:gap-2 lg:pt-2 ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.5)}
      >
        <div className="flex flex-col gap-3 px-6 pt-4 md:pt-0 lg:px-14 lg:pt-12 max-w-2xl">
          <h1 className="text-3xl lg:text-3xl font-bold">
            {"Hi, it's"} <span className="text-green-500">Egan</span>{" "}
          </h1>
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
            className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-purple-700"
          />

          <p className="text-sm lg:text-md font-thin text-justify items-center tracking-wide">
            Welcome to my profile! I am a skilled and dedicated frontend
            developer specializing in Next.js, a cutting-edge framework that
            combines the power of React.js with advanced features like
            server-side rendering and static site generation.
          </p>
          <div className="flex gap-4 lg:gap-8 items-center font-bold py-4">
            <h1 className="text-base md:text-lg lg:text-lg border-r pr-3 md:pr-4 lg:pr-4">
              Tech Stack{" "}
            </h1>
            <div className="w-90 flex items-center gap-4">
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/html-1.svg"}
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
                className="w-6 h-6 bg-white rounded-full lg:w-8 lg:h-8"
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/typescript.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 bg-white rounded-full lg:w-8 lg:h-8"
              />
              <a
                href="/images/SnAnimelist.png"
                download
                className="lg:hidden ml-2 md:ml-4 text-xs w-48 md:w-24 font-bold py-1 px-2 bg-green-300 hover:opacity-90 transition-all duration-500 text-black rounded-xl "
              >
                Download cv
              </a>
            </div>
          </div>
          <a
            href="portfolio.pdf"
            download
            className="hidden lg:block text-sm w-24 lg:w-28 font-bold p-2 bg-green-300 hover:opacity-90 transition-all duration-500 text-black rounded-xl "
          >
            Download cv
          </a>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromRight(0.5)}
        className="w-full lg:w-96 flex justify-center items-center"
      >
        <Image
          src="https://github.com/EganAr.png"
          alt="@shadcn"
          width={1000}
          height={1000}
          className="object-cover w-full h-full max-w-[180px] max-h-[180px] lg:max-w-[320px] lg:max-h-[320px] rounded-full"
          // priority
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}
