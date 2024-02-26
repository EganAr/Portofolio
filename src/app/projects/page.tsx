"use client";

import * as React from "react";
import AutoPlay from "embla-carousel-autoplay";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function CardWithForm() {
  const plugin = React.useRef(
    AutoPlay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <div className="absolute top-[20%] left-[36%] lg:top-[13%] lg:left-[47%] text-xl ">
        My Projects
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="max-w-[295px] lg:max-w-[350px] absolute top-[27%] left-[12%] lg:top-[20%] lg:left-[37%] border border-gray-300 rounded-lg "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        {" "}
        <CarouselContent>
          {Array.from({ length: 1 }).map((_, index) => (
            <>
              <CarouselItem key={index}>
                <div className="p-1">
                  <CardHeader className="flex flex-col gap-3">
                    <CardTitle className="text-xl">Sn ecommerce</CardTitle>
                    <Image
                      src="/images/Snecommerce.png"
                      alt="image"
                      width={2000}
                      height={2000}
                      className="border border-gray-400 rounded-xl object-cover"
                    />
                    <div>
                      <p className="text-sm text-justify tracking-wide">
                        An ecommerce site for selling some fashion products,
                        made with Next.js and Tailwind CSS.
                      </p>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex justify-end">
                    <Link href={"https://sn-ecommerce.vercel.app/"}>
                      <Button>Go to site</Button>
                    </Link>
                  </CardFooter>
                </div>
              </CarouselItem>
              <CarouselItem key={index}>
                <CardHeader className="flex flex-col gap-3">
                  <CardTitle className="text-xl">SnFlix</CardTitle>
                  <Image
                    src="/images/SnFlix.png"
                    alt="image"
                    width={2000}
                    height={2000}
                    className="border border-purple-700  rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-sm text-justify tracking-wide line-clamp-5 lg:line-clamp-3">
                      An movie website for watching your trailer favorite
                      movies. Inspired by Netflix made with Next.js and Tailwind
                      CSS.
                    </p>
                  </div>
                </CardHeader>
                <CardFooter className="flex justify-end">
                  <Link href={"https://sn-flix.vercel.app/home"}>
                    <Button>Go to site</Button>
                  </Link>
                </CardFooter>
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black" />
        <CarouselNext className="text-black" />
      </Carousel>
    </>
  );
}
