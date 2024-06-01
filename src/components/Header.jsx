import React from "react";
import logo from "../assets/images/logo1.png";
const Header = () => {
  return (
    <div className=" w-full h-24 p-4 flex justify-between mt-4 absolute top-0 text-white px-10">
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" width={100} />
        <h4 className="font-semibold text-2xl ">BrainlyLingo</h4>
      </div>
      <div>
        <button className="button-90">Sign out</button>
      </div>
    </div>
  );
};

export default Header;
