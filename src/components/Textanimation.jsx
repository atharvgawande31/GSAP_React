import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const TextAnimation = () => {
  const textRef = useRef();

  useGSAP(() => {
    // Split the text into characters
    const split = new SplitText(textRef.current, { type: "chars,words" });

    // Animate the characters with scroll-triggered animation
    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.07,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 60%", // when the top of the trigger hits 50% of viewport
        toggleActions: "play none none none"
      }
    });

    // Cleanup on component unmount
    return () => split.revert();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <h1 ref={textRef} className="animate text-9xl font-semibold text-neutral-600">
        Hello World
      </h1>
    </div>
  );
};

export default TextAnimation;
