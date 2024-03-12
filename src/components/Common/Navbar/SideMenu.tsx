"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { links_data } from "@/constants/navbar";
import { VscMenu, VscClose } from "react-icons/vsc";

import "./index.css";
import { useRouter } from "next/navigation";

function SideMenu() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const router = useRouter();

  function handleClick(href: string) {
    router.push(href);
    setIsOpen(false);
  }

  return (
    <>
      <main>
        <Button
          type="button"
          role="open"
          aria-pressed={isOpen as boolean}
          variant="outline"
          className="text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <VscMenu />
        </Button>
        <aside
          aria-expanded={isOpen as boolean}
          className={`w-full h-full fixed top-0 bg-slate-200 z-10 ${
            isOpen
              ? "slide-to-left"
              : isOpen === false
              ? "slide-to-right"
              : "-right-[120%]"
          }`}
        >
          <Button
            type="button"
            role="close"
            aria-pressed={isOpen as boolean}
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-xl bg-[none]"
            variant="outline"
          >
            <VscClose />
          </Button>

          <section className="h-full px-6 flex flex-col items-center justify-center gap-24">
            <ul className="w-full text-center flex flex-col gap-4">
              {links_data.map((link) => (
                <li
                  key={link.id}
                  className="w-full py-2 px-8 rounded-md cursor-pointer hover:bg-slate-300 text-4xl font-light"
                  onClick={() => handleClick(link.href)}
                >
                  {link.title}
                </li>
              ))}
            </ul>
            <Button
              type="button"
              role="contact"
              className="text-xl py-4"
              onClick={() => handleClick("/contact")}
            >
              Get In Touch
            </Button>
          </section>
        </aside>
      </main>
    </>
  );
}

export default SideMenu;
