import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo({
  width = 130,
  height = 40,
  darkMode = false,
}: {
  width?: number;
  height?: number;
  darkMode?: boolean;
}) {
  return (
    <Link
      href={"/"}
      className={`${darkMode ? "p-6 rounded-lg bg-main_white" : ""}`}
    >
      <Image
        alt="ZEYAD Logo"
        src={"/assets/zeyad_logo.png"}
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;
