import React from 'react';
import CheckBox from '../../components/inputs/CheckBox';
import H4 from "../typography/H4";
import H3 from "../typography/H3";
import P from "../typography/P";

// a card that uses all space available
function CheckboxCard(props) {
  return (
    <div className='grid grid-cols-1 grid-rows-1 p-8 bg-darkmode_black2'>
      <div className={`h-fit w-full p-4 bg-accent_yellow`}>
        <H4>Be a part of the green change</H4>
          <H3>Add green camping</H3>
        <div className='grid grid-cols-2 grid-rows-2'>
          <H3 classModifiers="leading-none mb-3 col-start-1 row-start-2">{props.price}</H3>
          <img src={props.imagePath} alt="" className={`col-start-2 row-start-1 row-end-2 w-12 h-12 justify-self-end`}></img>
        </div>
        
        <P  classModifiers={"text-darkmode_black"}>{props.description}</P>
        <CheckBox onChange={props.setValue} value={props.value} labelText="Add green camping" name="main" id="main"></CheckBox>
      </div>
    </div>
  )
}

export default CheckboxCard