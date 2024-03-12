import React from "react";

function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-bold text-main text-center lg:text-start">
      {children}
    </h1>
  );
}

export default H1;
