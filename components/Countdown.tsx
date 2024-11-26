"use client";

import React, { useState, useEffect } from "react";
import ScrollMotionEffect from "./motion/ScrollMotionEffect";

const CountdownTimer = () => {
  const eventDate = "Jan 5, 2025";
  const countdownStarted = true;
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (countdownStarted && eventDate) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
          alert("Countdown complete!");
        }

        setTimeRemaining(remainingTime);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [countdownStarted, eventDate, timeRemaining]);

  const formatDate = (date: string) => {
    // const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (time: any) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <div className="countdown-display flex justify-center items-center gap-4 text-5xl">
        <div className="countdown-value flex justify-center items-center flex-col">
          <ScrollMotionEffect effect="flip-up" duration={2000}>
            <button className="btn w-14 h-16 bg-primary border-0 text-white font-light  hover:bg-primary text-xl cursor-default">
              {days.toString().padStart(2, "0")}
            </button>
          </ScrollMotionEffect>
          <span className="text-sm">Days</span>
        </div>
        <div className="countdown-value flex justify-center items-center flex-col">
          <ScrollMotionEffect effect="flip-up" duration={2000}>
            <button className="btn w-14 h-16  bg-primary border-0 text-white font-light  hover:bg-primary text-xl cursor-default">
              {hours.toString().padStart(2, "0")}
            </button>
          </ScrollMotionEffect>
          <span className="text-sm">Hours</span>
        </div>
        <div className="countdown-value flex justify-center items-center flex-col">
          <ScrollMotionEffect effect="flip-up" duration={2000}>
            <button className="btn w-14 h-16  bg-primary border-0 text-white font-light  hover:bg-primary text-xl cursor-default">
              {minutes.toString().padStart(2, "0")}
            </button>
          </ScrollMotionEffect>
          <span className="text-sm">Minutes</span>
        </div>
        <div className="countdown-value flex justify-center items-center flex-col">
          <ScrollMotionEffect effect="flip-up" duration={2000}>
            <button className="btn w-14 h-16  bg-primary border-0 text-white font-light  hover:bg-primary text-xl cursor-default">
              {seconds.toString().padStart(2, "0")}
            </button>
          </ScrollMotionEffect>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="countdown-timer-container flex flex-col justify-center items-center gap-4 relative -top-10 w-full">
      <ScrollMotionEffect effect="fade-up" duration={2000}>
        <h2 className="countdown-name font-semibold text-2xl">COUNTDOWN</h2>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration={2000}>
        <h2 className="countdown-name font-semibold text-2xl">
          <div className=" ">{formatTime(timeRemaining)}</div>
        </h2>
        <div className="flex justify-center py-5">
          <div className="bg-primary w-28 h-0.5"></div>
        </div>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration={2000}>
        <div className="text-poppinsRegular text-lg text-center px-1 md:w-[636px] ">
          Welcome your guests to your website! A welcome message is great for
          building excitement for your day, but also to help them navigate their
          way around your wedding website. We also recommend signing off with a
          heartfelt thank you and prompt them to RSVP!
        </div>
        <div className="flex justify-center py-5">
          <div className="bg-primary w-28 h-0.5"></div>
        </div>
      </ScrollMotionEffect>
    </div>
  );
};

export default CountdownTimer;
