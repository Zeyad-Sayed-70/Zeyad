import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 md:px-12 lg:px-24">
      {children}
    </div>
  );
}

export default Container;
