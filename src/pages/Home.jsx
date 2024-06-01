import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import StoryCards from "../components/StoryCards";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Header />
        <StoryCards />
      </div>
    </>
  );
};

export default Home;
