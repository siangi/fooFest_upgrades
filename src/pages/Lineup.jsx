import { AllBandsContext } from "../App";
import LineupCard from "../components/LineupCard";
import React, { useState, useRef } from "react";
import H1 from "../components/typography/H1";
import H2 from "../components/typography/H2";
import P from "../components/typography/P";

function WrapperBig({ bandObj }) {
  return (
    <div className="col-span-1 row-span-1 sm:col-span-2 sm:row-span-2  h-full w-full flex flex-col gap-3">
      <LineupCard bandObj={bandObj} />
    </div>
  );
}

function WrapperTall({ bandObj }) {
  return (
    <div className="row-span-1 col-span-1 sm:row-span-2 h-full w-full flex flex-col gap-3">
      <LineupCard bandObj={bandObj} />
    </div>
  );
}

function WrapperSmall({ bandObj }) {
  return (
    <div className="h-full w-full flex flex-col gap-3">
      <LineupCard bandObj={bandObj} />
    </div>
  );
}

export const BandContext = React.createContext();

function Lineup() {
  const allBands = React.useContext(AllBandsContext);
  const [stageFilter, setStageFilter] = useState("all");
  const [genreFilter, setGenreFilter] = useState("all");

  const stageFilterSelect = useRef(null);
  const genreFilterSelect = useRef(null);

  return (
    <>
      <H1>Full line-up</H1>
      <h2 className="text-4xl text-white font-displayFont mb-6">
        Who are you the most exited to see?
      </h2>
      <div className="grid grid-cols-1 gap-14 mb-10 lg:grid-cols-2">
        <div className="grid gap-5">
          <P className="text-white">
            Are you ready for Ragnarock? From August 8th to August 14th we are
            serving you the line-up of your dreams, spread out on our three main
            stages; Jotunheim, Vanaheim, and Midgard.
          </P>
        </div>
        <div className="flex flex-col">
          <H2 classModifiers="text-accent_red">Nirvana?</H2>
          <H2 classModifiers="text-accent_yellow">The rolling stones?</H2>
          <H2 classModifiers="text-accent_blue">Guns N' Roses?</H2>
        </div>
      </div>

      <section className="flex gap-4 my-8 md:max-w-[90%] lg:max-w-5xl xl:max-w-6xl mx-auto">
        <select
          className="form-select w-fit bg-darkmode_black8 border-none text-shade_darker_white font-bodyFont focus:ring-accent_yellow focus:ring-2"
          name="stage-filter"
          ref={stageFilterSelect}
          onChange={() => {
            setStageFilter(stageFilterSelect.current.value);
          }}
        >
          <option value="all">All stages</option>
          <option value="Vanaheim">Vanaheim</option>
          <option value="Jotunheim">Jotunheim</option>
          <option value="Midgard">Midgard</option>
        </select>

        <select
          className="form-select w-fit bg-darkmode_black8 border-none text-shade_darker_white font-bodyFont focus:ring-accent_yellow focus:ring-2"
          name="genre-filter"
          ref={genreFilterSelect}
          onChange={() => {
            setGenreFilter(genreFilterSelect.current.value);
          }}
        >
          <option value="all">All genres</option>
          <option value="Rock">Rock</option>
          <option value="Jazz">Jazz</option>
          <option value="Hip Hop">Hip Hop</option>
          <option value="Pop">Pop</option>
        </select>
      </section>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 auto-rows-auto  md:grid-cols-4 max-w-[90%]   md:max-w-[90%]  lg:max-w-5xl xl:max-w-6xl mx-auto">
        {allBands
          .filter((band) =>
            stageFilter === "all" ? band.stage : band.stage === stageFilter
          )
          .filter((band) =>
            genreFilter === "all" ? band.genre : band.genre === genreFilter
          )
          .map((band, index) => (
            <BandContext.Provider key={index} value={band}>
              {index % 7 === 0 ? (
                <WrapperBig bandObj={band} />
              ) : index % 5 === 0 ? (
                <WrapperTall bandObj={band} />
              ) : (
                <WrapperSmall bandObj={band} />
              )}
            </BandContext.Provider>
          ))}
      </section>
    </>
  );
}

export default Lineup;
