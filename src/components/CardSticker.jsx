import React from "react";

export default function CardSticker({ bandObj, time }) {
  return (
    <figcaption
      className={`${
        bandObj.color === "accent_red"
          ? "bg-accent_red"
          : bandObj.color === "accent_blue"
          ? "bg-accent_blue"
          : "bg-accent_yellow"
      } drop-shadow-lg leading-7 text-lg lg:text-xl text-left row-start-0 col-start-0 row-start-1 col-start-1 self-end justify-self-start mb-5 pl-1 ${
        !time ? "pr-10 min-w-[8rem] max-w-[90%]" : "pr-3  w-full"
      } py-1.5 font-bodyFont flex`}
    >
      <img
        src={process.env.PUBLIC_URL + bandObj.runeUrl}
        alt={bandObj.stage}
        className="w-7 mb-[-0.4rem]"
      />
      <p className="text-black flex flex-col w-full">
        {bandObj.name}
        {time && (
          <span className="text-sm text-[1.1rem] text-right">
            {" "}
            Time: {bandObj.start}
          </span>
        )}
      </p>
    </figcaption>
  );
}
