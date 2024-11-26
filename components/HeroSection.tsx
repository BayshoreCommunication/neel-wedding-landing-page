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

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const text = "Hardam Tripathi, Esq.".split(" ");

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      className="bg-heroImage bg-no-repeat bg-cover bg-center flex  flex-col justify-center items-center w-full h-[700px] pt-10"
    >
      <motion.div
        variants={variants}
        className="text-5xl font-poppinsLight text-primary  tracking-[3px] pt-6"
      >
        NEEL
      </motion.div>
      <motion.div
        variants={variants}
        className="text-3xl font-pinyon text-secondary py-6 relative -translate-x-2"
      >
        and
      </motion.div>
      <motion.div
        variants={variants}
        className="text-5xl font-poppinsLight text-primary tracking-[3px]"
      >
        JASIFA
      </motion.div>
      <motion.div
        variants={variants}
        className="text-lg tracking-[1px] pt-8 font-light"
      >
        January 5, 2025
      </motion.div>
      <motion.div variants={variants}>
        <HoverCard>
          <HoverCardTrigger className="flex flex-col justify-center items-center py-3 tracking-[1px]  font-light cursor-pointer hover:text-primary transition-all ease-in-out duration-300">
            <p>Islamic Center of New England Mosque</p>
            <p>(ICNE) at Sharon</p>
          </HoverCardTrigger>
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

      <motion.div variants={variants}>
        <ReservationForm />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
