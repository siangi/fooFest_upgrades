import React, { useState } from "react";
import { AllBandsContext } from "../App";
import LineupCard from "./LineupCard";
import H2 from "./typography/H2";
import sortingTimes from "../utils/sorting";

export default function ScheduleDayCard({ day, cardIndex, index }) {
  const allBands = React.useContext(AllBandsContext);
  const [stageFilter, setStageFilter] = useState("Midgard");

  return (
    <article className={`${cardIndex !== index && "hidden"} lg:block`}>
      <H2 classModifiers={`hidden lg:block font-bodyFont`}>{day}</H2>

      <div className="flex flex-col xl:flex-row xl:gap-0 gap-5">
        <div className="flex xl:flex-col justify-between sm:justify-evenly">
          <input
            className="hidden peer"
            checked={stageFilter === "Midgard" ? true : false}
            type="radio"
            name={`stage-${day}`}
            id={`Midgard-${day}`}
            value={`Midgard-${day}`}
            onChange={() => setStageFilter("Midgard")}
          />
          <label
            className={`cursor-pointer bg-darkmode_black2 p-2 w-fit ${
              stageFilter === "Midgard" &&
              "border-2 border-accent_red xl:border-r-0"
            }`}
            htmlFor={`Midgard-${day}`}
          >
            <img
              src={process.env.PUBLIC_URL + "midgard.svg"}
              alt="Midgard stage"
              className="w-12 sm:w-16 md:w-16 lg:w-20 mb-[-0.8rem] svg-accent_red"
            />
          </label>

          <input
            className="hidden peer"
            checked={stageFilter === "Jotunheim" ? true : false}
            type="radio"
            name={`stage-${day}`}
            id={`Jotunheim-${day}`}
            value={`Jotunheim-${day}`}
            onChange={() => setStageFilter("Jotunheim")}
          />
          <label
            className={`cursor-pointer bg-darkmode_black2 p-2 w-fit ${
              stageFilter === "Jotunheim" &&
              "border-2 border-accent_yellow xl:border-r-0"
            } `}
            htmlFor={`Jotunheim-${day}`}
          >
            <img
              src={process.env.PUBLIC_URL + "jotunheim.svg"}
              alt="Midgard stage"
              className="w-12 sm:w-16 md:w-16 lg:w-20 mb-[-0.7rem] svg-accent_yellow"
            />
          </label>

          <input
            className="hidden peer"
            checked={stageFilter === "Vanaheim" ? true : false}
            type="radio"
            name={`stage-${day}`}
            id={`Vanaheim-${day}`}
            value={`Vanaheim-${day}`}
            onChange={() => setStageFilter("Vanaheim")}
          />
          <label
            className={`cursor-pointer bg-darkmode_black2 p-2 w-fit ${
              stageFilter === "Vanaheim" &&
              "border-2 border-accent_blue xl:border-r-0"
            } `}
            htmlFor={`Vanaheim-${day}`}
          >
            <img
              src={process.env.PUBLIC_URL + "vanaheim.svg"}
              alt="Vanaheim stage"
              className="w-12 sm:w-16 md:w-16 lg:w-20 mb-[-0.6rem] svg-accent_blue"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-5 w-full">
          {allBands
            .filter((band) => band.day === day && band.stage === stageFilter)
            .sort(sortingTimes)
            .map((band) => (
              <div key={band.name} className="h-60">
                <LineupCard time={true} bandObj={band} />
              </div>
            ))}
        </div>
      </div>
    </article>
  );
}
