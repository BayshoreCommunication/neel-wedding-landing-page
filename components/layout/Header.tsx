import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-6 left-0 right-0 z-50 bg-white">
      <nav className="flex justify-between items-center h-16">
        <div className="text-xl font-poppinsLight text-primary font-light">
          NEEL
          <span className="font-pinyon text-secondary">&nbsp;and&nbsp;</span>
          JASIFA
        </div>

        <ul className="flex justify-between items-center gap-10 tracking-[3px]">
          <li>
            <Link href="#our-story">Our Story</Link>
          </li>
          <li>
            <Link href="#party">Wedding Party</Link>
          </li>
          <li>
            <Link href="#schedule">Schedule</Link>
          </li>
          <li>
            <Link href="#info">Information</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
