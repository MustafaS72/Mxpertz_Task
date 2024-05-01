import React, { useState } from "react";
import { TbReload } from "react-icons/tb";

const SubHeader = ({ setTimer }) => {
  const [selectedTimer, setSelectedTimer] = useState(60);

  const handleTimerClick = (value) => {
    setSelectedTimer(value);
    setTimer(value);
  };

  return (
    <div className="flex justify-center mt-4 ">
      <div className="bg-neutral-700 w-[40%] h-10 rounded-md flex gap-8 items-center p-2 text-gray-500 cursor-pointer justify-center shadow-sm shadow-neutral-700">
        <p>Numbers</p>
        <p>@ Punctuation</p>
        <p
          onClick={() => handleTimerClick(15)}
          style={{ color: selectedTimer === 15 ? "yellow" : "inherit" }}
        >
          15
        </p>
        <p
          onClick={() => handleTimerClick(30)}
          style={{ color: selectedTimer === 30 ? "yellow" : "inherit" }}
        >
          30
        </p>
        <p
          onClick={() => handleTimerClick(60)}
          style={{ color: selectedTimer === 60 ? "yellow" : "inherit" }}
        >
          60
        </p>
        <p
          onClick={() => handleTimerClick(120)}
          style={{ color: selectedTimer === 120 ? "yellow" : "inherit" }}
        >
          120
        </p>
        <p>
          <TbReload />
        </p>
      </div>
    </div>
  );
};

export default SubHeader;
