import React from 'react';
import H4 from "../typography/H4";
import H3 from "../typography/H3";
import P from "../typography/P";
import NumberStepper from '../inputs/NumberStepper';

function OptionCard(props) {
  return (
    <div className={`min-h-full md:min-h-fit w-full md:w-7/12 flex-auto grid grid-cols-3 md:grid-cols-2 grid-rows-1 ${props.reversed? "self-start": "self-end"}`}>
      <div className={`h-5/6 w-full col-start-1 row-start-1 col-end-4 md:col-end-3 self-center justify-self-center relative z-0 bg-darkmode_black2`}></div>
      {props.imageAsBackground ?
        <div className={`${props.reversed? "col-start-3 md:col-start-2": "col-start-1"} row-start-1 self-center justify-self-center w-4/6 h-4/6 relative z-1 bg-center bg-cover bg-no-repeat`} style={{backgroundImage: "url(" + props.imagePath + ")"}}></div>
        : <img src={props.imagePath} alt="" className={`${props.reversed? "col-start-3 md:col-start-2": "col-start-1"} row-start-1 self-center justify-self-center w-5/6 h-5/6 relative z-1 `}></img>
      }
      <div className={`${props.reversed? "col-start-1 col-end-3 md:col-end-2": "col-start-2 col-end-4 md:col-end-3"}  row-start-1 self-center justify-self-center h-fit w-full md:w-5/6 relative z-1 p-4 bg-accent_yellow`}>
        <H4>{props.title}</H4>
        <H3 classModifiers="leading-none mb-3">{props.price}</H3>
        <P classModifiers={"text-darkmode_black"}>{props.description}</P>
        <div className='flex flex-row justify-end'>
          <NumberStepper name="amount" initialVal={props.initialAmount? props.initialAmount : 0} updateAmount={props.updateAmount}></NumberStepper>
        </div>
      </div>
    </div>
  )
}

export default OptionCard