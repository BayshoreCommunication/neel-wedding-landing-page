"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { IoMenu } from "react-icons/io5";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const story = useRef(null);
  const party = useRef(null);
  const schedule = useRef(null);
  const info = useRef(null);

  return (
    <header className="sticky top-6 left-0 right-0 z-50 bg-white  rounded-lg">
      <nav className="flex justify-between items-center h-16 px-2">
        <div className="text-xl font-poppinsLight text-primary font-light">
          NEEL
          <span className="font-pinyon text-secondary">&nbsp;and&nbsp;</span>
          JASIFA
        </div>

        <ul className=" justify-between items-center gap-10 tracking-[3px] hidden lg:flex text-secondary">
          <li>
            <Link
              href=""
              className="hover:text-primary transition-all  ease-in-out duration-300"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector("#our-story");

                section?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Our Story
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="hover:text-primary transition-all  ease-in-out duration-300"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector("#party");
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Wedding Party
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="hover:text-primary transition-all  ease-in-out duration-300"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector("#schedule");
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="hover:text-primary transition-all  ease-in-out duration-300"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector("#info");
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Information
            </Link>
          </li>
        </ul>
        {/* <Menubar className="lg:hidden border-primary border-[2px] bg-white">
          <MenubarMenu>
            <MenubarTrigger>
              <IoMenu className="w-5 h-5 text-primary" />
            </MenubarTrigger>
            <MenubarContent className="mr-[1rem] md:mr-[2rem] mt-1.5">
              <Link
                href="#our-story"
                scroll={true}
                target="_self"
                className="w-full text-center text-primary font-poppinsRegular tracking-[2px]"
              >
                <MenubarItem className="justify-center">Our Story</MenubarItem>
              </Link>

              <MenubarSeparator />

              <Link
                href="#party"
                scroll={true}
                target="_self"
                className="w-full text-center text-primary font-poppinsRegular tracking-[2px]"
              >
                <MenubarItem className="justify-center">
                  Wedding Party
                </MenubarItem>
              </Link>

              <MenubarSeparator />
              <Link
                href="#schedule"
                scroll={true}
                target="_self"
                className="w-full text-center text-primary font-poppinsRegular tracking-[2px]"
              >
                <MenubarItem className="justify-center">Schedule</MenubarItem>
              </Link>
              <MenubarSeparator />

              <Link
                href="#info"
                scroll={true}
                target="_self"
                className="w-full text-center text-primary font-poppinsRegular tracking-[2px]"
              >
                <MenubarItem className="justify-center">
                  Information
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar> */}
        <div className="lg:hidden">
          <Button
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(!isMenuOpen);
            }}
            className={cn(
              "bg-white border-2 border-primary px-3 hover:bg-gray-100"
            )}
          >
            {!isMenuOpen ? (
              <IoMenu className="w-5 h-5 text-primary" />
            ) : (
              <RxCross2 className="w-5 h-5 text-primary" />
            )}
          </Button>
        </div>
        <div
          id="myNav"
          className={cn(
            " overlay ",
            isMenuOpen ? "mr-[1rem] md:mr-[2rem] w-[80%] rounded-t-lg" : "w-0"
          )}
        >
          <div className="overlay-content text-primary">
            <Button
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="text-2xl w-full h-fit p-5  bg-transparent text-primary hover:bg-primary hover:text-white font-light tracking-[3px] transition-all  ease-in-out duration-300"
            >
              <Link
                href="#our-story"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector("#our-story");
                  section?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Our Story
              </Link>
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="text-2xl w-full h-fit p-5  bg-transparent text-primary hover:bg-primary hover:text-white font-light tracking-[3px] transition-all  ease-in-out duration-300"
            >
              <Link
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector("#party");
                  section?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Wedding Party
              </Link>
            </Button>

            <Button
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="text-2xl w-full h-fit p-5  bg-transparent text-primary hover:bg-primary hover:text-white font-light tracking-[3px] transition-all  ease-in-out duration-300"
            >
              <Link
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector("#schedule");
                  section?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Schedule
              </Link>
            </Button>

            <Button
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="text-2xl w-full h-fit p-5  bg-transparent text-primary hover:bg-primary hover:text-white font-light tracking-[3px] transition-all  ease-in-out duration-300"
            >
              <Link
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector("#info");
                  section?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Information
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
