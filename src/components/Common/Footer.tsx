import React from "react";
import Logo from "./Logo";
import { links_data } from "@/constants/navbar";
import Link from "next/link";
import Container from "./Container";
import { Button } from "../ui/button";

function Footer() {
  return (
    <main className="bg-main_black pt-12 pb-6">
      <Container>
        <section className="w-full flex flex-col md:flex-row items-center md:gap-12 text-main_white">
          <Logo width={130} darkMode />

          <ul className="flex flex-col md:flex-row items-center gap-4 my-8 md:my-0">
            {links_data.map((link) => (
              <li
                key={link.id}
                className="font-semibold text-xl hover:underline"
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <Link href={"/contact"} className="md:ml-auto">
            <Button
              type="button"
              role="contact"
              className="text-lg py-5 bg-main hover:main-variant"
            >
              Get In Touch
            </Button>
          </Link>
        </section>
        <hr className="w-full border-main_black_variant my-6 md:mt-8" />
        <p className="text-sm text-main_white_variant text-center">
          Copyright © 2024 Zeyad 💖. All rights reserved
        </p>
      </Container>
    </main>
  );
}

export default Footer;
