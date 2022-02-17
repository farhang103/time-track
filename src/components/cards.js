import React from "react";
import ProfileCard from "./profileCard";
import ActivityCard from "./ActivityCard";
import data from "../data/data.json";

const Cards = () => {
  return (
    <div className="font-rubik text-on sm:my-20 lg:grid lg:h-99 lg:w-100 lg:grid-cols-4 lg:grid-rows-2 lg:content-center lg:gap-8">
      <ProfileCard />
      {data.map((activity) => (
        <ActivityCard
          title={activity.title}
          key={activity.title}
          timeframes={activity.timeframes}
        />
      ))}
    </div>
  );
};

export default Cards;
