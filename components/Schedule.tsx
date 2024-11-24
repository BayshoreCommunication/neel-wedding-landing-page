import React from "react";
import Timeline from "./Timeline";

const Schedule = () => {
  return (
    <div
      id="schedule"
      className=" flex flex-col justify-center items-center gap-8 pt-5"
    >
      <div className="pt-20 text-5xl font-normal tracking-widest text-primary">
        SCHEDULE
      </div>
      <Timeline />
    </div>
  );
};

export default Schedule;
