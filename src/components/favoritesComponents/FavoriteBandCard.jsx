import React from "react";
import { useState } from "react";
import H4 from "../typography/H4";
import P from "../typography/P";
import FavoriteCollapse from "./FavoriteCollapse";

export default function FavoriteBandCard(props) {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <article
      className={`${
        props.bandObj.color === "accent_red"
          ? "bg-accent_red"
          : props.bandObj.color === "accent_blue"
          ? "bg-accent_blue"
          : "bg-accent_yellow"
      } h-fit w-full mb-5 text-left`}
    >
      <button
        className="time_and_band ml-0 flex items-center  p-3 "
        onClick={() => setIsCollapseOpen((prev) => !prev)}
      >
        <div className="w-[80%] text-left">
          <P classModifiers="text-black">
            {props.bandObj.start} - {props.bandObj.end}
          </P>
          <H4>{props.bandObj.name}</H4>
        </div>

        <img
          src={process.env.PUBLIC_URL + props.bandObj.runeUrl}
          alt={props.bandObj.stage}
          className="h-full w-[20%]"
        />
      </button>

      <FavoriteCollapse
        bandObj={props.bandObj}
        isCollapseOpen={isCollapseOpen}
        setIsCollapseOpen={setIsCollapseOpen}
      ></FavoriteCollapse>
    </article>
  );
}
