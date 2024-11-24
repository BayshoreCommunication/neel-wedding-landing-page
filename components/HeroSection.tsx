import React from "react";
import CountdownTimer from "./Countdown";

const HeroSection = () => {
  return (
    <section className="bg-heroImage bg-no-repeat bg-cover bg-center flex  flex-col justify-center items-center w-full h-[700px] pt-16">
      <div className="text-5xl font-poppinsLight text-primary  tracking-[3px] pt-6">
        NEEL
      </div>
      <div className="text-3xl font-pinyon text-secondary py-6 relative -translate-x-2">
        and
      </div>
      <div className="text-5xl font-poppinsLight text-primary tracking-[3px]">
        JASIFA
      </div>
      <div className="text-lg tracking-[1px] pt-8 font-light">
        January 5, 2025
      </div>
      <div className="flex flex-col justify-center items-center py-3 tracking-[1px]  font-light">
        <p>Islamic Center of New England Mosque</p>
        <p>(ICNE) at Sharon</p>
      </div>
      <div>
        <button className="btn bg-primary border-0 text-white font-light text-lg hover:bg-primary">
          RSVP
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
