import React, { useState, useEffect } from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import { Link } from "react-router-dom";


export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleLinkClicked(state) {
    setIsNavOpen(state.isNavOpen);
  };

  const [isDesktop, setDesktop] = useState(window.innerWidth > 950);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 950);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {isDesktop ? (
        // DESKTOP NAVIGATION
        <nav className="flex justify-between px-8 py-8 items-center">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/LogoText.svg"}
              alt=""
              className="w-52 h-full row-start-1 col-start-1 col-span-4 self-center justify-self-center"
            />
          </Link>
          <div className="flex gap-12">
            <Link
              className="text-white font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow2 self-center"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-white font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow2 self-center"
              to="/lineup"
            >
              Line-up
            </Link>
            <Link
              className="text-white font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow2 self-center"
              to="/schedule"
            >
              Schedule
            </Link>
            <Link
              className="text-white font-bodyFont font-semibold text-lg tracking-wide hover:text-accent_yellow2 flex self-center gap-3"
              to="/favorites"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#E19F54" className="self-center bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg> Your favorites
            </Link>
            <Link to="/shop"><PrimaryButton
              caption="Get tickets"></PrimaryButton></Link>
          </div>
        </nav>
      ) : (
        // BURGERMENU
        <nav className="bg-darkmode_black ">
          <div
            className="space-y-2  px-8 py-8"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
          </div>

          <div className={isNavOpen ? "showBurgerMenu" : "hideBurgerMenu"}>
            <div
              className="absolute top-0 left-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="grid grid-cols-1 gap-x-6">
              <li className="m-8 font-bodyFont font-semibold text-lg tracking-wide">
                <Link onClick = {handleLinkClicked} to="/" className="self-center">Home</Link>
              </li>
              <li className="m-8 font-bodyFont font-semibold text-lg tracking-wide">
                <Link onClick = {handleLinkClicked} to="/shop" className="self-center">Buy tickets</Link>
              </li>
              <li className="m-8 font-bodyFont font-semibold text-lg tracking-wide">
                <Link onClick = {handleLinkClicked} to="/schedule" className="self-center">Schedule</Link>
              </li>
              <li className="m-8 font-bodyFont font-semibold text-lg tracking-wide">
                <Link onClick = {handleLinkClicked} to="/lineup" className="self-center">Line-up</Link>
              </li>
              <li className="m-8 font-bodyFont font-semibold text-lg tracking-wide">
                <Link onClick = {handleLinkClicked} to="/favorites" className="flex self-center gap-3">
                  Your favorites <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#E19F54" className="self-center bi bi-star-fill " viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg></Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}