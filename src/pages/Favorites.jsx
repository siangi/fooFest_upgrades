import React, { useState, useEffect } from "react";
import H1 from "../components/typography/H1";
import P from "../components/typography/P";
import FavoriteCol from "../components/favoritesComponents/FavoriteCol";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import { IconContext } from "react-icons";

export const BandContext = React.createContext();

export default function Favorites() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [colIndex, setColIndex] = useState(0);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  });

  return (
    <>
      <H1>Favorites</H1>
      <div className="flex gap-5 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="white"
          className="self-center bi bi-star-fill "
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <h2 className="text-4xl text-white font-displayFont">
          {" "}
          Personalised schedule
        </h2>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-28 mb-10">
        <P>
          Ragnarock is the biggest rock festival in Europe - which is the
          equivalent of{" "}
          <span className="text-accent_yellow font-bold">
            the line-up of your dreams
          </span>
          . This means a lot of{" "}
          <span className="font-bold text-accent_yellow">
            bucket list concerts
          </span>
          , but also a lot of timeslots for you to remember. We want to make
          your life easier - so all you have to do is to enjoy!
        </P>
        <P>
          We are therefor allowing you to create your very own{" "}
          <span className="text-accent_yellow font-bold">
            ride or die personalised schedule!
          </span>{" "}
          Add a star to your favorite bands, and in your very own
          favorites-schedule you will find all the information you need; when,
          where and who.
        </P>
      </div>
      <section className="grid grid-cols-4 justify-items-center sm:flex gap-10 items-baseline justify-center">
        <IconContext.Provider value={{ size: 45, color: "white" }}>
          <button
            className={`${
              colIndex === 0 && "invisible"
            } row-start-1 row-end-2 col-start-1 col-end-2 z-10`}
          >
            <HiOutlineArrowNarrowLeft
              onClick={() => setColIndex((prev) => prev - 1)}
            />
          </button>

          {days
            .slice(
              colIndex,
              screenWidth > 1000
                ? colIndex + 3
                : screenWidth < 800
                ? colIndex + 1
                : colIndex + 2
            )
            .map((day, index) => (
              <FavoriteCol key={index} day={day} />
            ))}

          <button
            className={`${
              (colIndex === 4 || colIndex === 5 || colIndex === 6) &&
              screenWidth > 1000
                ? "invisible"
                : (colIndex === 5 || colIndex === 6) &&
                  screenWidth > 800 &&
                  screenWidth < 1000
                ? "invisible"
                : colIndex === 6 && screenWidth < 800
                ? "invisible"
                : ""
            } row-start-1 row-end-2 col-start-4 col-end-5 z-10 justify-self-end`}
          >
            <HiOutlineArrowNarrowRight
              onClick={() => setColIndex((prev) => prev + 1)}
            />
          </button>
        </IconContext.Provider>
      </section>
    </>
  );
}
