import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { IoMdMore } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

function Thoughts() {
  return (
    <div className="py-8 xl:pt-0">
      <h1 className="text-6xl md:text-[100px] text-main opacity-5 font-black text-center -mb-1 select-none">
        Thoughts
      </h1>
      <Carousel orientation="vertical">
        <CarouselContent className="h-[320px] md:h-[300px]">
          <CarouselItem className="basis-full">
            <div className="h-full flex justify-center items-center">
              <ThoughtBox />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full">
            <div className="flex justify-center">
              <ThoughtBox />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-full">
            <div className="flex justify-center">
              <ThoughtBox />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

function ThoughtBox() {
  return (
    <div className="max-w-full w-[650px] rounded-md bg-gray-100 p-6 py-8">
      <div className="flex items-center gap-2">
        <Image
          alt="avatar"
          src={"/assets/personal.jpg"}
          width={70}
          height={70}
          className="w-16 h-16 rounded-full object-cover border-2"
        />

        <h4 className="text-main_black font-semibold text-xl ml-2">
          Zeyad Sayed
        </h4>
        <h4 className="text-main_black font-bold text-lg">.</h4>
        <h4 className="text-main_black_variant text-xs mt-2">01/01/2024</h4>
        <Button
          size={"icon"}
          variant={"ghost"}
          className="hover:bg-slate-100 text-2xl ml-auto"
        >
          <IoMdMore />
        </Button>
      </div>
      <p className="text-lg text-main_black_variant mt-4">
        As a skilled web developer with extensive experience in both front-end
        and back-end development, I am dedicated to creating visually stunning
        and highly functional digital experiences that exceed expectations.
      </p>
    </div>
  );
}

export default Thoughts;
