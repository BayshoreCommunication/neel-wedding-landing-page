import Link from "next/link";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      id="info"
      className="bg-footerImage bg-center bg-cover h-[1080px] flex flex-col justify-start items-center pt-36 text-primary gap-24"
    >
      <div className="text-5xl font-poppinsLight text-primary tracking-[6px]">
        INFORMATION
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div>
          <p className="text-4xl text-center uppercase tracking-[3px] font-light pb-8">
            Uber/Lyft
          </p>
          <p className="text-lg text-center text-secondary md:w-[515px]">
            You can Uber or Lyft to the mosque, should cost between $30.00-50.00
          </p>
        </div>
        <div className="text-center">
          <p className="text-4xl text-center uppercase tracking-[3px] font-light pb-8 underline">
            Hotels
          </p>
          <p className="text-lg text-center text-secondary md:w-[515px] pb-6">
            Here are some recommended hotels around the Greater Boston area:
          </p>
          <Dialog>
            <DialogTrigger className="btn bg-primary border-0 text-white font-light text-lg hover:bg-primary">
              SEE MORE
            </DialogTrigger>
            <DialogContent className="">
              <div className="grid gap-8 py-4">
                <div className=" flex flex-col justify-center items-center text-primary gap-2">
                  <div className="tooltip font-light text-2xl relative ">
                    Hampton Inn Boston Logan Airport
                  </div>

                  <Link
                    href="https://www.booking.com/hotel/us/hampton-inn-logan-air.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaJgCiAECmAExuAEHyAEN2AEB6AEB-AECiAIBqAIDuALVzP65BsACAdICJDQ2YTcwMDEwLTdhOTAtNDVkNy1iNjE4LTEzZTIxNTVkYzY0ZdgCBeACAQ&sid=c5fab9727a42f87f6865fca69901e3ee&all_sr_blocks=2870612_95152673_2_1_0&checkin=2025-01-04&checkout=2025-01-06&dest_id=20061717&dest_type=city&group_adults=2&group_children=0&hapos=1&highlighted_blocks=2870612_95152673_2_1_0&hpos=1&matching_block_id=2870612_95152673_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=2870612_95152673_2_1_0__23630&srepoch=1732224621&srpvid=3a599735a1b402e1&type=total&ucfs=1&"
                    target="_blank"
                    className="hover:underline hover:text-primary text-secondary"
                  >
                    Click Here
                  </Link>
                </div>
                <div className=" flex flex-col justify-center items-center text-primary gap-2">
                  <div className="tooltip font-light text-2xl relative ">
                    Omni Boston Hotel at the Seaport
                  </div>

                  <Link
                    href="https://www.booking.com/hotel/us/omni-boston-at-the-seaport.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaJgCiAECmAExuAEHyAEN2AEB6AEB-AECiAIBqAIDuALVzP65BsACAdICJDQ2YTcwMDEwLTdhOTAtNDVkNy1iNjE4LTEzZTIxNTVkYzY0ZdgCBeACAQ&sid=c5fab9727a42f87f6865fca69901e3ee&all_sr_blocks=677275524_362071301_2_42_0&checkin=2025-01-04&checkout=2025-01-06&dest_id=20061717&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=10&highlighted_blocks=677275524_362071301_2_42_0&hpos=10&keep_landing=1&matching_block_id=677275524_362071301_2_42_0&no_rooms=1&req_adults=2&req_children=0&sb_price_type=total&sr_order=popularity&sr_pri_blocks=677275524_362071301_2_42_0__27160&srepoch=1732224659&srpvid=229b97437d6a016a&type=total&ucfs=1&"
                    target="_blank"
                    className="hover:underline hover:text-primary text-secondary"
                  >
                    Click Here
                  </Link>
                </div>
                <div className=" flex flex-col justify-center items-center text-primary gap-2">
                  <div className="tooltip font-light text-2xl relative ">
                    DoubleTree Suites by Hilton Hotel Boston - Cambridge
                  </div>

                  <Link
                    href="https://www.booking.com/hotel/us/doubletree-guest-suites-boston.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaJgCiAECmAExuAEHyAEN2AEB6AEB-AECiAIBqAIDuALVzP65BsACAdICJDQ2YTcwMDEwLTdhOTAtNDVkNy1iNjE4LTEzZTIxNTVkYzY0ZdgCBeACAQ&sid=c5fab9727a42f87f6865fca69901e3ee&all_sr_blocks=2876522_402989808_2_2_0&checkin=2025-01-04&checkout=2025-01-06&dest_id=20061717&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=19&highlighted_blocks=2876522_402989808_2_2_0&hpos=19&keep_landing=1&matching_block_id=2876522_402989808_2_2_0&no_rooms=1&req_adults=2&req_children=0&sb_price_type=total&sr_order=popularity&sr_pri_blocks=2876522_402989808_2_2_0__27030&srepoch=1732224698&srpvid=dae6975abbe806e4&type=total&ucfs=1&"
                    target="_blank"
                    className="hover:underline hover:text-primary text-secondary"
                  >
                    Click Here
                  </Link>
                </div>
                <div className=" flex flex-col justify-center items-center text-primary gap-2">
                  <div className="tooltip font-light text-2xl relative ">
                    Pennyweight Hotel Boston, Curio Collection by Hilton
                  </div>

                  <Link
                    href="https://www.booking.com/hotel/us/kimpton-onyx-hotel.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaJgCiAECmAExuAEHyAEN2AEB6AEB-AECiAIBqAIDuALVzP65BsACAdICJDQ2YTcwMDEwLTdhOTAtNDVkNy1iNjE4LTEzZTIxNTVkYzY0ZdgCBeACAQ&sid=c5fab9727a42f87f6865fca69901e3ee&all_sr_blocks=7586919_94289318_2_34_0&checkin=2025-01-04&checkout=2025-01-06&dest_id=20061717&dest_type=city&group_adults=2&group_children=0&hapos=5&highlighted_blocks=7586919_94289318_2_34_0&hpos=5&matching_block_id=7586919_94289318_2_34_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=7586919_94289318_2_34_0__20703&srepoch=1732224772&srpvid=f081977fc30f03dd&type=total&ucfs=1&"
                    target="_blank"
                    className="hover:underline hover:text-primary text-secondary"
                  >
                    Click Here
                  </Link>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="text-center">
          <p className="text-4xl text-center uppercase tracking-[3px] font-light pb-8 underline">
            Restaurants
          </p>
          <p className="text-lg text-center text-secondary md:w-[515px] pb-6">
            Here are some recommended restaurents around the Greater Boston
            area:
          </p>
          <Dialog>
            <DialogTrigger className="btn bg-primary border-0 text-white font-light text-lg hover:bg-primary">
              SEE MORE
            </DialogTrigger>
            <DialogContent className="">
              <div className="grid gap-8 py-8">
                <div className=" flex flex-col justify-center items-center text-primary gap-2">
                  <Link
                    href="https://www.bostonmagazine.com/best-restaurants-in-boston/"
                    target="_blank"
                    className="hover:underline hover:text-primary text-secondary text-center px-4"
                  >
                    https://www.bostonmagazine.com/best-restaurants-in-boston/
                  </Link>
                </div>
                <div className=" flex flex-col justify-center items-center text-primary gap-2">
                  <Link
                    href="https://boston.eater.com/maps/best-restaurants-boston-38"
                    target="_blank"
                    className="hover:underline hover:text-primary text-secondary text-center px-4"
                  >
                    https://boston.eater.com/maps/best-restaurants-boston-38
                  </Link>
                </div>
                <div className=" flex flex-col justify-center items-center text-primary gap-2">
                  <Link
                    href="https://boston.eater.com/maps/best-halal-restaurants-boston"
                    target="_blank"
                    className="hover:underline hover:text-primary text-secondary text-center px-4"
                  >
                    https://boston.eater.com/maps/best-halal-restaurants-boston
                  </Link>
                </div>
                <div className=" flex flex-col justify-center items-center text-primary gap-2">
                  <Link
                    href="https://college.harvard.edu/student-life/student-stories/6-halal-food-places-boston-cambridge-area"
                    target="_blank"
                    className="hover:underline hover:text-primary text-secondary text-center px-4"
                  >
                    https://college.harvard.edu/student-life/student-stories/6-halal-food-places-boston-cambridge-area
                  </Link>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
