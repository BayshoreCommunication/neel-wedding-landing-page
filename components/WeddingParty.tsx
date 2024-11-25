import React from "react";
import cardData from "../config/cardData";
import Image from "next/image";
const WeddingParty = () => {
  return (
    <section className="grid grid-cols-2 auto-cols-max content-center">
      {cardData.map((card) => (
        <div
          className="flex flex-col justify-center items-center gap-2 pt-5"
          key={card.id}
        >
          <div>
            <Image src={card.image} alt={card.name} width={100} height={100} />
          </div>
          <div className="text-3xl font-poppinsLight text-primary tracking-[3px]">
            {card.title}
          </div>
          <div className="text-2xl font-poppinsLight text-primary tracking-[3px]">
            {card.name}
          </div>
          <div className="text-lg font-poppinsLight text-primary tracking-[3px]">
            {card.description}
          </div>
        </div>
      ))}
    </section>
  );
};

export default WeddingParty;
