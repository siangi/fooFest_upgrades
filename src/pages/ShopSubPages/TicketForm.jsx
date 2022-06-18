import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../contexts/ShopContext';
import { useNavigate } from "react-router-dom"
import OptionCard from '../../components/optionCards/OptionCard';
import PrimaryButton from "../../components/buttons/PrimaryButton";
import ErrorP from '../../components/typography/ErrorP';
import H2 from '../../components/typography/H2';

function TicketForm() {
  let navigate = useNavigate();
  const {shopData, setShopData } = useContext(ShopContext);
  const ticketOptions = shopData.tickets;
  const [formValid, setFormValid] = useState(true);
  const [checkOnChange, setcheckOnChange] = useState(false);

  function updateAmount(id, newAmount){
    const toUpdate = ticketOptions.find((ticket) => ticket.id === id);
    if(toUpdate !== undefined){
      toUpdate.amount = newAmount;
      // console.log("set amount " + newAmount + " on " + toUpdate.title + "is now" + toUpdate.amount)

      if(checkOnChange){
        validate();
      }
    }
  }

  function validate(){
    const totalAmountOfTickets = ticketOptions.reduce((previous, current) => {return previous + current.amount}, 0);
    setFormValid(totalAmountOfTickets > 0);
    return totalAmountOfTickets > 0;
  }

  function submit(event){
    event.preventDefault();
    setcheckOnChange(true);

    if (validate()){
      setShopData((oldData) => {
        let newData = {...oldData};
        newData.tickets = ticketOptions;
        return newData;
      });
  
      navigate("../tents")
    }     
  }

  useEffect(() => {
    setShopData((oldData) => {
        let newData = {...oldData};
        newData.activeStep = 0;
        return newData;
    });
  }, [setShopData]);

  return (
    <>
    <H2 classModifiers="mb-10">Step 1: Choose your ticket(s)</H2>
    <form className='h-full lg:flex-auto flex flex-col gap-3 items-end'>
        {ticketOptions.map((ticket, index) => {
          return (<OptionCard key={ticket.id} {...ticket} price={ticket.price + " Kr."} initialAmount={ticket.amount} updateAmount={(newAmount) => updateAmount(ticket.id, newAmount)} reversed={index % 2 === 0} imageAsBackground={false}></OptionCard>)
        })}¨
        <div className='flex flex-row justify-start gap-3'>
          {formValid ? null : <ErrorP>Select at least one ticket!</ErrorP>}
          <PrimaryButton caption="Confirm" action={submit} type="submit"></PrimaryButton>          
        </div>
    </form>
  </>
  )
}

export default TicketForm