import React from "react";
import MenuItem from "./MenuItem";
import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <div className="flex bg-primary-electromagnetic  fixed justify-center w-full z-20">
      <div className="flex  justify-center items-center m-10 h-5 space-x-2 md:space-x-20">
        <Link to="page1" smooth={true}>
          <MenuItem name="Home" />
        </Link>
        <Link to="page2" smooth={true}>
          <MenuItem name="About" />
        </Link>

        <Link to="page3" smooth={true}>
          <MenuItem name="Skills" />
        </Link>
        <Link to="page4" smooth={true}>
          <MenuItem name="Projects" />
        </Link>
        <Link to="page5" smooth={true}>
          <MenuItem name="Contact" />
        </Link>

        <div className="flex absolute right-12 top-3 bg-primary-white rounded-3xl h-4 w-4 sm:h-6 sm:w-6"></div>
        <div className="flex absolute right-5 top-3 bg-primary-white rounded-3xl h-4 w-4 sm:h-6 sm:w-6"></div>
      </div>
    </div>
  );
}
