import React from "react";
import { TbReload } from "react-icons/tb";

const SubHeader = () => {
  return (
    <div className="flex justify-center mt-4 ">
      <div className="bg-neutral-700 w-[40%] h-10 rounded-md flex gap-8 items-center p-2 text-gray-500 cursor-pointer justify-center shadow-sm shadow-neutral-700">
        <p>Numbers</p>
        <p>@ Punctuation</p>
        <p>15</p>
        <p>30</p>
        <p>60</p>
        <p>120</p>
        <p>
          <TbReload />
        </p>
      </div>
    </div>
  );
};

export default SubHeader;
