import React from "react";

const ResultRightMenu = ({ inCorrectWords, correctWords, raw, time }) => {
  return (
    <div className="w-52 flex-col justify-center text-center font-semibold mt-6">
      <div className="flex justify-between px-6">
        <div>
          <p className="text-xl">Time</p>
          <h3 className="text-[30px] text-amber-300">{time ? time : 0}s</h3>
        </div>
        <div>
          <p className="text-xl">RAW</p>
          <h3 className="text-[30px] text-amber-300">{raw}</h3>
        </div>
      </div>

      <div className="flex text-left px-6 pt-6">
        <div>
          <p className="text-xl">Correct Words</p>
          <h3 className="text-[30px] text-amber-300">{correctWords}</h3>
        </div>
      </div>
      <div className="flex text-left px-6 pt-6">
        <div>
          <p className="text-xl">InCorrect Words</p>
          <h3 className="text-[30px] text-amber-300">{inCorrectWords}</h3>
        </div>
      </div>
    </div>
  );
};

export default ResultRightMenu;
