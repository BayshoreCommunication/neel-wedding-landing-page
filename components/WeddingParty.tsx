import React from "react";
import cardData from "../config/cardData";
import Image from "next/image";
const WeddingParty = () => {
  return (
    <section
      id="party"
      className=" grid grid-cols-1 xl:grid-cols-2 auto-cols-max pt-36 gap-x-10 2xl:gap-x-40 gap-y-20"
    >
      <div className="col-span-1 xl:col-span-2 text-5xl font-poppinsRegular text-center text-primary tracking-[3px]">
        WEDDING PARTY
      </div>
      {cardData.map((card) => (
        <div
          className="flex flex-col items-center gap-2 pt-5 md:w-2/3 lg:w-[535px]"
          key={card.id}
        >
          <div>
            <Image
              src={card.image}
              alt={card.name}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="text-3xl font-pinyon text-secondary text-center">
            {card.title}
          </div>
          <div className="text-4xl font-poppinsLight text-primary font-light tracking-[3px] py-4 text-center">
            {card.name}
          </div>
          <div className="text-lg font-poppinsLight text-secondary  text-center pt-4">
            {card.description}
          </div>
        </div>
      ))}
    </section>
  );
};

export default WeddingParty;
