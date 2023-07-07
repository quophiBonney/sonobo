import React from "react";
import AOS from "aos";
import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
function App() {
  AOS.init();
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
