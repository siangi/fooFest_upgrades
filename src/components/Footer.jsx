import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import SecondaryButton from "./buttons/SecondaryButton";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="p-4 sm:p-6 bg-darkmode_black mt-20">
      <div className="flex flex-col justify-between lg:flex-row gap-10 lg:gap-0">
        <a href="/">
          <img
            src={process.env.PUBLIC_URL + "/LogoText.svg"}
            className="mr-3 h-12"
            alt="Ragnarock Logo"
          />
        </a>
        <Link to="/shop"><SecondaryButton
          caption="Get your tickets now"
        ></SecondaryButton></Link>
        <div className="flex">
          <AiFillFacebook
            className="text-white h-10 w-auto hover:fill-accent_yellow cursor-pointer"
            alt="Facebook logo"
          />
          <AiFillInstagram
            className="text-white h-10 w-auto hover:fill-accent_yellow cursor-pointer"
            alt="Instagram logo"
          />
        </div>
      </div>


    <div className='flex md:justify-end mt-6 sm:justify-start'>
    </div>
    <hr className="my-6 border-darkmode_black8 sm:mx-auto lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between my-6">
        <span className="text-sm text-darkmode_black8 sm:text-center">© 2022 George Nicolae, Simon Gisler & Tomine Ødegård.</span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://github.com/siangi/CPHRT_FooFest"
            className="text-darkmode_black8 hover:text-accent_yellow"
          >
            <AiFillGithub className="w-5 h-5 hover:fill-accent_yellow cursor-poiner" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
