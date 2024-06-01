import React,{useState,useEffect} from "react";
import logo from "../assets/images/card1.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const StoryCards = () => {
  
  const [data, setData] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch(" https://child.onrender.com/api/sciencefiction");
    const data = await response.json();
    console.log(data)
    return data;
  };
  useEffect(() => {
    const getUsers = async () => {
      const usersFromAPI = await fetchUsers();
      setData(usersFromAPI);
    };
    getUsers();
  }, []);
  const arr = new Array(10).fill(null);
  return (
    <div className="w-full p-10 flex flex-wrap gap-4 justify-center items-center">
      {data.slice(0,10).map((items, index) => (
        <div
          className="w-[250px] h-[300px] bg-slate-500 mygradient flex flex-col justify-center p-2 rounded-md"
          key={index}
        >
          { <img
            src={items.Image[0]}
            alt={logo}
            className="w-[240px] h-[77%] pt-2 object-cover "
          /> }
          
          <div className="text-center">
            <h1>{items.Title}</h1>
            <button className="w-full border-sm px-6 py-1 bg-white rounded-md mt-2">
              {items.Status}
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between w-full px-16 text-white">
        <div>
          <button className=" button-85 flex">
            <FaArrowLeft className="mt-1 mr-2" />
            Previous
          </button>
        </div>
        <div>
          <button className="button-85 flex">
            Next <FaArrowRight className="mt-[.3rem] ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryCards;
