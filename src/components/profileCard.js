import React, { useState, useContext } from "react";
import img from "../assets/image-jeremy.png";
import { UserContext } from "../userContext";

const ProfileCard = () => {
  const [time, setTime] = useState();
  const { value, setValue } = useContext(UserContext);

  const handleDate = (date) => {
    switch (date) {
      case "day":
        setValue(date);
        console.log(value);
        break;
      case "week":
        return "weekly";
      case "month":
        return "monthly";

      default:
        break;
    }
  };

  // console.log(handleDaily());
  return (
    <div className="bg-card h-51 mb-6 rounded-2xl lg:row-span-2 lg:h-full ">
      <div className="bg-profile h-33 lg:h-95 flex w-full items-center justify-center rounded-2xl lg:relative">
        <div className="w-19 h-19 lg:h-23 lg:w-22 border-3 top-9 left-8 rounded-full border-white lg:absolute">
          <img src={img} alt="img" />
        </div>
        <div className=" left-3 sm:mr-7 sm:ml-5 lg:absolute lg:mt-5 ">
          <p className="text-sm font-light text-white text-opacity-70 lg:mt-11 lg:text-base">
            Report for
          </p>
          <p className=" text-xl font-light text-white lg:mt-2 lg:w-5 lg:text-4xl ">
            Jeremy Robson
          </p>
        </div>
      </div>
      <div className=" flex h-1/3 w-full items-center justify-evenly text-base lg:ml-9 lg:flex-col lg:items-start">
        <p
          onClick={() => handleDate("day")}
          className="text-off focus:text-on active:text-on hover:text-on cursor-pointer"
        >
          Daily
        </p>
        <p
          onClick={() => handleDate("week")}
          className="text-off focus:text-on active:text-on hover:text-on cursor-pointer"
        >
          Weekly
        </p>
        <p
          onClick={() => handleDate("month")}
          className="text-off focus:text-on active:text-on hover:text-on cursor-pointer"
        >
          Monthly
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
