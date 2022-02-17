import { NavLink } from "react-router-dom";
import img from "../assets/image-jeremy.png";

const ProfileCard = () => {
  return (
    <div className="mb-6 h-51 rounded-2xl bg-card lg:row-span-2 lg:h-full ">
      <div className="flex h-33 w-full items-center justify-center rounded-2xl bg-profile lg:relative lg:h-95">
        <div className="top-9 left-8 h-19 w-19 rounded-full border-3 border-white lg:absolute lg:h-23 lg:w-22">
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
        <NavLink
          to="/daily"
          className={({ isActive }) => (isActive ? "text-on" : "text-off")}
        >
          Daily
        </NavLink>
        <NavLink
          to="/weekly"
          className={({ isActive }) => (isActive ? "text-on" : "text-off")}
        >
          Weekly
        </NavLink>
        <NavLink
          to="/monthly"
          className={({ isActive }) => (isActive ? "text-on" : "text-off")}
        >
          Monthly
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileCard;
