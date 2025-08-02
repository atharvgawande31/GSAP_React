import React from "react";
// It's standard practice to import gsap and the hook like this
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

const App = () => {
  const [change, setChange] = useState(0);

  // random is a function that will generate a new number each time it's called
  const random = gsap.utils.random(-500, 500, 50, true);

  useGSAP(() => {
    // This animation will run once on mount, and then again every time 'change' is updated
    gsap.to(".box", {
      x: change,
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, [change]); // <-- FIX 1: The dependency array tells useGSAP to re-run on change

  return (
    <div className="main p-10">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => {
          // FIX 2: Call the random function to get a number
          setChange(random());
        }}
      >
        Click to Animate
      </button>
      <div className="box h-40 w-40 bg-amber-400 border-2 rounded-3xl flex justify-center items-center">
        Hello
      </div>
    </div>
  );
};

export default App;
