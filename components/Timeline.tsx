"use client";
import { motion } from "framer-motion";
import { Scroll } from "lucide-react";

import React from "react";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import ScrollMotionEffect from "./motion/ScrollMotionEffect";

const Timeline = () => {
  return (
    <section>
      {/* mobile view */}
      <ul className="timeline timeline-vertical text-primary block md:hidden float-left relative right-[30%] ">
        <li className="h-60">
          <div className="timeline-end ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-start items-start gap-6 relative translate-y-14 text-nowrap pl-[4rem] ">
                <div className="text-3xl font-pinyon text-secondary ">
                  Day of the Wedding
                </div>
                <div className="text-3xl tracking-[4px] uppercase font-light">
                  Starting
                </div>
                <div className="text-lg text-secondary">3:30 pm</div>
              </div>
            </ScrollMotionEffect>
          </div>

          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li className="h-60">
          <hr style={{ width: "2px" }} />
          <div className="timeline-middle bg-white"></div>
          <div className="timeline-end ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-start items-start gap-6 relative translate-y-14 text-nowrap pl-[4rem]">
                <div className="text-3xl font-pinyon text-secondary">
                  Day of the Wedding
                </div>
                <div className="text-3xl tracking-[4px] uppercase font-light">
                  appetizer
                </div>
                <div className="text-lg text-secondary">4:00 pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li className="h-60">
          <hr style={{ width: "2px" }} />
          <div className="timeline-end ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-start items-start gap-6 relative translate-y-20 pl-[4rem]">
                <div className="text-3xl font-pinyon text-secondary text-nowrap">
                  Day of the Wedding
                </div>
                <div className="text-3xl tracking-[4px] uppercase font-light ">
                  Magrib Prayer
                </div>
                <div className="text-lg text-secondary">4:27 pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li className="h-60">
          <hr style={{ width: "2px" }} />
          <div className="timeline-end ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-start items-start gap-6 relative translate-y-20 pl-[4rem]">
                <div className="text-3xl font-pinyon text-secondary text-nowrap ">
                  Day of the Wedding
                </div>
                <div className="text-3xl tracking-[4px] uppercase font-light">
                  Nikkah Ceremony
                </div>
                <div className="text-lg text-secondary">5:00pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li className="h-60">
          <hr style={{ width: "2px" }} />
          <div className="timeline-end ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-start items-start gap-6 relative translate-y-20 pl-[4rem]">
                <div className="text-3xl font-pinyon text-secondary text-nowrap ">
                  Day of the Wedding
                </div>
                <div className="text-3xl tracking-[4px] uppercase font-light">
                  Dinner & pictures
                </div>
                <div className="text-lg text-secondary">6:00pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li className="h-60">
          <hr style={{ width: "2px" }} />
          <div className="timeline-end ">
            {" "}
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-start items-start gap-6 relative translate-y-14 text-nowrap pl-[4rem]">
                <div className="text-3xl font-pinyon text-secondary">
                  Day of the Wedding
                </div>
                <div className="text-3xl tracking-[4px] uppercase font-light">
                  isha prayer
                </div>
                <div className="text-lg text-secondary">8:00pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li className="h-60">
          <hr style={{ width: "2px" }} />
          <div className="timeline-end ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-start items-start gap-6 relative translate-y-24  pl-[4rem]">
                <div className="text-3xl font-pinyon text-secondary text-nowrap">
                  Day of the Wedding
                </div>
                <div className="text-3xl tracking-[4px] uppercase font-light">
                  dessert & cake cutting
                </div>
                <div className="text-lg text-secondary">9:00pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li className="h-60">
          <hr style={{ width: "2px" }} />
          <div className="timeline-end ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-start items-start gap-6 relative translate-y-14  pl-[4rem]">
                <div className="text-3xl font-pinyon text-secondary text-nowrap">
                  Day of the Wedding
                </div>
                <div className="text-3xl tracking-[4px] uppercase font-light">
                  bidaai
                </div>
                <div className="text-lg text-secondary">10:00pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
      </ul>
      {/* Desktop view */}
      <ul className="timeline timeline-vertical text-primary hidden md:block">
        <li>
          <div className="timeline-start ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-start items-end gap-6 relative translate-y-14 pr-10">
                <div className="text-3xl font-pinyon text-secondary">
                  Day of the Wedding
                </div>
                <div className="text-4xl tracking-[4px] uppercase font-light">
                  Starting
                </div>
                <div className="text-lg text-secondary">3:30 pm</div>
              </div>{" "}
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li>
          <hr style={{ width: "2px" }} />
          <div className="timeline-middle bg-white"></div>
          <div className="timeline-end ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-center items-start  gap-6 relative translate-y-14 pl-10">
                <div className="text-3xl font-pinyon text-secondary">
                  Day of the Wedding
                </div>
                <div className="text-4xl tracking-[4px] uppercase font-light">
                  appetizer
                </div>
                <div className="text-lg text-secondary">4:00 pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li>
          <hr style={{ width: "2px" }} />
          <div className="timeline-start ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-start items-end gap-6 relative translate-y-14 pr-10">
                <div className="text-3xl font-pinyon text-secondary">
                  Day of the Wedding
                </div>
                <div className="text-4xl tracking-[4px] uppercase font-light text-right">
                  Magrib Prayer
                </div>
                <div className="text-lg text-secondary">4:27 pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li>
          <hr style={{ width: "2px" }} />
          <div className="timeline-end ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-center items-start  gap-6 relative translate-y-14 pl-10">
                <div className="text-3xl font-pinyon text-secondary">
                  Day of the Wedding
                </div>
                <div className="text-4xl tracking-[4px] uppercase font-light">
                  Nikkah Ceremony
                </div>
                <div className="text-lg text-secondary">5:00pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li>
          <hr style={{ width: "2px" }} />
          <div className="timeline-start ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-start items-end gap-6 relative translate-y-14 pr-10">
                <div className="text-3xl font-pinyon text-secondary">
                  Day of the Wedding
                </div>
                <div className="text-4xl tracking-[4px] uppercase font-light text-right">
                  Dinner & pictures
                </div>
                <div className="text-lg text-secondary">6:00pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li>
          <hr style={{ width: "2px" }} />
          <div className="timeline-end ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-center items-start  gap-6 relative translate-y-14 pl-10">
                <div className="text-3xl font-pinyon text-secondary">
                  Day of the Wedding
                </div>
                <div className="text-4xl tracking-[4px] uppercase font-light">
                  isha prayer
                </div>
                <div className="text-lg text-secondary">8:00pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li>
          <hr style={{ width: "2px" }} />
          <div className="timeline-start ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-start items-end gap-6 relative translate-y-14 pr-10">
                <div className="text-3xl font-pinyon text-secondary">
                  Day of the Wedding
                </div>
                <div className="text-4xl tracking-[4px] uppercase font-light text-right">
                  dessert & cake cutting
                </div>
                <div className="text-lg text-secondary">9:00pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li>
          <hr style={{ width: "2px" }} />
          <div className="timeline-end ">
            <ScrollMotionEffect effect="zoom-in" duration={2000}>
              <div className="flex flex-col justify-center items-start  gap-6 relative translate-y-14 pl-10">
                <div className="text-3xl font-pinyon text-secondary">
                  Day of the Wedding
                </div>
                <div className="text-4xl tracking-[4px] uppercase font-light">
                  bidaai
                </div>
                <div className="text-lg text-secondary">10:00pm</div>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className="timeline-middle  rounded-full border-[2px] border-primary">
            <FaCircle
              className="w-2 h-2 bg-white rounded-full"
              fill="#ffffff"
            />
          </div>
          <hr style={{ width: "2px" }} />
        </li>
        <li>
          <hr style={{ width: "2px" }} />
          <div className="timeline-end ">
            <div className="flex flex-col justify-center items-start  gap-6 relative translate-y-14 pl-10">
              <div className="text-3xl font-pinyon text-secondary"></div>
              <div className="text-4xl tracking-[4px] uppercase font-light"></div>
              <div className="text-lg text-secondary"></div>
            </div>
          </div>
          <div className="timeline-middle  "></div>
          <hr style={{ width: "2px" }} />
        </li>
      </ul>
    </section>
  );
};

export default Timeline;
