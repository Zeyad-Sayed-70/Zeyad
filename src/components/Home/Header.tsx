import React from "react";
import { Button } from "../ui/button";
import Container from "../Common/Container";
import Image from "next/image";

function Header() {
  return (
    <Container>
      <main className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-6 py-12 text-center md:text-start">
        <section className="flex-1">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-[1.25] tracking-tight">
            Browse My Full-Stack <span className="text-main">Web Dev</span>{" "}
            Portfolio
          </h1>
          <p className="text-lg md:text-px24 leading-6 md:leading-8 text-main_black_variant mb-12">
            As a skilled web developer with extensive experience in both
            front-end and back-end development.
          </p>
          <Button
            type="button"
            className="text-lg py-5 bg-main hover:main-variant"
          >
            Explore My Projects
          </Button>
        </section>
        <section className="flex-1 flex justify-center items-center">
          <div className="relative w-[320px] lg:w-[420px] min-h-[320px] lg:min-h-[420px]">
            <img
              loading="eager"
              alt="coding-gif"
              src="/assets/coding.gif"
              className="w-[320px] lg:w-[420px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[3]"
            />
            <img
              loading="eager"
              alt="coding-background-gif"
              src="/assets/coding-background.gif"
              className="w-[320px] lg:w-[460px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2]"
            />
            <img
              loading="eager"
              alt="coding-arrow-gif"
              src="/assets/code-arrow.gif"
              className="w-[70px] absolute top-[30px] left-[-10px] z-[1]"
            />
          </div>
        </section>
      </main>
    </Container>
  );
}

export default Header;
