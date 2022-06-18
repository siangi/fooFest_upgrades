import React from 'react'

function CheckBox(props) {
  return (
    <label htmlFor={props.name} className="font-bold font-bodyFont">
          <input type="checkbox" name={props.name} id={props.id} checked={props.value} onChange={(event) => props.onChange(event.target.checked)}
            className=" bg-inherit border-darkmode_black border-2 mr-2 accent-black checked:bg-darkmode_black checked:hover:bg-darkmode_black checked:focus:bg-darkmode_black active:bg-darkmode_black focus:ring-darkmode_black2 focus:ring-offset-transparent"></input>
          {props.labelText}
    </label>
  )
}

export default CheckBox