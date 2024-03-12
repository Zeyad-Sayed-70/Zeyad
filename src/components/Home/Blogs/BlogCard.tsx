import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function BlogCard() {
  return (
    <div>
      <Link href={"#"}>
        <Image
          alt={`photo`}
          src={"/assets/zeyad logo.png"}
          width={400}
          height={400}
          className="border-2 w-full min-h-[200px] max-h-[200px] object-cover"
        />
      </Link>
      <div>
        <div className="p-2 px-4 bg-main">
          <p className="flex items-center gap-2 text-md text-main_white">
            <FaBookOpen size={25} />
            <Link
              href={"#"}
              className="whitespace-nowrap overflow-hidden text-ellipsis hover:underline"
              title="As a skilled web developer with extensive as a skilled web
                developer with extensive"
            >
              As a skilled web developer with extensive as a skilled web
              developer with extensive
            </Link>
          </p>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1 text-main_white_variant text-sm">
              <span>Written By Zeyad</span>
              <span>.</span>
              <span>01/01/2024</span>
            </div>
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex items-center gap-2 text-main_white_variant">
                    <span className="text-sm">120</span>
                    <BsFillPeopleFill size={25} />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Readers</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogCard;
