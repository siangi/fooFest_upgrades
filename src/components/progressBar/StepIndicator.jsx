import React from 'react';
import {useNavigate} from "react-router-dom";

function StepIndicator(props) {
  const navigate = useNavigate();
  function tryNavigate(){
    if(props.validator === null || props.validator()){
        navigate(props.url);
    }
  }
  return (
    <div onClick={tryNavigate}className={`h-12 w-12 md:h-16 md:w-16 rounded-full flex justify-center items-center ${props.active? "bg-accent_yellow" :"bg-darkmode_black5"}`}>
            <img src={props.iconPath} alt={`form step ${props.label}`} 
            className="h-3/4 w-3/4"/>
    </div>
  )
}

export default StepIndicator