import { React } from 'react'
import H2 from '../typography/H2';
import H4 from '../typography/H4';
import P from '../typography/P';

export default function VisualTicket(props) {
    return (
        <>
        <div className='border border-white grid grid-cols-2 p-6 mb-4 w-full lg:w-fit h-full gap-4 lg:gap-0'>
            <div className='flex flex-col'>
                <P classModifiers="text-white">Ticket type:</P>
                <H2>{props.value.type}</H2>
            </div>
            <div>
                <H4 classModifiers="text-white font-bold">{props.value.firstname} {props.value.lastname}</H4>
                <P classModifiers="text-white">{props.value.address}</P>
                <P classModifiers="text-white">{props.value.zip} {props.value.city}</P>
                <P classModifiers="text-white">{props.value.email}</P>
                <P classModifiers="text-white">{props.value.phone}</P>
            </div>
        </div>
      </>
    );
  }

// TO DO: replace border-color with dynamic data after creating ticket.type
//   <div className={`${persons.ticket.type === "regular" ? "border-accent_yellow" : persons.ticket.type === "vip" ? "border-white" : null}`}>
//   </div>    