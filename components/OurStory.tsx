import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div
      id="our-story"
      className=" flex flex-col justify-center items-center gap-8 "
    >
      <div className="pt-24 flex justify-center items-center gap-16 w-full">
        <Image src={"/neel.png"} alt="neel" width={516} height={691} />
        <Image src="/jasifa.png" alt="jasifa" width={516} height={691} />
      </div>
      <div className="pt-10 text-5xl font-normal tracking-widest text-primary">
        OUR STORY
      </div>
      <div className="pt-12 text-4xl font-light tracking-widest text-primary">
        HOW WE MET
      </div>
      <div className="whitespace-pre-line text-center text-lg">{`We met on Salams, where a conversation about penguins in South Africa sparked an unexpected
      connection. What started as lighthearted chatter quickly turned into endless conversations about
      everything from food to geopolitics, tech, and urban planning. It felt like we could talk for hours
      without ever wanting to stop, and every moment together seemed meant to be.`}</div>
      <div className="whitespace-pre-line text-center text-lg">{`As we spent more time together, it became clear that what we had was something special. Neel
      knew, just days after returning from Boston, that he was going to marry Jasifa. For Jasifa, it was in
      the midst of Hurricane Milton while flying back to Boston from Tampa that she realized she was
      already in love with Neel and couldn't imagine her life without him.`}</div>
      <div className="whitespace-pre-line text-center text-lg">{`Now, here we are, stronger than ever, with penguins that mate for life as the symbol of our own
      journey, taking the next step to commit to each other forever.`}</div>
    </div>
  );
};

export default OurStory;
