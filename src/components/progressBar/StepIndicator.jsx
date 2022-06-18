import React from 'react';
import { Link } from 'react-router-dom';

function StepIndicator(props) {
  return (
    <Link to={props.url}>
      <div className={`h-12 w-12 md:h-16 md:w-16 rounded-full flex justify-center items-center ${props.active? "bg-accent_yellow" :"bg-darkmode_black5"}`}>
              <img src={props.iconPath} alt={`form step ${props.label}`} 
              className="h-3/4 w-3/4"/>
      </div>
    </Link>
  )
}

export default StepIndicator