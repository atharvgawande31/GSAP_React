import React, { useRef } from "react";
// It's standard practice to import gsap and the hook like this
import gsap from "gsap";
import Box from "./components/Box";
import TextAnimation from "./components/Textanimation";
import Logo from "./components/Logo";

const App = () => {

  return (
    <>
      <Logo />
    <Box />
    <TextAnimation />
  
    </>
    
  );
};

export default App;
