"use client";

import React, { useState, useEffect } from "react";
import ScrollMotionEffect from "./motion/ScrollMotionEffect";

const CountdownTimer = () => {
  const eventDate = "Jan 5, 2025 15:30:00";
  const countdownStarted = true;
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (countdownStarted && eventDate) {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().toLocaleString("en-US", {
          timeZone: "America/New_York",
        });

        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - new Date(currentTime).getTime();
        console.log(remainingTime);

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
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
            <button className="btn w-14 h-16 bg-primary border-0 text-white font-light  hover:bg-primary text-xl cursor-default ">
              <p className=" fade-in-down">
                {days.toString().padStart(2, "0")}
              </p>
            </button>
          </ScrollMotionEffect>
          <span className="text-sm text-secondary">Days</span>
        </div>
        <div className="countdown-value flex justify-center items-center flex-col">
          <ScrollMotionEffect effect="flip-up" duration={2000}>
            <button className="btn w-14 h-16  bg-primary border-0 text-white font-light  hover:bg-primary text-xl cursor-default">
              <p className=" fade-in-up">{hours.toString().padStart(2, "0")}</p>
            </button>
          </ScrollMotionEffect>
          <span className="text-sm text-secondary">Hours</span>
        </div>
        <div className="countdown-value flex justify-center items-center flex-col">
          <ScrollMotionEffect effect="flip-up" duration={2000}>
            <button className="btn w-14 h-16  bg-primary border-0 text-white font-light  hover:bg-primary text-xl cursor-default">
              <p className=" fade-in-down">
                {minutes.toString().padStart(2, "0")}
              </p>
            </button>
          </ScrollMotionEffect>
          <span className="text-sm text-secondary">Minutes</span>
        </div>
        <div className="countdown-value flex justify-center items-center flex-col">
          <ScrollMotionEffect effect="flip-up" duration={2000}>
            <button className="btn w-14 h-16  bg-primary border-0 text-white font-light  hover:bg-primary text-xl cursor-default">
              <p className=" fade-in-down">
                {seconds.toString().padStart(2, "0")}
              </p>
            </button>
          </ScrollMotionEffect>
          <span className="text-sm text-secondary">Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="countdown-timer-container flex flex-col justify-center items-center gap-4 relative -top-10 w-full">
      <ScrollMotionEffect effect="fade-up" duration={2000}>
        <h2 className="countdown-name font-semibold text-2xl text-secondary tracking-tight">
          COUNTDOWN
        </h2>
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
        <div className="text-poppinsRegular text-lg text-center px-1 md:w-[636px] text-secondary">
          <p className="py-2">{`Welcome to Neel and Jasifa’s Wedding Website!`}</p>

          <p className="py-2">{`We are beyond excited to have you with us as we celebrate the love we've found in each other and the incredible blessing of having family and friends like you by our side. This website is your one-stop shop for all the details you’ll need to join us in making this day unforgettable—from the wedding schedule to RSVP instructions. `}</p>

          <p className="py-2">
            {`We are so grateful for the support, joy, and memories you bring into our lives. Your presence means the world to us, and we can’t wait to celebrate this special chapter with you.`}
          </p>

          <p className="py-2">
            {`Thank you for being part of our journey. We can’t wait to share this beautiful moment with you!`}
          </p>
        </div>
        <div className="flex justify-center py-5">
          <div className="bg-primary w-28 h-0.5"></div>
        </div>
      </ScrollMotionEffect>
    </div>
  );
};

export default CountdownTimer;
