import React from "react";
import H2 from "../typography/H2";
import P from "../typography/P";
import { AllBandsContext } from "../../App";
import FavoriteBandCard from "./FavoriteBandCard";
import sortingTimes from "../../utils/sorting";

export default function FavoriteCol({ day }) {
  const allBands = React.useContext(AllBandsContext);

  return (
    <article
      className={`row-start-1 row-end-2 col-start-1 col-end-5 flex flex-col items-center w-full xs:w-[20rem]`}
    >
      <H2>{day}</H2>

      <div>
        {allBands.filter((band) => band.day === day && band.favorite).length >
        0 ? (
          allBands
            .filter((band) => band.day === day && band.favorite)
            .sort(sortingTimes)
            .map((band, index) => (
              <FavoriteBandCard key={index} bandObj={band} />
            ))
        ) : (
          <P classModifiers="p-3">No favorite bands on this day</P>
        )}
      </div>
    </article>
  );
}
