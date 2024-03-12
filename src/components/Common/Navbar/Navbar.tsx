"use client";
import { lazy, Suspense } from "react";
import Logo from "../Logo";
import Link from "next/link";
import { Button } from "../../ui/button";
import useMedia from "@/hooks/useMedia";
import Container from "../Container";

const Links = lazy(() => import("./Links"));
const SideMenu = lazy(() => import("./SideMenu"));

function Navbar() {
  const media = useMedia();

  return (
    <Container>
      <nav className="h-[70px] w-full flex items-center gap-12">
        <Logo width={100} />
        <Suspense>
          {/* {media && media >= 768 && ()} */}
          <>
            <div className="hidden md:block">
              <Links />
            </div>
            <div className="hidden md:block ml-auto">
              <Link href={"/contact"}>
                <Button
                  type="button"
                  role="contact"
                  className="text-lg py-5 bg-main hover:main-variant"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </>
        </Suspense>
        <Suspense>
          {/* {media && media < 768 && ()} */}
          <div className="block md:hidden ml-auto">
            <SideMenu />
          </div>
        </Suspense>
      </nav>
    </Container>
  );
}

export default Navbar;
