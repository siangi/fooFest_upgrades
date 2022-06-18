import React from 'react';
import { useNavigate } from 'react-router-dom';
import H2 from '../components/typography/H2';
import H3 from "../components/typography/H3";
import PrimaryButton from '../components/buttons/PrimaryButton';
import P from '../components/typography/P'

function Confirmation() {
    const navigate = useNavigate();
  return (
    <div className='w-full h-full flex flex-col gap-4 items-center'>
        <H2 classModifiers="text-accent_yellow">You're going to Ragnarok!</H2>
        <div className='bg-darkmode_black2 w-full md:w-2/3 lg:w-1/3 h-fit flex flex-col items-center text-shade_darker_white text-center'>
            <img src={process.env.PUBLIC_URL + "/icons/rockOnHand.svg"} className="w-1/2 h-auto" alt="rockhand symbol"></img>
            <H3>Sale confirmed.</H3>
            <P>Confirmation Emails and tickets have been sent to the E-Mails you submitted to the personal Info</P>
        </div>
        <PrimaryButton caption="see the Schedule" action={() => navigate("/schedule")}></PrimaryButton>
    </div>
  )
}

export default Confirmation