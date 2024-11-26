import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import ReservationForm from "./ReservationForm";

const HeroSection = () => {
  return (
    <section className="bg-heroImage bg-no-repeat bg-cover bg-center flex  flex-col justify-center items-center w-full h-[700px] pt-10">
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
      <HoverCard>
        <HoverCardTrigger className="flex flex-col justify-center items-center py-3 tracking-[1px]  font-light cursor-pointer hover:text-primary transition-all ease-in-out duration-300">
          <p>Islamic Center of New England Mosque</p>
          <p>(ICNE) at Sharon</p>
        </HoverCardTrigger>
        <HoverCardContent className="hover:border-primary cursor-pointer hover:text-primary transition-all ease-in-out duration-300">
          <Link
            href="https://g.co/kgs/HZQzzx2"
            target="_blank"
            className="font-light"
          >
            https://g.co/kgs/HZQzzx2
          </Link>
        </HoverCardContent>
      </HoverCard>

      <ReservationForm />
    </section>
  );
};

export default HeroSection;
