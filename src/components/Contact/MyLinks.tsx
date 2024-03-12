"use client";
import React from "react";
import H1 from "../Common/H1";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { myLinks_data } from "@/constants/contact";
import Link from "next/link";

function MyLinks() {
  return (
    <div>
      <H1>My Links</H1>
      <div className="flex items-center gap-2 mt-4">
        <TooltipProvider delayDuration={200}>
          {myLinks_data.map((link) => (
            <Tooltip key={link.id}>
              <TooltipTrigger>
                <Link href={"#"} target="_blank">
                  <div
                    className={`flex justify-center items-center text-main_white rounded-md w-12 h-11 text-2xl ${link.bg_color} hover:bg-opacity-85 transition-all`}
                  >
                    {link.icon}
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.tip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
}

export default MyLinks;
