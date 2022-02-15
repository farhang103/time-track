import React from "react";
import ProfileCard from "./profileCard";
import ActivityCard from "./ActivityCard";
import data from "../data/data.json";

const Cards = () => {
  return (
    <div className="font-rubik text-on lg:w-100 lg:h-99 sm:my-20 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:content-center lg:gap-8">
      <ProfileCard />
      {data.map((act) => (
        <ActivityCard
          title={act.title}
          key={act.title}
          timeframes={act.timeframes}
        />
      ))}
    </div>
  );
};

export default Cards;
