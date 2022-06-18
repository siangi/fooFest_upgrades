import { SetAllBandsContext } from "../App";
import H2 from "../components/typography/H2";
import H4 from "../components/typography/H4";
import P from "./typography/P";
import React, { useState, useRef, useEffect } from "react";
import ToggleFavorite from "./buttons/ToggleFavorite";

function useOutsideAlerter(ref, setModalOpen) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setModalOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setModalOpen]);
}

export default function Modal({ modalOpen, setModalOpen, bandObj }) {
  const setAllBands = React.useContext(SetAllBandsContext);

  const [isReadMore, setIsReadMore] = useState(true);
  const modal = useRef(null);

  useOutsideAlerter(modal, setModalOpen);

  return modalOpen ? (
    <section className="fixed w-full h-full overflow-auto bg-[rgba(0,0,0,0.4)] inset-0 z-20">
      <div
        ref={modal}
        className="px-6  pt-4 pb-10 bg-darkmode_black2 text-white mx-auto my-[5%] w-[80%] grid  lg:grid-cols-2 gap-6 animate-fade-in"
      >
        <span
          className="lg:col-span-2 justify-self-end text-4xl leading-3 hover:cursor-pointer"
          onClick={() => setModalOpen(false)}
        >
          &times;
        </span>

        <img
          src={bandObj.logo}
          alt={
            bandObj.logoCredits
              ? `Image of ${bandObj.name} ${bandObj.logoCredits}`
              : `Logo of ${bandObj.name}`
          }
          title={
            bandObj.logoCredits
              ? `Image of ${bandObj.name} ${bandObj.logoCredits}`
              : `Logo of ${bandObj.name}`
          }
          className="object-cover justify-self-center w-[415px] h-[277px]"
        />

        <div className="flex flex-col">
          <H2>{bandObj.name}</H2>
          <H4 className="text-xl font-bodyFont flex">
            Stage:
            <span
              className={`${
                bandObj.color === "accent_red"
                  ? "text-accent_red"
                  : bandObj.color === "accent_blue"
                  ? "text-accent_blue"
                  : "text-accent_yellow"
              } flex`}
            >
              <img
                src={process.env.PUBLIC_URL + bandObj.runeUrl}
                alt={bandObj.stage}
                className={`w-7 mb-[-0.4rem] ${
                  bandObj.color === "accent_red"
                    ? "svg-accent_red"
                    : bandObj.color === "accent_blue"
                    ? "svg-accent_blue"
                    : "svg-accent_yellow"
                }`}
              />
              {bandObj.stage}
            </span>
          </H4>
          <H4>
            Time: {bandObj.day}, {bandObj.start} - {bandObj.end}
          </H4>

          <H4>Genre: {bandObj.genre}</H4>

          <P classModifiers="my-6">
            {isReadMore
              ? bandObj.bio.slice(
                  0,
                  bandObj.bio.indexOf(".", bandObj.bio.indexOf(".") + 2)
                )
              : bandObj.bio}

            {bandObj.bio.split(".").length > 3 ? (
              <span
                className="cursor-pointer text-accent_yellow"
                onClick={() => setIsReadMore(!isReadMore)}
              >
                {isReadMore ? " ...read more" : " show less"}
              </span>
            ) : null}
          </P>

          <ToggleFavorite setAllBands={setAllBands} bandObj={bandObj} />
        </div>
      </div>
    </section>
  ) : null;
}
