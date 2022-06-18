import { useState } from "react";
import ScheduleDayCard from "../components/ScheduleDayCard";
import H1  from "../components/typography/H1";
import H2 from "../components/typography/H2";
import P from "../components/typography/P";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

function Schedule() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [cardIndex, setCardIndex] = useState(0);

  return (
    <>
    <H1>Schedule</H1>
    <h2 className="text-4xl text-white font-displayFont mb-6" >Are you ready?</h2>
    <P classModifiers="max-w-lg mb-20">7 days of Ragnarock - are you ready? Click the stage-symbols or navigate through the days to see who is playing where and when. Remember to add bands to your favorites, for your very own personalised schedule.</P>
    <section className="flex flex-col lg:gap-28">
      <div className="flex justify-between lg:hidden mb-16">
        <button
          className={`${cardIndex === 0 && "invisible"} text-white`}
          onClick={() => setCardIndex((prev) => prev - 1)}
          disabled={cardIndex === 0 && true}
        >
          <HiOutlineArrowNarrowLeft size="2rem" />
        </button>

        <H2>{days[cardIndex]}</H2>
        <button
          className={`${cardIndex === 6 && "invisible"} text-white`}
          onClick={() => setCardIndex((prev) => prev + 1)}
          disabled={cardIndex === 6 && true}
        >
          <HiOutlineArrowNarrowRight size="2rem" />
        </button>
      </div>

      {days.map((day, index) => (
        <ScheduleDayCard
          key={index}
          day={day}
          index={index}
          cardIndex={cardIndex}
        />
      ))}
    </section>
    </>
  );
}

export default Schedule;
