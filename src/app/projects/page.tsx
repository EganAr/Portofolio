"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Desc, { Desc2 } from "../components/Desc";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroPage from "../components/Intro";

export default function CardWithForm() {
  const [visible, isVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isVisible(false);
    }, 1500);
  }, []);

  return (
    <>
      <title>Projects</title>

      <AnimatePresence>
        {visible && <IntroPage>project</IntroPage>}
      </AnimatePresence>

      <div className="overflow-y-auto overflow-hidden md:overflow-hidden lg:overflow-hidden h-[430px] flex flex-col md:flex-row lg:flex-row justify-between items-start mt-2 mx-8 md:mx-6 lg:mx-20 gap-4">
        <div className="bg-[#0c0b0b] w-[600px] md:w-[500px] lg:w-[500px] md:h-[370px] lg:h-[350px] flex flex-col gap-2 items-start justify-start px-6 py-4 ">
          <Image
            src="/images/Snecommerce.png"
            alt="image"
            width={2000}
            height={2000}
            className="w-64 object-cover"
          />
          <div className="flex items-center gap-3 pt-2">
            <h1 className="text-sm md:text-lg lg:text-lg">Sn ecommerce</h1>
            <Link
              href="https://sn-ecommerce.vercel.app/"
              className="flex gap-2 px-2 py-2 md:py-1.5 lg:py-1.5  text-white bg-red-700 hover:bg-red-800 transition-all duration-500 rounded "
            >
              <ArrowUpRight size={16} /> <p className="text-xs ">Visit App</p>
            </Link>
          </div>
          <p className="text-xs text-justify tracking-wide text-gray-400 hidden md:block lg:block">
            This project is an e-commerce fashion store designed to provide a
            seamless and engaging shopping experience for users, the store
            offers a robust platform for purchasing, and managing fashion
            products.
          </p>
          <p className="block md:hidden lg:hidden">
            <Desc />
          </p>
          <div className="flex gap-4 md:gap-8 lg:gap-8 items-center font-bold pt-4 md:pt-4 lg:pt-4 lg:pb-6">
            <h1 className="text-sm border-r pr-2 md:pr-4 lg:pr-4">
              Tech Stack{" "}
            </h1>
            <div className="w-90 flex items-center gap-3 lg:gap-4">
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/next-js.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 bg-white rounded-full lg:w-6 lg:h-6"
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/typescript.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 lg:w-6 lg:h-6"
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/sanity.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 rounded-full lg:w-6 lg:h-6"
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/stripe-4.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 lg:w-6 lg:h-6"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#0c0b0b] w-[600px] md:w-[500px] lg:w-[500px] md:h-[370px] lg:h-[350px] flex flex-col gap-2 items-start justify-start px-6 pt-4 md:pb-8 lg:pb-8">
          <Image
            src="/images/SnBlog.png"
            alt="image"
            width={2000}
            height={2000}
            className="w-64 object-cover"
          />
          <div className="flex items-center pt-2 gap-3">
            <h1 className="text-sm md:text-lg lg:text-lg">SnBlog</h1>
            <Link
              href="https://sn-blog-rho.vercel.app/"
              className="flex gap-2 px-2 py-1.5  text-white bg-red-700 hover:bg-red-800 transition-all duration-500 rounded "
            >
              <ArrowUpRight size={16} /> <p className="text-xs">Visit App</p>
            </Link>
          </div>
          <p className="text-xs text-justify tracking-wide text-gray-400 hidden md:block lg:block">
            A full-featured blog application that allows users to sign up, sign
            in, create, delete blog posts, and update their profiles.
          </p>
          <p className="block md:hidden lg:hidden">
            <Desc2 />
          </p>
          <div className="flex gap-4 md:gap-8 lg:gap-8 items-center font-bold py-4 md:pt-12 lg:pt-12">
            <h1 className="text-sm border-r pr-2 lg:pr-4">Tech Stack </h1>
            <div className="w-90 flex items-center gap-3 lg:gap-4">
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/next-js.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 bg-white rounded-full "
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
                className="w-5 h-5  rounded-full "
              />
              <Image
                src={"https://cdn.worldvectorlogo.com/logos/firebase-1.svg"}
                alt="html"
                width={100}
                height={100}
                className="w-6 h-6 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
