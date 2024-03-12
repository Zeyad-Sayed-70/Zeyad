import { links_data } from "@/constants/navbar";
import Link from "next/link";
import React from "react";

function Links() {
  return (
    <ul className="flex items-center gap-4">
      {links_data.map((link) => (
        <li
          key={link.id}
          className="font-semibold hover:text-primary hover:underline"
        >
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Links;
