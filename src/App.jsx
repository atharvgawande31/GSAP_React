import React, { useRef } from "react";
// It's standard practice to import gsap and the hook like this
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

const App = () => {
  const [change, setChange] = useState(0);
  const [rotate, setRotate] = useState(0)
  const [move, setMove] = useState(0)

  const buttonRef = useRef(null)

  // random is a function that will generate a new number each time it's called
  const random = gsap.utils.random(-500, 500, 50, true);
  const randomX = gsap.utils.random(-360, 360, 30, true)
  const randomY = gsap.utils.random(-300, 300, 50, true)



  useGSAP(() => {

    gsap.to(".box", {
      x: change,
      y: move,
      duration: 0.3,
      rotate: rotate,
      ease: "power2.inOut",
    });
  }, [change, rotate, move]);

  const handleClick = () => {
    // Use GSAP to create the animation
    gsap.to(buttonRef.current, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power1.inOut'
    });

    setChange(random());
    setRotate(randomX())
    setMove(randomY())
  };


  return (
    <div className="main p-10 flex flex-col justify-center align-middle items-center w-[100vw] h=[100vh] m-auto">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded z-20"
        onClick={handleClick}
        ref={buttonRef}

      >
        Click to Animate
      </button>
      <div className="box h-40 w-40 bg-amber-400 border-2 rounded-3xl flex justify-center items-center z-10">
        Hello
      </div>
    </div>
  );
};

export default App;
