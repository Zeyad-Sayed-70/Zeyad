import Image from "next/image";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaGithub, FaServer } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Product } from "@/constants/projects";

function ProjectCard({ product }: { product: Product }) {
  return (
    <div className="max-w-[400px] mx-auto">
      <Image
        alt={`photo`}
        src={"/assets/zeyad logo.png"}
        width={400}
        height={400}
        className="border-2 w-full min-h-[200px] max-h-[200px] object-cover"
      />

      <div className="text-main_white bg-main_black p-4 py-5">
        <h2 className="text-2xl font-medium flex items-center gap-3">
          {product.title}
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger>
                <span className="text-2xl text-green-500">
                  <FaCircleCheck />
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Completed</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h2>

        <p className="text-main_white_variant text-lg leading-6 mt-4 mb-8">
          {product.describtion}
        </p>

        <div className="flex gap-2 flex-wrap mb-8">
          {product.tags.map((tag, ind) => (
            <span
              key={ind}
              className="py-1 px-4 rounded-lg text-main_white bg-main hover:bg-main-variant bg-opacity-40 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-2xl text-main_white_variant">
            {product.github.is && (
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={product.github.link}>
                      <FaGithub />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit Github</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}

            {product.server.is && (
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={product.server.link}>
                      <FaServer />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Server Status</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          {product.demo.is && (
            <Button
              variant={"outline"}
              className="text-xl text-main_white_variant bg-main_black border-none"
            >
              <Link href={product.demo.link}>Visit</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
