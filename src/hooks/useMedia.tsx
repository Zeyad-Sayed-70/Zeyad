"use client";
import { useEffect, useState } from "react";

function useMedia() {
  const [media, setMedia] = useState<number | null>(null);

  const onResize = () => {
    setMedia(window.innerWidth);
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return media;
}

export default useMedia;
