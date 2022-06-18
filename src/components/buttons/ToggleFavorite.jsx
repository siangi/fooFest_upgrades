import React from "react";
import Heart from "../Heart";
import HeartFull from "../HeartFull";

export default function ToggleFavorite({ setAllBands, bandObj, fav }) {
  const changeFav = (name) => {
    setAllBands((prev) =>
      prev.map((band) => {
        if (band.name === name) {
          const newBand = { ...band, favorite: !band.favorite };
          return newBand;
        }
        return band;
      })
    );
  };

  return (
    <button
      style={fav && { margin: "0" }}
      className={`flex items-center gap-4 mt-auto ${
        fav ? "w-full justify-between" : "ml-auto"
      } px-3 py-2 bg-white text-black`}
      onClick={() => changeFav(bandObj.name)}
    >
      {bandObj.favorite ? (
        <>
          Remove from favorites <HeartFull />
        </>
      ) : (
        <>
          Add to favorites <Heart />
        </>
      )}
    </button>
  );
}
