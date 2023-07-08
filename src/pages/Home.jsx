import React from "react";
import Hero from "./Hero";
import Form from "./Form";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-hero">
        <Hero />
        <Form />
      </div>
    </>
  );
};

export default Home;
