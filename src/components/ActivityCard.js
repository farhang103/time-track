import React, { useContext, useState } from "react";
import threeDot from "../assets/icon-ellipsis.svg";
import work from "../assets/icon-work.svg";
import play from "../assets/icon-play.svg";
import study from "../assets/icon-study.svg";
import exercise from "../assets/icon-exercise.svg";
import social from "../assets/icon-social.svg";
import health from "../assets/icon-self-care.svg";
import { UserContext } from "../userContext";

const ActivityCard = ({ title, timeframes }) => {
  const { value, setValue } = useContext(UserContext);
  console.log(value);
  const background = (title) => {
    switch (title) {
      case "Work":
        return "bg-work rounded-2xl";
      case "Play":
        return "bg-play rounded-2xl";
      case "Study":
        return "bg-book rounded-2xl";
      case "Exercise":
        return "bg-gym rounded-2xl";
      case "Social":
        return "bg-chat rounded-2xl";
      case "Self Care":
        return "bg-health rounded-2xl";

      default:
        break;
    }
  };

  const imageAcitivity = (title) => {
    switch (title) {
      case "Work":
        return work;
      case "Play":
        return play;
      case "Study":
        return study;
      case "Exercise":
        return exercise;
      case "Social":
        return social;
      case "Self Care":
        return health;

      default:
        break;
    }
  };

  return (
    <div className={background(title)} key={title}>
      <div className="w-79 relative mb-6 h-40 overflow-hidden rounded-2xl lg:h-full lg:w-full">
        <div className="absolute right-4 -top-2.5 flex w-full justify-end lg:-top-1 lg:right-5">
          <img src={imageAcitivity(title)} alt="" />
        </div>
        <div className="bg-card h-29 absolute bottom-0 z-10 flex w-full items-center justify-center rounded-2xl lg:h-52">
          <div className="w-65 lg:w-51 lg:h-34 relative h-14">
            <p className="absolute top-0 left-0 text-sm font-medium lg:top-0 lg:left-0 lg:text-lg ">
              {title}
            </p>
            <p className="absolute left-0 -bottom-1.5 text-2xl font-light lg:bottom-10 lg:left-0.5 lg:text-5xl">
              {timeframes.value.current}hrs
            </p>
            <img
              className="absolute right-0 top-1.5 h-1 lg:h-1.5 lg:w-5"
              src={threeDot}
              alt=""
            />
            <p className="text-date absolute right-0 bottom-1 text-xs lg:bottom-0 lg:left-0 lg:text-base">
              Last Week - {timeframes.value.previous}hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
