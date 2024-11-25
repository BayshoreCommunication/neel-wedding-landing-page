import Link from "next/link";
import React from "react";

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
          <Link href={""} target="_blank">
            <button className="btn bg-primary border-0 text-white font-light  hover:bg-primary text-lg cursor-default">
              SEE MORE
            </button>
          </Link>
        </div>
        <div className="text-center">
          <p className="text-4xl text-center uppercase tracking-[3px] font-light pb-8 underline">
            Restaurants
          </p>
          <p className="text-lg text-center text-secondary md:w-[515px] pb-6">
            Here are some recommended restaurents around the Greater Boston
            area:
          </p>
          <Link href={""} target="_blank">
            <button className="btn text-center bg-primary border-0 text-white font-light  hover:bg-primary text-lg cursor-default">
              SEE MORE
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
