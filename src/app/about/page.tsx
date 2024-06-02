"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "../../../utils/motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div>
      <title>About</title>

      <div className="flex flex-col md:flex-row lg:flex-row gap-4 justify-center items-center mx-6 lg:mx-auto mt-10 md:mt-4 lg:mt-0 h-96">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(0.5)}
          className="flex flex-row md:flex-col lg:flex-col gap-6 md:gap-2 lg:gap-0 justify-center items-center bg-neutral-950 w-full md:w-[300px] lg:w-[300px] h-[200px] md:h-[368px] lg:h-[320px] rounded-lg"
        >
          <Image
            src={"https://github.com/EganAr.png"}
            alt=""
            width={2000}
            height={2000}
            className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-lg brightness-75 "
          />
          <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-2 font-bold mt-3 ">
            <h1 className="text-sm border-r pr-2 lg:pr-2">Skills</h1>
            <div className="w-90 grid grid-cols-3 lg:grid-cols-5 gap-5 md:gap-4 lg:gap-3 mt-2">
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/html-1.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/next-js.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 bg-white rounded-full "
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/css-3.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/javascript-1.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/react-2.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/typescript.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 "
              />

              <Image
                src={"https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 rounded-full "
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/git-icon.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 rounded-full "
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/firebase-1.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 rounded-full "
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-row md:flex-col lg:flex-col gap-2 md:gap-4 lg:gap-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.5)}
            className="flex flex-col w-full md:w-[450px] lg:w-[600px] bg-neutral-950 rounded h-[250px] md:h-[190px] lg:h-[150px]"
          >
            <h2 className="text-sm md:text-bae lg:text-base text-left font-semibold pt-4 px-2 md:px-4 lg:px-4">
              🌟 Self-Taught Junior Frontend Developer with Next.js Skills 🌟
            </h2>
            <h1 className="flex items-center px-[18px] gap-x-3 py-2 text-xs text-gray-600">
              <MapPin size={16} className="text-red-700" /> Bandung, Indonesia
            </h1>

            <p className="text-xs text-gray-400 text-justify tracking-wide px-4">
              Hey there! I am a passionate and self-taught junior Front-end
              developer with a knack for building modern web applications using
              Next.js . Through my journey of self-learning and exploration, I
              have developed a strong foundation in web development and honed my
              skills in creating dynamic and engaging user interfaces.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.5)}
            className="md:flex md:flex-col lg:flex lg:flex-col w-[200px] md:w-[450px] lg:w-[600px] bg-neutral-950 rounded md:h-[160px] lg:h-[150px] hidden"
          >
            <h1 className="text-center lg:text-left font-semibold pt-4 pb-2 px-4">
              🌟 Experience 🌟
            </h1>

            <h2 className="flex gap-4 items-center font-semibold pb-2 px-4 text-sm text-gray-600">
              Blog App
              <Link
                href="https://sn-blog-rho.vercel.app/"
                className="flex gap-2 px-2 py-1  text-white bg-red-700 rounded "
              >
                <ArrowUpRight size={16} />{" "}
                <p className="text-xs">Visit Blog App</p>
              </Link>
            </h2>
            <p className="text-xs text-gray-400 text-justify tracking-wide px-4 hidden md:block lg:block">
              I created scalable and maintainable web applications that provide
              seamless user experiences. My portfolio includes a comprehensive
              blog application featuring user authentication, blog management,
              and profile editing capabilities .
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
