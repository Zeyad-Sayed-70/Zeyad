import Container from "@/components/Common/Container";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BlogCard from "./BlogCard";
import { TfiLayoutSlider } from "react-icons/tfi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
function Blogs() {
  return (
    <Container>
      <div>
        <div className="flex justify-between md:justify-start items-center gap-6">
          <h1 className="text-3xl font-bold text-main">Published Blogs</h1>
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <TfiLayoutSlider
                  size={30}
                  className="text-main_black_variant mt-1"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>This is Carousel, Drag right or left</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Carousel className="py-12 w-full " opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <BlogCard />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <BlogCard />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <BlogCard />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <BlogCard />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </Container>
  );
}

export default Blogs;
