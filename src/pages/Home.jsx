import React, { useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import WordContainer from "../components/WordContainer";
import Result from "./Result";

const Home = () => {
  const [timer, setTimer] = useState(1);
  const [isStart, setIsStart] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [typingData, setTypingData] = useState([]);

  console.log("timer", timer, isStart);
  if (showUserModal) {
    return <Result typingData={typingData} />;
  }

  return (
    <>
      <Header />
      <SubHeader
        setTimer={setTimer}
        timer={timer}
        setShowUserModal={setShowUserModal}
        isStart={isStart}
        setIsRefresh={setIsRefresh}
      />
      <WordContainer
        setIsStart={setIsStart}
        isStart={isStart}
        timer={timer}
        setShowUserModal={setShowUserModal}
        showUserModal={showUserModal}
        isRefresh={isRefresh}
        setIsRefresh={setIsRefresh}
        typingData={typingData}
        setTypingData={setTypingData}
      />
    </>
  );
};

export default Home;
