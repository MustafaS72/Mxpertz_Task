import React from "react";
import logo from "../assets/images/logo1.png";
const Header = () => {
  return (
    <div className=" w-full h-24 p-4 flex justify-between mt-4">
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" width={100} />
        <h4 className="font-semibold text-2xl">RapidKeys</h4>
      </div>
    </div>
  );
};

export default Header;
