"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight } from "../../../utils/motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import IntroPage from "../components/Intro";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [visible, isVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isVisible(false);
    }, 1500);
  }, []);

  return (
    <div>
      <title>About</title>

      <AnimatePresence>
        {visible && <IntroPage>about</IntroPage>}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row lg:flex-row gap-4 justify-center items-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(2)}
          className="flex flex-row md:flex-col lg:flex-col gap-8 md:gap-8 lg:gap-4 justify-center items-center bg-neutral-950 w-full md:w-[300px] lg:w-[350px] h-[200px] md:h-[395px] lg:h-[380px] rounded-lg"
        >
          <Image
            src={"https://github.com/EganAr.png"}
            alt=""
            width={1000}
            height={1000}
            className="w-[150px] h-[150px] md:w-[170px] md:h-[160px] lg:w-[300px] lg:h-[250px] rounded-lg brightness-75 object-cover "
          />
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 font-bold mt-2 px-2">
            <h1 className="hidden md:block lg:block text-base lg:border-r pr-2">
              Skills
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-4">
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/html-1.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 "
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
                src={"https://cdn.worldvectorlogo.com/logos/typescript.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/solidity.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 bg-white rounded"
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/react-2.svg"}
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
                src={"https://book.getfoundry.sh/images/foundry-banner.png"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
              <Image
                src={
                  "https://cdn.worldvectorlogo.com/logos/hardhat-seeklogo-com.svg"
                }
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
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 rounded-full "
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(2)}
            className="flex flex-col w-full md:w-[450px] lg:w-[600px] bg-neutral-950 rounded h-[220px] md:h-[190px] lg:h-[180px]"
          >
            <h2 className="text-sm md:text-bae lg:text-base text-left font-semibold pt-4 px-2 md:px-4 lg:px-4">
              🌟 Self-Taught Software Engineer 🌟
            </h2>
            <h1 className="flex items-center px-[18px] gap-x-3 py-2 text-xs text-gray-600">
              <MapPin size={16} className="text-red-700" /> Bandung, Indonesia
            </h1>

            <p className="text-xs text-gray-400 text-justify tracking-wide px-4">
              Hey there! I am a passionate and self-taught{" "}
              <span className="text-green-500 font-bold">
                Software Engineer
              </span>{" "}
              with a knack for building modern web applications. Through my
              journey of self-learning and exploration, I have developed a
              strong foundation in web development and honed my skills in
              creating dynamic and engaging user interfaces.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(2)}
            className="flex flex-col w-full md:w-[450px] lg:w-[600px] bg-neutral-950 rounded h-[220px] md:h-[190px] lg:h-[180px] mb-12 md:mb-0 lg:mb-0"
          >
            <h1 className="text-left font-semibold pt-4 pb-2 px-4 ">
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
            <p className="text-xs text-gray-400 text-justify tracking-wide px-4 ">
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
