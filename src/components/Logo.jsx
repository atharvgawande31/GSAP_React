import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Logo() {
  useGSAP(() => {
    gsap.to(".logo", {
      scale: 0.34,
      x: -580,
      y: -320,
      duration: 1,
      scrollTrigger: {
        trigger: ".main",
        start: "top 0%",
        end: "bottom 20%",
        scrub: 2,
      },
    });
  });

  return (
    <div className="main h-[100vh] bg-amber-200 w-full flex justify-center items-center text-6xl font-bold ">
      <h1 className="logo fixed">TheRemoteDev.Co</h1>
    </div>
  );
}
