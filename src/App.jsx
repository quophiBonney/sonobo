import React from "react";
import AOS from "aos";
import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "../src/pages/home/Home";
import ComingSoon from "../src/pages/comingsoon/ComingSoon";
import {motion} from "framer-motion";
import Convertor from "./pages/convertor/Convertor";
function App() {
  AOS.init();
  return (
    <>
      <motion.div
        initial={{x: "100%"}}
        animate={{x: "0%"}}
        opacity={{x: "0"}}
        transtion={{duration: 0.75, ease: "easeIn"}}
      >
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/convertor" element={<Convertor />} />
          <Route path="coming-soon" element={<ComingSoon />} />
        </Routes>
      </motion.div>
    </>
  );
}

export default App;
