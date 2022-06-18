import { BsSpotify } from "react-icons/bs";
import P from "../typography/P";
import ToggleFavorite from "../buttons/ToggleFavorite";
import { SetAllBandsContext } from "../../App";
import React from "react";

export default function FavoriteCollapse({ isCollapseOpen, bandObj }) {
  const setAllBands = React.useContext(SetAllBandsContext);

  const spotifyUrls = [
    {
      name: "Queen",
      link: "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d?si=iLbaiUXXR_qRl7qpJ5PXVQ",
    },

    {
      name: "A Perfect Circle",
      link: "https://open.spotify.com/artist/4DFhHyjvGYa9wxdHUjtDkc?si=FmCjWf46TiGKcP_HbdIpcw",
    },

    {
      name: "Tool",
      link: "https://open.spotify.com/artist/2yEwvVSSSUkcLeSTNyHKh8?si=WJB4cqZfSvGrjXpJB4w2mA",
    },

    {
      name: "Terminalist",
      link: "https://open.spotify.com/artist/5N4HmRQloswgMMTnnIHQmQ?si=GQa0u1cjTZ6W6bO9ZzBSUQ",
    },

    {
      name: "Led Zeppelin",
      link: "https://open.spotify.com/artist/36QJpDe2go2KgaRleHCDTp?si=Eyh8bqOkQc2o9wEJ86g8aA",
    },

    {
      name: "The Beatles",
      link: "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2?si=1NH7PmfkS7GmP4g99C8A8A",
    },

    {
      name: "Pink Floyd",
      link: "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9?si=8fIaWzhOQhCycnpTmdnmTA",
    },

    {
      name: "AC/DC",
      link: "https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un?si=X38H_gxHT4q86FTNR2UUpA",
    },

    {
      name: "Metallica",
      link: "https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB?si=i5FrWEKOSkCh3gxCo5LgSg",
    },

    {
      name: "The Rolling Stones",
      link: "https://open.spotify.com/artist/22bE4uQ6baNwSHPVcDxLCe?si=Ijknax2MRD6gGnB2nXWDMA",
    },

    {
      name: "Black Sabbath",
      link: "https://open.spotify.com/artist/22bE4uQ6baNwSHPVcDxLCe?si=Ijknax2MRD6gGnB2nXWDMA",
    },

    {
      name: "Guns N' Roses",
      link: "https://open.spotify.com/artist/3qm84nBOXUEQ2vnTfUTTFC?si=ICun66x6R-qG4FatExts_g",
    },

    {
      name: "Nirvana",
      link: "https://open.spotify.com/artist/6olE6TJLqED3rqDCT0FyPh?si=hobJDKiGRgmnUoORMTX9fw",
    },

    {
      name: "The Who",
      link: "https://open.spotify.com/artist/67ea9eGLXYMsO2eYQRui3w?si=Ymr0d5qQR7-t6j8SFbIqVQ",
    },

    {
      name: "Raised Fist",
      link: "https://open.spotify.com/artist/7ik758oYwkKmQtbZtAdOOm?si=CZ_M7pyXSWODlEVJnMrbpg",
    },

    {
      name: "Refused",
      link: "https://open.spotify.com/artist/5sdxGvwxI1TkTA6Pu2jnTb?si=_hBpoul3Tl6Ul1X-qOtKvQ",
    },
  ];

  return (
    isCollapseOpen && (
      <div className="p-3 pt-0 ">
        <div
          className={`${
            bandObj.color === "accent_red"
              ? "bg-accent_red"
              : bandObj.color === "accent_blue"
              ? "bg-accent_blue"
              : "bg-accent_yellow"
          } h-full w-full mt-2 space-y-2  mb-4`}
        >
          <P classModifiers="text-black">
            <strong>Stage: </strong>
            {bandObj.stage}
          </P>
          <P classModifiers="text-black">
            <strong>Genre: </strong>
            {bandObj.genre}
          </P>
          <P classModifiers="text-black">
            <strong>Members: </strong>
            {bandObj.members.join(", ")}
          </P>
          <strong>
            {spotifyUrls.map(
              (band) =>
                band.name === bandObj.name && (
                  <a
                    key={bandObj.name}
                    href={band.link}
                    rel="noreferrer"
                    target="_blank"
                    className="flex justify-between mt-6"
                  >
                    Listen on Spotify
                    <BsSpotify color="black" size="1.5rem" />
                  </a>
                )
            )}
          </strong>
        </div>

        <ToggleFavorite
          setAllBands={setAllBands}
          bandObj={bandObj}
          fav={true}
        />
      </div>
    )
  );
}
