"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "../../../utils/motion";

export default function AboutPage() {
  return (
    <div>
      <title>About</title>

      <div className="flex flex-col lg:flex-row justify-center items-center px-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.5)}
        >
          <Image
            src={
              "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            width={2000}
            height={2000}
            className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(0.5)}
          className="flex flex-col w-[300px] lg:w-[600px]"
        >
          <h1 className="text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-700 text-3xl font-bold">
            About Me
          </h1>
          <h2 className="text-center lg:text-left font-semibold py-4">
            🌟 Self-Taught Junior Frontend Developer with Next.js Skills 🌟
          </h2>
          <p className="text-xs text-justify tracking-wide">
            Hey there! I'm a passionate and self-taught junior Front-end
            developer with a knack for building modern web applications using
            Next.js . Through my journey of self-learning and exploration, I've
            developed a strong foundation in web development and honed my skills
            in creating dynamic and engaging user interfaces.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
