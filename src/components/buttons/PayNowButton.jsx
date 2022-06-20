import React, { useState } from 'react';
import { HiOutlineLockClosed } from "react-icons/hi";
import { IconContext } from 'react-icons/lib';
import ErrorP from '../typography/ErrorP';

function PayNowButton(props) {
  const [errorMessage, setErrorMessage] = useState("");
  async function tryPay(event){
    const result = await props.action(event);
    setErrorMessage(result);
  }
  return (
    <IconContext.Provider value={{className: "align-middle h-5 w-5 mr-2"}}>
      <button 
      className='w-fit h-fit box-border bg-shade_darker_white 
      font-bodyFont text-darkmode_black tracking-wider 
      px-6 py-1 uppercase justify-end flex flex-row' 
      onClick={tryPay}>
          <HiOutlineLockClosed></HiOutlineLockClosed> Pay Now!
      </button>
      <ErrorP>{errorMessage}</ErrorP>
    </IconContext.Provider>
  )
}

export default PayNowButton