"use client";
import { AnimatePresence, motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../../utils/motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import IntroPage from "./Intro";
import Footer from "./Footer";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [visible, isVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isVisible(false);
    }, 1500);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && <IntroPage>welcome</IntroPage>}
      </AnimatePresence>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:gap-0 lg:pt-2 ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromLeft(2)}
        >
          <div className="flex flex-col gap-2 lg:gap-3 px-6 pt-2 lg:px-14">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl lg:text-3xl font-semibold">
                {"Hi, it's"} <span className="text-green-500">Egan</span>{" "}
              </h1>
              <a
                href="portfolio.pdf"
                download
                className="flex justify-center items-center gap-2 lg:hidden ml-6 md:ml-4 text-xs w-24 h-8 font-bold border border-green-700 hover:bg-green-700 transition-all duration-500 rounded-xl "
              >
                <Download size={16} />
                <p className="text-xs font-bold mt-1">{"( cv )"}</p>
              </a>
            </div>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Blockchain | Web3 | Web2",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              className="text-purple-800 text-lg lg:text-xl font-semibold"
            />

            <p className="text-sm lg:text-base font-medium text-justify items-center lg:max-w-2xl">
              Welcome to my profile! I am a skilled and dedicated Software
              Engineer specializing in{" "}
              <span className="text-purple-500 font-bold">
                {" "}
                blockchain development, Web3, and full-stack development
              </span>
              . Transitioning from traditional Web2 applications, I now
              specialize in Web3 solutions, creating and integrating smart
              contracts into decentralized applications
              <span className="text-green-500 font-bold"> dApps</span> using
              frameworks like{" "}
              <span className="text-green-500 font-bold">
                {" "}
                Web3.js and Ethers.js.
              </span>
            </p>
            <div className="flex gap-4 lg:gap-8 items-center font-bold pt-3">
              <h1 className="font-medium text-lg lg:text-xl border-r pr-3">
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
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              </div>
            </div>

            <div className="hidden lg:flex justify-start items-center gap-4">
              <button
                onClick={() => setOpen(!open)}
                className="flex justify-center items-center text-lg bg-green-500 text-black w-8 h-8 rounded-full "
              >
                {open ? "<" : ">"}
              </button>
              <motion.div
                className="hidden lg:flex justify-center items-center bg-green-500"
                animate={{ width: open ? "80px" : "0px" }}
                transition={{ duration: 0.5, ease: "backInOut" }}
                style={{
                  height: "40px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                {open ? (
                  <div className="flex justify-between items-center w-[80px] h-[40px] px-2">
                    <a
                      href="portfolio.pdf"
                      download
                      className="flex gap-2 text-sm text-black"
                    >
                      <Download size={20} />
                      <p className="text-xs font-bold mt-1">{"( cv )"}</p>
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(2)}
          className="w-full lg:w-96 flex justify-center items-center lg:pr-12"
        >
          <Image
            src="https://github.com/EganAr.png"
            alt="@shadcn"
            width={1000}
            height={1000}
            className="object-cover w-full h-full max-w-[180px] max-h-[180px] md:max-w-[200px] md:max-h-[200px] lg:max-w-[320px] lg:max-h-[320px] rounded-full"
            loading="lazy"
          />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(2)}
        className="hidden md:block lg:block md:pt-2 pt-4"
      >
        <Footer />
      </motion.div>
    </>
  );
}
