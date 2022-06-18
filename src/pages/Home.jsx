import React from 'react'
import H4 from '../components/typography/H4';
import { AllBandsContext } from '../App';

export default function Home() {
  const allBands = React.useContext(AllBandsContext);
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "LogoText.svg"} alt="white Ragnarock logo with yellow rune"/>
      <div className='flex text-center items-center gap-6 mt-12'>
        <div className='bg-white h-1 w-1/3'></div>
        <H4 classModifiers="text-white">Join us in Copenhagen</H4>
      </div>

      <div className='flex text-center items-center gap-6 my-12'>
        <div className='bg-white h-1 w-1/5'></div>
          <H4 classModifiers="text-white">August 8th - 14th 2022</H4>
      </div>

      <div className='flex my-20 gap-7 md:gap-10 lg:gap-12 justify-between overflow-x-hidden'>
        <img src={process.env.PUBLIC_URL + "/runes/midgard.svg"} alt="rune symbolizing midgard" className="h-12 "/>
        <img src={process.env.PUBLIC_URL + "/runes/vanaheim.svg"} alt="rune symbolizing vanaheim" className="h-12 "/>
        <img src={process.env.PUBLIC_URL + "/runes/jotunheim.svg"} alt="rune symbolizing jotnheim" className="h-12 "/>
        <img src={process.env.PUBLIC_URL + "/runes/alfheim.svg"} alt="rune symbolizing alfheim" className="h-12 "/>
        <img src={process.env.PUBLIC_URL + "/runes/muspelheim.svg"} alt="rune symbolizing muspelheim" className="h-12 "/>
        <img src={process.env.PUBLIC_URL + "/runes/nilfheim.svg"} alt="rune symbolizing nilfheim" className="h-12 "/>
        <img src={process.env.PUBLIC_URL + "/runes/svartheim.svg"} alt="rune symbolizing svartheim" className="h-12 "/>
        <img src={process.env.PUBLIC_URL + "/runes/vanaheim.svg"} alt="rune symbolizing vanaheim" className="h-12 "/>
        <img src={process.env.PUBLIC_URL + "/runes/jotunheim.svg"} alt="rune symbolizing jotunheim" className="h-12 "/>
        <img src={process.env.PUBLIC_URL + "/runes/midgard.svg"} alt="rune symbolizing midgard" className="h-12 "/>
        <img src={process.env.PUBLIC_URL + "/runes/alfheim.svg"} alt="rune symbolizing alfheim" className="h-12 "/>
        <img src={process.env.PUBLIC_URL + "/runes/muspelheim.svg"} alt="rune symbolizing muspelheim" className="h-12 "/>
      </div>

    {allBands.length>0 ?
    <>
    <div className="h-full w-full grid grid-cols-3 gap-5 my-5">
          <img
           className="h-full w-full object-cover"
            src={allBands[2].logo}
            alt={`${allBands[2].name} band logo`}
          />
          <img
           className="h-full w-full object-cover"
            src={allBands[13].logo}
            alt={`${allBands[13].name} band logo`}
          />
          <img
           className="h-full w-full object-cover"
            src={allBands[11].logo}
            alt={`${allBands[11].name} band logo`}
          />
      </div>
      <div className="h-full w-full grid grid-cols-2 gap-5">
          <img
           className="h-full w-full object-cover"
            src={allBands[10].logo}
            alt={`${allBands[10].name} band logo`}
          />
          <img
           className="h-full w-full object-cover"
            src={allBands[9].logo}
            alt={`${allBands[9].name} band logo`}
          />
      </div> </> : null }
    </div>
  );
}