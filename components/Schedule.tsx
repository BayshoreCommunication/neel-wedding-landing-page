import React from "react";
import Timeline from "./Timeline";
import ScrollMotionEffect from "./motion/ScrollMotionEffect";

const Schedule = () => {
  return (
    <div
      id="schedule"
      className=" flex flex-col justify-center items-center gap-8 pt-5"
    >
      <ScrollMotionEffect effect="flip-left" duration={2000}>
        <div className="pt-20 text-5xl font-normal tracking-widest text-primary">
          SCHEDULE
        </div>
      </ScrollMotionEffect>
      {/* <ScrollMotionEffect effect="fade-in" duration={2000}> */}
      <Timeline />
      {/* </ScrollMotionEffect> */}
    </div>
  );
};

export default Schedule;
