"use client";
import React from "react";
import ScrollMotionEffect from "./motion/ScrollMotionEffect";

const Starting = () => {
  return (
    // <ScrollMotionEffect effect="fade-up" duration={5000}>
    <div className="flex flex-col justify-start items-start gap-6 relative translate-y-14 text-nowrap pl-[4rem] ">
      <div className="text-3xl font-pinyon text-secondary ">
        <ScrollMotionEffect effect="fade-up" duration={5000}>
          Day of the Wedding
        </ScrollMotionEffect>
      </div>

      <div className="text-3xl tracking-[4px] uppercase font-light">
        Starting
      </div>
      <div className="text-lg text-secondary">3:30 pm</div>
    </div>
    // </ScrollMotionEffect>
  );
};

export default Starting;
