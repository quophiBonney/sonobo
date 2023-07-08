import React from "react";
import AOS from "aos";
import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import {motion} from "framer-motion";
function App() {
  AOS.init();
  return (
    <>
      <motion.div
        initial={{x: "100%"}}
        animate={{x: "0%"}}
        opacity={{x: "0"}}
        transtion={{duration: 12, ease: "easeIn"}}
      >
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="coming-soon" element={<ComingSoon />} />
        </Routes>
      </motion.div>
    </>
  );
}

export default App;
