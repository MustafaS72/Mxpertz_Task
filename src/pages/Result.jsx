import React from "react";
import Header from "../components/Header";
import ResultGraph from "../components/ResultGraph";
import ResultLeftMenu from "../components/ResultLeftMenu";
import ResultRightMenu from "../components/ResultRightMenu";

const Result = ({
  typingData,
  raw,
  wpm,
  inCorrectWords,
  correctWords,
  accuracy,
  timer,
  setShowUserModal,
  setIsStart,
}) => {
  const handleRestart=()=>{
    setShowUserModal(false);
    setIsStart(false);
  }
  return (
    <>
      <Header />
      <div className="mt-8 flex justify-center w-full">
        <div className="h-96  flex justify-center">
          <ResultLeftMenu accuracy={accuracy} wpm={wpm} />
          <ResultGraph chartData={typingData} />
          <ResultRightMenu
            inCorrectWords={inCorrectWords}
            correctWords={correctWords}
            raw={raw}
            time={timer}
          />
        </div>
      </div>
      <div className="flex justify-center mt-8 ">
        <button
          className="button-13 text-md font-semibold px-4 py-1"
          onClick={handleRestart}
        >
          Retake
        </button>
      </div>
    </>
  );
};

export default Result;
