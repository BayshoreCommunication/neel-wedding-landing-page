"use client";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import ReservationForm from "./ReservationForm";
import { motion } from "framer-motion";
import ScrollMotionEffect from "./motion/ScrollMotionEffect";

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-heroImage bg-no-repeat bg-cover bg-center flex  flex-col justify-center items-center w-full h-[700px] pt-10">
      <div className="css-typing text-5xl font-poppinsLight text-primary  tracking-[3px] pt-6 w-fit">
        <p className="text-center line-1 anim-typewriter ">NEEL</p>
      </div>
      <ScrollMotionEffect effect="zoom-in" duration={2000}>
        <div className="text-3xl font-pinyon text-secondary py-6 relative -translate-x-2">
          and
        </div>
      </ScrollMotionEffect>
      <div className="css-typing text-5xl font-poppinsLight text-primary tracking-[3px]">
        <p className="text-center line-1 anim-typewriter">JASIFA</p>
      </div>
      <ScrollMotionEffect effect="fade-up" duration={2000}>
        <div className="text-lg tracking-[1px] pt-8 font-light">
          January 5, 2025
        </div>
      </ScrollMotionEffect>
      <ScrollMotionEffect effect="fade-up" duration={2000}>
        <motion.div variants={variants}>
          <HoverCard>
            <Link
              className="flex flex-col justify-center items-center py-3 tracking-[1px]  font-light cursor-pointer hover:text-primary transition-all ease-in-out duration-300 underline w-[400px] text-center"
              href="https://www.google.com/maps/place/Islamic+Center+of+New+England+Mosque+(ICNE)+at+Sharon/@42.0956517,-71.2026788,14.86z/data=!4m6!3m5!1s0x89e47d63d2fa4c79:0x4e21ab6f5fee1ff2!8m2!3d42.0957079!4d-71.1951754!16zL20vMDdiOGs0?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"
              target="_blank"
            >
              <p>Islamic Center of New England Mosque (ICNE) at Sharon</p>
            </Link>

            <HoverCardContent className="hover:border-primary cursor-pointer hover:text-primary transition-all ease-in-out duration-300 ">
              <Link
                href="https://g.co/kgs/HZQzzx2"
                target="_blank"
                className="font-light text-center"
              >
                https://g.co/kgs/HZQzzx2
              </Link>
            </HoverCardContent>
          </HoverCard>
        </motion.div>
      </ScrollMotionEffect>
      <ScrollMotionEffect effect="fade-up" duration={2000}>
        <ReservationForm />
      </ScrollMotionEffect>
    </section>
  );
};

export default HeroSection;
