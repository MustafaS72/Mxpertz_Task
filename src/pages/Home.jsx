import React, { useState } from "react";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import WordContainer from "../components/WordContainer";
import Result from "./Result";

const Home = () => {
  const [timer, setTimer] = useState(60);
  const [isStart, setIsStart] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [typingData, setTypingData] = useState([]);
  const [correctWords, setCorrectWords] = useState(0);
  const [inCorrectWords, setInCorrectWords] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [raw, setRaw] = useState(0);
  console.log("timer", timer, isStart);
  if (showUserModal) {
    return (
      <Result
        typingData={typingData}
        timer={timer}
        raw={raw}
        wpm={wpm}
        accuracy={accuracy}
        correctWords={correctWords}
        inCorrectWords={inCorrectWords}
        setShowUserModal={setShowUserModal}
        setIsStart={setIsStart}
      />
    );
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
        correctWords={correctWords}
        setCorrectWords={setCorrectWords}
        inCorrectWords={inCorrectWords}
        setInCorrectWords={setInCorrectWords}
        setWpm={setWpm}
        setAccuracy={setAccuracy}
        setRaw={setRaw}
      />
    </>
  );
};

export default Home;
