import React from "react";
import Header from "../components/Header";
import ResultGraph from "../components/ResultGraph";
import ResultLeftMenu from "../components/ResultLeftMenu";
import ResultRightMenu from "../components/ResultRightMenu";

const Result = ({ typingData }) => {
  return (
    <>
      <Header />
      <div className="mt-8 flex justify-center w-full">
        <div className="h-96  flex justify-center">
          <ResultLeftMenu />
          <ResultGraph chartData={typingData} />
          <ResultRightMenu />
        </div>
      </div>
    </>
  );
};

export default Result;
