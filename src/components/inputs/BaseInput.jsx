import {React, useState} from 'react';
import ErrorP from "../typography/ErrorP";

function BaseInput(props) {
  const [isValid, setIsValid] = useState(true)
  function handleBlur(event){
    setIsValid(event.target.checkValidity());
  }
  function handleOnInvalid(){
    if(isValid){
      setIsValid(false);
    }
  }
  return (
    <div className='my-3 w-full'>
      <div className='flex flex-row gap-4'>
        <label htmlFor={props.id} className="text-shade_darker_white font-bodyFont">
          {props.label}
        </label>
        {!isValid ? <ErrorP>{props.errormessage}</ErrorP> : null}
        
      </div>
      <input onInvalid={handleOnInvalid} 
        onBlur={handleBlur} 
        defaultValue={props.initialValue} 
        type={props.type? props.type :"text"} 
        name={props.name} 
        id={props.id} 
        required={props.required}
        pattern={props.pattern}
        className="w-full bg-darkmode_black8 border-none text-shade_darker_white font-bodyFont focus:ring-accent_yellow focus:ring-2"></input>
    </div>
  )
}

export default BaseInput