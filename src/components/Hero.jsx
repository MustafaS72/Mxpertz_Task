import React from "react";
import Herobg from "../assets/images/spacebg.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[55vh] bg-slate-400 overflow-hidden">
      <img src={Herobg} alt="herobg" className="w-full h-full object-cover" />

      <svg
        id="wave"
        className="absolute bottom-[-100px] w-full"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 350"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="#000" offset="0%"></stop>
            <stop stopColor="#000" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,175L80,163.3C160,152,320,128,480,145.8C640,163,800,222,960,233.3C1120,245,1280,210,1440,215.8C1600,222,1760,268,1920,256.7C2080,245,2240,175,2400,163.3C2560,152,2720,198,2880,186.7C3040,175,3200,105,3360,110.8C3520,117,3680,198,3840,198.3C4000,198,4160,117,4320,99.2C4480,82,4640,128,4800,140C4960,152,5120,128,5280,105C5440,82,5600,58,5760,87.5C5920,117,6080,198,6240,204.2C6400,210,6560,140,6720,122.5C6880,105,7040,140,7200,157.5C7360,175,7520,175,7680,157.5C7840,140,8000,105,8160,87.5C8320,70,8480,70,8640,105C8800,140,8960,210,9120,215.8C9280,222,9440,163,9600,116.7C9760,70,9920,35,10080,40.8C10240,47,10400,93,10560,122.5C10720,152,10880,163,11040,180.8C11200,198,11360,222,11440,233.3L11520,245L11520,350L11440,350C11360,350,11200,350,11040,350C10880,350,10720,350,10560,350C10400,350,10240,350,10080,350C9920,350,9760,350,9600,350C9440,350,9280,350,9120,350C8960,350,8800,350,8640,350C8480,350,8320,350,8160,350C8000,350,7840,350,7680,350C7520,350,7360,350,7200,350C7040,350,6880,350,6720,350C6560,350,6400,350,6240,350C6080,350,5920,350,5760,350C5600,350,5440,350,5280,350C5120,350,4960,350,4800,350C4640,350,4480,350,4320,350C4160,350,4000,350,3840,350C3680,350,3520,350,3360,350C3200,350,3040,350,2880,350C2720,350,2560,350,2400,350C2240,350,2080,350,1920,350C1760,350,1600,350,1440,350C1280,350,1120,350,960,350C800,350,640,350,480,350C320,350,160,350,80,350L0,350Z"
        ></path>
      </svg>

      <div className="w-full flex flex-col justify-center items-center absolute top-1/2 transform -translate-y-1/2 text-center text-white">
        <div>
          <h1 className="font-semibold text-2xl pb-5">
            Science Fiction Stories
          </h1>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <button className="border-sm px-12 py-2 bg-blue-800 rounded-md  text-lg">
            New
          </button>
          <button className="border-sm px-12 py-2 rounded-md bg-yellow-500 text-lg">
            In Progress
          </button>
          <button className="border-sm px-12 py-2 bg-green-400 rounded-md text-lg">
            Completed
          </button>
          <button className="border-sm px-12 py-2 bg-purple-400 rounded-md text-lg"> 
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
