"use client";
import React from "react";
import { VscMenu } from "react-icons/vsc";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { links_data } from "@/constants/navbar";
import { useRouter } from "next/navigation";

function DropMenu() {
  const router = useRouter();
  function handleClick(href: string) {
    router.push(href);
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <VscMenu size={30} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[250px]">
          {links_data.map((link) => (
            <DropdownMenuItem
              key={link.id}
              onSelect={(e: any) => handleClick(link.href)}
              className="text-lg"
            >
              {link.title}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-lg">
            Call To Action
          </DropdownMenuLabel>
          <DropdownMenuItem className="text-lg">Get In Touch</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default DropMenu;
