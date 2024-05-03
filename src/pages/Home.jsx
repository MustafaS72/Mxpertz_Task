import React, { useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import WordContainer from "../components/WordContainer";

const Home = () => {
  const [timer, setTimer] = useState(60);
  const [isStart, setIsStart] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  console.log("timer", timer, isStart);
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
      />
    </>
  );
};

export default Home;
