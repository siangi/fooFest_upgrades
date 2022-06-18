import React from 'react';
import { HiOutlineLockClosed } from "react-icons/hi";
import { IconContext } from 'react-icons/lib';

function PayNowButton(props) {
  return (
    <IconContext.Provider value={{className: "align-middle h-5 w-5 mr-2"}}>
      <button 
      className='w-fit h-fit box-border bg-shade_darker_white 
      font-bodyFont text-darkmode_black tracking-wider 
      px-6 py-1 uppercase justify-end flex flex-row' 
      onClick={props.action}>
          <HiOutlineLockClosed></HiOutlineLockClosed> Pay Now!
      </button>
    </IconContext.Provider>
  )
}

export default PayNowButton