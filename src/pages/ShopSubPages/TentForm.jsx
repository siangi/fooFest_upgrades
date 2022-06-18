import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../contexts/ShopContext';
import OptionCard from '../../components/optionCards/OptionCard'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import SecondaryButton from '../../components/buttons/SecondaryButton';
import P from '../../components/typography/P';
import H4 from '../../components/typography/H4';
import H2 from '../../components/typography/H2';
import ErrorP from '../../components/typography/ErrorP';

function TentForm() {
    const {shopData, setShopData} = useContext(ShopContext);
    let navigate = useNavigate();
    let amountOfTickets = shopData.tickets.reduce((previousValue, currentValue) => {return previousValue + currentValue.amount}, 0);
    const tentOptions = shopData.tents;
    const [formValid, setFormValid] = useState(true);
    const [checkOnChange, setcheckOnChange] = useState(false);

    useEffect(() => {
        setShopData((oldData) => {
            let newData = {...oldData};
            newData.activeStep = 1;
            return newData;
        });
    }, [setShopData]);
    

    function calculateTentSuggestion(amountOfPeople){
        let leftoverPeople = amountOfPeople;
        tentOptions.sort((a, b) => {
            return a.amountOfPeople > b.amountOfPeople
        });

        tentOptions.forEach((tentOption, index) => {
            if(index < tentOptions.length - 1){
                tentOption.amountOfTents = Math.floor(leftoverPeople / tentOption.spaceForPeople);
                leftoverPeople = leftoverPeople % tentOption.spaceForPeople;
            } else {
                // if it is the smalles tent option, we have to fit everyone left.,
                tentOption.amountOfTents = Math.ceil(leftoverPeople / tentOption.spaceForPeople);
                leftoverPeople = 0;
            }            
        })
    }

    function getAmountOfSpace(){
        let availableSpace = 0;
        tentOptions.forEach((tentOption) => {
            availableSpace += tentOption.amountOfTents * tentOption.spaceForPeople;
        });
        return availableSpace;
    }

    function checkTentValidity(){
        let isValid = getAmountOfSpace() >= amountOfTickets
        setFormValid(isValid);
        return isValid;
    }

    function noTents(){
        setShopData((oldData) => {
            let newData = {...oldData};
            newData.tents = [];
            return newData;
        })
        navigate("../campground");
    }

    function submitTentForm(event){
        event.preventDefault();
        setcheckOnChange(true);
        if(checkTentValidity()){
            setShopData((oldData) => {
                let newData = {...oldData};
                newData.tents = tentOptions;
                return newData;
            });
            navigate("../campground");
        }
    }

    function updateAmount(id, newAmount){
        const toUpdate = tentOptions.find((tent) => tent.id === id);
        if(toUpdate !== undefined){
          toUpdate.amountOfTents = newAmount;
          if(checkOnChange){
              checkTentValidity();
          }
        }
    }
    calculateTentSuggestion(amountOfTickets);
    
    return (
        <>
        <H4 classModifiers="text-white">Step 2:</H4>
        <H2 classModifiers="mb-10">Choose tent(s)</H2>
        <form className='h-full lg:flex-auto flex flex-col gap-3'>
            <div className=' border border-accent_yellow p-6 mb-10'>
                <H4 classModifiers="text-shade_darker_white font-bold mb-4">You have booked tickets for {amountOfTickets} person/people.</H4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <P>At Ragnarock, it is mandatory to have a tent to sleep in - this counts for all campgrounds. We are happy to offer you the option to rent a tent - either a tent for two or three people.</P>
                    <P>If you choose the to rent a tent from Ragnarock, you can leave all your tent-related stress at home - we will build it for you! <span className='text-accent_yellow'>The important thing everyone has a designated spot in their own tent.</span></P>
                </div>
            </div>
                {tentOptions.map((tentOption, index) => {
                    return (<OptionCard 
                        key={tentOption.id} 
                        {...tentOption} 
                        price={tentOption.price + " Kr."}
                        reversed={index % 2 === 0} imageAsBackground={true} 
                        updateAmount={(newAmount) => updateAmount(tentOption.id, newAmount)} 
                        initialAmount={tentOption.amountOfTents}>
                        </OptionCard>)
                })}
                <div className='flex flex-row gap-4 justify-end'>
                    {formValid? null : <ErrorP>Your currently only have space for {getAmountOfSpace()} out of {amountOfTickets} People!</ErrorP>}
                    <SecondaryButton caption="Bring own Tents" action={noTents}></SecondaryButton>
                    <PrimaryButton caption="Confirm Selection" action={submitTentForm}></PrimaryButton>
                </div>
        </form>
        </>
  )
}

export default TentForm