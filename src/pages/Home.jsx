import React, { useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import WordContainer from "../components/WordContainer";


const Home = () => {
  const [timer, setTimer] = useState(60);
  const [isStart, setIsStart] = useState(false);
  console.log("timer", timer, isStart);
  return (
    <>
      <Header />
      <SubHeader setTimer={setTimer} />
      <WordContainer
        setIsStart={setIsStart}
        isStart={isStart}
        timer={timer}
      />
    </>
  );
};

export default Home;
