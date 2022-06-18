import React from 'react'

function RadioButton(props) {
  return (
    <div>
      <input 
        type="radio" 
        id={props.id} 
        name={props.groupName}
        className="peer hidden md:inline-block relative z-10 bg-darkmode_black border-shade_darker_white border-0 checked:bg-accent_yellow active:bg-accent_yellow focus:bg-accent_yellow checked:focus:bg-accent_yellow focus:ring-accent_yellow focus:ring-offset-transparent focus:ring-0"
        onChange={props.onChange}
        checked={props.checked}>      
        </input>
      <label htmlFor={props.id} className="md:relative md:z-0 md:ml-[-0.5rem] box-border font-bodyFont font-bold w-fit h-fit p-3 md:pl-5 bg-darkmode_black2 peer-checked:bg-darkmode_black6">
          {props.label}
      </label>
    </div>
  )
}

export default RadioButton